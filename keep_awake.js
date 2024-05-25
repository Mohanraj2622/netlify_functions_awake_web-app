const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const url = "https://research-on-product-recommendation-system.onrender.com";
    try {
        const response = await fetch(url);
        if (response.ok) {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Ping successful!' }),
            };
        } else {
            return {
                statusCode: response.status,
                body: JSON.stringify({ message: 'Ping failed' }),
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Ping failed', error: error.message }),
        };
    }
};
