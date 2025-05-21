
// Halaman logout menggunakan Express.js dan session
const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 3000;

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

app.get('/logout', (req, res) => {
  if (req.session.login) {
    req.session.destroy(err => {
      if (err) {
        return res.send('Gagal logout.');
      }

      res.send(`
        <h1>Anda sudah berhasil LOGOUT</h1>
        <h2>Klik <a href="/login">di sini</a> untuk LOGIN kembali</h2>
        <h2>Anda sekarang tidak bisa masuk ke halaman 
        <a href="/session2">session2</a> lagi</h2>
      `);
    });
  } else {
    res.send('Anda belum login.');
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
