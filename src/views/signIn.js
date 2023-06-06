let object ={
    "email":"test@test.com",
    "password":"pass",
}
const signIn =
    `<div>Use <b>Basic-Auth</b> and post method and send in the body  
<pre>${JSON.stringify(object, null, 2)}</pre></div>`

export default signIn