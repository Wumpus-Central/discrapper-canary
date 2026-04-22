"use strict";
n.d(t, { L: () => N }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(837381),
    o = n(607399),
    c = n(43990),
    u = n(408278),
    d = n(972213),
    _ = n(599319),
    h = n(534514),
    p = n(928039),
    f = n(932001),
    m = n(97469),
    g = n(199966),
    E = n(894858),
    v = n(397274),
    y = n(189857),
    A = n(188180),
    S = n(133457),
    b = n(985018),
    x = n(443263);
function N(e) {
    let { root: t, onClose: n, footer: a, emptyState: h, searchBar: A } = e,
        N = E.A.useField("showNavigationMobile"),
        I = i.useRef(null),
        [T] = i.useState(t),
        { accessibleDirectory: j } = (0, g._)(),
        R = i.useMemo(() => (0, y.Z)(T, j), [T, j]),
        [w] = (0, f.kn)(R.allDismissibleContents);
    (0, S.B)({ visibleContent: w, dismissibleBadges: R, accessibleDirectory: j });
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
        O = (0, m.NC)(),
        L = (0, p.A)("settings-sidebar", I);
    return (0, r.jsx)(c.N, {
        theme: O,
        children: (e) =>
            (0, r.jsxs)("div", {
                className: l()(x.pz, e, { [x.Hw]: o.Fr, [x.n7]: N }),
                children: [
                    (0, r.jsxs)("div", {
                        className: x.gM,
                        children: [
                            o.Fr &&
                                (0, r.jsx)("div", {
                                    className: x.hg,
                                    children: (0, r.jsx)(u.K, {
                                        icon: d.d,
                                        onClick: n,
                                        variant: "icon-only",
                                        size: "sm",
                                        "aria-label": b.intl.string(b.t.cpT0Cq),
                                    }),
                                }),
                            (0, r.jsx)("div", {
                                children: k.map((e) =>
                                    (0, r.jsx)(
                                        C,
                                        { section: e, visibleContent: w, dismissibleBadges: R, hoisted: !0 },
                                        e.key,
                                    ),
                                ),
                            }),
                            null != A && (0, r.jsx)(A, {}),
                            null != h && 0 === D.length && (0, r.jsx)(h, {}),
                        ],
                    }),
                    (0, r.jsx)(s.hD, {
                        navigator: L,
                        children: (0, r.jsx)(s.PR, {
                            children: (e) => {
                                let { ref: t, ...n } = e;
                                return (0, r.jsxs)(_.Ch, {
                                    ref: (e) => {
                                        (I.current = e),
                                            v.A.setSidebarScrollerRef(e),
                                            (t.current = e?.getScrollerNode() ?? null);
                                    },
                                    className: x.Mt,
                                    fade: !0,
                                    ...n,
                                    children: [
                                        (0, r.jsx)("nav", {
                                            className: x.C$,
                                            children: D.map((e) =>
                                                (0, r.jsx)(
                                                    C,
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
function C(e) {
    let { section: t, visibleContent: n, dismissibleBadges: i, hoisted: a = !1 } = e,
        l = t.useTitle?.();
    return (0, r.jsxs)("ul", {
        className: x.uW,
        "aria-label": l,
        children: [
            null != l &&
                (0, r.jsx)("div", {
                    className: x.a9,
                    children: (0, r.jsx)(h.D, {
                        className: x.Pf,
                        variant: "heading-sm/medium",
                        color: "text-muted",
                        children: l,
                    }),
                }),
            t.layout.map((e) =>
                (0, r.jsx)(A.X, { node: e, visibleContent: n, dismissibleBadges: i, hoisted: a }, e.key),
            ),
        ],
    });
}
