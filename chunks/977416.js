n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var l = n(481060),
    i = n(313201),
    o = n(817053),
    a = n(890814),
    c = n(388032),
    s = n(932366),
    d = n(845859);
function u(e) {
    var t,
        n,
        { onClick: i, loading: a } = e,
        u = (function (e, t) {
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
    return a
        ? (0, r.jsx)("div", { className: s.loadingCover })
        : (0, r.jsxs)("div", {
              className: d.addButtonWrapper,
              children: [
                  (0, r.jsx)(
                      o.Z,
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
                      })({}, u)),
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
                      className: d.addButton,
                      children: (0, r.jsx)(l.hU, {
                          onClick: i,
                          icon: l.svS,
                          variant: "overlay-secondary",
                          "aria-label": c.intl.string(c.t.E3l3Z2),
                      }),
                  }),
              ],
          });
}
function f(e) {
    let { userId: t, games: n, isGameFetching: o, isSuggestedGamesLoading: s, onDismiss: f, onClick: p } = e,
        m = (0, i.Dt)();
    return (0, r.jsxs)("aside", {
        className: d.container,
        "aria-labelledby": m,
        children: [
            (0, r.jsxs)("div", {
                className: d.header,
                children: [
                    (0, r.jsx)(l.P3F, {
                        className: d.dismissButton,
                        "aria-label": c.intl.string(c.t["pUR+3t"]),
                        onClick: f,
                        children: (0, r.jsx)(l.Dio, {
                            size: "sm",
                            color: "currentColor",
                        }),
                    }),
                    (0, r.jsx)(l.X6q, {
                        id: m,
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: c.intl.string(c.t.zMUr6e),
                    }),
                ],
            }),
            (0, r.jsx)(a.Z, {
                games: n,
                renderGame: (e) => {
                    let { applicationId: n, gameName: l, imageSrc: i } = e;
                    return (0, r.jsx)(u, {
                        onClick: () => p(n, l, i),
                        userId: t,
                        loading: s || o(n),
                        applicationId: n,
                        gameName: l,
                        imageSrc: i,
                    });
                },
            }),
        ],
    });
}
