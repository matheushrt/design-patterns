# Singleton Pattern

Singleton is a special creational design pattern in which only one instance of a class can exist. It works like this — if no instance of the singleton class exists then a new instance is created and returned, but if an instance already exists, then the reference to the existing instance is returned.
A perfect real-life example would be that of `mongoose` (the famous Node.js ODM library for MongoDB). It utilizes the singleton pattern.
In this example, we have a `Database` class that is a singleton. First, we create an object `mongo` by using the `new` operator to invoke the `Database` class constructor. This time an object is instantiated because none already exists. The second time, when we create the `mysql` object, no new object is instantiated but instead, the reference to the object that was instantiated earlier, i.e. the `mongo` object, is returned.
