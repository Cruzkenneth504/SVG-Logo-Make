class Shape {
  constructor(){
      this.color ="";
      this.text ="";
      this.textColor ="";
    
  }

  shapeColor(color){
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
    return `<svg width="300px" height="200px"><circle cx="150" cy="100" r="80" fill="${this.color}" stroke="black" stroke-width="3" /><text x="150" y="100" font-size="50" text-anchor="middle" fill="${this.textColor}" alignment-baseline="central">${this.text}</text></svg>`
  }
}

class Triangle extends Shape {
  render(){
    return `<svg width="300" height="200"><polygon points="150 0, 300 200, 0 200" style="fill:${this.color};"/><text x="50%" y="80%" dominant-baseline="middle" font-size="70px" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  
          
  }
}

class Square extends Shape {
  render(){
   return `<svg width="300" height="200"><rect width="300" height="200" style="fill:${this.color};stroke-width:2;stroke:#FFFFFF"/><text x="50%" y="50%" dominant-baseline="middle" font-size="100px" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`

  }
}



module.exports = { Circle, Triangle, Square };