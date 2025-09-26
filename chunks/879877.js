n.d(t, { Z: () => O }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    l = n(624238),
    c = n(28664),
    s = n(481060),
    u = n(259580),
    d = n(785717),
    f = n(86419),
    g = n(978369),
    p = n(286957),
    b = n(388032),
    m = n(44258);
function O(e) {
    var t;
    let { tags: n, isCurrentUser: a, widgetType: c, applicationId: s, className: u, disableInteraction: O = !1 } = e,
        x = null != (t = null == n ? void 0 : n.filter((e) => null != (0, p.zK)(e))) ? t : [],
        _ = x.length > 0,
        P = l.qH,
        w = a && !O && (0, f.M8)(c) && x.length < P,
        { trackUserProfileAction: I } = (0, d.KZ)(),
        E = (0, i.useRef)(new Map()),
        S = (0, i.useRef)(null),
        T = (0, i.useRef)(null),
        [D, N] = (0, i.useState)(0),
        [A, k] = (0, i.useState)(!1),
        C = v(S, T, x, E, N);
    if (
        ((0, i.useEffect)(
            () => (
                C(),
                window.addEventListener("resize", C),
                () => {
                    window.removeEventListener("resize", C);
                }
            ),
            [C, null == x ? void 0 : x.join("")],
        ),
        !_ && !w)
    )
        return null;
    let R = A ? x : x.slice(0, x.length - D);
    return (0, r.jsxs)("div", {
        className: o()(m.tagListContainer, u),
        children: [
            _ &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("ul", {
                            className: m.tagList,
                            "aria-label": b.intl.string(b.t.EfjTi4),
                            children: R.map((e) =>
                                (0, r.jsx)(
                                    y,
                                    {
                                        tag: e,
                                        isCurrentUser: a,
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
                        D > 0 &&
                            (A
                                ? (0, r.jsx)(h, {
                                      onClick: () => {
                                          k(!1), I({ action: "COLLAPSE_GAME_TAGS" });
                                      },
                                  })
                                : (0, r.jsx)(j, {
                                      numHidden: D,
                                      onClick: () => {
                                          k(!0), I({ action: "EXPAND_GAME_TAGS" });
                                      },
                                      ref: S,
                                      disableInteraction: O,
                                  })),
                    ],
                }),
            w &&
                (0, r.jsx)(g.Z, {
                    tags: n,
                    widgetType: c,
                    applicationId: s,
                    ref: T,
                }),
        ],
    });
}
let y = (e) => {
        let { tag: t, isCurrentUser: n, applicationId: i, widgetType: a, disableInteraction: o, ref: l } = e,
            { trackUserProfileEditAction: c } = (0, d.KZ)(),
            u = (0, p.zK)(t);
        if (null == u) return null;
        let { getText: g, icon: O } = u,
            y = () => {
                (0, f.RZ)(a, i, t),
                    c({
                        action: "TAG_REMOVED",
                        widgetEdited: a,
                        gameId: i,
                    });
            };
        return (0, r.jsxs)("li", {
            className: m.tag,
            ref: l,
            children: [
                (0, r.jsx)(O, { size: "xxs" }),
                (0, r.jsx)(s.Text, {
                    variant: "text-xxs/medium",
                    color: "text-secondary",
                    children: g(),
                }),
                n &&
                    !o &&
                    (0, r.jsx)(s.ua7, {
                        text: b.intl.string(b.t.Otv9fH),
                        children: (e) => {
                            var t, n;
                            return (0, r.jsx)(
                                s.P3F,
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
                                })({}, e)),
                                (n = n =
                                    {
                                        onClick: y,
                                        className: m.removeButton,
                                        "aria-label": b.intl.formatToPlainString(b.t.GCn1nZ, { tag: g() }),
                                        children: (0, r.jsx)(s.Dio, {
                                            size: "xxs",
                                            color: "currentColor",
                                        }),
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
                            );
                        },
                    }),
            ],
        });
    },
    j = (e) => {
        let { numHidden: t, onClick: n, disableInteraction: i, ref: a } = e;
        return i
            ? (0, r.jsx)("div", {
                  className: m.expandButton,
                  children: (0, r.jsx)(s.Text, {
                      variant: "text-xxs/medium",
                      color: "none",
                      children: "+".concat(t),
                  }),
              })
            : (0, r.jsx)(c.u, {
                  asContainer: !0,
                  text: b.intl.string(b.t.mriLXF),
                  children: (0, r.jsx)(s.P3F, {
                      onClick: n,
                      className: m.expandButton,
                      innerRef: a,
                      "aria-label": b.intl.string(b.t.mriLXF),
                      children: (0, r.jsx)(s.Text, {
                          variant: "text-xxs/medium",
                          color: "none",
                          children: "+".concat(t),
                      }),
                  }),
              });
    },
    h = (e) => {
        let { onClick: t } = e;
        return (0, r.jsx)(c.u, {
            asContainer: !0,
            text: b.intl.string(b.t.z9VPra),
            children: (0, r.jsx)(s.P3F, {
                onClick: t,
                className: m.collapseButton,
                "aria-label": b.intl.string(b.t.z9VPra),
                children: (0, r.jsx)(u.Z, {
                    direction: u.Z.Directions.LEFT,
                    width: 12,
                    height: 12,
                    className: m.caret,
                }),
            }),
        });
    },
    v = (e, t, n, r, a) =>
        (0, i.useCallback)(() => {
            var i, o, l, c;
            if (null == n) return void a(0);
            let s = null != (l = null == (i = e.current) ? void 0 : i.getBoundingClientRect().width) ? l : 0,
                u = null != (c = null == (o = t.current) ? void 0 : o.getBoundingClientRect().width) ? c : 0,
                d = u > 0 ? 8 : 4,
                f = 0,
                g = 0,
                p = r.current;
            for (let e = 0; e < n.length; e++) {
                let t = p.get(n[e]);
                if (null != t) {
                    if ((g += t.offsetWidth + 4) > 296) break;
                    f++;
                }
            }
            g = 0;
            for (let e = f; e < n.length; e++) {
                let t = p.get(n[e]);
                if (null != t) {
                    if ((g += t.offsetWidth + 4) > 296 - s - u - d) break;
                    f++;
                }
            }
            a(n.length - f);
        }, [e, t, null == n ? void 0 : n.join(""), r, a]);
