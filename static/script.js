
const searchButton = document.getElementById("search");

searchButton.addEventListener('click',async ()=>{
	console.log("btn clicked");
	const input = document.querySelector(".book").value.trim();
	if(!input){
		console.warn("empty search");
	}

	let response;
	try {
		response = await axios.get(`http://localhost:3000/search?q=${input}`);

	}catch(err){
		console.error("failed to fetch book data",err);
		return;
	}

	const docs = response?.data?.data?.docs;
	if(docs || docs.length == 0){
		console.warn("No books found for query",input);
		document.querySelector("#book-found").innerHTML = "no book found 🥔";
	}

	const book = docs[0];
	const author = book?.author?.[0] || "unknown author"

	const bookCard = document.querySelector("#book-found");
	bookCard.style.color = "black";
	bookCard.innerHTML = `Author: ${author}`;

})
