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
    append(data){ //Agregar datos en la cola (como si fuera el primero que se agregó)
        const newNode = new node(data);
        if(!this.head){//Verifica si la cabeza de la pila es nula
            this.head = newNode; // Como es nula, ahora la cabeza de la pila va a ser el nuevo nodo
            return;
        }
        else{
            let current = this.head;//actual va a ser la cabeza ahora
            while(current.next){// Mientras exista un nodo siguiente el bucle se cumplira
                current = current.next;// dice que actual ahora sera el nodo siguiente
            }
            current.next = newNode; // Cuando el nodo siguiente sea nulo, se pondrá el nuevo nodo
        }
    }
    prepend(data){//agregarar dato en cabeza
        const newNode = new node(data);// Se crea una variable con la informacion del nuevo nodo
        newNode.next = this.head;// decimos que la cabeza de la pila es el nodo siguiente al nuevo
        this.head = newNode;// convertimos el nuevo nodo en la cabeza de la pila
    }

    delete(data){//borarrar dato
        if (!this.head){// Verifica si la cabeza de la pila es nula osea si esta vacia
            return;// Como esta vacia returna sin nada porque no existen nodos en la pila
        }
        if(this.head.data ===data){//Si los datos a borrar se encuentran en la cabeza
            this.head = this.head.next;// Como son iguales, reemplazamos la cabeza de la pila con el nodo que le sigue, eliminando el nodo
            return;// La función retorna
        }
        let current = this.head;//actual va a ser la cabeza ahora
        while(current.next){// Mientras exista un nodo siguiente el bucle se cumplira
            if(current.next.data === data){// Busca entre los nodos y la compara con el dato propuesto
                current.next = current.next.next;// Se actualiza el puntero. Ya no mira al nodo que queremos eliminar, sino al nodo siguiente
                break;//Usamos el break para que no siga recorriendo la pila
            }
            current = current.next;// Ahora decimos que el nodo que debe ir ahi. debe ser el siguiente al que eliminamos
            }
    }

    display(){// Mostrar los datos dentro de los nodos
        let current = this.head;// Actual será la cabeza de la pila
        while(current){// Mientras actual no sea nulo
            console.log(current.data);// Imprimira los datos dentro del nodo
            current = current.next; // Actualiza para que vaya al siguiente nodo
        }
    }
}
const lista= new linkedlist();
lista.append(1);
lista.append(7)
lista.prepend(4);
//lista.delete(2);
lista.delete(1);
lista.display();
