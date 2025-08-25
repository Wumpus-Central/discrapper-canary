r.d(t, { Z: () => p }), r(388685);
var n = r(951288),
    l = r(647438),
    i = r(379405),
    a = r(481060),
    o = r(259580),
    c = r(785717),
    s = r(221292),
    u = r(86419),
    d = r(978369),
    f = r(286957),
    g = r(388032),
    b = r(44258);
function p(e) {
    var t;
    let { tags: r, isCurrentUser: a, widgetType: o, applicationId: s, disableInteraction: p = !1 } = e,
        v = null != (t = null == r ? void 0 : r.filter((e) => null != (0, f.zK)(e))) ? t : [],
        x = v.length > 0,
        h = Object.values(i._).length,
        _ = a && !p && (0, u.M8)(o) && v.length < h,
        { trackUserProfileAction: P } = (0, c.KZ)(),
        w = (0, l.useRef)(new Map()),
        S = (0, l.useRef)(null),
        E = (0, l.useRef)(null),
        [I, T] = (0, l.useState)(0),
        [N, k] = (0, l.useState)(!1),
        C = y(S, E, v, w, T);
    if (
        ((0, l.useEffect)(
            () => (
                C(),
                window.addEventListener("resize", C),
                () => {
                    window.removeEventListener("resize", C);
                }
            ),
            [C, null == v ? void 0 : v.join("")],
        ),
        !x && !_)
    )
        return null;
    let A = N ? v : v.slice(0, v.length - I);
    return (0, n.jsxs)("div", {
        className: b.tagListContainer,
        children: [
            x &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)("ul", {
                            className: b.tagList,
                            "aria-label": g.intl.string(g.t.EfjTi4),
                            children: A.map((e) =>
                                (0, n.jsx)(
                                    m,
                                    {
                                        tag: e,
                                        isCurrentUser: a,
                                        applicationId: s,
                                        widgetType: o,
                                        ref: (t) => {
                                            null != t && w.current.set(e, t);
                                        },
                                        disableInteraction: p,
                                    },
                                    e,
                                ),
                            ),
                        }),
                        I > 0 &&
                            (N
                                ? (0, n.jsx)(j, {
                                      onClick: () => {
                                          k(!1), P({ action: "COLLAPSE_GAME_TAGS" });
                                      },
                                  })
                                : (0, n.jsx)(O, {
                                      numHidden: I,
                                      onClick: () => {
                                          k(!0), P({ action: "EXPAND_GAME_TAGS" });
                                      },
                                      ref: S,
                                      disableInteraction: p,
                                  })),
                    ],
                }),
            _ &&
                (0, n.jsx)(d.Z, {
                    tags: r,
                    widgetType: o,
                    applicationId: s,
                    ref: E,
                }),
        ],
    });
}
let m = (e) => {
        let { tag: t, isCurrentUser: r, applicationId: l, widgetType: i, disableInteraction: o, ref: c } = e,
            d = (0, f.zK)(t);
        if (null == d) return null;
        let { getText: p, icon: m } = d,
            O = () => {
                (0, u.RZ)(i, l, t), (0, s.pQ)({ action: "REMOVE_GAME_TAGS" });
            };
        return (0, n.jsxs)("li", {
            className: b.tag,
            ref: c,
            children: [
                (0, n.jsx)(m, { size: "xxs" }),
                (0, n.jsx)(a.Text, {
                    variant: "text-xxs/medium",
                    color: "text-secondary",
                    children: p(),
                }),
                r &&
                    !o &&
                    (0, n.jsx)(a.ua7, {
                        text: g.intl.string(g.t.Otv9fH),
                        children: (e) => {
                            var t, r;
                            return (0, n.jsx)(
                                a.P3F,
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
                                })({}, e)),
                                (r = r =
                                    {
                                        onClick: O,
                                        className: b.removeButton,
                                        "aria-label": g.intl.formatToPlainString(g.t.GCn1nZ, { tag: p() }),
                                        children: (0, n.jsx)(a.Dio, {
                                            size: "xxs",
                                            color: "currentColor",
                                        }),
                                    }),
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
                            );
                        },
                    }),
            ],
        });
    },
    O = (e) => {
        let { numHidden: t, onClick: r, disableInteraction: l, ref: i } = e;
        return l
            ? (0, n.jsx)("div", {
                  className: b.expandButton,
                  children: (0, n.jsx)(a.Text, {
                      variant: "text-xxs/medium",
                      color: "none",
                      children: "+".concat(t),
                  }),
              })
            : (0, n.jsx)(a.DY3, {
                  className: b.buttonContainer,
                  text: g.intl.string(g.t.mriLXF),
                  children: (0, n.jsx)(a.P3F, {
                      onClick: r,
                      className: b.expandButton,
                      innerRef: i,
                      "aria-label": g.intl.string(g.t.mriLXF),
                      children: (0, n.jsx)(a.Text, {
                          variant: "text-xxs/medium",
                          color: "none",
                          children: "+".concat(t),
                      }),
                  }),
              });
    },
    j = (e) => {
        let { onClick: t } = e;
        return (0, n.jsx)(a.DY3, {
            className: b.buttonContainer,
            text: g.intl.string(g.t.z9VPra),
            children: (0, n.jsx)(a.P3F, {
                onClick: t,
                className: b.collapseButton,
                "aria-label": g.intl.string(g.t.z9VPra),
                children: (0, n.jsx)(o.Z, {
                    direction: o.Z.Directions.LEFT,
                    width: 12,
                    height: 12,
                    className: b.caret,
                }),
            }),
        });
    },
    y = (e, t, r, n, i) =>
        (0, l.useCallback)(() => {
            var l, a, o, c;
            if (null == r) return void i(0);
            let s = null != (o = null == (l = e.current) ? void 0 : l.getBoundingClientRect().width) ? o : 0,
                u = null != (c = null == (a = t.current) ? void 0 : a.getBoundingClientRect().width) ? c : 0,
                d = u > 0 ? 8 : 4,
                f = 0,
                g = 0,
                b = n.current;
            for (let e = 0; e < r.length; e++) {
                let t = b.get(r[e]);
                if (null != t) {
                    if ((g += t.offsetWidth + 4) > 296) break;
                    f++;
                }
            }
            g = 0;
            for (let e = f; e < r.length; e++) {
                let t = b.get(r[e]);
                if (null != t) {
                    if ((g += t.offsetWidth + 4) > 296 - s - u - d) break;
                    f++;
                }
            }
            i(r.length - f);
        }, [e, t, null == r ? void 0 : r.join(""), n, i]);
