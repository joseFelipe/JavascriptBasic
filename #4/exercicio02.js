var inputElement = document.querySelector('#nome');
var buttonElement = document.querySelector('#botao');

buttonElement.onclick = function(){
    adicionar(inputElement.value);
}


function adicionar(user) {
    var minhaPromise = function() {
        return new Promise(function(resolve, reject){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://api.github.com/users/' + user);
            xhr.send(null);

            xhr.onreadystatech0ange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject('Erro na requisição.');
                    }
                }
            }
        });
    }

    minhaPromise()
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log('Error: ' + error);
        });
    
}



// var listElement = document.querySelector('#app ul');
// var inputElement = document.querySelector('#app input');
// var buttonElement = document.querySelector('#app button');

// var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

// function renderTodos() {
//     listElement.innerHTML = '';

//     for (todo of todos) {
//         var todoElement = document.createElement('li');
//         var todoText = document.createTextNode(todo);

//         var linkElement = document.createElement('a');
        
//         linkElement.setAttribute('href', '#');
        
//         var pos = todos.indexOf(todo);

//         linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

//         var linkText = document.createTextNode('Excluir');

//         linkElement.appendChild(linkText);

//         todoElement.appendChild(todoText);
//         todoElement.appendChild(linkElement);
//         listElement.appendChild(todoElement);
//     }
// }