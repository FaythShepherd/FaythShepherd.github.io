console.log("hey now!");

const commentAbout = () => {
	const commentContainer= document.querySelector('#allTheComments')
	axios.get('http://localhost:5501/api/data').then((response => {
		console.log(response)
		for(let i = 0; i < response.data.length; i++){
			const comment = document.createElement('div')
			comment.className = 'comment'
			comment.innerText = response.data[i].comments
			commentContainer.appendChild(comment)
		}
	}))
}

commentAbout();