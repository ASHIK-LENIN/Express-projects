

const authorize = (req,res,next) =>{
    const {user} = req.query;
    if(user === 'sujith'){
        req.user = {name : 'sujith' , id:3};
        next();
    }else{
        res.status(401).send('Unauthorize');

    }
};
module.exports = authorize;
 
