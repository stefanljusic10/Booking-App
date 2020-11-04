// funkcija za kreiranje elemenata sa atributima i sadrzajem
function crE(tag, atributes = {}, content = undefined) {
  let x = document.createElement(tag);
  for (const key in atributes) {
    x.setAttribute(key, atributes[key]);
  }
  if (typeof content === "string") {
    x.textContent = content;
  }
  else if (typeof content === "object") {
    if (content.length) {
      for (let i = 0; i < content.length; i++)
        x.appendChild(content[i]);
    }
    else x.appendChild(content);
  }

  return x;
}

export default crE;
