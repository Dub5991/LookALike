// Function to toggle color modes
function toggleSuccessMode() {
    document.body.classList.toggle('text-success');     // Add or remove the 'text-success' class from the body         
}

// Function to validate email format
function validateEmail(email) { 
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;           // Regular expression for email validation
    return re.test(String(email).toLowerCase());       // Return true if email is valid, false otherwise
}

// Function to fetch data from an API and log it to the console
async function fetchData(apiUrl) {                     // Function is asynchronous
    try {                                              // Try to fetch data from the API
        const response = await fetch(apiUrl);          // Wait for the fetch request to complete
        const data = await response.json();            // Wait for the response to be converted to JSON
        console.log(data);                             // Log the data to the console 
    } catch (error) {                                  // Log an error if there is an issue fetching data
        console.error('Error fetching data:', error);  // Log the error to the console
    }
}

// Function to display a notification
function showNotification(message, type = 'info') {     // Default value for type is 'info'
    const notification = document.createElement('div'); // Create a new div element
    notification.className = `notification ${type}`;    // Add classes to the div element
    notification.innerText = message;                   // Set the text content of the div element
    document.body.appendChild(notification);            // Append the div element to the body of the document
    setTimeout(() => {                                  // Remove the notification after 3 seconds
        notification.remove();                          // Remove the div element from the document
    }, 3000);
}