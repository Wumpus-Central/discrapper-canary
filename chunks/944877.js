r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(689079),
    u = r(426838);
let c = (e) => {
    switch (e.id) {
        case l.bi.BUILT_IN:
            return o.SlashBoxIcon;
        case l.bi.FRECENCY:
            return o.ClockIcon;
        default:
            return;
    }
};
function d(e) {
    let { section: n, className: r, width: a, height: o, padding: l, isSelected: d, selectable: f = !1, ..._ } = e,
        h = c(n);
    return (0, i.jsx)('div', {
        className: s()(u.wrapper, r, {
            [u.selectable]: f,
            [u.selected]: f && d
        }),
        style: {
            width: a,
            height: o,
            padding: null != l ? l : 0
        },
        children:
            null != h
                ? (0, i.jsx)(h, {
                      className: u.icon,
                      color: 'currentColor',
                      size: 'custom',
                      width: a,
                      height: o,
                      ..._
                  })
                : null
    });
}
