n.d(t, { A: () => a });
var r = n(627968);
n(64700);
var i = n(518620),
    l = n(901319);
function a(e) {
    let {
        rows: t,
        renderRow: n,
        renderSection: a,
        isVirtualizedList: s,
        hasSearchQuery: o,
        sectionFilter: c,
        footer: u,
        renderSectionFooter: d,
    } = e;
    return s
        ? (0, r.jsx)(i.A, {
              rows: t,
              renderRow: n,
              renderSection: a,
              footer: u,
              sectionFilter: c,
              renderSectionFooter: d,
          })
        : (0, r.jsx)(l.A, {
              rows: t,
              renderRow: n,
              renderSection: a,
              sectionFilter: c,
              hasSearchQuery: o,
              footer: u,
              renderSectionFooter: d,
          });
}
