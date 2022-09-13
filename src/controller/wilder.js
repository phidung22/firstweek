const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/Wilder");


module.exports = {
    create: (req, res) => {
        console.log(req.body);
        dataSource
          .getRepository(Wilder)
          .save(req.body)
          .then(() => {
            res.status(201).send("Wilder created");
          })
          .catch((error) => {
            console.log("Error", error);
            res.status(500).send("Error while creating the wilder");
          });
      },
    find: async (req, res) =>{
        
            try{
                const data = await dataSource
                .getRepository(Wilder)
                .find();
        
                res.send(data);
            }
            catch{
                res.send("Error while finding Wilder");
            };
    }, 
    update: async (req, res) =>{
            try {
              await  dataSource
            .getRepository(Wilder)
            .update(req.body.idToUpdate, {name: req.body.nameToUpdate});
                res.send("Wilder updated");
            }
            catch{
                res.send("Error while updating Wilder");
            };
    }, 
    delete: async (req, res)=>{
        
            try {
               await dataSource
            .getRepository(Wilder)
            .delete(req.body.idToDelete);
            res.send("Wilder deleted");
            }
            catch{
                res.send("Error while deleting Wilder");
            };
    },
};