n.d(t, { Z: () => p });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    o = n(313201),
    a = n(817053),
    c = n(890814),
    s = n(388032),
    d = n(932366),
    u = n(845859);
function f(e) {
    var t,
        n,
        { onClick: o, loading: c = !0 } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["onClick", "loading"]);
    let p = i.useRef(null);
    return c
        ? (0, r.jsx)("div", { className: d.loadingCover })
        : (0, r.jsxs)("div", {
              ref: p,
              className: u.addButtonWrapper,
              onClick: o,
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
                      })({}, f)),
                      (n = n =
                          {
                              className: u.cover,
                              disableInteraction: !0,
                          }),
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
                          onClick: (e) => {
                              e.stopPropagation(), o();
                          },
                          focusProps: { ringTarget: p },
                          icon: l.svS,
                          variant: "overlay-primary",
                          size: "sm",
                          "aria-label": s.intl.string(s.t.E3l3Z2),
                      }),
                  }),
              ],
          });
}
function p(e) {
    let { userId: t, games: n, isGameFetching: i, isSuggestedGamesLoading: a, onDismiss: d, onClick: p } = e,
        m = (0, o.Dt)();
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
                        onClick: d,
                        children: (0, r.jsx)(l.Dio, {
                            size: "sm",
                            color: "currentColor",
                        }),
                    }),
                    (0, r.jsx)(l.X6q, {
                        id: m,
                        variant: "text-xs/medium",
                        color: "text-secondary",
                        children: s.intl.string(s.t.zMUr6e),
                    }),
                ],
            }),
            (0, r.jsx)(c.Z, {
                games: n,
                renderGame: (e) => {
                    let { applicationId: n, gameName: l, imageSrc: o } = e;
                    return (0, r.jsx)(f, {
                        onClick: () => p(n, l, o),
                        userId: t,
                        loading: a || i(n),
                        applicationId: n,
                        gameName: l,
                        imageSrc: o,
                    });
                },
            }),
        ],
    });
}
