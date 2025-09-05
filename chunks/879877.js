r.d(t, { Z: () => y }), r(388685);
var n = r(951288),
    i = r(647438),
    l = r(120356),
    o = r.n(l),
    a = r(379405),
    c = r(28664),
    s = r(481060),
    u = r(259580),
    d = r(785717),
    f = r(86419),
    b = r(978369),
    p = r(286957),
    g = r(388032),
    O = r(200344);
function y(e) {
    var t;
    let { tags: r, isCurrentUser: l, widgetType: c, applicationId: s, className: u, disableInteraction: y = !1 } = e,
        x = null != (t = null == r ? void 0 : r.filter((e) => null != (0, p.zK)(e))) ? t : [],
        w = x.length > 0,
        P = Object.values(a._).length,
        S = l && !y && (0, f.M8)(c) && x.length < P,
        { trackUserProfileAction: E } = (0, d.KZ)(),
        D = (0, i.useRef)(new Map()),
        I = (0, i.useRef)(null),
        k = (0, i.useRef)(null),
        [N, Z] = (0, i.useState)(0),
        [T, C] = (0, i.useState)(!1),
        R = h(I, k, x, D, Z);
    if (
        ((0, i.useEffect)(
            () => (
                R(),
                window.addEventListener("resize", R),
                () => {
                    window.removeEventListener("resize", R);
                }
            ),
            [R, null == x ? void 0 : x.join("")],
        ),
        !w && !S)
    )
        return null;
    let A = T ? x : x.slice(0, x.length - N);
    return (0, n.jsxs)("div", {
        className: o()(O.tagListContainer, u),
        children: [
            w &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)("ul", {
                            className: O.tagList,
                            "aria-label": g.intl.string(g.t.EfjTi4),
                            children: A.map((e) =>
                                (0, n.jsx)(
                                    j,
                                    {
                                        tag: e,
                                        isCurrentUser: l,
                                        applicationId: s,
                                        widgetType: c,
                                        ref: (t) => {
                                            null != t && D.current.set(e, t);
                                        },
                                        disableInteraction: y,
                                    },
                                    e,
                                ),
                            ),
                        }),
                        N > 0 &&
                            (T
                                ? (0, n.jsx)(v, {
                                      onClick: () => {
                                          C(!1), E({ action: "COLLAPSE_GAME_TAGS" });
                                      },
                                  })
                                : (0, n.jsx)(m, {
                                      numHidden: N,
                                      onClick: () => {
                                          C(!0), E({ action: "EXPAND_GAME_TAGS" });
                                      },
                                      ref: I,
                                      disableInteraction: y,
                                  })),
                    ],
                }),
            S &&
                (0, n.jsx)(b.Z, {
                    tags: r,
                    widgetType: c,
                    applicationId: s,
                    ref: k,
                }),
        ],
    });
}
let j = (e) => {
        let { tag: t, isCurrentUser: r, applicationId: i, widgetType: l, disableInteraction: o, ref: a } = e,
            { trackUserProfileEditAction: c } = (0, d.KZ)(),
            u = (0, p.zK)(t);
        if (null == u) return null;
        let { getText: b, icon: y } = u,
            j = () => {
                (0, f.RZ)(l, i, t),
                    c({
                        action: "TAG_REMOVED",
                        widgetEdited: l,
                        gameId: i,
                    });
            };
        return (0, n.jsxs)("li", {
            className: O.tag,
            ref: a,
            children: [
                (0, n.jsx)(y, { size: "xxs" }),
                (0, n.jsx)(s.Text, {
                    variant: "text-xxs/medium",
                    color: "text-secondary",
                    children: b(),
                }),
                r &&
                    !o &&
                    (0, n.jsx)(s.ua7, {
                        text: g.intl.string(g.t.Otv9fH),
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
                                        onClick: j,
                                        className: O.removeButton,
                                        "aria-label": g.intl.formatToPlainString(g.t.GCn1nZ, { tag: b() }),
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
    m = (e) => {
        let { numHidden: t, onClick: r, disableInteraction: i, ref: l } = e;
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
                  text: g.intl.string(g.t.mriLXF),
                  children: (0, n.jsx)(s.P3F, {
                      onClick: r,
                      className: O.expandButton,
                      innerRef: l,
                      "aria-label": g.intl.string(g.t.mriLXF),
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
            text: g.intl.string(g.t.z9VPra),
            children: (0, n.jsx)(s.P3F, {
                onClick: t,
                className: O.collapseButton,
                "aria-label": g.intl.string(g.t.z9VPra),
                children: (0, n.jsx)(u.Z, {
                    direction: u.Z.Directions.LEFT,
                    width: 12,
                    height: 12,
                    className: O.caret,
                }),
            }),
        });
    },
    h = (e, t, r, n, l) =>
        (0, i.useCallback)(() => {
            var i, o, a, c;
            if (null == r) return void l(0);
            let s = null != (a = null == (i = e.current) ? void 0 : i.getBoundingClientRect().width) ? a : 0,
                u = null != (c = null == (o = t.current) ? void 0 : o.getBoundingClientRect().width) ? c : 0,
                d = u > 0 ? 8 : 4,
                f = 0,
                b = 0,
                p = n.current;
            for (let e = 0; e < r.length; e++) {
                let t = p.get(r[e]);
                if (null != t) {
                    if ((b += t.offsetWidth + 4) > 296) break;
                    f++;
                }
            }
            b = 0;
            for (let e = f; e < r.length; e++) {
                let t = p.get(r[e]);
                if (null != t) {
                    if ((b += t.offsetWidth + 4) > 296 - s - u - d) break;
                    f++;
                }
            }
            l(r.length - f);
        }, [e, t, null == r ? void 0 : r.join(""), n, l]);
