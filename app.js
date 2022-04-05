let m =
`Edison
  Millicent
    Neville
      Sherrie
        Earnestine
        Mayra
      Rylee
    Francisca
Sam
  Leola
    Chung`

m = m.split("\n")

let obj  = {}
let step = []

function getValue(obj,m){
return [obj,...m].reduce( (o,x,i) => o[x] )
}

for(i=0;i<m.length;i++){

  let reg = ( x => x != null ? x[0].split("").length/2 : 0 )(m[i].match(/^\s+/))
  let key = m[i].trim()

  let r = step.length - (step.length - reg) // le tableau ne doit pas dépasser la taille de reg
  step.splice(r)

  console.log( reg, key, step )

  getValue(obj,step)[key] = {}

  step.push(key)

}

console.log(obj)
