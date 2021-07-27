function isPossible(clothes){
  // console.log(clothes);
  let clothesAfter = {}
  let output = true
  let combinations = []
  for (const key in clothes) {
    clothesAfter[key] = []
    for (let j = 0; j < clothes[key].length; j++) {
      let alreadyAdded = false
      for (let i = 0; i < combinations.length; i++) {
        if (clothes[key][j] === combinations[i]) {
          alreadyAdded = true
        }
      }
      if (!alreadyAdded) {
        combinations.push(clothes[key][j])
        clothesAfter[key].push(clothes[key][j])
      }
    }
  }
  //kalau ada salah satu key yang kosong, berarti ada yang sama sekali ga masuk kombinasi dan itu salah
  for (const key in clothesAfter) {
    if (!clothesAfter[key].length) {
      output = false
      return output
    }
  }
  // console.log(combinations);
  return `${output}. Example of possible combination: ${JSON.stringify(combinations)}`
}

let clothes1 = {}
clothes1[0] = ['JakartaJS']
clothes1[1] = ['AWSome Day', 'Elixir']
clothes1[2] = ['GoJakarta', 'Elixir']

let clothes2 = {}
clothes2[0] = ['JakartaJS', 'Elixir']
clothes2[1] = ['Elixir']
clothes2[2] = ['JakartaJS', 'Elixir']

console.log(isPossible(clothes1));
module.exports = isPossible