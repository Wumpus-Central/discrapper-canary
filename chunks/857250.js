"use strict";
n.d(t, { o: () => _, y: () => f });
var r = n(627968),
    i = n(64700),
    s = n(835245),
    a = n(571356),
    o = n(397927),
    l = n(427209),
    u = n(97483),
    c = n(910200);
function d(e) {
    switch (e) {
        case u.Ck.SUCCESS:
            return (0, r.jsx)(o.A9s, { size: "md", className: c.Kk, color: o.LU0.colors.STATUS_POSITIVE.css });
        case u.Ck.FAILURE:
            return (0, r.jsx)(o.d$L, { size: "md", className: c.Kk, color: o.LU0.colors.ICON_FEEDBACK_CRITICAL.css });
        case u.Ck.CLIP:
            return (0, r.jsx)(o.xgA, { size: "xs", className: c.gS, color: o.LU0.colors.TEXT_STRONG.css });
        case u.Ck.LINK:
            return (0, r.jsx)(o.qYV, { className: c.Kk, color: o.LU0.colors.TEXT_STRONG.css });
        case u.Ck.FORWARD:
            return (0, r.jsx)(l.A, { className: c.Kk, color: o.LU0.colors.STATUS_POSITIVE.css });
        case u.Ck.INVITE:
            return (0, r.jsx)(o.u6c, { className: c.Kk, color: o.LU0.colors.TEXT_BRAND.css });
        case u.Ck.BOOKMARK:
            return (0, r.jsx)(o.cFy, { className: c.Kk, color: o.LU0.colors.TEXT_STRONG.css });
        case u.Ck.CLOCK:
            return (0, r.jsx)(o.O4, { className: c.Kk, color: o.LU0.colors.TEXT_STRONG.css });
        case u.Ck.AI:
            return (0, r.jsx)(o.Dud, { className: c.Kk, color: o.LU0.colors.TEXT_STRONG.css });
        case u.Ck.FAVORITE:
            return (0, r.jsx)(o.Gg5, { className: c.Kk, color: o.LU0.colors.TEXT_STRONG.css });
        default:
            return null;
    }
}
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.jg,
        {
            position: r = u.jg.position,
            component: i = u.jg.component,
            duration: a = u.jg.duration,
            appContext: o = u.jg.appContext,
        } = n;
    return { message: e, id: (0, s.A)(), type: t, options: { position: r, component: i, duration: a, appContext: o } };
}
let f = i.memo(function (e) {
    let { message: t, type: n, id: i, options: { component: s = u.jg.component } = u.jg } = e;
    return null != s
        ? s
        : (0, r.jsxs)("div", {
              id: i,
              className: c.oR,
              "data-type": n,
              children: [d(n), (0, r.jsx)(a.E, { className: c.Qs, variant: "text-md/normal", children: t })],
          });
});
