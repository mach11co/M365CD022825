const { app } = require('@azure/functions');
const azure = require('azure-storage');

const connection = process.env.<YOUR CONNECTION>;

app.http('AddUserToTableStorage', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const tableService = azure.createTableService(connection);
        const tableName = "<YOUR TABLE NAME>";

        const user = await request.json().then(user => user);

        context.log("Url:", request.url);
        context.log("email: ", user.email);
        context.log("givenName: ", user.givenName);
        context.log("surName: ", user.surName);
        context.log("userMarketing: ", user.userMarketing);

        if(user.userMarketing) {
            const entity = {
                PartitionKey: "Users",
                RowKey: Date.now().toString(),
                email: user.email,
                givenName: user.givenName,
                surName: user.surName
            };
    
            tableService.insertOrReplaceEntity(tableName, entity, (error, result) => {
                const baseMessage = "User marketing preference";

                if(!error) {
                    const successMessage = `${baseMessage} written successfully`;
                    context.log(successMessage, result);

                    return { body: successMessage }
                } else {
                    const failureMessage = `${baseMessage} not written`;
                    context.log(failureMessage, error);
                    return { body: failureMessage }
                }
            });
        } else {
            const responseMessage = "User declined to store profile for marketing purposes.";
            return { body: responseMessage }
        }
    }
});
