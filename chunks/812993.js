n.d(t, { EG: () => c, Gu: () => _, JI: () => h, Lp: () => A, fk: () => f, hV: () => E, o6: () => u });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(661531),
    l = n(85463),
    o = n(834730),
    d = n(306091);
let c = { ROUND: d.rS, ROUND_LEFT: d.Q2, ROUND_RIGHT: d.Hg, SQUARE: "" };
function u(e) {
    return e < 10 ? 16 : e < 100 ? 22 : 30;
}
function _(e) {
    return e < 1e3 ? `${e}` : `${Math.min(Math.floor(e / 1e3), 9)}k+`;
}
function E(e) {
    let {
            count: t,
            color: n = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            disableColor: r = !1,
            shape: E = c.ROUND,
            className: A,
            style: h,
            renderBadgeCount: f = _,
            ...I
        } = e,
        p = (0, l.N)();
    return (0, i.jsx)(o.E, {
        variant: p,
        color: "none",
        className: a()(A, d.Do, E),
        style: { backgroundColor: r ? void 0 : n, width: u(t), ...h },
        ...I,
        children: f(t),
    });
}
function A(e) {
    let {
            text: t,
            className: n,
            color: r = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            shape: u = c.ROUND,
            disableColor: _ = !1,
            style: E,
            ...A
        } = e,
        h = (0, l.N)();
    return (0, i.jsx)(o.E, {
        variant: h,
        color: "none",
        className: a()(n, d.U1, u),
        style: { backgroundColor: _ ? void 0 : r, ...E },
        ...A,
        children: t,
    });
}
function h(e) {
    let { text: t, className: n, ...r } = e;
    return (0, i.jsx)(A, { className: a()(d.BE, n), text: t, ...r });
}
function f(e) {
    let {
            icon: t,
            className: n,
            color: r = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            shape: u = c.ROUND,
            disableColor: _ = !1,
            style: E,
            "aria-label": A,
        } = e,
        h = (0, l.N)();
    return (0, i.jsx)(o.E, {
        variant: h,
        color: "none",
        className: a()(n, d.u3, u),
        style: { backgroundColor: _ ? void 0 : r, ...E },
        role: null != A ? "img" : void 0,
        "aria-label": A,
        children: (0, i.jsx)(t, { className: d.Kk, color: "currentColor" }),
    });
}
