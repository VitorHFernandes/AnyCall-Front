const ControllerLogin = async ( email: String, password: String ) => {

    const res = await fetch('https://anycall-messageria.vmbrain.tech/api/auth/login-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({ email, password })
    })
    .then(res => res.json())


    const token = res.token

    sessionStorage.setItem("accessToken", token)
    
    return token
   
  }


export { ControllerLogin }