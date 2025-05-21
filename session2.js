
// session2.js
const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'rahasiaLogin',
    resave: false,
    saveUninitialized: true
}));

app.get('/session2', (req, res) => {
    if (req.session.login) {
        res.send(`
            <h1>Selamat Datang ${req.session.login}.</h1>
            <h2>Halaman ini hanya bisa diakses jika Anda sudah login</h2>
            <h2>Klik <a href="/logout">di sini (logout)</a> untuk LOGOUT</h2>
        `);
    } else {
        res.send('Anda belum login! Anda tidak berhak masuk ke halaman ini. Silakan login <a href="/login">di sini</a>.');
    }
});

app.get('/login', (req, res) => {
    req.session.login = "UserContoh";
    res.redirect('/session2');
});

app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
});

app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});
