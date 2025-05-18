const { default: axios } = require("axios");
const express = require("express");

const router = express.Router();

async function get_book_on_query(query){
	const response = await axios.get("https://openlibrary.org/search.json?q=" + query);
	return response.data.docs
}

router.get("/",  async (req,res)=>{
	const query = req.query.q;
	const bookData = await get_book_on_query(query);
	console.log(bookData);
	res.render('books',{bookData: bookData, maxContent: 10})
})

module.exports =  router;
