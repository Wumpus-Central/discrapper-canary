"use strict";
n.d(t, { o: () => I, y: () => T });
var i = n(627968),
    r = n(64700),
    s = n(835245),
    a = n(834730),
    o = n(933832),
    l = n(661531),
    u = n(972213),
    c = n(176781),
    d = n(173936),
    _ = n(849516),
    h = n(606096),
    f = n(406810),
    p = n(152367),
    E = n(27232),
    m = n(427209),
    g = n(97483),
    A = n(861173);
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.jg,
        {
            position: i = g.jg.position,
            component: r = g.jg.component,
            duration: a = g.jg.duration,
            appContext: o = g.jg.appContext,
        } = n;
    return { message: e, id: (0, s.A)(), type: t, options: { position: i, component: r, duration: a, appContext: o } };
}
let T = r.memo(function (e) {
    let { message: t, type: n, id: r, options: { component: s = g.jg.component } = g.jg } = e;
    return null != s
        ? s
        : (0, i.jsxs)("div", {
              id: r,
              className: A.oR,
              "data-type": n,
              children: [
                  (function (e) {
                      switch (e) {
                          case g.Ck.SUCCESS:
                              return (0, i.jsx)(o.A, {
                                  size: "md",
                                  className: A.Kk,
                                  color: l.A.colors.STATUS_POSITIVE.css,
                              });
                          case g.Ck.FAILURE:
                              return (0, i.jsx)(u.d, {
                                  size: "md",
                                  className: A.Kk,
                                  color: l.A.colors.ICON_FEEDBACK_CRITICAL.css,
                              });
                          case g.Ck.CLIP:
                              return (0, i.jsx)(c.x, {
                                  size: "xs",
                                  className: A.gS,
                                  color: l.A.colors.TEXT_STRONG.css,
                              });
                          case g.Ck.LINK:
                              return (0, i.jsx)(d.q, { className: A.Kk, color: l.A.colors.TEXT_STRONG.css });
                          case g.Ck.FORWARD:
                              return (0, i.jsx)(m.A, { className: A.Kk, color: l.A.colors.STATUS_POSITIVE.css });
                          case g.Ck.INVITE:
                              return (0, i.jsx)(_.u, { className: A.Kk, color: l.A.colors.TEXT_BRAND.css });
                          case g.Ck.BOOKMARK:
                              return (0, i.jsx)(h.c, { className: A.Kk, color: l.A.colors.TEXT_STRONG.css });
                          case g.Ck.CLOCK:
                              return (0, i.jsx)(f.O, { className: A.Kk, color: l.A.colors.TEXT_STRONG.css });
                          case g.Ck.AI:
                              return (0, i.jsx)(p.D, { className: A.Kk, color: l.A.colors.TEXT_STRONG.css });
                          case g.Ck.FAVORITE:
                              return (0, i.jsx)(E.G, { className: A.Kk, color: l.A.colors.TEXT_STRONG.css });
                          default:
                              return null;
                      }
                  })(n),
                  (0, i.jsx)(a.E, { className: A.Qs, variant: "text-md/normal", children: t }),
              ],
          });
});
