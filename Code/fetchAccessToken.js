private async fetchAccessToken(): Promise<TwitchTokenDetails> {
    const axios = require('axios');
    console.log("Fetching Twitch OAuth Token");
    return axios({
        method: 'post',
        url: this.config.twitchTokenEndpoint,
        params: {
            client_id: this.config.twitchClientId,
            client_secret: this.config.twitchClientSecret,
            code: this.config.twitchAuthorizationCode,
            grant_type: 'authorization_code',
            redirect_uri: 'http://localhost'

        },
        responseType: 'json'
    }).then(async function (response: any) {
        // handle success
        return await TwitchTokenResponseValidator.parseResponse(response.data);
    }).catch(function (error: any) {
        console.log("Failed to get Twitch OAuth Token");
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            throw new TwitchResponseError(error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            throw new NoTwitchResponseError(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            throw new MalformedTwitchRequestError(error.request);
        }
    })
