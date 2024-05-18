// var bold = document.getElementById("bold-img")
// var italic = document.getElementById("italic-img")
// var underline = document.getElementById("underline-img")
// var paragraph = document.getElementById("para")




// bold.addEventListener('click',function(){
// para.style.fontWeight='800'
// })


// italic.addEventListener('click',function(){
// para.style.fontStyle='italic'
// })


// underline.addEventListener('click',function(){
// para.style.textDecoration ='underline'
// })
const quill = new Quill('#editor', {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block'],
      ],
    },
    placeholder: 'Compose an epic...',
    theme: 'snow', // or 'bubble'
  });