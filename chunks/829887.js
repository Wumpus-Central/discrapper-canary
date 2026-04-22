n.d(t, { RU: () => u, SQ: () => o, mb: () => _ });
var l = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    i = n(939249),
    s = n(881636),
    E = n(12466);
let _ = 16;
function u(e) {
    let { description: t, name: n, icon: a, onNavigate: u, className: o, missingNavIcon: c } = e;
    return (0, l.jsxs)(i.D, {
        onClick: u,
        className: r()(E.ol, null != u && E.xO, o),
        children: [
            null != a && (0, l.jsx)("div", { className: E.bl, children: a }),
            null != n && (0, l.jsx)("div", { className: E.NR, children: n }),
            (0, l.jsx)("div", { className: E.uV, children: t }),
            null != u &&
                (0, l.jsx)("div", {
                    className: E.Rp,
                    children: (0, l.jsx)(s.u, { size: "custom", width: _, height: _ }),
                }),
            null == u && null != c && (0, l.jsx)("div", { className: E.Rp, children: c }),
        ],
    });
}
function o(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: E.Fz, children: t });
}
