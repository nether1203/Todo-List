//LOGIN//
const loginBtn = document.querySelector('.login');
console.log(loginBtn);

const UserName = document.querySelector('.loginInput');
const passwordInp = document.querySelector('.password');

loginBtn.addEventListener('click', () =>{
    if(UserName.value && passwordInp.value){
        checUser(UserName.value, passwordInp.value)
        console.log('login')
    }
} )

const dbURL = 'https://todo-list-461ca-default-rtdb.europe-west1.firebasedatabase.app';

function checUser (userName, password){
    fetch(`${dbURL}/users.json`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        for(let id in data){
            console.log(data[id].UserName);
            if(data[id].UserName === userName){
                 if(data[id].password === password){
                    alert('Ви успішно зайшли')
                    return
                 }else{
                    alert('Невірний пароль')
                 }
            }
        }
        
    } )
}
// checUser('admin', 'admin')