"use strict";
n.d(t, { L: () => x }), n(321073);
var a = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    l = n(837381),
    o = n(607399),
    c = n(397927),
    u = n(775602),
    d = n(928039),
    _ = n(379848),
    m = n(97469),
    g = n(933297),
    p = n(894858),
    b = n(188180),
    f = n(985018),
    h = n(45272);
function x(e) {
    let { root: t, footer: n, onClose: i, emptyState: b, searchQuery: x, onSearchChange: A } = e,
        v = p.A.useField("showNavigationMobile"),
        S = r.useRef(null),
        T = r.useMemo(() => {
            let e = [];
            return (
                t.layout.forEach((t) => {
                    let { layout: n } = t;
                    n.forEach((t) => {
                        if (null != t.trailing)
                            switch (t.trailing.type) {
                                case g.Si.BADGE_NEW:
                                case g.Si.STRONGLY_DISCOURAGED_CUSTOM:
                                    t.trailing.getDismissibleContentTypes?.()?.forEach((t) => {
                                        e.push(t);
                                    });
                            }
                    });
                }),
                e
            );
        }, [t.layout]),
        [I, N] = r.useMemo(() => {
            let e = [],
                n = [];
            return (
                t.layout.forEach((t) => {
                    t.hoisted ? e.push(t) : n.push(t);
                }),
                [e, n]
            );
        }, [t.layout]),
        j = (0, m.NC)(),
        k = (0, d.A)("settings-sidebar", S);
    return (
        r.useEffect(() => {
            let e = p.A.subscribe(
                (e) => {
                    let { currentPanelKey: t } = e;
                    return t;
                },
                (e) => {
                    if (null == S.current || null == e) return;
                    let t = S.current.getScrollerNode()?.querySelector(`[data-settings-sidebar-item="${e}"]`);
                    if (null == t) return;
                    let n = p.A.getField("disableSidebarScrollAnimate");
                    requestAnimationFrame(() => {
                        S.current?.scrollIntoViewNode({ node: t, padding: 8, animate: !n && !u.A.useReducedMotion });
                    });
                },
                { equalityFn: (e, t) => e === t, fireImmediately: !0 },
            );
            return () => {
                e(), p.A.setState({ disableSidebarScrollAnimate: !0 });
            };
        }, []),
        (0, a.jsx)(c.NPJ, {
            theme: j,
            children: (e) =>
                (0, a.jsx)(_.Ay, {
                    contentTypes: T,
                    children: (t) => {
                        let { visibleContent: r } = t;
                        return (0, a.jsxs)("div", {
                            className: s()(h.pz, e, { [h.Hw]: o.Fr, [h.n7]: v }),
                            children: [
                                (0, a.jsxs)("div", {
                                    className: h.gM,
                                    children: [
                                        o.Fr &&
                                            (0, a.jsx)("div", {
                                                className: h.hg,
                                                children: (0, a.jsx)(c.K0, {
                                                    icon: c.d$L,
                                                    onClick: i,
                                                    variant: "icon-only",
                                                    size: "sm",
                                                    "aria-label": f.intl.string(f.t.cpT0Cq),
                                                }),
                                            }),
                                        (0, a.jsx)("div", {
                                            children: I.map((e) =>
                                                (0, a.jsx)(y, { section: e, visibleContent: r, hoisted: !0 }, e.key),
                                            ),
                                        }),
                                        null != x && null != A && (0, a.jsx)(C, { searchQuery: x, onSearchChange: A }),
                                        null != b && 0 === N.length && (0, a.jsx)(b, {}),
                                    ],
                                }),
                                (0, a.jsx)(l.hD, {
                                    navigator: k,
                                    children: (0, a.jsx)(l.PR, {
                                        children: (e) => {
                                            let { ref: t, ...i } = e;
                                            return (0, a.jsxs)(c.ChK, {
                                                ref: (e) => {
                                                    (S.current = e), (t.current = e?.getScrollerNode() ?? null);
                                                },
                                                className: h.Mt,
                                                fade: !0,
                                                ...i,
                                                children: [
                                                    (0, a.jsx)("nav", {
                                                        className: h.C$,
                                                        children: N.map((e) =>
                                                            (0, a.jsx)(y, { section: e, visibleContent: r }, e.key),
                                                        ),
                                                    }),
                                                    null != n && (0, a.jsx)(n, {}),
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
function y(e) {
    let { section: t, visibleContent: n, hoisted: r = !1 } = e,
        i = t.useTitle?.();
    return (0, a.jsxs)("ul", {
        className: h.uW,
        "aria-label": i,
        children: [
            null != i &&
                (0, a.jsx)("div", {
                    className: h.a9,
                    children: (0, a.jsx)(c.Heading, {
                        className: h.Pf,
                        variant: "heading-sm/medium",
                        color: "text-muted",
                        children: i,
                    }),
                }),
            t.layout.map((e) => (0, a.jsx)(b.X, { node: e, visibleContent: n, hoisted: r }, e.key)),
        ],
    });
}
function C(e) {
    let { searchQuery: t, onSearchChange: n } = e,
        i = r.useCallback(() => {
            n("");
        }, [n]);
    return (0, a.jsx)("div", {
        className: h.PP,
        children: (0, a.jsx)(c.IWV, { size: "md", query: t, onChange: n, onClear: i }),
    });
}
