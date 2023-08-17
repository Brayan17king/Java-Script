class Stack {
  constructor() {
    this.top = null;
    //this.length = 0;
  }

  //Ingresar un Dato
  push(element) {
    let node = new Node(element, this.top);
    this.top = node;
    //this.length ++;
  }

  hasElement() {
    let aux = this.top;
  }

  /*
    len(){
        return this.length 
    }
    */

    //Saber la Cantidad de Datos que Contiene la Pila
  len() {
    let aux = this.top;
    let amount = 0;
    while (aux !== null) {
      amount++;
      aux.prev;
    }
    return amount;
  }

  //Retorna el elemento que esta en la cima de la pila
  peek() {
    return this.top;
  }

  //Saber si la pila esta vacia
  isEmpty() {
    return this.top === null;
  }

  //Imprimir la Pila
  print() {
    let aux = this.top;
    while (aux !== null) {
      console.log(aux.prev);
      aux = aux.prev;
    }
  } 


  //Eliminar el elemento en la cima de la pila
  pop() {
    if (this.top !== null) {
      let element = this.top;
      this.top = this.top.prev;
      //this.length --;
      return element;
    } else {
      alert("Exploto Todo");
      return null;
    }
  }
}

//Creamos el Nodo
class Node {
  constructor(element, prev) {
    this.data = element;
    this.prev = prev;
  }
}

//Creamos la Pila
let myStak = new Stack();
myStak.push(15);
myStak.push(20);
myStak.push(30);

console.log(myStak)