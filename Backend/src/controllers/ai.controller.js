const aiService = require("../services/ai.service");
module.exports.getReview = async (req,res)=>{
    // RAM RAM
    const code = req.body.code;
    if(!code){
        return res.status(400).json({message: 'Prompt is required'});
    }
    const response = await aiService(code);
    res.send(response);
}