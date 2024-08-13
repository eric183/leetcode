
class AVLNode<T> {
  left: AVLNode<T> | null = null;
  right: AVLNode<T> | null = null;
  height = 1;

  constructor(public value: T) {}

  get balanceFactor() {
    const leftHeight = this.left ? this.left.height : 0;
    const rightHeight = this.right ? this.right.height : 0;
    return leftHeight - rightHeight;
  }

  updateHeight() {
    const leftHeight = this.left ? this.left.height : 0;
    const rightHeight = this.right ? this.right.height : 0;
    this.height = Math.max(leftHeight, rightHeight) + 1;
  }
}

export class AVLTree<T> {
  root: AVLNode<T> | null = null;

  insert(value: T) {
    const node = new AVLNode(value);
    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      }
    }

    this.rebalance(node);
  }

  rebalance(node: AVLNode<T>) {
    while (node) {
      node.updateHeight();
      const balanceFactor = node.balanceFactor;
      if (balanceFactor > 1) {
        if (node.left!.balanceFactor < 0) {
          this.rotateLeft(node.left!);
        }
        this.rotateRight(node);
      } else if (balanceFactor < -1) {
        if (node.right!.balanceFactor > 0) {
          this.rotateRight(node.right!);
        }
        this.rotateLeft(node);
      }
      // node = node.parent;
    }
  }

  rotateRight(node: AVLNode<T>) {
    const left = node.left!;
    node.left = left.right;
    left.right = node;
    node.updateHeight();
    left.updateHeight();
    if (node === this.root) {
      this.root = left;
    }
  }

  rotateLeft(node: AVLNode<T>) {
    const right = node.right!;
    node.right = right.left;
    right.left = node;
    node.updateHeight();
    right.updateHeight();
    if (node === this.root) {
      this.root = right;
    }
  }
}
