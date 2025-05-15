n.d(t, { k: () => l });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(939350),
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
                            className: a()(s.groupLabel, s.hideInteraction, o._[l]),
                            children: n
                        })
                      : null,
                  t
              ]
          });
}
