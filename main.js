function changeName() {
	// running the prompt method of the window object
	// https://developer.mozilla.org/en-US/docs/Web/API/Window
	// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
  let newName = window.prompt("What should the main character be called?")
	// getting an array of all elements with the class "name", and saving them to the array names
	// https://developer.mozilla.org/en-US/docs/Web/API/document
	// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
  let names = document.getElementsByClassName("name");
	// looping through all names from the array
	for (let i = 0; i < names.length; i++) {
		// setting the innerHTML property of each element found in the names array
		// https://developer.mozilla.org/en-US/docs/Web/API/Element
		// https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
    names[i].innerHTML = newName;
  }
}


let fontCount = 0;
function changeColour() {
  // create an array of CSS colours
  let colours = ["red", "blue", "black", "green", "purple"];
  // increase the count;
  fontCount++;
  // get the entire body of the Document
  // document -> https://www.w3schools.com/jsref/dom_obj_document.asp
  // body -> https://www.w3schools.com/jsref/prop_doc_body.asp
  let wholeDoc = document.body;
  // set the style and color properties of the Document
  // elements.style -> https://www.w3schools.com/jsref/prop_html_style.asp, and https://www.w3schools.com/jsref/dom_obj_style.asp
  // elements.style.color -> https://www.w3schools.com/jsref/prop_style_color.asp
  wholeDoc.style.color = colours[fontCount % colours.length]
}

function imageRotate() {
  // get all the images from the document: https://www.w3schools.com/jsref/dom_obj_document.asp -> https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp
  // returns an array of image elements (the images on the page)
  let images = document.getElementsByTagName("img");
  // loop through images array
  for (let i = 0; i < images.length; i++) {
    // for each element in the images array set the transform property of the style property of the images
    // elements -> https://www.w3schools.com/jsref/dom_obj_all.asp
    // elements.style -> https://www.w3schools.com/jsref/prop_html_style.asp, and https://www.w3schools.com/jsref/dom_obj_style.asp
    // elements.style.transform -> https://www.w3schools.com/jsref/prop_style_transform.asp
    // and give it the value "rotate(45deg)" which is one of many valid transformations
    images[i].style.transform = "rotate(45deg)";
  }
}

function addWords(){
	// get the element with the id "addStuff" and save it to the variable div
	let div = document.getElementById("addStuff");
	// loop 100 times
	for (let i = 0; i < 100; i++){
		// use the createElement method to create a span element
		// https://developer.mozilla.org/en-US/docs/Web/API/document/createelement
		let element = document.createElement("span");
		// set the innerHTML property of the span element
		element.innerHTML = "words";
		// style as a block of text with a random rotation
		element.style.transform = "rotate("+Math.random()*360+"deg)";
		element.style.display = "inline-block"
		// add the element to the div as a child
		// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
		div.appendChild(element);
	}
}
