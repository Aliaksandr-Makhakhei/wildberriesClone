export function cutTitle(string){
    if(string.length > 20){
      string = string.slice(0, 20)
      string = string + '...'
    }
    return string
  }