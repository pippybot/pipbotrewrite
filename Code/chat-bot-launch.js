import { TwitchTokenDetails } from './Code/TwitchTokenDetails.js'; // Adjusted the file path location for the token details
import { fetchAccessToken } from './Code/Code/fetchAccessToken.js'; // Added the file path location to fetch the Access Token
import tmi from 'tmi.js'; // Imported isntead of requiring TypeScript compatibility

export class TwitchChatBot {
    public twitchClient: any;
    private tokenDetails!: TwitchTokenDetails;

    constructor(private config: ChatBotConfig) { } // Ensures that ChatBotConfig is imported of Defined

    async launch() {
        this.tokenDetails = await this.fetchAccessToken(); // Ensures that fetchAccessToken returns TwitchTokenDetails
        this.twitchClient = new this.tmi.Client(
            this.buildConnectionConfig(
                this.config.twitchChannel,
                this.config.twitchUser,
                this.tokenDetails.access_token
            )
        );
        this.setupBotBehavior();
        this.twitchClient.connect();
    }
    // Defining fetchAccessToken and connectionConfig methods
    export async funciton fetchAccessToken(): Promise<TwitchTokenDetails> {
        const response = await axios.post('https://id.twitch.tv/oauth2/token', {
            client_id: 'your-client-id',
            client_secret: 'your-client-secret',
            grant_type: 'client_credentials'
        });

    const { access_token, refresh_token, expires_in, scope, token_type } = response.data;

    return new TwitchTokenDetails(access_token, resfresh__token, expires_in, scope, token_type);
}
