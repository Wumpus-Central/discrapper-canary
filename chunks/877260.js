"use strict";
n.d(t, { L: () => A }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(837381),
    o = n(607399),
    u = n(397927),
    c = n(928039),
    d = n(932001),
    f = n(97469),
    m = n(199966),
    g = n(894858),
    h = n(397274),
    y = n(189857),
    p = n(188180),
    v = n(133457),
    x = n(985018),
    b = n(658646);
function A(e) {
    let { root: t, footer: n, onClose: a, emptyState: p, searchQuery: A, onSearchChange: S } = e,
        N = g.A.useField("showNavigationMobile"),
        C = i.useRef(null),
        [k] = i.useState(t),
        { accessibleDirectory: E } = (0, m._)(),
        w = i.useMemo(() => (0, y.Z)(k, E), [k, E]),
        [R] = (0, d.kn)(w.allDismissibleContents);
    (0, v.B)({ visibleContent: R, dismissibleBadges: w, accessibleDirectory: E });
    let [T, I] = i.useMemo(() => {
            let e = [],
                n = [];
            return (
                t.layout.forEach((t) => {
                    t.hoisted ? e.push(t) : n.push(t);
                }),
                [e, n]
            );
        }, [t.layout]),
        P = (0, f.NC)(),
        D = (0, c.A)("settings-sidebar", C);
    return (0, r.jsx)(u.NPJ, {
        theme: P,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: s()(b.pz, e, { [b.Hw]: o.Fr, [b.n7]: N }),
                children: [
                    (0, r.jsxs)("div", {
                        className: b.gM,
                        children: [
                            o.Fr &&
                                (0, r.jsx)("div", {
                                    className: b.hg,
                                    children: (0, r.jsx)(u.K0, {
                                        icon: u.d$L,
                                        onClick: a,
                                        variant: "icon-only",
                                        size: "sm",
                                        "aria-label": x.intl.string(x.t.cpT0Cq),
                                    }),
                                }),
                            (0, r.jsx)("div", {
                                children: T.map((e) =>
                                    (0, r.jsx)(
                                        _,
                                        { section: e, visibleContent: R, dismissibleBadges: w, hoisted: !0 },
                                        e.key,
                                    ),
                                ),
                            }),
                            null != A && null != S && (0, r.jsx)(j, { searchQuery: A, onSearchChange: S }),
                            null != p && 0 === I.length && (0, r.jsx)(p, {}),
                        ],
                    }),
                    (0, r.jsx)(l.hD, {
                        navigator: D,
                        children: (0, r.jsx)(l.PR, {
                            children: (e) => {
                                let { ref: t, ...i } = e;
                                return (0, r.jsxs)(u.ChK, {
                                    ref: (e) => {
                                        (C.current = e),
                                            h.A.setSidebarScrollerRef(e),
                                            (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: b.Mt,
                                    fade: !0,
                                    ...i,
                                    children: [
                                        (0, r.jsx)("nav", {
                                            className: b.C$,
                                            children: I.map((e) =>
                                                (0, r.jsx)(
                                                    _,
                                                    { section: e, visibleContent: R, dismissibleBadges: w },
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
function _(e) {
    let { section: t, visibleContent: n, dismissibleBadges: i, hoisted: a = !1 } = e,
        s = t.useTitle?.();
    return (0, r.jsxs)("ul", {
        className: b.uW,
        "aria-label": s,
        children: [
            null != s &&
                (0, r.jsx)("div", {
                    className: b.a9,
                    children: (0, r.jsx)(u.Heading, {
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
function j(e) {
    let { searchQuery: t, onSearchChange: n } = e,
        a = i.useCallback(() => {
            n("");
        }, [n]);
    return (0, r.jsx)("div", {
        className: b.PP,
        children: (0, r.jsx)(u.IWV, { size: "md", query: t, onChange: n, onClear: a }),
    });
}
