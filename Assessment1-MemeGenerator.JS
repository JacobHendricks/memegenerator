const form = document.querySelector('#add-Meme')
const memeList = document.getElementById("memeList")
const topTextInput = document.querySelector('input[name="topText"]');
const bottomTextInput = document.querySelector('input[name="bottomText"]');
const urlInput = document.querySelector('input[name="url"]');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let meme = document.createElement("div");
  let upperText = document.createElement("div");
  let lowerText = document.createElement("div");
  let img = document.createElement("img");
  let btn = document.createElement("button");

  upperText.innerHTML = topTextInput.value
  lowerText.innerText = bottomTextInput.value
  img.src = urlInput.value
  btn.innerText = "X"
  meme.appendChild(upperText);
  meme.appendChild(lowerText);
  meme.append(img);
  meme.append(btn)
  memeList.appendChild(meme);
  meme.className = "meme"

})

memeList.addEventListener('click', function(e) {
  if(e.target.tagName === 'BUTTON') {
    console.log('clickkkekekek')
    e.target.parentElement.remove()
  }
})