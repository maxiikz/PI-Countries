
const {Country, Activity} = require ("../db");
const findActivities = async (req,res)=>{
    try{
        let activities = await Activity.findAll({
            include:Country //coinciden con Country
        })
        if (activities){
            return res.status(200).json(activities)
        }else{
            return res.status(404).send("No hay actividades :(")
        }

    }
    catch(error){
       console.log(error,"Este no anda en activities")
    }
}
const createActivity = async(req,res)=>{
    try{
        let {name, difficulty, duration, season, countries} = req.body;
        let newActivity = await Activity.create({name, difficulty, duration, season});
        countries.forEach(async country=>{let activityCountry = await Country.findOne({where:{name:country}})
        await newActivity.addCountry(activityCountry);
        
    })
        return res.status(201).json(newActivity);

    }
    catch(error){
        console.log(error, "No se pudo crear post :(")
    
    }
}
module.exports={createActivity, findActivities};