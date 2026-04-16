n.d(t, { RU: () => E, SQ: () => u, mb: () => o });
var l = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    i = n(397927),
    s = n(12466);
let o = 16;
function E(e) {
    let { description: t, name: n, icon: r, onNavigate: E, className: u, missingNavIcon: c } = e;
    return (0, l.jsxs)(i.DUT, {
        onClick: E,
        className: a()(s.ol, null != E && s.xO, u),
        children: [
            null != r && (0, l.jsx)("div", { className: s.bl, children: r }),
            null != n && (0, l.jsx)("div", { className: s.NR, children: n }),
            (0, l.jsx)("div", { className: s.uV, children: t }),
            null != E &&
                (0, l.jsx)("div", {
                    className: s.Rp,
                    children: (0, l.jsx)(i.uhT, { size: "custom", width: o, height: o }),
                }),
            null == E && null != c && (0, l.jsx)("div", { className: s.Rp, children: c }),
        ],
    });
}
function u(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: s.Fz, children: t });
}
