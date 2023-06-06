let objetoJSON ={
    "email":"prueba3",
    "password":"prueba3",
    "name":"prueba3",
    "roles":["admin","user",""]
}
const signUp=
    `<div>Use <b>Basic-Auth</b> and post method and send in the body  
<pre>${JSON.stringify(objetoJSON, null, 2)}</pre></div>`

export default signUp