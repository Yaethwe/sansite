const bt = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsgvwW4N3jCpbvE0Lzb7E0KwCYiBUQ5W03BbYoEOS9AYBss7k4HMQ0sqdq-HIRGRuY82k&usqp=CAU";
const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWJugnnPbaV749iNXusJYvcWgRRSJrC9Ua8btqnxZcQ-h-pf5xnJYIQk-lBuBgM4X4tsg&usqp=CAU";
const girl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4eYDRkAQhPg5IKgma7Y-QVdvu6pwxugmfCAXaD5pXOvG7vUIFOJ4m7hYxBwgBExlVbt0&usqp=CAU";
const members = [
{
	name:"Yeaethwe",
	birthYear: 2007,
	gender:"male",
	hobbies:["Reading Books", "Making Projects with Html,Css & JavaScript", "Play Minecraft"],
	working:true,
	photo: img
},
{
	name:"NyanKaungSet",
	birthYear: 2007,
	gender:"male",
	hobbies:["unown"],
	working:true,
	photo: img
},
{
	name:"ShinKhantNaing",
	birthYear: 2009,
	gender:"male",
	hobbies:["unown"],
	working:false,
	photo: img
},
{
	name:"SanSan",
	birthYear: 2015,
	gender:"female",
	hobbies:["He love his brother."],
	working:false,
	photo: girl
},
{
	name:"Myat Oo Zay",
	birthYear: 2016,
	gender:"male",
	hobbies:["He love his brother."],
	working:false,
	photo: img
}
];


function age(birthYear) {
  let calculatedAge = new Date().getFullYear() - birthYear;
  if (calculatedAge == 1) {
    return "1 year old";
  } else if (calculatedAge == 0) {
    return "Baby";
  } else {
    return `${calculatedAge} years old`;
  }
}

function work(x) {
	if (x == true) {
		return "Working Member"
	} else {
		return "Not Working Member"
	}
}

function hobbies(hobbies) {
  return `
<h4>Hobbies</h4>
<ul class="foods-list">
${hobbies.map(hobbies => `<li>${hobbies}</li>`).join("")}
</ul>
`;
}

function getTemplate(get) {
  return `
    <div class="member">
    <img class="get-photo" src="${get.photo}">
    <h2 class="get-name">${get.name} <span class="species">(${get.gender})</span></h2>
    <p><strong>Age:</strong> ${age(get.birthYear)}</p>
    ${get.hobbies ? hobbies(get.hobbies) : ""}
	<p>${work(get.working)}</p>
    </div>
  `;
}

document.getElementById("app").innerHTML = `
  <h1 class="app-title">There are ${members.length} members in our group.</h1>
  ${members.map(getTemplate).join("")}
  <p class="footer">These ${members.length} members were added recently. Check back soon for updates.</p>
`;
