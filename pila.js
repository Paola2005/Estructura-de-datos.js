//class persona{
//    constructor(name,age){
//        this.name = name;
//        this.age = age;
//    }
//    saludar(){
//        console.log(`Hola me llamo ${this.name} y tengo ${this.age}`);
//    }
//}
//const personal1= new persona("camilo");
//const personal2= new persona("Mariana");
//
//personal1.saludar();
//personal2.saludar();



class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class stack{
    constructor(){
        this.top = null;
        this.size = 0;
    }

    getsize(){
        return this.size ===0;
    }
    isEmpty(){
        return thid.size === 0;
    }
    push(value){
        const newNode = new node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }
    pop(){
        if(!this.top()){
            return "Is empty";
        }
        const popedvalue = this.top.value;
        this.top = this.top.next;
        this.size--;
        return this.top.value;

    }
    peek(){
        if(!this.top()){
            return "Is empty";
        }
        return this.top.value;
    }
}