r.d(t, { Z: () => y });
var n = r(951288);
r(647438);
var i = r(120356),
    a = r.n(i),
    o = r(442837),
    l = r(28664),
    c = r(481060),
    s = r(313201),
    u = r(224724),
    d = r(747101),
    f = r(817053),
    g = r(890814),
    p = r(388032),
    b = r(932366),
    m = r(845859);
function O(e) {
    var t,
        r,
        { gameName: i, onClick: a } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                    (r = a[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["gameName", "onClick"]);
    let g = null != i ? i : p.intl.string(p.t.GIWFlJ),
        O = p.intl.formatToPlainString(p.t["3mb1s7"], { game: g }),
        y = (0, o.e7)([u.Z], () => u.Z.suggestedFetchIsLoading);
    return (0, d.kO)(s.applicationId) || y
        ? (0, n.jsx)("div", { className: b.loadingCover })
        : (0, n.jsx)(l.u, {
              text: O,
              children: (0, n.jsxs)(c.P3F, {
                  className: m.addButton,
                  onClick: a,
                  children: [
                      (0, n.jsx)(
                          f.Z,
                          ((t = (function (e) {
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
                          })(
                              {
                                  className: m.cover,
                                  gameName: i,
                              },
                              s,
                          )),
                          (r = r = { disableInteraction: !0 }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                              : (function (e, t) {
                                    var r = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var n = Object.getOwnPropertySymbols(e);
                                        r.push.apply(r, n);
                                    }
                                    return r;
                                })(Object(r)).forEach(function (e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                                }),
                          t),
                      ),
                      (0, n.jsx)(c.svS, {
                          size: "md",
                          className: m.addIcon,
                          color: c.TVs.colors.WHITE,
                      }),
                  ],
              }),
          });
}
function y(e) {
    let { userId: t, games: r, onDismiss: i, onClick: o, className: l } = e,
        u = (0, s.Dt)();
    return (0, n.jsxs)("aside", {
        className: a()(m.container, l),
        "aria-labelledby": u,
        children: [
            (0, n.jsxs)("div", {
                className: m.header,
                children: [
                    (0, n.jsx)(c.P3F, {
                        className: m.dismissButton,
                        "aria-label": p.intl.string(p.t["pUR+3t"]),
                        onClick: i,
                        children: (0, n.jsx)(c.Dio, {
                            size: "sm",
                            color: "currentColor",
                        }),
                    }),
                    (0, n.jsx)(c.X6q, {
                        id: u,
                        variant: "text-xs/medium",
                        color: "text-secondary",
                        children: p.intl.string(p.t.zMUr6e),
                    }),
                ],
            }),
            (0, n.jsx)(g.Z, {
                games: r,
                renderGame: (e) => {
                    let { applicationId: r, gameName: i, imageSrc: a } = e;
                    return (0, n.jsx)(O, {
                        onClick: () => o(r, i, a),
                        userId: t,
                        applicationId: r,
                        gameName: i,
                        imageSrc: a,
                    });
                },
            }),
        ],
    });
}
