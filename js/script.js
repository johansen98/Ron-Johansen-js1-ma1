//Question 1
const cat = {
    complain: () => {
        console.log("Meow!")
    }
}

//Question 2
 var updateHeading = document.querySelector("h3");

 updateHeading.innerHTML = "updated Heading"


//Question 3
 updateHeading.style.fontSize = "2em"


// Question 4
updateHeading.classList.add("subheading");



//Question 5
var paragraphs = document.querySelectorAll("p");

for(i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = "red"
}



//Question 6
var resultsContainer = document.querySelector(".results")

resultsContainer.innerHTML = "<p>New paragraph</p>"
resultsContainer.style.backgroundColor = "yellow"     //i was not sure if u ment to change the background colour of "p" or the whole div so..



//Question 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function getCatNames(list){
    for(i = 0; i < list.length; i++){
        console.log(list[i].name)
    }
}

getCatNames(cats);


//Question 8

document.querySelector(".cat-container").innerHTML = createCats(cats);

function createCats(cats){

    var html = "";

    for(i = 0; i < cats.length; i++){
        var age = cats[i].age;
        if(!age){
            age = "Age Unknown";
        }
        html += `<div><h5>${cats[i].name}</h5><p>${age}</p></div>`
           
    }
    return html;
}
