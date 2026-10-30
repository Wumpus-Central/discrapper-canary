n.d(e, { Ay: () => t, pv: () => c, qT: () => r });
var a = n(477900);
n(582128);
var i = n(503698),
    u = n.n(i),
    s = n(810729);
let d = { sm: s.nz, md: s.a };
function t(l) {
    let { className: e, width: n } = l;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: u()(s.qf, e), style: { width: n } });
}
function r(l) {
    let { animationDelayMs: e, children: n, className: i } = l,
        u = null != e ? { "--custom-game-profile-skeleton-animation-delay": `${e}ms` } : void 0;
    return (0, a.jsx)("div", { "aria-hidden": !0, className: i, style: u, children: n });
}
function c(l) {
    let { className: e, size: n = "md" } = l;
    return (0, a.jsx)(t, { className: u()(s.x6, d[n], e) });
}
