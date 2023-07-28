let contacts = [{
  name: "Maxwell Wright",
  phone: "(0191) 719 6495",
  email: "egestas@nonummyac.co.uk"
}, {
  name: "Raja Villarreal",
  phone: "0866 398 2895",
  email: "posuere@sed.com"
}, {
  name: "Helen Richards",
  phone: "0800 1111",
  email: "libero@vallis.edu"
}];

let newName = window.prompt("¿Cuál es tu nombre?", "nombre");
let newPhone = window.prompt("¿Cuál es tu número de teléfono?", "teléfono");
let newEmail = window.prompt("¿Cuál es tu correo electrónico?", "correo electrónico");

let newContact = {
  name: newName,
  phone: newPhone,
  email: newEmail
};

contacts.push(newContact);

let last = contacts.length - 1;

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
