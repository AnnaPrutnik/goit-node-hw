const { readFile } = require("./readFile");

const listContacts = async () => {
  try {
    const contacts = await readFile();
    return contacts;
  } catch (error) {
    console.log(error);
  }
};

module.exports = listContacts;
