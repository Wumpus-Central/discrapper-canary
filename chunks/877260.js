"use strict";
n.d(t, { L: () => x }), n(321073);
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(837381),
    o = n(607399),
    u = n(397927),
    c = n(775602),
    d = n(928039),
    h = n(379848),
    g = n(97469),
    f = n(933297),
    m = n(894858),
    y = n(188180),
    p = n(985018),
    v = n(45272);
function x(e) {
    let { root: t, footer: n, onClose: i, emptyState: y, searchQuery: x, onSearchChange: S } = e,
        _ = m.A.useField("showNavigationMobile"),
        j = a.useRef(null),
        N = a.useMemo(() => {
            let e = [];
            return (
                t.layout.forEach((t) => {
                    let { layout: n } = t;
                    n.forEach((t) => {
                        if (null != t.trailing)
                            switch (t.trailing.type) {
                                case f.Si.BADGE_NEW:
                                case f.Si.STRONGLY_DISCOURAGED_CUSTOM:
                                    t.trailing.getDismissibleContentTypes?.()?.forEach((t) => {
                                        e.push(t);
                                    });
                            }
                    });
                }),
                e
            );
        }, [t.layout]),
        [C, E] = a.useMemo(() => {
            let e = [],
                n = [];
            return (
                t.layout.forEach((t) => {
                    t.hoisted ? e.push(t) : n.push(t);
                }),
                [e, n]
            );
        }, [t.layout]),
        T = (0, g.NC)(),
        k = (0, d.A)("settings-sidebar", j);
    return (
        a.useEffect(() => {
            let e = m.A.subscribe(
                (e) => {
                    let { currentPanelKey: t } = e;
                    return t;
                },
                (e) => {
                    if (null == j.current || null == e) return;
                    let t = j.current.getScrollerNode()?.querySelector(`[data-settings-sidebar-item="${e}"]`);
                    if (null == t) return;
                    let n = m.A.getField("disableSidebarScrollAnimate");
                    requestAnimationFrame(() => {
                        j.current?.scrollIntoViewNode({ node: t, padding: 8, animate: !n && !c.A.useReducedMotion });
                    });
                },
                { equalityFn: (e, t) => e === t, fireImmediately: !0 },
            );
            return () => {
                e(), m.A.setState({ disableSidebarScrollAnimate: !0 });
            };
        }, []),
        (0, r.jsx)(u.NPJ, {
            theme: T,
            children: (e) =>
                (0, r.jsx)(h.Ay, {
                    contentTypes: N,
                    children: (t) => {
                        let { visibleContent: a } = t;
                        return (0, r.jsxs)("div", {
                            className: l()(v.pz, e, { [v.Hw]: o.Fr, [v.n7]: _ }),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: v.gM,
                                    children: [
                                        o.Fr &&
                                            (0, r.jsx)("div", {
                                                className: v.hg,
                                                children: (0, r.jsx)(u.K0, {
                                                    icon: u.d$L,
                                                    onClick: i,
                                                    variant: "icon-only",
                                                    size: "sm",
                                                    "aria-label": p.intl.string(p.t.cpT0Cq),
                                                }),
                                            }),
                                        (0, r.jsx)("div", {
                                            children: C.map((e) =>
                                                (0, r.jsx)(b, { section: e, visibleContent: a, hoisted: !0 }, e.key),
                                            ),
                                        }),
                                        null != x && null != S && (0, r.jsx)(A, { searchQuery: x, onSearchChange: S }),
                                        null != y && 0 === E.length && (0, r.jsx)(y, {}),
                                    ],
                                }),
                                (0, r.jsx)(s.hD, {
                                    navigator: k,
                                    children: (0, r.jsx)(s.PR, {
                                        children: (e) => {
                                            let { ref: t, ...i } = e;
                                            return (0, r.jsxs)(u.ChK, {
                                                ref: (e) => {
                                                    (j.current = e), (t.current = e?.getScrollerNode() ?? null);
                                                },
                                                className: v.Mt,
                                                fade: !0,
                                                ...i,
                                                children: [
                                                    (0, r.jsx)("nav", {
                                                        className: v.C$,
                                                        children: E.map((e) =>
                                                            (0, r.jsx)(b, { section: e, visibleContent: a }, e.key),
                                                        ),
                                                    }),
                                                    null != n && (0, r.jsx)(n, {}),
                                                ],
                                            });
                                        },
                                    }),
                                }),
                            ],
                        });
                    },
                }),
        })
    );
}
function b(e) {
    let { section: t, visibleContent: n, hoisted: a = !1 } = e,
        i = t.useTitle?.();
    return (0, r.jsxs)("ul", {
        className: v.uW,
        "aria-label": i,
        children: [
            null != i &&
                (0, r.jsx)("div", {
                    className: v.a9,
                    children: (0, r.jsx)(u.Heading, {
                        className: v.Pf,
                        variant: "heading-sm/medium",
                        color: "text-muted",
                        children: i,
                    }),
                }),
            t.layout.map((e) => (0, r.jsx)(y.X, { node: e, visibleContent: n, hoisted: a }, e.key)),
        ],
    });
}
function A(e) {
    let { searchQuery: t, onSearchChange: n } = e,
        i = a.useCallback(() => {
            n("");
        }, [n]);
    return (0, r.jsx)("div", {
        className: v.PP,
        children: (0, r.jsx)(u.IWV, { size: "md", query: t, onChange: n, onClear: i }),
    });
}
