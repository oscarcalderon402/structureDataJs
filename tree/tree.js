// Un Binary Search Tree básicamente costa de un elemento root (El elemento padre del que todos descienden). Es a partir de ese elemento en donde se empieza la búsqueda.

// La condición es simple, un elemento únicamente puede tener dos descendientes, no más. Los descendientes que son mayores que el elemento padre se colocan del lado derecho y los descendientes que son menores se colocan del lado izquierdo.

// METODOS
// search: Buscar por un nodo
// insert: Insertar un nodo.
// delete: eliminar un nodo

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  search(value, tree = this.root) {
    if (tree == null) {
      return "El elemento no se encuentra.";
    } else if (value > tree.value) {
      return this.search(value, tree.right);
    } else if (value < tree.value) {
      return this.search(value, tree.left);
    } else {
      return tree;
    }
  }
  delete() {
    return this;
  }
}

const tree = new BinarySearchTree();
