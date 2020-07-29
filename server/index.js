
const express = require('express');
//app is the instance of our express server.
const app = express();
//Top level middleware - functions that run before any endpoint is hit.
app.use(express.json());
//Endpoints - full CRUD creat read update delete.
//Restful endpoints - a convention for naming endpoints
//In an express endpoint, the first argument is the url that the endpoint is looking for, second argument is the function that runs.

//Three types of sending information on endpoints: queries, parameters, body. In axios, can't use get request to send body. Body can be big object. Body only on put and delete? Need to look at up.
app.get("api/pokemon", ctrl.getPokemon);
//body for post request should look like: {name: "", type: "", nickname: ""}
app.post("api/pokemon", ctrl.addPokemon);
app.put("api/pokemon", ctrl.editPokemon);
app.delete("api/pokemon", ctrl.deletePokemon);

const port = 4050;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

