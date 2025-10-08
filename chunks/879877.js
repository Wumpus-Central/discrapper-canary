r.d(t, { Z: () => O }), r(388685);
var n = r(951288),
    i = r(647438),
    a = r(120356),
    o = r.n(a),
    l = r(624238),
    c = r(28664),
    s = r(481060),
    u = r(259580),
    d = r(785717),
    f = r(86419),
    g = r(978369),
    p = r(286957),
    b = r(388032),
    m = r(200344);
function O(e) {
    var t;
    let { tags: r, isCurrentUser: a, widgetType: c, applicationId: s, className: u, disableInteraction: O = !1 } = e,
        h = null != (t = null == r ? void 0 : r.filter((e) => null != (0, p.zK)(e))) ? t : [],
        _ = h.length > 0,
        w = l.qH,
        P = a && !O && (0, f.M8)(c) && h.length < w,
        { trackUserProfileAction: I } = (0, d.KZ)(),
        E = (0, i.useRef)(new Map()),
        S = (0, i.useRef)(null),
        T = (0, i.useRef)(null),
        [D, N] = (0, i.useState)(0),
        [k, C] = (0, i.useState)(!1),
        A = x(S, T, h, E, N);
    if (
        ((0, i.useEffect)(
            () => (
                A(),
                window.addEventListener("resize", A),
                () => {
                    window.removeEventListener("resize", A);
                }
            ),
            [A, null == h ? void 0 : h.join("")],
        ),
        !_ && !P)
    )
        return null;
    let Z = k ? h : h.slice(0, h.length - D);
    return (0, n.jsxs)("div", {
        className: o()(m.tagListContainer, u),
        children: [
            _ &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)("ul", {
                            className: m.tagList,
                            "aria-label": b.intl.string(b.t.EfjTi4),
                            children: Z.map((e) =>
                                (0, n.jsx)(
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
                            (k
                                ? (0, n.jsx)(v, {
                                      onClick: () => {
                                          C(!1), I({ action: "COLLAPSE_GAME_TAGS" });
                                      },
                                  })
                                : (0, n.jsx)(j, {
                                      numHidden: D,
                                      onClick: () => {
                                          C(!0), I({ action: "EXPAND_GAME_TAGS" });
                                      },
                                      ref: S,
                                      disableInteraction: O,
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
        let { tag: t, isCurrentUser: r, applicationId: i, widgetType: a, disableInteraction: o, ref: l } = e,
            { trackUserProfileEditAction: u } = (0, d.KZ)(),
            g = (0, p.zK)(t);
        if (null == g) return null;
        let { getText: O, icon: y } = g;
        return (0, n.jsxs)("li", {
            className: m.tag,
            ref: l,
            children: [
                (0, n.jsx)(y, { size: "xxs" }),
                (0, n.jsx)(s.Text, {
                    variant: "text-xxs/medium",
                    color: "text-secondary",
                    children: O(),
                }),
                r &&
                    !o &&
                    (0, n.jsx)(c.u, {
                        text: b.intl.string(b.t.Otv9fH),
                        children: (0, n.jsx)(s.P3F, {
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
                            children: (0, n.jsx)(s.Dio, {
                                size: "xxs",
                                color: "currentColor",
                            }),
                        }),
                    }),
            ],
        });
    },
    j = (e) => {
        let { numHidden: t, onClick: r, disableInteraction: i, ref: a } = e;
        return i
            ? (0, n.jsx)("div", {
                  className: m.expandButton,
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
                      className: m.expandButton,
                      innerRef: a,
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
                className: m.collapseButton,
                "aria-label": b.intl.string(b.t.z9VPra),
                children: (0, n.jsx)(u.Z, {
                    direction: u.Z.Directions.LEFT,
                    width: 12,
                    height: 12,
                    className: m.caret,
                }),
            }),
        });
    },
    x = (e, t, r, n, a) =>
        (0, i.useCallback)(() => {
            var i, o, l, c;
            if (null == r) return void a(0);
            let s = null != (l = null == (i = e.current) ? void 0 : i.getBoundingClientRect().width) ? l : 0,
                u = null != (c = null == (o = t.current) ? void 0 : o.getBoundingClientRect().width) ? c : 0,
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
            a(r.length - f);
        }, [e, t, null == r ? void 0 : r.join(""), n, a]);
