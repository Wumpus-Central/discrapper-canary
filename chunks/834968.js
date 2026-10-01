i.d(s, { A: () => d });
var t = i(477900);
i(582128);
var l = i(503698),
    a = i.n(l),
    n = i(633018),
    c = i(406810),
    o = i(73510),
    r = i(374248);
function d(e) {
    let { section: s, className: i, width: l, height: d, padding: u, isSelected: h, selectable: p = !1, ...A } = e,
        b = (function (e) {
            switch (e.id) {
                case o.Ik.BUILT_IN:
                    return n.k;
                case o.Ik.FRECENCY:
                    return c.ClockIcon;
                default:
                    return;
            }
        })(s);
    return (0, t.jsx)("div", {
        className: a()(r.iE, i, { [r.rb]: p, [r.wH]: p && h }),
        style: { width: l, height: d, padding: u ?? 0 },
        children:
            null != b
                ? (0, t.jsx)(b, { className: r.Kk, color: "currentColor", size: "custom", width: l, height: d, ...A })
                : null,
    });
}
