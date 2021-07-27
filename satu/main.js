function clickDiv(event, divName){
  event.stopPropagation()
  alert(divName)
}
clickDiv()