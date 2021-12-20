const bt = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsgvwW4N3jCpbvE0Lzb7E0KwCYiBUQ5W03BbYoEOS9AYBss7k4HMQ0sqdq-HIRGRuY82k&usqp=CAU";
const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhuS370SIIOZUXg9WCwuiV7JefY4JkyUNPOg&usqp=CAU";
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
	name:"CMP M1911|A1",
	prise: 75000,
	type:"United States Pistol",
	aboutItm:["This is a Fake gun.", "You can't shoot it because it's a photo"],
	count:0,
	photo: img,
    itemId:"002"
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
