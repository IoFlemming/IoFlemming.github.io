/*var data = {

  "Vint Cerf":{
gender:"male"
bio:"He earned his Ph.D. from UCLA in 1972. At UCLA he worked in Professor Leonard Kleinrock's networking group that connected the first two nodes of the ARPANET and contributed to the ARPANET host-to-host protocol",
}
  "Tim Berners-Lee":{
gender:"male"
  bio: "In 1980, while working at CERN, he proposed a project using hypertext to facilitate sharing and updating information among researchers. Back at CERN in 1989 he conceived of and, in 1990, together with Robert Cailliau, created the first client and server implementations for what became the World Wide Web.",
}
  "Louis Pouzin":{
gender: "male"
  bio: "A French computer scientist. He invented the datagram and designed an early packet communications network, CYCLADES.[19] His work was broadly used by Robert Kahn, Vinton Cerf, and others in the development of TCP/IP"
}
  "Annie Easley":{
gender: "female"
  bio: "An African-American computer scientist, mathematician, and rocket scientist.[1] She worked for the Lewis Research Center of the National Aeronautics and Space Administration (NASA) and its predecessor, the National Advisory Committee for Aeronautics (NACA). She was a leading member of the team which developed software for the Centaur rocket stage and one of the first African-Americans in her field."
}
  "Ada Lovelace":{
gender: "female"
bio: "Ada Lovelace is considered to have written instructions for the first computer program in the mid-1800."
}
"Jean E. Sammet":{
gender: "female"
bio: "An American computer scientist who developed the FORMAC programming language in 1962."
}*/

$(document).ready(function() {

var mtitansofcompsci = [
"1.Vint Cerf",
"2.Tim Berners-Lee",
"3.Louis Pouzin"
]
var wtitansofcompsci = [
"4. Annie Easley",
"5. Ada Lovelace",
"6. Jean E. Sammet"]

var menbio = [
"1. He earned his Ph.D. from UCLA in 1972. At UCLA he worked in Professor Leonard Kleinrock's networking group that connected the first two nodes of the ARPANET and contributed to the ARPANET host-to-host protocol.<br/>",
"2. In 1980, while working at CERN, he proposed a project using hypertext to facilitate sharing and updating information among researchers. Back at CERN in 1989 he conceived of and, in 1990, together with Robert Cailliau, created the first client and server implementations for what became the World Wide Web.<br/>",
"3. A French computer scientist. He invented the datagram and designed an early packet communications network, CYCLADES.[19] His work was broadly used by Robert Kahn, Vinton Cerf, and others in the development of TCP/IP.",
]
var womenbio = [
"4. An African-American computer scientist, mathematician, and rocket scientist.[1] She worked for the Lewis Research Center of the National Aeronautics and Space Administration (NASA) and its predecessor, the National Advisory Committee for Aeronautics (NACA). She was a leading member of the team which developed software for the Centaur rocket stage and one of the first African-Americans in her field.<br/>",
"5. is considered to have written instructions for the first computer program in the mid-1800.<br/>",
"6. An American computer scientist who developed the FORMAC programming language in 1962."
  ]

mtitans = mtitansofcompsci.splice(0,3);
wtitans = wtitansofcompsci.splice(0,3);
biomen = menbio.splice(0,3);
biowomen = womenbio.splice(0,3);

$("#MaleCompSci").html(mtitans.join("<br>"));
$("#MaleCompSciBios").html(biomen.join("<br>"));
$("#FemaleCompSciBios").html(biowomen.join("<br>"));
$("#FemaleCompSci").html(wtitans.join("<br>"));
});
//What is Being Done
//In the above jQuery code, we are preparing our file document to accept the incoming
//jQuery code we are about to writ with "$(document).ready(function() { ".
//Then, I broke down each piece of data into three seperate var's, (var members, var menbio and var womenbio).
//Inside of both of the "titansofcompsci" var  I put the names of the Titan of Computer Science, (both male and female).
//When it comes the bio, I listed in numerical order the bios that go with their respective titansofcompsci (1 goes with 1, 2 with 2...etc).
//Next, I gave each var a "code name" so that you do not have to write out the entire var name each time use it in your code.
//"Code Name" ex. mtitans = "code name" mtitansofcompsci = var name.
//Lastly, I told my jQuery document that I wanted to connect my div tags in my HTML doc with the names I assigned them to the respective data assigned
// to their var names. <br/> or the "line break" tag is used to create an indentation after each bodytext to make what was written easier to read.
