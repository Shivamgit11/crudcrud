function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const phonenumber = event.target.phonenumber.value;

    const obj = {
        name,
        email,
        phonenumber
    }

    axios.post("https://crudcrud.com/api/3a2f0ad745974ebfb7eb105414715509/appointmentData", obj)
    .then((response) => {
        shownewUserOnScreen(response.data)
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })
   // localStorage.setItem(obj.email, JSON.stringify(obj));
    //shownewUserOnScreen(obj); 
}

function shownewUserOnScreen(user) {
    const parentNode = document.getElementById('listofusers');

    const childHtml = `<li id=${user.email}>${user.name} -- ${user.email} 
                                <button onclick=deleteuser('${user.email}')> DeleteUser </button>
                                <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}')>Edit User</button>
                            </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHtml;
}

//Edit User
function editUserDetails(emailId, name, phonenumber) {
    document.getElementById('username').value = name;
    document.getElementById('email').value = emailId;
    document.getElementById('phonenumber').value = phonenumber;

    deleteuser(emailId);

}

function deleteuser(emailId){
    console.log(emailId);
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);

}
function removeUserFromScreen(emailId){
    const parentNode = document.getElementById('listofusers');
    const childNodetoBeDeleted = document.getElementById(emailId);

    parentNode.removeChild(childNodetoBeDeleted);
    
}
