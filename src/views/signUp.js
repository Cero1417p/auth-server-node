let objetoJSON = {
  email: "prueba3",
  password: "prueba3",
  name: "prueba3",
  roles: ["admin", "user", ""],
};
const signUp = `<div><p>To register use <b>Basic-Auth</b> and post method and send in the body </p> 
<pre>${JSON.stringify(objetoJSON, null, 2)}</pre></div>`;

export default signUp;
