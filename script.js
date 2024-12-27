function login()
{
    const user=document.querySelector('input[type="text"]').value;
    const pass=document.querySelector('input[type="password"]').value;
    const uservalid=/^[a-zA-Z]+$/;
    if(!user||!pass)
    {
        alert("Enter both username and password");
    }
    else if(!uservalid.test(user))
    {
        alert("Username should contain only letters")
    }
    else if(pass<6)
    {
        alert("Password should be atleast 6 characters long");
    }
    else
    {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('todo-section').style.display = 'block';
    }
}


function add()
{
    let item=document.querySelector('.list input[type="text"]').value;
    let task=document.getElementById("demo");
    const valid=/^[a-zA-Z\s]+$/; 
    if(item=="")
    {
        alert("Field is required!!! Enter the task ");
    }
    else if(!valid.test(item))
    {
        alert("Task should only contains letters and spaces");
    }
    else
    {
        let newtask=document.createElement("ul");
        //task-text
        let tasktext=document.createElement("span");
        tasktext.classList.add("task-text");
        tasktext.textContent=item;
        //task-icons
        let taskicons=document.createElement("span");
        taskicons.classList.add("task-icons");
        //fixing icon for trash
        let trashicon=document.createElement("i");
        trashicon.classList.add("fa-solid","fa-trash");
        trashicon.onclick=function()
        {
            removeitem(this);
        }
        //fixing icon for edit
        let editicon=document.createElement("i");
        editicon.classList.add("fa-solid","fa-pen-to-square");
        editicon.onclick=function()
        {
            edititem(this);
        }
        //fixing icon for marktick
        let tickicon=document.createElement("i");
        tickicon.classList.add("fa-regular","fa-square");
        tickicon.onclick=function()
        {
            marktick(this);
        }
        //appending both icon to taskicon
        taskicons.appendChild(trashicon);
        taskicons.appendChild(editicon);
        taskicons.appendChild(tickicon);
        //appending both text and icon to newtask
        newtask.appendChild(tasktext);
        newtask.appendChild(taskicons);

        task.appendChild(newtask);

    }
    document.querySelector('.list input[type=text]').value="";
}
function removeitem(element)
{
    element.parentElement.parentElement.remove();
}
function edititem(element)
{
    let currentitem=element.parentElement.previousElementSibling.textContent;
    document.querySelector('.list input[type="text"]').value=currentitem;
    element.parentElement.parentElement.remove();
}
function marktick(element) 
{
    if (element.classList.contains('fa-square')) 
    {
        element.classList.remove('fa-square');
        element.classList.add('fa-square-check');
    } 
    else 
    {
        element.classList.remove('fa-square-check');
        element.classList.add('fa-square');
    }
}
