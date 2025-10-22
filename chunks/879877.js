n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    l = n.n(a),
    o = n(624238),
    s = n(28664),
    c = n(481060),
    u = n(259580),
    d = n(785717),
    f = n(86419),
    g = n(978369),
    p = n(286957),
    m = n(388032),
    b = n(200344);
function h(e) {
    var t;
    let { tags: n, isCurrentUser: a, widgetType: s, applicationId: c, className: u, disableInteraction: h = !1 } = e,
        x = null != (t = null == n ? void 0 : n.filter((e) => null != (0, p.zK)(e))) ? t : [],
        _ = x.length > 0,
        I = o.qH,
        P = a && !h && (0, f.M8)(s) && x.length < I,
        { trackUserProfileAction: w } = (0, d.KZ)(),
        S = (0, i.useRef)(new Map()),
        E = (0, i.useRef)(null),
        T = (0, i.useRef)(null),
        [C, N] = (0, i.useState)(0),
        [A, D] = (0, i.useState)(!1),
        k = O(E, T, x, S, N);
    if (
        ((0, i.useEffect)(
            () => (
                k(),
                window.addEventListener("resize", k),
                () => {
                    window.removeEventListener("resize", k);
                }
            ),
            [k, null == x ? void 0 : x.join("")],
        ),
        !_ && !P)
    )
        return null;
    let Z = A ? x : x.slice(0, x.length - C);
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
                                    v,
                                    {
                                        tag: e,
                                        isCurrentUser: a,
                                        applicationId: c,
                                        widgetType: s,
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
                            (A
                                ? (0, r.jsx)(j, {
                                      onClick: () => {
                                          D(!1), w({ action: "COLLAPSE_GAME_TAGS" });
                                      },
                                  })
                                : (0, r.jsx)(y, {
                                      numHidden: C,
                                      onClick: () => {
                                          D(!0), w({ action: "EXPAND_GAME_TAGS" });
                                      },
                                      ref: E,
                                      disableInteraction: h,
                                  })),
                    ],
                }),
            P &&
                (0, r.jsx)(g.Z, {
                    tags: n,
                    widgetType: s,
                    applicationId: c,
                    ref: T,
                }),
        ],
    });
}
let v = (e) => {
        let { tag: t, isCurrentUser: n, applicationId: i, widgetType: a, disableInteraction: l, ref: o } = e,
            { trackUserProfileEditAction: u } = (0, d.KZ)(),
            g = (0, p.zK)(t);
        if (null == g) return null;
        let { getText: h, icon: v } = g;
        return (0, r.jsxs)("li", {
            className: b.tag,
            ref: o,
            children: [
                (0, r.jsx)(v, { size: "xxs" }),
                (0, r.jsx)(c.Text, {
                    variant: "text-xxs/medium",
                    color: "text-secondary",
                    children: h(),
                }),
                n &&
                    !l &&
                    (0, r.jsx)(s.u, {
                        text: m.intl.string(m.t.Otv9fP),
                        children: (0, r.jsx)(c.P3F, {
                            onClick: () => {
                                (0, f.RZ)(a, i, t),
                                    u({
                                        action: "TAG_REMOVED",
                                        widgetEdited: a,
                                        gameId: i,
                                    });
                            },
                            className: b.removeButton,
                            "aria-label": m.intl.formatToPlainString(m.t.GCn1ne, { tag: h() }),
                            children: (0, r.jsx)(c.Dio, {
                                size: "xxs",
                                color: "currentColor",
                            }),
                        }),
                    }),
            ],
        });
    },
    y = (e) => {
        let { numHidden: t, onClick: n, disableInteraction: i, ref: a } = e;
        return i
            ? (0, r.jsx)("div", {
                  className: b.expandButton,
                  children: (0, r.jsx)(c.Text, {
                      variant: "text-xxs/medium",
                      color: "none",
                      children: "+".concat(t),
                  }),
              })
            : (0, r.jsx)(s.u, {
                  asContainer: !0,
                  text: m.intl.string(m.t.mriLXL),
                  children: (0, r.jsx)(c.P3F, {
                      onClick: n,
                      className: b.expandButton,
                      innerRef: a,
                      "aria-label": m.intl.string(m.t.mriLXL),
                      children: (0, r.jsx)(c.Text, {
                          variant: "text-xxs/medium",
                          color: "none",
                          children: "+".concat(t),
                      }),
                  }),
              });
    },
    j = (e) => {
        let { onClick: t } = e;
        return (0, r.jsx)(s.u, {
            asContainer: !0,
            text: m.intl.string(m.t.z9VPrQ),
            children: (0, r.jsx)(c.P3F, {
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
    O = (e, t, n, r, a) =>
        (0, i.useCallback)(() => {
            var i, l, o, s;
            if (null == n) return void a(0);
            let c = null != (o = null == (i = e.current) ? void 0 : i.getBoundingClientRect().width) ? o : 0,
                u = null != (s = null == (l = t.current) ? void 0 : l.getBoundingClientRect().width) ? s : 0,
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
                    if ((g += t.offsetWidth + 4) > 296 - c - u - d) break;
                    f++;
                }
            }
            a(n.length - f);
        }, [e, t, null == n ? void 0 : n.join(""), r, a]);
