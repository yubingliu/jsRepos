function getByClass(oParent, sClass)
{
 var aEle=oParent.getElementsByTagName('*');
 var aResult=[];
 var i=0;
 
 for(i=0;i<aEle.length;i++)
 {
  if(aEle[i].className==sClass)
  {
   aResult.push(aEle[i]);
  }
 }
 
 return aResult;
}