n.d(r, { EG: () => t, Gu: () => u, fk: () => b, hV: () => N, o6: () => d });
var l = n(477900);
n(582128);
var s = n(503698),
    e = n.n(s),
    a = n(661531),
    c = n(834730),
    i = n(306091);
let t = { ROUND: i.rS, ROUND_LEFT: i.Q2, ROUND_RIGHT: i.Hg, SQUARE: "" };
function d(o) {
    return o < 10 ? 16 : o < 100 ? 22 : 30;
}
function u(o) {
    return o < 1e3 ? `${o}` : `${Math.min(Math.floor(o / 1e3), 9)}k+`;
}
function N(o) {
    let {
        count: r,
        color: n = a.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
        disableColor: s = !1,
        shape: N = t.ROUND,
        className: b,
        style: h,
        renderBadgeCount: O = u,
        ...D
    } = o;
    return (0, l.jsx)(c.E, {
        variant: "body-xs/semibold",
        color: "none",
        className: e()(b, i.Do, N),
        style: { backgroundColor: s ? void 0 : n, width: d(r), ...h },
        ...D,
        children: O(r),
    });
}
function b(o) {
    let {
        icon: r,
        className: n,
        color: s = a.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
        shape: d = t.ROUND,
        disableColor: u = !1,
        style: N,
        "aria-label": b,
    } = o;
    return (0, l.jsx)(c.E, {
        variant: "body-xs/semibold",
        color: "none",
        className: e()(n, i.bG, d),
        style: { backgroundColor: u ? void 0 : s, ...N },
        role: null != b ? "img" : void 0,
        "aria-label": b,
        children: (0, l.jsx)(r, { className: i.Kk, color: "currentColor" }),
    });
}
