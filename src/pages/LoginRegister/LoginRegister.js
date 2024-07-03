
import { Home } from '../Home/Home'
import './LoginRegister.css'
let username


// export const LoginRegister = () => {
//   const main = document.querySelector('main')
//   main.innerHTML = ' '
//   if (!localStorage.getItem('token')) {
//     login(main)
//   } else {
//     main.innerHTML = ' '
//     const divLogueado = document.createElement('div')
//     divLogueado.className = 'divLogeado'
//     main.append(divLogueado)
//     const pLogueado = document.createElement('p')
//     pLogueado.innerText = ` Hola ${localStorage.getItem('userName')}
//     Estás logead@ correctamente`
//     divLogueado.append(pLogueado)

//     const buttonLogout = document.createElement('button')
//     buttonLogout.innerText = 'Logout'
//     buttonLogout.className = 'buttonLogout'
//     divLogueado.append(buttonLogout)
//     buttonLogout.addEventListener('click', () => {
//       localStorage.clear()
//       LoginRegister()
//     })

//   }
// }


// const login = (site) => {
//   const main = document.querySelector('main')
//   main.innerHTML = ' '
//   const sectionLogin = document.createElement('section')
//   sectionLogin.className = 'sectionLogin'
//   site.append(sectionLogin)
  
//   const form = document.createElement('form')
//   form.className = 'formLogin'
//   sectionLogin.append(form)
//   const inputUN = document.createElement('input')
//   inputUN.placeholder = 'Usuario'
//   form.append(inputUN)
//   const inputPass = document.createElement('input')
//   inputPass.type = 'password'
//   inputPass.placeholder = 'Contraseña'
//   form.append(inputPass)
//   const divError = document.createElement('div')
//   divError.className = 'divError'
//   form.append(divError)
//   const button = document.createElement('button')
//   button.className = 'buttonLogin'
//   button.textContent = 'Login'
//   form.append(button)

//   const sectionRegisterLogin = document.createElement('div')
//   sectionRegisterLogin.className = 'sectionRegisterLogin'
//   sectionLogin.append(sectionRegisterLogin)
//   const pRegistro = document.createElement('p')
//   pRegistro.innerText = 'Todavia no estás registrad@?'
//   sectionRegisterLogin.append(pRegistro)
//   const pRegistroEnlace = document.createElement('p')
//   pRegistroEnlace.innerText = 'Regístrate!!!'
//   pRegistroEnlace.className = 'pRegistroEnlace'
//   pRegistroEnlace.addEventListener('click', register)
//   sectionRegisterLogin.append(pRegistroEnlace)
//   form.addEventListener('submit', () => {
//     submitLogin(inputUN.value, inputPass.value, divError)
//   })
// }


// const submitLogin = async (userName, password, place) => {
//   const main = document.querySelector('main')
//   const objetoFinal = JSON.stringify({
//     userName,
//     password
//   })
//   console.log(userName, password);
//   const res = await fetch('https://project10back.vercel.app/api/v1/users/login', {
//     method: 'POST',
//     body: objetoFinal,
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })

//   const resUsers = await fetch( 'https://project10back.vercel.app/api/v1/users')
//   const users = await resUsers.json()
//   const allUsers = []
//   const allEmails = []
//   for (const element of users) {
//     allUsers.push(element.userName)
//   }

//   if (allUsers.includes(userName)) {
//     const respuestaFinal = await res.json()
//     console.log(respuestaFinal)
    
  
//     localStorage.setItem('token', respuestaFinal.token)
//     localStorage.setItem('user', JSON.stringify(respuestaFinal.user))
//     localStorage.setItem('email', JSON.stringify(respuestaFinal.user.email))
//     localStorage.setItem('userName', JSON.stringify(respuestaFinal.user.userName))
//   } else {

//   }



//   // if (res.status === 400) {
//   //   const pError = document.createElement('p')
//   //   pError.innerText = 'Usuario o contraseña incorrectos'
//   //   pError.className = 'pError'
//   //   form.append(pError)
//   //   setTimeout(() => {pError.remove()}, 3000)
//   // }





//   if (localStorage.getItem('token')) {
//     main.innerHTML = ''
//     const user = localStorage.getItem('userName')
//     let username = user.replace('"', ' ')
//     username = username.replace('"', ' ')
//       const divLogeado = document.createElement('div')
//       main.append(divLogeado)
//       divLogeado.className = 'divLogeado'
//       const pLogeado = document.createElement('p')
//       pLogeado.innerText = `Hola ${username}!!
//       Estás logead@ correctamente`
//       divLogeado.append(pLogeado)

//     const buttonLogout = document.createElement('button')
//     buttonLogout.className = 'buttonLogout'
//     buttonLogout.innerText = 'Logout'
//     divLogeado.append(buttonLogout)
//     buttonLogout.addEventListener('click', () => {
//       localStorage.clear()
//      LoginRegister()
//     })
//   }

// }

// const register = async() => {

//   const main = document.querySelector('main')
//   main.innerHTML = ' '

//   const form = document.createElement('form')
//   form.className = 'formLogin'
//   main.append(form)

//   const inputNombre = document.createElement('input')
//   inputNombre.placeholder = 'Nombre completo'
//   const inputUN = document.createElement('input')
//   inputUN.placeholder = 'Usuario'
//   const inputPass = document.createElement('input')
//   inputPass.placeholder = 'Contraseña'
//   const inputEmail = document.createElement('input')
//   inputEmail.placeholder = 'Email'
//   inputEmail.type = 'email'
//   const inputTelefono = document.createElement('input')
//   inputTelefono.placeholder = 'Teléfono'
//   const divError = document.createElement('div')
//   divError.className = 'divError'
//   const button = document.createElement('button')
//   button.className = 'buttonLogin'
//   button.textContent = 'Registrarse'
//   inputPass.type = 'password'

//           const pError = document.createElement('p')
//         pError.className = 'pError'
//         pError.style.display = 'none'
//         divError.append(pError)

//   form.append(inputNombre)
//   form.append(inputUN)
//   form.append(inputPass)
//   form.append(inputEmail)
//   form.append(inputTelefono)
//   form.append(divError)
//   form.append(button)

//   form.addEventListener('submit', async () => {
      
      
//     if (inputNombre.value.length === 0 || inputUN.value.length === 0 || inputPass.value.length === 0 || inputEmail.value.length === 0 || inputTelefono.value.length === 0 ) {
//       if (pError.style.display == 'none') {
//           pError.innerText = 'Rellena todos los datos'
//           pError.style.display = 'flex'
//       } else {
//         pError.innerText = 'Rellena todos los datos'
//       }
    
//     } 
//     else if (inputPass.value.length < 6 || inputPass.value.length > 10) {
//       if (pError.style.display == 'none') {
//         pError.innerText = 'La contraseña debe tener entre 6 y 10 caracteres'
//         pError.style.display = 'flex'
//     } else {
//       pError.innerText = 'La contraseña debe tener entre 6 y 10 caracteres'
//     }
//     }
//     else {
//       username = inputUN.value
//      const email = inputEmail.value
//      const nombre = inputNombre.value
//      const telefono = inputTelefono.value
//       const res = await fetch( 'https://project10back.vercel.app/api/v1/users')
//       const users = await res.json()
//       const allUsers = []
//       const allEmails = []
//       for (const element of users) {
//         allUsers.push(element.userName)
//         allEmails.push(element.email)
//       }
//       if (allUsers.includes(username)) {

//         if (pError.style.display == 'none') {
//           pError.innerText = 'Este usuario ya existe'
//           pError.style.display = 'flex'
//       } else {
//         pError.innerText = 'Este usuario ya existe'
//       }
//       } else if (allEmails.includes(email)) {
//         const pError = document.createElement('p')
//         if (pError.style.display == 'none') {
//           pError.innerText = 'Este email ya existe'
//           pError.style.display = 'flex'
//       } else {
//         pError.innerText = 'Este email ya existe '
//       }
//       } else {
//         submitRegister(inputUN.value, inputPass.value, inputEmail.value, inputNombre.value,  inputTelefono.value ,form)
//         const main = document.querySelector('main')
//         main.innerHTML = ' ' 
//         const divRegistro = document.createElement('div')
//         divRegistro.className = 'divRegistro'
//         main.append(divRegistro)
//         const h2 = document.createElement('h2')
//         h2.innerText = 'Te has registrado correctamente'
//         divRegistro.append(h2)
//       }
//     }
//   })
//   }

export const LoginRegister = () => {
  const main = document.querySelector('main')
  main.innerHTML = ' '
  if (!localStorage.getItem('token')) {
    login()
  } else {
    main.innerHTML = ''
    const divLogueado = document.createElement('div')
    divLogueado.className = 'divLogeado'
    main.append(divLogueado)
    const pLogueado = document.createElement('p')
    const user = localStorage.getItem('userName')
    let username = user.replace('"', ' ')
    username = username.replace('"', ' ')
    pLogueado.innerText = ` Hola ${username}
    Estás logead@ correctamente`
    divLogueado.append(pLogueado)
    const buttonLogout = document.createElement('button')
    buttonLogout.innerText = 'Logout'
    buttonLogout.className = 'buttonLogout'
    divLogueado.append(buttonLogout)
    buttonLogout.addEventListener('click', () => {
      localStorage.clear()
      LoginRegister()
    })
  }
}

const login = () => {
  const main = document.querySelector('main')
  main.innerHTML = ' '
  const sectionLogin = document.createElement('section')
  sectionLogin.className = 'sectionLogin'
  main.append(sectionLogin)

  const form = document.createElement('form')
  form.className = 'formLogin'
  sectionLogin.append(form)
  const inputUN = document.createElement('input')
  inputUN.placeholder = 'Usuario'
  form.append(inputUN)
  const inputPass = document.createElement('input')
  inputPass.type = 'password'
  inputPass.placeholder  = 'Contraseña'
  form.append(inputPass)
  const divError = document.createElement('div')
  divError.className = 'divError'
  form.append(divError)
    const pError = document.createElement('p')
    pError.className = 'pError'
    divError.append(pError)
    pError.style.display = 'none'
  const button = document.createElement('button')
  button.className = 'buttonLogin'
  button.textContent = 'Login'
  form.append(button)

  form.addEventListener('submit', () => {
    submitLogin(inputUN.value, inputPass.value, form)
  })

  const sectionRegisterLogin = document.createElement('div')
  sectionRegisterLogin.className = 'sectionRegisterLogin'
  sectionLogin.append(sectionRegisterLogin)

  const pRegistro = document.createElement('p')
  pRegistro.innerText = 'Todavia no estás registrad@?'
  sectionRegisterLogin.append(pRegistro)
  const pRegistroEnlace = document.createElement('p')
  pRegistroEnlace.innerText = 'Regístrate!!!'
  pRegistroEnlace.className = 'pRegistroEnlace'
  pRegistroEnlace.addEventListener('click', register)
  sectionRegisterLogin.append(pRegistroEnlace)

}

const submitLogin = async (userName, password) => {
const main = document.querySelector('main')
const objetoFinal = JSON.stringify({
  userName,
  password
})
console.log(userName, password);
const res = await fetch('https://project10back2.vercel.app/api/v1/users/login', {
  method: 'POST',
  body: objetoFinal,
  headers: {
    "Content-Type": "application/json"
  }
})

const pError = document.querySelector('.pError')
console.log(pError)
if (res.status === 400) {
  if (pError.style.display == 'none') {
    pError.innerText = 'Usuario o contraseña incorrectos'
    pError.style.display = 'flex'
  }
} else {
  const respuestaFinal = await res.json()
  console.log(respuestaFinal)
  

  localStorage.setItem('token', respuestaFinal.token)
  localStorage.setItem('user', JSON.stringify(respuestaFinal.user))
  localStorage.setItem('email', JSON.stringify(respuestaFinal.user.email))
  localStorage.setItem('userName', JSON.stringify(respuestaFinal.user.userName))

  if (localStorage.getItem('token')) {
    main.innerHTML = ''
    const user = localStorage.getItem('userName')
    let username = user.replace('"', ' ')
    username = username.replace('"', ' ')
      const divLogeado = document.createElement('div')
      main.append(divLogeado)
      divLogeado.className = 'divLogeado'
      const pLogeado = document.createElement('p')
      pLogeado.innerText = `Hola ${username}!!
      Estás logead@ correctamente`
      divLogeado.append(pLogeado)

    const buttonLogout = document.createElement('button')
    buttonLogout.className = 'buttonLogout'
    buttonLogout.innerText = 'Logout'
    divLogeado.append(buttonLogout)
    buttonLogout.addEventListener('click', () => {
      localStorage.clear()
     LoginRegister()
    })
  }
}


}

const register =  async () => {
const main = document.querySelector('main')
main.innerHTML = ' '
const form = document.createElement('form')
form.className = 'formLogin'
main.append(form)

const inputNombre = document.createElement('input')
inputNombre.placeholder = 'Nombre completo'
const inputUN = document.createElement('input')
inputUN.placeholder = 'Usuario'
const inputPass = document.createElement('input')
inputPass.placeholder = 'Contraseña'
const inputEmail = document.createElement('input')
inputEmail.placeholder = 'Email'
inputEmail.type = 'email'
const inputTelefono = document.createElement('input')
inputTelefono.placeholder = 'Teléfono'
const divError = document.createElement('div')
divError.className = 'divError'
const pError = document.createElement('p')
pError.className = 'pError'
pError.style.display = 'none'
divError.append(pError)
const button = document.createElement('button')
button.className = 'buttonLogin'
button.textContent = 'Registrarse'
inputPass.type = 'password'

form.append(inputNombre)
form.append(inputUN)
form.append(inputPass)
form.append(inputEmail)
form.append(inputTelefono)
form.append(divError)
form.append(button)

form.addEventListener('submit', async () => {
  console.log('submit')
  username = inputUN.value
  const email = inputEmail.value
  const nombre = inputNombre.value
  const telefono = inputTelefono.value
   const res = await fetch( 'https://project10back2.vercel.app/api/v1/users')
   const users = await res.json()
   const allUsers = []
   const allEmails = []
   for (const element of users) {
     allUsers.push(element.userName)
     allEmails.push(element.email)
   }
   console.log(allUsers)
   console.log(allEmails)
   console.log(username)
  if (inputNombre.value.length === 0 || inputUN.value.length === 0 || inputPass.value.length === 0 || inputEmail.value.length === 0 || inputTelefono.value.length === 0 ) {
    if (pError.style.display == 'none') {
        pError.innerText = 'Rellena todos los datos'
        pError.style.display = 'flex'
    } else {
      pError.innerText = 'Rellena todos los datos'
    }
  } 
  else if (inputPass.value.length < 6 || inputPass.value.length > 10) {
    if (pError.style.display == 'none') {
      pError.innerText = 'La contraseña debe tener entre 6 y 10 caracteres'
      pError.style.display = 'flex'
  } else {
    pError.innerText = 'La contraseña debe tener entre 6 y 10 caracteres'
  }
  } 
else if (allUsers.includes(username)) {
  console.log('el usuario ya existe')
  if (pError.style.display == 'none') {
    pError.innerText = 'Este usuario ya existe'
    pError.style.display = 'flex'
} else {
  pError.innerText = 'Este usuario ya existe'
}
}
else if (allEmails.includes(email)) {
  if (pError.style.display == 'none') {
    pError.innerText = 'Este email ya existe'
    pError.style.display = 'flex'
} else {
  pError.innerText = 'Este email ya existe '
}
}
else {
  main.innerHTML = ' '
  const h2cargando = document.createElement('h2')
  h2cargando.innerText = ' Cargando...'
  main.append(h2cargando)
  submitRegister(inputUN.value, inputPass.value, inputEmail.value, inputNombre.value,  inputTelefono.value)

}

  
})
}

const submitRegister = async (userName, password, email, nombre, telefono) => {
  const objetoFinalRegistro = JSON.stringify({
    userName,
    password,
    email
  })

  const resRegistro = await fetch('https://project10back2.vercel.app/api/v1/users/register', {
    method: 'POST',
    body: objetoFinalRegistro,
    headers: {
      "Content-Type": "application/json"
    }
  })

  
  const objetoFinalAsistentes = JSON.stringify({
    nombre,
    email,
    telefono
  })

  const resAsistente = await fetch('https://project10back2.vercel.app/api/v1/asistentes/', {
    method: 'POST',
    body: objetoFinalAsistentes,
    headers: {
      "Content-Type": "application/json"
    }
  })



  const respuestaFinalRegistro = await resRegistro.json()

  const respuestaFinalAsistentes = await resAsistente.json()

  console.log(respuestaFinalAsistentes, respuestaFinalRegistro)
  submitLogin(userName, password)

}