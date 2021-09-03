const app = require("express")()
const handlebars = require("express-handlebars")
const Sequelize = require("sequelize")
const sqlite = require("sqlite3").verbose()
const bodyParser = require("body-parser")
const admin = require("./routes/admin.js")

// Configuraçoes
// Body Parser
 app.use(bodyParser.urlencoded({extended: false}))
 app.use(bodyParser.json())

//handlebars
 app.engine("handlebars",handlebars({defaultLayout: 'main'}))
 app.set("view engine",handlebars)

// banco de dados
/*const db = new Sequelize({
	dialect: 'sqlite',
	storage: ''
})*/
// Rotas
app.use("/admin",admin)


// Outros
const PORT = process.env.PORT
app.listen(PORT,() => {
	console.log("App online!")
})