const {people} = require('../json')

const getPeople = (req,res)=>{
    res.status(200).json({sucess:true,data:people})
}

const addPeoplePostman = (req,res)=>{
    const {name} = req.body
    if(name)
    {
        res.status(200).json([...people,name])
    }
    else{
        res.status(400).json({sucess:false,msg:'please enter your name'})
    }
}

const upgradeWithId = (req,res)=>{
    const {id} = req.params
    const {name} = req.body
    const findId = people.find((person)=> person.id === Number(id))
    if(!findId){
        res.status(401).json({sucess:false,msg:'please enter correct id'})
    }
    const newArr = people.map((person)=>{
        if(person.id === Number(id))
        {
            person.name = name
        }
        return person
    })
    res.status(200).json(newArr)
}

const deleteWithId = (req,res)=>{
    const {id} = req.params
    const findId = people.find((person)=> person.id === Number(id))
    if(!findId){
        res.status(401).json({sucess:false,msg:'please enter correct id'})
    }
    const newPeople = people.filter((person)=> person.id !== Number(id))
    res.status(200).json(newPeople)
}

const insertPeople = (req,res)=>{
    const {name} = req.body
    console.log(req.body)
    if(name){
        res.status(201).json({sucess:true,person : name})

    }
    else{
        res.status(400).json({sucess:false, msg: 'please enter the name'})
    }
    // 
}

module.exports ={
    getPeople,
    addPeoplePostman,
    upgradeWithId,
    deleteWithId,
    insertPeople
}