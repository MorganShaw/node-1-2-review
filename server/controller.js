const fakeDB = [
    {
        name: "Gengar",
        type: "ghost/poison",
        nickname: ""
    },
]

module.exports = {

    getPokemon: (req, res) => {
        //Variable or data inside the send() is received as res.data on the front end in the axios request
        res.status(200).send(fakeDB)
    },
    //req is incoming request from front-end (e.g., axios). The reason we're pulling the name, type, and nickname off the req.body is because the axios req will have a body object on it with that info. 
    addPokemon: (req, res) => {
        //need to know info of pokemon to add
        const {name, type, nickname} = req.body;
        fakeDB.push({name, type, nickname})
        res.sendStatus(200);

    },
    editPokemon: (req, res) => {
        //need to know info of pokemon to edit
        //need to know which pokemon to edit

    },
    deletePokemon: (req, res) => {
        //need to know which pokemon to delete

    }
}