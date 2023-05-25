const addForm=document.querySelector('.add');
const list=document.querySelector('.todos');
const serach=document.querySelector('.serach input');

const generateTmplate =todo=>{
    const html=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="fa-sharp fa-solid fa-trash delete"></i>     
            </li>
    `;
    list.innerHTML+=html;
}

addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const todo=addForm.add.value.trim();
    console.log(todo);
    if(todo.length >0){
        generateTmplate(todo);
        addForm.reset();
    }
   
})

list.addEventListener('click',e=>{
    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove();
    }
})


const filterTodos=term=>{
   Array.from(list.children)
   
   .filter(todo=> !todo.textContent.includes(term))  // ! işareti içerymiyorsa anlamına gelir aşağıda bu işaret yok bu yüzden içeriyor anlamına gelir
   .forEach(todo=> todo.classList.add('filtered'));
    
   Array.from(list.children)
   .filter(todo=> todo.textContent.includes(term))
   .forEach(todo=> todo.classList.remove('filtered'));

}

serach.addEventListener('keyup',()=>{
    const term=serach.value.trim();
    filterTodos(term);
})