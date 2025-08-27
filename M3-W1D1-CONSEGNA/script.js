const linkToRemove = document.querySelectorAll(".list-unstyled")
const btn = document.querySelectorAll(".mb-0")[0].querySelector(":first-child")
const relativeToRemove = document.querySelectorAll(".mb-0")[0]
const authors = document.querySelectorAll(".blog-post-meta")

console.log(authors)



for (author of authors) {
    

        console.log(author)
        console.log(author.innerText)

        let alertText  = author.innerText.split("di ")
        
        author.addEventListener("mouseenter", () => {

            window.alert(alertText[1])
        })
    

    
}





function deleteLink () {
    if (linkToRemove[1].innerHTML.includes('<li><a href="#">Twitter</a></li>')) {
 
    let newHTML = linkToRemove[1].innerHTML.replaceAll('<li><a href="#">Twitter</a></li>','')
    linkToRemove[1].innerHTML = newHTML

    }
}

deleteLink()

function deleteRelative () {

    relativeToRemove.remove()

}








btn.addEventListener("click", deleteRelative)
