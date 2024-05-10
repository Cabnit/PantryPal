 // Function to make the request and update the result div
 function makeRequest() {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + encodeURIComponent(document.getElementById('ingredients-search').value))
        .then(response => {
            //the ! means that if the response is NOT true then it will throw a new error which catch will tell us
            if (!response.ok) {

                throw new Error('No recipes found');

            }
            //This says that if the response was true then it'll show the jason file
            return response.json();

        })
        .then(data => {
            // Update the result div with the data
            for(i = 0; i < data.meals.length; i++){
                console.log("test")
                document.getElementById('result').innerHTML += `
                <h1> ${data.meals[i]["strMeal"]} </h1>
                <img src="${data.meals[i]["strMealThumb"]}">
                `
            }
            
        })
        // this will make it so if there is an error it will let us know
        .catch(error => console.error (error))
        };

function kms(){
    makeRequest()
    loadRecepie(5496)
}

function loadRecepie(recepieId){
    console.log(recepieId)
}
