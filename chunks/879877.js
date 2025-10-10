r.d(t, { Z: () => O }), r(388685);
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
    m = r(44258);
function O(e) {
    var t;
    let { tags: r, isCurrentUser: o, widgetType: c, applicationId: s, className: u, disableInteraction: O = !1 } = e,
        v = null != (t = null == r ? void 0 : r.filter((e) => null != (0, p.zK)(e))) ? t : [],
        _ = v.length > 0,
        w = l.qH,
        P = o && !O && (0, f.M8)(c) && v.length < w,
        { trackUserProfileAction: E } = (0, d.KZ)(),
        I = (0, i.useRef)(new Map()),
        S = (0, i.useRef)(null),
        T = (0, i.useRef)(null),
        [D, N] = (0, i.useState)(0),
        [k, C] = (0, i.useState)(!1),
        Z = h(S, T, v, I, N);
    if (
        ((0, i.useEffect)(
            () => (
                Z(),
                window.addEventListener("resize", Z),
                () => {
                    window.removeEventListener("resize", Z);
                }
            ),
            [Z, null == v ? void 0 : v.join("")],
        ),
        !_ && !P)
    )
        return null;
    let A = k ? v : v.slice(0, v.length - D);
    return (0, n.jsxs)("div", {
        className: a()(m.tagListContainer, u),
        children: [
            _ &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)("ul", {
                            className: m.tagList,
                            "aria-label": b.intl.string(b.t.EfjTi4),
                            children: A.map((e) =>
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
                                        disableInteraction: O,
                                    },
                                    e,
                                ),
                            ),
                        }),
                        D > 0 &&
                            (k
                                ? (0, n.jsx)(x, {
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
        let { tag: t, isCurrentUser: r, applicationId: i, widgetType: o, disableInteraction: a, ref: l } = e,
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
                    !a &&
                    (0, n.jsx)(c.u, {
                        text: b.intl.string(b.t.Otv9fH),
                        children: (0, n.jsx)(s.P3F, {
                            onClick: () => {
                                (0, f.RZ)(o, i, t),
                                    u({
                                        action: "TAG_REMOVED",
                                        widgetEdited: o,
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
        let { numHidden: t, onClick: r, disableInteraction: i, ref: o } = e;
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
    x = (e) => {
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
