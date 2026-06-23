s.d(e, { default: () => w });
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
    h = s(793574),
    j = s(688810),
    N = s(183972),
    v = s(196099),
    A = s(297966),
    C = s(792656),
    E = s(174459),
    O = s(985603),
    k = s(777376),
    L = s(983060),
    R = s(758209),
    T = s(185797),
    _ = s(693037),
    I = s(674567),
    S = s(652215),
    D = s(788868),
    y = s(237146),
    F = s(375708),
    z = s(691539);
let M = [
    { icon: o.B, message: y.default.bpksos },
    { icon: u.h, message: y.default["5rbQbD"] },
    { icon: x.o, message: y.default.b1X5Jf, tooltip: y.default.AyECej },
    { icon: m.o, message: y.default.xZiyZj },
];
function P(t) {
    let { transitionState: e, onClose: s, variant: o, claimStatus: u, redirect: x, requestInProgress: m } = t,
        h = (0, R.A)(x),
        j = (0, v.M)("xbox"),
        E = (function (t) {
            let { variant: e, claimStatus: s, handleActivationClick: i, cancelCroissant: a, requestInProgress: l } = t;
            if (e === I.s.FREE_FRACTIONAL_NITRO) return { kind: T.L.SUBSCRIBE, text: F.intl.string(F.t.sEAnVH) };
            switch (s) {
                case k.p.NOT_CLAIMED:
                case k.p.CLAIM_IN_PROGRESS:
                    return {
                        kind: T.L.DEFAULT,
                        ctaText: F.intl.string(y.default.EL3rU4),
                        ctaVariant: "primary",
                        ctaOnClick: i,
                        processing: l,
                        disclaimer: s === k.p.CLAIM_IN_PROGRESS ? F.intl.string(y.default.Fs74z9) : void 0,
                    };
                case k.p.CLAIMED:
                    return {
                        kind: T.L.DEFAULT,
                        ctaText: F.intl.string(y.default["Z2Ipu/"]),
                        ctaVariant: "critical-secondary",
                        ctaOnClick: a,
                        processing: l,
                        disclaimer: F.intl.string(y.default.hjlZZf),
                    };
                case k.p.CANCELLATION_IN_PROGRESS:
                    return {
                        kind: T.L.DEFAULT,
                        ctaText: F.intl.string(y.default.wBz9aO),
                        ctaVariant: "critical-secondary",
                        ctaDisabled: !0,
                        disclaimer: F.intl.string(y.default.hjlZZf),
                    };
            }
        })({
            variant: o,
            claimStatus: u,
            handleActivationClick: h,
            cancelCroissant: a.useCallback(() => {
                (0, r.A)({
                    title: F.intl.string(y.default["/GObQk"]),
                    subtitle: F.intl.string(y.default["r/jeXi"]),
                    confirmText: F.intl.string(y.default.bVwQhX),
                    variant: "critical",
                    onConfirm: () => (0, N.RB)(A.n9.XGPP),
                }),
                    j(v.H.CANCEL);
            }, [j]),
            requestInProgress: m,
        });
    return (0, i.jsx)(l.d, {
        transitionState: e,
        onClose: s,
        size: "xl",
        "aria-label": F.intl.string(y.default.ukvxpp),
        children: (0, i.jsxs)("div", {
            className: z.yl,
            children: [
                (0, i.jsxs)("div", {
                    className: z.XN,
                    children: [
                        (0, i.jsx)("img", {
                            className: z.wm,
                            src: "https://cdn.discordapp.com/assets/content/7ade8acce1774614eee4dbeb37b20b44fe7cb2a2b70b5107413ed7ee724e1344.png",
                            alt: "Xbox Game Pass",
                        }),
                        (0, i.jsxs)("div", {
                            className: z.FD,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: z.gY,
                                    children: [
                                        (0, i.jsx)(f.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-strong",
                                            children: F.intl.string(y.default.ukvxpp),
                                        }),
                                        (0, i.jsx)(p.E, {
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: F.intl.format(y.default.FO4faL, { termsLink: (0, L.xA)() }),
                                        }),
                                    ],
                                }),
                                E.kind === T.L.SUBSCRIBE
                                    ? (0, i.jsx)(C.A, {
                                          fullWidth: !0,
                                          defaultTextOverride: E.text,
                                          subscriptionTier: D.pe.TIER_2,
                                      })
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(n.$, {
                                                  fullWidth: !0,
                                                  variant: E.ctaVariant,
                                                  size: "md",
                                                  text: E.ctaText,
                                                  onClick: E.ctaOnClick,
                                                  disabled: E.ctaDisabled,
                                                  loading: E.processing,
                                              }),
                                              null != E.disclaimer &&
                                                  (0, i.jsxs)("div", {
                                                      className: z.ed,
                                                      children: [
                                                          (0, i.jsx)(b.m, { size: "xs", color: "var(--text-subtle)" }),
                                                          (0, i.jsx)(p.E, {
                                                              variant: "text-xs/medium",
                                                              color: "text-subtle",
                                                              children: E.disclaimer,
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
                    className: z.Hh,
                    children: [
                        (0, i.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b565e9fbc877550c994314613b3d30af48001372642b027b45bd577f71a86442.png",
                            className: z.d3,
                            alt: "",
                        }),
                        (0, i.jsx)("div", { className: z.gm }),
                        (0, i.jsx)("div", {
                            className: z.b,
                            children: (0, i.jsx)(c.K, {
                                "aria-label": F.intl.string(F.t.cpT0Cq),
                                onClick: s,
                                icon: g.d,
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: z.Jo,
                            children: M.map((t, e) => {
                                let { icon: s, message: a, tooltip: l } = t;
                                return (0, i.jsxs)(
                                    "div",
                                    {
                                        className: z.vD,
                                        children: [
                                            (0, i.jsx)(s, { size: "sm", color: "var(--icon-strong)" }),
                                            (0, i.jsx)(p.E, {
                                                variant: "text-md/medium",
                                                color: "text-default",
                                                children: F.intl.string(a),
                                            }),
                                            null != l &&
                                                (0, i.jsx)("div", {
                                                    className: z.Jn,
                                                    children: (0, i.jsx)(d.m, {
                                                        text: F.intl.string(l),
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
function w(t) {
    let { transitionState: e, onClose: s, sourceAnalyticsLocations: l } = t,
        n = (0, I.V)(),
        { status: c, redirect: r, requestInProgress: d } = (0, _.r)(),
        { analyticsLocations: o } = (0, j.Ay)(
            ...(null != l ? [l, h.A.CROISSANT_REWARD_MODAL] : [h.A.CROISSANT_REWARD_MODAL]),
        ),
        u = n === I.s.NONE || n === I.s.NON_NITRO;
    a.useEffect(() => {
        u && s();
    }, [u, s]);
    let x = a.useRef(!1);
    return (a.useEffect(() => {
        u || x.current || ((x.current = !0), E.default.track(S.HAw.OPEN_MODAL, { type: O.$, location_stack: o }));
    }, [u, o]),
    u)
        ? null
        : (0, i.jsx)(j.f5, {
              value: o,
              children: (0, i.jsx)(P, {
                  transitionState: e,
                  onClose: s,
                  variant: n,
                  claimStatus: c,
                  redirect: r,
                  requestInProgress: d,
              }),
          });
}
