import app from './server';

let PORT = process.env.PORT || 8000;

app.listen(PORT, function() {
  console.log('listening at', PORT);
});
