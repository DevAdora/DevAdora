const fs = require("fs");

const readmePath = "./README.md";
let content = fs.readFileSync(readmePath, "utf8");

// Generate new timestamp
const now = new Date().toLocaleString("en-US", {
  timeZone: "Asia/Manila",
  dateStyle: "full",
  timeStyle: "long"
});

// Replace content inside the placeholder
const updated = content.replace(
  /<span id="last-updated">.*?<\/span>/,
  `<span id="last-updated">${now}</span>`
);

fs.writeFileSync(readmePath, updated);
console.log("README updated:", now);
