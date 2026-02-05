n.d(t, { L: () => C }), n(321073);
var r = n(627968),
    a = n(64700),
    o = n(503698),
    i = n.n(o),
    l = n(837381),
    s = n(607399),
    c = n(554146),
    _ = n(397927),
    u = n(775602),
    d = n(928039),
    b = n(379848),
    m = n(97469),
    g = n(933297),
    p = n(894858),
    f = n(130177),
    x = n(188180),
    h = n(985018),
    y = n(658646);
function C(e) {
    let { root: t, footer: n, onClose: o, emptyState: c, searchQuery: f, onSearchChange: x } = e,
        C = p.A.useField("showNavigationMobile"),
        j = a.useRef(null),
        A = a.useMemo(() => {
            let e = [];
            return (
                t.layout.forEach((t) => {
                    let { layout: n } = t;
                    n.forEach((t) => {
                        if (null != t.trailing)
                            switch (t.trailing.type) {
                                case g.S.BADGE_NEW:
                                case g.S.STRONGLY_DISCOURAGED_CUSTOM:
                                    t.trailing.getDismissibleContentTypes?.()?.forEach((t) => {
                                        e.push(t);
                                    });
                            }
                    });
                }),
                e
            );
        }, [t.layout]),
        [T, k] = a.useMemo(() => {
            let e = [],
                n = [];
            return (
                t.layout.forEach((t) => {
                    t.hoisted ? e.push(t) : n.push(t);
                }),
                [e, n]
            );
        }, [t.layout]),
        N = (0, m.NC)(),
        E = (0, d.A)("settings-sidebar", j),
        I = p.A.useField("currentPanelKey");
    return (
        a.useEffect(() => {
            if (null == j.current || null == I) return;
            let e = p.A.getField("navTransition"),
                t = null == e || e.animateScroll,
                n = j.current.getScrollerNode()?.querySelector(`[data-settings-sidebar-item="${I}"]`);
            null != n && j.current.scrollIntoViewNode({ node: n, padding: 8, animate: !u.A.useReducedMotion && t });
        }, [I]),
        (0, r.jsx)(_.NPJ, {
            theme: N,
            children: (e) =>
                (0, r.jsx)(b.Ay, {
                    contentTypes: A,
                    children: (t) => {
                        let { visibleContent: a } = t;
                        return (0, r.jsxs)("div", {
                            className: i()(y.pz, e, { [y.Hw]: s.Fr, [y.n7]: C }),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: y.gM,
                                    children: [
                                        s.Fr &&
                                            (0, r.jsx)("div", {
                                                className: y.hg,
                                                children: (0, r.jsx)(_.K0, {
                                                    icon: _.d$L,
                                                    onClick: o,
                                                    variant: "icon-only",
                                                    size: "sm",
                                                    "aria-label": h.intl.string(h.t.cpT0Cq),
                                                }),
                                            }),
                                        (0, r.jsx)("div", {
                                            children: T.map((e) =>
                                                (0, r.jsx)(S, { section: e, visibleContent: a, hoisted: !0 }, e.key),
                                            ),
                                        }),
                                        null != f && null != x && (0, r.jsx)(v, { searchQuery: f, onSearchChange: x }),
                                        null != c && 0 === k.length && (0, r.jsx)(c, {}),
                                    ],
                                }),
                                (0, r.jsx)(l.hD, {
                                    navigator: E,
                                    children: (0, r.jsx)(l.PR, {
                                        children: (e) => {
                                            let { ref: t, ...o } = e;
                                            return (0, r.jsxs)(_.ChK, {
                                                ref: (e) => {
                                                    (j.current = e), (t.current = e?.getScrollerNode() ?? null);
                                                },
                                                className: y.Mt,
                                                fade: !0,
                                                ...o,
                                                children: [
                                                    (0, r.jsx)("nav", {
                                                        className: y.C$,
                                                        children: k.map((e) =>
                                                            (0, r.jsx)(S, { section: e, visibleContent: a }, e.key),
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
function S(e) {
    let { section: t, visibleContent: n, hoisted: a = !1 } = e,
        o = t.useTitle?.();
    return (0, r.jsxs)("ul", {
        className: y.uW,
        "aria-label": o,
        children: [
            null != o &&
                (0, r.jsx)("div", {
                    className: y.a9,
                    children: (0, r.jsx)(_.Heading, {
                        className: y.Pf,
                        variant: "heading-sm/medium",
                        color: "text-muted",
                        children: o,
                    }),
                }),
            t.layout.map((e) => (0, r.jsx)(x.X, { node: e, visibleContent: n, hoisted: a }, e.key)),
        ],
    });
}
function v(e) {
    let { searchQuery: t, onSearchChange: n } = e,
        o = a.useRef(null),
        [i, l] = (0, b.kn)([c.M.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER]),
        s = a.useCallback(() => {
            n("");
        }, [n]),
        u = a.useMemo(
            () => ({
                title: h.intl.string(h.t.Kv519a),
                body: h.intl.string(h.t.cTGJBZ),
                badge: "new",
                position: "right",
                align: "center",
                scrollBehavior: "sticky",
            }),
            [],
        );
    return (0, r.jsxs)("div", {
        className: y.PP,
        children: [
            (0, r.jsx)(_.IWV, { size: "md", query: t, onChange: n, onClear: s }),
            (0, r.jsx)("div", { className: y.To, ref: o }),
            (0, r.jsx)(f.A, {
                dismissibleContentType: c.M.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER,
                targetElementRef: o,
                visibleContent: i,
                markAsDismissed: l,
                props: u,
            }),
        ],
    });
}
