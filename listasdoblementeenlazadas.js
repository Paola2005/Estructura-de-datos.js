class Nodo{
    constructor(valor){
      this.next = null;
      this.prev = null;
      this.valor = valor;
    }
  }
  class Lista{
    constructor(valor){
      this.init = new Nodo(valor);
      this.last = this.init; 
    }
    /*Añade nodo al final*/
    agregar(valor){
      if(!this.existe(valor)){
        let nuevo  = new Nodo(valor);
        let ultimo;
        ultimo = this.last;
        ultimo.next = nuevo; 
        nuevo.prev = ultimo;
        this.last = nuevo;
      }
    }
    /*Elimnina el último nodo*/
    borrarUltimo(){
      this.last = this.last.prev;
      this.last.next = null;
    }
    borrarValor(valor){
      let nodo = this.init;
      let previo, sigte;
      while (nodo != null && nodo.valor != valor){
        nodo = nodo.next;
      }
      if(nodo != null){
        previo = nodo.prev;
        sigte = nodo.next
        sigte.prev = previo;
        previo.next = sigte;
      }
      return nodo != null;
    }
    existe(valor){
      let nodo = this.init;
      while (nodo != null && nodo.valor != valor){
        nodo = nodo.next;
      }
      return nodo != null
    }
    iterarDir(){
      let nodo = this;
      do{ 
        console.log(nodo.valor);
        nodo = nodo.next;
      }
      while (nodo != null)
    }
    iterarRev(){
      let nodo = this;
      do{ 
        console.log(nodo.valor);
        nodo = nodo.prev;
      }
      while (nodo != null)
    }
  }
  /*La lista se crea con un valor inicial*/  
  var miLista = new Lista(1);
  miLista.agregar(2);  
  miLista.agregar(3);