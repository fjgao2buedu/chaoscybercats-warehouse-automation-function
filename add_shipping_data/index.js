module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    let recv = req.body;
    context.log(typeof recv);

    var recv1 = JSON.stringify(recv);
    context.log(typeof recv1);
    context.log(recv1);

    var recv2 = JSON.parse(recv1);
    context.log(typeof recv2);
    context.log(recv2);
    
    var items = recv.Received;
    context.log(typeof items);
    context.log(items);

    // for(var attributename in recv2){
    //     context.log(attributename+": "+recv2[attributename]);
    // }

    context.bindings.outputDocument = items;

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: items
    };
}