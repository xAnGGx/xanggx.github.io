var n = new Array();
n.push("Нарута Удзумука");
n.push("Сасука Учиха");
n.push("Сансара Ларионов");
n.push("Кирито-кун");
n.push("Дненя");
n.push("Админ");
n.push("Илья Куликовский");
var q = new Array();
q.push("Седьмой хокаге, засунет тебе свой разенган по самое некуда. В России такому бы сразу указали на его место по жизни. Постоянно орет, не может снять улитку со лба.");
q.push("Опущенный, сбежал из Конохи, потому что не мог противостоять всему стебу, который на него регулярно выливался. Идол всех эмо-боев того самого 2007 года.");
q.push("Ученик 11 &laquo;Б&raquo; класса, хороший человек, сдал ГТО (нет). Обманчивый внешний вид, поскольку при массе около 55 кг и росте 190 см он все равно годен в армию. Не ведитесь на его провокации!");
q.push("Честно сказать, вставил его только потому, что предыдущий персонаж начал себя неадекватно вести и мне нужно было как-нибудь его успокоить. Носит дорогой мерч, доволен собой.");
q.push("Шизофреник. Кто зочет стать миллионером австралия сезон 2020 (горячие кресло) тот самый выпуск где хстом был не Эдди Маггуаир а потерянная правая половина души невинно замученной Марии Киселевой со слабого звена когда она случайно посмеялась над шуткой.");
q.push("Тот самый додик, который создал эту замечательную web-страницу. Непонятно, как он это сделал, программист, наверное. Опасный боец, имеет кулак размером с голову, а голову - с телевизор.");
q.push("Балуется узкоглазыми мультиками с пеленок. Хотел уйти в тридцатку, но туда не берут людей с трехзначным IQ. Ученик Админа.");
var cur = 0;
var amount = 7;
var stage = 0, username = "", fav = "";

function GetId(n) {
	if (n < 0) n += amount;
	if (n >= amount) n -= amount;
	return n;
}

function RedrawTable() {
    var codeBlock = '<table align="center" class="main">'+
	'<tr class="image"><td><button class="side" onclick="GoLeft()"><img id="left" src="img/left.png"></button></td><td class="image_side"><img src="img/'+GetId(cur-1)+'.png"></td><td class="image"><img src="img/'+GetId(cur)+'.png"></td><td class="image_side"><img src="img/'+GetId(cur+1)+'.png"></td><td><button class="side" onclick="GoRight()"><img id="right" src="img/right.png"></button></td></tr>'+
	'<tr class="name"><td></td><td class="side">'+n[GetId(cur-1)]+'</td><td>'+n[GetId(cur)]+'</td><td class="side">'+n[GetId(cur+1)]+'</td></tr>'+
	'<tr class="desc"><td></td><td class="side_text">'+q[GetId(cur-1)]+'</td><td class="mid_text">'+q[GetId(cur)]+'</td><td class="side_text">'+q[GetId(cur+1)]+'</td></tr></table>';
	document.getElementById("chars").innerHTML = codeBlock;
}

function submit_answer() {
	var data = document.getElementsByName("ans")[0].value;
	if (stage == 0 && data != "") {
		stage = 1;
		username = data;
		RedrawAsk();
	}
	else if (stage == 1 && data != "") {
		stage = 2;
		fav = data;
		RedrawAsk();
	}
}

function RedrawAsk() {
	var askBlock;
	switch(stage)
	{
		case 0:
		askBlock = '<p class="question">Привет, как тебя зовут?</p><form><input type="text" name="ans">&nbsp;<input type="button" value="Готово" onclick="submit_answer();"></form>';
		break;
		case 1:
		askBlock = '<p class="question">Хорошо, а как называется твое любимое аниме?</p><form><input type="text" name="ans">&nbsp;<input type="button" value="Готово" onclick="submit_answer();"></form>';
		break;
		case 2:
		askBlock = '<p class="question">Тебя зовут '+username+' и тебе нравится '+fav+', не так ли?</p><button class="last" onclick="location.href=\'goblin.html\';">Все правильно!</button>';
		break;
	}
	document.getElementById("ask").innerHTML = askBlock;
}

function GoLeft() {
	cur = GetId(cur-1);
	RedrawTable(cur);
}

function GoRight() {
	cur = GetId(cur+1);
	RedrawTable(cur);
}