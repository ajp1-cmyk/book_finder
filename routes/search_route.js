const { default: axios } = require("axios");
const express = require("express");

const router = express.Router();

async function get_books_on_query(query){
	const response = await axios.get("https://openlibrary.org/search.json?q=" + query);
	return response.data
}

router.get("/",  async (req,res)=>{
	const query = req.query.q;

	const data = await get_books_on_query(query);
	res.json({
		data
	})
})

module.exports =  router;
