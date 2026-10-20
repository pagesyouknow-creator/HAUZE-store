(function () {
  document.querySelectorAll('[data-product]').forEach(function (root) {
    var dataEl = root.querySelector('[data-variants]');
    if (!dataEl) return;
    var variants = JSON.parse(dataEl.textContent);
    var idInput = root.querySelector('[data-variant-id]');
    var priceEl = root.querySelector('[data-price]');
    var compareEl = root.querySelector('[data-compare]');
    var addBtn = root.querySelector('[data-add]');
    var groups = root.querySelectorAll('[data-option]');

    function selected() {
      return Array.prototype.map.call(groups, function (g) {
        var c = g.querySelector('input:checked');
        return c ? c.value : null;
      });
    }

    function update() {
      var sel = selected();
      var v = variants.find(function (x) {
        return x.options.every(function (o, i) { return o === sel[i]; });
      });
      if (!v) { addBtn.disabled = true; return; }
      idInput.value = v.id;
      priceEl.textContent = v.price;
      if (v.compare) { compareEl.textContent = v.compare; compareEl.hidden = false; } else { compareEl.hidden = true; }
      addBtn.disabled = !v.available;
      addBtn.textContent = v.available ? addBtn.dataset.labelAdd : addBtn.dataset.labelSold;
      try {
        var url = new URL(window.location.href);
        url.searchParams.set('variant', v.id);
        window.history.replaceState({}, '', url);
      } catch (e) {}
      if (v.media) {
        var m = root.querySelector('[data-media-id="' + v.media + '"]');
        if (m) m.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    groups.forEach(function (g) { g.addEventListener('change', update); });
  });
})();
