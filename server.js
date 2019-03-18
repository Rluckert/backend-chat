const c = console.log,
app = require('./app')
//db = require('./models/db')

app.listen(
    app.get('port'),
    () => console.log(`Iniciando api restfull en el puerto ${app.get('port')}`)
)

c(
    '***** VARIABLES DE ENTORNO *****\n',
    process.env.NODE_ENV,
    '\n',
    '\n',
    process.env.PORT,
    '\n***** VARIABLES DE ENTORNO *****'
  )