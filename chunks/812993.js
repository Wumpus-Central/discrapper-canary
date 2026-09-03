n.d(t, { EG: () => d, Gu: () => u, JI: () => A, Lp: () => E, SC: () => I, fk: () => h, hV: () => _, o6: () => c });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(661531),
    l = n(834730),
    o = n(306091);
let d = { ROUND: o.rS, ROUND_LEFT: o.Q2, ROUND_RIGHT: o.Hg, SQUARE: "" };
function c(e) {
    return e < 10 ? 16 : e < 100 ? 22 : 30;
}
function u(e) {
    return e < 1e3 ? `${e}` : `${Math.min(Math.floor(e / 1e3), 9)}k+`;
}
function _(e) {
    let {
        count: t,
        color: n = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
        disableColor: r = !1,
        shape: _ = d.ROUND,
        className: E,
        style: A,
        renderBadgeCount: h = u,
        ...I
    } = e;
    return (0, i.jsx)(l.E, {
        variant: "eyebrow",
        color: "none",
        className: a()(E, o.Do, _),
        style: { backgroundColor: r ? void 0 : n, width: c(t), ...A },
        ...I,
        children: h(t),
    });
}
function E(e) {
    let {
        text: t,
        className: n,
        color: r = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
        shape: c = d.ROUND,
        disableColor: u = !1,
        style: _,
        ...E
    } = e;
    return (0, i.jsx)(l.E, {
        variant: "eyebrow",
        color: "none",
        className: a()(n, o.U1, c),
        style: { backgroundColor: u ? void 0 : r, ..._ },
        ...E,
        children: t,
    });
}
function A(e) {
    let { text: t, className: n, ...r } = e;
    return (0, i.jsx)(E, { className: a()(o.BE, n), text: t, ...r });
}
function h(e) {
    let {
        icon: t,
        className: n,
        color: r = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
        shape: c = d.ROUND,
        disableColor: u = !1,
        style: _,
        "aria-label": E,
    } = e;
    return (0, i.jsx)(l.E, {
        variant: "eyebrow",
        color: "none",
        className: a()(n, o.u3, c),
        style: { backgroundColor: u ? void 0 : r, ..._ },
        role: null != E ? "img" : void 0,
        "aria-label": E,
        children: (0, i.jsx)(t, { className: o.Kk, color: "currentColor" }),
    });
}
function I(e) {
    let {
        className: t,
        color: n = s.A.colors.INTERACTIVE_TEXT_ACTIVE.css,
        shape: r = d.ROUND,
        disableColor: l = !1,
        style: c,
        ...u
    } = e;
    return (0, i.jsx)("div", { className: a()(t, o.Ky, r), style: { backgroundColor: l ? void 0 : n, ...c }, ...u });
}
