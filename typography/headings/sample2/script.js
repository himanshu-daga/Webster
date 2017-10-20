document.addEventListener("DOMContentLoaded", function(){
  // get letter
  const letters = document.getElementsByClassName('letters')[0].innerHTML;

  const newArr = letters.split('');
  console.log(letters);
  console.log(newArr.length);

    let num = 0;
  newArr.forEach((letter, i) => {
    $("body").append(`<h2 class="letter-${i}">${letter}</h2>`);
    $(`.letter-${i}`).css('color', `rgb(0, 0, ${num})`);
    $(`.letter-${i}`).css('display', 'inline');
    num += 30;
  });
});
