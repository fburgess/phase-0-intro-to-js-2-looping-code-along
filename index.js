// Code your solutions in this file
function writeCards(list, description) {
    let messages = [];

    list.forEach((item) => {
        messages.push(`Thank you, ${item}, for the wonderful ${description} gift!`)
    });

    return messages;
}

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}