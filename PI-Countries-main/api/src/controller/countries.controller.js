const axios =require ("axios")
const {Country, Activity} = require ("../db")

const countryApi = async ()=>{
    const apiurl = await axios.get("https://restcountries.com/v3/all")
    const todospaises = await apiurl.data.map(e => {
        return {
            name:e.name,
            id: e.cca3,
            region: e.region,
            flagimg:e.flags[1],
            capital:e.capital?e.capital.join(", "):"no tiene",
            subregion: e.subregion,
            area:e.area,
            population:e.population

        }



    })
    return todospaises;
}
const savesCountry = async (req, res) =>{
    let info = await countryApi () 
    let {name} = req.query;
    try {
       let full = await Country.findAll({
           includes:{model: Activity}
       })
       if (!full.length){
           await Country.bulkCreate(info) 
       }else{
           res.status (200).json(full)
       }
       if(name){
           let countryName = await Country.findAll({
               where:{name:{[
                   Op.iLike //Me trae todos los que coinciden con Query
               ]:`%${name.toLowerCase()}%`}}
           })
           countryName.length?res.status(200).json(countryName):res.status(404).send("no está :(")
       }
    } catch (err){
        console.log (err);
    }
}

const getCountry = async (req,res)=> {
    let {id} = req.params;
    let pais = await Country.findByPk(id,{includes:{model:Activity}});
    if(pais){
        return res.status(200).json(pais)
    }else{
        res.status(404).send("no está :(")
    }
}
module.exports={getCountry, savesCountry};