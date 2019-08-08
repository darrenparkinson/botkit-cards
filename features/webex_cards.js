const samplecards = require('../libs/sample_cards');

module.exports = function (controller) {

    controller.hears('help', 'message,direct_message', async (bot, message) => {
        await bot.reply(message, { markdown: helpmarkdown });
    });

    controller.hears(async (message) => message.text && samples.includes(message.text.toLowerCase()), ['message', 'direct_message'], async (bot, message) => {

        await bot.reply(message, {
            text: "cards not supported on this platform yet",
            attachments: samplecards[message.text.toLowerCase()]
        });
    });

    controller.on('attachmentActions', async (bot, message) => {
        let markdown = "Thanks.  Received:  \n```\n" + JSON.stringify(message.value) + "\n```\n"
        await bot.reply(message, { markdown: markdown });
    });

    const samples = [
        "activityupdate",
        "agenda",
        "calendarreminder",
        "expensereport",
        "flightdetails",
        "flightitinerary",
        "flightupdate",
        "foodorder",
        "imagegallery",
        "inputform",
        "inputs",
        "restaurant",
        "sportingevent",
        "stockupdate",
        "weathercompact",
        "weatherlarge",
    ]

    const helpmarkdown = `
## Samples 

Use the following commands to see the samples from [adaptivecards.io](https://adaptivecards.io/samples/):  

* ${samples.join("  \n* ")}
`
}
