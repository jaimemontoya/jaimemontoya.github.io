/*
When you want to do something to an element, first you need to select it:
1) Step 1: Select an element by using "var myElement = document.querySelector('h1, p');".
2) Step 2: Do something to the element that was previously selected: "myElement.textContent = 'Hello world!';".
document.querySelector() returns the first element within the document that matches the specified group of selectors.
The line line "var myHeading = document.querySelector('h1, p');" is working as a search mechanism (a query) that is trying to find the first appearance of either "h1" or "p". Once that element is found, it is stored in the variable "myElement".
*/
var myElement = document.querySelector('h1, p');
/* 
The Node.textContent property represents the text content of a node and its descendants.
"myElement" contains the element that represents the first appearance of either "h1" or "p". The content of the element will be replaced with the following content: "Hello world!". The descendant of the element, if any, will simply disappear once the content of "myElement" is replaced with the new content.
*/
myElement.textContent = 'Hello world!';
/*
Notice the difference between "querySelector()" (previously used) and "querySelectorAll()" (used below). querySelectorAll() returns a collection instead of a single element. Each of the elements returned by querySelectorAll() can be referenced by the corresponding index. In the example below, the objective is to change the content of all of the even li elements that appear within the ul that has the id "myul".
"getElementById()" is being used for the same purpose that querySelector() was used above. In fact, there is an equivalent way to obtain the exact same resuls:
var parent = document.querySelector('#myul');
*/
var parent = document.getElementById('myul');
//var parent = document.querySelector('#myul'); --> It is the equivalent of "var parent = document.getElementById('myul');".	
// Node.children is a read-only property that returns an HTML collection of child elements of Node. For example:
var child = parent.children;
/*
console.log(child[0]); --> First li element that appears within the element whose id is 'myul' (which happens to be a ul element), since it was previously declared that the parent element is the element whose id is 'myul'.
console.log(child[1]); --> Second li element that appears within the element whose id is 'myul'...
"child.length" is the number of children within the parent element. For example:
<ul id="myul">
    <li>technologists</li>
    <li>thinkers</li>
    <li>builders</li>
    <li>dreamers</li>
    <li>doers</li>
    <li>designers</li>
    <li>programmers</li>
    <li>Hackers</li>
    <li>Engineers</li>
    <li>Leaders</li>
</ul>
Using the code above, ul would be the parent element because it is the element with the id 'myul'. Each of the li elements are children. Since there are 10 li elements, child.length will return 10, meaning that the for loop below will make 10 iterations. The purpuse will be to change the value of the even li elements.
*/
for (i = 0; i < child.length; i++){
	// This condition will determine whether or not the current iteration is even.
	if(i%2==0){		
		// Since it was confirmed that the current iteration is even (remainder of i/2 = 0), then change the content of the current li element.
		document.querySelectorAll('li')[i].textContent = 'Even LI element';
	}
}
/*
In the for loop above, the content of the even li elements will be changed, producing the following result:
<ul id="myul"> <!-- changed to list in the tutorial -->
    <li>Even LI element</li>
    <li>thinkers</li>
    <li>Even LI element</li>
    <li>dreamers</li>
    <li>Even LI element</li>
    <li>designers</li>
    <li>Even LI element</li>
    <li>Hackers</li>
    <li>Even LI element</li>
    <li>Leaders</li>
</ul>
*/
