# Functions  
* Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.  
* Functions should be short and do exactly one thing.
> Function Declaration  
```js
function name(parameters) {
  ...body...
}
```
#### Function Naming  
* A name should clearly describe what the function does.
* Use prefixes  to describe what it does exactly like `create`, `show`, `get` ,`check` followed by name
> Example
```js
function getSum(a, b) {
  return a + b;
}

let result = getSum(11, 22);
alert( result )
```  
> A Function Declaration can be called earlier than it is defined.(due to Hosting concept we can do this!)  
When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions-“initialization stage”.  

> In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.  

#### Function expressions  
* There is another syntax for creating a function that is called a Function Expression.  
* In the below Example,function is created and assigned to the variable explicitly, like any other value.
*  Function Expression have a semicolon ; at the end,because here we are assigning a value,it's not a code block as in `function declaration`.  
* A Function Expression is created when the execution reaches it and is usable only from that moment.
> Example  
```js
let sayHi = function() {
  alert( "Hi" );
};
alert( sayHi ); // shows the function code
alert( sayHi() ); // say's Hi
````  
#### Callback functions  
```js
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
```  
* **The arguments showOk and showCancel of ask are called callback functions or just callbacks.**  
#### Arrow Functions  
```js 
let func = (arg1, arg2, ...argN) => expression
```
> Example  
```js
let sum = (a, b) => a + b;
/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(11, 22) ); // 33
```  
**Multiline Arrow function**  
```js
let sum = (a, b) => {  // the curly brace opens a **multiline function**
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(11, 22) ); // 3
```  
## Objects  
* objects are used to store keyed collections of various data and more complex entities.  
* An object can be created with figure brackets {…} with an optional list of properties.  
* A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.  
> Syntax
```js  
let user = new Object(); // "object constructor" syntax
let user = {}; 
``` 
> Example  
```js
let user = {     // an object
  name: "ruth",  // by key "name" store value "ruth"
  age: 24 ,      // by key "age" store value 24
  "full Name":" "Deepika Ruth Jillepalli" // multiword property name must be quoted
};
alert( user["full Name"] ); //Deepika Ruth Jillepalli ; multi word  should be accesseed using [] square Brackets
alert( user.age ); //24
delete user.age;
```  
* To Access 
