class PairObject {
  public key: number;
  public val: string;

  constructor(key: number, val: string) {
    this.key = key;
    this.val = val;
  }
}

/* 基于对象简易实现的哈希表 */

class ObjectHashMap {
  private readonly buckets: PairObject[];
  constructor() {
    // 初始化对象
    this.buckets = new Array(100).fill(null);
  }

  /* 哈希函数 */
  private hashFunc(key: number): number {
    return key % 100000756;
  }

  /* 查询操作 */
  public get(key: number) { 
    const index = this.hashFunc(key);
    for(let i of this.buckets) {
      if(i.key === index) {
        return i.val
      }
    }
    this.buckets[index];
    return null;
  }


  /* 添加操作 */
  public set(key: number, val: string) {
    const index = this.hashFunc(key);
    
    this.buckets[index] = new PairObject(key, val);
    // for(let i of this.buckets) {
    //   if(i.key === index) {
    //     i.val = val
    //     return
    //   }

    //   const pair = new PairObject(index, val);
    //   this.buckets.push(pair);

    // }
  }

  public entries() {
    const entriesObj = [];
    
    for(let i of this.buckets) {
      entriesObj.push(i)
    }
    return entriesObj 
  }

  public keys() {
    const keysObj = [];

    for(let { key } of this.buckets) {
      keysObj.push(key)
    }

    return keysObj;
  }

  public values() {
    const valuesObj = [];

    for (let { val } of this.buckets) {
      valuesObj.push(val)
    }
    return valuesObj;
  }
}


const myHash = new ObjectHashMap();

myHash.set(1, 'a');
myHash.set(2, 'b');

console.log(myHash.entries());
console.log(myHash.values());


// class ObjectHashMap {
//   private readonly buckets: { [key: string]: PairObject | undefined };
//   constructor() {
//     // 初始化对象
//     this.buckets = {};
//   }

//   /* 哈希函数 */
//   private hashFunc(key: number): string {
//     return key.toString();
//   }

//   /* 查询操作 */
//   public get(key: number): string | null {
//     let index = this.hashFunc(key);
//     let pair = this.buckets[index];
//     if (pair === undefined) return null;
//     return pair.val;
//   }

//   /* 添加操作 */
//   public set(key: number, val: string) {
//     let index = this.hashFunc(key);
//     this.buckets[index] = new PairObject(key, val);
//   }

//   /* 删除操作 */
//   public delete(key: number) {
//     let index = this.hashFunc(key);
//     // 置为 undefined ，代表删除
//     this.buckets[index] = undefined;
//   }

//   /* 获取所有键值对 */
//   public entries(): (PairObject | undefined)[] {
//     let arr: (PairObject | undefined)[] = [];
//     for (let key in this.buckets) {
//       if (this.buckets[key]) {
//         arr.push(this.buckets[key]);
//       }
//     }
//     return arr;
//   }

//   /* 获取所有键 */
//   public keys(): (number | undefined)[] {
//     let arr: (number | undefined)[] = [];
//     for (let key in this.buckets) {
//       if (this.buckets[key]?.key !== undefined) {
//         arr.push(this.buckets[key]?.key);
//       }
//     }
//     return arr;
//   }
// }