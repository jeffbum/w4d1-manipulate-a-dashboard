// 1. Count the number of records in the "Current Quarter Details" table.
var tableItems = document.querySelectorAll('td')
console.log(tableItems.length)

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.
//set attribute (src) make it equal, and change alt attribute.
var picItems = document.querySelectorAll('img')
picItems[0].setAttribute('src', 'http://unsplash.it/400?image=1')
picItems[0].setAttribute('alt', 'first image')

picItems[1].setAttribute('src', 'http://unsplash.it/400?image=2')
picItems[1].setAttribute('alt', 'second image')
picItems[2].setAttribute('src', 'http://unsplash.it/400?image=3')
picItems[2].setAttribute('alt', 'third image')

picItems[3].setAttribute('src', 'http://unsplash.it/400?image=4')
picItems[3].setAttribute('alt', 'fourth image')
 console.log(picItems)

// // 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.


var dotReplaces = document.querySelectorAll('.text-muted')
    dotReplaces.forEach(function(dotReplace) {
        var randomNumber = Math.round(Math.random()*100000)
        dotReplace.innerHTML = '$' + randomNumber
        //console.log(dotReplace)
    })

// // 4. Change the currently selected left side menu item from Overview to Reports.
// unselect overview, and select reports, use class list
//
var switchColors = document.querySelectorAll('.nav-sidebar > li')
switchColors[0].classList.remove('active')
switchColors[1].classList.add('active')
console.log(switchColors)





// // 5. Set the default search input value to "Q4 sales".
var searchInputs = document.querySelectorAll('.form-control')
searchInputs.forEach(function(searchInput) {
    searchInput.setAttribute('placeholder', 'Q4 sales')
    console.log(searchInput)
})


// // 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
// hover rows in bootstrap classes (add a class to the table)
var tableHovers = document.querySelectorAll('.table')
    tableHovers.forEach(function(tableHover) {
        tableHover.classList.add('table-hover')
    })


// // 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
//will have to use index in [] at some point, but not sure where.
var successClasses = document.querySelectorAll('tr')
        successClasses[7].classList.add('success')
        successClasses[8].classList.add('success')
        successClasses[9].classList.add('success')
        successClasses[10].classList.add('success')
        console.log(successClasses)


// // 8. Change the table header names to: ID, First Name, Last Name, Department, Client.
// change IDs

var changeHeaders = document.querySelectorAll('th')
    changeHeaders[0].innerHTML = 'ID'
    changeHeaders[1].innerHTML ='First Name'
    changeHeaders[2].innerHTML ='Last Name'
    changeHeaders[3].innerHTML ='Department'
    changeHeaders[4].innerHTML ='Client'
    console.log(changeHeaders)



//
// // 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]
// an object representing each row like the example above
//




// // 10. Make each word in the table capitalized.
// first letter to be capitalized
