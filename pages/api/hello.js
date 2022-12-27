export default function handler(req, res){
    res.status(200).json({text: 'Hello there change'}); //returns status code 200 and returns an object with some text
}