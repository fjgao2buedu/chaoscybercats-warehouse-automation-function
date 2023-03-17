const { ResourceManagementClient } = require("@azure/arm-resources");
const { DefaultAzureCredential } = require("@azure/identity");

const client = new ResourceManagementClient(new DefaultAzureCredential());


module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();

    "az functionapp function keys set -n chaoscybercats-warehouse-automation-function --function-name HttpTrigger1 --key-name default"
    
    if (myTimer.isPastDue)
    {
        context.log('JavaScript is running late!');
    }
    context.log('JavaScript timer trigger function ran!', timeStamp);   
};