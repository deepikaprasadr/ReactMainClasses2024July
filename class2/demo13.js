class Parent{
    constructor(a){
        console.log('parent constructor called')
        this.a = a;
    }

    print(){
        console.log(this.a)
    }
}

class Child extends Parent{
    constructor(a){
        super(a)
        console.log('child constructor called')
    }
}

//const parent = new Parent();
const child = new Child(100)
child.print()
