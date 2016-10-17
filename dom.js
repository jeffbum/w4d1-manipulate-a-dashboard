var body = document.body //starting point into actual page
console.log(body)

var h1 = document.body.childNodes
console.log(h1)

var helloWorld = h1.innerHTML
console.log(helloWorld)

h1.innerHTML = 'Hello Universe'


console.dir(h1)

//will generally never do the step above. Purely academic

//more oftenly used methods
var helloh1 = document.getElementById('hello')
console.log(helloh1)

var navItems = document.getElementsByClassName('nav-item')
console.log(navItems)
//below only used in newer browsers (query selector)
//inside parenthesis, use css naming of ID and class ( #, .) It returns an array.
var navItems = document.querySelectorAll('body *')
console.log(navItems)
//below we don't want an array of one item, so we just use select, not select all.
var helloh1 = document.querySelector('#hello')
console.log(helloh1)

//Array.from takes something to be an array, wrap inside it the "array", to use array methods.
//console.log(Array.from(navItems).includes('li'))
navItems.forEach(function(navItem) {
    //console.dir(navItem)
    //console.log(navItem.nodeName)

    navItem.addEventListener('mouseover', function(e){
        e.target.classList.add('red')
    })
        navItem.addEventListener('mouseout', function(e){
            e.target.classList.remove('red')
    })
        navItem.addEventListener('click', function(e){
            e.target.classList.add()
    })
    })
//     if (navItem.tagName === 'LI' && navItem.classList.contains('active')) {
//         //navItem.style.color = 'red'
//         navItem.classList.add('red')
//     }
//})

var navItems = document.querySelectorAll('.nav-item')
navItems.forEach(function(navItem) {
    console.log(navItem.id)
    console.log(navItem.tagName)
    console.log(navItem.getAttribute('title'))
    console.log(navItem.setAttribute('title', 'Foo'))
    console.log(navItem.getAttribute('data-details'))
    navItem.innerHTML = '<a href="http://google.com">' + navItem.getAttribute('data-details') + '</a>'
    console.log(navItem.innerHTML)
})

var searchInput = document.getElementById('search')
//var searchInput = document.querySelector('#search')

searchInput.setAttribute('value', 'pizza parties in my area')
searchInput.value = 'movies near me'
//the two things above do the same thing,

//two lines below are equivalent in doing the same thing.
alert(searchInput.value)
alert(searchInput.getAttribute('value'))
