l.d(t, { A: () => O });
var a = l(627968),
    n = l(64700),
    r = l(503698),
    i = l.n(r),
    s = l(892227),
    o = l(311907),
    u = l(964892),
    c = l(916845),
    d = l(732955),
    p = l(303136),
    m = l(320118),
    h = l(976860),
    x = l(309954),
    b = l(287809),
    g = l(975571),
    y = l(474090),
    f = l(94264),
    E = l(235365),
    v = l(566119),
    S = l(788868),
    j = l(652215),
    T = l(901123),
    C = l(49370),
    R = l(985018),
    P = l(125634),
    _ = l(268920),
    A = l(633217),
    I = l(909340);
let N = () =>
    (0, a.jsx)("div", { className: P.s, children: (0, a.jsx)(p.A, { src: A.A, fallbackImage: _.A, className: P.Cb }) });
function k() {
    (0, v.RQ)(), (0, h.pX)(`${T.BV.NITRO_HOME}?section=${E.L}`);
}
function D() {
    (0, v.gP)(), (0, h.pX)(`${T.BV.NITRO_HOME}?section=${E.L}`);
}
function M() {
    (0, v.b)(), window.open(g.A.getArticleURL(j.MVz.ORBS_FAQ), "_blank");
}
function O(e) {
    let { targetElementRef: t, shouldShow: l, onRequestClose: r, ctaText: h, ctaOnClick: g } = e,
        { passesGeneralUIInvariant: E, programReward: v } = (0, m.F)({
            location: "PremiumTenureRewardsOrbsBalancePopover",
        }),
        T = (0, o.bG)([b.default], () => b.default.getCurrentUser()),
        { balance: _ } = (0, x.W)(),
        A = !(0, y.ki)(T),
        O = n.useMemo(() => {
            let e = (0, y.YE)(T, S.PremiumTypes.TIER_2);
            if (!E || A) return null;
            if (e && null != v) {
                let e = (0, s.default)(new Date(v.next_reward_date), new Date());
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(d.EYj, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: R.intl.format(C.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: k,
                            }),
                        }),
                        (0, a.jsx)(f.A, {}),
                    ],
                });
            }
            return null;
        }, [T, A, v, E]),
        B = (_ ?? 0) >= 4100;
    return (0, a.jsx)(u.x, {
        targetElementRef: t,
        shouldShow: l,
        onRequestClose: r,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, a.jsx)(d.NPJ, {
            theme: B ? j.NJ8.DARKER : void 0,
            children: (e) =>
                (0, a.jsxs)("div", {
                    className: i()(e, P.j),
                    children: [
                        B && (0, a.jsx)(p.A, { src: I.A, className: P.yG }),
                        (0, a.jsxs)("div", {
                            className: P.Qs,
                            children: [
                                (0, a.jsx)(c.q, { onClick: r }),
                                (0, a.jsxs)("div", {
                                    className: P.hQ,
                                    children: [
                                        (0, a.jsx)(N, {}),
                                        (0, a.jsxs)("div", {
                                            className: P.y$,
                                            children: [
                                                (_ ?? 0) > 0 &&
                                                    (0, a.jsxs)("div", {
                                                        className: P.E2,
                                                        children: [
                                                            (0, a.jsx)(d.EYj, {
                                                                variant: "display-lg",
                                                                className: P.K,
                                                                children: _ ?? 0,
                                                            }),
                                                            (0, a.jsx)(d.EYj, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: R.intl.string(C.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                O,
                                            ],
                                        }),
                                        (0, a.jsx)(d.$nd, {
                                            text: h,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: g,
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(d.EYj, {
                                            variant: "text-xs/normal",
                                            color: A ? "text-default" : "text-muted",
                                            className: P.CU,
                                            children: A
                                                ? R.intl.format(C.default.juvXqj, { deepLinkToNitroOrbs: D })
                                                : R.intl.format(C.default.fhAVek, { helpdeskArticle: M }),
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
