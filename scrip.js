function mayor () {
  let a, b, c
  a=4
  b=3
  c=2
  if (a>=b && a>=c) {
    console.log a
  } else if (b>=a && b>=c){
    console.log b
  } else if (c>=a && c>=b) {
    console.log c
  }
}
mayor (a,b,c)