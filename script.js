// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDQaxpyOMhJAV6470pAd7iKR_tPZaytL68",
    authDomain: "todo-list-461ca.firebaseapp.com",
    databaseURL: "https://todo-list-461ca-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todo-list-461ca",
    storageBucket: "todo-list-461ca.firebasestorage.app",
    messagingSenderId: "350724924473",
    appId: "1:350724924473:web:b1d55eebfae0037f48d9e8"
  };

  firebase.initializeApp(firebaseConfig);
  // const database = firebase.database();
  // const todoRef = database.ref('todoList');
    const dbURL = 'https://todo-list-461ca-default-rtdb.europe-west1.firebasedatabase.app/todoList.json';

  function saveToDB(){

    fetch(dbURL,{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        title: 'test',
        data: '12.12.2022'
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log('Дані збереженно , ID = ' + data.name );
      
    })
    .catch(err => console.error(err)
    )
  }

  saveToDB()

  function getFromDB(){
    fetch(dbURL)
    .then(res => res.json())
    .then(data => console.log(data)
    );

  }

  getFromDB()


 const dbURL2 = 'https://todo-list-461ca-default-rtdb.europe-west1.firebasedatabase.app'


  function ChangeDataInDB(id) {
    fetch(`${dbURL2}/todoList/${id}.json`,
      {method: 'PUT',
        headers:{
          'Content-Type' : 'application/json'
        },
          body: JSON.stringify({
        title: 'test',
        data: '12.12.2025'
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log('Дані змінено , ID = ' + data )
    })
  }

  ChangeDataInDB('-ORaMzmyxzXiNSPJnhRV')



  function updateDataInDB(id) {
 fetch(`${dbURL2}/todoList/${id}.json`,
      {method: 'PATCH',
        headers:{
          'Content-Type' : 'application/json'
        },
          body: JSON.stringify({
        title: 'test',
        data: '12.12.2026'
      })
       
      
      }
     )  .then(res => res.json())
          .then(data => {
      console.log('Дані змінено , ID = ' + data )})
  }

  updateDataInDB('-ORaOCu8YLVD3JJdx6py')

  function deleteDataInDB (id){
    fetch(`${dbURL2}/todoList/${id}.json`,
      {method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => console.log('Дфні видаленно' + data)
      )
  }

  deleteDataInDB('-ORaOCu8YLVD3JJdx6py')

  // function addTask () {
  //   const taskInput = document.getElementById('taskInput');
  //   const task ={
  //       text: taskInput.value,
  //       completed: false

  //   };

  //   todoRef.push(task)
  //   taskInput.value = '';

  //   console.log(task);
    

  // }

  // const addButon = document.getElementById('AddButton');

  // addButon.addEventListener('click', () => {
  //   addTask();
  // }  )


  // todoRef.on('value', snapshot => {
  //   const tasks = snapshot.val();
  //   const taskList = document.getElementById("taskList");
  //   taskList.innerHTML = "";



  //   for(let id in tasks) {
  //       const li = document.createElement('li');
  //       li.textContent = tasks[id].text;
  //       taskList.appendChild(li);
  //   }

  // })




