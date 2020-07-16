/*========= Feet to Mile Covert=========== */

var feet = 1232566;

function feetToMile(feet) {
    var mile = .000189 * feet; // as 1 Feet = .000189 Mile
    return mile;
}

console.log("Mile = " + feetToMile(feet).toFixed(3));










/*========= Number of Wood Calculation =============*/


var chair = 15;
var table = 5;
var bed = 3;

function woodCalculator(chair, table, bed) {
    var total = 1 * chair + 3 * table + 5 * bed;
    return total;
}

console.log("You need total " + woodCalculator(chair, table, bed) + " Cubic Wood");












/*======= Number of Brick  Calculation ========= */


var numOfFloors = 47;

function brickCalculator(floor) {
    if (floor <= 10) var noOfBricks = floor * 15 * 1000;
    else if (floor <= 20) var noOfBricks = (10 * 15 * 1000) + ((floor - 10) * 12 * 10000);
    else if (floor > 20) var noOfBricks = (10 * 15 * 1000) + (10 * 12 * 1000) + ((floor - 20) * 10 * 1000);

    return noOfBricks;
}

console.log("You Need " + brickCalculator(numOfFloors) + " Bricks");








/*==============Find the name of Tiny Friend====================*/

var nameOfFriends = ["Shamima", "Imamul", "Shahoria", "Nahid", "Saiful", "Fahad", "Suman", "Faria", "Tasin", "Ria", "Nishi", "Orin"];
var tinyName = "";
var minLength = 99999; //Name should not be more than 99999 character.

function tinyFriend(nameOfFriends) {
    for (var i = 0; i < nameOfFriends.length; i++) {
        var len = nameOfFriends[i].length;

        if (len < minLength) {
            minLength = len;
            tinyName = nameOfFriends[i];
        }
    }
    return tinyName;
}

console.log("My tiny friend is " + tinyFriend(nameOfFriends));