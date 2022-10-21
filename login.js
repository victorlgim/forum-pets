import { login } from "./requests.js";

function entryRegister() {
  const btnRegister = document.querySelector(".btn-register");
  btnRegister.addEventListener("click", event => {
    event.preventDefault();
    const btnModal = document.querySelector(".modal-loading");
    btnModal.classList.remove("hidden");
    setTimeout(() => {
        window.location.replace("./register/index.html");
    }, 500)
    
  });
}

entryRegister();

async function entryPrincipal() {
  const formButton = document.querySelector(".form-principal");
  const elements = [...formButton]
  
  formButton.addEventListener("submit", async event => {
    event.preventDefault();

    const body = {};

    elements.forEach(e => {
      if (e.tagName == "INPUT" && e.value !== "") {
        body[e.id] = e.value;
      }
    });

    
    login(body)

  });
}

entryPrincipal();



