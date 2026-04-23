"use strict";
n.d(t, { default: () => e8 });
var r = n(627968),
    i = n(64700),
    a = n(110259),
    l = n(892547),
    s = n(834730),
    o = n(252452),
    c = n(139286),
    u = n(200921),
    d = n(507553),
    _ = n(89381),
    f = n(17928),
    h = n(521489),
    p = n(568602),
    m = n(775602),
    g = n(531685),
    b = n(625494),
    v = n(964486);
n(667532), n(134528), n(947204);
var E = n(503698),
    y = n.n(E),
    x = n(607399),
    S = n(408278),
    A = n(477155),
    C = n(43990),
    N = n(331322),
    I = n(668953),
    T = n(972213),
    j = n(97469),
    R = n(963935),
    w = n(894858),
    k = n(272053),
    D = n(121881),
    O = n(939249),
    L = n(508770),
    B = n(777666),
    U = n(933297);
function F(e) {
    let { badge: t } = e;
    return t.useCustomBadge();
}
function P(e) {
    let { badge: t } = e,
        n = t.useCount();
    return n <= 0 ? null : (0, r.jsx)(B.hV, { count: n });
}
let M = function (e) {
    let { badge: t } = e;
    switch (t.badgeType) {
        case U.Xi.BETA:
            return (0, r.jsx)(L.E, { type: "beta", variant: "brand" });
        case U.Xi.COUNT:
            return (0, r.jsx)(P, { badge: t });
        case U.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(F, { badge: t });
    }
};
var G = n(985018),
    K = n(508891);
function H(e) {
    let { node: t, isLast: n } = e,
        i = t.useTitle(),
        a = t.usePersistentBadge?.(),
        l = (0, r.jsxs)(N.B, {
            direction: "horizontal",
            align: "center",
            gap: "xs",
            className: K.Ze,
            children: [
                (0, r.jsx)(s.E, {
                    variant: n ? "text-md/medium" : "text-md/normal",
                    color: n ? "text-default" : void 0,
                    className: K.b,
                    children: i,
                }),
                n && null != a && (0, r.jsx)(M, { badge: a }),
                !n &&
                    (0, r.jsx)(s.E, {
                        variant: "text-md/normal",
                        color: "interactive-text-default",
                        "aria-hidden": !0,
                        children: "/",
                    }),
            ],
        });
    return (0, r.jsx)("li", {
        "aria-current": n ? "page" : void 0,
        className: K.QF,
        children: n
            ? l
            : (0, r.jsx)(O.D, {
                  onClick: () => {
                      k.A.navigate(t.key);
                  },
                  className: K.vk,
                  children: l,
              }),
    });
}
function V(e) {
    let { path: t } = e;
    return (0, r.jsx)("nav", {
        "aria-label": G.intl.string(G.t["bM+M/m"]),
        className: K.m7,
        children: (0, r.jsx)(N.B, {
            direction: "horizontal",
            role: "list",
            className: K.jD,
            children: t.map((e, n) => (0, r.jsx)(H, { node: e, isLast: n === t.length - 1 }, e.key)),
        }),
    });
}
var W = n(441562);
function X(e) {
    let { icon: t, label: n, onClick: i } = e;
    return (0, r.jsx)(S.K, { onClick: i, icon: t, size: "sm", variant: "icon-only", "aria-label": n });
}
function z(e) {
    let { setting: t, onClose: n } = e,
        i = (0, j.NC)(),
        a =
            null != t
                ? (function (e) {
                      let t = [e];
                      for (let n = e.parent; null != n && n.type !== R.Z6.SIDEBAR_ITEM; n = n.parent)
                          n.type === R.Z6.PANEL && t.unshift(n);
                      return t;
                  })(t)
                : [],
        l = a.at(-2),
        s = x.Fr && a.length <= 1,
        o = a.length > 1 && null != l;
    return (0, r.jsx)(C.N, {
        theme: i,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: y()(W.$Q, e, { [W.HW]: s || o }),
                children: [
                    (0, r.jsxs)(N.B, {
                        direction: "horizontal",
                        align: "center",
                        className: W.y9,
                        children: [
                            s &&
                                (0, r.jsx)(X, {
                                    icon: I.f,
                                    onClick: () => w.A.setState({ showNavigationMobile: !0 }),
                                    label: G.intl.string(G.t["13/7kX"]),
                                }),
                            o &&
                                (0, r.jsx)(X, {
                                    icon: A.r,
                                    onClick: () => k.A.navigate(l.key),
                                    label: G.intl.string(G.t["13/7kX"]),
                                }),
                            null != t && (0, r.jsx)(V, { path: a }),
                        ],
                    }),
                    (0, r.jsx)(X, { icon: T.d, onClick: n, label: G.intl.string(G.t.cpT0Cq) }),
                ],
            }),
    });
}
let q = i.memo(function (e) {
    let { onClose: t, setting: n } = e,
        i = w.A.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: y()(W.Qs, { [W.Hw]: x.Fr, [W.n7]: i }),
        children: [
            (0, r.jsx)(z, { setting: n, onClose: t }),
            (0, r.jsx)("div", { className: W.yp, children: null != n && (0, r.jsx)(D.A, { node: n }) }),
        ],
    });
});
n(321073);
var Q = n(837381),
    $ = n(689175),
    Z = n(534514),
    Y = n(928039),
    J = n(932001),
    ee = n(199966),
    et = n(397274);
function en(e, t, n) {
    let { nodeKeyToDismissibleContents: r, dismissibleContentToBadge: i } = n,
        a = r.get(e);
    return null != t && null != a && a.has(t) ? i.get(t) : null;
}
var er = n(661531);
let ei = function (e) {
    let { badge: t } = e;
    switch (t.badgeType) {
        case U.Xi.NEW:
            return (0, r.jsx)(L.E, { type: "new", variant: "brand" });
        case U.Xi.STRONGLY_DISCOURAGED_CUSTOM:
            let { StronglyDiscouragedCustomComponent: n } = t;
            return (0, r.jsx)(n, {});
    }
};
var ea = n(284009),
    el = n.n(ea),
    es = n(419354),
    eo = n(935399),
    ec = n(319354),
    eu = n(717421),
    ed = n(253932),
    e_ = n(429566);
function ef(e) {
    let { category: t, onClick: n, active: i, dismissibleBadge: a } = e,
        { useTitle: l, useSubnavLabel: s, key: o } = t,
        c = l?.(),
        u = s?.() ?? c;
    return (
        el()(null != u, "[SettingsSubnavigationCategory] Category must have a title"),
        (0, r.jsx)(Q.tG, {
            id: o,
            children: (e) =>
                (0, r.jsxs)(
                    O.D,
                    {
                        onClick: n,
                        className: y()(e_.AS, { [e_.vu]: i }),
                        ...e,
                        "aria-current": i ? "page" : void 0,
                        children: [u, null != a && !i && (0, r.jsx)(ei, { badge: a })],
                    },
                    o,
                ),
        })
    );
}
function eh(e) {
    let t,
        n,
        a,
        l,
        { active: s, isTopLevelPanelVisible: o, visibleCategories: c, visibleContent: u, dismissibleBadges: d } = e,
        _ = w.A.useField("currentCategoryKey"),
        [f, h] = i.useState(s);
    i.useLayoutEffect(() => {
        s && h(!0);
    }, [s]);
    let p = i.useMemo(() => c.findIndex((e) => e.key === _), [c, _]);
    i.useEffect(() => {
        if (!s) {
            let e = m.current;
            null != e &&
                ((e.style.height = `${e.scrollHeight}px`),
                window.getComputedStyle(e).height,
                (e.style.height = "0"),
                Promise.allSettled(e.getAnimations().map((e) => e.finished)).then(() => {
                    h(!1);
                }));
        }
    }, [s]);
    let m = i.useRef(null),
        [g, b] = i.useState(s ? "auto" : "0");
    return (
        (t = i.useRef(null)),
        (n = i.useRef(new Set())),
        (a = i.useRef(!1)),
        (l = i.useMemo(() => {
            let e = new Set();
            return c.forEach((t) => e.add(t.key)), e;
        }, [c])),
        i.useEffect(() => {
            if (!o) return;
            let e = et.A.getPanelScrollerNode();
            if (null == e) return;
            let r = e.querySelectorAll("[data-settings-category-key]"),
                i = e.querySelector("[data-panel-bottom]"),
                s = [];
            Array.from(r).forEach((e) => {
                let t = e.getAttribute("data-settings-category-key");
                null != t && l.has(t) && s.push(e);
            });
            let c = new Map(),
                u = [];
            return (
                s.forEach((e) => {
                    let t = e.getAttribute("data-settings-category-key");
                    null != t && (c.set(e, t), u.push(t));
                }),
                (t.current = new IntersectionObserver(
                    (t) => {
                        if (
                            (t.forEach((t) => {
                                let { isIntersecting: r, target: l } = t;
                                if (l === i) {
                                    let t = e.scrollHeight > e.clientHeight;
                                    a.current = r && t;
                                    return;
                                }
                                let s = c.get(l);
                                null != s && (r ? n.current.add(s) : n.current.delete(s));
                            }),
                            !et.A.getIsSidebarCategoryAutoSelectEnabled())
                        )
                            return;
                        let r = [];
                        if (
                            (u.forEach((e) => {
                                n.current.has(e) && r.push(e);
                            }),
                            0 === r.length)
                        )
                            return;
                        let l = r.at(a.current ? -1 : 0);
                        w.A.getField("currentCategoryKey") !== l && w.A.setState({ currentCategoryKey: l });
                    },
                    { root: e, rootMargin: "0px 100000px 0px 100000px", threshold: 1 },
                )),
                s.forEach((e) => t.current?.observe(e)),
                null != i && t.current?.observe(i),
                () => {
                    s.forEach((e) => t.current?.unobserve(e)),
                        null != i && t.current?.unobserve(i),
                        t.current?.disconnect(),
                        (t.current = null);
                }
            );
        }, [l, o]),
        (0, r.jsx)("div", {
            className: e_.lK,
            style: { height: g, opacity: +!!s },
            ref: m,
            children:
                f &&
                (0, r.jsx)(ep, {
                    index: p,
                    activeKey: _,
                    categories: c,
                    visibleContent: u,
                    dismissibleBadges: d,
                    onMount: function () {
                        let e = m.current;
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
function ep(e) {
    let { index: t, activeKey: n, categories: a, visibleContent: l, dismissibleBadges: s, onMount: o } = e,
        {
            thumbRef: c,
            trackRef: u,
            thumbAnchorRef: d,
            springs: _,
        } = (function (e) {
            let t = ed.Xi.useSetting(),
                n = i.useRef(null),
                r = i.useRef(null),
                a = i.useRef(null),
                l = i.useRef(!0),
                s = i.useRef(t),
                o = i.useRef(e),
                [c, u] = (0, eu.z)(() => ({ y: 0, height: 0, config: { mass: 0.1, friction: 20, tension: 300 } }));
            return (
                i.useLayoutEffect(() => {
                    let i = s.current !== t,
                        d = () => {
                            if (null == n.current || null == r.current || null == a.current) return;
                            let [d, _] = [n.current.getBoundingClientRect(), a.current.getBoundingClientRect()],
                                f = d.width / 2,
                                h = (_.y - d.y) / f,
                                p = _.height / f;
                            l.current || i || m.A.useReducedMotion || -1 === o.current
                                ? (c.y.set(h), c.height.set(p))
                                : u({ y: h, height: p }),
                                (l.current = !1),
                                (s.current = t),
                                (o.current = e);
                        },
                        _ = null;
                    return (
                        i
                            ? (_ = requestAnimationFrame(() => {
                                  (_ = null), d();
                              }))
                            : d(),
                        () => {
                            null != _ && cancelAnimationFrame(_);
                        }
                    );
                }, [e, u, c.y, c.height, t]),
                { thumbRef: r, trackRef: n, thumbAnchorRef: a, springs: c }
            );
        })(t);
    return (
        (0, eo.Ay)(o),
        (0, r.jsxs)("div", {
            className: e_.o8,
            role: "list",
            style: {
                "--custom-nav-count": a.length,
                "--custom-nav-index": Math.max(t, 0),
                "--custom-nav-width": "2px",
                "--custom-icon-size": `${ec.E[eg]}px`,
            },
            children: [
                (0, r.jsx)("div", {
                    className: e_.u4,
                    "aria-hidden": "true",
                    ref: u,
                    children: (0, r.jsx)(es.animated.div, {
                        className: y()(e_.FF, { [e_.R]: null == n }),
                        style: _,
                        ref: c,
                    }),
                }),
                (0, r.jsx)("div", { className: e_.gu, "aria-hidden": "true", ref: d }),
                a.map((e) => {
                    let t = en(e.key, l, s);
                    return (0, r.jsx)(
                        ef,
                        {
                            onClick: () => {
                                var t;
                                return (t = e.key), void k.A.navigate(t, { showNavigationMobile: !1 });
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
var em = n(585635);
let eg = "refresh_sm";
function eb(e) {
    let { tag: t, onClick: n, active: a, node: l, dismissibleBadge: o, panelKey: c, listItemProps: u, children: d } = e,
        {
            icon: _,
            StronglyDiscouragedCustomComponent: f,
            usePersistentBadge: h,
            useTitle: p,
            variant: m = "default",
        } = l,
        g = p?.(),
        b = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return "text-feedback-critical";
            }
        })(m),
        v = (function (e) {
            switch (e) {
                case "default":
                    return "currentColor";
                case "destructive":
                    return er.A.colors.ICON_FEEDBACK_CRITICAL;
            }
        })(m),
        E = h?.(a),
        x = i.useMemo(
            () =>
                null != o
                    ? a
                        ? null
                        : (0, r.jsx)(ei, { badge: o })
                    : null != E
                      ? (0, r.jsx)(M, { badge: E })
                      : void 0,
            [a, o, E],
        );
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": c,
        className: em.DB,
        children: [
            (0, r.jsxs)(O.D, {
                ...u,
                className: y()(em.AS, { [em.vu]: a, [em.RD]: "destructive" === m }),
                "aria-current": a ? "page" : void 0,
                onClick: n,
                children: [
                    null != f
                        ? (0, r.jsx)(f, {})
                        : (0, r.jsxs)("div", {
                              className: em.Ly,
                              children: [
                                  (0, r.jsx)(_, { color: v, size: eg, className: em.Kk }),
                                  (0, r.jsx)(s.E, { variant: "text-md/medium", color: b, children: g }),
                              ],
                          }),
                    x,
                ],
            }),
            d,
        ],
    });
}
function ev(e) {
    let { node: t, visibleContent: n, dismissibleBadges: a, hoisted: l = !1 } = e,
        s = i.useMemo(() => t.layout[0], [t]),
        o = w.A.useField("currentPanelKey"),
        { accessibleDirectory: c } = (0, ee._)(),
        u = s?.key === o,
        d = i.useMemo(() => {
            if (null == o) return !1;
            let e = c.entry(o);
            return e?.parentSidebarItemKey === t.key;
        }, [o, t.key, c]),
        _ = i.useMemo(() => {
            if (null == s || !(0, R.Iu)(s.layout)) return null;
            let e = s.layout.filter(R.bJ);
            return e.length > 1 ? e : null;
        }, [s]),
        f =
            null != s
                ? () => {
                      let e = o === s.key && null != _ ? _[0].key : s.key;
                      k.A.navigate(e, { animateSidebarScroll: !0, showNavigationMobile: !1 });
                  }
                : t.onClick,
        h = null != o,
        p = i.useMemo(
            () =>
                null != _ && h
                    ? (0, r.jsx)(eh, {
                          active: d,
                          isTopLevelPanelVisible: u,
                          visibleCategories: _,
                          visibleContent: n,
                          dismissibleBadges: a,
                      })
                    : null,
            [_, h, d, u, n, a],
        ),
        m = l ? "li" : "div",
        g = i.useMemo(() => en(t.key, n, a), [t.key, n, a]);
    return l
        ? (0, r.jsx)(eb, { tag: m, panelKey: s?.key, onClick: f, active: d, node: t, dismissibleBadge: g, children: p })
        : (0, r.jsx)(Q.tG, {
              id: t.key,
              children: (e) =>
                  (0, r.jsx)(eb, {
                      tag: m,
                      panelKey: s?.key,
                      onClick: f,
                      active: d,
                      node: t,
                      dismissibleBadge: g,
                      listItemProps: e,
                      children: p,
                  }),
          });
}
var eE = n(826673),
    ey = n(49999),
    ex = n(443263);
function eS(e) {
    let { root: t, onClose: n, footer: a, emptyState: l, searchBar: s } = e,
        o = w.A.useField("showNavigationMobile"),
        c = i.useRef(null),
        [u] = i.useState(t),
        { accessibleDirectory: d } = (0, ee._)(),
        _ = i.useMemo(() => {
            let e, t, n, r;
            return (
                (e = []),
                (t = new Map()),
                (n = new Map()),
                (r = new Map()),
                !(function e(t, n) {
                    if ((n(t), (0, R.nW)(t))) for (let r of t.layout) e(r, n);
                })(u, (i) => {
                    if (!("getDismissibleBadges" in i)) return;
                    let a = i.getDismissibleBadges?.();
                    if (null == a) return;
                    let l = d.entry(i.key);
                    if (l?.parentSidebarItemKey == null) return;
                    let s = null;
                    if (null != l.parentCategoryKey) {
                        let e = d.get(l.parentCategoryKey);
                        e?.type === R.Z6.CATEGORY && (0, R.bJ)(e) && (s = l.parentCategoryKey);
                    }
                    let o = { sidebarItemKey: l.parentSidebarItemKey, categoryKey: s };
                    a.forEach((i) =>
                        (function (i, a) {
                            let { dismissibleContent: l } = i;
                            e.push(l), t.set(l, a), r.set(l, i);
                            let s = n.get(a.sidebarItemKey) ?? new Set();
                            if ((s.add(l), n.set(a.sidebarItemKey, s), null != a.categoryKey)) {
                                let e = n.get(a.categoryKey) ?? new Set();
                                e.add(l), n.set(a.categoryKey, e);
                            }
                        })(i, o),
                    );
                }),
                {
                    allDismissibleContents: e,
                    dismissibleContentToNodeKeys: t,
                    nodeKeyToDismissibleContents: n,
                    dismissibleContentToBadge: r,
                }
            );
        }, [u, d]),
        [f] = (0, J.kn)(_.allDismissibleContents);
    !(function (e) {
        let { visibleContent: t, dismissibleBadges: n, accessibleDirectory: r } = e,
            { dismissibleContentToNodeKeys: a, nodeKeyToDismissibleContents: l } = n,
            s = i.useRef(!1);
        i.useEffect(() => {
            if (((s.current = !1), null == t || !a.has(t))) return;
            let e = a.get(t);
            if (null == e) return;
            let n = () => {
                    s.current = !1;
                    let t = l.get(e.sidebarItemKey);
                    null != t &&
                        t.forEach((e) => {
                            (0, eE.Dr)(e, { dismissAction: ey.i.AUTO, forceTrack: !0 });
                        });
                },
                i = w.A.subscribe(
                    (e) => {
                        let { currentPanelKey: t } = e;
                        return t;
                    },
                    (t) => {
                        let i = null != t && null != r ? r.entry(t)?.parentSidebarItemKey : null;
                        null != i && (i === e.sidebarItemKey ? (s.current = !0) : s.current && n());
                    },
                    { equalityFn: (e, t) => e === t, fireImmediately: !0 },
                );
            return () => {
                i(), s.current && n();
            };
        }, [t, a, r, l]);
    })({ visibleContent: f, dismissibleBadges: _, accessibleDirectory: d });
    let [h, p] = i.useMemo(() => {
            let e = [],
                n = [];
            return (
                t.layout.forEach((t) => {
                    t.hoisted ? e.push(t) : n.push(t);
                }),
                [e, n]
            );
        }, [t.layout]),
        m = (0, j.NC)(),
        g = (0, Y.A)("settings-sidebar", c);
    return (0, r.jsx)(C.N, {
        theme: m,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: y()(ex.pz, e, { [ex.Hw]: x.Fr, [ex.n7]: o }),
                children: [
                    (0, r.jsxs)("div", {
                        className: ex.gM,
                        children: [
                            x.Fr &&
                                (0, r.jsx)("div", {
                                    className: ex.hg,
                                    children: (0, r.jsx)(S.K, {
                                        icon: T.d,
                                        onClick: n,
                                        variant: "icon-only",
                                        size: "sm",
                                        "aria-label": G.intl.string(G.t.cpT0Cq),
                                    }),
                                }),
                            (0, r.jsx)("div", {
                                children: h.map((e) =>
                                    (0, r.jsx)(
                                        eA,
                                        { section: e, visibleContent: f, dismissibleBadges: _, hoisted: !0 },
                                        e.key,
                                    ),
                                ),
                            }),
                            null != s && (0, r.jsx)(s, {}),
                            null != l && 0 === p.length && (0, r.jsx)(l, {}),
                        ],
                    }),
                    (0, r.jsx)(Q.hD, {
                        navigator: g,
                        children: (0, r.jsx)(Q.PR, {
                            children: (e) => {
                                let { ref: t, ...n } = e;
                                return (0, r.jsxs)($.Ch, {
                                    ref: (e) => {
                                        (c.current = e),
                                            et.A.setSidebarScrollerRef(e),
                                            (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: ex.Mt,
                                    fade: !0,
                                    ...n,
                                    children: [
                                        (0, r.jsx)("nav", {
                                            className: ex.C$,
                                            children: p.map((e) =>
                                                (0, r.jsx)(
                                                    eA,
                                                    { section: e, visibleContent: f, dismissibleBadges: _ },
                                                    e.key,
                                                ),
                                            ),
                                        }),
                                        null != a && (0, r.jsx)(a, {}),
                                    ],
                                });
                            },
                        }),
                    }),
                ],
            }),
    });
}
function eA(e) {
    let { section: t, visibleContent: n, dismissibleBadges: i, hoisted: a = !1 } = e,
        l = t.useTitle?.();
    return (0, r.jsxs)("ul", {
        className: ex.uW,
        "aria-label": l,
        children: [
            null != l &&
                (0, r.jsx)("div", {
                    className: ex.a9,
                    children: (0, r.jsx)(Z.D, {
                        className: ex.Pf,
                        variant: "heading-sm/medium",
                        color: "text-muted",
                        children: l,
                    }),
                }),
            t.layout.map((e) =>
                (0, r.jsx)(ev, { node: e, visibleContent: n, dismissibleBadges: i, hoisted: a }, e.key),
            ),
        ],
    });
}
var eC = n(823092),
    eN = n(581298),
    eI = n(910772);
function eT(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: a,
            onClose: l,
            sidebarFooter: s,
            searchBar: o,
            onViewChange: c,
            emptyState: u,
            searchQuery: d,
            clearSearchQuery: _,
        } = e,
        f = w.A.useField("currentPanelKey"),
        { node: h, visibleDirectory: p, accessibleDirectory: m } = (0, eN.Ay)(t, d ?? ""),
        g = null != n && p.entry(n)?.parentPanelKey != null ? n : a,
        b = i.useMemo(() => {
            let e = m.entry(f ?? g)?.parentPanelKey;
            if (null != e) return m.getPanelOrThrow(e);
        }, [f, m, g]),
        { navigateWithValidation: E } = (0, eC.L_)(),
        y = i.useMemo(() => () => E(l), [E, l]);
    i.useEffect(() => {
        k.A.init({
            accessibleDirectory: m,
            onViewChange: c,
            navigateWithValidation: (e, t) => {
                null == p.entry(e) && _?.(), E(t);
            },
            closeWithValidation: y,
        });
    }, [m, E, c, _, p, y]);
    let [x, S] = i.useState(!0);
    (0, v.Ay)(
        () => (
            k.A.navigate(g, { animatePanelScroll: !1, animateSidebarScroll: !1, showNavigationMobile: null == n }),
            S(!1),
            () => {
                k.A.reset(), et.A.reset(), w.A.resetState();
            }
        ),
    );
    let A = i.useMemo(() => ({ visibleDirectory: p, accessibleDirectory: m }), [p, m]),
        C = null != f ? p.get(f) : void 0;
    return (0, r.jsx)(ee.x.Provider, {
        value: A,
        children: (0, r.jsxs)("div", {
            className: eI.k,
            children: [
                (0, r.jsx)(eS, { root: h, onClose: y, footer: s, emptyState: u, searchBar: o }),
                (0, r.jsx)(q, { onClose: y, setting: x ? void 0 : (C ?? b) }),
            ],
        }),
    });
}
function ej(e) {
    return (0, r.jsx)(eC.ms, { children: (0, r.jsx)(eT, { ...e }) });
}
var eR = n(652215);
function ew(e) {
    let {
            partialRoot: t,
            target: n,
            defaultTarget: a,
            onViewChange: l,
            sidebarFooter: s,
            emptyState: o,
            searchQuery: c,
            clearSearchQuery: u,
            searchBar: d,
            ..._
        } = e,
        [v, E] = i.useState(!1),
        [y, x] = i.useState(1.4),
        S = i.useRef(null),
        A = (0, f.bG)([m.A], () => m.A.useReducedMotion),
        C = (0, f.bG)([g.A], () => g.A.isFocused());
    return (
        i.useEffect(() => {
            let e = (e) => {
                let { intensity: t, duration: n } = e;
                !A &&
                    C &&
                    (E(!0), x(t ?? 1.4), clearTimeout(S.current), (S.current = setTimeout(() => E(!1), n ?? 1e3)));
            };
            return (
                b._.subscribe(eR.jej.SHAKE_SETTINGS_MODAL, e),
                () => {
                    b._.unsubscribe(eR.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(S.current);
                }
            );
        }, [A, C]),
        (0, r.jsx)(p.b, {
            isShaking: v,
            intensity: y,
            children: (0, r.jsx)(h.N, {
                ..._,
                children: (0, r.jsx)(ej, {
                    onClose: _.onClose,
                    partialRoot: t,
                    target: n,
                    defaultTarget: a,
                    onViewChange: l,
                    emptyState: o,
                    sidebarFooter: s,
                    searchQuery: c,
                    clearSearchQuery: u,
                    searchBar: d,
                }),
            }),
        })
    );
}
var ek = n(495544),
    eD = n(287809),
    eO = n(152056),
    eL = n(780964),
    eB = n(166151),
    eU = n(550079),
    eF = n(477782),
    eP = n(349288),
    eM = n(922016),
    eG = n(975807),
    eK = n(212031),
    eH = n(975571),
    eV = n(481613),
    eW = n.n(eV),
    eX = n(140735),
    ez = n(77729),
    eq = n(521502),
    eQ = n(915089),
    e$ = n(206845),
    eZ = n(19575),
    eY = n(551188);
function eJ() {
    let e = (0, eQ.GV)(),
        t = window.GLOBAL_ENV.RELEASE_CHANNEL,
        n = "534472",
        i = "52593f200c6bff87d4e9f15cac52972b5aba7150".substring(0, 7),
        a = ez.A?.app.getVersion(),
        l = ez.A?.app.getBuildNumber(),
        o = ez.A?.app.getAppArch(),
        c = eq.A.getCurrentBuildOverride().overrides?.discord_web,
        u = (function () {
            let e = eW()?.os?.toString();
            if (null == e || null == ez.A) return null;
            let t = ez.A.os.release,
                [n, r, i] = eZ.Ay.parsedOSRelease;
            return (
                e.includes("Windows 10") && void 0 !== i && i >= 22e3 && (e = e.replace("Windows 10", "Windows 11")),
                e.includes("OS X 10.15.7") && void 0 !== n && n >= 20 && (e = `macOS ${n >= 25 ? n + 1 : n - 9}`),
                `${e} (${t})`
            );
        })(),
        d = [t, n, `(${i})`];
    return (
        null != a && (d.push(`Host ${a}`), null != o && d.push(o.toLowerCase()), null != l && d.push(`(${l})`)),
        d.push(`Build Override: ${null != c ? c.id : "N/A"}`),
        null != u && d.push(u),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(e$.A, {
                    copyValue: d.join(" "),
                    text: G.intl.string(G.t["9Al4Qd"]),
                    "aria-label": !1,
                    dataMeticulousIgnore: "true",
                    children: (u) =>
                        (0, r.jsxs)(O.D, {
                            ...u,
                            "aria-describedby": e,
                            className: y()(eY.vk, eY.oE),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: eY.Cr,
                                    "data-mtctest-ignore": "true",
                                    children: [
                                        (0, r.jsxs)(s.E, {
                                            tag: "span",
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: [
                                                t,
                                                " ",
                                                n,
                                                " ",
                                                (0, r.jsxs)("span", { className: eY.Pc, children: ["(", i, ")"] }),
                                            ],
                                        }),
                                        null != a &&
                                            (0, r.jsxs)(s.E, {
                                                tag: "span",
                                                variant: "text-xxs/normal",
                                                color: "text-muted",
                                                children: [
                                                    a,
                                                    null != o &&
                                                        (0, r.jsxs)("span", {
                                                            className: eY.GI,
                                                            children: [" ", o.toLowerCase()],
                                                        }),
                                                    null != l && (0, r.jsxs)("span", { children: [" (", l, ")"] }),
                                                ],
                                            }),
                                    ],
                                }),
                                null != c &&
                                    (0, r.jsx)(s.E, {
                                        tag: "span",
                                        variant: "text-xxs/normal",
                                        color: "text-muted",
                                        children: (0, r.jsxs)("span", {
                                            className: eY.Pc,
                                            children: ["Build Override: ", c.id],
                                        }),
                                    }),
                            ],
                        }),
                }),
                (0, r.jsx)(eX.A, { id: e, children: G.intl.string(G.t["9Al4Qd"]) }),
            ],
        })
    );
}
var e0 = n(180131);
function e1(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(eU.W, {
        "data-menu-migrated-auto": !0,
        navId: "settings-footer-more-menu",
        onClose: t,
        onSelect: () => {},
        "aria-label": "More options",
        children: (0, r.jsxs)(eF.rX, {
            children: [
                (0, r.jsx)(eF.Dr, { id: "changelog", label: G.intl.string(G.t.LRmNAl), action: () => (0, eK.j)(!0) }),
                (0, r.jsx)(eF.Dr, {
                    id: "acknowledgements",
                    label: G.intl.string(G.t["0nUKy3"]),
                    action: () => (0, eG.A)(eR.X7G.ACKNOWLEDGEMENTS),
                }),
                (0, r.jsx)(eF.Dr, {
                    id: "support",
                    label: G.intl.string(G.t["Yl/Riu"]),
                    action: () => (0, eG.A)(eH.C),
                }),
            ],
        }),
    });
}
function e6() {
    let e = i.useRef(null);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(eJ, {}),
            (0, r.jsxs)("div", {
                className: e0.yJ,
                children: [
                    (0, r.jsx)(eP.Anchor, {
                        href: eR.X7G.PRIVACY,
                        children: (0, r.jsx)(s.E, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: G.intl.string(G.t["Knf/f/"]),
                        }),
                    }),
                    (0, r.jsx)("span", { className: e0.xE, "aria-hidden": "true", children: "•" }),
                    (0, r.jsx)(eP.Anchor, {
                        href: eR.X7G.TERMS,
                        children: (0, r.jsx)(s.E, {
                            tag: "span",
                            variant: "text-xxs/normal",
                            color: "currentColor",
                            children: G.intl.string(G.t.uFSTGq),
                        }),
                    }),
                    (0, r.jsx)("span", { className: e0.xE, "aria-hidden": "true", children: "•" }),
                    (0, r.jsx)(eM.Y, {
                        targetElementRef: e,
                        position: "top",
                        align: "center",
                        spacing: 0,
                        animation: eM.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(e1, { onClose: t });
                        },
                        children: (t, n) =>
                            (0, r.jsx)(eP.Anchor, {
                                ...t,
                                ref: e,
                                useDefaultUnderlineStyles: !1,
                                className: y()(e0.Mj, { [e0.vu]: n.isShown }),
                                children: (0, r.jsx)(s.E, {
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
var e5 = n(175665),
    e9 = n(178241),
    e2 = n(779733),
    e3 = n(298859);
let e7 = new Set([eL.X.PROFILE_PANEL, eL.X.SUBSCRIPTIONS_PANEL, eL.X.FAMILY_CENTER_PANEL, eL.X.POGGERMODE_PANEL]),
    e4 = new Map([
        [eL.X.CONNECTIONS_PANEL, a.ImpressionNames.USER_SETTINGS_CONNECTIONS],
        [eL.X.SESSIONS_PANEL, a.ImpressionNames.USER_SETTINGS_SESSIONS],
    ]);
function e8(e) {
    let { target: t, ...n } = e,
        l = eO.A.useField("query"),
        s = i.useCallback(() => {
            eO.A.setState({ query: "" }), _.A.terminate();
        }, []),
        [f, h] = i.useState(!1);
    return (i.useLayoutEffect(() => {
        let e = () => {
            null == eD.default.getCurrentUser() && (h(!0), (0, e2.default)());
        };
        return (
            ek.default.addChangeListener(e),
            () => {
                ek.default.removeChangeListener(e), e5.A.resetState(), d.A.resetState(), o.A.close(), (0, u.ZQ)();
            }
        );
    }, []),
    f)
        ? null
        : (0, r.jsx)(ew, {
              partialRoot: eB.D,
              searchBar: te,
              emptyState: tt,
              sidebarFooter: e6,
              onViewChange: (e) => {
                  e7.has(e) || (0, e9._)(e);
                  let t = e4.get(e);
                  null != t &&
                      (0, c.x)({
                          type: a.ImpressionTypes.PANE,
                          name: t,
                          properties: { source: e5.A.getField("source") },
                      }),
                      e5.A.setState({ source: void 0 });
              },
              target: t,
              defaultTarget: eL.X.ACCOUNT_PANEL,
              searchQuery: l,
              clearSearchQuery: s,
              ...n,
          });
}
function te() {
    let e = eO.A.useField("query"),
        t = i.useCallback((e) => {
            eO.A.setState({ query: e }), _.A.maybeTrackQueryEntered();
        }, []),
        n = i.useCallback(() => {
            _.A.isSessionActive() || _.A.initialize();
        }, []),
        a = i.useCallback(() => {
            0 === eO.A.getField("query").trim().length && _.A.terminate();
        }, []),
        s = i.useCallback(() => {
            eO.A.setState({ query: "" }), _.A.terminate();
        }, []);
    return (
        i.useEffect(
            () => () => {
                eO.A.resetState(), _.A.terminate();
            },
            [],
        ),
        (0, r.jsx)("div", {
            className: e3.P,
            children: (0, r.jsx)(l.I, { size: "md", query: e, onFocus: n, onBlur: a, onChange: t, onClear: s }),
        })
    );
}
function tt() {
    return (0, r.jsxs)("div", {
        className: e3.t,
        children: [
            (0, r.jsx)(s.E, { variant: "text-sm/semibold", color: "text-strong", children: G.intl.string(G.t.zihbmv) }),
            (0, r.jsx)(s.E, { variant: "text-sm/normal", color: "text-subtle", children: G.intl.string(G.t.XclvsB) }),
        ],
    });
}
