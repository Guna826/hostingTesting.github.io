let list=[];
function clickTheCart()
{
    let list=[];

    let ding=document.querySelector('.prod-name');
    let dong=ding.innerHTML;

    list.push(dong);
    
    let dodo=document.querySelector('.add2cart').innerHTML='Added to Cart ✓';
    
        document.querySelector('.viewCart').innerHTML='ViewCart';
    
}