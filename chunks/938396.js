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
    f = l(474090),
    y = l(94264),
    E = l(235365),
    v = l(566119),
    S = l(788868),
    j = l(652215),
    T = l(901123),
    C = l(723468),
    P = l(985018),
    A = l(99720),
    R = l(268920),
    _ = l(633217),
    k = l(909340);
let I = () =>
    (0, a.jsx)("div", { className: A.s, children: (0, a.jsx)(p.A, { src: _.A, fallbackImage: R.A, className: A.Cb }) });
function N() {
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
        { balance: R } = (0, x.W)(),
        _ = !(0, f.ki)(T),
        O = n.useMemo(() => {
            let e = (0, f.YE)(T, S.PremiumTypes.TIER_2);
            if (!E || _) return null;
            if (e && null != v) {
                let e = (0, s.default)(new Date(v.next_reward_date), new Date());
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(d.EYj, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: P.intl.format(C.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: N,
                            }),
                        }),
                        (0, a.jsx)(y.A, {}),
                    ],
                });
            }
            return null;
        }, [T, _, v, E]),
        L = (R ?? 0) >= 4100;
    return (0, a.jsx)(u.x, {
        targetElementRef: t,
        shouldShow: l,
        onRequestClose: r,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, a.jsx)(d.NPJ, {
            theme: L ? j.NJ8.DARKER : void 0,
            children: (e) =>
                (0, a.jsxs)("div", {
                    className: i()(e, A.j),
                    children: [
                        L && (0, a.jsx)(p.A, { src: k.A, className: A.yG }),
                        (0, a.jsxs)("div", {
                            className: A.Qs,
                            children: [
                                (0, a.jsx)(c.q, { onClick: r }),
                                (0, a.jsxs)("div", {
                                    className: A.hQ,
                                    children: [
                                        (0, a.jsx)(I, {}),
                                        (0, a.jsxs)("div", {
                                            className: A.y$,
                                            children: [
                                                (R ?? 0) > 0 &&
                                                    (0, a.jsxs)("div", {
                                                        className: A.E2,
                                                        children: [
                                                            (0, a.jsx)(d.EYj, {
                                                                variant: "display-lg",
                                                                className: A.K,
                                                                children: R ?? 0,
                                                            }),
                                                            (0, a.jsx)(d.EYj, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: P.intl.string(C.default.KclK9z),
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
                                            color: _ ? "text-default" : "text-muted",
                                            className: A.CU,
                                            children: _
                                                ? P.intl.format(C.default.juvXqj, { deepLinkToNitroOrbs: D })
                                                : P.intl.format(C.default.fhAVek, { helpdeskArticle: M }),
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
