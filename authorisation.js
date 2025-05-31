const UserNameInp = document.querySelector('.loginInput');
const PassInp1 = document.querySelector('.password1');
const PassInp2 = document.querySelector('.password1');
const registrationBtn = document.querySelector('.reg')

const dbURL = 'https://todo-list-461ca-default-rtdb.europe-west1.firebasedatabase.app';

registrationBtn.addEventListener('click', () =>{
    if(UserNameInp.value && PassInp1.value && PassInp2.value){
        if(UserNameInp.value && PassInp1.value && PassInp2.value){
            CreateUser(UserNameInp.value, PassInp1.value)
        }

    }else{
        alert('Заповніть поля')
    }
})

function CreateUser (UserName, password) {
    fetch(`${dbURL}/users.json`,{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            UserName: UserName,
            password: password
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log('Дані збереженно , ID =' + data.name);
        alert('Реєстрація успішна! Перейдіть на сторінку Login');
        
    })
    .catch(err => console.error(err))
    
}

