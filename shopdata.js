const bt = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsgvwW4N3jCpbvE0Lzb7E0KwCYiBUQ5W03BbYoEOS9AYBss7k4HMQ0sqdq-HIRGRuY82k&usqp=CAU";
const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIu_25CAGhQiuFd4z_SvFvfIZCbkjsoGe5waJE5jyeC81C1rKHtromZEaYgnKpvST6PuQ&usqp=CAU";
const com = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI15bFpHnIx-BK8AqmopWDLS9UM8ClpfXPZPa2Egb-n87D1n5xGtA7_bvu3XPNSOVBKyw&usqp=CAU";
const items = [
{
	name:"Remax ",
	prise: 75000,
	type:"Blue tooth speaker",
	aboutItm:["This is a blue tooth speaker.", "You can use it with SD card too."],
	count:1,
	photo: bt,
    	itemId:"001"
},
{
	name:"Ubantu|Linux computer",
	prise: 1923800,
	type:"computer",
	aboutItm:["This computer is beyond my reach."],
	count:0,
	photo: img,
    	itemId:"002"
},
{
	name:"Raspberry Pi 4",
	prise: 23100,
	type:"computer",
	aboutItm:["This computer is a mini computer", "And you need a screen for visual.", "If you host a website with it you can", "This item is not for sale."],
	count:4,
	photo: com,
    	itemId:"003"
}
];



function work(x) {
	if (x == 1) {
		return "Only one left"
	} else if (x <= 0) {
		return "soldOut"
	} else {
        return x + " left"
    }
}

function getAboutItem(x) {
  return `
<h4>About this item</h4>
<ul class="foods-list">
${x.map(x => `<li>${x}</li>`).join("")}
</ul>
`;
}

function getTemplate(get) {
  return `
    <div class="member">
    <img class="get-photo" src="${get.photo}">
    <h2 class="get-name">${get.name} <span class="species">(${get.type})</span></h2>
    <p><strong>Prise</strong> ${get.prise} MMK</p>
    ${get.aboutItm ? getAboutItem(get.aboutItm) : ""}
    <span class="species">ID : (${get.itemId})</span>
	<p>${work(get.count)}</p>
    </div>
  `;
}

document.getElementById("shop").innerHTML = `
  <h1 class="app-title">There are ${items.length}items in our shop.....................................</h1>
  ${items.map(getTemplate).join("")}
  <p class="footer">These ${items.length} items were added recently. Check back soon for updates.</p>
`;
