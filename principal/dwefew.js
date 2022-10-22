function renderPost(arr) {
    const ul = document.querySelector('.menu-posts')
    arr.forEach(element => {
        const li = document.createElement('li')
        const divUserData = document.createElement('div')
        const divUser = document.createElement('div')
        const image = document.createElement('img')
        const h3 = document.createElement('h3')
        const pDate = document.createElement('p')
        const divBtnEdit = document.createElement('div')
        const btnEdit = document.createElement('button')
        const btnDelete = document.createElement('button')
        const h2 = document.createElement('h2')
        const pContent = document.createElement('p')
        const btnAcess = document.createElement('button')

        li.id = element.id
        btnEdit.id = element.id
        btnDelete.id = element.id
        btnAcess.id = element.id
        image.src = element.user.avatar
        image.alt = element.user.username

        li.classList.add('card')
        divUserData.classList.add('user-data')
        divUser.classList.add('user')
        divBtnEdit.classList = 'btn-edit-delete showBtn'
        btnEdit.classList.add('edit')
        btnDelete.classList.add('delete2')
        btnAcess.classList.add('span-open-modal')
 
        h3.innerText = `${element.user.username}`
        pDate.innerText = `Outubro de 2022`
        btnEdit.innerText = 'Editar'
        btnDelete.innerText = 'Excluir'
        h2.innerText = `${element.title}`
        pContent.innerText = `${element.content}`
        btnAcess.innerText = 'Acessar publicação'

        divBtnEdit.append(btnEdit, btnDelete)
        divUser.append(image, h3, pDate, divBtnEdit)
        divUserData.append(divUser, h2, pContent, btnAcess)
        li.appendChild(divUserData)
        ul.appendChild(li)

    })
}