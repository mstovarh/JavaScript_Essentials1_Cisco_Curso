let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

function compareByName(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
}

function compareByPhone(a, b) {
    const phoneA = a.phone.toUpperCase();
    const phoneB = b.phone.toUpperCase();
    if (phoneA < phoneB) {
        return -1;
    }
    if (phoneA > phoneB) {
        return 1;
    }
    return 0;
}

function compareByEmail(a, b) {
    const emailA = a.email.toUpperCase();
    const emailB = b.email.toUpperCase();
    if (emailA < emailB) {
        return -1;
    }
    if (emailA > emailB) {
        return 1;
    }
    return 0;
}

console.log("Antes de ordenar:");
showAllContacts(contacts);

let userChoice = prompt("¿Por cuál campo deseas ordenar?\n1. Nombre\n2. Teléfono\n3. Email");

switch (userChoice) {
    case "1":
        contacts.sort(compareByName);
        break;
    case "2":
        contacts.sort(compareByPhone);
        break;
    case "3":
        contacts.sort(compareByEmail);
        break;
    default:
        console.log("Opción inválida");
}

console.log("\nDespués de ordenar:");
showAllContacts(contacts);

function showContact(contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
}

function showAllContacts(contacts) {
    if (contacts instanceof Array) {
        for (const contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
}
