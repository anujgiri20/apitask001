var a=0
async function foo()
{

for(var j=0;j<8;j++)
{    
    let  data= await fetch (`https://api.artic.edu/api/v1/artworks?page=${j}`);

    
    let  data1 =await data.json();
    console.log(data1)
    
    //this loop is going to access diff image in api 
    //bec in api we use template literals
 for(var i=0;i<12;i++)
 {
   
var cc=data1.data[i].image_id   
var img= new Image();
img.setAttribute("class","img")
img.src=`https://www.artic.edu/iiif/2/${cc}/full/843,/0/default.jpg`

//we access each image and pass this image along with data to the function foo()
document.body.append(img)


  }
}
}

foo();
