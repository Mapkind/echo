window.onload = function() {
    let REGISTRY_ID;

    let facilityCodes = [];

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
                renderJSON(data, jsonContainer, "Data", "Data");
            })
            .catch(error => {
                jsonContainer.innerHTML = `<span style="color:red;">Fetch error: ${error}</span>`;
            });
        }
    }

    // Recursive function to render JSON with expandable arrays
    function renderJSON(obj, container, propName, expandPropName) {
        //expandPropName = "Results"
        if (Array.isArray(obj)) {
            const arrayWrapper = document.createElement('div');
            arrayWrapper.style.marginLeft = '20px';

            const toggleBtn = document.createElement('button');
            const label = propName ? `<b>${propName}</b> (${obj.length})` : `[Array(${obj.length})]`;
            toggleBtn.innerHTML = `[+] ${label}`;
            toggleBtn.style.cursor = 'pointer';
            toggleBtn.style.marginBottom = '5px';

            const contentDiv = document.createElement('div');
            contentDiv.style.display = 'none';

            // Expand by default if propName matches expandPropName
            if (propName && expandPropName && propName === expandPropName) {
                contentDiv.style.display = 'block';
                toggleBtn.innerHTML = `[-] ${label}`;

                if(expandPropName == "Data"){
                    expandPropName = "Results";
                }
            }

            toggleBtn.onclick = function() {
                if (contentDiv.style.display === 'none') {
                    contentDiv.style.display = 'block';
                    toggleBtn.innerHTML = `[-] ${label}`;
                } else {
                    contentDiv.style.display = 'none';
                    toggleBtn.innerHTML = `[+] ${label}`;
                }
            };

            obj.forEach((item, idx) => {
                const itemDiv = document.createElement('div');
                itemDiv.style.marginLeft = '20px';
                itemDiv.innerHTML = `<b>[${idx}]</b>: `;
                renderJSON(item, itemDiv, null, expandPropName);
                contentDiv.appendChild(itemDiv);
            });

            arrayWrapper.appendChild(toggleBtn);
            arrayWrapper.appendChild(contentDiv);
            container.appendChild(arrayWrapper);
        } 
        else if (typeof obj === 'object' && obj !== null) {
            const objWrapper = document.createElement('div');
            objWrapper.style.marginLeft = '20px';

            const keys = Object.keys(obj);
            //if (keys.length > 0) {
                const toggleBtn = document.createElement('button');
                //toggleBtn.style.marginBottom = '40px';
                const label = propName ? `<b>${propName}</b> (${keys.length})` : `(${keys.length})`;
                if(keys.length > 0){
                    toggleBtn.innerHTML = `[+] ${label}`;
                    toggleBtn.onclick = function() {
                        if (contentDiv.style.display === 'none') {
                            contentDiv.style.display = 'block';
                            toggleBtn.innerHTML = `[-] ${label}`;
                        } else {
                            contentDiv.style.display = 'none';
                            toggleBtn.innerHTML = `[+] ${label}`;
                        }
                    };
                }
                else{
                    toggleBtn.innerHTML = `[x] ${label}`;
                }
                
                toggleBtn.style.cursor = 'pointer';
                toggleBtn.style.marginBottom = '5px';

                const contentDiv = document.createElement('div');
                contentDiv.style.display = 'none';

            // Expand by default if propName matches expandPropName
            if (propName && expandPropName && propName === expandPropName) {
                contentDiv.style.display = 'block';
                toggleBtn.innerHTML = `[-] ${label}`;

                if(expandPropName == "Data"){
                    expandPropName = "Results";
                }
            }

                keys.forEach(key => {
                    const propDiv = document.createElement('div');
                    propDiv.style.marginLeft = '20px';
                    // Add property name in bold
                    //const propLabel = document.createElement('span');
                    //propLabel.innerHTML = `<b>${key}</b>: `;
                    //propDiv.appendChild(propLabel);
                    renderJSON(obj[key], propDiv, key, expandPropName);
                    contentDiv.appendChild(propDiv);
                });

                objWrapper.appendChild(toggleBtn);
                objWrapper.appendChild(contentDiv);
            //} 
            /*else {
                objWrapper.textContent = '{}';
            }*/
            container.appendChild(objWrapper);
        } else {
            const valSpan = document.createElement('span');
            valSpan.textContent = obj;

            if (propName) {
                // Don't overwrite container, just append
                var spanDiv = document.createElement('div');
                spanDiv.style.marginBottom = '5px';
                const labelSpan = document.createElement('span');
                labelSpan.innerHTML = `<b>${propName}</b>: `;
                labelSpan.style.marginLeft = '20px';
                spanDiv.appendChild(labelSpan);
                spanDiv.appendChild(valSpan);
                container.appendChild(spanDiv);
            } else {
                var spanDiv = document.createElement('div');
                spanDiv.style.marginBottom = '5px';
                spanDiv.appendChild(valSpan);
                container.appendChild(spanDiv);
            }
        }
    }
};
