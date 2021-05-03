const {Router} = require("express")
const controllers = require('../controllers')
const router = Router();

router.get("/", (req,res) => {
    res.send("Home route")
})

router.post('/plants', controllers.createPlant)

router.get('/plants', controllers.getAllPlants)

router.get('/plants/:id', controllers.getPlantById)

router.put('/plants/:id', controllers.updatePlantById)

router.delete('/plants/:id', controllers.deletePlantById)

module.exports = router;