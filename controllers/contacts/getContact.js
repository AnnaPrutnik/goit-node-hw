const { readFile } = require("./readFile");

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

module.exports = getContactById;
