// Step 1: add data to page in table

// from data.js
var tableData = data;
//console.log(tableData)

// render the table
var tbody = d3.select('tbody');
tableData.forEach((ufoSighting) => {
    var row = tbody.append('tr');
    Object.entries(ufoSighting).forEach(([key,value]) => {
        var cell = tbody.append('td');
        cell.text(value);
    })
})

// Reset Button

var reset = d3.select('#reset-btn')
reset.on('click', function(){
  d3.event.preventDefault()
  // clear the previous data
  document.querySelector('tbody').innerHTML = ''
  tableData.forEach((ufoSighting) => {
      var row = tbody.append('tr');
      Object.entries(ufoSighting).forEach(([key,value]) => {
          var cell = tbody.append('td');
          cell.text(value);
      })
  })
})

// Step 2: create functional date search

// var submit = d3.select("#filter-btn");

// submit.on('click', function(){
//   d3.event.preventDefault()
//   var dateField = d3.select('#datetime')
//   var dateText = dateField.property('value')
//   console.log(dateText)
//   var filteredData = tableData.filter(each => each.datetime === dateText)
//   console.log(filteredData)
//   // clear the previous data
//   document.querySelector('tbody').innerHTML = ''
//
//   var tbody = d3.select('tbody')
//   filteredData.forEach((ufoSighting) => {
//     var row = tbody.append('tr')
//     Object.entries(ufoSighting).forEach(([key,value]) => {
//       var cell = tbody.append('td');
//       cell.text(value)
//     })
//   })
// })

// Step 3: create search for city, state, country, and shape

var submit = d3.select("#filter-btn");
submit.on('click',function(){
  
  // prevent reload
  d3.event.preventDefault()
  var dateInput = d3.select('#datetime').property('value')
  var cityInput = d3.select('#city').property('value')
  var stateInput = d3.select('#state').property('value')
  var countryInput = d3.select('#country').property('value')
  var shapeInput = d3.select('#shape').property('value')
  //console.log(dateInput)
  // use if statement to check if blank, if not blank

  if (dateInput !== '') {
    var filteredData = tableData.filter(each => (each.datetime === dateInput))
  } else {
    // needed to initially render the data
    var filteredData = tableData
  }

  // var filteredData = tableData.filter(each => (each.datetime === dateInput && each.city.toLowerCase() === cityInput.toLowerCase()))

  if (cityInput !== '') {
    filteredData = filteredData.filter(each => (each.city.toLowerCase() === cityInput.toLowerCase()))
  }

  if (stateInput !== '') {
    filteredData = filteredData.filter(each => (each.state.toLowerCase() === stateInput.toLowerCase()))
  }

  if (countryInput !== '') {
    filteredData = filteredData.filter(each => (each.country.toLowerCase() === countryInput.toLowerCase()))
  }

  if (shapeInput !== '') {
    filteredData = filteredData.filter(each => (each.shape.toLowerCase() === shapeInput.toLowerCase()))
  }
  console.log(filteredData)

  // clear the previous data
  document.querySelector('tbody').innerHTML = ''
  var tbody = d3.select('tbody')
  filteredData.forEach((ufoSighting) => {
    var row = tbody.append('tr')
    Object.entries(ufoSighting).forEach(([key,value]) => {
      var cell = tbody.append('td')
      cell.text(value)
    })
  })
})

// var cityField = d3.select('#city')
// cityField.on('input', function(){
//   var cityText = d3.event.target.value;
//   //console.log(dateText)
// })
//
// var stateField = d3.select('#state')
// stateField.on('input', function(){
//   var dateText = d3.event.target.value;
//   //console.log(dateText)
// })
//
// var countryField = d3.select('#country')
// countryField.on('input', function(){
//   var countryText = d3.event.target.value;
//   //console.log(dateText)
// })
//
// var shapeField = d3.select('#shape')
// shapeField.on('input', function(){
//   var shapeText = d3.event.target.value;
//   //console.log(dateText)
// })

//data.forEach((weatherReport) => {
//  var row = tbody.append("tr");
//  Object.entries(weatherReport).forEach(([key, value]) => {
//    var cell = tbody.append("td");
//    cell.text(value);
//  });
//});
