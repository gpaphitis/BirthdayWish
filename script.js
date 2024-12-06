document.addEventListener("DOMContentLoaded", () =>
{
   document.querySelector('#content').addEventListener('click', () =>
   {
      if (document.querySelector('#top').classList.contains('open'));
      else {
         document.querySelector('#top').classList.add('open');
         document.querySelector('#wish').classList.remove('hidden');
         let delayInMilliseconds = 4000; //1 second
         // setTimeout(function ()
         // {
         //    document.querySelector('#content-wish').classList.remove('hidden-wish');
         //    document.querySelector('#content-wish').classList.add('semi-hidden');
         //    setTimeout(function (){
         //       document.querySelector('#content-wish').classList.remove('semi-hidden');
         //       document.querySelector('#full-content').classList.add('grey-out');
         //    },1000)
         // }, delayInMilliseconds);
         document.querySelector('#content-wish').classList.remove('hidden-wish');
         document.querySelector('#content-wish').classList.add('semi-hidden');
         setTimeout(function ()
         {
            document.querySelector('#content-wish').classList.remove('semi-hidden');
            document.querySelector('#full-content').classList.add('grey-out');
         }, delayInMilliseconds);
      }
   });
});