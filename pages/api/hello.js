export default function handler(req, res){
    res.status(200).json({text: 'Hello'}); //returns status code 200 and returns an object with some text
}