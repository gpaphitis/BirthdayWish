document.addEventListener("DOMContentLoaded", () =>
{
   document.querySelector('#box').addEventListener('click', () =>
   {
      if (document.querySelector('#top').classList.contains('open'));
      else {
         document.querySelector('#top').classList.add('open');
         document.querySelector('#wish').classList.remove('hidden');
         // let delayInMilliseconds = 4000; //1 second
         // setTimeout(function ()
         // {
         //    document.querySelector('#content-wish').classList.remove('hidden');
         //    document.querySelector('#full-content').classList.add('grey-out');
         // }, delayInMilliseconds);
      }
   });
});