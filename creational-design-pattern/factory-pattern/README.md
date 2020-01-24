#Factory Pattern

Factory pattern is another class-based creational pattern. In this, we provide a generic interface that delegates the responsibility of object instantiation to its subclasses.
This pattern is frequently used when we need to manage or manipulate collections of objects that are different yet have many similar characteristics.
In this example, we create a factory class named `BallFactory` that has a method that takes in parameters, and, depending on the parameters, it delegates the object instantiation responsibility to the respective class. If the type parameter is `"football"` or `"soccer"` object instantiation is handled by `Football` class, but if it is `"basketball"` object instantiation is handled by `Basketball` class.
