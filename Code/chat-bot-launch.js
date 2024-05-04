import {TwitchTokenDetails} from "./TwitchTokenDetails.ts";

export class TwitchChatBot {

    tmi = require('tmi.js');

    public twitchClient: any;
    private tokenDetails!: TwitchTokenDetails;

    constructor(private config: ChatBotConfig) { }

    async launch() {
        this.tokenDetails = await this.fetchAccessToken();
        this.twitchClient = new this.tmi.Client(
            this.buildConnectionConfig(
                this.config.twitchChannel,
                this.config.twitchUser,
                this.tokenDetails.access_token)
        );
        this.setupBotBehavior();
        this.twitchClient.connect();
    }
}