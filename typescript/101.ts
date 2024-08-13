// class Queue<T> {
//   private items: T[];

//   constructor() {
//     this.items = [];
//   }

//   enqueue(item: T): void {
//     this.items.push(item);
//   }

//   dequeue(): T | undefined {
//     return this.items.shift();
//   }

//   peek(): T | undefined {
//     return this.items[0];
//   }

//   isEmpty(): boolean {
//     return this.items.length === 0;
//   }

//   size(): number {
//     return this.items.length;
//   }
// }

// const myqueue = new Queue();

// myqueue.enqueue(1);




// /* 键值对 Number -> String */
// class Pair {
//   public key: number;
//   public val: string;

//   constructor(key: number, val: string) {
//       this.key = key;
//       this.val = val;
//   }
// }

// /* 基于数组简易实现的哈希表 */
// class ArrayHashMap {
//   private readonly buckets: (Pair | null)[];

//   constructor() {
//       // 初始化数组，包含 100 个桶
//       this.buckets = new Array(100).fill(null);
//   }

//   /* 哈希函数 */
//   private hashFunc(key: number): number {
//       return key % 100;
//   }

//   /* 查询操作 */
//   public get(key: number): string | null {
//       let index = this.hashFunc(key);
//       let pair = this.buckets[index];
//       if (pair === null) return null;
//       return pair.val;
//   }

//   /* 添加操作 */
//   public set(key: number, val: string) {
//       let index = this.hashFunc(key);
//       this.buckets[index] = new Pair(key, val);
//   }

//   /* 删除操作 */
//   public delete(key: number) {
//       let index = this.hashFunc(key);
//       // 置为 null ，代表删除
//       this.buckets[index] = null;
//   }

//   /* 获取所有键值对 */
//   public entries(): (Pair | null)[] {
//       let arr: (Pair | null)[] = [];
//       for (let i = 0; i < this.buckets.length; i++) {
//           if (this.buckets[i]) {
//               arr.push(this.buckets[i]);
//           }
//       }
//       return arr;
//   }

//   /* 获取所有键 */
//     public keys(): (number | undefined)[] {
//       let arr: (number | undefined)[] = [];
//       for (let i = 0; i < this.buckets.length; i++) {
//         if (this.buckets[i]) {
//           arr.push(this.buckets[i]?.key);
//         }
//       }
//       return arr;
//     }

//   /* 获取所有值 */
//   public values(): (string | undefined)[] {
//       let arr: (string | undefined)[] = [];
//       for (let i = 0; i < this.buckets.length; i++) {
//           if (this.buckets[i]) {
//               arr.push(this.buckets[i]?.val);
//           }
//       }
//       return arr;
//   }

//   /* 打印哈希表 */
//   public print() {
//       let pairSet = this.entries();
//       for (const pair of pairSet) {
//           console.info(`${pair?.key} -> ${pair?.val}`);
//           // ! 非空断言，告诉编译器 pair 一定不为空
//           // 
//       }
//   }
// }



class TreeNode {
  public val: number;
  public left: TreeNode | null;
  public right: TreeNode | null;
  constructor(val: number) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

const root = new TreeNode(1);

root.left = new TreeNode(2);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);


const traverseTree = (root: TreeNode | null) => {

}
// traverseTree()
// "preorderTraversal"、"inorderTraversal"、"postorderTraversal" 等。

const leverOrderTraversal = (root: TreeNode) => {
  const queue: TreeNode[] = [root];

  const list: TreeNode[] = [];

  while(queue.length) {
    const node = <TreeNode>queue.shift(); 
    list.push(node);
    if(node.left) {
      queue.push(node.left);
    }
    if(node.right) {
      queue.push(node.right);
    }
  }

  return list;
}
const list: number[] = [];
type OrderType = 'preorder' | 'inorder' | 'postorder';
const depthFirstTraversal = (node: TreeNode) => {
  // list: TreeNode[], type?: OrderType = "preorder"

  if(!node) return;
  
  list.push(node.val);
  if(node.left) {
    depthFirstTraversal(node.left);
  }

  if(node.right) {
    depthFirstTraversal(node.right);
  }

  return list;
};

const orders = depthFirstTraversal(root);

// const  orders = leverOrderTraversal(root);
orders
// levelOrderTraversal();