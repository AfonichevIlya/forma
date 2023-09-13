const node2 = document.querySelector("[type='submit']");
node2.addEventListener("click", form);

const form1 = document.querySelector("form");

const node3 = document.getElementById("delete");
node3.addEventListener("click", delet);

function delet() {
  setTimeout(() => {
    let div4 = document.createElement("div");
    document.body.appendChild(div4);
    div4.id = "info_delete";
    div4.textContent = "Форма очищена";
  }, 100);
  setTimeout(() => {
    let elem4 = document.getElementById("info_delete");
    elem4.parentNode.removeChild(elem4);
  }, 2500);
  let elem = document.getElementById("info");
  elem.parentNode.removeChild(elem);
  let elem2 = document.getElementById("info_back");
  elem2.parentNode.removeChild(elem2);

  return false;
}
function form(event) {
  event.preventDefault();

  let div = document.createElement("div");
  document.body.appendChild(div);
  div.id = "info";

  let div2 = document.createElement("div");
  document.body.appendChild(div2);
  div2.id = "info_back";

  let but = document.createElement("button");
  document.body.appendChild(but);
  but.id = "close_button";
  but.textContent = "Закрыть";
  but.style.fontFamily = "lol";
  but.style.fontSize = "10px";
  but.style.marginTop = "5%";

  let closB = document.getElementById("close_button");
  closB.addEventListener("click", close);

  function close() {
    let elem = document.getElementById("info");
    elem.parentNode.removeChild(elem);

    let elem2 = document.getElementById("info_back");
    elem2.parentNode.removeChild(elem2);

    let elem3 = document.getElementById("close_button");
    elem3.parentNode.removeChild(elem3);
    form1.style.zIndex = "1";

    return false;
  }
  form1.style.zIndex = "-1";
  let result = [
    "Имя пользователя: " +
      form1.name1.value +
      "<br>" +
      "Фамилия пользователя: " +
      form1.last_name.value +
      "<br>" +
      "Почта: " +
      form1.email.value +
      "<br>" +
      "Номер пользователя: " +
      form1.num.value +
      "<br>" +
      "Пароль пользователя: " +
      form1.psw.value +
      "<br>" +
      "Пол пользователя: " +
      form1.gen.value +
      "<br>" +
      "Сообщение пользователя: " +
      form1.mes.value +
      "<br>",
  ];
  let arr = [
    form1.checkbox1,
    form1.checkbox2,
    form1.checkbox3,
    form1.checkbox4,
    form1.checkbox5,
  ];

  if (
    arr[0].checked +
      arr[1].checked +
      arr[2].checked +
      arr[3].checked +
      arr[4].checked ==
    false
  ) {
    result.push();
  } else {
    result.push("Положительные стороны: ");
  }
  if (form1.checkbox1.checked === true) {
    result.push(" " + "<li>" + arr[0].value);
  }

  if (form1.checkbox2.checked == true) {
    result.push(" " + "<li>" + arr[1].value);
  }
  if (form1.checkbox3.checked == true) {
    result.push(" " + "<li>" + arr[2].value);
  }
  if (form1.checkbox4.checked == true) {
    result.push(" " + "<li>" + arr[3].value);
  }
  if (form1.checkbox5.checked == true) {
    result.push(" " + "<li>" + arr[4].value);
  }
  document.getElementById("info").innerHTML = result.join(` `);
}
