s.d(e, { default: () => y });
var i = s(627968),
    a = s(64700),
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
    h = s(792656),
    j = s(954571),
    N = s(276666),
    v = s(985603),
    E = s(777376),
    C = s(983060),
    k = s(758209),
    A = s(185797),
    L = s(915418),
    O = s(674567),
    T = s(652215),
    I = s(788868),
    R = s(237146),
    _ = s(985018),
    D = s(691539);
let S = [
    { icon: o.B, message: R.default.bpksos },
    { icon: u.h, message: R.default["5rbQbD"] },
    { icon: x.o, message: R.default.b1X5Jf, tooltip: R.default.AyECej },
    { icon: m.o, message: R.default.xZiyZj },
];
function y(t) {
    let { transitionState: e, onClose: s } = t,
        o = (0, O.V)(),
        { status: u, redirect: x, requestInProgress: m } = (0, L.r)(),
        y = (0, k.A)(x),
        F = (0, v.A)(),
        z = a.useCallback(() => {
            (0, r.A)({
                title: _.intl.string(R.default["/GObQk"]),
                subtitle: _.intl.string(R.default["r/jeXi"]),
                confirmText: _.intl.string(R.default.bVwQhX),
                variant: "critical",
                onConfirm: () => (0, N.RB)(E.n9.XGPP),
            }),
                F(v.xf.CANCEL);
        }, [F]),
        w = o === O.s.NONE || o === O.s.NON_NITRO;
    a.useEffect(() => {
        w && s();
    }, [w, s]);
    let B = a.useRef(!1);
    if (
        (a.useEffect(() => {
            w || B.current || ((B.current = !0), j.default.track(T.HAw.OPEN_MODAL, { type: v.$p }));
        }, [w]),
        w)
    )
        return null;
    let P = (function (t) {
        let { variant: e, claimStatus: s, handleActivationClick: i, cancelCroissant: a, requestInProgress: l } = t;
        if (e === O.s.FREE_FRACTIONAL_NITRO) return { kind: A.L.SUBSCRIBE, text: _.intl.string(_.t.sEAnVH) };
        switch (s) {
            case E.p1.NOT_CLAIMED:
            case E.p1.CLAIM_IN_PROGRESS:
                return {
                    kind: A.L.DEFAULT,
                    ctaText: _.intl.string(R.default.EL3rU4),
                    ctaVariant: "primary",
                    ctaOnClick: i,
                    processing: l,
                    disclaimer: s === E.p1.CLAIM_IN_PROGRESS ? _.intl.string(R.default.Fs74z9) : void 0,
                };
            case E.p1.CLAIMED:
                return {
                    kind: A.L.DEFAULT,
                    ctaText: _.intl.string(R.default["Z2Ipu/"]),
                    ctaVariant: "critical-secondary",
                    ctaOnClick: a,
                    processing: l,
                    disclaimer: _.intl.string(R.default.hjlZZf),
                };
            case E.p1.CANCELLATION_IN_PROGRESS:
                return {
                    kind: A.L.DEFAULT,
                    ctaText: _.intl.string(R.default.wBz9aO),
                    ctaVariant: "critical-secondary",
                    ctaDisabled: !0,
                    disclaimer: _.intl.string(R.default.hjlZZf),
                };
        }
    })({ variant: o, claimStatus: u, handleActivationClick: y, cancelCroissant: z, requestInProgress: m });
    return (0, i.jsx)(l.d, {
        transitionState: e,
        onClose: s,
        size: "xl",
        "aria-label": _.intl.string(R.default.ukvxpp),
        children: (0, i.jsxs)("div", {
            className: D.yl,
            children: [
                (0, i.jsxs)("div", {
                    className: D.XN,
                    children: [
                        (0, i.jsx)("img", {
                            className: D.wm,
                            src: "https://cdn.discordapp.com/assets/content/7ade8acce1774614eee4dbeb37b20b44fe7cb2a2b70b5107413ed7ee724e1344.png",
                            alt: "Xbox Game Pass",
                        }),
                        (0, i.jsxs)("div", {
                            className: D.FD,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: D.gY,
                                    children: [
                                        (0, i.jsx)(f.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-strong",
                                            children: _.intl.string(R.default.ukvxpp),
                                        }),
                                        (0, i.jsx)(p.E, {
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: _.intl.format(R.default.FO4faL, { termsLink: (0, C.Wi)() }),
                                        }),
                                    ],
                                }),
                                P.kind === A.L.SUBSCRIBE
                                    ? (0, i.jsx)(h.A, {
                                          fullWidth: !0,
                                          defaultTextOverride: P.text,
                                          subscriptionTier: I.pe.TIER_2,
                                      })
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(n.$, {
                                                  fullWidth: !0,
                                                  variant: P.ctaVariant,
                                                  size: "md",
                                                  text: P.ctaText,
                                                  onClick: P.ctaOnClick,
                                                  disabled: P.ctaDisabled,
                                                  loading: P.processing,
                                              }),
                                              null != P.disclaimer &&
                                                  (0, i.jsxs)("div", {
                                                      className: D.ed,
                                                      children: [
                                                          (0, i.jsx)(b.m, { size: "xs", color: "var(--text-subtle)" }),
                                                          (0, i.jsx)(p.E, {
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
                (0, i.jsxs)("div", {
                    className: D.Hh,
                    children: [
                        (0, i.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b565e9fbc877550c994314613b3d30af48001372642b027b45bd577f71a86442.png",
                            className: D.d3,
                            alt: "",
                        }),
                        (0, i.jsx)("div", { className: D.gm }),
                        (0, i.jsx)("div", {
                            className: D.b,
                            children: (0, i.jsx)(c.K, {
                                "aria-label": _.intl.string(_.t.cpT0Cq),
                                onClick: s,
                                icon: g.d,
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: D.Jo,
                            children: S.map((t, e) => {
                                let { icon: s, message: a, tooltip: l } = t;
                                return (0, i.jsxs)(
                                    "div",
                                    {
                                        className: D.vD,
                                        children: [
                                            (0, i.jsx)(s, { size: "sm", color: "var(--icon-strong)" }),
                                            (0, i.jsx)(p.E, {
                                                variant: "text-md/medium",
                                                color: "text-default",
                                                children: _.intl.string(a),
                                            }),
                                            null != l &&
                                                (0, i.jsx)("div", {
                                                    className: D.Jn,
                                                    children: (0, i.jsx)(d.m, {
                                                        text: _.intl.string(l),
                                                        position: "top",
                                                        children: (0, i.jsx)(b.m, {
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
