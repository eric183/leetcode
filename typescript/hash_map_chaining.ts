// class HashMapChaining {
//   #size: number; // 哈希表的大小
//   #capacity: number; // 哈希表的容量
//   #buckets: (Pair | null)[][]; // 存储数据的数组
//   #loadThreshold: number; // 装载因子阈值
//   #extendRatio: number; // 扩容比例


//   constructor() {
//     this.#size = 0;
//     this.#capacity = 100;
//     this.#buckets = new Array(this.#capacity).fill(null).map(x=> []);
//     this.#loadThreshold = 2.0 / 3.0;
//     this.#extendRatio = 2;
//   }

//   /* 哈希函数 */
//   private hashFunc(key: number): number {
//     return key % this.#capacity;
//   }

//   private loadFactor() {
//     return this.#size / this.#capacity;
//   }

//   public get(key: number) {
//     const index = this.hashFunc(key);
//     const bucket = this.#buckets[index];
    
//     for (let i of bucket) {
//       if(i?.key === key) {
//         return i;
//       }
//     }
//   }



//   public put(key: number, value: string) {

//     if(this.loadFactor() > this.#loadThreshold) {
//       this.resize();
//     }
    
//     const index = this.hashFunc(key);
//     const bucket = this.#buckets[index];

//     for(let i of bucket) {
//       if(i?.key === key) {
//         i.val = value;
//         return;
//       }
//     }

//     // bucket.push(new Pair(key, value));
//     this.#size++;
//   }

//   public delete(key: number) {
//     const index = this.hashFunc(key);
//     const bucket = this.#buckets[index];
//     for(let i = 0; i < bucket.length; i++) {
//       if(bucket[i]?.key === key) {
//         bucket.splice(i, 1);
//         this.#size--;
//         return;
//       }
//     }

//   }

//   private resize() {
//     this.#capacity *= this.#extendRatio;
//     const newBuckets = new Array(this.#capacity).fill(null).map(x=> []);
//     for(let bucket of this.#buckets) {
//       for(let pair of bucket) {
//         this.put(pair!.key, pair!.val);
//       }
//     }
//     this.#buckets = newBuckets;
//   }
// }