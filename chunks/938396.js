n.d(t, {
    A: () => D,
});
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
    _ = n(976860),
    h = n(309954),
    m = n(287809),
    g = n(975571),
    E = n(474090),
    y = n(385243),
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
        let e = (0, s.bG)([u.A], () => u.A.useReducedMotion);
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
        C = (0, s.bG)([u.A], () => u.A.useReducedMotion),
        D = (0, s.bG)([f.A], () => f.A.getRewardForProgram(p.W.NITRO)),
        x = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
        { balance: L } = (0, h.W)(),
        j = i.useMemo(() => {
            let e = (0, E.YE)(x, b.PremiumTypes.TIER_2),
                t = !(0, E.ki)(x);
            if (!f.A.passesGeneralUIInvariant(p.W.NITRO)) return null;
            if (t)
                return (0, r.jsx)(c.EYj, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    children: I.intl.format(A.default.cjEl8a, {
                        deepLinkToNitroOrbs: P,
                    }),
                });
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
        }, [x, D]);
    return (0, r.jsxs)(o.x, {
        targetElementRef: t,
        shouldShow: n,
        onRequestClose: _,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: [
            (null != L ? L : 0) >= R &&
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
                                    (0, r.jsxs)("div", {
                                        className: S.E2,
                                        children: [
                                            (0, r.jsx)(c.EYj, {
                                                variant: "display-lg",
                                                className: S.K,
                                                children: null != L ? L : 0,
                                            }),
                                            (null != L ? L : 0) > 0 &&
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
                                color: "text-muted",
                                className: S.CU,
                                children: I.intl.format(A.default.fhAVek, {
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
