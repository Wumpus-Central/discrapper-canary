r.d(n, {
    k: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(939350),
    l = r(450793);
function u(e) {
    let { contents: n, label: r, className: a, color: u = 'default' } = e;
    return 0 === n.length
        ? null
        : (0, i.jsxs)('div', {
              'aria-label': r,
              role: 'group',
              className: a,
              children: [
                  null != r
                      ? (0, i.jsx)('div', {
                            className: o()(l.groupLabel, l.hideInteraction, s._[u]),
                            children: r
                        })
                      : null,
                  n
              ]
          });
}
