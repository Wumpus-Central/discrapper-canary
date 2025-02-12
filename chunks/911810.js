n.d(t, { k: () => l });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(939350),
    o = n(186928);
function l(e) {
    let { contents: t, label: n, className: r, color: l = 'default' } = e;
    return 0 === t.length
        ? null
        : (0, i.jsxs)('div', {
              'aria-label': n,
              role: 'group',
              className: r,
              children: [
                  null != n
                      ? (0, i.jsx)('div', {
                            className: a()(o.groupLabel, o.hideInteraction, s._[l]),
                            children: n
                        })
                      : null,
                  t
              ]
          });
}
