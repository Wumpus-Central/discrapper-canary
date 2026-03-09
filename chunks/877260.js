"use strict";
n.d(t, { L: () => x }), n(321073);
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
    g = n(397274),
    v = n(188180),
    p = n(985018),
    y = n(658646);
function x(e) {
    let { root: t, footer: n, onClose: a, emptyState: v, searchQuery: x, onSearchChange: j } = e,
        S = m.A.useField("showNavigationMobile"),
        A = i.useRef(null),
        N = i.useMemo(() => {
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
        [C, E] = i.useMemo(() => {
            let e = [],
                n = [];
            return (
                t.layout.forEach((t) => {
                    t.hoisted ? e.push(t) : n.push(t);
                }),
                [e, n]
            );
        }, [t.layout]),
        k = (0, h.NC)(),
        w = (0, c.A)("settings-sidebar", A);
    return (0, r.jsx)(u.NPJ, {
        theme: k,
        children: (e) =>
            (0, r.jsx)(d.Ay, {
                contentTypes: N,
                children: (t) => {
                    let { visibleContent: i } = t;
                    return (0, r.jsxs)("div", {
                        className: l()(y.pz, e, { [y.Hw]: o.Fr, [y.n7]: S }),
                        children: [
                            (0, r.jsxs)("div", {
                                className: y.gM,
                                children: [
                                    o.Fr &&
                                        (0, r.jsx)("div", {
                                            className: y.hg,
                                            children: (0, r.jsx)(u.K0, {
                                                icon: u.d$L,
                                                onClick: a,
                                                variant: "icon-only",
                                                size: "sm",
                                                "aria-label": p.intl.string(p.t.cpT0Cq),
                                            }),
                                        }),
                                    (0, r.jsx)("div", {
                                        children: C.map((e) =>
                                            (0, r.jsx)(_, { section: e, visibleContent: i, hoisted: !0 }, e.key),
                                        ),
                                    }),
                                    null != x && null != j && (0, r.jsx)(b, { searchQuery: x, onSearchChange: j }),
                                    null != v && 0 === E.length && (0, r.jsx)(v, {}),
                                ],
                            }),
                            (0, r.jsx)(s.hD, {
                                navigator: w,
                                children: (0, r.jsx)(s.PR, {
                                    children: (e) => {
                                        let { ref: t, ...a } = e;
                                        return (0, r.jsxs)(u.ChK, {
                                            ref: (e) => {
                                                (A.current = e),
                                                    g.A.setSidebarScrollerRef(e),
                                                    (t.current = e?.getScrollerNode() ?? null);
                                            },
                                            className: y.Mt,
                                            fade: !0,
                                            ...a,
                                            children: [
                                                (0, r.jsx)("nav", {
                                                    className: y.C$,
                                                    children: E.map((e) =>
                                                        (0, r.jsx)(_, { section: e, visibleContent: i }, e.key),
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
function _(e) {
    let { section: t, visibleContent: n, hoisted: i = !1 } = e,
        a = t.useTitle?.();
    return (0, r.jsxs)("ul", {
        className: y.uW,
        "aria-label": a,
        children: [
            null != a &&
                (0, r.jsx)("div", {
                    className: y.a9,
                    children: (0, r.jsx)(u.Heading, {
                        className: y.Pf,
                        variant: "heading-sm/medium",
                        color: "text-muted",
                        children: a,
                    }),
                }),
            t.layout.map((e) => (0, r.jsx)(v.X, { node: e, visibleContent: n, hoisted: i }, e.key)),
        ],
    });
}
function b(e) {
    let { searchQuery: t, onSearchChange: n } = e,
        a = i.useCallback(() => {
            n("");
        }, [n]);
    return (0, r.jsx)("div", {
        className: y.PP,
        children: (0, r.jsx)(u.IWV, { size: "md", query: t, onChange: n, onClear: a }),
    });
}
