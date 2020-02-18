# Decorator Pattern

This is also a structural design pattern that focuses on the ability to add behaviour or functionalities to existing classes dynamically. It is another viable alternative to sub-classing.
The decorator type behaviour is very easy to implement in JavaScript because JavaScript allows us to add methods and properties to object dynamically. The simplest approach would be to just add a property to an object, but it will not be efficiently reusable.
In fact, there is a proposal to add decorators to the JavaScript language. Take a look at [Addy Osmani’s post](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841 "Exploring EcmaScript Decorators") about decorators in JavaScript.
If you want to read about the [proposal itself](https://tc39.es/proposal-decorators/ "Decorators proposal"), feel free.
In this example, we create a `Book` class. We further create two decorator functions that accept a book object and return a “decorated” `book` object — `giftWrap` that adds one new attribute and one new function and `hardbindBook` that adds one new attribute and edits the value of one existing attribute.
