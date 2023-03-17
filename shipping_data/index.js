module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    // const shipperid = req.query.shipperid


    var documents = context.bindings.shippingData;

    
    for (var i = 0; i < documents.length; i++) {
        var document = documents[i];
        // operate on each document
        context.log(document)
    }

    // const name = (req.query.name || (req.body || req.body.name));
    // context.log(name)

    // const responseMessage = name
    //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
    
    // const response = await queryContainer(shipperid);

    context.log("response end")
    // context.log(connectionString)
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: documents
    };
}


