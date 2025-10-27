n.d(t, { Z: () => y });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    l = n(442837),
    o = n(28664),
    c = n(481060),
    s = n(313201),
    u = n(224724),
    d = n(747101),
    f = n(817053),
    g = n(890814),
    p = n(388032),
    m = n(932366),
    b = n(845859);
function h(e) {
    var t,
        n,
        { gameName: i, onClick: a } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                    (n = a[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["gameName", "onClick"]);
    let g = null != i ? i : p.intl.string(p.t.GIWFlF),
        h = p.intl.formatToPlainString(p.t["3mb1s5"], { game: g }),
        y = (0, l.e7)([u.Z], () => u.Z.suggestedFetchIsLoading);
    return (0, d.kO)(s.applicationId) || y
        ? (0, r.jsx)("div", { className: m.loadingCover })
        : (0, r.jsx)(o.u, {
              text: h,
              children: (0, r.jsxs)(c.P3F, {
                  className: b.addButton,
                  onClick: a,
                  children: [
                      (0, r.jsx)(
                          f.Z,
                          ((t = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      r = Object.keys(n);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          }),
                                      )),
                                      r.forEach(function (t) {
                                          var r;
                                          (r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[t] = r);
                                      });
                              }
                              return e;
                          })(
                              {
                                  className: b.cover,
                                  gameName: i,
                              },
                              s,
                          )),
                          (n = n = { disableInteraction: !0 }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(n)).forEach(function (e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                }),
                          t),
                      ),
                      (0, r.jsx)(c.svS, {
                          size: "md",
                          className: b.addIcon,
                          color: c.TVs.colors.WHITE,
                      }),
                  ],
              }),
          });
}
function y(e) {
    let { userId: t, games: n, onDismiss: i, onClick: l, className: o } = e,
        u = (0, s.Dt)();
    return (0, r.jsxs)("aside", {
        className: a()(b.container, o),
        "aria-labelledby": u,
        children: [
            (0, r.jsxs)("div", {
                className: b.header,
                children: [
                    (0, r.jsx)(c.P3F, {
                        className: b.dismissButton,
                        "aria-label": p.intl.string(p.t["pUR+3g"]),
                        onClick: i,
                        children: (0, r.jsx)(c.Dio, {
                            size: "sm",
                            color: "currentColor",
                        }),
                    }),
                    (0, r.jsx)(c.Heading, {
                        id: u,
                        variant: "text-xs/medium",
                        color: "text-secondary",
                        children: p.intl.string(p.t.zMUr6Z),
                    }),
                ],
            }),
            (0, r.jsx)(g.Z, {
                games: n,
                renderGame: (e) => {
                    let { applicationId: n, gameName: i, imageSrc: a } = e;
                    return (0, r.jsx)(h, {
                        onClick: () => l(n, i, a),
                        userId: t,
                        applicationId: n,
                        gameName: i,
                        imageSrc: a,
                    });
                },
            }),
        ],
    });
}
