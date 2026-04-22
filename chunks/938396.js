n.d(t, { A: () => I });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(892227),
    u = n(311907),
    c = n(964892),
    o = n(916845),
    d = n(834730),
    m = n(43990),
    f = n(821609),
    x = n(303136),
    h = n(31502),
    A = n(320118),
    j = n(976860),
    v = n(309954),
    N = n(287809),
    b = n(975571),
    g = n(474090),
    C = n(920050),
    R = n(94264),
    E = n(235365),
    k = n(566119),
    p = n(788868),
    S = n(652215),
    O = n(901123),
    y = n(490285),
    _ = n(985018),
    D = n(757705),
    T = n(268920),
    M = n(633217),
    L = n(909340);
let w = () =>
    (0, l.jsx)("div", { className: D.s, children: (0, l.jsx)(x.A, { src: M.A, fallbackImage: T.A, className: D.Cb }) });
function B() {
    return (0, h.Q)("PremiumTenureRewardsOrbsBalancePopover")
        ? `${O.BV.NITRO_HOME}?perk=${C.NITRO_ORBS_REWARDS_CARD_ID}`
        : `${O.BV.NITRO_HOME}?section=${E.L}`;
}
function F() {
    (0, k.RQ)(), (0, j.pX)(B());
}
function P() {
    (0, k.gP)(), (0, j.pX)(B());
}
function $() {
    (0, k.b)(), window.open(b.A.getArticleURL(S.MVz.ORBS_FAQ), "_blank");
}
function I(e) {
    let { targetElementRef: t, shouldShow: n, onRequestClose: r, ctaText: h, ctaOnClick: j } = e,
        { passesGeneralUIInvariant: b, programReward: C } = (0, A.F)({
            location: "PremiumTenureRewardsOrbsBalancePopover",
        }),
        E = (0, u.bG)([N.default], () => N.default.getCurrentUser()),
        { balance: k } = (0, v.W)(),
        O = !(0, g.ki)(E),
        T = a.useMemo(() => {
            let e = (0, g.YE)(E, p.PremiumTypes.TIER_2);
            if (!b || O) return null;
            if (e && null != C) {
                let e = (0, i.default)(new Date(C.next_reward_date), new Date());
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(d.E, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: _.intl.format(y.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: F,
                            }),
                        }),
                        (0, l.jsx)(R.A, {}),
                    ],
                });
            }
            return null;
        }, [E, O, C, b]),
        M = (k ?? 0) >= 4100;
    return (0, l.jsx)(c.x, {
        targetElementRef: t,
        shouldShow: n,
        onRequestClose: r,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, l.jsx)(m.N, {
            theme: M ? S.NJ8.DARKER : void 0,
            children: (e) =>
                (0, l.jsxs)("div", {
                    className: s()(e, D.j),
                    children: [
                        M && (0, l.jsx)(x.A, { src: L.A, className: D.yG }),
                        (0, l.jsxs)("div", {
                            className: D.Qs,
                            children: [
                                (0, l.jsx)(o.q, { onClick: r }),
                                (0, l.jsxs)("div", {
                                    className: D.hQ,
                                    children: [
                                        (0, l.jsx)(w, {}),
                                        (0, l.jsxs)("div", {
                                            className: D.y$,
                                            children: [
                                                (k ?? 0) > 0 &&
                                                    (0, l.jsxs)("div", {
                                                        className: D.E2,
                                                        children: [
                                                            (0, l.jsx)(d.E, {
                                                                variant: "display-lg",
                                                                className: D.K,
                                                                children: k ?? 0,
                                                            }),
                                                            (0, l.jsx)(d.E, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: _.intl.string(y.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                T,
                                            ],
                                        }),
                                        (0, l.jsx)(f.$, {
                                            text: h,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: j,
                                            fullWidth: !0,
                                        }),
                                        (0, l.jsx)(d.E, {
                                            variant: "text-xs/normal",
                                            color: O ? "text-default" : "text-muted",
                                            className: D.CU,
                                            children: O
                                                ? _.intl.format(y.default.juvXqj, { deepLinkToNitroOrbs: P })
                                                : _.intl.format(y.default.fhAVek, { helpdeskArticle: $ }),
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
