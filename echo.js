
let REGISTRY_ID = "110070391939";

async function getData(){
    /*const query = await fetch(
        //`https://echogeo.epa.gov/arcgis/rest/services/ECHO/Facilities/MapServer/0/query?where=REGISTRY_ID+%3D+%27${REGISTRY_ID}%27&outFields=*&returnGeometry=true&f=pjson`,
        //`https://echodata.epa.gov/echo/dfr_rest_services.get_dfr?output=JSONP&p_id=${REGISTRY_ID}&p_gt5yr=N`,
        "https://echodata.epa.gov/echo/dfr_rest_services.get_dfr?output=JSONP&p_id=110070391939&p_gt5yr=N",
        { 
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
         /
    );*/

    //const response = query;
    //const response = await query.json();

    //console.log("Response: ",response);

    fetch('https://echodata.epa.gov/echo/dfr_rest_services.get_dfr?output=JSON&p_id=110070391939&p_gt5yr=N') // Replace with your desired URL
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