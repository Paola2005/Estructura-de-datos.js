class node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class linkedlist{
    constructor(){
        this.head = null;
    }
    append(data){//Agregar dato a la cola
        const newNode = new node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
    }
    prepend(data){//agregarar dato en cabeza
        const newNode = new node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    delete(data){//borarrar dato
        if (!this.head){
            return;
        }
        if(this.head.data ===data){
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while(current.next){
            if(current.next.data === data){
                current.next = current.next.next;
                break;
            }
            current = current.next;
            }
    }

    display(){//mostrar cabeza
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}
const lista= new linkedlist();
lista.append(1);
lista.append(2);
lista.delete(2)
lista.display();
