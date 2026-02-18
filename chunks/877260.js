"use strict";
n.d(t, { L: () => y }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(837381),
    o = n(607399),
    c = n(397927),
    u = n(775602),
    d = n(928039),
    _ = n(379848),
    g = n(97469),
    m = n(933297),
    b = n(894858),
    f = n(188180),
    p = n(985018),
    h = n(658646);
function y(e) {
    let { root: t, footer: n, onClose: a, emptyState: f, searchQuery: y, onSearchChange: C } = e,
        S = b.A.useField("showNavigationMobile"),
        v = i.useRef(null),
        T = i.useMemo(() => {
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
        [k, j] = i.useMemo(() => {
            let e = [],
                n = [];
            return (
                t.layout.forEach((t) => {
                    t.hoisted ? e.push(t) : n.push(t);
                }),
                [e, n]
            );
        }, [t.layout]),
        I = (0, g.NC)(),
        N = (0, d.A)("settings-sidebar", v);
    return (
        i.useEffect(() => {
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
                        v.current?.scrollIntoViewNode({ node: t, padding: 8, animate: !n && !u.A.useReducedMotion });
                    });
                },
                { equalityFn: (e, t) => e === t, fireImmediately: !0 },
            );
            return () => {
                e(), b.A.setState({ disableSidebarScrollAnimate: !0 });
            };
        }, []),
        (0, r.jsx)(c.NPJ, {
            theme: I,
            children: (e) =>
                (0, r.jsx)(_.Ay, {
                    contentTypes: T,
                    children: (t) => {
                        let { visibleContent: i } = t;
                        return (0, r.jsxs)("div", {
                            className: s()(h.pz, e, { [h.Hw]: o.Fr, [h.n7]: S }),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: h.gM,
                                    children: [
                                        o.Fr &&
                                            (0, r.jsx)("div", {
                                                className: h.hg,
                                                children: (0, r.jsx)(c.K0, {
                                                    icon: c.d$L,
                                                    onClick: a,
                                                    variant: "icon-only",
                                                    size: "sm",
                                                    "aria-label": p.intl.string(p.t.cpT0Cq),
                                                }),
                                            }),
                                        (0, r.jsx)("div", {
                                            children: k.map((e) =>
                                                (0, r.jsx)(x, { section: e, visibleContent: i, hoisted: !0 }, e.key),
                                            ),
                                        }),
                                        null != y && null != C && (0, r.jsx)(A, { searchQuery: y, onSearchChange: C }),
                                        null != f && 0 === j.length && (0, r.jsx)(f, {}),
                                    ],
                                }),
                                (0, r.jsx)(l.hD, {
                                    navigator: N,
                                    children: (0, r.jsx)(l.PR, {
                                        children: (e) => {
                                            let { ref: t, ...a } = e;
                                            return (0, r.jsxs)(c.ChK, {
                                                ref: (e) => {
                                                    (v.current = e), (t.current = e?.getScrollerNode() ?? null);
                                                },
                                                className: h.Mt,
                                                fade: !0,
                                                ...a,
                                                children: [
                                                    (0, r.jsx)("nav", {
                                                        className: h.C$,
                                                        children: j.map((e) =>
                                                            (0, r.jsx)(x, { section: e, visibleContent: i }, e.key),
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
function x(e) {
    let { section: t, visibleContent: n, hoisted: i = !1 } = e,
        a = t.useTitle?.();
    return (0, r.jsxs)("ul", {
        className: h.uW,
        "aria-label": a,
        children: [
            null != a &&
                (0, r.jsx)("div", {
                    className: h.a9,
                    children: (0, r.jsx)(c.Heading, {
                        className: h.Pf,
                        variant: "heading-sm/medium",
                        color: "text-muted",
                        children: a,
                    }),
                }),
            t.layout.map((e) => (0, r.jsx)(f.X, { node: e, visibleContent: n, hoisted: i }, e.key)),
        ],
    });
}
function A(e) {
    let { searchQuery: t, onSearchChange: n } = e,
        a = i.useCallback(() => {
            n("");
        }, [n]);
    return (0, r.jsx)("div", {
        className: h.PP,
        children: (0, r.jsx)(c.IWV, { size: "md", query: t, onChange: n, onClear: a }),
    });
}
