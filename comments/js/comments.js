//создаю область для комментария
let div = document.createElement("div");
let comTitle = document.createElement("h3");
let comTxtarea = document.createElement("textarea");
let comP = document.createElement("p");
let comBtn = document.createElement("button");
let p = document.createElement("p");

//задаю атрибуты
comTxtarea.setAttribute("name", "send_comment")
comTxtarea.setAttribute("cols", "55");
comTxtarea.setAttribute("cols", "55");
comTxtarea.setAttribute("rows", "10");
comTxtarea.setAttribute("placeholder", "Оставить комментарий...");
comBtn.setAttribute("id", "send_comment");
comBtn.setAttribute("name", "submit_btn");
comBtn.setAttribute("value", "some-value");
comBtn.setAttribute("type", "submit");

//добавляю на страницу область комментария
comTitle.appendChild(document.createTextNode("Оставить комментарий"));
comBtn.appendChild(document.createTextNode("Комментировать"));
comP.appendChild(comBtn);
p.appendChild(document.createTextNode("Комментарии:"))
console.log(comTxtarea.getAttribute('placeholder'));

div.appendChild(comTitle);
div.appendChild(comTxtarea);
div.appendChild(comP);
let comDiv = document.getElementById('comments');
comDiv.appendChild(div);
comDiv.appendChild(p);

//повесить обработчик события на кнопку
let sendBtn = document.getElementById("send_comment");
sendBtn.addEventListener('click', showComment);
console.log(comTxtarea);

function showComment() {
	if (!comTxtarea.value) {
		return;
	}
	let avatar = document.createElement("img");
	let author = document.createElement("span");
	let nowDate = document.createElement("span");
	let comment = document.createElement("p");
	let comContainer = document.createElement("div");
	let date = new Date();
	
	avatar.setAttribute("src", "img/avatar.jpg");
	avatar.style.height = "120px";

	author.appendChild(document.createTextNode("Anna: "));
	nowDate.appendChild(document.createTextNode(date));
	comment.appendChild(document.createTextNode(comTxtarea.value)); //взять данные из textarea

	comContainer.appendChild(avatar);
	comContainer.appendChild(author);
	comContainer.appendChild(nowDate);
	comContainer.appendChild(comment);

	console.log(comContainer);

	//comDiv.appendChild(comContainer);
	comDiv.insertBefore(comContainer, p.nextSibling);
	
	 //очистить поле textarea
	 if (comTxtarea.value) {
	 	comTxtarea.value = "";
	 	comTxtarea.getAttribute('placeholder');
	 	console.log(comTxtarea);
	 }
}











