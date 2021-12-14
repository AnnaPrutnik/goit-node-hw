const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const contactsPath = path.join(__dirname, "..", "..", "db", "contacts.json");

const readFile = async () => {
  try {
    const contacts = await fs
      .readFile(contactsPath, "utf8")
      .then((res) => JSON.parse(res));
    return contacts;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { readFile, contactsPath };
