n.d(t, { default: () => e6 });
var r = n(627968),
    l = n(64700),
    s = n(110259),
    i = n(892547),
    a = n(834730),
    u = n(252452),
    o = n(139286),
    c = n(200921),
    d = n(507553),
    h = n(89381),
    m = n(17928),
    g = n(521489),
    x = n(568602),
    f = n(775602),
    y = n(531685),
    v = n(625494),
    j = n(964486);
n(667532), n(134528), n(947204);
var p = n(503698),
    A = n.n(p),
    b = n(607399),
    S = n(408278),
    C = n(477155),
    N = n(43990),
    E = n(331322),
    k = n(668953),
    M = n(972213),
    w = n(97469),
    R = n(963935),
    I = n(894858),
    T = n(272053),
    K = n(121881),
    O = n(939249),
    _ = n(508770),
    B = n(777666),
    L = n(933297);
function P(e) {
    let { badge: t } = e;
    return t.useCustomBadge();
}
function D(e) {
    let { badge: t } = e,
        n = t.useCount();
    return n <= 0 ? null : (0, r.jsx)(B.hV, { count: n });
}
let F = function (e) {
    let { badge: t } = e;
    switch (t.badgeType) {
        case L.Xi.BETA:
            return (0, r.jsx)(_.E, { type: "beta", variant: "brand" });
        case L.Xi.COUNT:
            return (0, r.jsx)(D, { badge: t });
        case L.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(P, { badge: t });
    }
};
var G = n(985018),
    X = n(508891);
function U(e) {
    let { node: t, isLast: n } = e,
        l = t.useTitle(),
        s = t.usePersistentBadge?.(),
        i = (0, r.jsxs)(E.B, {
            direction: "horizontal",
            align: "center",
            gap: "xs",
            className: X.Ze,
            children: [
                (0, r.jsx)(a.E, {
                    variant: n ? "text-md/medium" : "text-md/normal",
                    color: n ? "text-default" : void 0,
                    className: X.b,
                    children: l,
                }),
                n && null != s && (0, r.jsx)(F, { badge: s }),
                !n &&
                    (0, r.jsx)(a.E, {
                        variant: "text-md/normal",
                        color: "interactive-text-default",
                        "aria-hidden": !0,
                        children: "/",
                    }),
            ],
        });
    return (0, r.jsx)("li", {
        "aria-current": n ? "page" : void 0,
        className: X.QF,
        children: n
            ? i
            : (0, r.jsx)(O.D, {
                  onClick: () => {
                      T.A.navigate(t.key);
                  },
                  className: X.vk,
                  children: i,
              }),
    });
}
function q(e) {
    let { path: t } = e;
    return (0, r.jsx)("nav", {
        "aria-label": G.intl.string(G.t["bM+M/m"]),
        className: X.m7,
        children: (0, r.jsx)(E.B, {
            direction: "horizontal",
            role: "list",
            className: X.jD,
            children: t.map((e, n) => (0, r.jsx)(U, { node: e, isLast: n === t.length - 1 }, e.key)),
        }),
    });
}
var z = n(441562);
function V(e) {
    let { icon: t, label: n, onClick: l } = e;
    return (0, r.jsx)(S.K, { onClick: l, icon: t, size: "sm", variant: "icon-only", "aria-label": n });
}
function $(e) {
    let { setting: t, onClose: n } = e,
        l = (0, w.NC)(),
        s =
            null != t
                ? (function (e) {
                      let t = [e];
                      for (let n = e.parent; null != n && n.type !== R.Z6.SIDEBAR_ITEM; n = n.parent)
                          n.type === R.Z6.PANEL && t.unshift(n);
                      return t;
                  })(t)
                : [],
        i = s.at(-2),
        a = b.Fr && s.length <= 1,
        u = s.length > 1 && null != i;
    return (0, r.jsx)(N.N, {
        theme: l,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: A()(z.$Q, e, { [z.HW]: a || u }),
                children: [
                    (0, r.jsxs)(E.B, {
                        direction: "horizontal",
                        align: "center",
                        className: z.y9,
                        children: [
                            a &&
                                (0, r.jsx)(V, {
                                    icon: k.f,
                                    onClick: () => I.A.setState({ showNavigationMobile: !0 }),
                                    label: G.intl.string(G.t["13/7kX"]),
                                }),
                            u &&
                                (0, r.jsx)(V, {
                                    icon: C.r,
                                    onClick: () => T.A.navigate(i.key),
                                    label: G.intl.string(G.t["13/7kX"]),
                                }),
                            null != t && (0, r.jsx)(q, { path: s }),
                        ],
                    }),
                    (0, r.jsx)(V, { icon: M.d, onClick: n, label: G.intl.string(G.t.cpT0Cq) }),
                ],
            }),
    });
}
let H = l.memo(function (e) {
    let { onClose: t, setting: n } = e,
        l = I.A.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: A()(z.Qs, { [z.Hw]: b.Fr, [z.n7]: l }),
        children: [
            (0, r.jsx)($, { setting: n, onClose: t }),
            (0, r.jsx)("div", { className: z.yp, children: null != n && (0, r.jsx)(K.A, { node: n }) }),
        ],
    });
});
n(321073);
var Q = n(837381),
    W = n(689175),
    Y = n(534514),
    Z = n(928039),
    J = n(932001),
    ee = n(199966),
    et = n(397274);
function en(e, t, n) {
    let { nodeKeyToDismissibleContents: r, dismissibleContentToBadge: l } = n,
        s = r.get(e);
    return null != t && null != s && s.has(t) ? l.get(t) : null;
}
var er = n(661531);
let el = function (e) {
    let { badge: t } = e;
    switch (t.badgeType) {
        case L.Xi.NEW:
            return (0, r.jsx)(_.E, { type: "new", variant: "brand" });
        case L.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            let { StronglyDiscouragedCustomComponent: n } = t;
            return (0, r.jsx)(n, {});
    }
};
var es = n(284009),
    ei = n.n(es),
    ea = n(123924),
    eu = n(935399),
    eo = n(319354),
    ec = n(717421),
    ed = n(253932),
    eh = n(429566);
function em(e) {
    let { category: t, onClick: n, active: l, dismissibleBadge: s } = e,
        { useTitle: i, useSubnavLabel: a, key: u } = t,
        o = i?.(),
        c = a?.() ?? o;
    return (
        ei()(null != c, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, r.jsx)(Q.tG, {
            id: u,
            children: (e) =>
                (0, r.jsxs)(
                    O.D,
                    {
                        onClick: n,
                        className: A()(eh.AS, { [eh.vu]: l }),
                        ...e,
                        "aria-current": l ? "page" : void 0,
                        children: [c, null != s && !l && (0, r.jsx)(el, { badge: s })],
                    },
                    u,
                ),
        })
    );
}
function eg(e) {
    let t,
        n,
        s,
        i,
        { active: a, isTopLevelPanelVisible: u, visibleCategories: o, visibleContent: c, dismissibleBadges: d } = e,
        h = I.A.useField("currentCategoryKey"),
        [m, g] = l.useState(a);
    l.useLayoutEffect(() => {
        a && g(!0);
    }, [a]);
    let x = l.useMemo(() => o.findIndex((e) => e.key === h), [o, h]);
    l.useEffect(() => {
        if (!a) {
            let e = f.current;
            null != e &&
                ((e.style.height = `${e.scrollHeight}px`),
                window.getComputedStyle(e).height,
                (e.style.height = "0"),
                Promise.allSettled(e.getAnimations().map((e) => e.finished)).then(() => {
                    g(!1);
                }));
        }
    }, [a]);
    let f = l.useRef(null),
        [y, v] = l.useState(a ? "auto" : "0");
    return (
        (t = l.useRef(null)),
        (n = l.useRef(new Set())),
        (s = l.useRef(!1)),
        (i = l.useMemo(() => {
            let e = new Set();
            return o.forEach((t) => e.add(t.key)), e;
        }, [o])),
        l.useEffect(() => {
            if (!u) return;
            let e = et.A.getPanelScrollerNode();
            if (null == e) return;
            let r = e.querySelectorAll("[data-settings-category-key]"),
                l = e.querySelector("[data-panel-bottom]"),
                a = [];
            Array.from(r).forEach((e) => {
                let t = e.getAttribute("data-settings-category-key");
                null != t && i.has(t) && a.push(e);
            });
            let o = new Map(),
                c = [];
            return (
                a.forEach((e) => {
                    let t = e.getAttribute("data-settings-category-key");
                    null != t && (o.set(e, t), c.push(t));
                }),
                (t.current = new IntersectionObserver(
                    (t) => {
                        if (
                            (t.forEach((t) => {
                                let { isIntersecting: r, target: i } = t;
                                if (i === l) {
                                    let t = e.scrollHeight > e.clientHeight;
                                    s.current = r && t;
                                    return;
                                }
                                let a = o.get(i);
                                null != a && (r ? n.current.add(a) : n.current.delete(a));
                            }),
                            !et.A.getIsSidebarCategoryAutoSelectEnabled())
                        )
                            return;
                        let r = [];
                        if (
                            (c.forEach((e) => {
                                n.current.has(e) && r.push(e);
                            }),
                            0 === r.length)
                        )
                            return;
                        let i = r.at(s.current ? -1 : 0);
                        I.A.getField("currentCategoryKey") !== i && I.A.setState({ currentCategoryKey: i });
                    },
                    { root: e, rootMargin: "0px 100000px 0px 100000px", threshold: 1 },
                )),
                a.forEach((e) => t.current?.observe(e)),
                null != l && t.current?.observe(l),
                () => {
                    a.forEach((e) => t.current?.unobserve(e)),
                        null != l && t.current?.unobserve(l),
                        t.current?.disconnect(),
                        (t.current = null);
                }
            );
        }, [i, u]),
        (0, r.jsx)("div", {
            className: eh.lK,
            style: { height: y, opacity: +!!a },
            ref: f,
            children:
                m &&
                (0, r.jsx)(ex, {
                    index: x,
                    activeKey: h,
                    categories: o,
                    visibleContent: c,
                    dismissibleBadges: d,
                    onMount: function () {
                        let e = f.current;
                        null != e &&
                            ((e.style.height = `${e.scrollHeight}px`),
                            Promise.all(e.getAnimations().map((e) => e.finished))
                                .then(() => {
                                    (e.style.height = "auto"),
                                        et.A.scrollSidebarNodeIntoView(e, { animate: !0, block: "nearest" });
                                })
                                .catch(() => {}));
                    },
                }),
        })
    );
}
function ex(e) {
    let { index: t, activeKey: n, categories: s, visibleContent: i, dismissibleBadges: a, onMount: u } = e,
        {
            thumbRef: o,
            trackRef: c,
            thumbAnchorRef: d,
            springs: h,
        } = (function (e) {
            let t = ed.Xi.useSetting(),
                n = l.useRef(null),
                r = l.useRef(null),
                s = l.useRef(null),
                i = l.useRef(!0),
                a = l.useRef(t),
                u = l.useRef(e),
                [o, c] = (0, ec.z)(() => ({ y: 0, height: 0, config: { mass: 0.1, friction: 20, tension: 300 } }));
            return (
                l.useLayoutEffect(() => {
                    let l = a.current !== t,
                        d = () => {
                            if (null == n.current || null == r.current || null == s.current) return;
                            let [d, h] = [n.current.getBoundingClientRect(), s.current.getBoundingClientRect()],
                                m = d.width / 2,
                                g = (h.y - d.y) / m,
                                x = h.height / m;
                            i.current || l || f.A.useReducedMotion || -1 === u.current
                                ? (o.y.set(g), o.height.set(x))
                                : c({ y: g, height: x }),
                                (i.current = !1),
                                (a.current = t),
                                (u.current = e);
                        },
                        h = null;
                    return (
                        l
                            ? (h = requestAnimationFrame(() => {
                                  (h = null), d();
                              }))
                            : d(),
                        () => {
                            null != h && cancelAnimationFrame(h);
                        }
                    );
                }, [e, c, o.y, o.height, t]),
                { thumbRef: r, trackRef: n, thumbAnchorRef: s, springs: o }
            );
        })(t);
    return (
        (0, eu.Ay)(u),
        (0, r.jsxs)("div", {
            className: eh.o8,
            role: "list",
            style: {
                "--custom-nav-count": s.length,
                "--custom-nav-index": Math.max(t, 0),
                "--custom-nav-width": "2px",
                "--custom-icon-size": `${eo.E[ey]}px`,
            },
            children: [
                (0, r.jsx)("div", {
                    className: eh.u4,
                    "aria-hidden": "true",
                    ref: c,
                    children: (0, r.jsx)(ea.animated.div, {
                        className: A()(eh.FF, { [eh.R]: null == n }),
                        style: h,
                        ref: o,
                    }),
                }),
                (0, r.jsx)("div", { className: eh.gu, "aria-hidden": "true", ref: d }),
                s.map((e) => {
                    let t = en(e.key, i, a);
                    return (0, r.jsx)(
                        em,
                        {
                            onClick: () => {
                                var t;
                                return (t = e.key), void T.A.navigate(t, { showNavigationMobile: !1 });
                            },
                            active: e.key === n,
                            category: e,
                            dismissibleBadge: t,
                        },
                        e.key,
                    );
                }),
            ],
        })
    );
}
var ef = n(585635);
let ey = "refresh_sm";
function ev(e) {
    let {
            tag: t,
            onClick: n,
            active: s,
            "aria-expanded": i,
            node: u,
            dismissibleBadge: o,
            panelKey: c,
            listItemProps: d,
            children: h,
        } = e,
        {
            icon: m,
            StronglyDiscouragedCustomComponent: g,
            usePersistentBadge: x,
            useTitle: f,
            variant: y = "default",
        } = u,
        v = f?.(),
        j = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return "text-feedback-critical";
            }
        })(y),
        p = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return er.A.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(y),
        b = x?.(s),
        S = l.useMemo(
            () =>
                null != o
                    ? s
                        ? null
                        : (0, r.jsx)(el, { badge: o })
                    : null != b
                      ? (0, r.jsx)(F, { badge: b })
                      : void 0,
            [s, o, b],
        );
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": c,
        className: ef.DB,
        children: [
            (0, r.jsxs)(O.D, {
                ...d,
                "aria-expanded": i,
                className: A()(ef.AS, { [ef.vu]: s, [ef.RD]: "destructive" === y }),
                "aria-current": s ? "page" : void 0,
                onClick: n,
                children: [
                    null != g
                        ? (0, r.jsx)(g, {})
                        : (0, r.jsxs)("div", {
                              className: ef.Ly,
                              children: [
                                  (0, r.jsx)(m, { color: p, size: ey, className: ef.Kk }),
                                  (0, r.jsx)(a.E, { variant: "text-md/medium", color: j, children: v }),
                              ],
                          }),
                    S,
                ],
            }),
            h,
        ],
    });
}
function ej(e) {
    let { node: t, visibleContent: n, dismissibleBadges: s, hoisted: i = !1 } = e,
        a = l.useMemo(() => t.layout[0], [t]),
        u = I.A.useField("currentPanelKey"),
        { accessibleDirectory: o } = (0, ee._)(),
        c = a?.key === u,
        d = l.useMemo(() => {
            if (null == u) return !1;
            let e = o.entry(u);
            return e?.parentSidebarItemKey === t.key;
        }, [u, t.key, o]),
        h = l.useMemo(() => {
            if (null == a || !(0, R.Iu)(a.layout)) return null;
            let e = a.layout.filter(R.bJ);
            return e.length > 1 ? e : null;
        }, [a]),
        m =
            null != a
                ? () => {
                      let e = u === a.key && null != h ? h[0].key : a.key;
                      T.A.navigate(e, { animateSidebarScroll: !0, showNavigationMobile: !1 });
                  }
                : t.onClick,
        g = null != u,
        x = l.useMemo(
            () =>
                null != h && g
                    ? (0, r.jsx)(eg, {
                          active: d,
                          isTopLevelPanelVisible: c,
                          visibleCategories: h,
                          visibleContent: n,
                          dismissibleBadges: s,
                      })
                    : null,
            [h, g, d, c, n, s],
        ),
        f = i ? "li" : "div",
        y = l.useMemo(() => en(t.key, n, s), [t.key, n, s]);
    return i
        ? (0, r.jsx)(ev, {
              tag: f,
              panelKey: a?.key,
              onClick: m,
              active: d,
              "aria-expanded": null != h ? d : void 0,
              node: t,
              dismissibleBadge: y,
              children: x,
          })
        : (0, r.jsx)(Q.tG, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(ev, {
                      tag: f,
                      panelKey: a?.key,
                      onClick: m,
                      active: d,
                      "aria-expanded": null != h ? d : void 0,
                      node: t,
                      dismissibleBadge: y,
                      listItemProps: e,
                      children: x,
                  }),
          });
}
var ep = n(826673),
    eA = n(49999),
    eb = n(443263);
function eS(e) {
    let { root: t, onClose: n, footer: s, emptyState: i, searchBar: a } = e,
        u = I.A.useField("showNavigationMobile"),
        o = l.useRef(null),
        [c] = l.useState(t),
        { accessibleDirectory: d } = (0, ee._)(),
        h = l.useMemo(() => {
            let e, t, n, r;
            return (
                (e = []),
                (t = new Map()),
                (n = new Map()),
                (r = new Map()),
                !(function e(t, n) {
                    if ((n(t), (0, R.nW)(t))) for (let r of t.layout) e(r, n);
                })(c, (l) => {
                    if (!("getDismissibleBadges" in l)) return;
                    let s = l.getDismissibleBadges?.();
                    if (null == s) return;
                    let i = d.entry(l.key);
                    if (i?.parentSidebarItemKey == null) return;
                    let a = null;
                    if (null != i.parentCategoryKey) {
                        let e = d.get(i.parentCategoryKey);
                        e?.type === R.Z6.CATEGORY && (0, R.bJ)(e) && (a = i.parentCategoryKey);
                    }
                    let u = { sidebarItemKey: i.parentSidebarItemKey, categoryKey: a };
                    s.forEach((l) =>
                        (function (l, s) {
                            let { dismissibleContent: i } = l;
                            e.push(i), t.set(i, s), r.set(i, l);
                            let a = n.get(s.sidebarItemKey) ?? new Set();
                            if ((a.add(i), n.set(s.sidebarItemKey, a), null != s.categoryKey)) {
                                let e = n.get(s.categoryKey) ?? new Set();
                                e.add(i), n.set(s.categoryKey, e);
                            }
                        })(l, u),
                    );
                }),
                {
                    allDismissibleContents: e,
                    dismissibleContentToNodeKeys: t,
                    nodeKeyToDismissibleContents: n,
                    dismissibleContentToBadge: r,
                }
            );
        }, [c, d]),
        [m] = (0, J.kn)(h.allDismissibleContents);
    !(function (e) {
        let { visibleContent: t, dismissibleBadges: n, accessibleDirectory: r } = e,
            { dismissibleContentToNodeKeys: s, nodeKeyToDismissibleContents: i } = n,
            a = l.useRef(!1);
        l.useEffect(() => {
            if (((a.current = !1), null == t || !s.has(t))) return;
            let e = s.get(t);
            if (null == e) return;
            let n = () => {
                    a.current = !1;
                    let t = i.get(e.sidebarItemKey);
                    null != t &&
                        t.forEach((e) => {
                            (0, ep.Dr)(e, { dismissAction: eA.i.AUTO, forceTrack: !0 });
                        });
                },
                l = I.A.subscribe(
                    (e) => {
                        let { currentPanelKey: t } = e;
                        return t;
                    },
                    (t) => {
                        let l = null != t && null != r ? r.entry(t)?.parentSidebarItemKey : null;
                        null != l && (l === e.sidebarItemKey ? (a.current = !0) : a.current && n());
                    },
                    { equalityFn: (e, t) => e === t, fireImmediately: !0 },
                );
            return () => {
                l(), a.current && n();
            };
        }, [t, s, r, i]);
    })({ visibleContent: m, dismissibleBadges: h, accessibleDirectory: d });
    let [g, x] = l.useMemo(() => {
            let e = [],
                n = [];
            return (
                t.layout.forEach((t) => {
                    t.hoisted ? e.push(t) : n.push(t);
                }),
                [e, n]
            );
        }, [t.layout]),
        f = (0, w.NC)(),
        y = (0, Z.A)("settings-sidebar", o);
    return (0, r.jsx)(N.N, {
        theme: f,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: A()(eb.pz, e, { [eb.Hw]: b.Fr, [eb.n7]: u }),
                children: [
                    (0, r.jsxs)("div", {
                        className: eb.gM,
                        children: [
                            b.Fr &&
                                (0, r.jsx)("div", {
                                    className: eb.hg,
                                    children: (0, r.jsx)(S.K, {
                                        icon: M.d,
                                        onClick: n,
                                        variant: "icon-only",
                                        size: "sm",
                                        "aria-label": G.intl.string(G.t.cpT0Cq),
                                    }),
                                }),
                            (0, r.jsx)("div", {
                                children: g.map((e) =>
                                    (0, r.jsx)(
                                        eC,
                                        { section: e, visibleContent: m, dismissibleBadges: h, hoisted: !0 },
                                        e.key,
                                    ),
                                ),
                            }),
                            null != a && (0, r.jsx)(a, {}),
                            null != i && 0 === x.length && (0, r.jsx)(i, {}),
                        ],
                    }),
                    (0, r.jsx)(Q.hD, {
                        navigator: y,
                        children: (0, r.jsx)(Q.PR, {
                            children: (e) => {
                                let { ref: t, ...n } = e;
                                return (0, r.jsxs)(W.Ch, {
                                    ref: (e) => {
                                        (o.current = e),
                                            et.A.setSidebarScrollerRef(e),
                                            (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: eb.Mt,
                                    fade: !0,
                                    ...n,
                                    children: [
                                        (0, r.jsx)("nav", {
                                            className: eb.C$,
                                            children: x.map((e) =>
                                                (0, r.jsx)(
                                                    eC,
                                                    { section: e, visibleContent: m, dismissibleBadges: h },
                                                    e.key,
                                                ),
                                            ),
                                        }),
                                        null != s && (0, r.jsx)(s, {}),
                                    ],
                                });
                            },
                        }),
                    }),
                ],
            }),
    });
}
function eC(e) {
    let { section: t, visibleContent: n, dismissibleBadges: l, hoisted: s = !1 } = e,
        i = t.useTitle?.();
    return (0, r.jsxs)("ul", {
        className: eb.uW,
        "aria-label": i,
        children: [
            null != i &&
                (0, r.jsx)("div", {
                    className: eb.a9,
                    children: (0, r.jsx)(Y.D, {
                        className: eb.Pf,
                        variant: "heading-sm/medium",
                        color: "text-muted",
                        children: i,
                    }),
                }),
            t.layout.map((e) =>
                (0, r.jsx)(ej, { node: e, visibleContent: n, dismissibleBadges: l, hoisted: s }, e.key),
            ),
        ],
    });
}
var eN = n(823092),
    eE = n(581298),
    ek = n(910772);
function eM(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: s,
            onClose: i,
            sidebarFooter: a,
            searchBar: u,
            onViewChange: o,
            emptyState: c,
            searchQuery: d,
            clearSearchQuery: h,
        } = e,
        m = I.A.useField("currentPanelKey"),
        { node: g, visibleDirectory: x, accessibleDirectory: f } = (0, eE.Ay)(t, d ?? ""),
        y = null != n && x.entry(n)?.parentPanelKey != null ? n : s,
        v = l.useMemo(() => {
            let e = f.entry(m ?? y)?.parentPanelKey;
            if (null != e) return f.getPanelOrThrow(e);
        }, [m, f, y]),
        { navigateWithValidation: p } = (0, eN.L_)(),
        A = l.useMemo(() => () => p(i), [p, i]);
    l.useEffect(() => {
        T.A.init({
            accessibleDirectory: f,
            onViewChange: o,
            navigateWithValidation: (e, t) => {
                null == x.entry(e) && h?.(), p(t);
            },
            closeWithValidation: A,
        });
    }, [f, p, o, h, x, A]);
    let [b, S] = l.useState(!0);
    (0, j.Ay)(
        () => (
            T.A.navigate(y, { animatePanelScroll: !1, animateSidebarScroll: !1, showNavigationMobile: null == n }),
            S(!1),
            () => {
                T.A.reset(), et.A.reset(), I.A.resetState();
            }
        ),
    );
    let C = l.useMemo(() => ({ visibleDirectory: x, accessibleDirectory: f }), [x, f]),
        N = null != m ? x.get(m) : void 0;
    return (0, r.jsx)(ee.x.Provider, {
        value: C,
        children: (0, r.jsxs)("div", {
            className: ek.k,
            children: [
                (0, r.jsx)(eS, { root: g, onClose: A, footer: a, emptyState: c, searchBar: u }),
                (0, r.jsx)(H, { onClose: A, setting: b ? void 0 : (N ?? v) }),
            ],
        }),
    });
}
function ew(e) {
    return (0, r.jsx)(eN.ms, { children: (0, r.jsx)(eM, { ...e }) });
}
var eR = n(652215);
function eI(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: s,
            onViewChange: i,
            sidebarFooter: a,
            emptyState: u,
            searchQuery: o,
            clearSearchQuery: c,
            searchBar: d,
            ...h
        } = e,
        [j, p] = l.useState(!1),
        [A, b] = l.useState(1.4),
        S = l.useRef(null),
        C = (0, m.bG)([f.A], () => f.A.useReducedMotion),
        N = (0, m.bG)([y.A], () => y.A.isFocused());
    return (
        l.useEffect(() => {
            let e = (e) => {
                let { intensity: t, duration: n } = e;
                !C &&
                    N &&
                    (p(!0), b(t ?? 1.4), clearTimeout(S.current), (S.current = setTimeout(() => p(!1), n ?? 1e3)));
            };
            return (
                v._.subscribe(eR.jej.SHAKE_SETTINGS_MODAL, e),
                () => {
                    v._.unsubscribe(eR.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(S.current);
                }
            );
        }, [C, N]),
        (0, r.jsx)(x.b, {
            isShaking: j,
            intensity: A,
            children: (0, r.jsx)(g.N, {
                ...h,
                children: (0, r.jsx)(ew, {
                    onClose: h.onClose,
                    partialRoot: t,
                    target: n,
                    defaultTarget: s,
                    onViewChange: i,
                    emptyState: u,
                    sidebarFooter: a,
                    searchQuery: o,
                    clearSearchQuery: c,
                    searchBar: d,
                }),
            }),
        })
    );
}
var eT = n(495544),
    eK = n(287809),
    eO = n(152056),
    e_ = n(780964),
    eB = n(74612),
    eL = n(550079),
    eP = n(477782),
    eD = n(349288),
    eF = n(922016),
    eG = n(975807),
    eX = n(212031),
    eU = n(975571),
    eq = n(481613),
    ez = n.n(eq),
    eV = n(140735),
    e$ = n(77729),
    eH = n(521502),
    eQ = n(915089),
    eW = n(206845),
    eY = n(19575),
    eZ = n(551188);
function eJ() {
    let e = (0, eQ.GV)(),
        t = window.GLOBAL_ENV.RELEASE_CHANNEL,
        n = "536181",
        l = "45aa7ae3fe93013bb1b546eafd0af3c26aaef1f7".substring(0, 7),
        s = e$.A?.app.getVersion(),
        i = e$.A?.app.getBuildNumber(),
        u = e$.A?.app.getAppArch(),
        o = eH.A.getCurrentBuildOverride().overrides?.discord_web,
        c = (function () {
            let e = ez()?.os?.toString();
            if (null == e || null == e$.A) return null;
            let t = e$.A.os.release,
                [n, r, l] = eY.Ay.parsedOSRelease;
            return (
                e.includes("Windows 10") && void 0 !== l && l >= 22e3 && (e = e.replace("Windows 10", "Windows 11")),
                e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n >= 25 ? n + 1 : n - 9}`),
                `${e} (${t})`
            );
        })(),
        d = [t, n, `(${l})`];
    return (
        null != s && (d.push(`Host ${s}`), null != u && d.push(u.toLowerCase()), null != i && d.push(`(${i})`)),
        d.push(`Build Override: ${null != o ? o.id : "N/A"}`),
        null != c && d.push(c),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eW.A, {
                    copyValue: d.join(" "),
                    text: G.intl.string(G.t["9Al4Qd"]),
                    "aria-label": !1,
                    dataMeticulousIgnore: "true",
                    children: (c) =>
                        (0, r.jsxs)(O.D, {
                            ...c,
                            "aria-describedby": e,
                            className: A()(eZ.vk, eZ.oE),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: eZ.Cr,
                                    "data-mtctest-ignore": "true",
                                    children: [
                                        (0, r.jsxs)(a.E, {
                                            tag: "span",
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: [
                                                t,
                                                " ",
                                                n,
                                                " ",
                                                (0, r.jsxs)("span", { className: eZ.Pc, children: ["(", l, ")"] }),
                                            ],
                                        }),
                                        null != s &&
                                            (0, r.jsxs)(a.E, {
                                                tag: "span",
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: [
                                                    s,
                                                    null != u &&
                                                        (0, r.jsxs)("span", {
                                                            className: eZ.GI,
                                                            children: [" ", u.toLowerCase()],
                                                        }),
                                                    null != i && (0, r.jsxs)("span", { children: [" (", i, ")"] }),
                                                ],
                                            }),
                                    ],
                                }),
                                null != o &&
                                    (0, r.jsx)(a.E, {
                                        tag: "span",
                                        variant: "text-xxs/normal",
                                        color: "text-muted",
                                        children: (0, r.jsxs)("span", {
                                            className: eZ.Pc,
                                            children: ["Build Override: ", o.id],
                                        }),
                                    }),
                            ],
                        }),
                }),
                (0, r.jsx)(eV.A, { id: e, children: G.intl.string(G.t["9Al4Qd"]) }),
            ],
        })
    );
}
var e0 = n(180131);
function e1(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(eL.W, {
        "data-menu-migrated-auto": !0,
        navId: "settings-footer-more-menu",
        onClose: t,
        onSelect: () => {},
        "aria-label": "More options",
        children: (0, r.jsxs)(eP.rX, {
            children: [
                (0, r.jsx)(eP.Dr, { id: "changelog", label: G.intl.string(G.t.LRmNAl), action: () => (0, eX.j)(!0) }),
                (0, r.jsx)(eP.Dr, {
                    id: "acknowledgements",
                    label: G.intl.string(G.t["0nUKy3"]),
                    action: () => (0, eG.A)(eR.X7G.ACKNOWLEDGEMENTS),
                }),
                (0, r.jsx)(eP.Dr, {
                    id: "support",
                    label: G.intl.string(G.t["Yl/Riu"]),
                    action: () => (0, eG.A)(eU.C),
                }),
            ],
        }),
    });
}
function e9() {
    let e = l.useRef(null);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(eJ, {}),
            (0, r.jsxs)("div", {
                className: e0.yJ,
                children: [
                    (0, r.jsx)(eD.Anchor, {
                        href: eR.X7G.PRIVACY,
                        children: (0, r.jsx)(a.E, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: G.intl.string(G.t["Knf/f/"]),
                        }),
                    }),
                    (0, r.jsx)("span", { className: e0.xE, "aria-hidden": "true", children: "•" }),
                    (0, r.jsx)(eD.Anchor, {
                        href: eR.X7G.TERMS,
                        children: (0, r.jsx)(a.E, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: G.intl.string(G.t.uFSTGq),
                        }),
                    }),
                    (0, r.jsx)("span", { className: e0.xE, "aria-hidden": "true", children: "•" }),
                    (0, r.jsx)(eF.Y, {
                        targetElementRef: e,
                        position: "top",
                        align: "center",
                        spacing: 0,
                        animation: eF.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(e1, { onClose: t });
                        },
                        children: (t, n) =>
                            (0, r.jsx)(eD.Anchor, {
                                ...t,
                                ref: e,
                                useDefaultUnderlineStyles: !1,
                                className: A()(e0.Mj, { [e0.vu]: n.isShown }),
                                children: (0, r.jsx)(a.E, {
                                    tag: "span",
                                    variant: "text-xxs/normal",
                                    color: "currentColor",
                                    children: G.intl.string(G.t["UKOtz+"]),
                                }),
                            }),
                    }),
                ],
            }),
        ],
    });
}
var e2 = n(175665),
    e7 = n(178241),
    e5 = n(779733),
    e3 = n(298859);
let e8 = new Set([e_.X.PROFILE_PANEL, e_.X.SUBSCRIPTIONS_PANEL, e_.X.FAMILY_CENTER_PANEL, e_.X.POGGERMODE_PANEL]),
    e4 = new Map([
        [e_.X.CONNECTIONS_PANEL, s.ImpressionNames.USER_SETTINGS_CONNECTIONS],
        [e_.X.SESSIONS_PANEL, s.ImpressionNames.USER_SETTINGS_SESSIONS],
    ]);
function e6(e) {
    let { target: t, ...n } = e,
        i = eO.A.useField("query"),
        a = l.useCallback(() => {
            eO.A.setState({ query: "" }), h.A.terminate();
        }, []),
        [m, g] = l.useState(!1);
    return (l.useLayoutEffect(() => {
        let e = () => {
            null == eK.default.getCurrentUser() && (g(!0), (0, e5.default)());
        };
        return (
            eT.default.addChangeListener(e),
            () => {
                eT.default.removeChangeListener(e), e2.A.resetState(), d.A.resetState(), u.A.close(), (0, c.ZQ)();
            }
        );
    }, []),
    m)
        ? null
        : (0, r.jsx)(eI, {
              partialRoot: eB.D,
              searchBar: te,
              emptyState: tt,
              sidebarFooter: e9,
              onViewChange: (e) => {
                  e8.has(e) || (0, e7._)(e);
                  let t = e4.get(e);
                  null != t &&
                      (0, o.x)({
                          type: s.ImpressionTypes.PANE,
                          name: t,
                          properties: { source: e2.A.getField("source") },
                      }),
                      e2.A.setState({ source: void 0 });
              },
              target: t,
              defaultTarget: e_.X.ACCOUNT_PANEL,
              searchQuery: i,
              clearSearchQuery: a,
              ...n,
          });
}
function te() {
    let e = eO.A.useField("query"),
        t = l.useCallback((e) => {
            eO.A.setState({ query: e }), h.A.maybeTrackQueryEntered();
        }, []),
        n = l.useCallback(() => {
            h.A.isSessionActive() || h.A.initialize();
        }, []),
        s = l.useCallback(() => {
            0 === eO.A.getField("query").trim().length && h.A.terminate();
        }, []),
        a = l.useCallback(() => {
            eO.A.setState({ query: "" }), h.A.terminate();
        }, []);
    return (
        l.useEffect(
            () => () => {
                eO.A.resetState(), h.A.terminate();
            },
            [],
        ),
        (0, r.jsx)("div", {
            className: e3.P,
            children: (0, r.jsx)(i.I, { size: "md", query: e, onFocus: n, onBlur: s, onChange: t, onClear: a }),
        })
    );
}
function tt() {
    return (0, r.jsxs)("div", {
        className: e3.t,
        children: [
            (0, r.jsx)(a.E, { variant: "text-sm/semibold", color: "text-strong", children: G.intl.string(G.t.zihbmv) }),
            (0, r.jsx)(a.E, { variant: "text-sm/normal", color: "text-subtle", children: G.intl.string(G.t.XclvsB) }),
        ],
    });
}
