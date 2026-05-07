s.d(e, { default: () => P });
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
    N = s(792656),
    v = s(174459),
    A = s(276666),
    C = s(985603),
    E = s(777376),
    O = s(983060),
    k = s(758209),
    L = s(185797),
    R = s(693037),
    T = s(674567),
    _ = s(652215),
    I = s(788868),
    S = s(237146),
    D = s(375708),
    y = s(691539);
let F = [
    { icon: o.B, message: S.default.bpksos },
    { icon: u.h, message: S.default["5rbQbD"] },
    { icon: x.o, message: S.default.b1X5Jf, tooltip: S.default.AyECej },
    { icon: m.o, message: S.default.xZiyZj },
];
function z(t) {
    let { transitionState: e, onClose: s, variant: o, claimStatus: u, redirect: x, requestInProgress: m } = t,
        h = (0, k.A)(x),
        j = (0, C.A)(),
        v = (function (t) {
            let { variant: e, claimStatus: s, handleActivationClick: i, cancelCroissant: a, requestInProgress: l } = t;
            if (e === T.s.FREE_FRACTIONAL_NITRO) return { kind: L.L.SUBSCRIBE, text: D.intl.string(D.t.sEAnVH) };
            switch (s) {
                case E.p1.NOT_CLAIMED:
                case E.p1.CLAIM_IN_PROGRESS:
                    return {
                        kind: L.L.DEFAULT,
                        ctaText: D.intl.string(S.default.EL3rU4),
                        ctaVariant: "primary",
                        ctaOnClick: i,
                        processing: l,
                        disclaimer: s === E.p1.CLAIM_IN_PROGRESS ? D.intl.string(S.default.Fs74z9) : void 0,
                    };
                case E.p1.CLAIMED:
                    return {
                        kind: L.L.DEFAULT,
                        ctaText: D.intl.string(S.default["Z2Ipu/"]),
                        ctaVariant: "critical-secondary",
                        ctaOnClick: a,
                        processing: l,
                        disclaimer: D.intl.string(S.default.hjlZZf),
                    };
                case E.p1.CANCELLATION_IN_PROGRESS:
                    return {
                        kind: L.L.DEFAULT,
                        ctaText: D.intl.string(S.default.wBz9aO),
                        ctaVariant: "critical-secondary",
                        ctaDisabled: !0,
                        disclaimer: D.intl.string(S.default.hjlZZf),
                    };
            }
        })({
            variant: o,
            claimStatus: u,
            handleActivationClick: h,
            cancelCroissant: a.useCallback(() => {
                (0, r.A)({
                    title: D.intl.string(S.default["/GObQk"]),
                    subtitle: D.intl.string(S.default["r/jeXi"]),
                    confirmText: D.intl.string(S.default.bVwQhX),
                    variant: "critical",
                    onConfirm: () => (0, A.RB)(E.n9.XGPP),
                }),
                    j(C.xf.CANCEL);
            }, [j]),
            requestInProgress: m,
        });
    return (0, i.jsx)(l.d, {
        transitionState: e,
        onClose: s,
        size: "xl",
        "aria-label": D.intl.string(S.default.ukvxpp),
        children: (0, i.jsxs)("div", {
            className: y.yl,
            children: [
                (0, i.jsxs)("div", {
                    className: y.XN,
                    children: [
                        (0, i.jsx)("img", {
                            className: y.wm,
                            src: "https://cdn.discordapp.com/assets/content/7ade8acce1774614eee4dbeb37b20b44fe7cb2a2b70b5107413ed7ee724e1344.png",
                            alt: "Xbox Game Pass",
                        }),
                        (0, i.jsxs)("div", {
                            className: y.FD,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: y.gY,
                                    children: [
                                        (0, i.jsx)(f.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-strong",
                                            children: D.intl.string(S.default.ukvxpp),
                                        }),
                                        (0, i.jsx)(p.E, {
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: D.intl.format(S.default.FO4faL, { termsLink: (0, O.Wi)() }),
                                        }),
                                    ],
                                }),
                                v.kind === L.L.SUBSCRIBE
                                    ? (0, i.jsx)(N.A, {
                                          fullWidth: !0,
                                          defaultTextOverride: v.text,
                                          subscriptionTier: I.pe.TIER_2,
                                      })
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(n.$, {
                                                  fullWidth: !0,
                                                  variant: v.ctaVariant,
                                                  size: "md",
                                                  text: v.ctaText,
                                                  onClick: v.ctaOnClick,
                                                  disabled: v.ctaDisabled,
                                                  loading: v.processing,
                                              }),
                                              null != v.disclaimer &&
                                                  (0, i.jsxs)("div", {
                                                      className: y.ed,
                                                      children: [
                                                          (0, i.jsx)(b.m, { size: "xs", color: "var(--text-subtle)" }),
                                                          (0, i.jsx)(p.E, {
                                                              variant: "text-xs/medium",
                                                              color: "text-subtle",
                                                              children: v.disclaimer,
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
                    className: y.Hh,
                    children: [
                        (0, i.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b565e9fbc877550c994314613b3d30af48001372642b027b45bd577f71a86442.png",
                            className: y.d3,
                            alt: "",
                        }),
                        (0, i.jsx)("div", { className: y.gm }),
                        (0, i.jsx)("div", {
                            className: y.b,
                            children: (0, i.jsx)(c.K, {
                                "aria-label": D.intl.string(D.t.cpT0Cq),
                                onClick: s,
                                icon: g.d,
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: y.Jo,
                            children: F.map((t, e) => {
                                let { icon: s, message: a, tooltip: l } = t;
                                return (0, i.jsxs)(
                                    "div",
                                    {
                                        className: y.vD,
                                        children: [
                                            (0, i.jsx)(s, { size: "sm", color: "var(--icon-strong)" }),
                                            (0, i.jsx)(p.E, {
                                                variant: "text-md/medium",
                                                color: "text-default",
                                                children: D.intl.string(a),
                                            }),
                                            null != l &&
                                                (0, i.jsx)("div", {
                                                    className: y.Jn,
                                                    children: (0, i.jsx)(d.m, {
                                                        text: D.intl.string(l),
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
function P(t) {
    let { transitionState: e, onClose: s, sourceAnalyticsLocations: l } = t,
        n = (0, T.V)(),
        { status: c, redirect: r, requestInProgress: d } = (0, R.r)(),
        { analyticsLocations: o } = (0, j.Ay)(
            ...(null != l ? [l, h.A.CROISSANT_REWARD_MODAL] : [h.A.CROISSANT_REWARD_MODAL]),
        ),
        u = n === T.s.NONE || n === T.s.NON_NITRO;
    a.useEffect(() => {
        u && s();
    }, [u, s]);
    let x = a.useRef(!1);
    return (a.useEffect(() => {
        u || x.current || ((x.current = !0), v.default.track(_.HAw.OPEN_MODAL, { type: C.$p, location_stack: o }));
    }, [u, o]),
    u)
        ? null
        : (0, i.jsx)(j.f5, {
              value: o,
              children: (0, i.jsx)(z, {
                  transitionState: e,
                  onClose: s,
                  variant: n,
                  claimStatus: c,
                  redirect: r,
                  requestInProgress: d,
              }),
          });
}
