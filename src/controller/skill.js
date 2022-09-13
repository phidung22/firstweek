const dataSource = require("../utils").dataSource;
const Skill = require("../entity/Skill");


module.exports = {
    createSkill: (req, res) => {
        dataSource
            .getRepository(Skill)
            .save(req.body)
            .then(()=>{
                res.send("Skill Created");
            })
            .catch(()=>{
                res.send("Error while creating Skill");
            });
        
    },
    findSkill: async (req, res) =>{
        
            try{
                const data = await dataSource
                .getRepository(Skill)
                .find();
        
                res.send(data);
            }
            catch{
                res.send("Error while finding Skill");
            };
    }, 
    updateSkill: async (req, res) =>{
            try {
              await  dataSource
            .getRepository(Skill)
            .update(req.body.idToUpdate, {name: req.body.nameToUpdate});
                res.send("Skill updated");
            }
            catch{
                res.send("Error while updating Skill");
            };
    }, 
    deleteSkill: async (req, res)=>{
        
            try {
               await dataSource
            .getRepository(Skill)
            .delete(req.body.idToDelete);
            res.send("Skill deleted");
            }
            catch{
                res.send("Error while deleting Skill");
            };
    },
};