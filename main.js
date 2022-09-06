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

    axios.post("https://crudcrud.com/api/526cf20059e541fcbc6f2c029913fa11/appointmentData", obj)
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

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/526cf20059e541fcbc6f2c029913fa11/appointmentData")
    .then((response) => {
        console.log(response)
        for(var i =0; i< response.data.length; i++){
            shownewUserOnScreen(response.data[i])
        }
    })
    .catch((error) => {
        console.log(error)
    })
    
})

function shownewUserOnScreen(user) {

    
    const parentNode = document.getElementById('listofusers');

    const childHtml = `<li id=${user._id}>${user.name} -- ${user.email} -- ${user._id}
                                <button onclick=deleteuser('${user._id}')> DeleteUser </button>
                                <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}','${user._id}')>Edit User</button>
                            </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHtml;
}

//Edit User
function editUserDetails(emailId, name, phonenumber, userId) {
    document.getElementById('username').value = name;
    document.getElementById('email').value = emailId;
    document.getElementById('phonenumber').value = phonenumber;

    deleteuser(userId);

}

function deleteuser(userId){
    axios.delete(`https://crudcrud.com/api/526cf20059e541fcbc6f2c029913fa11/appointmentData/${userId}`)
    .then((response) => {
        removeUserFromScreen(userId);  
    })
    .catch((err) => {
        console.log(err)
    })
    // console.log(userId);
    // localStorage.removeItem(emailId);
    // removeUserFromScreen(emailId);

}
function removeUserFromScreen(userId){
    const parentNode = document.getElementById('listofusers');
    const childNodetoBeDeleted = document.getElementById(userId);

    parentNode.removeChild(childNodetoBeDeleted);
    
}
