Object.prototype.flip = function(){
    for (const [key, value] of Object.entries(this)) {
       this[value] = key
        delete this[key]
    }
    
}
Object.prototype.sort = function(){
    return Object.keys(this).sort().reduce(
        (obj, key) => { 
          obj[key] = this[key]; 
          return obj;
        }, 
        {}
      );
}
Object.prototype.pick = function(path){
    const result = {} 
    for(let key of path){
        this[key]&& (result[key] = this[key])
    }
    return result
}
Object.prototype.omit = function(path){
    const result = Object.assign({},this)
    for(let key of path){
        delete result[key]
    }
    return result
}
Object.prototype.clone = function(){
    return Object.assign({},this)
}
Object.prototype.merge = function(...objects){
    return Object.assign(this,...objects)
    
}
Object.prototype.size = function(){
    return Object.keys(this).length;
}
Object.prototype.keys = function(){
    return Object.keys(this);
}
Object.prototype.values = function(){
    return Object.values(this);
}
Object.prototype.FLUpperCase = function(){
    this.keys().forEach(key=>{
        this[key.toFLUpperCase()]
        delete this[key]
    })
}
Object.prototype.FLLowerCase = function(){
    this.keys().forEach(key=>{
        this[key.toFLLowerCase()]
        delete this[key]
    })
}
Object.prototype.lowerCase = function(){
    this.keys().forEach(key=>{
        this[key.toLowerCase()]
        delete this[key]
    })
}
Object.prototype.upperCase = function(){
    this.keys().forEach(key=>{
        this[key.toUpperCase()]
        delete this[key]
    })
}