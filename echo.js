window.onload = function() {
    let REGISTRY_ID;

    const buttonMenu = document.getElementById("buttonMenuDiv");
    //buttonMenu.style.width = "100px"; div.style.height = "100px";
    console.log("buttonMenu: ",buttonMenu);

    const submitButton = document.createElement('button');
    submitButton.innerHTML = "GIMME THE DATA";
    //submitButton.style.width = "100px"; submitButton.style.height = "100px";
    const idInput = document.createElement("input");
    idInput.setAttribute("type", "text");
    idInput.setAttribute("placeholder", "FRS ID");
    idInput.setAttribute("id", "idInput");

    //document.body.appendChild(buttonMenu);
    buttonMenu.appendChild(idInput);
    buttonMenu.appendChild(submitButton);

    submitButton.addEventListener('click', getData);

    async function getData(){

        if(idInput.value){
            REGISTRY_ID = idInput.value
            
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
    }
};
