function getFirstSelector(selector)
{ var se = document.querySelector(selector)
  return se
}
function nestedTarget()
{
return document.querySelector('#nested .target')
}
function deepestChild()
{
  return document.querySelector('#grand-node div div div div')
}
function increaseRankBy(n){
  var lis = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < lis.length; i++){
    lis[i].innerHTML = (parseInt(lis[i], 10) + n).toString()
 }}
