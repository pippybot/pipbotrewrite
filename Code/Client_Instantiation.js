tmi = (tmi.js);
public twitchClient: any;
this.twitchClient = new this.tmi.Client(
            this.buildConnectionConfig(
                this.config.twitchChannel,
                this.config.twitchUser,
                this.tokenDetails.access_token)
        );

private buildConnectionConfig(channel: string; username: string; accessToken: string);
{
        return {
            options: { debug: true },
            connection: {
                secure: true,
                reconnect: true
            },
            identity: {
                username: `${Pipbot}`,
                password: `oauth:${mluisxuvu1uefsttak8v5iizel7i5i}`
            },
            channels: [`${Wethan}`, `${Official__Piplin}`]
        };
    }
