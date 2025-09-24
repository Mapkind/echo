
let REGISTRY_ID = "110070391939";

const query = await fetch(
    `https://echogeo.epa.gov/arcgis/rest/services/ECHO/Facilities/MapServer/0/query?where=REGISTRY_ID+%3D+%27${REGISTRY_ID}%27&outFields=*&returnGeometry=true&f=pjson`,
    { method: 'GET' }
);

const response = await query.json();

console.log("Response: ",response);