// The tab bar at the top of every page. Each page loads this file right after its <nav id="bar">.
// To add a tab: create tabs/<NN>-<slug>/index.html, then add one line to TABS below (the order here is the order on screen).
(function () {
  var TABS = [
    { slug: '01-app-suspension', label: 'App Suspension' },
    { slug: '02-app-details', label: 'App Details' }
  ];
  // One external link, pinned to the right of the tabs.
  var EXTRA = { href: 'https://cellcave.github.io/apps/phone-cleaner/privacy/', label: 'Privacy policy ↗' };

  var box = document.getElementById('site-tabs');
  if (!box) return;
  var parts = location.pathname.split('/');
  var at = parts.lastIndexOf('tabs');
  var current = at >= 0 ? parts[at + 1] : '';
  // Opened straight from disk (file://), folders do not open their index.html, so link to it by name.
  var suffix = location.protocol === 'file:' ? 'index.html' : '';
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  box.innerHTML = TABS.map(function (t) {
    return '<a href="../' + t.slug + '/' + suffix + '"' + (t.slug === current ? ' aria-current="page"' : '') + '>' + esc(t.label) + '</a>';
  }).join('') + '<a class="ext" href="' + EXTRA.href + '" target="_blank" rel="noopener">' + esc(EXTRA.label) + '</a>';
})();
