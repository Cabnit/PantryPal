 // Function to make the request and update the result div
 function makeRequest() {
    fetch('www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Update the result div with the data
            document.getElementById('result').textContent = JSON.stringify(data);
        })
        .catch(error => {
            // Handle errors
            console.error('There was a problem with the request:', error);
        });
}

// Call the function when the page loads
window.addEventListener('load', makeRequest);