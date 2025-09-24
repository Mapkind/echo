
let REGISTRY_ID = "110070391939";

async function getData(){

    fetch(`https://echodata.epa.gov/echo/dfr_rest_services.get_dfr?output=JSON&p_id=${REGISTRY_ID}&p_gt5yr=N`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Data: ",data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

}

getData();