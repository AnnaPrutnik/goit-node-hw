const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const contactsPath = path.join(__dirname, "db", "contacts.json");

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

const listContacts = async () => {
  try {
    const contacts = await readFile();
    return contacts;
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await readFile();
    const contact = contacts.find(
      (contact) => String(contact.id) === String(contactId)
    );
    return contact;
  } catch (error) {
    console.log(error);
  }
};

const removeContact = async (contactId) => {
  try {
    const contacts = await readFile();
    let deleteContact = null;
    const newContacts = contacts.filter((contact) => {
      if (String(contact.id) !== String(contactId)) {
        return true;
      }
      deleteContact = contact;
      return false;
    });

    fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2));
    return deleteContact;
  } catch (error) {
    console.log(error);
  }
};

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

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
