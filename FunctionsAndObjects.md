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
* **for in loop to iterate through objects**  
> syntax: 
```js
for (key in object) {
  // executes the body for each key among object properties
}
``` 
> Example
```js
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
```
* integer properties are sorted in objects,so to show them how they are add + before integerPropertyname("3" => "+3").
* **Primitive Types** follow "Copy by reference" `let var1="hey"; let var2=var1; ` 
  * we have two independent variables, each one is storing the string "Hey!"
* A **object** variable stores not the object itself, but its "address in memory" `let var1={name:"hey"}; let var2=var1; `
  * Now we have two variables, each one with the reference to the same object.  
### Garbage collection  
* Memory management in JavaScript is performed automatically(reachability).
* Local variables and parameters of the current function or Variables and parameters for other functions on the current chain of nested calls or Global variables -"roots"
* "Reachable" values are those that are accessible or usable somehow.  
* A value is considered as reachable if it’s reachable from a root by a reference or by a chain of references.
* When a Variable becomes unreachable, **Garbage collector** will junk the data and free the memory.  
* **Mark and Sweep Algorithm**  
      1. The garbage collector takes roots and “marks” (remembers) them.  
      2. Then it visits and “marks” all references from them.  
      3. Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same      object twice in the future.  
      4. And so on until every reachable (from the roots) references are visited.  
      5. All objects except marked ones are removed.  
> JavaScript engines apply many optimizations to make it run faster and not affect the execution.  
   
**Generational collection** – objects are split into two sets: “new ones” and “old ones”. Many objects appear, do their job and die fast, they can be cleaned up aggressively. Those that survive for long enough, become “old” and are examined less often.  
**Incremental collection** – if there are many objects, and we try to walk and mark the whole object set at once, it may take some time and introduce visible delays in the execution. So the engine tries to split the garbage collection into pieces. Then the pieces are executed one by one, separately. That requires some extra bookkeeping between them to track changes, but we have many tiny delays instead of a big one.  
**Idle-time collection** – the garbage collector tries to run only while the CPU is idle, to reduce the possible effect on the execution.  

##### Objects can be either of String Type or Symbol Type  
* A “symbol” represents a unique identifier.`let symbolName = Symbol() or let symbolName = Symbol("descriptionName");`
* Symbols don’t auto-convert to a string `alert(symbolName.toString()); or alert(symbolName.description)`.
* Symbols allow us to create “hidden” properties of an object
* [For More Detailed Explanation of Symbols:click this](https://javascript.info/symbol)


* To access the object, a method can use the ***this*** keyword.  
* "this" is not bound
```js
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  }

};
```
 
