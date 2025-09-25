window.onload = function() {
    let REGISTRY_ID;

    const buttonMenu = document.getElementById("buttonMenuDiv");

    const submitButton = document.createElement('button');
    submitButton.innerHTML = "GIMME THE DATA";
    
    const idInput = document.createElement("input");
    idInput.setAttribute("type", "text");
    idInput.setAttribute("placeholder", "FRS ID");
    idInput.setAttribute("id", "idInput");

    buttonMenu.appendChild(idInput);
    buttonMenu.appendChild(submitButton);

    // Create a container for displaying the JSON
    let jsonContainer = document.createElement('div');
    jsonContainer.setAttribute('id', 'jsonContainer');
    jsonContainer.style.marginTop = '20px';
    buttonMenu.appendChild(jsonContainer);

    submitButton.addEventListener('click', getData);

    async function getData(){
        jsonContainer.innerHTML = ""; // Clear previous results

        if(idInput.value){
            REGISTRY_ID = idInput.value;
            
            fetch(`https://echodata.epa.gov/echo/dfr_rest_services.get_dfr?output=JSON&p_id=${REGISTRY_ID}&p_gt5yr=N`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Data: ",data);
                renderJSON(data, jsonContainer);
            })
            .catch(error => {
                jsonContainer.innerHTML = `<span style="color:red;">Fetch error: ${error}</span>`;
            });
        }
    }

    // Recursive function to render JSON with expandable arrays
    function renderJSON(obj, container) {
        if (Array.isArray(obj)) {
            const arrayWrapper = document.createElement('div');
            arrayWrapper.style.marginLeft = '20px';

            const toggleBtn = document.createElement('button');
            toggleBtn.textContent = `[+] Array(${obj.length})`;
            toggleBtn.style.cursor = 'pointer';
            toggleBtn.style.marginBottom = '2px';

            const contentDiv = document.createElement('div');
            contentDiv.style.display = 'none';

            toggleBtn.onclick = function() {
                if (contentDiv.style.display === 'none') {
                    contentDiv.style.display = 'block';
                    toggleBtn.textContent = `[-] Array(${obj.length})`;
                } else {
                    contentDiv.style.display = 'none';
                    toggleBtn.textContent = `[+] Array(${obj.length})`;
                }
            };

            obj.forEach((item, idx) => {
                const itemDiv = document.createElement('div');
                itemDiv.style.marginLeft = '20px';
                itemDiv.innerHTML = `<b>[${idx}]</b>: `;
                renderJSON(item, itemDiv);
                contentDiv.appendChild(itemDiv);
            });

            arrayWrapper.appendChild(toggleBtn);
            arrayWrapper.appendChild(contentDiv);
            container.appendChild(arrayWrapper);
        } else if (typeof obj === 'object' && obj !== null) {
            const objWrapper = document.createElement('div');
            objWrapper.style.marginLeft = '20px';
            for (let key in obj) {
                const keyDiv = document.createElement('div');
                keyDiv.innerHTML = `<b>${key}</b>: `;
                renderJSON(obj[key], keyDiv);
                objWrapper.appendChild(keyDiv);
            }
            container.appendChild(objWrapper);
        } else {
            const valSpan = document.createElement('span');
            valSpan.textContent = obj;
            container.appendChild(valSpan);
        }
    }
};
