class Shape {
  constructor(){
      this.color ="";
      this.text ="";
      this.textColor ="";
    
  }

  addColor(color){
   this.color = color 
  }

  addText(text){
    this.text = text
  }

  addTextColor(textColor){
    this.textColor = textColor
  }


}

class Circle extends Shape {
  render(){
    return 
  }
}

class Triangle extends Shape {
  render(){
   return 
          
  }
}

class Square extends Shape {
  render(){
   return  

  }
}

console.log(Shape)
modules.exports = { Circle, Triangle, Square };