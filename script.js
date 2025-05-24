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
  const database = firebase.database();
  const todoRef = database.ref('todoList');

  function addTask () {
    const taskInput = document.getElementById('taskInput');
    const task ={
        text: taskInput.value,
        completed: false

    };

    todoRef.push(task)
    taskInput.value = '';

    console.log(task);
    

  }

  const addButon = document.getElementById('AddButton');

  addButon.addEventListener('click', () => {
    addTask();
  }  )


  todoRef.on('value', snapshot => {
    const tasks = snapshot.val();
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";



    for(let id in tasks) {
        const li = document.createElement('li');
        li.textContent = tasks[id].text;
        taskList.appendChild(li);
    }

  })




