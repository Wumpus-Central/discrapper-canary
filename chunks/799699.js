var n = l(477900);
l(582128);
var s = l(503698),
    r = l.n(s),
    i = l(810729);
let t = { sm: i.nz, md: i.a };
function d(e) {
    let { className: a, width: l } = e;
    return (0, n.jsx)("div", { "aria-hidden": !0, className: r()(i.qf, a), style: { width: l } });
}
l.d(
    a,
    {},
    {
        Ay: d,
        pv: function (e) {
            let { className: a, size: l = "md" } = e;
            return (0, n.jsx)(d, { className: r()(i.x6, t[l], a) });
        },
        qT: function (e) {
            let { animationDelayMs: a, children: l, className: s } = e,
                r = null != a ? { "--custom-game-profile-skeleton-animation-delay": `${a}ms` } : void 0;
            return (0, n.jsx)("div", { "aria-hidden": !0, className: s, style: r, children: l });
        },
    },
);
