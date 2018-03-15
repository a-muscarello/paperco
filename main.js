// images appear/disappear when scrolled //

const nature = document.getElementById('nature');
const tree = document.getElementById('tree');
const work = document.getElementById('work');


let scroll = function(pixels, container) {
	if (window.scrollY > pixels) {
		container.className = 'show';
	}
	else {
		container.className = 'hide';
	}
}

// animation effect occurs simultaneously

window.addEventListener('scroll', function() {
	scroll (0, nature),
	scroll (0, tree), 
	scroll (0, work)
});



const bags = document.getElementById('bags');
const wrap = document.getElementById('wrap');
const wood = document.getElementById('wood');


let newImages = 
	document.getElementById('set2').scrollHeight;
	console.log(newImages);

// timed animation

window.addEventListener('scroll', function() {
	scroll (204, bags),
	scroll (480, wrap), 
	scroll (570, wood)
});


