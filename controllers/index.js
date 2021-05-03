const Plant = require('../models/plant');

const createPlant = async (req, res) => {
    try{
        const plant = await new Plant(req.body)
        await plant.save()
        return res.status(201).json({
            plant,
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: err.message})
    }
}

const getAllPlants = async (req, res) => {
    try{
        const plants = await Plant.find()
        return res.status(200).json(plants)
    }catch (err) {
        console.log(err)
        return res.status(500).json({error: err.message})
    }
}

const getPlantById = async (req,res) => {
    try{
        const {id} = req.params;
        const plant = await Plant.findById(id)
        if(plant) {
            return res.status(200).json(plant)
        }
        return res.status(404).send("Plant not found")
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: err.message})
    }
}

const updatePlantById = async (req,res) => {
    try {
        const {id} = req.params;
        await Plant.findByIdAndUpdate(id, req.body, {new: true}, (err, plant) => {
            if (err) {
                res.status(500).send(err);
            }
            if(!plant) {
                res.status(404).send("Plant not found")
            }
            return res.status(200).json(plant)
        })

    } catch (err) {
        console.log(err)
        return res.status(500).json({error: err.message})
    }
}


const deletePlantById = async (req,res) => {
    try{
        const {id} = req.params;
        const deleted = await Plant.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Plant deleted")
        }
        throw new Error("Plant not found")
    }catch (err) {
        console.log(err)
        res.status(500).json({error: err.message})
    }
}

module.exports = {
    createPlant,
    getAllPlants,
    getPlantById,
    updatePlantById,
    deletePlantById,
}