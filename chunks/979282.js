n.d(t, { A: () => l });
var i = n(627968);
n(64700);
var r = n(518620),
    a = n(901319);
function l(e) {
    let {
        rows: t,
        renderRow: n,
        renderSection: l,
        isVirtualizedList: s,
        hasSearchQuery: o,
        sectionFilter: d,
        footer: c,
        renderSectionFooter: u,
    } = e;
    return s
        ? (0, i.jsx)(r.A, {
              rows: t,
              renderRow: n,
              renderSection: l,
              footer: c,
              sectionFilter: d,
              renderSectionFooter: u,
          })
        : (0, i.jsx)(a.A, {
              rows: t,
              renderRow: n,
              renderSection: l,
              sectionFilter: d,
              hasSearchQuery: o,
              footer: c,
              renderSectionFooter: u,
          });
}
