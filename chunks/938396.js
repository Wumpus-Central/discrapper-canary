n.d(t, { A: () => R });
var r = n(627968),
    i = n(64700),
    a = n(892227),
    s = n(311907),
    o = n(964892),
    l = n(916845),
    c = n(732955),
    u = n(775602),
    d = n(607470),
    f = n(895944),
    p = n(649032),
    _ = n(309954),
    h = n(287809),
    m = n(975571),
    g = n(474090),
    E = n(385243),
    b = n(788868),
    y = n(652215),
    O = n(49370),
    A = n(985018),
    v = n(125634),
    S = n(268920),
    I = n(633217),
    T = n(909340);
let C = () => {
        let e = (0, s.bG)([u.A], () => u.A.useReducedMotion);
        return (0, r.jsx)("div", {
            className: v.s,
            children: e
                ? (0, r.jsx)("img", {
                      src: S.A,
                      className: v.Cb,
                      alt: "Orb",
                  })
                : (0, r.jsxs)(d.A, {
                      autoPlay: !0,
                      loop: !0,
                      className: v.Cb,
                      children: [
                          (0, r.jsx)("source", {
                              src: I.A,
                              type: "video/webm",
                          }),
                          (0, r.jsx)("img", {
                              src: S.A,
                              className: v.Cb,
                              alt: "Orb",
                          }),
                      ],
                  }),
        });
    },
    N = 4100;
function R(e) {
    let { targetElementRef: t, shouldShow: n, onRequestClose: S, ctaText: I, ctaOnClick: R } = e,
        w = (0, s.bG)([u.A], () => u.A.useReducedMotion),
        P = (0, s.bG)([f.A], () => f.A.getRewardForProgram(p.W.NITRO)),
        D = (0, s.bG)([h.default], () => h.default.getCurrentUser()),
        { balance: x } = (0, _.W)(),
        L = i.useMemo(() => {
            let e = (0, g.YE)(D, b.PremiumTypes.TIER_2),
                t = !(0, g.ki)(D);
            if (!f.A.passesGeneralUIInvariant(p.W.NITRO)) return null;
            if (t)
                return (0, r.jsx)(c.EYj, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    children: A.intl.format(O.default.cjEl8a, {
                        deepLinkToNitroOrbs: () => {},
                    }),
                });
            if (e && null != P) {
                let e = (0, a.default)(new Date(P.next_reward_date), new Date());
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(c.EYj, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: A.intl.format(O.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: () => {},
                            }),
                        }),
                        (0, r.jsx)(E.A, {}),
                    ],
                });
            }
            return null;
        }, [D, P]);
    return (0, r.jsxs)(o.x, {
        targetElementRef: t,
        shouldShow: n,
        onRequestClose: S,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: [
            (null != x ? x : 0) >= N &&
                (0, r.jsx)(d.A, {
                    autoPlay: !w,
                    loop: !w,
                    muted: !0,
                    playsInline: !0,
                    tabIndex: -1,
                    className: v.yG,
                    src: T.A,
                }),
            (0, r.jsxs)("div", {
                className: v.Qs,
                children: [
                    (0, r.jsx)(l.q, { onClick: S }),
                    (0, r.jsxs)("div", {
                        className: v.hQ,
                        children: [
                            (0, r.jsx)(C, {}),
                            (0, r.jsxs)("div", {
                                className: v.y$,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: v.E2,
                                        children: [
                                            (0, r.jsx)(c.EYj, {
                                                variant: "display-lg",
                                                className: v.K,
                                                children: null != x ? x : 0,
                                            }),
                                            (null != x ? x : 0) > 0 &&
                                                (0, r.jsx)(c.EYj, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: A.intl.string(O.default.KclK9z),
                                                }),
                                        ],
                                    }),
                                    L,
                                ],
                            }),
                            (0, r.jsx)(c.$nd, {
                                text: I,
                                variant: "primary",
                                size: "sm",
                                onClick: R,
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(c.EYj, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                className: v.CU,
                                children: A.intl.format(O.default.fhAVek, {
                                    helpdeskArticle: m.A.getArticleURL(y.MVz.ORBS_FAQ),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
