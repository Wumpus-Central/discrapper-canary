s.d(e, { default: () => y });
var a = s(627968),
    i = s(64700),
    l = s(224640),
    r = s(821609),
    c = s(408278),
    n = s(314116),
    d = s(990078),
    o = s(704333),
    h = s(414499),
    m = s(597770),
    u = s(500060),
    b = s(534514),
    x = s(834730),
    v = s(885574),
    f = s(972213),
    g = s(954571),
    p = s(276666),
    _ = s(985603),
    j = s(777376),
    N = s(983060),
    C = s(758209),
    w = s(915418),
    A = s(674567),
    E = s(652215),
    I = s(237146),
    O = s(985018),
    k = s(691539);
let T = [
    { icon: o.B, message: I.default.bpksos },
    { icon: h.h, message: I.default["5rbQbD"] },
    { icon: m.o, message: I.default.b1X5Jf, tooltip: I.default.AyECej },
    { icon: u.o, message: I.default.xZiyZj },
];
function y(t) {
    let { transitionState: e, onClose: s } = t,
        o = (0, A.V)(),
        { status: h, redirect: m, requestInProgress: u } = (0, w.r)(),
        y = (0, C.A)(m),
        Z = i.useCallback(() => {
            (0, n.A)({
                title: O.intl.string(I.default["/GObQk"]),
                subtitle: O.intl.string(I.default["r/jeXi"]),
                confirmText: O.intl.string(I.default.bVwQhX),
                variant: "critical",
                onConfirm: () => (0, p.RB)(j.n9.XGPP),
            });
        }, []),
        D = o === A.s.NONE || o === A.s.NON_NITRO;
    i.useEffect(() => {
        D && s();
    }, [D, s]);
    let L = i.useRef(!1);
    if (
        (i.useEffect(() => {
            D || L.current || ((L.current = !0), g.default.track(E.HAw.OPEN_MODAL, { type: _.$ }));
        }, [D]),
        D)
    )
        return null;
    let R = (function (t) {
        let { claimStatus: e, handleActivationClick: s, cancelCroissant: a, requestInProgress: i } = t;
        switch (e) {
            case j.p1.NOT_CLAIMED:
            case j.p1.CLAIM_IN_PROGRESS:
                return {
                    ctaText: O.intl.string(I.default.EL3rU4),
                    ctaVariant: "primary",
                    ctaOnClick: s,
                    processing: i,
                    disclaimer: e === j.p1.CLAIM_IN_PROGRESS ? O.intl.string(I.default.Fs74z9) : void 0,
                };
            case j.p1.CLAIMED:
                return {
                    ctaText: O.intl.string(I.default["Z2Ipu/"]),
                    ctaVariant: "critical-secondary",
                    ctaOnClick: a,
                    processing: i,
                    disclaimer: O.intl.string(I.default.hjlZZf),
                };
            case j.p1.CANCELLATION_IN_PROGRESS:
                return {
                    ctaText: O.intl.string(I.default.wBz9aO),
                    ctaVariant: "critical-secondary",
                    ctaDisabled: !0,
                    disclaimer: O.intl.string(I.default.hjlZZf),
                };
        }
    })({ claimStatus: h, handleActivationClick: y, cancelCroissant: Z, requestInProgress: u });
    return (0, a.jsx)(l.d, {
        transitionState: e,
        onClose: s,
        size: "xl",
        "aria-label": O.intl.string(I.default.ukvxpp),
        children: (0, a.jsxs)("div", {
            className: k.yl,
            children: [
                (0, a.jsxs)("div", {
                    className: k.XN,
                    children: [
                        (0, a.jsx)("img", {
                            className: k.wm,
                            src: "https://cdn.discordapp.com/assets/content/7ade8acce1774614eee4dbeb37b20b44fe7cb2a2b70b5107413ed7ee724e1344.png",
                            alt: "Xbox Game Pass",
                        }),
                        (0, a.jsxs)("div", {
                            className: k.FD,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: k.gY,
                                    children: [
                                        (0, a.jsx)(b.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-strong",
                                            children: O.intl.string(I.default.ukvxpp),
                                        }),
                                        (0, a.jsx)(x.E, {
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: O.intl.format(I.default.FO4faL, { termsLink: (0, N.W)() }),
                                        }),
                                    ],
                                }),
                                null != R &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(r.$, {
                                                fullWidth: !0,
                                                variant: R.ctaVariant,
                                                size: "md",
                                                text: R.ctaText,
                                                onClick: R.ctaOnClick,
                                                disabled: R.ctaDisabled,
                                                loading: R.processing,
                                            }),
                                            null != R.disclaimer &&
                                                (0, a.jsxs)("div", {
                                                    className: k.ed,
                                                    children: [
                                                        (0, a.jsx)(v.m, { size: "xs", color: "var(--text-subtle)" }),
                                                        (0, a.jsx)(x.E, {
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: R.disclaimer,
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
                    className: k.Hh,
                    children: [
                        (0, a.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b565e9fbc877550c994314613b3d30af48001372642b027b45bd577f71a86442.png",
                            className: k.d3,
                            alt: "",
                        }),
                        (0, a.jsx)("div", { className: k.gm }),
                        (0, a.jsx)("div", {
                            className: k.b,
                            children: (0, a.jsx)(c.K, {
                                "aria-label": O.intl.string(O.t.cpT0Cq),
                                onClick: s,
                                icon: f.d,
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: k.Jo,
                            children: T.map((t, e) => {
                                let { icon: s, message: i, tooltip: l } = t;
                                return (0, a.jsxs)(
                                    "div",
                                    {
                                        className: k.vD,
                                        children: [
                                            (0, a.jsx)(s, { size: "sm", color: "var(--icon-strong)" }),
                                            (0, a.jsx)(x.E, {
                                                variant: "text-md/medium",
                                                color: "text-default",
                                                children: O.intl.string(i),
                                            }),
                                            null != l &&
                                                (0, a.jsx)("div", {
                                                    className: k.Jn,
                                                    children: (0, a.jsx)(d.m, {
                                                        text: O.intl.string(l),
                                                        position: "top",
                                                        children: (0, a.jsx)(v.m, {
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
