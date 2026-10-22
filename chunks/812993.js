n.d(r, { EG: () => N, Gu: () => d, Lp: () => A, fk: () => D, hV: () => O, o6: () => u });
var l = n(477900);
n(582128);
var c = n(503698),
    a = n.n(c),
    e = n(661531),
    s = n(85463),
    t = n(834730),
    i = n(306091);
let N = { ROUND: i.rS, ROUND_LEFT: i.Q2, ROUND_RIGHT: i.Hg, SQUARE: "" };
function u(o) {
    return o < 10 ? 16 : o < 100 ? 22 : 30;
}
function d(o) {
    return o < 1e3 ? `${o}` : `${Math.min(Math.floor(o / 1e3), 9)}k+`;
}
function O(o) {
    let {
            count: r,
            color: n = e.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            disableColor: c = !1,
            shape: O = N.ROUND,
            className: A,
            style: D,
            renderBadgeCount: h = d,
            ...C
        } = o,
        R = (0, s.N)();
    return (0, l.jsx)(t.E, {
        variant: R,
        color: "none",
        className: a()(A, i.Do, O),
        style: { backgroundColor: c ? void 0 : n, width: u(r), ...D },
        ...C,
        children: h(r),
    });
}
function A(o) {
    let {
            text: r,
            className: n,
            color: c = e.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            shape: u = N.ROUND,
            disableColor: d = !1,
            style: O,
            ...A
        } = o,
        D = (0, s.N)();
    return (0, l.jsx)(t.E, {
        variant: D,
        color: "none",
        className: a()(n, i.BE, u),
        style: { backgroundColor: d ? void 0 : c, ...O },
        ...A,
        children: r,
    });
}
function D(o) {
    let {
            icon: r,
            className: n,
            color: c = e.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            shape: u = N.ROUND,
            disableColor: d = !1,
            style: O,
            "aria-label": A,
        } = o,
        D = (0, s.N)();
    return (0, l.jsx)(t.E, {
        variant: D,
        color: "none",
        className: a()(n, i.u3, u),
        style: { backgroundColor: d ? void 0 : c, ...O },
        role: null != A ? "img" : void 0,
        "aria-label": A,
        children: (0, l.jsx)(r, { className: i.Kk, color: "currentColor" }),
    });
}
