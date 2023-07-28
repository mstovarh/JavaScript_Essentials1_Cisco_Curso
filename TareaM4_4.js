let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];

let c = prompt("¿Qué contacto quiere ver?: Maxwell, Raja, Helen") 

switch (c) {
    case "Maxwell":
        alert(contacts[0].name + " / " + contacts[0].phone + " / " + contacts[0].email);
        break;
    case "Raja":
        alert(contacts[1].name + " / " + contacts[1].phone + " / " + contacts[1].email);
        break;
    case "Helen":
        alert(contacts[2].name + " / " + contacts[2].phone + " / " + contacts[2].email);
        break;
    default:
        alert("No existe el contacto");
}