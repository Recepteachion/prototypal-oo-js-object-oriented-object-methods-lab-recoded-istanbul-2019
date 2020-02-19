function BoardMember(name,homeState,training){
  this.name=name,
  this.homeState=homeState,
  this.training=training,
  
  this.veto=function(){
<<<<<<< HEAD
    return `No, I must disagree`
  },
  this.approve=function(){
    return `You can do that!`
  },
  this.doCharity=function(){
    return `I like to help people.`
  },
  this.releasePressStatement =function(){
    return `You will see great things from Scuber.`
  },
  this.sayHi=function(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
=======
    return `I must disagree`
  },
  this.approve=function(){
    return `You can do that`
  }
  this.doCharity=function(){
    return `You will see great things from Scuber.`
  }
  this.sayHi=function(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}`
>>>>>>> 8abf0f272d4f6caf6dfb3b905cf0c03906f8bb4f
  }
}