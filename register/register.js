import { register } from "../requests.js";

function backToLogin() {
  const btnBack = document.querySelector(".btn-back");
  const btnBackTwo = document.querySelector(".btn-voltar");

  btnBack.addEventListener("click", event => {
    event.preventDefault();
    const btnModal = document.querySelector(".modal-loading");
    btnModal.classList.remove("hidden");
    setTimeout(() => {
      window.location.replace("../index.html");
    }, 700);
  });

  btnBackTwo.addEventListener("click", event => {
    event.preventDefault();
    const btnModal = document.querySelector(".modal-loading");
    btnModal.classList.remove("hidden");
    setTimeout(() => {
      window.location.replace("../index.html");
    }, 700);
  });
}

backToLogin();

function getValueInput() {
  const form = document.querySelector(".form");
  const elements = [...form.elements];
  const pwd = document.querySelector("#password");

  form.addEventListener("submit", async event => {
    event.preventDefault();

    const body = {};

    elements.forEach(e => {
      if (e.tagName == "INPUT" && e.value !== "") {
        body[e.id] = e.value;
      }
    });
    pwd.value = "";
    await register(body);
  });
}

getValueInput();

function cleanInputRegister() {
  const inputUser = document.querySelector("#username");
  const inputEmailzn = document.querySelector("#email");
  const spanUser = document.querySelector(".erro-user");
  const spanEmail = document.querySelector(".erro-email");
  inputUser.addEventListener("keyup", () => {
    spanUser.classList.add("hidden");
    inputUser.style.border = "1px solid #e9ecef";
  });

  inputEmailzn.addEventListener("keyup", () => {
    spanEmail.classList.add("hidden");
    inputEmailzn.style.border = "1px solid #e9ecef";
  });
}

cleanInputRegister();
