// Fix Codeblock Whitespace
document.querySelectorAll('pre code').forEach(el => {
  let html = el.outerHTML;
  let pattern = html.match(/\s*\n[\t\s]*/);

  el.outerHTML = html.replace(new RegExp(pattern, 'g'), '\n');
});

let collapse = document.getElementsByClassName('collapse');

for (let i of collapse) {
  i.addEventListener('click', function () {
    this.classList.toggle('active');
    let content = this.nextElementSibling;
    content.style.maxHeight
      ? (content.style.maxHeight = null)
      : (content.style.maxHeight = `${content.scrollHeight}px`);
  });
}
