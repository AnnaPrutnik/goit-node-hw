const fs = require("fs/promises");
const { readFile, contactsPath } = require("./readFile");

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

module.exports = removeContact;
