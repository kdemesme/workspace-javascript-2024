// test object
var test = {
    fname: "kadin",
    lname: "demesme",
    age: 100,
    display: function () {
        console.log("in function");
        return fname + " " + this.lname;
    }
};
console.log(test.display());

// hotel reservation
var guestgroup = new Array();
$('#submit').click(reservation);
function reservation() {
    var guest = {
        name: $('#name').val(),
        checkin: $('#checkin').val()
        //complete this
    };
    alert(guest.name + " Reserve a Room ");
    guestgroup.push(guest);
    console.log(guestgroup);
}