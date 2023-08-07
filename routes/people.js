const express = require('express')
const router = express.Router()
const {
    getPeople,
    addPeoplePostman,
    upgradeWithId,
    deleteWithId,
    insertPeople
 } = require('../controllers/methods')

const {people} = require('../json')
router.get('/',getPeople)

router.post('/postman',addPeoplePostman)
router.put('/:id',upgradeWithId)

router.delete('/:id',deleteWithId)
router.post('/',insertPeople)

module.exports = router