r.d(t, { Z: () => O }), r(388685);
var n = r(951288),
    a = r(647438),
    i = r(120356),
    l = r.n(i),
    o = r(379405),
    c = r(481060),
    s = r(259580),
    u = r(785717),
    d = r(221292),
    f = r(86419),
    g = r(978369),
    b = r(286957),
    p = r(388032),
    m = r(44258);
function O(e) {
    var t;
    let { tags: r, isCurrentUser: i, widgetType: c, applicationId: s, className: d, disableInteraction: O = !1 } = e,
        h = null != (t = null == r ? void 0 : r.filter((e) => null != (0, b.zK)(e))) ? t : [],
        _ = h.length > 0,
        P = Object.values(o._).length,
        w = i && !O && (0, f.M8)(c) && h.length < P,
        { trackUserProfileAction: S } = (0, u.KZ)(),
        E = (0, a.useRef)(new Map()),
        I = (0, a.useRef)(null),
        T = (0, a.useRef)(null),
        [N, k] = (0, a.useState)(0),
        [C, A] = (0, a.useState)(!1),
        D = x(I, T, h, E, k);
    if (
        ((0, a.useEffect)(
            () => (
                D(),
                window.addEventListener("resize", D),
                () => {
                    window.removeEventListener("resize", D);
                }
            ),
            [D, null == h ? void 0 : h.join("")],
        ),
        !_ && !w)
    )
        return null;
    let G = C ? h : h.slice(0, h.length - N);
    return (0, n.jsxs)("div", {
        className: l()(m.tagListContainer, d),
        children: [
            _ &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)("ul", {
                            className: m.tagList,
                            "aria-label": p.intl.string(p.t.EfjTi4),
                            children: G.map((e) =>
                                (0, n.jsx)(
                                    j,
                                    {
                                        tag: e,
                                        isCurrentUser: i,
                                        applicationId: s,
                                        widgetType: c,
                                        ref: (t) => {
                                            null != t && E.current.set(e, t);
                                        },
                                        disableInteraction: O,
                                    },
                                    e,
                                ),
                            ),
                        }),
                        N > 0 &&
                            (C
                                ? (0, n.jsx)(v, {
                                      onClick: () => {
                                          A(!1), S({ action: "COLLAPSE_GAME_TAGS" });
                                      },
                                  })
                                : (0, n.jsx)(y, {
                                      numHidden: N,
                                      onClick: () => {
                                          A(!0), S({ action: "EXPAND_GAME_TAGS" });
                                      },
                                      ref: I,
                                      disableInteraction: O,
                                  })),
                    ],
                }),
            w &&
                (0, n.jsx)(g.Z, {
                    tags: r,
                    widgetType: c,
                    applicationId: s,
                    ref: T,
                }),
        ],
    });
}
let j = (e) => {
        let { tag: t, isCurrentUser: r, applicationId: a, widgetType: i, disableInteraction: l, ref: o } = e,
            s = (0, b.zK)(t);
        if (null == s) return null;
        let { getText: u, icon: g } = s,
            O = () => {
                (0, f.RZ)(i, a, t), (0, d.pQ)({ action: "REMOVE_GAME_TAGS" });
            };
        return (0, n.jsxs)("li", {
            className: m.tag,
            ref: o,
            children: [
                (0, n.jsx)(g, { size: "xxs" }),
                (0, n.jsx)(c.Text, {
                    variant: "text-xxs/medium",
                    color: "text-secondary",
                    children: u(),
                }),
                r &&
                    !l &&
                    (0, n.jsx)(c.ua7, {
                        text: p.intl.string(p.t.Otv9fH),
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
                                        onClick: O,
                                        className: m.removeButton,
                                        "aria-label": p.intl.formatToPlainString(p.t.GCn1nZ, { tag: u() }),
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
    y = (e) => {
        let { numHidden: t, onClick: r, disableInteraction: a, ref: i } = e;
        return a
            ? (0, n.jsx)("div", {
                  className: m.expandButton,
                  children: (0, n.jsx)(c.Text, {
                      variant: "text-xxs/medium",
                      color: "none",
                      children: "+".concat(t),
                  }),
              })
            : (0, n.jsx)(c.DY3, {
                  className: m.buttonContainer,
                  text: p.intl.string(p.t.mriLXF),
                  children: (0, n.jsx)(c.P3F, {
                      onClick: r,
                      className: m.expandButton,
                      innerRef: i,
                      "aria-label": p.intl.string(p.t.mriLXF),
                      children: (0, n.jsx)(c.Text, {
                          variant: "text-xxs/medium",
                          color: "none",
                          children: "+".concat(t),
                      }),
                  }),
              });
    },
    v = (e) => {
        let { onClick: t } = e;
        return (0, n.jsx)(c.DY3, {
            className: m.buttonContainer,
            text: p.intl.string(p.t.z9VPra),
            children: (0, n.jsx)(c.P3F, {
                onClick: t,
                className: m.collapseButton,
                "aria-label": p.intl.string(p.t.z9VPra),
                children: (0, n.jsx)(s.Z, {
                    direction: s.Z.Directions.LEFT,
                    width: 12,
                    height: 12,
                    className: m.caret,
                }),
            }),
        });
    },
    x = (e, t, r, n, i) =>
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
