function getShortMessages(messages){
    const result = messages.filter((item) => {
        return item.message.length < 50;
    }).map((item) => {
        return item.message;
    })
    console.log(messages);
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(result);
    return result;
}


getShortMessages([
    {message: "(We don't need no more trouble)"},
    {message: "Make love and not war! 'Cause we don't need no trouble."},
    {message: "We don't need - we don't need - no more trouble!"},
    {message: "We don't (need) - no, brothers and sisters ... (no more trouble!)"},
    {message: "We don't need no trouble; we don't need no trouble!"}
])





module.exports = getShortMessages;


