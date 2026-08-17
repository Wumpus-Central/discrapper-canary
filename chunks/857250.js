"use strict";
n.d(t, { o: () => m, y: () => g });
var i = n(477900),
    r = n(582128),
    a = n(132500),
    s = n(933832),
    l = n(972213),
    o = n(176781),
    d = n(173936),
    c = n(849516),
    u = n(606096),
    _ = n(406810),
    E = n(152367),
    A = n(27232),
    h = n(661531),
    I = n(834730),
    f = n(427209),
    p = n(97483),
    T = n(871645);
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.jg,
        {
            position: i = p.jg.position,
            component: r = p.jg.component,
            duration: s = p.jg.duration,
            appContext: l = p.jg.appContext,
        } = n;
    return { message: e, id: (0, a.A)(), type: t, options: { position: i, component: r, duration: s, appContext: l } };
}
let g = r.memo(function (e) {
    let { message: t, type: n, id: r, options: { component: a = p.jg.component } = p.jg } = e;
    return null != a
        ? a
        : (0, i.jsxs)("div", {
              id: r,
              className: T.oR,
              "data-type": n,
              role: "status",
              children: [
                  (function (e) {
                      switch (e) {
                          case p.Ck.SUCCESS:
                              return (0, i.jsx)(s.CheckmarkLargeIcon, {
                                  size: "md",
                                  className: T.Kk,
                                  color: h.A.colors.STATUS_POSITIVE.css,
                              });
                          case p.Ck.FAILURE:
                              return (0, i.jsx)(l.XLargeIcon, {
                                  size: "md",
                                  className: T.Kk,
                                  color: h.A.colors.ICON_FEEDBACK_CRITICAL.css,
                              });
                          case p.Ck.CLIP:
                              return (0, i.jsx)(o.x, {
                                  size: "xs",
                                  className: T.gS,
                                  color: h.A.colors.TEXT_STRONG.css,
                              });
                          case p.Ck.LINK:
                              return (0, i.jsx)(d.LinkIcon, { className: T.Kk, color: h.A.colors.TEXT_STRONG.css });
                          case p.Ck.FORWARD:
                              return (0, i.jsx)(f.A, { className: T.Kk, color: h.A.colors.STATUS_POSITIVE.css });
                          case p.Ck.INVITE:
                              return (0, i.jsx)(c.u, { className: T.Kk, color: h.A.colors.TEXT_BRAND.css });
                          case p.Ck.BOOKMARK:
                              return (0, i.jsx)(u.BookmarkIcon, { className: T.Kk, color: h.A.colors.TEXT_STRONG.css });
                          case p.Ck.CLOCK:
                              return (0, i.jsx)(_.ClockIcon, { className: T.Kk, color: h.A.colors.TEXT_STRONG.css });
                          case p.Ck.AI:
                              return (0, i.jsx)(E.D, { className: T.Kk, color: h.A.colors.TEXT_STRONG.css });
                          case p.Ck.FAVORITE:
                              return (0, i.jsx)(A.StarIcon, { className: T.Kk, color: h.A.colors.TEXT_STRONG.css });
                          default:
                              return null;
                      }
                  })(n),
                  (0, i.jsx)(I.E, { className: T.Qs, variant: "text-md/normal", children: t }),
              ],
          });
});
