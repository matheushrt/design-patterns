# Composite Pattern

This is a structural design pattern that composes objects into tree-like structures to represent whole-part hierarchies. In this pattern, each node in the tree-like structure can be either an individual object or a composed collection of objects. Regardless, each node is treated uniformly.

<img src="https://miro.medium.com/max/373/1*yAkeYCKDaRQtMRAV2Kx5sA.png"></img>

A Multi-level Menu Structure
It is a bit complex to visualize this pattern. The easiest way to think about this is with the example of a multi-level menu. Each node can be a distinct option, or it can be a menu itself, which has multiple options as its child. A node component with children is a composite component, while a node component without any child is a leaf component.
In this example, we create a base class of `Component` that implements the common functionalities needed and abstracts the other methods needed. The base class also has a static method that utilises recursion to traverse a composite tree structure made with its subclasses. Then we create two subclasses extending the base class — `Leaf` that does not have any children and `Composite` that can have children — and hence have methods handling adding, searching, and removing child functionalities. The two subclasses are used to create a composite structure — a tree, in this case.
