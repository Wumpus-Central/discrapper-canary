n.d(t, { L: () => v }), n(321073);
var r = n(627968),
    a = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(837381),
    o = n(607399),
    c = n(554146),
    u = n(397927),
    d = n(775602),
    _ = n(928039),
    m = n(379848),
    h = n(97469),
    x = n(933297),
    y = n(894858),
    g = n(130177),
    p = n(188180),
    b = n(985018),
    f = n(658646);
function v(e) {
    let { root: t, footer: n, onClose: l, emptyState: c, searchQuery: g, onSearchChange: p } = e,
        v = y.A.useField("showNavigationMobile"),
        A = a.useRef(null),
        C = a.useMemo(() => {
            let e = [];
            return (
                t.layout.forEach((t) => {
                    let { layout: n } = t;
                    n.forEach((t) => {
                        if (null != t.trailing)
                            switch (t.trailing.type) {
                                case x.S.BADGE_NEW:
                                case x.S.STRONGLY_DISCOURAGED_CUSTOM:
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
        E = (0, h.NC)(),
        k = (0, _.A)("settings-sidebar", A);
    return (
        a.useEffect(() => {
            let e = y.A.subscribe(
                (e) => {
                    let { currentPanelKey: t } = e;
                    return t;
                },
                (e) => {
                    if (null == A.current || null == e) return;
                    let t = A.current.getScrollerNode()?.querySelector(`[data-settings-sidebar-item="${e}"]`);
                    if (null == t) return;
                    let n = y.A.getField("disableSidebarScrollAnimate");
                    requestAnimationFrame(() => {
                        A.current?.scrollIntoViewNode({ node: t, padding: 8, animate: !n && !d.A.useReducedMotion });
                    });
                },
                { equalityFn: (e, t) => e === t, fireImmediately: !0 },
            );
            return () => {
                e(), y.A.setState({ disableSidebarScrollAnimate: !0 });
            };
        }, []),
        (0, r.jsx)(u.NPJ, {
            theme: E,
            children: (e) =>
                (0, r.jsx)(m.Ay, {
                    contentTypes: C,
                    children: (t) => {
                        let { visibleContent: a } = t;
                        return (0, r.jsxs)("div", {
                            className: i()(f.pz, e, { [f.Hw]: o.Fr, [f.n7]: v }),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: f.gM,
                                    children: [
                                        o.Fr &&
                                            (0, r.jsx)("div", {
                                                className: f.hg,
                                                children: (0, r.jsx)(u.K0, {
                                                    icon: u.d$L,
                                                    onClick: l,
                                                    variant: "icon-only",
                                                    size: "sm",
                                                    "aria-label": b.intl.string(b.t.cpT0Cq),
                                                }),
                                            }),
                                        (0, r.jsx)("div", {
                                            children: N.map((e) =>
                                                (0, r.jsx)(j, { section: e, visibleContent: a, hoisted: !0 }, e.key),
                                            ),
                                        }),
                                        null != g && null != p && (0, r.jsx)(S, { searchQuery: g, onSearchChange: p }),
                                        null != c && 0 === T.length && (0, r.jsx)(c, {}),
                                    ],
                                }),
                                (0, r.jsx)(s.hD, {
                                    navigator: k,
                                    children: (0, r.jsx)(s.PR, {
                                        children: (e) => {
                                            let { ref: t, ...l } = e;
                                            return (0, r.jsxs)(u.ChK, {
                                                ref: (e) => {
                                                    (A.current = e), (t.current = e?.getScrollerNode() ?? null);
                                                },
                                                className: f.Mt,
                                                fade: !0,
                                                ...l,
                                                children: [
                                                    (0, r.jsx)("nav", {
                                                        className: f.C$,
                                                        children: T.map((e) =>
                                                            (0, r.jsx)(j, { section: e, visibleContent: a }, e.key),
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
function j(e) {
    let { section: t, visibleContent: n, hoisted: a = !1 } = e,
        l = t.useTitle?.();
    return (0, r.jsxs)("ul", {
        className: f.uW,
        "aria-label": l,
        children: [
            null != l &&
                (0, r.jsx)("div", {
                    className: f.a9,
                    children: (0, r.jsx)(u.Heading, {
                        className: f.Pf,
                        variant: "heading-sm/medium",
                        color: "text-muted",
                        children: l,
                    }),
                }),
            t.layout.map((e) => (0, r.jsx)(p.X, { node: e, visibleContent: n, hoisted: a }, e.key)),
        ],
    });
}
function S(e) {
    let { searchQuery: t, onSearchChange: n } = e,
        l = a.useRef(null),
        [i, s] = (0, m.kn)([c.M.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER]),
        o = a.useCallback(() => {
            n("");
        }, [n]),
        d = a.useMemo(
            () => ({
                title: b.intl.string(b.t.Kv519a),
                body: b.intl.string(b.t.cTGJBZ),
                badge: "new",
                position: "right",
                align: "center",
                scrollBehavior: "sticky",
            }),
            [],
        );
    return (0, r.jsxs)("div", {
        className: f.PP,
        children: [
            (0, r.jsx)(u.IWV, { size: "md", query: t, onChange: n, onClear: o }),
            (0, r.jsx)("div", { className: f.To, ref: l }),
            (0, r.jsx)(g.A, {
                dismissibleContentType: c.M.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER,
                targetElementRef: l,
                visibleContent: i,
                markAsDismissed: s,
                props: d,
            }),
        ],
    });
}
