
class AVLTree {
  root: AVLNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number) {
    const node = new AVLNode(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    this.root = this.insertNode(this.root, node);
  }

  private insertNode(root: AVLNode, node: AVLNode) {
    if (!root) {
      return node;
    }

    if (node.value < root.value) {
      root.left = this.insertNode(root.left!, node);
    } else {
      root.right = this.insertNode(root.right!, node);
    }

    root.height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;

    const balanceFactor = this.getBalanceFactor(root);

    if (balanceFactor > 1 && node.value < root.left!.value) {
      return this.rotateRight(root);
    }

    if (balanceFactor > 1 && node.value > root.left!.value) {
      root.left = this.rotateLeft(root.left!);
      return this.rotateRight(root);
    }

    if (balanceFactor < -1 && node.value > root.right!.value) {
      return this.rotateLeft(root);
    }

    if (balanceFactor < -1 && node.value < root.right!.value) {
      root.right = this.rotateRight(root.right!);
      return this.rotateLeft(root);
    }

    return root;
  }

  private getHeight(node: AVLNode | null) {
    return node ? node.height : 0;
  }

  private getBalanceFactor(node: AVLNode) {
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  private rotateRight(node: AVLNode) {
    const left = node.left!;
    const right = left.right;

    left.right = node;
    node.left = right;

    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    left.height = Math.max(this.getHeight(left.left), this.getHeight(left.right)) + 1;

    return left;
  }

  private rotateLeft(node: AVLNode) {
    const right = node.right!;
    const left = right.left;

    right.left = node;
    node.right = left;

    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    right.height = Math.max(this.getHeight(right.left), this.getHeight(right.right)) + 1;

    return right;
  }
}

class AVLNode {
  value: number;
  left: AVLNode | null;
  right: AVLNode | null;
  height: number;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}


const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);
avlTree.insert(5);

console.log(avlTree.root);
debugger;