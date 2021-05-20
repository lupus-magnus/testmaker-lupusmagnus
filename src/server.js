const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const examsRouter = require("./routes/routes");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//Garantindo que não teremos questões de cors
app.use(cors());
app.use(express.json());

//Conexão com o BD (Estou usando MongoDB)
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Estabelecemos uma conexao com o MongoDB.");
});

app.use("/exams", examsRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
console.log(`http://localhost:${port}/`);
