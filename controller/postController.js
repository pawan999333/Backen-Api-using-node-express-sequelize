const Post=require('../models/post')

const createData=async(req,res)=>{
   
    // PostModel.create({

    //     name:"user2",
    //     content:"express"
    // })
    // .then((result)=>{
    //     console.log(result);
    //    return res.json({
    //         message:"successfully added"
    //     })
    // })

    let info={
        name:req.body.name,
        content:req.body.content
    }

 
        const post=await Post.create(info);
        res.status(200).json(post)
        console.log(post);

    // .catch((error)=>{
    //     console.log(error)
    //     return res.json({
    //         message:"error during post method"
    //     })
    // })
}

const findAllData=async(req,res) =>{
    const post=await Post.findAll({})
    if(post){
    res.status(200).json(post);
    }
    
    else{
        res.status(500).json({
            message:"error in request"
        })
    }
}


const findOneData=async(req,res)=>{
    const id=req.params.id;
    const post =await Post.findOne({where:{id : id}});

    if(post){
        res.status(200).json(post)
    }
    else{
        res.status(500).json({
            message:"error in request"
        })
    }
}

const updateData=async(req,res)=>{
    const id=req.params.id;
    const post=await Post.update(req.body, {where: {id:id}});
    console.log(post);

    res.status(200).json(post)
    
}


const deleteData=async(req,res)=>{
    const id=req.params.id;
    const post=await Post.destroy({where:{id:id}});
    console.log(post);
    if(post){
    res.status(200).json({
        message:"the data is deleted"
        })
    }
    else{
        res.status(500).json({
            message:"invalid request"
        })
    }
}


module.exports={createData, findAllData, findOneData, updateData, deleteData};