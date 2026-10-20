n.d(r, { EG: () => u, Gu: () => d, JI: () => D, Lp: () => A, fk: () => h, hV: () => O, o6: () => N });
var e = n(477900);
n(582128);
var l = n(503698),
    c = n.n(l),
    s = n(661531),
    a = n(85463),
    t = n(834730),
    i = n(306091);
let u = { ROUND: i.rS, ROUND_LEFT: i.Q2, ROUND_RIGHT: i.Hg, SQUARE: "" };
function N(o) {
    return o < 10 ? 16 : o < 100 ? 22 : 30;
}
function d(o) {
    return o < 1e3 ? `${o}` : `${Math.min(Math.floor(o / 1e3), 9)}k+`;
}
function O(o) {
    let {
            count: r,
            color: n = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            disableColor: l = !1,
            shape: O = u.ROUND,
            className: A,
            style: D,
            renderBadgeCount: h = d,
            ...C
        } = o,
        I = (0, a.N)();
    return (0, e.jsx)(t.E, {
        variant: I,
        color: "none",
        className: c()(A, i.Do, O),
        style: { backgroundColor: l ? void 0 : n, width: N(r), ...D },
        ...C,
        children: h(r),
    });
}
function A(o) {
    let {
            text: r,
            className: n,
            color: l = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            shape: N = u.ROUND,
            disableColor: d = !1,
            style: O,
            ...A
        } = o,
        D = (0, a.N)();
    return (0, e.jsx)(t.E, {
        variant: D,
        color: "none",
        className: c()(n, i.U1, N),
        style: { backgroundColor: d ? void 0 : l, ...O },
        ...A,
        children: r,
    });
}
function D(o) {
    let { text: r, className: n, ...l } = o;
    return (0, e.jsx)(A, { className: c()(i.BE, n), text: r, ...l });
}
function h(o) {
    let {
            icon: r,
            className: n,
            color: l = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            shape: N = u.ROUND,
            disableColor: d = !1,
            style: O,
            "aria-label": A,
        } = o,
        D = (0, a.N)();
    return (0, e.jsx)(t.E, {
        variant: D,
        color: "none",
        className: c()(n, i.u3, N),
        style: { backgroundColor: d ? void 0 : l, ...O },
        role: null != A ? "img" : void 0,
        "aria-label": A,
        children: (0, e.jsx)(r, { className: i.Kk, color: "currentColor" }),
    });
}
