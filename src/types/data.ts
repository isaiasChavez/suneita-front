import landing1 from  "./images/landing1.jpg"
import landing2 from  "./images/landing2.jpg"
import landing3 from  "./images/landing3.jpg"
import team from  "./images/team.svg"
import shopping from  "./images/shopping.svg"
import oaxaca from  "./images/principals/backpack.jpg"
import oaxaca2 from  "./images/principals/roman-lopez-92XOQbvqpdU-unsplash.jpg"

export type ImageObject ={
   static:any,
   url:string ,
   title:string,
   alt:string,
}

type ImagesObject = { 
  landing1:ImageObject,
  landing2:ImageObject,
  landing3:ImageObject,
  team:ImageObject,
  shopping:ImageObject,
  oaxaca:ImageObject,
  oaxaca2:ImageObject,
  
}
export const Images:ImagesObject = {
  landing1:{
   static:landing1,
   url:'https://images.unsplash.com/photo-1601057271407-4e8d47924313?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1522&q=80',
   title:"",
   alt:"",
  },
  landing2:{
   url:'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
   static:null,
   title:"",
   alt:"",
  },
  landing3:{
   url:'https://images.unsplash.com/photo-1603963173446-5f40baf1a95c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
   static:null,
   title:"",
   alt:"",
  },
  team:{
   url:'',
   static:team,
   title:"",
   alt:"team",
  },
  shopping:{
   url:'',
   static:shopping,
   title:"",
   alt:"team",
  },
  oaxaca:{
   url:'',
   static:oaxaca,
   title:"",
   alt:"team",
  },
  oaxaca2:{
    url:'',
   static:oaxaca2,
   title:"",
   alt:"team",
  }
}