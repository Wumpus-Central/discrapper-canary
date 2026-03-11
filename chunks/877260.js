"use strict";
n.d(t, { L: () => b }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(837381),
    o = n(607399),
    c = n(397927),
    u = n(928039),
    d = n(932001),
    m = n(97469),
    f = n(199966),
    g = n(894858),
    h = n(397274),
    p = n(189857),
    y = n(188180),
    _ = n(133457),
    x = n(985018),
    v = n(45272);
function b(e) {
    let { root: t, footer: n, onClose: a, emptyState: y, searchQuery: b, onSearchChange: N } = e,
        S = g.A.useField("showNavigationMobile"),
        C = i.useRef(null),
        [k] = i.useState(t),
        { accessibleDirectory: E } = (0, f._)(),
        w = i.useMemo(() => (0, p.Z)(k, E), [k, E]),
        [I] = (0, d.kn)(w.allDismissibleContents);
    (0, _.B)({ visibleContent: I, dismissibleBadges: w, accessibleDirectory: E });
    let [T, R] = i.useMemo(() => {
            let e = [],
                n = [];
            return (
                t.layout.forEach((t) => {
                    t.hoisted ? e.push(t) : n.push(t);
                }),
                [e, n]
            );
        }, [t.layout]),
        P = (0, m.NC)(),
        D = (0, u.A)("settings-sidebar", C);
    return (0, r.jsx)(c.NPJ, {
        theme: P,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: s()(v.pz, e, { [v.Hw]: o.Fr, [v.n7]: S }),
                children: [
                    (0, r.jsxs)("div", {
                        className: v.gM,
                        children: [
                            o.Fr &&
                                (0, r.jsx)("div", {
                                    className: v.hg,
                                    children: (0, r.jsx)(c.K0, {
                                        icon: c.d$L,
                                        onClick: a,
                                        variant: "icon-only",
                                        size: "sm",
                                        "aria-label": x.intl.string(x.t.cpT0Cq),
                                    }),
                                }),
                            (0, r.jsx)("div", {
                                children: T.map((e) =>
                                    (0, r.jsx)(
                                        A,
                                        { section: e, visibleContent: I, dismissibleBadges: w, hoisted: !0 },
                                        e.key,
                                    ),
                                ),
                            }),
                            null != b && null != N && (0, r.jsx)(j, { searchQuery: b, onSearchChange: N }),
                            null != y && 0 === R.length && (0, r.jsx)(y, {}),
                        ],
                    }),
                    (0, r.jsx)(l.hD, {
                        navigator: D,
                        children: (0, r.jsx)(l.PR, {
                            children: (e) => {
                                let { ref: t, ...i } = e;
                                return (0, r.jsxs)(c.ChK, {
                                    ref: (e) => {
                                        (C.current = e),
                                            h.A.setSidebarScrollerRef(e),
                                            (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: v.Mt,
                                    fade: !0,
                                    ...i,
                                    children: [
                                        (0, r.jsx)("nav", {
                                            className: v.C$,
                                            children: R.map((e) =>
                                                (0, r.jsx)(
                                                    A,
                                                    { section: e, visibleContent: I, dismissibleBadges: w },
                                                    e.key,
                                                ),
                                            ),
                                        }),
                                        null != n && (0, r.jsx)(n, {}),
                                    ],
                                });
                            },
                        }),
                    }),
                ],
            }),
    });
}
function A(e) {
    let { section: t, visibleContent: n, dismissibleBadges: i, hoisted: a = !1 } = e,
        s = t.useTitle?.();
    return (0, r.jsxs)("ul", {
        className: v.uW,
        "aria-label": s,
        children: [
            null != s &&
                (0, r.jsx)("div", {
                    className: v.a9,
                    children: (0, r.jsx)(c.Heading, {
                        className: v.Pf,
                        variant: "heading-sm/medium",
                        color: "text-muted",
                        children: s,
                    }),
                }),
            t.layout.map((e) =>
                (0, r.jsx)(y.X, { node: e, visibleContent: n, dismissibleBadges: i, hoisted: a }, e.key),
            ),
        ],
    });
}
function j(e) {
    let { searchQuery: t, onSearchChange: n } = e,
        a = i.useCallback(() => {
            n("");
        }, [n]);
    return (0, r.jsx)("div", {
        className: v.PP,
        children: (0, r.jsx)(c.IWV, { size: "md", query: t, onChange: n, onClear: a }),
    });
}
