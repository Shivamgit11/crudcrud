class bst {
    constructor()
    {
        this.root = null;
    }

    insert(data)
    {
        let newNode = new Node(data);
        
        if(this.root == null)
        {
            this.root = newNode;
        }else{
            this.insertNOde(this.root, newNode);
        }

        insertNOde(node, newNode){
            if(newNode.data<node.data){
                if(node.left === null){
                    node.left = newNode;
                }else{
                    this.insertNOde(node.left, newNode);
                }

            }
            else{
                if(node.right == null){
                    node.right = newNode;
                }else{
                    this.insertNOde(node.left, newNode)
                }
            }
        }
    }
}