n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(624238),
    c = n(28664),
    s = n(481060),
    u = n(259580),
    d = n(785717),
    g = n(86419),
    f = n(978369),
    p = n(286957),
    m = n(388032),
    b = n(44258);
function h(e) {
    var t;
    let { tags: n, isCurrentUser: a, widgetType: c, applicationId: s, className: u, disableInteraction: h = !1 } = e,
        x = null != (t = null == n ? void 0 : n.filter((e) => null != (0, p.zK)(e))) ? t : [],
        _ = x.length > 0,
        P = o.qH,
        I = a && !h && (0, g.M8)(c) && x.length < P,
        { trackUserProfileAction: w } = (0, d.KZ)(),
        S = (0, i.useRef)(new Map()),
        E = (0, i.useRef)(null),
        T = (0, i.useRef)(null),
        [C, D] = (0, i.useState)(0),
        [k, N] = (0, i.useState)(!1),
        A = j(E, T, x, S, D);
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
        !_ && !I)
    )
        return null;
    let Z = k ? x : x.slice(0, x.length - C);
    return (0, r.jsxs)("div", {
        className: l()(b.tagListContainer, u),
        children: [
            _ &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("ul", {
                            className: b.tagList,
                            "aria-label": m.intl.string(m.t.EfjTi4),
                            children: Z.map((e) =>
                                (0, r.jsx)(
                                    y,
                                    {
                                        tag: e,
                                        isCurrentUser: a,
                                        applicationId: s,
                                        widgetType: c,
                                        ref: (t) => {
                                            null != t && S.current.set(e, t);
                                        },
                                        disableInteraction: h,
                                    },
                                    e,
                                ),
                            ),
                        }),
                        C > 0 &&
                            (k
                                ? (0, r.jsx)(O, {
                                      onClick: () => {
                                          N(!1), w({ action: "COLLAPSE_GAME_TAGS" });
                                      },
                                  })
                                : (0, r.jsx)(v, {
                                      numHidden: C,
                                      onClick: () => {
                                          N(!0), w({ action: "EXPAND_GAME_TAGS" });
                                      },
                                      ref: E,
                                      disableInteraction: h,
                                  })),
                    ],
                }),
            I &&
                (0, r.jsx)(f.Z, {
                    tags: n,
                    widgetType: c,
                    applicationId: s,
                    ref: T,
                }),
        ],
    });
}
let y = (e) => {
        let { tag: t, isCurrentUser: n, applicationId: i, widgetType: a, disableInteraction: l, ref: o } = e,
            { trackUserProfileEditAction: u } = (0, d.KZ)(),
            f = (0, p.zK)(t);
        if (null == f) return null;
        let { getText: h, icon: y } = f;
        return (0, r.jsxs)("li", {
            className: b.tag,
            ref: o,
            children: [
                (0, r.jsx)(y, { size: "xxs" }),
                (0, r.jsx)(s.Text, {
                    variant: "text-xxs/medium",
                    color: "text-secondary",
                    children: h(),
                }),
                n &&
                    !l &&
                    (0, r.jsx)(c.u, {
                        text: m.intl.string(m.t.Otv9fP),
                        children: (0, r.jsx)(s.P3F, {
                            onClick: () => {
                                (0, g.RZ)(a, i, t),
                                    u({
                                        action: "TAG_REMOVED",
                                        widgetEdited: a,
                                        gameId: i,
                                    });
                            },
                            className: b.removeButton,
                            "aria-label": m.intl.formatToPlainString(m.t.GCn1ne, { tag: h() }),
                            children: (0, r.jsx)(s.Dio, {
                                size: "xxs",
                                color: "currentColor",
                            }),
                        }),
                    }),
            ],
        });
    },
    v = (e) => {
        let { numHidden: t, onClick: n, disableInteraction: i, ref: a } = e;
        return i
            ? (0, r.jsx)("div", {
                  className: b.expandButton,
                  children: (0, r.jsx)(s.Text, {
                      variant: "text-xxs/medium",
                      color: "none",
                      children: "+".concat(t),
                  }),
              })
            : (0, r.jsx)(c.u, {
                  asContainer: !0,
                  text: m.intl.string(m.t.mriLXL),
                  children: (0, r.jsx)(s.P3F, {
                      onClick: n,
                      className: b.expandButton,
                      innerRef: a,
                      "aria-label": m.intl.string(m.t.mriLXL),
                      children: (0, r.jsx)(s.Text, {
                          variant: "text-xxs/medium",
                          color: "none",
                          children: "+".concat(t),
                      }),
                  }),
              });
    },
    O = (e) => {
        let { onClick: t } = e;
        return (0, r.jsx)(c.u, {
            asContainer: !0,
            text: m.intl.string(m.t.z9VPrQ),
            children: (0, r.jsx)(s.P3F, {
                onClick: t,
                className: b.collapseButton,
                "aria-label": m.intl.string(m.t.z9VPrQ),
                children: (0, r.jsx)(u.Z, {
                    direction: u.Z.Directions.LEFT,
                    width: 12,
                    height: 12,
                    className: b.caret,
                }),
            }),
        });
    },
    j = (e, t, n, r, a) =>
        (0, i.useCallback)(() => {
            var i, l, o, c;
            if (null == n) return void a(0);
            let s = null != (o = null == (i = e.current) ? void 0 : i.getBoundingClientRect().width) ? o : 0,
                u = null != (c = null == (l = t.current) ? void 0 : l.getBoundingClientRect().width) ? c : 0,
                d = u > 0 ? 8 : 4,
                g = 0,
                f = 0,
                p = r.current;
            for (let e = 0; e < n.length; e++) {
                let t = p.get(n[e]);
                if (null != t) {
                    if ((f += t.offsetWidth + 4) > 296) break;
                    g++;
                }
            }
            f = 0;
            for (let e = g; e < n.length; e++) {
                let t = p.get(n[e]);
                if (null != t) {
                    if ((f += t.offsetWidth + 4) > 296 - s - u - d) break;
                    g++;
                }
            }
            a(n.length - g);
        }, [e, t, null == n ? void 0 : n.join(""), r, a]);
