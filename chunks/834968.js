n.d(t, { A: () => c });
var l = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    r = n(633018),
    a = n(406810),
    o = n(73510),
    u = n(374248);
function c(e) {
    let { section: t, className: n, width: i, height: c, padding: d, isSelected: m, selectable: h = !1, ...p } = e,
        f = (function (e) {
            switch (e.id) {
                case o.Ik.BUILT_IN:
                    return r.k;
                case o.Ik.FRECENCY:
                    return a.ClockIcon;
                default:
                    return;
            }
        })(t);
    return (0, l.jsx)("div", {
        className: s()(u.iE, n, { [u.rb]: h, [u.wH]: h && m }),
        style: { width: i, height: c, padding: d ?? 0 },
        children:
            null != f
                ? (0, l.jsx)(f, { className: u.Kk, color: "currentColor", size: "custom", width: i, height: c, ...p })
                : null,
    });
}
