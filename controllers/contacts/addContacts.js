const crypto = require("crypto");
const fs = require("fs/promises");
const { readFile, contactsPath } = require("./readFile");

const addContact = async (name, email, phone) => {
  const id = crypto.randomBytes(4).toString("hex");
  const newContact = {
    id,
    name: String(name),
    email: String(email),
    phone: String(phone),
  };
  try {
    const contacts = await readFile();
    contacts.push(newContact);
    fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    console.log(error);
  }
};

module.exports = addContact;
