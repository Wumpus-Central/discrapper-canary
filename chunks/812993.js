"use strict";
n.d(t, { EG: () => l, Gu: () => c, JI: () => h, Lp: () => _, fk: () => f, hV: () => d, o6: () => u });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(661531),
    o = n(235520);
let l = { ROUND: o.rS, ROUND_LEFT: o.Q2, ROUND_RIGHT: o.Hg, SQUARE: "" };
function u(e) {
    return e < 10 ? 16 : e < 100 ? 22 : 30;
}
function c(e) {
    return e < 1e3 ? `${e}` : `${Math.min(Math.floor(e / 1e3), 9)}k+`;
}
let d = (e) => {
        let {
            count: t,
            color: n = a.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            disableColor: r = !1,
            shape: d = l.ROUND,
            className: _,
            style: h,
            renderBadgeCount: f = c,
            ...p
        } = e;
        return (0, i.jsx)("div", {
            className: s()(_, o.Do, d),
            style: { backgroundColor: r ? void 0 : n, width: u(t), ...h },
            ...p,
            children: f(t),
        });
    },
    _ = (e) => {
        let {
            text: t,
            className: n,
            color: r = a.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            shape: u = l.ROUND,
            disableColor: c = !1,
            style: d,
            ..._
        } = e;
        return (0, i.jsx)("div", {
            className: s()(n, o.U1, u),
            style: { backgroundColor: c ? void 0 : r, ...d },
            ..._,
            children: t,
        });
    },
    h = (e) => {
        let { text: t, className: n, ...r } = e;
        return (0, i.jsx)(_, { className: s()(o.BE, n), text: t, ...r });
    },
    f = (e) => {
        let {
            icon: t,
            className: n,
            color: r = a.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            shape: u = l.ROUND,
            disableColor: c = !1,
            style: d,
            "aria-label": _,
        } = e;
        return (0, i.jsx)("div", {
            className: s()(n, o.u3, u),
            style: { backgroundColor: c ? void 0 : r, ...d },
            role: null != _ ? "img" : void 0,
            "aria-label": _,
            children: (0, i.jsx)(t, { className: o.Kk, color: "currentColor" }),
        });
    };
