chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

		

			const bookmarksList = document.querySelectorAll('#bookmarks .bookmark');

			// [...bookmarksList].map((bookmarksList,i) => {


			    // const link = bookmarksList.querySelector('.bookmark_title');

			// 	  bookmarksList.querySelector('.edit').remove();
			// 	  bookmarksList.querySelector('.delete_link').remove();

			// 	 [...bookmarksList.querySelectorAll('.display a')].map((link,i) => {
			// 			if(!link.classList.contains('bookmark_title')) {
			// 				link.removeAttribute('href');
			// 			}
			// 	 })


			// allLinks.push(link.getAttribute('href'));


			//   });	


			const allLinks = {};

			  [...bookmarksList].map((bookmarksList,i) => {

			    const link = bookmarksList.querySelector('.bookmark_title');
			    const tags = bookmarksList.querySelector('.bookmark_title');
			    bookmarksList.querySelector('.display').innerHTML = "";
			    bookmarksList.querySelector('.display').append(link)
				bookmarksList.querySelector('.display').append(tags)
				
				allLinks.push(link.getAttribute('href'));


			});	


			console.log(allLinks);



		}
	}, 10);
});