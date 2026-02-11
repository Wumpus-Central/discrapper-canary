n.d(t, { L: () => p }), n(321073);
var r = n(627968),
    a = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(837381),
    o = n(607399),
    c = n(397927),
    u = n(775602),
    d = n(928039),
    _ = n(379848),
    m = n(97469),
    x = n(933297),
    h = n(894858),
    y = n(188180),
    g = n(985018),
    b = n(658646);
function p(e) {
    let { root: t, footer: n, onClose: l, emptyState: y, searchQuery: p, onSearchChange: j } = e,
        A = h.A.useField("showNavigationMobile"),
        C = a.useRef(null),
        S = a.useMemo(() => {
            let e = [];
            return (
                t.layout.forEach((t) => {
                    let { layout: n } = t;
                    n.forEach((t) => {
                        if (null != t.trailing)
                            switch (t.trailing.type) {
                                case x.Si.BADGE_NEW:
                                case x.Si.STRONGLY_DISCOURAGED_CUSTOM:
                                    t.trailing.getDismissibleContentTypes?.()?.forEach((t) => {
                                        e.push(t);
                                    });
                            }
                    });
                }),
                e
            );
        }, [t.layout]),
        [N, T] = a.useMemo(() => {
            let e = [],
                n = [];
            return (
                t.layout.forEach((t) => {
                    t.hoisted ? e.push(t) : n.push(t);
                }),
                [e, n]
            );
        }, [t.layout]),
        k = (0, m.NC)(),
        E = (0, d.A)("settings-sidebar", C);
    return (
        a.useEffect(() => {
            let e = h.A.subscribe(
                (e) => {
                    let { currentPanelKey: t } = e;
                    return t;
                },
                (e) => {
                    if (null == C.current || null == e) return;
                    let t = C.current.getScrollerNode()?.querySelector(`[data-settings-sidebar-item="${e}"]`);
                    if (null == t) return;
                    let n = h.A.getField("disableSidebarScrollAnimate");
                    requestAnimationFrame(() => {
                        C.current?.scrollIntoViewNode({ node: t, padding: 8, animate: !n && !u.A.useReducedMotion });
                    });
                },
                { equalityFn: (e, t) => e === t, fireImmediately: !0 },
            );
            return () => {
                e(), h.A.setState({ disableSidebarScrollAnimate: !0 });
            };
        }, []),
        (0, r.jsx)(c.NPJ, {
            theme: k,
            children: (e) =>
                (0, r.jsx)(_.Ay, {
                    contentTypes: S,
                    children: (t) => {
                        let { visibleContent: a } = t;
                        return (0, r.jsxs)("div", {
                            className: i()(b.pz, e, { [b.Hw]: o.Fr, [b.n7]: A }),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: b.gM,
                                    children: [
                                        o.Fr &&
                                            (0, r.jsx)("div", {
                                                className: b.hg,
                                                children: (0, r.jsx)(c.K0, {
                                                    icon: c.d$L,
                                                    onClick: l,
                                                    variant: "icon-only",
                                                    size: "sm",
                                                    "aria-label": g.intl.string(g.t.cpT0Cq),
                                                }),
                                            }),
                                        (0, r.jsx)("div", {
                                            children: N.map((e) =>
                                                (0, r.jsx)(f, { section: e, visibleContent: a, hoisted: !0 }, e.key),
                                            ),
                                        }),
                                        null != p && null != j && (0, r.jsx)(v, { searchQuery: p, onSearchChange: j }),
                                        null != y && 0 === T.length && (0, r.jsx)(y, {}),
                                    ],
                                }),
                                (0, r.jsx)(s.hD, {
                                    navigator: E,
                                    children: (0, r.jsx)(s.PR, {
                                        children: (e) => {
                                            let { ref: t, ...l } = e;
                                            return (0, r.jsxs)(c.ChK, {
                                                ref: (e) => {
                                                    (C.current = e), (t.current = e?.getScrollerNode() ?? null);
                                                },
                                                className: b.Mt,
                                                fade: !0,
                                                ...l,
                                                children: [
                                                    (0, r.jsx)("nav", {
                                                        className: b.C$,
                                                        children: T.map((e) =>
                                                            (0, r.jsx)(f, { section: e, visibleContent: a }, e.key),
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
function f(e) {
    let { section: t, visibleContent: n, hoisted: a = !1 } = e,
        l = t.useTitle?.();
    return (0, r.jsxs)("ul", {
        className: b.uW,
        "aria-label": l,
        children: [
            null != l &&
                (0, r.jsx)("div", {
                    className: b.a9,
                    children: (0, r.jsx)(c.Heading, {
                        className: b.Pf,
                        variant: "heading-sm/medium",
                        color: "text-muted",
                        children: l,
                    }),
                }),
            t.layout.map((e) => (0, r.jsx)(y.X, { node: e, visibleContent: n, hoisted: a }, e.key)),
        ],
    });
}
function v(e) {
    let { searchQuery: t, onSearchChange: n } = e,
        l = a.useCallback(() => {
            n("");
        }, [n]);
    return (0, r.jsx)("div", {
        className: b.PP,
        children: (0, r.jsx)(c.IWV, { size: "md", query: t, onChange: n, onClear: l }),
    });
}
