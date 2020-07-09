var playlist={
  Sidhu Moose Wala:["Dhakka","Famous"]
}
var updatePlaylist= (playlist,key,value) =>{
  return Object.assign({},playlist,{[key]:value})
}
