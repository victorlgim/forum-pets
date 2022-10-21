async function header(token) {
    try {
      const request = await fetch(`http://localhost:3333/users/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await request.json()
     
      localStorage.setItem('id', response.id)

      return response
    } catch (err) {
      console.log(err);
    }   
  }

async function cards(token) {
    try {
        const request = await fetch(`http://localhost:3333/posts`, {
         method: 'GET',
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })

    
        return request.json()

    } catch (err) {
        console.log(err)
    }
}

async function create(token, body) {
    try {
        const request = await fetch(`http://localhost:3333/posts/create`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        })

    

        return request.json()
    } catch (err) {
        console.log(err)
    }
}

async function edit(token, body, id) {
    try {
        const request = await fetch (`http://localhost:3333/posts/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        })

         return request.json()
    } catch (err) {
        console.log(err)
    }
}

async function deleted (token, id) {
    try {
        const request = await fetch (`http://localhost:3333/posts/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,

            }, 
        })
        
        return request.json()
    } catch (err) {
        console.log(err)
    }
}

async function search (token) {
    try {
        const request = await fetch (`http://localhost:3333/posts`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,

            }, 
        })
        return request.json()
    } catch (err) {
        console.log(err)
    }
}

export { header, cards, create, edit, deleted, search }


