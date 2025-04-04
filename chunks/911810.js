n.d(t, { k: () => l });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(939350),
    s = n(906944);
function l(e) {
    let { contents: t, label: n, className: i, color: l = 'default' } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              'aria-label': n,
              role: 'group',
              className: i,
              children: [
                  null != n
                      ? (0, r.jsx)('div', {
                            className: o()(s.groupLabel, s.hideInteraction, a._[l]),
                            children: n
                        })
                      : null,
                  t
              ]
          });
}
