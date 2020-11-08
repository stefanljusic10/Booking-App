// removeChild, appendChild functions
function rc(parent, child){
  if (child.length) {
    for (let i = 0; i < child.length; i++)
      parent.removeChild(child[i]);
  }
  else parent.removeChild(child);
}

function ac(parent, child){
  if (child.length) {
    for (let i = 0; i < child.length; i++)
      parent.appendChild(child[i]);
  }
  else parent.appendChild(child);
}

export {rc, ac};
