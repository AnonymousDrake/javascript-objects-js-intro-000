var playlist={
  SidhuMooseWala:["Dhakka","Famous"]
}
var updatePlaylist= (playlist,key,value) =>{
  return Object.assign(playlist,{[key]:value})
}
var removeFromPlaylist= (playlist,key) =>{
  return Object.assign(playlist,{[key]:})
}
