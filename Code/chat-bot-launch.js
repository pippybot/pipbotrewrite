import { TwitchTokenDetails } from './Code/TwitchTokenDetails.js'; // Adjusted the file path location for the token details
import { fetchAccessToken } from './Code/Code/fetchAccessToken.js'; // Added the file path location to fetch the Access Token
import tmi from 'tmi.js'; // Imported isntead of requiring TypeScript compatibility
import axios from 'axios';
import { ChatBotConfig } from './Code/config-validator.js'; // Added the file path for the ChatBotConfiguration

export class TwitchChatBot {
    public twitchClient: tmi.Client; // Using the tmi.Client type for reduction of bugs and documentation
    private tokenDetails!: TwitchTokenDetails;

    constructor(private config: ChatBotConfig) { } // Ensures that ChatBotConfig is imported or defined

    async launch() {
        try {
            this.tokenDetails = await this.fetchAccessToken(); // Ensures that fetchAccessToken returns TwitchTokenDetails
            this.twitchClient = new this.tmi.Client(
                this.buildConnectionConfig(
                    this.config.twitchChannel,
                    this.config.twitchUser,
                    this.tokenDetails.access_token
                )
            );
            this.setupBotBehavior();
            await this.twitchClient.connect(); // Using await function for error handling
    }

 // Ensuring the connectionConfig and setupBotBehavior methods are defined
    private buildConnectionConfig(channel: string, user: string, token: string) { // Ensuring the method is only accessible in TwitchChatBot
        return {
            identity: {
                username: user,
                password: `oauth:${token}` // Make sure to prefix the token with 'oauth:'
            },
            channels: [channel]
        };
    }

    private setupBotBehavior() {
        // Setup bot behavior here
    }
}
Key 
