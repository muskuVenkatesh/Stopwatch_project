// Initialize variables for hours, minutes, seconds, and the count
let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

// Initialize the timer flag as false
let timer = false;

// Function to start the stopwatch
function start() {
    timer = true;
    stopwatch();
}

// Function to stop the stopwatch
function stop() {
    timer = false;
}

// Function to reset the stopwatch
function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    // Reset the HTML elements displaying the time and count
    document.getElementById("count").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";
}

// Function to update the stopwatch time
function stopwatch() {
    if (timer == true) {
        count += 1;
        if (count == 60) {
            sec += 1;
            count = 0;
        }
        if (sec == 60) {
            min += 1;
            sec = 0;
        }
        if (min == 60) {
            hr += 1;
            min = 0;
            sec = 0;
        }

        // Convert hours, minutes, seconds, and count to strings with leading zeros if needed
        let hrString = hr;
        let minString = min;
        let secString = sec;
        let countString = count;

        if (hr < 10) {
            hrString = "0" + hrString;
        }
        if (min < 10) {
            minString = "0" + minString;
        }
        if (sec < 10) {
            secString = "0" + secString;
        }
        if (count < 10) {
            countString = "0" + countString;
        }

        // Update the HTML elements to display the time and count
        document.getElementById("count").innerHTML = countString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("hr").innerHTML = hrString;

        // Use setTimeout to repeatedly call the stopwatch function every 10 milliseconds
        setTimeout("stopwatch()", 10);
    }
}
