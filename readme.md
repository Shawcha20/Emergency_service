
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

i)getElementById("id")
Returns a single element with matching id(not a collection).

ii)getElementsByClassName("class")
Returns a live HTMLCollection of all elements with that class.

iii)querySelector("css-selector")
Returns the first element that matches a CSS selector.

iv)querySelectorAll("css-selector")
Returns a static NodeList of all matching elements.

2.
let newCreate=document.createElement("div");
let existingDiv=document.querySelector("#existingDiv");
existingDiv.appendChild(newCreate)

3.Event Bubbling happens when an event starts at the target element and then propagates (bubbles up) through its parents (parent → grandparent → … → document)

4.Using one EventListener on a parent element to handle events of multiple child nodes.
It  is useful because instead of adding eventlistener to multiple child nodes we can add only one event listener to the parent that can detect the event in child nodes. That's make the code more readable and hasselfree

5.
preventDefault():In form element if we add a button and click on it it automatically reloads the page to prevent this we use preventDefault
stopPropagation():
