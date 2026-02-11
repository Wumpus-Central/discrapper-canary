n.d(t, { L: () => h }), n(321073);
var a = n(627968),
    r = n(64700),
    i = n(503698),
    o = n.n(i),
    l = n(837381),
    s = n(607399),
    c = n(397927),
    d = n(775602),
    u = n(928039),
    _ = n(379848),
    g = n(97469),
    m = n(933297),
    b = n(894858),
    f = n(188180),
    p = n(985018),
    x = n(45272);
function h(e) {
    let { root: t, footer: n, onClose: i, emptyState: f, searchQuery: h, onSearchChange: C } = e,
        S = b.A.useField("showNavigationMobile"),
        v = r.useRef(null),
        T = r.useMemo(() => {
            let e = [];
            return (
                t.layout.forEach((t) => {
                    let { layout: n } = t;
                    n.forEach((t) => {
                        if (null != t.trailing)
                            switch (t.trailing.type) {
                                case m.Si.BADGE_NEW:
                                case m.Si.STRONGLY_DISCOURAGED_CUSTOM:
                                    t.trailing.getDismissibleContentTypes?.()?.forEach((t) => {
                                        e.push(t);
                                    });
                            }
                    });
                }),
                e
            );
        }, [t.layout]),
        [j, k] = r.useMemo(() => {
            let e = [],
                n = [];
            return (
                t.layout.forEach((t) => {
                    t.hoisted ? e.push(t) : n.push(t);
                }),
                [e, n]
            );
        }, [t.layout]),
        N = (0, g.NC)(),
        I = (0, u.A)("settings-sidebar", v);
    return (
        r.useEffect(() => {
            let e = b.A.subscribe(
                (e) => {
                    let { currentPanelKey: t } = e;
                    return t;
                },
                (e) => {
                    if (null == v.current || null == e) return;
                    let t = v.current.getScrollerNode()?.querySelector(`[data-settings-sidebar-item="${e}"]`);
                    if (null == t) return;
                    let n = b.A.getField("disableSidebarScrollAnimate");
                    requestAnimationFrame(() => {
                        v.current?.scrollIntoViewNode({ node: t, padding: 8, animate: !n && !d.A.useReducedMotion });
                    });
                },
                { equalityFn: (e, t) => e === t, fireImmediately: !0 },
            );
            return () => {
                e(), b.A.setState({ disableSidebarScrollAnimate: !0 });
            };
        }, []),
        (0, a.jsx)(c.NPJ, {
            theme: N,
            children: (e) =>
                (0, a.jsx)(_.Ay, {
                    contentTypes: T,
                    children: (t) => {
                        let { visibleContent: r } = t;
                        return (0, a.jsxs)("div", {
                            className: o()(x.pz, e, { [x.Hw]: s.Fr, [x.n7]: S }),
                            children: [
                                (0, a.jsxs)("div", {
                                    className: x.gM,
                                    children: [
                                        s.Fr &&
                                            (0, a.jsx)("div", {
                                                className: x.hg,
                                                children: (0, a.jsx)(c.K0, {
                                                    icon: c.d$L,
                                                    onClick: i,
                                                    variant: "icon-only",
                                                    size: "sm",
                                                    "aria-label": p.intl.string(p.t.cpT0Cq),
                                                }),
                                            }),
                                        (0, a.jsx)("div", {
                                            children: j.map((e) =>
                                                (0, a.jsx)(y, { section: e, visibleContent: r, hoisted: !0 }, e.key),
                                            ),
                                        }),
                                        null != h && null != C && (0, a.jsx)(A, { searchQuery: h, onSearchChange: C }),
                                        null != f && 0 === k.length && (0, a.jsx)(f, {}),
                                    ],
                                }),
                                (0, a.jsx)(l.hD, {
                                    navigator: I,
                                    children: (0, a.jsx)(l.PR, {
                                        children: (e) => {
                                            let { ref: t, ...i } = e;
                                            return (0, a.jsxs)(c.ChK, {
                                                ref: (e) => {
                                                    (v.current = e), (t.current = e?.getScrollerNode() ?? null);
                                                },
                                                className: x.Mt,
                                                fade: !0,
                                                ...i,
                                                children: [
                                                    (0, a.jsx)("nav", {
                                                        className: x.C$,
                                                        children: k.map((e) =>
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
        className: x.uW,
        "aria-label": i,
        children: [
            null != i &&
                (0, a.jsx)("div", {
                    className: x.a9,
                    children: (0, a.jsx)(c.Heading, {
                        className: x.Pf,
                        variant: "heading-sm/medium",
                        color: "text-muted",
                        children: i,
                    }),
                }),
            t.layout.map((e) => (0, a.jsx)(f.X, { node: e, visibleContent: n, hoisted: r }, e.key)),
        ],
    });
}
function A(e) {
    let { searchQuery: t, onSearchChange: n } = e,
        i = r.useCallback(() => {
            n("");
        }, [n]);
    return (0, a.jsx)("div", {
        className: x.PP,
        children: (0, a.jsx)(c.IWV, { size: "md", query: t, onChange: n, onClear: i }),
    });
}
