n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var l = n(481060),
    i = n(313201),
    o = n(86419),
    a = n(817053),
    c = n(890814),
    s = n(388032),
    d = n(932366),
    u = n(845859);
function f(e) {
    var t,
        n,
        { onClick: i, loading: o } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["onClick", "loading"]);
    return o
        ? (0, r.jsx)("div", { className: d.loadingCover })
        : (0, r.jsxs)("div", {
              className: u.addButtonWrapper,
              children: [
                  (0, r.jsx)(
                      a.Z,
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
                      })({}, c)),
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
                  (0, r.jsx)("div", {
                      className: u.addButton,
                      children: (0, r.jsx)(l.hU, {
                          onClick: i,
                          icon: l.svS,
                          variant: "overlay-secondary",
                          "aria-label": s.intl.string(s.t.E3l3Z2),
                      }),
                  }),
              ],
          });
}
function p(e) {
    let { userId: t, widgetType: n, games: a, isGameFetching: d, onDismiss: p } = e,
        m = (0, i.Dt)();
    return (0, r.jsxs)("aside", {
        className: u.container,
        "aria-labelledby": m,
        children: [
            (0, r.jsxs)("div", {
                className: u.header,
                children: [
                    (0, r.jsx)(l.P3F, {
                        className: u.dismissButton,
                        "aria-label": s.intl.string(s.t["pUR+3t"]),
                        onClick: p,
                        children: (0, r.jsx)(l.Dio, {
                            size: "sm",
                            color: "currentColor",
                        }),
                    }),
                    (0, r.jsx)(l.X6q, {
                        id: m,
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: s.intl.string(s.t.zMUr6e),
                    }),
                ],
            }),
            (0, r.jsx)(c.Z, {
                games: a,
                renderGame: (e) => {
                    let { applicationId: l, gameName: i, imageSrc: a } = e;
                    return (0, r.jsx)(f, {
                        onClick: () =>
                            (0, o.ES)(n, {
                                applicationId: l,
                                gameName: i,
                                imageSrc: a,
                            }),
                        userId: t,
                        loading: d(l),
                        applicationId: l,
                        gameName: i,
                        imageSrc: a,
                    });
                },
            }),
        ],
    });
}
