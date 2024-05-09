 // Function to make the request and update the result div
 function makeRequest() {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=cucumber')
        .then(response => {
            //the ! means that if the response is NOT true then it will throw a new error which catch will tell us
            if (!response.ok) {

                throw new Error('No recipes found');

            }
            //This says that if the response was true then it'll return show the jason file
            return response.json();

        })
        .then(data => {
            // Update the result div with the data
            document.getElementById('result').textContent = JSON.stringify(data);
        })
        // this will make it so if there is an error it will let us know
        .catch(error => console.error (error))
        };


// Call the function when the page loads
window.addEventListener('load', makeRequest);