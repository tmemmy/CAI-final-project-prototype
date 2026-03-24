export function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const view = document.getElementById(viewId);
  if (view) view.classList.add('active');
}

export function setBreadcrumb(items) {
  const bc = document.getElementById('breadcrumb');
  bc.innerHTML = items.map((item, i) => {
    const isLast = i === items.length - 1;
    if (isLast) {
      return `<span>${item.label}</span>`;
    }
    return `<a href="${item.href}">${item.label}</a><span class="breadcrumb-separator">/</span>`;
  }).join('');
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function scrollToElement(el) {
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
