class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function sumOfRightLeaves(root) {
    // use array representation of stack
     function helper(node, dir){
         if(!node) return 0;
         if(!node.left && !node.right){
            if(dir == 1)
               return node.val;
            else
               return 0;
         }
         return helper(node.left, 0) + helper(node.right, 1);
          
     }

    
    // Fill in this method
    return helper(root, 1);
  }
  
  // uncomment these for logging, they will affect tests
  const root = new Node(5);
  /*root.left = new Node(10);
  root.left.left = new Node(17);
  root.left.right = new Node(3);
  root.right = new Node(8);*/
  
  console.log(sumOfRightLeaves(root));
  // 11