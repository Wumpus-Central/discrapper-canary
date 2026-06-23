s.d(e, { default: () => B });
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
    v = s(183972),
    A = s(196099),
    C = s(297966),
    N = s(792656),
    E = s(174459),
    k = s(985603),
    L = s(777376),
    O = s(983060),
    S = s(758209),
    R = s(185797),
    _ = s(693037),
    D = s(674567),
    T = s(652215),
    I = s(788868),
    y = s(237146),
    z = s(375708),
    M = s(691539);
let P = [
    { icon: o.B, message: y.default.bpksos },
    { icon: u.h, message: y.default["5rbQbD"] },
    { icon: x.o, message: y.default.b1X5Jf, tooltip: y.default.AyECej },
    { icon: m.o, message: y.default.xZiyZj },
];
function w(t) {
    let { transitionState: e, onClose: s, variant: o, claimStatus: u, redirect: x, requestInProgress: m } = t,
        h = (0, S.A)(x),
        j = (0, A.M)("xbox"),
        E = (function (t) {
            let { variant: e, claimStatus: s, handleActivationClick: i, cancelCroissant: a, requestInProgress: l } = t;
            if (e === D.s.NO_ACCESS) return { kind: R.L.SUBSCRIBE, text: z.intl.string(z.t.sEAnVH) };
            switch (s) {
                case L.p.NOT_CLAIMED:
                case L.p.CLAIM_IN_PROGRESS:
                    return {
                        kind: R.L.DEFAULT,
                        ctaText: z.intl.string(y.default.EL3rU4),
                        ctaVariant: "primary",
                        ctaOnClick: i,
                        processing: l,
                        disclaimer: s === L.p.CLAIM_IN_PROGRESS ? z.intl.string(y.default.Fs74z9) : void 0,
                    };
                case L.p.CLAIMED:
                    return {
                        kind: R.L.DEFAULT,
                        ctaText: z.intl.string(y.default["Z2Ipu/"]),
                        ctaVariant: "critical-secondary",
                        ctaOnClick: a,
                        processing: l,
                        disclaimer: z.intl.string(y.default.hjlZZf),
                    };
                case L.p.CANCELLATION_IN_PROGRESS:
                    return {
                        kind: R.L.DEFAULT,
                        ctaText: z.intl.string(y.default.wBz9aO),
                        ctaVariant: "critical-secondary",
                        ctaDisabled: !0,
                        disclaimer: z.intl.string(y.default.hjlZZf),
                    };
            }
        })({
            variant: o,
            claimStatus: u,
            handleActivationClick: h,
            cancelCroissant: a.useCallback(() => {
                (0, r.A)({
                    title: z.intl.string(y.default["/GObQk"]),
                    subtitle: z.intl.string(y.default["r/jeXi"]),
                    confirmText: z.intl.string(y.default.bVwQhX),
                    variant: "critical",
                    onConfirm: () => (0, v.RB)(C.n9.XGPP),
                }),
                    j(A.H.CANCEL);
            }, [j]),
            requestInProgress: m,
        });
    return (0, i.jsx)(l.d, {
        transitionState: e,
        onClose: s,
        size: "xl",
        "aria-label": z.intl.string(y.default.ukvxpp),
        children: (0, i.jsxs)("div", {
            className: M.yl,
            children: [
                (0, i.jsxs)("div", {
                    className: M.XN,
                    children: [
                        (0, i.jsx)("img", {
                            className: M.wm,
                            src: "https://cdn.discordapp.com/assets/content/7ade8acce1774614eee4dbeb37b20b44fe7cb2a2b70b5107413ed7ee724e1344.png",
                            alt: "Xbox Game Pass",
                        }),
                        (0, i.jsxs)("div", {
                            className: M.FD,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: M.gY,
                                    children: [
                                        (0, i.jsx)(f.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-strong",
                                            children: z.intl.string(y.default.ukvxpp),
                                        }),
                                        (0, i.jsx)(p.E, {
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: z.intl.format(y.default.FO4faL, { termsLink: (0, O.xA)() }),
                                        }),
                                    ],
                                }),
                                E.kind === R.L.SUBSCRIBE
                                    ? (0, i.jsx)(N.A, {
                                          fullWidth: !0,
                                          defaultTextOverride: E.text,
                                          subscriptionTier: I.pe.TIER_2,
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
                                                      className: M.ed,
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
                    className: M.Hh,
                    children: [
                        (0, i.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b565e9fbc877550c994314613b3d30af48001372642b027b45bd577f71a86442.png",
                            className: M.d3,
                            alt: "",
                        }),
                        (0, i.jsx)("div", { className: M.gm }),
                        (0, i.jsx)("div", {
                            className: M.b,
                            children: (0, i.jsx)(c.K, {
                                "aria-label": z.intl.string(z.t.cpT0Cq),
                                onClick: s,
                                icon: g.d,
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: M.Jo,
                            children: P.map((t, e) => {
                                let { icon: s, message: a, tooltip: l } = t;
                                return (0, i.jsxs)(
                                    "div",
                                    {
                                        className: M.vD,
                                        children: [
                                            (0, i.jsx)(s, { size: "sm", color: "var(--icon-strong)" }),
                                            (0, i.jsx)(p.E, {
                                                variant: "text-md/medium",
                                                color: "text-default",
                                                children: z.intl.string(a),
                                            }),
                                            null != l &&
                                                (0, i.jsx)("div", {
                                                    className: M.Jn,
                                                    children: (0, i.jsx)(d.m, {
                                                        text: z.intl.string(l),
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
function B(t) {
    let { transitionState: e, onClose: s, sourceAnalyticsLocations: l } = t,
        n = (0, D.V)(),
        { status: c, redirect: r, requestInProgress: d } = (0, _.r)(),
        { analyticsLocations: o } = (0, j.Ay)(
            ...(null != l ? [l, h.A.CROISSANT_REWARD_MODAL] : [h.A.CROISSANT_REWARD_MODAL]),
        ),
        u = n === D.s.NONE;
    a.useEffect(() => {
        u && s();
    }, [u, s]);
    let x = a.useRef(!1);
    return (a.useEffect(() => {
        u || x.current || ((x.current = !0), E.default.track(T.HAw.OPEN_MODAL, { type: k.$, location_stack: o }));
    }, [u, o]),
    u)
        ? null
        : (0, i.jsx)(j.f5, {
              value: o,
              children: (0, i.jsx)(w, {
                  transitionState: e,
                  onClose: s,
                  variant: n,
                  claimStatus: c,
                  redirect: r,
                  requestInProgress: d,
              }),
          });
}
