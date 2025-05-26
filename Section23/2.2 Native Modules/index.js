const fs = require('fs');

// fs.writeFile("message.txt", "Hello from NodeJS", (err) => {
//     if(err) throw err;
//     console.log("The file was created successfully!");
// });

fs.readFile('message.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("Asynchronous read:", data);
});