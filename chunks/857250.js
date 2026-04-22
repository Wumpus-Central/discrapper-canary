"use strict";
n.d(t, { o: () => I, y: () => T });
var r = n(627968),
    i = n(64700),
    s = n(835245),
    a = n(834730),
    o = n(933832),
    l = n(827734),
    u = n(972213),
    d = n(176781),
    c = n(173936),
    _ = n(849516),
    f = n(606096),
    E = n(406810),
    h = n(152367),
    p = n(27232),
    m = n(427209),
    g = n(97483),
    A = n(861173);
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.jg,
        {
            position: r = g.jg.position,
            component: i = g.jg.component,
            duration: a = g.jg.duration,
            appContext: o = g.jg.appContext,
        } = n;
    return { message: e, id: (0, s.A)(), type: t, options: { position: r, component: i, duration: a, appContext: o } };
}
let T = i.memo(function (e) {
    let { message: t, type: n, id: i, options: { component: s = g.jg.component } = g.jg } = e;
    return null != s
        ? s
        : (0, r.jsxs)("div", {
              id: i,
              className: A.oR,
              "data-type": n,
              children: [
                  (function (e) {
                      switch (e) {
                          case g.Ck.SUCCESS:
                              return (0, r.jsx)(o.A, {
                                  size: "md",
                                  className: A.Kk,
                                  color: l.A.colors.STATUS_POSITIVE.css,
                              });
                          case g.Ck.FAILURE:
                              return (0, r.jsx)(u.d, {
                                  size: "md",
                                  className: A.Kk,
                                  color: l.A.colors.ICON_FEEDBACK_CRITICAL.css,
                              });
                          case g.Ck.CLIP:
                              return (0, r.jsx)(d.x, {
                                  size: "xs",
                                  className: A.gS,
                                  color: l.A.colors.TEXT_STRONG.css,
                              });
                          case g.Ck.LINK:
                              return (0, r.jsx)(c.q, { className: A.Kk, color: l.A.colors.TEXT_STRONG.css });
                          case g.Ck.FORWARD:
                              return (0, r.jsx)(m.A, { className: A.Kk, color: l.A.colors.STATUS_POSITIVE.css });
                          case g.Ck.INVITE:
                              return (0, r.jsx)(_.u, { className: A.Kk, color: l.A.colors.TEXT_BRAND.css });
                          case g.Ck.BOOKMARK:
                              return (0, r.jsx)(f.c, { className: A.Kk, color: l.A.colors.TEXT_STRONG.css });
                          case g.Ck.CLOCK:
                              return (0, r.jsx)(E.O, { className: A.Kk, color: l.A.colors.TEXT_STRONG.css });
                          case g.Ck.AI:
                              return (0, r.jsx)(h.D, { className: A.Kk, color: l.A.colors.TEXT_STRONG.css });
                          case g.Ck.FAVORITE:
                              return (0, r.jsx)(p.G, { className: A.Kk, color: l.A.colors.TEXT_STRONG.css });
                          default:
                              return null;
                      }
                  })(n),
                  (0, r.jsx)(a.E, { className: A.Qs, variant: "text-md/normal", children: t }),
              ],
          });
});
