const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! Gabriel')
})
app.use(express.json());
app.post('/filmes',(req,res) => {
const {titulo, genero} = req.body;
res.send(`Filmes: ${titulo} - Genero: ${genero}, recebido`);
});
app.post('/livros',(req,res) => {
const {autor, nome, editora} = req.body;
res.send(`Autor: ${autor} - Nome: ${nome} - Editora ${editora}, recebido`);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})