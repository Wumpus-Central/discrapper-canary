"use strict";
n.d(t, { L: () => v }), n(321073);
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
    y = n(189857),
    p = n(188180),
    _ = n(133457),
    x = n(985018),
    b = n(658646);
function v(e) {
    let { root: t, onClose: n, footer: a, emptyState: p, searchBar: v } = e,
        j = g.A.useField("showNavigationMobile"),
        S = i.useRef(null),
        [N] = i.useState(t),
        { accessibleDirectory: C } = (0, f._)(),
        k = i.useMemo(() => (0, y.Z)(N, C), [N, C]),
        [E] = (0, d.kn)(k.allDismissibleContents);
    (0, _.B)({ visibleContent: E, dismissibleBadges: k, accessibleDirectory: C });
    let [w, I] = i.useMemo(() => {
            let e = [],
                n = [];
            return (
                t.layout.forEach((t) => {
                    t.hoisted ? e.push(t) : n.push(t);
                }),
                [e, n]
            );
        }, [t.layout]),
        T = (0, m.NC)(),
        R = (0, u.A)("settings-sidebar", S);
    return (0, r.jsx)(c.NPJ, {
        theme: T,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: s()(b.pz, e, { [b.Hw]: o.Fr, [b.n7]: j }),
                children: [
                    (0, r.jsxs)("div", {
                        className: b.gM,
                        children: [
                            o.Fr &&
                                (0, r.jsx)("div", {
                                    className: b.hg,
                                    children: (0, r.jsx)(c.K0, {
                                        icon: c.d$L,
                                        onClick: n,
                                        variant: "icon-only",
                                        size: "sm",
                                        "aria-label": x.intl.string(x.t.cpT0Cq),
                                    }),
                                }),
                            (0, r.jsx)("div", {
                                children: w.map((e) =>
                                    (0, r.jsx)(
                                        A,
                                        { section: e, visibleContent: E, dismissibleBadges: k, hoisted: !0 },
                                        e.key,
                                    ),
                                ),
                            }),
                            null != v && (0, r.jsx)(v, {}),
                            null != p && 0 === I.length && (0, r.jsx)(p, {}),
                        ],
                    }),
                    (0, r.jsx)(l.hD, {
                        navigator: R,
                        children: (0, r.jsx)(l.PR, {
                            children: (e) => {
                                let { ref: t, ...n } = e;
                                return (0, r.jsxs)(c.ChK, {
                                    ref: (e) => {
                                        (S.current = e),
                                            h.A.setSidebarScrollerRef(e),
                                            (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: b.Mt,
                                    fade: !0,
                                    ...n,
                                    children: [
                                        (0, r.jsx)("nav", {
                                            className: b.C$,
                                            children: I.map((e) =>
                                                (0, r.jsx)(
                                                    A,
                                                    { section: e, visibleContent: E, dismissibleBadges: k },
                                                    e.key,
                                                ),
                                            ),
                                        }),
                                        null != a && (0, r.jsx)(a, {}),
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
        className: b.uW,
        "aria-label": s,
        children: [
            null != s &&
                (0, r.jsx)("div", {
                    className: b.a9,
                    children: (0, r.jsx)(c.Heading, {
                        className: b.Pf,
                        variant: "heading-sm/medium",
                        color: "text-muted",
                        children: s,
                    }),
                }),
            t.layout.map((e) =>
                (0, r.jsx)(p.X, { node: e, visibleContent: n, dismissibleBadges: i, hoisted: a }, e.key),
            ),
        ],
    });
}
