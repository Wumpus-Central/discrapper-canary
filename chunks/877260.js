"use strict";
n.d(t, { L: () => y }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(837381),
    o = n(607399),
    u = n(397927),
    c = n(928039),
    d = n(379848),
    h = n(97469),
    f = n(933297),
    m = n(894858),
    g = n(188180),
    v = n(985018),
    p = n(45272);
function y(e) {
    let { root: t, footer: n, onClose: a, emptyState: g, searchQuery: y, onSearchChange: b } = e,
        j = m.A.useField("showNavigationMobile"),
        S = i.useRef(null),
        A = i.useMemo(() => {
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
        [N, C] = i.useMemo(() => {
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
        k = (0, c.A)("settings-sidebar", S);
    return (0, r.jsx)(u.NPJ, {
        theme: E,
        children: (e) =>
            (0, r.jsx)(d.Ay, {
                contentTypes: A,
                children: (t) => {
                    let { visibleContent: i } = t;
                    return (0, r.jsxs)("div", {
                        className: l()(p.pz, e, { [p.Hw]: o.Fr, [p.n7]: j }),
                        children: [
                            (0, r.jsxs)("div", {
                                className: p.gM,
                                children: [
                                    o.Fr &&
                                        (0, r.jsx)("div", {
                                            className: p.hg,
                                            children: (0, r.jsx)(u.K0, {
                                                icon: u.d$L,
                                                onClick: a,
                                                variant: "icon-only",
                                                size: "sm",
                                                "aria-label": v.intl.string(v.t.cpT0Cq),
                                            }),
                                        }),
                                    (0, r.jsx)("div", {
                                        children: N.map((e) =>
                                            (0, r.jsx)(x, { section: e, visibleContent: i, hoisted: !0 }, e.key),
                                        ),
                                    }),
                                    null != y && null != b && (0, r.jsx)(_, { searchQuery: y, onSearchChange: b }),
                                    null != g && 0 === C.length && (0, r.jsx)(g, {}),
                                ],
                            }),
                            (0, r.jsx)(s.hD, {
                                navigator: k,
                                children: (0, r.jsx)(s.PR, {
                                    children: (e) => {
                                        let { ref: t, ...a } = e;
                                        return (0, r.jsxs)(u.ChK, {
                                            "data-settings-sidebar-scroller": !0,
                                            ref: (e) => {
                                                (S.current = e), (t.current = e?.getScrollerNode() ?? null);
                                            },
                                            className: p.Mt,
                                            fade: !0,
                                            ...a,
                                            children: [
                                                (0, r.jsx)("nav", {
                                                    className: p.C$,
                                                    children: C.map((e) =>
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
    });
}
function x(e) {
    let { section: t, visibleContent: n, hoisted: i = !1 } = e,
        a = t.useTitle?.();
    return (0, r.jsxs)("ul", {
        className: p.uW,
        "aria-label": a,
        children: [
            null != a &&
                (0, r.jsx)("div", {
                    className: p.a9,
                    children: (0, r.jsx)(u.Heading, {
                        className: p.Pf,
                        variant: "heading-sm/medium",
                        color: "text-muted",
                        children: a,
                    }),
                }),
            t.layout.map((e) => (0, r.jsx)(g.X, { node: e, visibleContent: n, hoisted: i }, e.key)),
        ],
    });
}
function _(e) {
    let { searchQuery: t, onSearchChange: n } = e,
        a = i.useCallback(() => {
            n("");
        }, [n]);
    return (0, r.jsx)("div", {
        className: p.PP,
        children: (0, r.jsx)(u.IWV, { size: "md", query: t, onChange: n, onClear: a }),
    });
}
