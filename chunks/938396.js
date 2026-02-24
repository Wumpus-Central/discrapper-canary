l.d(t, { A: () => B });
var a = l(627968),
    n = l(64700),
    r = l(503698),
    i = l.n(r),
    s = l(892227),
    o = l(311907),
    u = l(964892),
    c = l(916845),
    d = l(732955),
    p = l(775602),
    m = l(607470),
    h = l(320118),
    x = l(976860),
    b = l(309954),
    g = l(287809),
    y = l(975571),
    f = l(474090),
    E = l(94264),
    v = l(235365),
    S = l(566119),
    j = l(788868),
    T = l(652215),
    C = l(901123),
    P = l(49370),
    R = l(985018),
    A = l(125634),
    _ = l(268920),
    I = l(633217),
    N = l(909340);
let k = () => {
    let e = (0, o.bG)([p.A], () => p.A.useReducedMotion);
    return (0, a.jsx)("div", {
        className: A.s,
        children: e
            ? (0, a.jsx)("img", { src: _.A, className: A.Cb, alt: "Orb" })
            : (0, a.jsxs)(m.A, {
                  autoPlay: !0,
                  loop: !0,
                  className: A.Cb,
                  children: [
                      (0, a.jsx)("source", { src: I.A, type: "video/webm" }),
                      (0, a.jsx)("img", { src: _.A, className: A.Cb, alt: "Orb" }),
                  ],
              }),
    });
};
function D() {
    (0, S.RQ)(), (0, x.pX)(`${C.BV.NITRO_HOME}?section=${v.L}`);
}
function M() {
    (0, S.gP)(), (0, x.pX)(`${C.BV.NITRO_HOME}?section=${v.L}`);
}
function O() {
    (0, S.b)(), window.open(y.A.getArticleURL(T.MVz.ORBS_FAQ), "_blank");
}
function B(e) {
    let { targetElementRef: t, shouldShow: l, onRequestClose: r, ctaText: x, ctaOnClick: y } = e,
        v = (0, o.bG)([p.A], () => p.A.useReducedMotion),
        { passesGeneralUIInvariant: S, programReward: C } = (0, h.F)({
            location: "PremiumTenureRewardsOrbsBalancePopover",
        }),
        _ = (0, o.bG)([g.default], () => g.default.getCurrentUser()),
        { balance: I } = (0, b.W)(),
        B = !(0, f.ki)(_),
        V = n.useMemo(() => {
            let e = (0, f.YE)(_, j.PremiumTypes.TIER_2);
            if (!S || B) return null;
            if (e && null != C) {
                let e = (0, s.default)(new Date(C.next_reward_date), new Date());
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(d.EYj, {
                            variant: "text-xs/normal",
                            color: "text-default",
                            children: R.intl.format(P.default["AvL/At"], {
                                days: Math.max(1, e),
                                deepLinkToNitroOrbs: D,
                            }),
                        }),
                        (0, a.jsx)(E.A, {}),
                    ],
                });
            }
            return null;
        }, [_, B, C, S]),
        w = (I ?? 0) >= 4100;
    return (0, a.jsx)(u.x, {
        targetElementRef: t,
        shouldShow: l,
        onRequestClose: r,
        position: "bottom",
        gradientColor: "blue",
        modal: !0,
        closeOnClickOutside: !0,
        children: (0, a.jsx)(d.NPJ, {
            theme: w ? T.NJ8.DARKER : void 0,
            children: (e) =>
                (0, a.jsxs)("div", {
                    className: i()(e, A.j),
                    children: [
                        w &&
                            (0, a.jsx)(m.A, {
                                autoPlay: !v,
                                loop: !v,
                                muted: !0,
                                playsInline: !0,
                                tabIndex: -1,
                                className: A.yG,
                                src: N.A,
                            }),
                        (0, a.jsxs)("div", {
                            className: A.Qs,
                            children: [
                                (0, a.jsx)(c.q, { onClick: r }),
                                (0, a.jsxs)("div", {
                                    className: A.hQ,
                                    children: [
                                        (0, a.jsx)(k, {}),
                                        (0, a.jsxs)("div", {
                                            className: A.y$,
                                            children: [
                                                (I ?? 0) > 0 &&
                                                    (0, a.jsxs)("div", {
                                                        className: A.E2,
                                                        children: [
                                                            (0, a.jsx)(d.EYj, {
                                                                variant: "display-lg",
                                                                className: A.K,
                                                                children: I ?? 0,
                                                            }),
                                                            (0, a.jsx)(d.EYj, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: R.intl.string(P.default.KclK9z),
                                                            }),
                                                        ],
                                                    }),
                                                V,
                                            ],
                                        }),
                                        (0, a.jsx)(d.$nd, {
                                            text: x,
                                            variant: "primary",
                                            size: "sm",
                                            onClick: y,
                                            fullWidth: !0,
                                        }),
                                        (0, a.jsx)(d.EYj, {
                                            variant: "text-xs/normal",
                                            color: B ? "text-default" : "text-muted",
                                            className: A.CU,
                                            children: B
                                                ? R.intl.format(P.default.juvXqj, { deepLinkToNitroOrbs: M })
                                                : R.intl.format(P.default.fhAVek, { helpdeskArticle: O }),
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
