document.getElementById('post-btn').addEventListener("click",function() {
    const textArea = document.getElementById('text-area');
    const value = textArea.value;
    const newElement =document.createElement('p')
    newElement.innerText = value ;
    
    container.appendChild(newElement);
    textArea.value = " "
     
 })