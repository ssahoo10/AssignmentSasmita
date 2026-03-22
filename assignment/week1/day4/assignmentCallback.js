// Declare a global variable
let browser = "Chrome";

// Create the function that accepts a callback
function checkBrowserVersion(callback) {
    console.log("Fetching browser data..");

    // Use setTimeout to simulate a 2-second delay
    setTimeout(() => {
        // After 2 seconds, invoke the callback with the browser variable
        callback(browser);
    }, 2000);
}

// Write the callback function
function logBrowser(version) {
    console.log("Browser version is : " + version);
}

// Call the function and pass the callback
checkBrowserVersion(logBrowser);
