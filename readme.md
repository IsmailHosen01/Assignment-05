## Answer of the questions

### 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

- document.getElementById() selects one element by the given unique ID and returns a single element.
- getElementsByClassName() selects all elements by the given class and returns an HTMLCollection, which is an array-like object.
- document.querySelector() selects the first element by the given CSS selector and returns that element.
- document.querySelectorAll select all element by the given CSS selector and returns a NodeList.

### 2. Create and insert a new element into the DOM
- At first create element 
const element = document.createElement('h1')
- then set inner text
element.innerText = 'This is heading'
- At the end append it on the DOM
document.parent.appendChild(element)

### 3. Event Bubbling and how does it work?
- Event bubbling is a process where, when a child element is clicked, the event is first run on that element, then on its parent, then on its parent, and so on.

- How it works
Event happens on the target element. Then it moves upward through ancestors. Each ancestor’s event listener gets triggered.

### 4. Event Delegation in JavaScript and why it is useful
- Event delegation is the process of adding event listeners to the parent instead of the child. It detects the child using event.target.

- It’s useful for performance, handling dynamic elements, and cleaner code.

### 5. Difference between preventDefault() and stopPropagation() methods
- event.preventDefault() stops the default action of an element. It does NOT stop the event from bubbling up.

- event.stopPropagation() stops the event from bubbling further in the DOM tree.