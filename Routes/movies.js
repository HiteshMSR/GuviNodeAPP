import express from "express";
import {client} from "../index.js";
import { createMovies, getMoviebyId, delteMoviebyId, updateMoviebyId } from "./helper.js";
const router=express.Router();

router.get('/', async function(req,res){
    //basically find returns data in pagination, so convert it to Array and send.
    if(req.query.rating){
      req.query.rating=+req.query.rating;
    } 
    const movies=await client.db("guvi").collection("movies").find(req.query).toArray()
    res.send(movies);
  })
  
  //here express.json() is a middleware which takes the data from request.body and converts to json.

  router.post("/",express.json(),async function(request,response){
    const data= request.body;
    console.log(data) 
    const result=await createMovies(data);
  
    response.send(result)
  
  })
  
  router.get("/:id", async function(request,response){
  
    const {id}=request.params
    //const movie=movies.filter((mv)=>mv.id===id)[0]  //as this returns array, we mentioned [0] so it gives only element in array
    //we can use find instead of filter which directly returns object.
    //const movie=movies.find((mv)=>mv.id===id); 
    const movie=await getMoviebyId(id)
  
   movie ? response.send(movie) : response.status(404 ).send({msg:"Movie not present"});
    
  })
  
  
  router.delete("/:id", async function(request,response){
  
    const {id}=request.params
  
    const result = await delteMoviebyId(id);
  
       
   result.deletedCount>0 ? response.send(result) : response.status(404 ).send({msg:"Movie not present"});
    
  })
  
  router.put("/:id", async function(request,response){
  
    const {id}=request.params
    const data=request.body
    console.log(data)
    const movie=await updateMoviebyId(id, data)
   movie ? response.send(movie) : response.status(404 ).send({msg:"Movie not present"});
  })

export const moviesRouter=router
  

