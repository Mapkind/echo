
//let REGISTRY_ID = "110070391939";
let REGISTRY_ID = "110003476462";

async function getData(){

    fetch(`https://echodata.epa.gov/echo/dfr_rest_services.get_dfr?output=JSON&p_id=${REGISTRY_ID}&p_gt5yr=N`) // Replace with your desired URL
    .then(response => {
        // Check if the request was successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Parse the response body as JSON
        return response.json();
    })
    .then(data => {
        // Handle the retrieved data
        console.log("Data: ",data);
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch operation
        console.error('Fetch error:', error);
    });

}

getData();