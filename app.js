import fetch from "node-fetch";

const url = "https://polls-ts0t.onrender.com";

function keepAlive() {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        console.log(`Ping successful: ${response.status}`);
      } else {
        console.error(`Ping failed: ${response.status}`);
      }
    })
    .catch((error) => {
      console.error(`Error pinging the URL: ${error.message}`);
    });
}

// Ping every 14 minutes
setInterval(keepAlive, 14 * 60 * 1000);

// Run the first ping immediately
keepAlive();
