let x = prompt("Ingrese el indice de lista del contacto al que desea acceder");

let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];

let showContact = (lc, ni, callback) => (!Array.isArray(lc) || ni < 0 || ni >= lc.length) ? console.log("El índice especificado está fuera de los límites o la lista de contactos no es un array válido.") : imprimir(lc[ni]);

let showAllContacts = (lc, callback) => (!Array.isArray(lc)) ? null : lc.forEach(cont => imprimir(cont));

let addNewContact = (lc, nameN, phoneN, emailN, callback) => {
    if (!Array.isArray(lc) || nameN === null || phoneN === null || emailN === null) {
        return null;
    }else{
        lc.push ({
            name: nameN,
            phone: phoneN,
            email: emailN
        });
        imprimir(lc[lc.length - 1]);
    }
}

let imprimir = function(contacts){
    console.log(`${contacts.name} / ${contacts.phone} / ${contacts.email}`);
}


showContact(contacts, x, imprimir);

showAllContacts(contacts, imprimir);

addNewContact(contacts, "Maria Tovar", "0400 2356", "marstovi@convallis.edu", imprimir);

