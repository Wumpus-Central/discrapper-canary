n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(689079),
    l = n(426838);
let u = (e) => {
    switch (e.id) {
        case o.bi.BUILT_IN:
            return s.SsZ;
        case o.bi.FRECENCY:
            return s.T39;
        default:
            return;
    }
};
function c(e) {
    let { section: t, className: n, width: r, height: s, padding: o, isSelected: c, selectable: d = !1, ...f } = e,
        _ = u(t);
    return (0, i.jsx)('div', {
        className: a()(l.wrapper, n, {
            [l.selectable]: d,
            [l.selected]: d && c
        }),
        style: {
            width: r,
            height: s,
            padding: null != o ? o : 0
        },
        children:
            null != _
                ? (0, i.jsx)(_, {
                      className: l.icon,
                      color: 'currentColor',
                      size: 'custom',
                      width: r,
                      height: s,
                      ...f
                  })
                : null
    });
}
