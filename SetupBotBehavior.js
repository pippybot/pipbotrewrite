private setupBotBehavior() {
    this.twitchClient.on('message', (channel: any, tags: any, message: any, self: any) => {
        let helloCommand = "!hello"

        // Ignore messages from itself.
        if (self) return;

        //! means a command is coming by, and we check if it matches the command we currently support
        if (message.startsWith('!') && message === helloCommand)
            this.sayHelloToUser(channel,tags);
    });
}

private sayHelloToUser(channel: any, tags: any) {
    this.twitchClient.say(channel, `Hello, ${ tags.username }! Welcome to the channel.`);
    })
}