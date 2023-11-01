let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let rightnav = document.querySelector('.rightnav');
let navlist = document.querySelector('.nav-list');
let logo = document.getElementById('logo');
let img = document.getElementById('rmimg');
let search = document.getElementById('search');
let links = document.links;
let str = "opportunities";


burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp');
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
});


logo.addEventListener('click', ()=>{
    location.href = '#home';
})

// Searching Algorithm for website
search.addEventListener('input',()=>{
    let inputVal = search.value.toLowerCase();
    // console.log(inputVal)
    let sec = document.getElementsByClassName('section');
    Array.from(sec).forEach(function(element){
        let txt = element.getElementsByClassName('sort')[0].innerHTML;
        // console.log(txt)
        if(txt.includes(inputVal)){
            element.style.backgroundColor =  "yellow";
        }
        else
        {
            element.style.backgroundColor =  "greenyellow";
        }
        if(search.value == ""){
            location.reload();
        }
    })
})
