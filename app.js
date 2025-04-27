const express = require('express');
const app = express();

const usersData = [ 
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' }, { id: 2, name: 'Bob', age: 35, specialty: 'developers' }, 
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' }, { id: 4, name: 'David', age: 25, specialty: 'QAs' }, 
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' }, { id: 6, name: 'Frank', age: 28, specialty: 'marketing' }, 
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' }, { id: 8, name: 'Hank', age: 27, specialty: 'QAs' }, 
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' }, { id: 10, name: 'Jack', age: 29, specialty: 'marketing' }, 
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' }, { id: 12, name: 'Leo', age: 26, specialty: 'QAs' }, 
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' }, { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' }, 
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' }, { id: 16, name: 'Paul', age: 24, specialty: 'QAs' }, 
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' }, { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' }, 
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' }, { id: 20, name: 'Tom', age: 29, specialty: 'QAs' }, 
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' }, { id: 22, name: 'Victor', age: 27, specialty: 'marketing' }, 
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' }, { id: 24, name: 'Xander', age: 31, specialty: 'QAs' }, 
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' }, { id: 26, name: 'Zack', age: 28, specialty: 'marketing' }, 
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' }, { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' }, 
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' }, { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
];


function templateUser(user){
    return `
    <li>
    <h3>${user.name}</h2>
    <p>Edad: ${user.age}</p>
    <p>Especialidad: ${user.specialty}</p>
    </li>`
}

const endpoints = ["/marketing", "/developers", "/QAs", "/ventas"];

app.get('/', (req, res) => {
    let response = `
    <div>
        <a href="/">Index</a>
        <a href="/marketing">Marketing</a>
        <a href="/developers">Desarrolladores</a>
        <a href="/QAs">QA</a>
        <a href="/ventas">Ventas</a>
    </div>
    <h2>Lista de usuarios Totales</h2>
    <ul>`;
    usersData.forEach(user => {
        response += templateUser(user);
    });
    response += `</ul>`;
  res.send(response);
});


for (endpoint of endpoints) {
    app.get(endpoint, (req, res) => {
        let response = `
        <div> Generado desde un Bucle</div>
        <div>
            <a href="/">Index</a>
            <a href="/marketing">Marketing</a>
            <a href="/developers">Desarrolladores</a>
            <a href="/QAs">QA</a>
            <a href="/ventas">Ventas</a>
        </div>
        <h2>Lista de usuarios de ${req.path}</h2>
        <ul>`;
        path = req.path.replace('/','');
        usersData.forEach(user => {
            if(user.specialty==path) response += templateUser(user);
        });
        response += `</ul>`;
      res.send(response);
    });
}
/*

app.get('/marketing', (req, res) => {
    let response = `
    <div>
        <a href="/">Index</a>
        <a href="/marketing">Marketing</a>
        <a href="/developers">Desarrolladores</a>
        <a href="/QAs">QA</a>
        <a href="/ventas">Ventas</a>
    </div>
    <h2>Lista de usuarios de ${req.path}</h2>
    <ul>`;
    path = req.path.replace('/','');
    usersData.forEach(user => {
        if(user.specialty==path) response += templateUser(user);
    });
    response += `</ul>`;
    res.send(response);

});
app.get('/developers', (req, res) => {
    let response = `
    <div>
        <a href="/">Index</a>
        <a href="/marketing">Marketing</a>
        <a href="/developers">Desarrolladores</a>
        <a href="/QAs">QA</a>
        <a href="/ventas">Ventas</a>
    </div>
    <h2>Lista de usuarios de ${req.path}</h2>
    <ul>`;
    path = req.path.replace('/','');
    usersData.forEach(user => {
        if(user.specialty==path) response += templateUser(user);
    });
    response += `</ul>`;
  res.send(response);
});
app.get('/QAs', (req, res) => {
    let response = `
    <div>
        <a href="/">Index</a>
        <a href="/marketing">Marketing</a>
        <a href="/developers">Desarrolladores</a>
        <a href="/QAs">QA</a>
        <a href="/ventas">Ventas</a>
    </div>
    <h2>Lista de usuarios de ${req.path}</h2>
    <ul>`;
    path = req.path.replace('/','');
    usersData.forEach(user => {
        if(user.specialty===path) response += templateUser(user);
    });
    response += `</ul>`;
  res.send(response);
});
app.get('/ventas', (req, res) => {
    let response = `
    <div>
        <a href="/">Index</a>
        <a href="/marketing">Marketing</a>
        <a href="/developers">Desarrolladores</a>
        <a href="/QAs">QA</a>
        <a href="/ventas">Ventas</a>
    </div>
    <h2>Lista de usuarios de ${req.path}</h2>
    <ul>`;
    path = req.path.replace('/','');
    usersData.forEach(user => {
        if(user.specialty===path) response += templateUser(user);
    });
    response += `</ul>`;
  res.send(response);
});
*/
app.use((req, res) => {
  res
    .status(404)
    .send('<h1>Error 404: Página no encontrada</h1><a href="/">Home</a>');
});

app.listen(3001, () => {
  console.log('Express JS esta escuchando en http://localhost:3001');
});
