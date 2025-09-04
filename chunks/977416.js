r.d(t, { Z: () => j });
var n = r(951288);
r(647438);
var i = r(120356),
    l = r.n(i),
    a = r(442837),
    o = r(481060),
    c = r(313201),
    s = r(224724),
    u = r(747101),
    d = r(817053),
    f = r(890814),
    g = r(388032),
    b = r(932366),
    p = r(845859);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function y(e) {
    var { gameName: t, onClick: r } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++)
                    (r = l[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["gameName", "onClick"]);
    let l = null != t ? t : g.intl.string(g.t.GIWFlJ),
        c = g.intl.formatToPlainString(g.t["3mb1s7"], { game: l }),
        f = (0, a.e7)([s.Z], () => s.Z.suggestedFetchIsLoading);
    return (0, u.kO)(i.applicationId) || f
        ? (0, n.jsx)("div", { className: b.loadingCover })
        : (0, n.jsx)(o.ua7, {
              text: c,
              children: (e) =>
                  (0, n.jsxs)(
                      o.P3F,
                      O(m({ className: p.addButton }, e), {
                          onClick: r,
                          children: [
                              (0, n.jsx)(
                                  d.Z,
                                  O(
                                      m(
                                          {
                                              className: p.cover,
                                              gameName: t,
                                          },
                                          i,
                                      ),
                                      { disableInteraction: !0 },
                                  ),
                              ),
                              (0, n.jsx)(o.svS, {
                                  size: "md",
                                  className: p.addIcon,
                                  color: o.TVs.colors.WHITE,
                              }),
                          ],
                      }),
                  ),
          });
}
function j(e) {
    let { userId: t, games: r, onDismiss: i, onClick: a, className: s } = e,
        u = (0, c.Dt)();
    return (0, n.jsxs)("aside", {
        className: l()(p.container, s),
        "aria-labelledby": u,
        children: [
            (0, n.jsxs)("div", {
                className: p.header,
                children: [
                    (0, n.jsx)(o.P3F, {
                        className: p.dismissButton,
                        "aria-label": g.intl.string(g.t["pUR+3t"]),
                        onClick: i,
                        children: (0, n.jsx)(o.Dio, {
                            size: "sm",
                            color: "currentColor",
                        }),
                    }),
                    (0, n.jsx)(o.X6q, {
                        id: u,
                        variant: "text-xs/medium",
                        color: "text-secondary",
                        children: g.intl.string(g.t.zMUr6e),
                    }),
                ],
            }),
            (0, n.jsx)(f.Z, {
                games: r,
                renderGame: (e) => {
                    let { applicationId: r, gameName: i, imageSrc: l } = e;
                    return (0, n.jsx)(y, {
                        onClick: () => a(r, i, l),
                        userId: t,
                        applicationId: r,
                        gameName: i,
                        imageSrc: l,
                    });
                },
            }),
        ],
    });
}
