let input = prompt('Please enter command (new, list, delete, quit) ');
const todos = ['Waterplans', 'Clean'];
while(input !== 'quit' && input !== 'q') {
    if (input ==='list') {
        console.log('**********');
        for(let i = 0; i < todos.length; i++) {
            console.log(i + ": " + todos[i])
        }
        console.log('**********');
    
    }else if (input === 'new') {
        const newTodo = prompt('Please enter newTodo');
        todos.push(newTodo); 
        console.log(`Added[${newTodo}]`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('Please enter the index that you want to delete'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Deleted[${deleted[0]}]`);
        } else {
            console.log('Please put valid index');
        }
        
    }
    input = prompt('Please enter command (new, list, delete, quit) ');
}
console.log('finished the app');