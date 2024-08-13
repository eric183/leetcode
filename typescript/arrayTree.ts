class ArrayTree {

  #tree: number[];
  constructor(tree: number[] = []) {
    this.#tree = tree;     
  }

  public getTree(): number[] {
    return this.#tree;
  }


  public left(i: number): number {
    return i * 2 + 1;
  }

  public right(i: number): number {
    return i * 2 + 2;
  }

  public parent(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  public size(): number {
    return this.#tree.length;
  }

  public leverOrderTraversal() {
    const list = [];

    const arr = this.#tree;

    for(let i = 0; i < arr.length; i++) {
      list.push(this.#tree[i]);
    }

    return list;
  }

  public depthFirstTraversal(index: number = 0, array: number[] = []) {
    const list = [];
    const arr = this.#tree;
    const node = this.#tree[index];
    
    if(node) {
      array.push(node);
    }
    

    // for()

  }

}