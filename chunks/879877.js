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
        h = null != (t = null == n ? void 0 : n.filter((e) => null != (0, p.zK)(e))) ? t : [],
        _ = h.length > 0,
        w = l.qH,
        P = a && !O && (0, f.M8)(c) && h.length < w,
        { trackUserProfileAction: I } = (0, d.KZ)(),
        S = (0, i.useRef)(new Map()),
        E = (0, i.useRef)(null),
        T = (0, i.useRef)(null),
        [D, k] = (0, i.useState)(0),
        [N, C] = (0, i.useState)(!1),
        Z = v(E, T, h, S, k);
    if (
        ((0, i.useEffect)(
            () => (
                Z(),
                window.addEventListener("resize", Z),
                () => {
                    window.removeEventListener("resize", Z);
                }
            ),
            [Z, null == h ? void 0 : h.join("")],
        ),
        !_ && !P)
    )
        return null;
    let A = N ? h : h.slice(0, h.length - D);
    return (0, r.jsxs)("div", {
        className: o()(m.tagListContainer, u),
        children: [
            _ &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("ul", {
                            className: m.tagList,
                            "aria-label": b.intl.string(b.t.EfjTi4),
                            children: A.map((e) =>
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
                                        disableInteraction: O,
                                    },
                                    e,
                                ),
                            ),
                        }),
                        D > 0 &&
                            (N
                                ? (0, r.jsx)(x, {
                                      onClick: () => {
                                          C(!1), I({ action: "COLLAPSE_GAME_TAGS" });
                                      },
                                  })
                                : (0, r.jsx)(j, {
                                      numHidden: D,
                                      onClick: () => {
                                          C(!0), I({ action: "EXPAND_GAME_TAGS" });
                                      },
                                      ref: E,
                                      disableInteraction: O,
                                  })),
                    ],
                }),
            P &&
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
            { trackUserProfileEditAction: u } = (0, d.KZ)(),
            g = (0, p.zK)(t);
        if (null == g) return null;
        let { getText: O, icon: y } = g;
        return (0, r.jsxs)("li", {
            className: m.tag,
            ref: l,
            children: [
                (0, r.jsx)(y, { size: "xxs" }),
                (0, r.jsx)(s.Text, {
                    variant: "text-xxs/medium",
                    color: "text-secondary",
                    children: O(),
                }),
                n &&
                    !o &&
                    (0, r.jsx)(c.u, {
                        text: b.intl.string(b.t.Otv9fH),
                        children: (0, r.jsx)(s.P3F, {
                            onClick: () => {
                                (0, f.RZ)(a, i, t),
                                    u({
                                        action: "TAG_REMOVED",
                                        widgetEdited: a,
                                        gameId: i,
                                    });
                            },
                            className: m.removeButton,
                            "aria-label": b.intl.formatToPlainString(b.t.GCn1nZ, { tag: O() }),
                            children: (0, r.jsx)(s.Dio, {
                                size: "xxs",
                                color: "currentColor",
                            }),
                        }),
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
    x = (e) => {
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
