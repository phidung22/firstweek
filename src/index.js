
const express = require("express");
const dataSource= require("./utils").dataSource;
const Wilder = require("./entity/Wilder");
const wilderController = require("./controller/wilder");
const Skill = require("./entity/Skill");
const skillController = require("./controller/skill");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(req.body);
})

app.post("/api/wilder", wilderController.create);
app.get("/api/wilder", wilderController.find);
app.put("/api/wilder", wilderController.update);
app.delete("/api/wilder", wilderController.delete);


app.post("/api/skill", skillController.createSkill);
app.get("/api/skill", skillController.findSkill);
app.put("/api/skill", skillController.updateSkill);
app.delete("/api/skill", skillController.deleteSkill);

const start = async () => {
  await dataSource.initialize();
  //dataSource.getRepository(Wilder).save({name: "First Wilder"});
  app.listen(3000, () => console.log("Server started on 3000"));
}
//Start Server
start();
