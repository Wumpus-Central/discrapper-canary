r.d(t, { Z: () => m });
var n = r(951288);
r(647438);
var a = r(120356),
    i = r.n(a),
    l = r(481060),
    o = r(313201),
    c = r(817053),
    s = r(890814),
    u = r(388032),
    d = r(932366),
    f = r(845859);
function g(e) {
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
function b(e, t) {
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
function p(e) {
    var { gameName: t, onClick: r, loading: a = !0 } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
            }
            return a;
        })(e, ["gameName", "onClick", "loading"]);
    let o = null != t ? t : u.intl.string(u.t.GIWFlJ),
        s = u.intl.formatToPlainString(u.t["3mb1s7"], { game: o });
    return a
        ? (0, n.jsx)("div", { className: d.loadingCover })
        : (0, n.jsx)(l.ua7, {
              text: s,
              children: (e) =>
                  (0, n.jsxs)(
                      l.P3F,
                      b(g({ className: f.addButton }, e), {
                          onClick: r,
                          children: [
                              (0, n.jsx)(
                                  c.Z,
                                  b(
                                      g(
                                          {
                                              className: f.cover,
                                              gameName: t,
                                          },
                                          i,
                                      ),
                                      { disableInteraction: !0 },
                                  ),
                              ),
                              (0, n.jsx)(l.svS, {
                                  size: "md",
                                  className: f.addIcon,
                                  color: l.TVs.colors.WHITE,
                              }),
                          ],
                      }),
                  ),
          });
}
function m(e) {
    let {
            userId: t,
            games: r,
            isGameFetching: a,
            isSuggestedGamesLoading: c,
            onDismiss: d,
            onClick: g,
            className: b,
        } = e,
        m = (0, o.Dt)();
    return (0, n.jsxs)("aside", {
        className: i()(f.container, b),
        "aria-labelledby": m,
        children: [
            (0, n.jsxs)("div", {
                className: f.header,
                children: [
                    (0, n.jsx)(l.P3F, {
                        className: f.dismissButton,
                        "aria-label": u.intl.string(u.t["pUR+3t"]),
                        onClick: d,
                        children: (0, n.jsx)(l.Dio, {
                            size: "sm",
                            color: "currentColor",
                        }),
                    }),
                    (0, n.jsx)(l.X6q, {
                        id: m,
                        variant: "text-xs/medium",
                        color: "text-secondary",
                        children: u.intl.string(u.t.zMUr6e),
                    }),
                ],
            }),
            (0, n.jsx)(s.Z, {
                games: r,
                renderGame: (e) => {
                    let { applicationId: r, gameName: i, imageSrc: l } = e;
                    return (0, n.jsx)(p, {
                        onClick: () => g(r, i, l),
                        userId: t,
                        loading: c || a(r),
                        applicationId: r,
                        gameName: i,
                        imageSrc: l,
                    });
                },
            }),
        ],
    });
}
