// 1. Count the number of records in the "Current Quarter Details" table.
var tableItems = document.querySelectorAll('td')
console.log(tableItems.length)

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.
//set attribute (src) make it equal, and change alt attribute.
var picItems = document.querySelectorAll('.img-responsive')
picItems.forEach(function(picItem) {
    picItem.innerHTML = '<a src="http://unsplash.it/400?random">' + 'alt="Image is about..."' + picItem.getElementsByClassName('img-responsive') + '</a>'
    console.log(picItem.innerHTML)
})


// // 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.



// var randomNumber = Math.round(Math.random()*100000)/10
// //console.log(randomNumber)
// var dotReplaces = document.querySelectorAll('text-muted')
//     dotReplaces.forEach(function(dotReplace) {
//         console.log(dotReplace.getAttribute('...'))
        //dotReplace.innerHTML = '<div> randomNumber </div>'
    //})
    //console.log(dotReplaces)
// generate random with MAth.random(), then
// accounting.js or use array skills


//
// // 4. Change the currently selected left side menu item from Overview to Reports.
// unselect overview, and select reports, use class list
//
var switchColors = document.querySelectorAll('.nav-sidebar > li')



// // 5. Set the default search input value to "Q4 sales".
//
//
//
// // 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
// hover rows in bootstrap classes (add a class to the table)
//
// // 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
//
//
// // 8. Change the table header names to: ID, First Name, Last Name, Department, Client.
// change IDs
//
// // 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]
// an object representing each row like the example above
//
// // 10. Make each word in the table capitalized.
// first letter to be capitalized
