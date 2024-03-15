const DataServices = (function(){

    async function fetchData(url){
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error('Failed to fetch....');
            }
            return await response.json();
        }catch(error){
            console.error(error);
            throw error;
        }
    }

    return {
        fetchPosts : async function(){
            return await fetchData('https://jsonplaceholder.typicode.com/posts');
        },
        fetchTodos : async function(){
            return await fetchData('https://jsonplaceholder.typicode.com/todos');
        }
    }

})();
const UI = (function(){
    function displayPosts(posts){
       const myPosts =  document.getElementById('posts');
       posts.forEach(post =>{
        const myPost = document.createElement('div');
        myPost.innerHTML = `
        
        <h2> UserId: ${post.userId}</h2>
        <p> Id: ${post.id}</p>
        <h2> Title:${post.title}</h2>
        <p> Body:${post.body}</p>
        <hr>
        `;
        myPosts.appendChild(myPost);
       })

    }

    function displayTodos(todos){
        const myTodos =  document.getElementById('todos');
        todos.forEach(todo =>{
         const myTodo = document.createElement('div');
         myTodo.innerHTML = `
         
        <h2> UserId: ${todo.userId}</h2>
        <p> Id: ${todo.id}</p>
        <h2> Title:${todo.title}</h2>
         <p> Completed: ${todo.completed}</p>
         <hr>
         `;
         myTodos.appendChild(myTodo);
        })
    }

    return {
        displayPosts,
        displayTodos
    }
})();


// async function doALLtask(){

//     try{
//     const posts = await DataServices.fetchPosts();
//     UI.displayPosts(posts);


//     const todos = await DataServices.fetchTodos();
//     UI.displayTodos(todos);
//     }catch(error){
//         document.getElementById('posts').innerHTML='Failed  to fetch data..';
//         document.getElementById('todos').innerHTML='Failed  to fetch data..';
//     }
// }


// doALLtask();



async function task1(){

    try{
    const posts = await DataServices.fetchPosts();
    UI.displayPosts(posts);


    }catch(error){
        document.getElementById('posts').innerHTML='Failed  to fetch data..';
    }
}



async function task2(){

    try{
    const todos = await DataServices.fetchTodos();
    UI.displayTodos(todos);
    }catch(error){
       document.getElementById('todos').innerHTML='Failed  to fetch data..';
    }
}







let a=document.getElementById("b1");
let b=document.getElementById("b2");

a.addEventListener("click", Posts);
b.addEventListener("click", Todos);


function Posts() {
   
    alert("i am done with posts");
    task1();
    
    var gfg = document.getElementById("posts");
gfg.style.backgroundColor = "blue";
    
  }
  
function Todos() {
    
    alert("i am done with Todos");
    task2();
    var gfg = document.getElementById("todos");
gfg.style.backgroundColor = "green"; // Set the background color to green

  }
