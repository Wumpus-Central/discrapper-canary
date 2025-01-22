r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(689079),
    u = r(426838);
let c = (e) => {
    switch (e.id) {
        case l.bi.BUILT_IN:
            return s.SlashBoxIcon;
        case l.bi.FRECENCY:
            return s.ClockIcon;
        default:
            return;
    }
};
function d(e) {
    let { section: n, className: r, width: a, height: s, padding: l, isSelected: d, selectable: f = !1, ...p } = e,
        h = c(n);
    return (0, i.jsx)('div', {
        className: o()(u.wrapper, r, {
            [u.selectable]: f,
            [u.selected]: f && d
        }),
        style: {
            width: a,
            height: s,
            padding: null != l ? l : 0
        },
        children:
            null != h
                ? (0, i.jsx)(h, {
                      className: u.icon,
                      color: 'currentColor',
                      size: 'custom',
                      width: a,
                      height: s,
                      ...p
                  })
                : null
    });
}
