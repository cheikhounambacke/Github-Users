let form = document.querySelector('form')
let searchVal = document.querySelector('.search')
let button = document.querySelector('.button')
let parentEl = document.querySelector('.info')
let ul = document.querySelector('ul')




// submit event

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let search = searchVal.value;
    
// fetching api
    if(search ===''){
        alert('Search field is blank')
    } else{
        fetch("https://api.github.com/users/"+search)
        .then((result)=> result.json())
        .then((data)=>{
            let info= {
                name: data.name,
                profile: data.avatar_url,
                description: data.bio,
                followers: data.followers,
                following: data.following
            }
      

            
            // name
            let name = document.querySelector('.name')
            name.textContent = info['name']
            parentEl.appendChild(name)
                // profile
            let imgEl = document.querySelector('.profile')
            imgEl.src = info['profile'];
            parentEl.appendChild(imgEl)           
                // followers
            let followers = document.querySelector('.followers')
            followers.textContent = `Followers: ${info['followers']}`
            ul.appendChild(followers)
                    //following
            let following = document.querySelector('.following')
            following.textContent = `Following: ${info['following']}`
            ul.appendChild(following) 
            
            
        })
    

    }
   

})



   







