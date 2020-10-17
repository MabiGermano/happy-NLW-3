import express from 'express';

const app = express();

// Rotas 
// Rescursos: User nesse caso

//Query params: http://localhost:3333/users?search=texto&page=2
// Route param: http://localhost:3333/users/3 (identificador do recurso)
// Body

app.get('/users:id', (request, response) => {
    console.log(request.query)
    console.log(request.params)
    return response.json({message: "Hello world"});
})


app.listen(3333);

