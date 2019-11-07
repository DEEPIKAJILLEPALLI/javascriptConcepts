# JavaScript  
* Initially,called as ***LiveScript***.But,At that time word **JAVA**  and **Script** were very popular, the name  **Javascript** Came into existence.
* Created to “make web pages alive”.i.e; To Add Dynamic functionality to the webPage. By the way,**Js** is totally different from **JAVA**.
* Later,Javascript became fully independent language with its own specification called **ECMAScript.**  
* **[ECMAScript](https://en.wikipedia.org/wiki/ECMAScript)**   is a scripting-language specification standardized by Ecma International.  
* JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine.
* The browser has an embedded engine sometimes called a “JavaScript virtual machine”.
* Different javascript Engines:  
  * V8 - Chrome and Opera  
  * SpiderMonkey - Firefox  
  * Trident and Chakra - IE different Versions  
  * ChakraCore- Microsoft Edge  
  * Nitro and SquirrelSqaush- Safari  
  
>  **How do engines work?**  
Engines are complicated. But the basics are easy.  
 The engine (embedded if it’s a browser) reads (“parses”) the script.  
 Then it converts (“compiles”) the script to the machine language.  
 And then the machine code runs, pretty fast.  
 The engine applies optimizations at each step of the process.  
 
* **Transpilation** : Conversion of code into js "before they run in the browser."
    ###### Examples:  
    TypeScript,CoffeeScript,Flow etc.,  
> How we attach a script to a webpage ? 

    Using "Script" Tag 
      The <script> tag contains JavaScript code which is automatically executed when the browser processes the tag.  
      Few Attributes of "script"  
      The type attribute: <script type=…>
        The old HTML standard, HTML4, required a script to have a type. Usually it was type="text/javascript".   
        It’s not required anymore.  
      The language attribute: <script language=…>  
         This attribute was meant to show the language of the script.JavaScript is the  default language.
         There is no need to use it.

    External "Script" File  
       <script src="/path/to/script.js"></script>  
       * If src is set, the script content is ignored.  
 
 ###### Statements , Semicolon and Comments In JS
 ```js
 // Single line Comment :work's fine as "automatic semicolon insertion" was made by JS
alert('Hello')
alert('World')
 
 alert("helloo");
[1, 2].forEach(alert)
/* multi line comments: there will be an error brcause alert doesn't contain semicolon ,but in some cases js interprets the line break as an “implicit” semicolon. This is called an automatic semicolon insertion.*/
alert("There will be an error")

[1, 2].forEach(alert)
// how actually,js sees above code ?
alert("There will be an error")[1, 2].forEach(alert)
 ```  
 #### use strict  
 1.The "use strict" directive switches the engine to the “modern” mode, changing the behavior of some built-in features.  
2.Strict mode is enabled by placing "use strict" at the top of a script or function. Several language features, like “classes” and “modules”, enable strict mode automatically.  
3.Strict mode is supported by all modern browsers.It is recommended to  always use starting scripts with "use strict".  
#### Variables  
* JavaScript application needs to work with information,to store that information we use **Variable's which are named storage for data.**  
* To create a variable in JavaScript, use the **let, const and var ** keyword.  
   * **let** - modern way of declaring variable.   
   * **var** - old way of  declaring variable.  
   * **const** - same as let, but,once value is assigned can't be changed.  
* **Variable Naming**  
   1.The name must contain only letters, digits, or the symbols $ and _.  
   2.The first character must not be a digit.  
   3.Case senisitive
   4.Reserved Name's cannot be used as variable name's.
  > we can use a variable without declaring it in js.  
  -JS uses Variable hosting concept if the variable is not defined ,it declare's in global scope(Window level).so you should be cautious while naming your variable's,because,they might override the window level existing variable's.  
 -"STRICT MODE" cause an error, if we try to assign an value to variable without defining it!  

* A variable in JavaScript can contain any data. A variable can at one moment be a string and at another be a number.
* A string in JavaScript must be surrounded by quotes.
  * Double quotes: **""**.
  * Single quotes: **''**.
  * Backticks:**``**  
  * ```js
     alert( `the result is ${7 + 7}` );
     ```
     > The expression inside ${…} is evaluated and the result becomes a part of the string.This can only be done in backticks,not with single and double quotes
     
  * we can assign a **null** value to variable,which means an "empty" string or "nothing"or "value unknown".  
  * **undefined** means value is not assigned.  
  
  
