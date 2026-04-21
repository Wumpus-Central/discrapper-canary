l.d(t, { A: () => w });
var a = l(627968),
    n = l(64700),
    r = l(503698),
    i = l.n(r),
    o = l(892227),
    s = l(311907),
    d = l(964892),
    c = l(916845),
    u = l(732955),
    p = l(303136),
    m = l(31502),
    h = l(320118),
    x = l(976860),
    b = l(309954),
    y = l(287809),
    f = l(975571),
    g = l(474090),
    v = l(920050),
    _ = l(94264),
    E = l(235365),
    C = l(566119),
    j = l(788868),
    S = l(652215),
    T = l(901123),
    A = l(490285),
    k = l(985018),
    P = l(757705),
    I = l(268920),
    R = l(633217),
    N = l(909340);
let M = () =>
    (0, a.jsx)("div", { className: P.s, children: (0, a.jsx)(p.A, { src: R.A, fallbackImage: I.A, className: P.Cb }) });
function D() {
    return (0, m.Q)("PremiumTenureRewardsOrbsBalancePopover")
        ? `${T.BV.NITRO_HOME}?perk=${v.NITRO_ORBS_REWARDS_CARD_ID}`
        : `${T.BV.NITRO_HOME}?section=${E.L}`;
}
function O() {
    (0, C.RQ)(), (0, x.pX)(D());
}
function B() {
    (0, C.gP)(), (0, x.pX)(D());
}
function L() {
    (0, C.b)(), window.open(f.A.getArticleURL(S.MVz.ORBS_FAQ), "_blank");
}
function w(e) {
    let { targetElementRef: t, shouldShow: l, onRequestClose: r, ctaText: m, ctaOnClick: x } = e,
        { passesGeneralUIInvariant: f, programReward: v } = (0, h.F)({
            location: "PremiumTenureRewardsOrbsBalancePopover",
        }),
        E = (0, s.bG)([y.default], () => y.default.getCurrentUser()),
        { balance: C } = (0, b.W)(),
        T = !(0, g.ki)(E),
        I = n.useMemo(() => {
            let e = (0, g.YE)(E, j.PremiumTypes.TIER_2);
            if (!f || T) return null;
            if (e && null != v) {
                let e = (0, o.default)(new Date(v.next_reward_date), new Date());
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(u.EYj, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: k.intl.format(A.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: O,
                            }),
                        }),
                        (0, a.jsx)(_.A, {}),
                    ],
                });
            }
            return null;
        }, [E, T, v, f]),
        R = (C ?? 0) >= 4100;
    return (0, a.jsx)(d.x, {
        targetElementRef: t,
        shouldShow: l,
        onRequestClose: r,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, a.jsx)(u.NPJ, {
            theme: R ? S.NJ8.DARKER : void 0,
            children: (e) =>
                (0, a.jsxs)("div", {
                    className: i()(e, P.j),
                    children: [
                        R && (0, a.jsx)(p.A, { src: N.A, className: P.yG }),
                        (0, a.jsxs)("div", {
                            className: P.Qs,
                            children: [
                                (0, a.jsx)(c.q, { onClick: r }),
                                (0, a.jsxs)("div", {
                                    className: P.hQ,
                                    children: [
                                        (0, a.jsx)(M, {}),
                                        (0, a.jsxs)("div", {
                                            className: P.y$,
                                            children: [
                                                (C ?? 0) > 0 &&
                                                    (0, a.jsxs)("div", {
                                                        className: P.E2,
                                                        children: [
                                                            (0, a.jsx)(u.EYj, {
                                                                variant: "display-lg",
                                                                className: P.K,
                                                                children: C ?? 0,
                                                            }),
                                                            (0, a.jsx)(u.EYj, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: k.intl.string(A.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                I,
                                            ],
                                        }),
                                        (0, a.jsx)(u.$nd, {
                                            text: m,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: x,
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(u.EYj, {
                                            variant: "text-xs/normal",
                                            color: T ? "text-default" : "text-muted",
                                            className: P.CU,
                                            children: T
                                                ? k.intl.format(A.default.juvXqj, { deepLinkToNitroOrbs: B })
                                                : k.intl.format(A.default.fhAVek, { helpdeskArticle: L }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
        }),
    });
}
