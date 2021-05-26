var axios = require('axios');

const BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAAOA7PwEAAAAA6gR69wxmFTK8z%2FILoJjsNbcCwAg%3DFsbHaiv7zcxphvukupDJRHc5TMLV0Fldo7zWM6OcI4np6houXO";
const BASE_URL = "https://api.twitter.com/1.1";

function topTrends(req) {
    const { id } = req.query;
    const URL = `${BASE_URL}/trends/place.json?id=${id}`;

    return axios.get(URL, {
        headers: {
            'Authorization': 'Bearer ' + BEARER_TOKEN
        }
    });
}

module.exports = {
    topTrends
}