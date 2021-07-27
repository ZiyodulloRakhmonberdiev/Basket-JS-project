window.addEventListener ( 'DOMContentLoaded', function(){         //bunda windows yuklangach keyingina script ishlaydi
	let products = document.querySelectorAll('.product'),
	buttons = document.querySelectorAll( 'button'),//bu yerda html fayllardan class va div NI TORTIB OZGARUVCHI   YASAYAPMIZ
	openBtn = document.querySelector('.open');


function createCart(){
	let cart = document.createElement('div'),           // yangi teg yasab olyapmiz
		field = document.createElement('div'),
		heading = document.createElement('h2'),
		closeBtn = document.createElement('button');


	cart.classList.add('cart')                                   // yasagan tag ga stillarni qoshib olyapmiz
	field.classList.add('cart-field')  							 // bunda  stillar css fayldan kochirib olinyapti						
	closeBtn.classList.add('close')  


			 heading.textContent='В нашей корзине'             // yasalgan elementlarga text qoshayapmiz
			 closeBtn.textContent='Закрыт'



	document.body.appendChild(cart)
	cart.appendChild(heading)
	cart.appendChild(field)
	cart.appendChild(closeBtn)
}

createCart()


let cart = document.querySelector('.cart'),
	closeBtn=document.querySelector('.close'),
	field = document.querySelector('.cart-field')

openBtn.addEventListener( 'click', function(){
	cart.style.display='block'
})

closeBtn.addEventListener('click', function(){
	cart.style.display='none'
})

buttons.forEach(function (item, i){              //elementnihar bir xossasini ushlayapmiz
item.addEventListener('click', function(){       //button ezilganda nma bolishini tayinlayapmiz
	let cloneItem = products[i].cloneNode(true),                  // ozgaruvchi yasadik, unga hamma productslarni oldik, yani [ i] degani hammasi degani, cloneNode esa kopiya qilish uchun. (true esa faqat div nomini emas, ichidagialriniham kopiya qil deganni)
		btn = cloneItem.querySelector('button');

		btn.remove()
		field.appendChild(cloneItem)
		products[i].remove()
})
})























})