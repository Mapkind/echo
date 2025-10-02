window.onload = function() {
    let REGISTRY_ID;

    let monikers = ["COS1","DAT1","DAT2","DBA3","DCA7","DCB2","DCB5","DCL1","DCM1","DCW1","DDE6","DDF8","DDO1","DFA2","DFA8","DFA9","DFH6","DFM2","DGB6","DGI1","DIB2","DJT4","DKY2","DMI4","DOT8","DOT9","DPH2","DPH6","DPL4","DPP2","DPP3","DPS3","DPX5","DRD4","DRO1","DSD6","DSF4","DSF9","DSJ6","DSJ7","DSR1","DTP2","DTP8","DVB1","DVB6","HCH2","HLA9","HLI2","HSB2","HSF6","HSM2","HVB1","HWE2","LOAK8","LSJC2","MAC6","MAJ3","MAK6","MAP5","MBA6","MWH1","ORF5","PDX8","PFL2","PIP14","PWA1","QXX1","ROC5","SAH1","SSC4","UCA3","WMS4","ABS2","ABS4","AFW2","ATL5","AVP3","AVP4","AVP6","BFI6","BFI99","BFN3","BLU1","BLV2","BNA9","BOS1","BOS2","BOS4","BUR7","BWI6","CMH6","CVG3","CVG5/7","CVG7","CVO10","DAB2","DAE8","DAL6","DAS8-OSP","DAT2-OSP","DAT6","DAT8","DBA1","DBA2","DBA2-OSP1","DBA2-OSP2","DBA2-OSP3","DBA3-OSP","DBK1-OSP","DBL1-OSP1","DBL1-OSP2","DBM2","DBM3","DBM3-OSP","DBO1","DBO1-OSP","DBO2","DBO2-OSP","DBO3","DBO6-OSP1","DBO6-OSP2","DBO7-OSP","DBU1-OSP","DCB8-OSP","DCH1","DCH2","DCH2-OSP","DCH4","DCH7","DCH7-OSP","DCH9","DCL3-OSP","DCM7","DCN1","DCX1","DCX6","DCX7-OSP","DDA1","DDA1-OSP","DDA2","DDA2-OSP1","DDA2-OSP2","DDA3","DDA3-OSP","DDA8","DDC2","DDC2-OSP1","DDC2-OSP2","DDC2-OSP3","DDC3-OSP","DDC9-OSP","DDF1-OSP","DDF6","DDP2","DDT1-OSP1","DDT1-OSP2","DDT2-OSP","DDT3-OSP","DET7","DEW2-OSP1","DEW2-OSP2","DEW4","DEW4-OSP","DEW8","DEY6","DFA2-OSP","DFL1","DFO1","DFW8","DFW8-9","DFW9","DFX3","DGE2","DGR1-OSP","DGR6-OSP1","DGR6-OSP2","DHO1","DHO4","DHO4-OSP","DHO5","DHO5-OSP1","DHO5-OSP2","DHX5","DIA3-OSP","DID1","DII1","DIL1","DIN1","DIN2","DJE2-OSP1","DJE2-OSP2","DJE2-OSP3","DJE3-OSP","DJE6-OSP","DJR6","DJX1","DJX2-OSP","DKY1","DLA2","DLA3","DLA5","DLA7","DLA7-OSP","DLA8","DLA8-OSP1","DLA8-OSP2","DLA9","DLB1","DLD7-OSP","DLI4-OSP","DLT1","DLT1-OSP1","DLT1-OSP2","DLT3-OSP","DLX1","DLX2","DMC2","DMD9-OSP","DMF5-OSP","DMH4-OSP","DMI2","DMI3","DMI3-OSP1","DMI3-OSP2","DMI6","DML1","DML2","DML5","DMO1","DMO7","DMS1","DNA1","DNA2","DNJ3","DNJ3-OSP1","DNJ3-OSP2","DNJ6","DNJ6-OSP","DNJ7-OSP1","DNJ7-OSP2","DNK5-OSP","DNK8","DNO1","DNO2-OSP","DNY1","DNY4","DNY4-OSP1","DNY4-OSP2","DNY4-OSP3","DNY4-OSP4","DOB2-OSP1","DOB2-OSP2","DOK1","DOK1-OSP","DOM1","DOM1-OSP","DOR1","DOR1-OSP1","DOR1-OSP2","DPA7","DPD1","DPD1-OSP","DPD2-OSP","DPD4-OSP1","DPD4-OSP2","DPD5","DPD5-OSP","DPH1","DPH1-OSP1","DPH1-OSP2","DPH4","DPH6-OSP","DPH7-OSP","DPP1-OSP1","DPP1-OSP2","DPX3","DPX6","DPX8","DRC1","DRC1-OSP1","DRC1-OSP2","DRC1-OSP3","DRI2","DRO1-OSP","DRT1","DRT1-OSP1","DRT1-OSP2","DRT1-OSP3","DSC1","DSC2","DSC3-OSP","DSC4-OSP","DSD1-OSP","DSD2","DSD3","DSD3-OSP","DSD9","DSE2","DSE2-OSP","DSE4","DSE4-OSP1","DSE4-OSP2","DSE4-OSP3","DSE4-OSP4","DSE4-OSP5","DSE4-OSP6","DSE4-OSP7","DSE5","DSE5-OSP1","DSE5-OSP2","DSE5-OSP3","DSF3","DSF5-OSP","DSF6","DSM1","DSX1","DSX3","DSX7","DTB2","DTG2","DTN4","DTN4-OSP","DTP1","DTW5-OSP","DUR2","DUR8","DUT1","DUT1-OSP","DWA2-OSP","DWS5","DWS5-OSP1","DWS5-OSP2","DWS5-OSP3","DWS5-OSP4","DYN9-OSP","DYX2","DYX2-OSP","EWR6/7","FAT5","FFK9","FSE2","FSE3","FTW3-4","FTW3-4-DELETE","FTW4","HAT1","HBF2","HBF5-OSP1","HBF5-OSP2","HBF6","HBI1","HBN1","HCA6","HCM1","HDA9","HDT2","HEW2","HFA1","HGE1","HHO2","HIO9","HJX1","HJX2","HLI1","HLO1","HLS1","HLU1","HMC1","HMC2","HME2","HMK2","HMK3","HMS1","HMW4","HNC3","HOK1","HPH1","HPX1","HPX2","HRC9","HRN1","HSD1","HSX2","HTC1","HTP1","HTP9","HWA2","HWA3","IBF1","IBF4","IBF5","IDC4","IDC5","ILG2","ILG8","ILG9","IND3","IND7","INY5","INY6","INY7","INY9","IOR1","ISE3","ISE7","ISF1","ISF2","ISF4","ISF5","ISG2","ISM1","ITX2","JAL1","JAU1","JBN1","JBO1","JBO2","JBO3","JBO7","JBU1","JCT1","JDA1","JDC1","JDC2","JDC3","JDE1","JDE2","JDE3","JDE4","JDT1","JGF1","JIA1","JIA2","JJF1","JJF2","JJF3","JLA1","JLA3","JLA4","JLG1","JLG2","JLG3","JMC1","JMI3","JMS1","JMS2","JOA1","JOA2","JOR1","JOR2","JOR3","JPD1","JRD2","JSA1","JSC1","JSC2","JSE1","JSE2","JSE3","JSE4","JSE5","JSE7","JSF2","JSF3","JSJ1","JSN3","JST1","JVL6","KLA1","LAL4","LAS5","LAS9","LEX5","LPK1","LUK5","MAC8","MAE1","MAF5","MAK5","MAL5","MAM3","MAO8","MAW3","MAX1","MAZ1","MCC1","MCO6","MDT2","MGE7","MKC3","MQJ3","MSP5","MTN5","MTN8","OAK7","OMA5","ORF4","PCA4","PDX18","PHL7/9","PHX9","PIN1","PKC1","POC2","POH2","PPA2","PSP3","PTX1","PTX3","QXX5","QXX6","QXY2","QXY4","QXY8","QXZ1","QZZ7","RIC7","SBD4","SBD5","SBN1","SCK9","SCO2","SDE1","SDL2","SIA1","SJA1","SJC9","SLG1","SLV1","SMF9","SOR2","SPA4","SSE1","SSP2","SSY1","STL6/7","STP1","STP2","SWF4","TCY1","TCY2","TOL3","UCA1","UCA2","UCA4","UCA6","UFL2","UIL1","UMA3","UMN1-RETROFIT","UNV2","UNY1","UOR1","USC1","USF3","UWA4","UWA5","UWI1","WFL3-3","WNM4","WOR1","WOR3-1","WTX7-2","WZN1","XAL1","XAL2","XEW2","XFL1","XLX1","XLX6","ZFO1","ZYO1","ZYO3"];
    let monikers2 = [];
    let monikerResults = [];

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

    function getMonikers(moniker){
        //iterate through moniker list

        fetch(`https://echodata.epa.gov/echo/echo_rest_services.get_facilities?output=JSON&p_fn=${moniker}&tablelist=Y&summarylist=Y`)
                //fetch(`https://echodata.epa.gov/echo/dfr_rest_services.get_dfr?output=JSON&p_id=${moniker}&p_gt5yr=N`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Moniker Data: ",data);
                    monikerResults.push(data);
                })
                .catch(error => {
                    console.error('Fetch error:', error);
                });            
        
    }

    if(monikers.length > 0){
        for (let i = 0; i < monikers.length; i++){
            setTimeout(() => {
                var moniker = monikers[i];
                getMonikers(moniker);
            }, i * 3000); // 3 seconds interval between each request
        }
    }
    console.log("monikerResults: ",monikerResults);
};
