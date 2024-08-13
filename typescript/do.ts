// class GoodPair {
//   public key: number;
//   public val: string;
//   constructor(key: number, val: string) {
//     this.key = key;
//     this.val = val;
//   }
// }



// class HashMap {
//   public buckets: (GoodPair | null)[];
//   constructor() {
//     this.buckets = new Array(200).fill(null);
//   }

  

// /* 加法哈希 */
// private addHash(key: string): number {
//   let hash = 0;
//   const MODULUS = 1000000007;
//   for (const c of key) {
//       hash = (hash + c.charCodeAt(0)) % MODULUS;
//   }
//   return hash;
// }

// /* 乘法哈希 */
// private mulHash(key: string): number {
//   let hash = 0;
//   const MODULUS = 1000000007;
//   for (const c of key) {
//       hash = (31 * hash + c.charCodeAt(0)) % MODULUS;
//   }
//   return hash;
// }

// /* 异或哈希 */
// private xorHash(key: string): number {
//   let hash = 0;
//   const MODULUS = 1000000007;
//   for (const c of key) {
//       hash ^= c.charCodeAt(0);
//   }
//   return hash & MODULUS;
// }

// /* 旋转哈希 */
// private rotHash(key: string): number {
//   let hash = 0;
//   const MODULUS = 1000000007;
//   for (const c of key) {
//       hash = ((hash << 4) ^ (hash >> 28) ^ c.charCodeAt(0)) % MODULUS;
//   }
//   return hash;
// }


//   private hashFn(key: number): number {
//     return key % 200;
//   }
  
//   public get(key: number): string | null {
//     const index = this.hashFn(key);
//     return this.buckets[index]?.val || null;
//     // return this.buckets[this.hashFn(key)]?.val || null;
//   }
  
//   public set(key: number, val: string) {
//     const newPair = new GoodPair(key, val);
//     const index = this.hashFn(key);

//     this.buckets[index] = newPair;

//     // this.buckets[this.hashFn(key)] = new GoodPair(key, val);
//   }
  
//   public entries(): (GoodPair | null)[] {
//     const returnArr: (GoodPair | null)[] = [];
//     for(let i = 0; i < this.buckets.length; i++) {
//       returnArr.push(this.buckets[i])
//     }
//     return returnArr;
//   }
  

//   // private buckets: (GoodPair | null)[];
//   // constructor() {
//   //   // 初始化数组，包含 100 个桶
//   //   this.buckets = new Array(100).fill(null);
//   // }

//   // /* 哈希函数 */
//   // private hashFunc(key: number): number {
//   //   return key % 100;
//   // }

//   // /* 查询操作 */
//   // public get(key: number): string | null {
//   //   let index = this.hashFunc(key);
//   //   let pair = this.buckets[index];
//   //   if (pair === null) return null;
//   //   return pair.val;
//   // }

//   // /* 添加操作 */
//   // public set(key: number, val: string) {
//   //   let index = this.hashFunc(key);
//   //   this.buckets[index] = new GoodPair(key, val);
//   // }

//   // /* 删除操作 */
//   // public delete(key: number) {
//   //   let index = this.hashFunc(key);
//   //   // 置为 null ，代表删除
//   //   this.buckets[index] = null;
//   // }

//   // /* 获取所有键值对 */
//   // public entries(): (GoodPair | null)[] {
//   //   let arr: (GoodPair | null)[] = [];
//   //   for (let i = 0; i < this.buckets.length; i++) {
//   //     if (this.buckets[i]) {
//   //       arr.push(this.buckets[i]);
//   //     }
//   //   }
//   //   return arr;
//   // }

//   // /* 获取所有键 */
//   // public keys(): (number | undefined)[] {
//   //   let arr: (number | undefined)[] = [];
//   //   for (let i = 0; i < this.buckets.length; i++) {
//   //     if (this.buckets[i]) {
//   //       arr.push(this.buckets[i]?.key);
//   //     }
//   //   }
//   //   return arr;
//   // }

//   // /* 获取所有值 */
//   // public values(): (string | undefined)[] {
//   //   let arr: (string | undefined)[] = [];
//   //   for (let i = 0; i < this.buckets.length; i++) {
//   //     if (this.buckets[i]) {
//   //       arr.push(this.buckets[i]?.val);
//   //     }
//   //   }
//   //   return arr;
//   // }
// }

// const map = new HashMap();
// map.set(1, "a");
// map.get(1);

// map.set(310, "b");
// console.log(map.entries());

// console.log(1021 % 100);

// // console.log(`....`, map.get(1));


// class TreeNode {
//   public val: number;
//   public left: TreeNode | null;
//   public right: TreeNode | null;
//   constructor(val: number) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }


// /* 层序遍历 */
// function levelOrder(root: TreeNode | null): number[] {
//   // 初始化队列，加入根节点
//   const queue = [root];
//   console.log(queue[0]);
//   // 初始化一个列表，用于保存遍历序列
//   const list: number[] = [];
//   while (queue.length) {
//       let node = <TreeNode>queue.shift(); // 队列出队
      
//       list.push(node.val); // 保存节点值
//       if (node.left) {
//           queue.push(node.left); // 左子节点入队
//       }
//       if (node.right) {
//           queue.push(node.right); // 右子节点入队
//       }
//   }
//   return list;
// }



// const one = new TreeNode(1),
//       two = new TreeNode(2),
//       three  = new TreeNode(3),
//       four = new TreeNode(4),
//       five = new TreeNode(5),
//       six = new TreeNode(6);

// const queue = [one];

// console.log(queue.length)
// one.left = two;
// one.right = three;
// two.left = four;
// two.right = five;

// three.left = six;

// // one.left = four;

// console.log(one.right.val);

// const arr = levelOrder(one);

// arr



// class TreeNode {
//   value: number;
//   left: TreeNode | null;
//   right: TreeNode | null;

//   constructor(value: number) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class PerfectBinaryTree {
//   root: TreeNode | null;

//   constructor() {
//     this.root = null;
//   }

//   // 创建一个高度为h的完美二叉树
//   createPerfectTree(height: number): void {
//     this.root = this.createPerfectTreeRecursively(height, 1);
//   }

//   private createPerfectTreeRecursively(height: number, currentValue: number): TreeNode | null {
//     if (height === 0) {
//       return null;
//     }

//     const node = new TreeNode(currentValue);
//     node.left = this.createPerfectTreeRecursively(height - 1, 2 * currentValue);
//     node.right = this.createPerfectTreeRecursively(height - 1, 2 * currentValue + 1);

//     return node;
//   }
// }

// // 创建一个高度为8的完美二叉树
// const perfectTree = new PerfectBinaryTree();
// perfectTree.createPerfectTree(8);

// // 现在你可以使用这个完美二叉树进行其他操作
// console.log(perfectTree.root);


class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class PerfectBinaryTree<T> {
  root: TreeNode<T> | null;

  constructor(rootValue: T) {
    this.root = new TreeNode(rootValue);
  }

  // 创建一个高度为h的完美二叉树
  createPerfectTree(height: number, node: TreeNode<T> | null = null): TreeNode<T> | null {
    if (height === 0) {
      return null;
    }

    if (node === null) {
      node = this.root;
    }

    if(node?.left) {

      node.left = new TreeNode<T>(this.computeLeftChildValue(node.value));
      this.createPerfectTree(height - 1, node.left);
    }

    if(node?.right) {

      node.right = new TreeNode<T>(this.computeRightChildValue(node.value));
      this.createPerfectTree(height - 1, node.right);
    }


    return node;
  }

  private computeLeftChildValue(parentValue: T): T {
    // 根据实际场景计算左子节点的值
    // 这里简单地以字符串形式拼接，实际应根据需求进行计算
    return <T>`${parentValue}_L`;
  }

  private computeRightChildValue(parentValue: T): T {
    // 同样，根据实际场景计算右子节点的值
    return `${parentValue}_R` as T;
  }
}

// 创建一个高度为3的完美二叉树，根节点值为 "Root"
const perfectTree = new PerfectBinaryTree<string>("Root");
perfectTree.createPerfectTree(3);

// 现在你可以使用这个完美二叉树进行其他操作
console.log(perfectTree.root);



// class TreeNode {
//   public val: number;
//   public left: TreeNode | null;
//   public right: TreeNode | null;
//   constructor(val: number) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
  
// }

// const one = new TreeNode(1),
//       two = new TreeNode(2),
//       three = new TreeNode(3),
//       four = new TreeNode(4),
//       five = new TreeNode(5),
//       six = new TreeNode(6),
//       seven = new TreeNode(7),
//       eight = new TreeNode(8);

// one.left = two;
// one.right = three;
// two.left = four;
// two.right = five;
// three.left = six;
// three.right = seven;
// four.left = eight;

// const literalTree = (node: TreeNode | null) => {
//   const queue = [node];
//   const list: number[] = [];
//   while(queue.length) {
//     const _node = <TreeNode>queue.shift();
   
//     list.push(_node.val);

//     if(_node.left) {
//       queue.push(_node.left);
//     }

//     if(_node.right) {
//       queue.push(_node.right);
//     }
//   }
//   return list;
// }


// const _array = literalTree(one);
// console.log(_array)