// Challenge 12
// Write a JavaScript program to create a clock.
// Note: The output will come every second.

function getTime() {
    let now = new Date();
    // let hours = now.getHours();
    // let minutes = now.getMinutes();
    // let seconds = now.getSeconds();

    return now.toLocaleTimeString('it-IT',
        {
            timeZone: 'Asia/Kolkata',
        });
}

setInterval(() => {
    console.log(`"${getTime()}"`)
}, 1000);