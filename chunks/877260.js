"use strict";
n.d(t, { L: () => C }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(837381),
    o = n(607399),
    c = n(43990),
    u = n(408278),
    d = n(972213),
    _ = n(599319),
    f = n(534514),
    h = n(928039),
    p = n(932001),
    m = n(97469),
    g = n(199966),
    b = n(894858),
    v = n(397274),
    E = n(189857),
    y = n(188180),
    A = n(133457),
    x = n(985018),
    S = n(443263);
function C(e) {
    let { root: t, onClose: n, footer: a, emptyState: f, searchBar: y } = e,
        C = b.A.useField("showNavigationMobile"),
        I = i.useRef(null),
        [T] = i.useState(t),
        { accessibleDirectory: j } = (0, g._)(),
        R = i.useMemo(() => (0, E.Z)(T, j), [T, j]),
        [w] = (0, p.kn)(R.allDismissibleContents);
    (0, A.B)({ visibleContent: w, dismissibleBadges: R, accessibleDirectory: j });
    let [k, D] = i.useMemo(() => {
            let e = [],
                n = [];
            return (
                t.layout.forEach((t) => {
                    t.hoisted ? e.push(t) : n.push(t);
                }),
                [e, n]
            );
        }, [t.layout]),
        L = (0, m.NC)(),
        O = (0, h.A)("settings-sidebar", I);
    return (0, r.jsx)(c.N, {
        theme: L,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: s()(S.pz, e, { [S.Hw]: o.Fr, [S.n7]: C }),
                children: [
                    (0, r.jsxs)("div", {
                        className: S.gM,
                        children: [
                            o.Fr &&
                                (0, r.jsx)("div", {
                                    className: S.hg,
                                    children: (0, r.jsx)(u.K, {
                                        icon: d.d,
                                        onClick: n,
                                        variant: "icon-only",
                                        size: "sm",
                                        "aria-label": x.intl.string(x.t.cpT0Cq),
                                    }),
                                }),
                            (0, r.jsx)("div", {
                                children: k.map((e) =>
                                    (0, r.jsx)(
                                        N,
                                        { section: e, visibleContent: w, dismissibleBadges: R, hoisted: !0 },
                                        e.key,
                                    ),
                                ),
                            }),
                            null != y && (0, r.jsx)(y, {}),
                            null != f && 0 === D.length && (0, r.jsx)(f, {}),
                        ],
                    }),
                    (0, r.jsx)(l.hD, {
                        navigator: O,
                        children: (0, r.jsx)(l.PR, {
                            children: (e) => {
                                let { ref: t, ...n } = e;
                                return (0, r.jsxs)(_.Ch, {
                                    ref: (e) => {
                                        (I.current = e),
                                            v.A.setSidebarScrollerRef(e),
                                            (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: S.Mt,
                                    fade: !0,
                                    ...n,
                                    children: [
                                        (0, r.jsx)("nav", {
                                            className: S.C$,
                                            children: D.map((e) =>
                                                (0, r.jsx)(
                                                    N,
                                                    { section: e, visibleContent: w, dismissibleBadges: R },
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
function N(e) {
    let { section: t, visibleContent: n, dismissibleBadges: i, hoisted: a = !1 } = e,
        s = t.useTitle?.();
    return (0, r.jsxs)("ul", {
        className: S.uW,
        "aria-label": s,
        children: [
            null != s &&
                (0, r.jsx)("div", {
                    className: S.a9,
                    children: (0, r.jsx)(f.D, {
                        className: S.Pf,
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
