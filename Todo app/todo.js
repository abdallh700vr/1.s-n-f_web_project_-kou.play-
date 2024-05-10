
//here we control if the user clicked ,,
document.getElementById("submit").addEventListener("click",create_todo)
//if the user clicked then we call the create_todo function
function create_todo()
{
//here we read the text in the input
let text_child = document.getElementById("input").value 
let li_array =document.getElementsByTagName("li");
let flag_done = false;

//here we control if the text bigger then 20 charcaters or smaller then 5
if(text_child.length <5)
 {
        return false;
 }
 else if(text_child.length > 20 )
{
    return false;
}


// we (create / append) the html tags

let li_element = document.createElement("li")
let h3_elemant = document.createElement("h3")

//here drop the text we got from the input
let text_element = document.createTextNode(text_child)

//createing buttons for the locak to do 
let delete_element = document.createElement("button")
let done_element = document.createElement("button")
let edit_element = document.createElement("button")


//buttons names
delete_element.innerHTML = "DELETE"
done_element.innerHTML = "DONE"
edit_element.innerHTML = "EDİT"

//appending
h3_elemant.appendChild(text_element)
li_element.appendChild(h3_elemant)
li_element.appendChild(delete_element)
li_element.appendChild(done_element)
li_element.appendChild(edit_element)
document.getElementById("list_ul").appendChild(li_element)
//playing with the buttons css


//delete button css
delete_element.style.left = "700px"
delete_element.style.borderRight =" 2px solid aquamarine"


//done button css 
done_element.style.left ="580px"
done_element.style.borderRight ="1px solid aquamarine"
done_element.style.color = "gold"


//edit button css
edit_element.style.color = "rgb(0, 255, 213)"
edit_element.style.left = "460px"
edit_element.style.borderLeft = "1px solid aquamarine"


//here we control if the user want to delete the todo 
delete_element.addEventListener("click",()=>{

   let Confirmed=  confirm(`are you sure`)


    if(Confirmed)
    document.getElementById("list_ul").removeChild(li_element)


})

//here we control if the user to make the todo done
done_element.addEventListener("click",()=>{
    if(h3_elemant.style.textDecoration != "line-through")
    {
        h3_elemant.style.textDecoration = "line-through"
        h3_elemant.style.color = "gold"
        document.getElementById("list_ul").insertBefore(li_element,li_array[li_array.length])
        flag_done = true
    }
    else
    {
        h3_elemant.style.textDecoration = "none"
        h3_elemant.style.color = "aquamarine"
        document.getElementById("list_ul").insertBefore(li_element,li_array[0])
        flag_done = false
    }
   
    
    
})




//here er control if the user clicked to the edit button if he did we take input from him using prompt function
edit_element.addEventListener("click",()=>{
    let edit_text = prompt("edit you to-do")
    
    if(edit_text !== null && edit_text.length>=5)
        {
            h3_elemant.innerHTML = edit_text
        }
        else
        return 0 ;

})
 

}
