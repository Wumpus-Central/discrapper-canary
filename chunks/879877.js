r.d(t, { Z: () => m }), r(388685);
var n = r(951288),
    i = r(647438),
    o = r(120356),
    a = r.n(o),
    l = r(624238),
    c = r(28664),
    s = r(481060),
    u = r(259580),
    d = r(785717),
    f = r(86419),
    g = r(978369),
    p = r(286957),
    b = r(388032),
    O = r(44258);
function m(e) {
    var t;
    let { tags: r, isCurrentUser: o, widgetType: c, applicationId: s, className: u, disableInteraction: m = !1 } = e,
        x = null != (t = null == r ? void 0 : r.filter((e) => null != (0, p.zK)(e))) ? t : [],
        _ = x.length > 0,
        w = l.qH,
        P = o && !m && (0, f.M8)(c) && x.length < w,
        { trackUserProfileAction: E } = (0, d.KZ)(),
        I = (0, i.useRef)(new Map()),
        S = (0, i.useRef)(null),
        T = (0, i.useRef)(null),
        [D, k] = (0, i.useState)(0),
        [N, C] = (0, i.useState)(!1),
        A = h(S, T, x, I, k);
    if (
        ((0, i.useEffect)(
            () => (
                A(),
                window.addEventListener("resize", A),
                () => {
                    window.removeEventListener("resize", A);
                }
            ),
            [A, null == x ? void 0 : x.join("")],
        ),
        !_ && !P)
    )
        return null;
    let Z = N ? x : x.slice(0, x.length - D);
    return (0, n.jsxs)("div", {
        className: a()(O.tagListContainer, u),
        children: [
            _ &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)("ul", {
                            className: O.tagList,
                            "aria-label": b.intl.string(b.t.EfjTi4),
                            children: Z.map((e) =>
                                (0, n.jsx)(
                                    y,
                                    {
                                        tag: e,
                                        isCurrentUser: o,
                                        applicationId: s,
                                        widgetType: c,
                                        ref: (t) => {
                                            null != t && I.current.set(e, t);
                                        },
                                        disableInteraction: m,
                                    },
                                    e,
                                ),
                            ),
                        }),
                        D > 0 &&
                            (N
                                ? (0, n.jsx)(v, {
                                      onClick: () => {
                                          C(!1), E({ action: "COLLAPSE_GAME_TAGS" });
                                      },
                                  })
                                : (0, n.jsx)(j, {
                                      numHidden: D,
                                      onClick: () => {
                                          C(!0), E({ action: "EXPAND_GAME_TAGS" });
                                      },
                                      ref: S,
                                      disableInteraction: m,
                                  })),
                    ],
                }),
            P &&
                (0, n.jsx)(g.Z, {
                    tags: r,
                    widgetType: c,
                    applicationId: s,
                    ref: T,
                }),
        ],
    });
}
let y = (e) => {
        let { tag: t, isCurrentUser: r, applicationId: i, widgetType: o, disableInteraction: a, ref: l } = e,
            { trackUserProfileEditAction: c } = (0, d.KZ)(),
            u = (0, p.zK)(t);
        if (null == u) return null;
        let { getText: g, icon: m } = u,
            y = () => {
                (0, f.RZ)(o, i, t),
                    c({
                        action: "TAG_REMOVED",
                        widgetEdited: o,
                        gameId: i,
                    });
            };
        return (0, n.jsxs)("li", {
            className: O.tag,
            ref: l,
            children: [
                (0, n.jsx)(m, { size: "xxs" }),
                (0, n.jsx)(s.Text, {
                    variant: "text-xxs/medium",
                    color: "text-secondary",
                    children: g(),
                }),
                r &&
                    !a &&
                    (0, n.jsx)(s.ua7, {
                        text: b.intl.string(b.t.Otv9fH),
                        children: (e) => {
                            var t, r;
                            return (0, n.jsx)(
                                s.P3F,
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
                                        onClick: y,
                                        className: O.removeButton,
                                        "aria-label": b.intl.formatToPlainString(b.t.GCn1nZ, { tag: g() }),
                                        children: (0, n.jsx)(s.Dio, {
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
        let { numHidden: t, onClick: r, disableInteraction: i, ref: o } = e;
        return i
            ? (0, n.jsx)("div", {
                  className: O.expandButton,
                  children: (0, n.jsx)(s.Text, {
                      variant: "text-xxs/medium",
                      color: "none",
                      children: "+".concat(t),
                  }),
              })
            : (0, n.jsx)(c.u, {
                  asContainer: !0,
                  text: b.intl.string(b.t.mriLXF),
                  children: (0, n.jsx)(s.P3F, {
                      onClick: r,
                      className: O.expandButton,
                      innerRef: o,
                      "aria-label": b.intl.string(b.t.mriLXF),
                      children: (0, n.jsx)(s.Text, {
                          variant: "text-xxs/medium",
                          color: "none",
                          children: "+".concat(t),
                      }),
                  }),
              });
    },
    v = (e) => {
        let { onClick: t } = e;
        return (0, n.jsx)(c.u, {
            asContainer: !0,
            text: b.intl.string(b.t.z9VPra),
            children: (0, n.jsx)(s.P3F, {
                onClick: t,
                className: O.collapseButton,
                "aria-label": b.intl.string(b.t.z9VPra),
                children: (0, n.jsx)(u.Z, {
                    direction: u.Z.Directions.LEFT,
                    width: 12,
                    height: 12,
                    className: O.caret,
                }),
            }),
        });
    },
    h = (e, t, r, n, o) =>
        (0, i.useCallback)(() => {
            var i, a, l, c;
            if (null == r) return void o(0);
            let s = null != (l = null == (i = e.current) ? void 0 : i.getBoundingClientRect().width) ? l : 0,
                u = null != (c = null == (a = t.current) ? void 0 : a.getBoundingClientRect().width) ? c : 0,
                d = u > 0 ? 8 : 4,
                f = 0,
                g = 0,
                p = n.current;
            for (let e = 0; e < r.length; e++) {
                let t = p.get(r[e]);
                if (null != t) {
                    if ((g += t.offsetWidth + 4) > 296) break;
                    f++;
                }
            }
            g = 0;
            for (let e = f; e < r.length; e++) {
                let t = p.get(r[e]);
                if (null != t) {
                    if ((g += t.offsetWidth + 4) > 296 - s - u - d) break;
                    f++;
                }
            }
            o(r.length - f);
        }, [e, t, null == r ? void 0 : r.join(""), n, o]);
