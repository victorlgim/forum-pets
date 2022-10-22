import {
  header,
  cards,
  create,
  edit,
  deleted,
  search,
} from "../requestHeader.js";

function render(arr) {
  const getValue = localStorage.getItem("id");
  const ul = document.querySelector(".posts");
  ul.innerHTML = "";
  arr.forEach((e, index, arr) => {
    if (e.user.id == getValue) {
      const li = renderLis(e, arr);
      ul.appendChild(li);
    } else {
        console.log('adsdsa')
      const li = cardsLogOut(e, arr);
      ul.appendChild(li);
    }
  });
}

async function requestPosts() {
  const token = localStorage.getItem("token");

  const searchPosts = await search(token);
  render(searchPosts);
}

setTimeout(() => {

    requestPosts();
}, 300)

function renderLis(post, arr) {
  const li = document.createElement("li");
  const divOrgTopHeader = document.createElement("div");
  const divTopCard = document.createElement("div");
  const divNameImgCard = document.createElement("div");
  const image = document.createElement("img");
  const h4 = document.createElement("h4");
  const divDataCard = document.createElement("div");
  const spanOne = document.createElement("span");
  const smallOne = document.createElement("small");
  const divButtons = document.createElement("div");
  const btnEdit = document.createElement("button");
  const btnExcluded = document.createElement("button");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const btnAcess = document.createElement("button");

  li.id = post.id;
  btnEdit.id = post.id;
  btnExcluded.id = post.id;
  btnAcess.id = post.id;
  image.src = post.user.avatar;
  image.alt = post.user.username;

  divOrgTopHeader.classList.add("org-top-header");
  divTopCard.classList.add("top-card");
  divNameImgCard.classList.add("name-img-card");
  divDataCard.classList.add("data-card");
  spanOne.classList.add("color__1");
  smallOne.classList.add("data-time");
  divButtons.classList.add("buttons");
  btnEdit.classList.add("btn-edit");
  btnExcluded.classList.add("btn-excluir");
  btnAcess.classList.add("acess-btn");
  h2.classList.add("title-li");
  p.classList.add("paragraph-li");

  btnEdit.addEventListener("click", event => {
    const inputTitle = document.querySelector(".title-edit");
    const inputContent = document.querySelector(".content-edit");
    const btnEdicao = document.querySelector(".btn-edicao");

    const bodyEdit = {};

    const editData = arr.filter(ez => {
      if (event.target.id == ez.id) {
        const modalEdit = document.querySelector(".modal-edit-container");
        modalEdit.classList.remove("hidden");
      }
      return event.target.id == ez.id;
    });
    editData.forEach(ev => {
      inputTitle.value = ev.title;
      inputContent.value = ev.content;
      btnEdicao.id = ev.id;
      bodyEdit[inputTitle.id] = inputTitle.value;
      bodyEdit[inputContent.id] = inputContent.value;
    });
  });

  btnExcluded.addEventListener("click", event => {
    const buttonExcluir = document.querySelector(".btn-delete-submit");
    const deleteData = arr.filter(ez => {
      if (event.target.id == ez.id) {
        const modalDelete = document.querySelector(".modal-delete-container");
        modalDelete.classList.remove("hidden");
      }
      return event.target.id == ez.id;
    });
    deleteData.forEach(ev => {
      console.log(ev);
      buttonExcluir.id = ev.id;
    });
    console.log(deleteData);
    deleteModal();
  });

  btnAcess.addEventListener("click", event => {
    const btnExcluir = document.querySelector(".btn-excluir-publish");
    const modal = document.querySelector(".publish-modal-container");
    const name = document.querySelector(".name-publish");
    const image = document.querySelector(".image-publish");
    const h2publish = document.querySelector(".h2-publish");
    const p = document.querySelector(".paragraph-publish");
    const filterData = arr.filter(ez => {
      if (event.target.id == ez.id) {
        modal.classList.remove("hidden");
      }
      return event.target.id == ez.id;
    });
    filterData.forEach(ev => {
      name.innerHTML = ev.user.username;
      image.src = ev.user.avatar;
      h2publish.innerHTML = ev.title;
      p.innerHTML = ev.content;
    });
    btnExcluir.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  });

  h4.innerText = `${post.user.username}`;
  h2.innerText = `${post.title}`;
  p.innerText = `${post.content}`;
  smallOne.innerText = "Outubro de 2021";
  btnEdit.innerText = "Editar";
  btnExcluded.innerText = "Excluir";
  btnAcess.innerText = "Acessar publicação";

  divNameImgCard.append(image, h4);
  divDataCard.append(spanOne, smallOne);
  divButtons.append(btnEdit, btnExcluded);
  divTopCard.append(divNameImgCard, divDataCard);
  divOrgTopHeader.append(divTopCard, divButtons);
  li.append(divOrgTopHeader, h2, p, btnAcess);
  return li;
}

function cardsLogOut(post, arr) {
  const li = document.createElement("li");
  const divOrgTopHeader = document.createElement("div");
  const divTopCard = document.createElement("div");
  const divNameImgCard = document.createElement("div");
  const image = document.createElement("img");
  const h4 = document.createElement("h4");
  const divDataCard = document.createElement("div");
  const spanOne = document.createElement("span");
  const smallOne = document.createElement("small");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const btnAcess = document.createElement("button");

  btnAcess.addEventListener("click", event => {
    const btnExcluir = document.querySelector(".btn-excluir-publish");
    const modal = document.querySelector(".publish-modal-container");
    const name = document.querySelector(".name-publish");
    const image = document.querySelector(".image-publish");
    const h2publish = document.querySelector(".h2-publish");
    const p = document.querySelector(".paragraph-publish");
    const filterData = arr.filter(ez => {
      if (event.target.id == ez.id) {
        modal.classList.remove("hidden");
      }
      return event.target.id == ez.id;
    });
    filterData.forEach(ev => {
      name.innerHTML = ev.user.username;
      image.src = ev.user.avatar;
      h2publish.innerHTML = ev.title;
      p.innerHTML = ev.content;
    });
    btnExcluir.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  });

  li.id = post.id;
  btnAcess.id = post.id;
  image.src = post.user.avatar;
  image.alt = post.user.username;

  divOrgTopHeader.classList.add("org-top-header");
  divTopCard.classList.add("top-card");
  divNameImgCard.classList.add("name-img-card");
  divDataCard.classList.add("data-card");
  spanOne.classList.add("color__1");
  smallOne.classList.add("data-time");

  btnAcess.classList.add("acess-btn");
  h2.classList.add("title-li");
  p.classList.add("paragraph-li");

  h4.innerText = `${post.user.username}`;
  h2.innerText = `${post.title}`;
  p.innerText = `${post.content}`;
  smallOne.innerText = "Outubro de 2021";

  btnAcess.innerText = "Acessar publicação";

  divNameImgCard.append(image, h4);
  divDataCard.append(spanOne, smallOne);

  divTopCard.append(divNameImgCard, divDataCard);
  divOrgTopHeader.append(divTopCard);
  li.append(divOrgTopHeader, h2, p, btnAcess);
  return li;
}

async function renderHeader() {
  const token = localStorage.getItem("token");
  const tkn = await header(token);
  const user = document.querySelector(".user-account");
  const divHeader = document.querySelector(".div-header");
  const avatar = document.createElement("img");
  const modalExit = document.querySelector(".modal-account");

  avatar.classList.add("avatar");
  avatar.addEventListener("mouseover", () => {
    const modalExit = document.querySelector(".modal-account");
    modalExit.classList.toggle("hidden");
  });

  modalExit.addEventListener("mouseleave", () => {
    const modalExit = document.querySelector(".modal-account");
    modalExit.classList.add("hidden");
  });

  user.innerHTML = `@${tkn.username}`;
  avatar.src = `${tkn.avatar}`;
  avatar.alt = `${tkn.username}`;

  divHeader.appendChild(avatar);
}

renderHeader();

async function renderCards() {
  const token = localStorage.getItem("token");

  await cards(token);
}

renderCards();

async function toggleModalHeader() {
  const token = localStorage.getItem("token");
  const inputTitle = document.querySelector(".title-edit");
  const btnDelete = document.querySelector(".btn-delete-submit");
  const inputContent = document.querySelector(".content-edit");
  const tkn = await header(token);
  const btn = document.querySelector(".create-publish");
  const form = document.querySelector(".form-create");
  const elements = [...form.elements];
  const btnClose = document.querySelector(".btn-create-close");
  const btnCancel = document.querySelector(".btn-cancel");
  const content = document.querySelector("#content");
  const title = document.querySelector("#title");

  btn.addEventListener("click", event => {
    event.preventDefault();
    const modalCreate = document.querySelector(".modal-pai-maior");
    modalCreate.classList.remove("hidden");
  });

  btnClose.addEventListener("click", event => {
    event.preventDefault();
    const modalCreate = document.querySelector(".modal-pai-maior");
    modalCreate.classList.add("hidden");
    content.value = "";
    title.value = "";
    form.reset();
  });

  btnCancel.addEventListener("click", event => {
    event.preventDefault();
    const modalCreate = document.querySelector(".modal-pai-maior");
    modalCreate.classList.add("hidden");
    content.value = "";
    title.value = "";
    form.reset();
  });

  form.addEventListener("submit", async event => {
    event.preventDefault();

    const body = {};

    elements.forEach(e => {
      if (e.tagName !== "BUTTON" && e.value !== "") {
        body[e.id] = e.value;
      }
    });

    await create(token, body);
    const searchPosts = await search(token);
    console.log(searchPosts);

    const btnModal = document.querySelector(".modal-loading");
    btnModal.classList.remove("hidden");
    setTimeout(() => {
      render(searchPosts);
      toggleModalPublish();
      const modalCreate = document.querySelector(".modal-pai-maior");
      modalCreate.classList.add("hidden");
      btnModal.classList.add("hidden");
    }, 1000);

    form.reset();
  });
}

toggleModalHeader();

function toggleModalPublish() {
  const btns = document.querySelectorAll(".acess-btn");
  const btnExcluir = document.querySelector(".btn-excluir-publish");
  const modal = document.querySelector(".publish-modal-container");
  const name = document.querySelector(".name-publish");
  const image = document.querySelector(".image-publish");
  const h2publish = document.querySelector(".h2-publish");
  const p = document.querySelector(".paragraph-publish");

  

  btns.forEach(e => {
    e.addEventListener("click", event => {
      const filterData = arr.filter(ez => {
        if (event.target.id == ez.id) {
          modal.classList.remove("hidden");
        }
        return event.target.id == ez.id;
      });
      filterData.forEach(ev => {
        name.innerHTML = ev.user.username;
        image.src = ev.user.avatar;
        h2publish.innerHTML = ev.title;
        p.innerHTML = ev.content;
      });
    });

    btnExcluir.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  });
}

function exitAccount() {
  const exitAccount = document.querySelector(".exit-account");
  exitAccount.addEventListener("click", event => {
    event.preventDefault();
    const btnModal = document.querySelector(".modal-loading");
    btnModal.classList.remove("hidden");
    setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem('id')
      window.location.replace("../index.html");
    }, 2000);
  });
}

exitAccount();

function editModal() {
  const token = localStorage.getItem("token");

  const buttonCancelEdit = document.querySelector(".btn-cancel-edit");
  const buttonCancelEditX = document.querySelector(".xzinho");
  buttonCancelEdit.addEventListener("click", event => {
    event.preventDefault();
    const modalEditCancel = document.querySelector(".modal-edit-container");
    modalEditCancel.classList.add("hidden");
  });
  buttonCancelEditX.addEventListener("click", event => {
    event.preventDefault();
    const modalEditCancel = document.querySelector(".modal-edit-container");
    modalEditCancel.classList.add("hidden");
  });

  const formEdit = document.querySelector(".form-edit");
  const elements = [...formEdit.elements];

  formEdit.addEventListener("submit", async event => {
    event.preventDefault();
    const editButton = document.querySelector(".btn-edicao");
    const id = editButton.id;

    const bodyEdit = {};

    elements.forEach(e => {
      if (e.tagName !== "BUTTON" && e.value !== "") {
        bodyEdit[e.id] = e.value;
      }
    });

    await edit(token, bodyEdit, id);
    const searchPosts = await search(token);
    console.log(searchPosts);

    const btnModal = document.querySelector(".modal-loading");
    btnModal.classList.remove("hidden");
    setTimeout(() => {
      const modalEditCancel = document.querySelector(".modal-edit-container");
      modalEditCancel.classList.add("hidden");
      render(searchPosts);
      btnModal.classList.add('hidden')
    }, 1000);


  });
}

editModal();

function deleteModal() {
  const token = localStorage.getItem("token");
  const buttonSubmitDelete = document.querySelector(".btn-delete-submit");
  const buttonCancelDelete = document.querySelector(".btn-delete-cancel");
  const buttonCancelDeleteX = document.querySelector(".xzinho-delete");
  buttonCancelDelete.addEventListener("click", event => {
    event.preventDefault();
    const modalDeleteCancel = document.querySelector(".modal-delete-container");
    modalDeleteCancel.classList.add("hidden");
  });
  buttonCancelDeleteX.addEventListener("click", event => {
    event.preventDefault();
    const modalDeleteCancel = document.querySelector(".modal-delete-container");
    modalDeleteCancel.classList.add("hidden");
  });

  buttonSubmitDelete.addEventListener("click", async event => {
    event.preventDefault();

    const idc = event.target.id;
    
    await deleted(token, idc);
    const modalDeleteCancel = document.querySelector(".modal-delete-container");
    const modalPost = document.querySelector(".modal");
    const searchPosts = await search(token);
    console.log(searchPosts);
    const btnModal = document.querySelector(".modal-loading");
    btnModal.classList.remove("hidden");
    setTimeout(() => {
        
        render(searchPosts);
        modalDeleteCancel.classList.add("hidden");
        btnModal.classList.add('hidden')
    }, 1000)
    
    
    
    modalPost.classList.remove("hidden");
    setTimeout(() => {
      modalPost.classList.add("hidden");
    }, 4000);
  });
}

deleteModal();

const paragraphli = document.querySelectorAll('.paragraph-li')
paragraphli.forEach(e => {
  if (e.innerText.length > 145) {
    e.innerText = e.innerText.substring(0, 145) + '...'
  }
})