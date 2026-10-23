n.d(r, { EG: () => u, Gu: () => d, fk: () => O, hV: () => h, o6: () => N });
var a = n(477900);
n(582128);
var l = n(503698),
    c = n.n(l),
    e = n(661531),
    s = n(85463),
    t = n(834730),
    i = n(306091);
let u = { ROUND: i.rS, ROUND_LEFT: i.Q2, ROUND_RIGHT: i.Hg, SQUARE: "" };
function N(o) {
    return o < 10 ? 16 : o < 100 ? 22 : 30;
}
function d(o) {
    return o < 1e3 ? `${o}` : `${Math.min(Math.floor(o / 1e3), 9)}k+`;
}
function h(o) {
    let {
            count: r,
            color: n = e.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            disableColor: l = !1,
            shape: h = u.ROUND,
            className: O,
            style: D,
            renderBadgeCount: k = d,
            ...A
        } = o,
        C = (0, s.N)();
    return (0, a.jsx)(t.E, {
        variant: C,
        color: "none",
        className: c()(O, i.Do, h),
        style: { backgroundColor: l ? void 0 : n, width: N(r), ...D },
        ...A,
        children: k(r),
    });
}
function O(o) {
    let {
            icon: r,
            className: n,
            color: l = e.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            shape: N = u.ROUND,
            disableColor: d = !1,
            style: h,
            "aria-label": O,
        } = o,
        D = (0, s.N)();
    return (0, a.jsx)(t.E, {
        variant: D,
        color: "none",
        className: c()(n, i.u3, N),
        style: { backgroundColor: d ? void 0 : l, ...h },
        role: null != O ? "img" : void 0,
        "aria-label": O,
        children: (0, a.jsx)(r, { className: i.Kk, color: "currentColor" }),
    });
}
