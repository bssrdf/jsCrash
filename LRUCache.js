const LRUCache = function(capacity) {
    this.map = {};
    this.size = 0;
    this.maxSize = capacity;
    // 链表的头
    this.head = {
      prev: null,
      next: null
    };
    // 链表的尾
    this.tail = {
      prev: this.head,
      next: null
    };
    this.head.next = this.tail;
  };
  
  LRUCache.prototype.get = function(key) {
    if (this.map[key] !== undefined) {
      // 将对应的节点抽出并设为链表的首项并返回对应的值
      const node = this.extractNode(this.map[key]);
      this.insertNodeToHead(node);
      return this.map[key].val;
    } else {
      return -1;
    }
  };
  
  LRUCache.prototype.put = function(key, value) {
    let node;
    if (this.map[key]) {
      // 如若该项存在，则抽取出来并设置为对应的值
      node = this.extractNode(this.map[key]);
      node.val = value;
    } else {
      // 如该项不存在，那就创造一个新节点
      node = {
        prev: null,
        next: null,
        val: value,
        key,
      };
      this.map[key] = node;
      this.size++;
    }
    // 将节点设为链表的首项
    this.insertNodeToHead(node);
    if (this.size > this.maxSize) {
      // 超过限制则删除最后一项
      const delNode = this.tail.prev;
      const delKey = delNode.key;
      this.extractNode(delNode);
      this.size--;
      delete this.map[delKey];
    }
  };
  
  // 插入节点到链表首项
  LRUCache.prototype.insertNodeToHead = function(node) {
    const head = this.head;
    const oldFirstNode = this.head.next;
    node.prev = head;
    head.next = node;
    node.next = oldFirstNode;
    oldFirstNode.prev = node;
    return node;
  }
  
  // 从链表中抽取节点
  LRUCache.prototype.extractNode = function(node) {
    const before = node.prev;
    const after = node.next;
    before.next = after;
    after.prev = before;
    node.prev = null;
    node.next = null;
    return node;
  }

  
  const lru = new LRUCache(5);

  lru.put(10,'A');
  lru.put(5,'B');
  lru.put(7,'C');
  const x = lru.get(5);
  console.log(x);
  lru.put(2,'D');
  lru.put(8,'E');
  const y = lru.get(7);
  lru.put(6,'F');
  console.log(y);
