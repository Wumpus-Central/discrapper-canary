s.d(e, { default: () => D });
var a = s(627968),
    i = s(64700),
    l = s(224640),
    n = s(821609),
    c = s(408278),
    r = s(314116),
    d = s(990078),
    o = s(704333),
    u = s(414499),
    x = s(597770),
    m = s(500060),
    f = s(534514),
    p = s(834730),
    b = s(885574),
    g = s(972213),
    h = s(954571),
    j = s(276666),
    v = s(985603),
    N = s(777376),
    C = s(983060),
    k = s(758209),
    E = s(915418),
    O = s(674567),
    A = s(652215),
    L = s(237146),
    _ = s(985018),
    I = s(691539);
let y = [
    { icon: o.B, message: L.default.bpksos },
    { icon: u.h, message: L.default["5rbQbD"] },
    { icon: x.o, message: L.default.b1X5Jf, tooltip: L.default.AyECej },
    { icon: m.o, message: L.default.xZiyZj },
];
function D(t) {
    let { transitionState: e, onClose: s } = t,
        o = (0, O.V)(),
        { status: u, redirect: x, requestInProgress: m } = (0, E.r)(),
        D = (0, k.A)(x),
        R = (0, v.A)(),
        T = i.useCallback(() => {
            (0, r.A)({
                title: _.intl.string(L.default["/GObQk"]),
                subtitle: _.intl.string(L.default["r/jeXi"]),
                confirmText: _.intl.string(L.default.bVwQhX),
                variant: "critical",
                onConfirm: () => (0, j.RB)(N.n9.XGPP),
            }),
                R(v.xf.CANCEL);
        }, [R]),
        z = o === O.s.NONE || o === O.s.NON_NITRO;
    i.useEffect(() => {
        z && s();
    }, [z, s]);
    let w = i.useRef(!1);
    if (
        (i.useEffect(() => {
            z || w.current || ((w.current = !0), h.default.track(A.HAw.OPEN_MODAL, { type: v.$p }));
        }, [z]),
        z)
    )
        return null;
    let P = (function (t) {
        let { claimStatus: e, handleActivationClick: s, cancelCroissant: a, requestInProgress: i } = t;
        switch (e) {
            case N.p1.NOT_CLAIMED:
            case N.p1.CLAIM_IN_PROGRESS:
                return {
                    ctaText: _.intl.string(L.default.EL3rU4),
                    ctaVariant: "primary",
                    ctaOnClick: s,
                    processing: i,
                    disclaimer: e === N.p1.CLAIM_IN_PROGRESS ? _.intl.string(L.default.Fs74z9) : void 0,
                };
            case N.p1.CLAIMED:
                return {
                    ctaText: _.intl.string(L.default["Z2Ipu/"]),
                    ctaVariant: "critical-secondary",
                    ctaOnClick: a,
                    processing: i,
                    disclaimer: _.intl.string(L.default.hjlZZf),
                };
            case N.p1.CANCELLATION_IN_PROGRESS:
                return {
                    ctaText: _.intl.string(L.default.wBz9aO),
                    ctaVariant: "critical-secondary",
                    ctaDisabled: !0,
                    disclaimer: _.intl.string(L.default.hjlZZf),
                };
        }
    })({ claimStatus: u, handleActivationClick: D, cancelCroissant: T, requestInProgress: m });
    return (0, a.jsx)(l.d, {
        transitionState: e,
        onClose: s,
        size: "xl",
        "aria-label": _.intl.string(L.default.ukvxpp),
        children: (0, a.jsxs)("div", {
            className: I.yl,
            children: [
                (0, a.jsxs)("div", {
                    className: I.XN,
                    children: [
                        (0, a.jsx)("img", {
                            className: I.wm,
                            src: "https://cdn.discordapp.com/assets/content/7ade8acce1774614eee4dbeb37b20b44fe7cb2a2b70b5107413ed7ee724e1344.png",
                            alt: "Xbox Game Pass",
                        }),
                        (0, a.jsxs)("div", {
                            className: I.FD,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: I.gY,
                                    children: [
                                        (0, a.jsx)(f.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-strong",
                                            children: _.intl.string(L.default.ukvxpp),
                                        }),
                                        (0, a.jsx)(p.E, {
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: _.intl.format(L.default.FO4faL, { termsLink: (0, C.Wi)() }),
                                        }),
                                    ],
                                }),
                                null != P &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(n.$, {
                                                fullWidth: !0,
                                                variant: P.ctaVariant,
                                                size: "md",
                                                text: P.ctaText,
                                                onClick: P.ctaOnClick,
                                                disabled: P.ctaDisabled,
                                                loading: P.processing,
                                            }),
                                            null != P.disclaimer &&
                                                (0, a.jsxs)("div", {
                                                    className: I.ed,
                                                    children: [
                                                        (0, a.jsx)(b.m, { size: "xs", color: "var(--text-subtle)" }),
                                                        (0, a.jsx)(p.E, {
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: P.disclaimer,
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: I.Hh,
                    children: [
                        (0, a.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b565e9fbc877550c994314613b3d30af48001372642b027b45bd577f71a86442.png",
                            className: I.d3,
                            alt: "",
                        }),
                        (0, a.jsx)("div", { className: I.gm }),
                        (0, a.jsx)("div", {
                            className: I.b,
                            children: (0, a.jsx)(c.K, {
                                "aria-label": _.intl.string(_.t.cpT0Cq),
                                onClick: s,
                                icon: g.d,
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: I.Jo,
                            children: y.map((t, e) => {
                                let { icon: s, message: i, tooltip: l } = t;
                                return (0, a.jsxs)(
                                    "div",
                                    {
                                        className: I.vD,
                                        children: [
                                            (0, a.jsx)(s, { size: "sm", color: "var(--icon-strong)" }),
                                            (0, a.jsx)(p.E, {
                                                variant: "text-md/medium",
                                                color: "text-default",
                                                children: _.intl.string(i),
                                            }),
                                            null != l &&
                                                (0, a.jsx)("div", {
                                                    className: I.Jn,
                                                    children: (0, a.jsx)(d.m, {
                                                        text: _.intl.string(l),
                                                        position: "top",
                                                        children: (0, a.jsx)(b.m, {
                                                            size: "xxs",
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
