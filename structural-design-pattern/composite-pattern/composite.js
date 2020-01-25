class Component {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getNodeName() {
    return this.#name;
  }

  // abstract methods that need to be overriden
  getType() {}

  addChild(component) {}

  getChildByName(componentName) {}

  getChildByIndex(index) {}

  removeChildByName(componentName) {}

  removeChildByIndex(index) {}

  numberOfChildren() {}

  static logTreeStructure(root) {
    let treeStructure = '';
    function traverse(node, indent = 0) {
      treeStructure += `${'--'.repeat(indent)}${node.getNodeName()}\n`;
      indent++;
      for (let i = 0, length = node.numberOfChildren(); i < length; i++) {
        traverse(node.getChildByIndex(i), indent);
      }
    }

    traverse(root);
    return treeStructure;
  }
}

class Leaf extends Component {
  #type;

  constructor(name) {
    super(name);
    this.#type = 'Leaf Node';
  }

  getType() {
    return this.#type;
  }

  numberOfChildren() {
    return 0;
  }
}

class Composite extends Component {
  #type;
  #children;

  constructor(name) {
    super(name);
    this.#type = 'Composite Node';
    this.#children = [];
  }

  getType() {
    return this.#type;
  }

  addChild(component) {
    this.#children = [...this.#children, component];
  }

  getChildByName(componentName) {
    return this.#children.find(component => component.name === componentName);
  }

  getChildByIndex(index) {
    return this.#children[index];
  }

  removeChildByName(componentName) {
    this.#children = this.#children.filter(
      component => component.name !== componentName
    );
  }

  removeChildByIndex(index) {
    this.#children = this.#children.filter((component, i) => i !== index);
  }

  numberOfChildren() {
    return this.#children.length;
  }
}

// usage
const tree = new Composite('root');
tree.addChild(new Leaf('left'));
const right = new Composite('right');
tree.addChild(right);
right.addChild(new Leaf('right-left'));
const rightMid = new Composite('right-middle');
right.addChild(rightMid);
right.addChild(new Leaf('right-right'));
rightMid.addChild(new Leaf('left-end'));
rightMid.addChild(new Leaf('right-end'));

// log
console.log(Component.logTreeStructure(tree));
