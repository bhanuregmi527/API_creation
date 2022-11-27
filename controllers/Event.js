const Events=require('../model/events.js')


const getEvents=async (req,res)=>{

try {
  const events= await Events.find( req.query  )
  console.log(req.query)
  res.status(200).json({
    status:"success",
    data:{
      events:events
    }
    })
} catch (error) {
  res.status(500).json({msg:error})
}
  
}
const getEventsById=async(req,res)=>{
try {
  console.log(req.params.id) ;
  const events= await Events.findById(req.params.id)
  res.status(200).json({
    status:"success",
    data:{
      events:events
    }
    })
} catch (error) {
  res.status(500).json({msg:error})
}
}

const createEvents=async (req,res)=>{
try {
    const events=Events.create(req.body)
    res.status(201).json({events})

} catch (error) {
    res.status(500).json({msg:error})
}
}
const deleteEventsById=async(req,res)=>{
  try {
    console.log(req.params.id) ;
    const events= await Events.findByIdAndDelete(req.params.id)
    res.status(204).json({
      status:"success",
      data:{
        events:null
      }
      })
  } catch (error) {
    res.status(500).json({msg:error})
  }
  }

module.exports={
  getEvents,
  getEventsById,
  createEvents,
  deleteEventsById,


}