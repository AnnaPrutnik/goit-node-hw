const argv = require("yargs").argv;
const colors = require("colors");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case "get":
      const contact = await getContactById(id);
      contact
        ? console.log(
            colors.cyan(
              `With ID ${id} found next contact: name ${contact.name}, email ${contact.email}, phone ${contact.phone}`
            )
          )
        : console.log(colors.red(`Contact with ID ${id} not found`));

      break;

    case "add":
      const newContact = await addContact(name, email, phone);
      console.log(
        colors.cyan(
          `Success! Add contact: name ${newContact.name}, email ${newContact.email}, phone ${newContact.phone}`
        )
      );
      break;

    case "remove":
      const deleteContact = await removeContact(id);
      deleteContact
        ? console.log(
            colors.cyan(
              `Success! Contact was delete: name ${deleteContact.name}, email ${deleteContact.email}, phone ${deleteContact.phone}`
            )
          )
        : console.log(colors.red(`Contact with ID ${id} not found`));

      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
