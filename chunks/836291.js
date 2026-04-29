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
    m = s(597770),
    x = s(500060),
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
    O = s(915418),
    E = s(674567),
    A = s(652215),
    _ = s(237146),
    I = s(985018),
    L = s(691539);
let y = [
    { icon: o.B, message: _.default.bpksos },
    { icon: u.h, message: _.default["5rbQbD"] },
    { icon: m.o, message: _.default.b1X5Jf, tooltip: _.default.AyECej },
    { icon: x.o, message: _.default.xZiyZj },
];
function D(t) {
    let { transitionState: e, onClose: s } = t,
        o = (0, E.V)(),
        { status: u, redirect: m, requestInProgress: x } = (0, O.r)(),
        D = (0, k.A)(m),
        R = i.useCallback(() => {
            (0, r.A)({
                title: I.intl.string(_.default["/GObQk"]),
                subtitle: I.intl.string(_.default["r/jeXi"]),
                confirmText: I.intl.string(_.default.bVwQhX),
                variant: "critical",
                onConfirm: () => (0, j.RB)(N.n9.XGPP),
            });
        }, []),
        T = o === E.s.NONE || o === E.s.NON_NITRO;
    i.useEffect(() => {
        T && s();
    }, [T, s]);
    let z = i.useRef(!1);
    if (
        (i.useEffect(() => {
            T || z.current || ((z.current = !0), h.default.track(A.HAw.OPEN_MODAL, { type: v.$ }));
        }, [T]),
        T)
    )
        return null;
    let w = (function (t) {
        let { claimStatus: e, handleActivationClick: s, cancelCroissant: a, requestInProgress: i } = t;
        switch (e) {
            case N.p1.NOT_CLAIMED:
            case N.p1.CLAIM_IN_PROGRESS:
                return {
                    ctaText: I.intl.string(_.default.EL3rU4),
                    ctaVariant: "primary",
                    ctaOnClick: s,
                    processing: i,
                    disclaimer: e === N.p1.CLAIM_IN_PROGRESS ? I.intl.string(_.default.Fs74z9) : void 0,
                };
            case N.p1.CLAIMED:
                return {
                    ctaText: I.intl.string(_.default["Z2Ipu/"]),
                    ctaVariant: "critical-secondary",
                    ctaOnClick: a,
                    processing: i,
                    disclaimer: I.intl.string(_.default.hjlZZf),
                };
            case N.p1.CANCELLATION_IN_PROGRESS:
                return {
                    ctaText: I.intl.string(_.default.wBz9aO),
                    ctaVariant: "critical-secondary",
                    ctaDisabled: !0,
                    disclaimer: I.intl.string(_.default.hjlZZf),
                };
        }
    })({ claimStatus: u, handleActivationClick: D, cancelCroissant: R, requestInProgress: x });
    return (0, a.jsx)(l.d, {
        transitionState: e,
        onClose: s,
        size: "xl",
        "aria-label": I.intl.string(_.default.ukvxpp),
        children: (0, a.jsxs)("div", {
            className: L.yl,
            children: [
                (0, a.jsxs)("div", {
                    className: L.XN,
                    children: [
                        (0, a.jsx)("img", {
                            className: L.wm,
                            src: "https://cdn.discordapp.com/assets/content/7ade8acce1774614eee4dbeb37b20b44fe7cb2a2b70b5107413ed7ee724e1344.png",
                            alt: "Xbox Game Pass",
                        }),
                        (0, a.jsxs)("div", {
                            className: L.FD,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: L.gY,
                                    children: [
                                        (0, a.jsx)(f.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-strong",
                                            children: I.intl.string(_.default.ukvxpp),
                                        }),
                                        (0, a.jsx)(p.E, {
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: I.intl.format(_.default.FO4faL, { termsLink: (0, C.Wi)() }),
                                        }),
                                    ],
                                }),
                                null != w &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(n.$, {
                                                fullWidth: !0,
                                                variant: w.ctaVariant,
                                                size: "md",
                                                text: w.ctaText,
                                                onClick: w.ctaOnClick,
                                                disabled: w.ctaDisabled,
                                                loading: w.processing,
                                            }),
                                            null != w.disclaimer &&
                                                (0, a.jsxs)("div", {
                                                    className: L.ed,
                                                    children: [
                                                        (0, a.jsx)(b.m, { size: "xs", color: "var(--text-subtle)" }),
                                                        (0, a.jsx)(p.E, {
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: w.disclaimer,
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
                    className: L.Hh,
                    children: [
                        (0, a.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b565e9fbc877550c994314613b3d30af48001372642b027b45bd577f71a86442.png",
                            className: L.d3,
                            alt: "",
                        }),
                        (0, a.jsx)("div", { className: L.gm }),
                        (0, a.jsx)("div", {
                            className: L.b,
                            children: (0, a.jsx)(c.K, {
                                "aria-label": I.intl.string(I.t.cpT0Cq),
                                onClick: s,
                                icon: g.d,
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: L.Jo,
                            children: y.map((t, e) => {
                                let { icon: s, message: i, tooltip: l } = t;
                                return (0, a.jsxs)(
                                    "div",
                                    {
                                        className: L.vD,
                                        children: [
                                            (0, a.jsx)(s, { size: "sm", color: "var(--icon-strong)" }),
                                            (0, a.jsx)(p.E, {
                                                variant: "text-md/medium",
                                                color: "text-default",
                                                children: I.intl.string(i),
                                            }),
                                            null != l &&
                                                (0, a.jsx)("div", {
                                                    className: L.Jn,
                                                    children: (0, a.jsx)(d.m, {
                                                        text: I.intl.string(l),
                                                        position: "top",
                                                        children: (0, a.jsx)(b.m, {
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
