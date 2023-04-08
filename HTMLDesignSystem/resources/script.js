// Fix Codeblock Whitespace
document.querySelectorAll('pre code').forEach(el => {
  let html = el.outerHTML;
  let pattern = html.match(/\s*\n[\t\s]*/);

  el.outerHTML = html.replace(new RegExp(pattern, 'g'), '\n');
});
