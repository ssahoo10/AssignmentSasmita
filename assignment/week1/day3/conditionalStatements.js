// `launchBrowser` with `if-else` for browser launch

function  launchBrowser() {
let browserName = "chrome"
if (browserName==="chrom") {
    console.log("Launching " +browserName+ " browser"); 
} 

else
  console.log("otherwise");
      
}
launchBrowser()


//`runTests` with `switch` for test type messages.

function runTests() {
    let testType = "smoke"
    switch (testType) 
    {
        case "sanity":
          console.log("Executing " +testType+ " Test: verifying specific bug fix");
        break;

        case "smoke":
        console.log("Executing " +testType+ " Test: verifying critical functionality");
        break;

        case "regression":
        console.log("Executing " +testType+ " Test");
        break;

        default:
        console.log("No specific test type provided, default smoke test executed");
        break;
    }
}
runTests()

