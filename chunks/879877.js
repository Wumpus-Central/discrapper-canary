r.d(t, { Z: () => m }), r(388685);
var n = r(951288),
    a = r(647438),
    i = r(120356),
    l = r.n(i),
    o = r(379405),
    c = r(481060),
    s = r(259580),
    u = r(785717),
    d = r(86419),
    f = r(978369),
    g = r(286957),
    b = r(388032),
    p = r(44258);
function m(e) {
    var t;
    let { tags: r, isCurrentUser: i, widgetType: c, applicationId: s, className: m, disableInteraction: x = !1 } = e,
        h = null != (t = null == r ? void 0 : r.filter((e) => null != (0, g.zK)(e))) ? t : [],
        _ = h.length > 0,
        P = Object.values(o._).length,
        w = i && !x && (0, d.M8)(c) && h.length < P,
        { trackUserProfileAction: I } = (0, u.KZ)(),
        S = (0, a.useRef)(new Map()),
        E = (0, a.useRef)(null),
        T = (0, a.useRef)(null),
        [N, k] = (0, a.useState)(0),
        [C, D] = (0, a.useState)(!1),
        A = v(E, T, h, S, k);
    if (
        ((0, a.useEffect)(
            () => (
                A(),
                window.addEventListener("resize", A),
                () => {
                    window.removeEventListener("resize", A);
                }
            ),
            [A, null == h ? void 0 : h.join("")],
        ),
        !_ && !w)
    )
        return null;
    let Z = C ? h : h.slice(0, h.length - N);
    return (0, n.jsxs)("div", {
        className: l()(p.tagListContainer, m),
        children: [
            _ &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)("ul", {
                            className: p.tagList,
                            "aria-label": b.intl.string(b.t.EfjTi4),
                            children: Z.map((e) =>
                                (0, n.jsx)(
                                    O,
                                    {
                                        tag: e,
                                        isCurrentUser: i,
                                        applicationId: s,
                                        widgetType: c,
                                        ref: (t) => {
                                            null != t && S.current.set(e, t);
                                        },
                                        disableInteraction: x,
                                    },
                                    e,
                                ),
                            ),
                        }),
                        N > 0 &&
                            (C
                                ? (0, n.jsx)(y, {
                                      onClick: () => {
                                          D(!1), I({ action: "COLLAPSE_GAME_TAGS" });
                                      },
                                  })
                                : (0, n.jsx)(j, {
                                      numHidden: N,
                                      onClick: () => {
                                          D(!0), I({ action: "EXPAND_GAME_TAGS" });
                                      },
                                      ref: E,
                                      disableInteraction: x,
                                  })),
                    ],
                }),
            w &&
                (0, n.jsx)(f.Z, {
                    tags: r,
                    widgetType: c,
                    applicationId: s,
                    ref: T,
                }),
        ],
    });
}
let O = (e) => {
        let { tag: t, isCurrentUser: r, applicationId: a, widgetType: i, disableInteraction: l, ref: o } = e,
            { trackUserProfileAction: s } = (0, u.KZ)(),
            f = (0, g.zK)(t);
        if (null == f) return null;
        let { getText: m, icon: O } = f,
            j = () => {
                (0, d.RZ)(i, a, t), s({ action: "EDIT_ACTION" });
            };
        return (0, n.jsxs)("li", {
            className: p.tag,
            ref: o,
            children: [
                (0, n.jsx)(O, { size: "xxs" }),
                (0, n.jsx)(c.Text, {
                    variant: "text-xxs/medium",
                    color: "text-secondary",
                    children: m(),
                }),
                r &&
                    !l &&
                    (0, n.jsx)(c.ua7, {
                        text: b.intl.string(b.t.Otv9fH),
                        children: (e) => {
                            var t, r;
                            return (0, n.jsx)(
                                c.P3F,
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
                                        onClick: j,
                                        className: p.removeButton,
                                        "aria-label": b.intl.formatToPlainString(b.t.GCn1nZ, { tag: m() }),
                                        children: (0, n.jsx)(c.Dio, {
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
    j = (e) => {
        let { numHidden: t, onClick: r, disableInteraction: a, ref: i } = e;
        return a
            ? (0, n.jsx)("div", {
                  className: p.expandButton,
                  children: (0, n.jsx)(c.Text, {
                      variant: "text-xxs/medium",
                      color: "none",
                      children: "+".concat(t),
                  }),
              })
            : (0, n.jsx)(c.DY3, {
                  className: p.buttonContainer,
                  text: b.intl.string(b.t.mriLXF),
                  children: (0, n.jsx)(c.P3F, {
                      onClick: r,
                      className: p.expandButton,
                      innerRef: i,
                      "aria-label": b.intl.string(b.t.mriLXF),
                      children: (0, n.jsx)(c.Text, {
                          variant: "text-xxs/medium",
                          color: "none",
                          children: "+".concat(t),
                      }),
                  }),
              });
    },
    y = (e) => {
        let { onClick: t } = e;
        return (0, n.jsx)(c.DY3, {
            className: p.buttonContainer,
            text: b.intl.string(b.t.z9VPra),
            children: (0, n.jsx)(c.P3F, {
                onClick: t,
                className: p.collapseButton,
                "aria-label": b.intl.string(b.t.z9VPra),
                children: (0, n.jsx)(s.Z, {
                    direction: s.Z.Directions.LEFT,
                    width: 12,
                    height: 12,
                    className: p.caret,
                }),
            }),
        });
    },
    v = (e, t, r, n, i) =>
        (0, a.useCallback)(() => {
            var a, l, o, c;
            if (null == r) return void i(0);
            let s = null != (o = null == (a = e.current) ? void 0 : a.getBoundingClientRect().width) ? o : 0,
                u = null != (c = null == (l = t.current) ? void 0 : l.getBoundingClientRect().width) ? c : 0,
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
