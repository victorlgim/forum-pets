async function register(body) {
  try {
    const request = await fetch(`http://localhost:3333/users/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const form = document.querySelector(".form");

    if (request.status == 200) {
      onToggleModal();
      form.reset();
    } else {
      onToggleModalError();
      inputErrorRegister();
    }
    const response = request.json();
  } catch (err) {}
}

async function login(body) {
  try {
    const request = await fetch(`http://localhost:3333/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const button = document.querySelector(".btn-acess");
    button.innerHTML = `<img src='./assets/spinner.png' class='spinner-img'>`;
    if (request.ok) {
      const response = await request.json();
      localStorage.setItem("token", response.token);

      setTimeout(() => {
        window.location.replace("./principal/index.html");
      }, 4000);
    } else {
      cleanPwd();
      setTimeout(() => {
        renderError();
        button.innerHTML = "Acessar";
      }, 4000);
    }
  } catch (err) {
    cleanPwd();
    renderError();
  }
}



export { register, login };





























function renderError() {
  const span = document.querySelector(".msg-error");
  const inputPassword = document.querySelector("#password");

  inputPassword.style.border = "1px solid #C73650";
  span.classList.remove("hidden");
}

function cleanPwd() {
  const inputPwd = document.querySelector("#password");
  inputPwd.value = "";
}

function cleanInput() {
  const inputEmail = document.querySelector("#email");
  const inputPwd = document.querySelector('#password')
  const span = document.querySelector(".msg-error");
  inputEmail.addEventListener("keyup", () => {
    span.classList.add("hidden");
    inputEmail.style.border = "1px solid #e9ecef";
    inputPwd.style.border = "1px solid #e9ecef";
  });
}

cleanInput();

function onToggleModal() {
  const modal = document.querySelector(".modal-container");
  modal.classList.remove("hidden");
}

function onToggleModalError() {
  const modalError = document.querySelector(".modal-container-err");
  modalError.classList.remove("hidden");
  setTimeout(() => {
    modalError.classList.add("hidden");
  }, 4000);
}

function inputErrorRegister() {
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const spanUser = document.querySelector(".erro-user");
  const spanEmail = document.querySelector(".erro-email");
  username.style.border = "1px solid #C73650";
  email.style.border = "1px solid #C73650";
  spanUser.classList.remove("hidden");
  spanEmail.classList.remove("hidden");
}
