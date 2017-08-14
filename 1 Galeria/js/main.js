var galleryConfig = {
	srcArray: ['img/gorillaz1.jpg', 'img/gorillaz2.jpg', 'img/gorillaz3.jpg', 'img/gorillaz4.jpg', 'img/gorillaz5.jpg', 'img/gorillaz6.jpg', 'img/gorillaz7.jpg', 'img/gorillaz8.jpg' ,'img/gorillaz9.jpg' ,'img/gorillaz10.jpg'],
	img: document.getElementById('imgContainer'),
	prevBtn: document.getElementById('prevBtn'),
	nextBtn: document.getElementById('nextBtn'),
}

var gallery = new Gallery(galleryConfig);
gallery.init()
console.log(gallery);
