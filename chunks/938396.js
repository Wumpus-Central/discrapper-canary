n.d(t, {
    A: () => D,
});
var r = n(627968),
    i = n(64700),
    a = n(892227),
    o = n(311907),
    s = n(964892),
    l = n(916845),
    c = n(732955),
    u = n(775602),
    d = n(607470),
    f = n(895944),
    p = n(649032),
    _ = n(976860),
    h = n(309954),
    m = n(287809),
    g = n(975571),
    E = n(474090),
    y = n(94264),
    b = n(788868),
    O = n(652215),
    v = n(901123),
    A = n(49370),
    I = n(985018),
    S = n(125634),
    T = n(268920),
    C = n(633217),
    N = n(909340);
let w = () => {
        let e = (0, o.bG)([u.A], () => u.A.useReducedMotion);
        return (0, r.jsx)("div", {
            className: S.s,
            children: e
                ? (0, r.jsx)("img", {
                      src: T.A,
                      className: S.Cb,
                      alt: "Orb",
                  })
                : (0, r.jsxs)(d.A, {
                      autoPlay: !0,
                      loop: !0,
                      className: S.Cb,
                      children: [
                          (0, r.jsx)("source", {
                              src: C.A,
                              type: "video/webm",
                          }),
                          (0, r.jsx)("img", {
                              src: T.A,
                              className: S.Cb,
                              alt: "Orb",
                          }),
                      ],
                  }),
        });
    },
    R = 4100;

function P() {
    (0, _.pX)("".concat(v.BV.NITRO_HOME, "?section=orbs"));
}

function D(e) {
    let { targetElementRef: t, shouldShow: n, onRequestClose: _, ctaText: v, ctaOnClick: T } = e,
        C = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        D = (0, o.bG)([f.A], () => f.A.getRewardForProgram(p.W.NITRO)),
        L = (0, o.bG)([m.default], () => m.default.getCurrentUser()),
        { balance: x } = (0, h.W)(),
        M = !(0, E.ki)(L),
        j = i.useMemo(() => {
            let e = (0, E.YE)(L, b.PremiumTypes.TIER_2);
            if (!f.A.passesGeneralUIInvariant(p.W.NITRO) || M) return null;
            if (e && null != D) {
                let e = (0, a.default)(new Date(D.next_reward_date), new Date());
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(c.EYj, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: I.intl.format(A.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: P,
                            }),
                        }),
                        (0, r.jsx)(y.A, {}),
                    ],
                });
            }
            return null;
        }, [L, M, D]);
    return (0, r.jsxs)(s.x, {
        targetElementRef: t,
        shouldShow: n,
        onRequestClose: _,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: [
            (null != x ? x : 0) >= R &&
                (0, r.jsx)(d.A, {
                    autoPlay: !C,
                    loop: !C,
                    muted: !0,
                    playsInline: !0,
                    tabIndex: -1,
                    className: S.yG,
                    src: N.A,
                }),
            (0, r.jsxs)("div", {
                className: S.Qs,
                children: [
                    (0, r.jsx)(l.q, {
                        onClick: _,
                    }),
                    (0, r.jsxs)("div", {
                        className: S.hQ,
                        children: [
                            (0, r.jsx)(w, {}),
                            (0, r.jsxs)("div", {
                                className: S.y$,
                                children: [
                                    (null != x ? x : 0) > 0 &&
                                        (0, r.jsxs)("div", {
                                            className: S.E2,
                                            children: [
                                                (0, r.jsx)(c.EYj, {
                                                    variant: "display-lg",
                                                    className: S.K,
                                                    children: null != x ? x : 0,
                                                }),
                                                (0, r.jsx)(c.EYj, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: I.intl.string(A.default.KclK9z),
                                                }),
                                            ],
                                        }),
                                    j,
                                ],
                            }),
                            (0, r.jsx)(c.$nd, {
                                text: v,
                                variant: "primary",
                                size: "sm",
                                onClick: T,
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(c.EYj, {
                                variant: "text-xs/normal",
                                color: M ? "text-default" : "text-muted",
                                className: S.CU,
                                children: M
                                    ? I.intl.format(A.default.juvXqj, {
                                          deepLinkToNitroOrbs: P,
                                      })
                                    : I.intl.format(A.default.fhAVek, {
                                          helpdeskArticle: g.A.getArticleURL(O.MVz.ORBS_FAQ),
                                      }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
