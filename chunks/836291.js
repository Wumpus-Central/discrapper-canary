a.d(e, { default: () => w });
var s = a(627968),
    i = a(64700),
    l = a(224640),
    r = a(821609),
    n = a(408278),
    c = a(314116),
    d = a(990078),
    o = a(704333),
    b = a(414499),
    m = a(597770),
    u = a(500060),
    x = a(534514),
    p = a(834730),
    f = a(885574),
    g = a(972213),
    _ = a(276666),
    h = a(777376),
    j = a(983060),
    v = a(758209),
    N = a(915418),
    C = a(674567),
    k = a(237146),
    O = a(985018),
    E = a(691539);
let I = [
    { icon: o.B, message: k.default.bpksos },
    { icon: b.h, message: k.default["5rbQbD"] },
    { icon: m.o, message: k.default.b1X5Jf, tooltip: k.default.AyECej },
    { icon: u.o, message: k.default.xZiyZj },
];
function w(t) {
    let { transitionState: e, onClose: a } = t,
        o = (0, C.V)(),
        { status: b, redirect: m, requestInProgress: u } = (0, N.r)(),
        w = (0, v.A)(m),
        y = i.useCallback(() => {
            (0, c.A)({
                title: O.intl.string(k.default["/GObQk"]),
                subtitle: O.intl.string(k.default["r/jeXi"]),
                confirmText: O.intl.string(k.default.bVwQhX),
                variant: "critical",
                onConfirm: () => (0, _.RB)(h.n9.XGPP),
            });
        }, []),
        D = o === C.s.NONE || o === C.s.NON_NITRO;
    if (
        (i.useEffect(() => {
            D && a();
        }, [D, a]),
        D)
    )
        return null;
    let L = (function (t) {
        let { claimStatus: e, handleActivationClick: a, cancelCroissant: s, requestInProgress: i } = t;
        switch (e) {
            case h.p1.NOT_CLAIMED:
            case h.p1.CLAIM_IN_PROGRESS:
                return {
                    ctaText: O.intl.string(k.default.EL3rU4),
                    ctaVariant: "primary",
                    ctaOnClick: a,
                    processing: i,
                    disclaimer: e === h.p1.CLAIM_IN_PROGRESS ? O.intl.string(k.default.Fs74z9) : void 0,
                };
            case h.p1.CLAIMED:
                return {
                    ctaText: O.intl.string(k.default["Z2Ipu/"]),
                    ctaVariant: "critical-secondary",
                    ctaOnClick: s,
                    processing: i,
                    disclaimer: O.intl.string(k.default.hjlZZf),
                };
            case h.p1.CANCELLATION_IN_PROGRESS:
                return {
                    ctaText: O.intl.string(k.default.wBz9aO),
                    ctaVariant: "critical-secondary",
                    ctaDisabled: !0,
                    disclaimer: O.intl.string(k.default.hjlZZf),
                };
        }
    })({ claimStatus: b, handleActivationClick: w, cancelCroissant: y, requestInProgress: u });
    return (0, s.jsx)(l.d, {
        transitionState: e,
        onClose: a,
        size: "xl",
        "aria-label": O.intl.string(k.default.ukvxpp),
        children: (0, s.jsxs)("div", {
            className: E.yl,
            children: [
                (0, s.jsxs)("div", {
                    className: E.XN,
                    children: [
                        (0, s.jsx)("img", {
                            className: E.wm,
                            src: "https://cdn.discordapp.com/assets/content/7ade8acce1774614eee4dbeb37b20b44fe7cb2a2b70b5107413ed7ee724e1344.png",
                            alt: "Xbox Game Pass",
                        }),
                        (0, s.jsxs)("div", {
                            className: E.FD,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: E.gY,
                                    children: [
                                        (0, s.jsx)(x.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-strong",
                                            children: O.intl.string(k.default.ukvxpp),
                                        }),
                                        (0, s.jsx)(p.E, {
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: O.intl.format(k.default.FO4faL, { termsLink: (0, j.W)() }),
                                        }),
                                    ],
                                }),
                                null != L &&
                                    (0, s.jsxs)(s.Fragment, {
                                        children: [
                                            (0, s.jsx)(r.$, {
                                                fullWidth: !0,
                                                variant: L.ctaVariant,
                                                size: "md",
                                                text: L.ctaText,
                                                onClick: L.ctaOnClick,
                                                disabled: L.ctaDisabled,
                                                loading: L.processing,
                                            }),
                                            null != L.disclaimer &&
                                                (0, s.jsxs)("div", {
                                                    className: E.ed,
                                                    children: [
                                                        (0, s.jsx)(f.m, { size: "xs", color: "var(--text-subtle)" }),
                                                        (0, s.jsx)(p.E, {
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: L.disclaimer,
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: E.Hh,
                    children: [
                        (0, s.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b565e9fbc877550c994314613b3d30af48001372642b027b45bd577f71a86442.png",
                            className: E.d3,
                            alt: "",
                        }),
                        (0, s.jsx)("div", { className: E.gm }),
                        (0, s.jsx)("div", {
                            className: E.b,
                            children: (0, s.jsx)(n.K, {
                                "aria-label": O.intl.string(O.t.cpT0Cq),
                                onClick: a,
                                icon: g.d,
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                        (0, s.jsx)("div", {
                            className: E.Jo,
                            children: I.map((t, e) => {
                                let { icon: a, message: i, tooltip: l } = t;
                                return (0, s.jsxs)(
                                    "div",
                                    {
                                        className: E.vD,
                                        children: [
                                            (0, s.jsx)(a, { size: "sm", color: "var(--icon-strong)" }),
                                            (0, s.jsx)(p.E, {
                                                variant: "text-md/medium",
                                                color: "text-default",
                                                children: O.intl.string(i),
                                            }),
                                            null != l &&
                                                (0, s.jsx)("div", {
                                                    className: E.Jn,
                                                    children: (0, s.jsx)(d.m, {
                                                        text: O.intl.string(l),
                                                        position: "top",
                                                        children: (0, s.jsx)(f.m, {
                                                            size: "xs",
                                                            color: "var(--icon-default)",
                                                        }),
                                                    }),
                                                }),
                                        ],
                                    },
                                    e,
                                );
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
