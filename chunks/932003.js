n.d(t, { b: () => _ });
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    a = n(877624),
    o = n(17928),
    s = n(978656),
    u = n(834730),
    c = n(937008),
    d = n(807098),
    m = n(374200),
    E = n(380619),
    p = n(375708),
    C = n(756974);
function _() {
    let { claimableRewards: e } = (0, c.Pv)(),
        t = (0, o.bG)([m.A], () => {
            let e = m.A.getMarketingComponentByType(a.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        n = (0, d.T)(t?.bannerAsset),
        r = (0, d.T)(t?.avatarAsset),
        _ = t?.assetVariant === s.Y.LARGE_TILTED;
    if (null == t || null == e || 0 === e.length) return null;
    let h = (0, E.gc)(n),
        A = t?.gradient,
        N =
            null != A && null != A.colors && A.colors.length >= 2
                ? (0, E.K5)({ gradient: A.colors, angle: A.angle ?? void 0 })
                : void 0,
        T = (0, E.x)(h, N);
    return (0, l.jsxs)("div", {
        className: C.kL,
        style: T,
        children: [
            (0, l.jsxs)("div", {
                className: C.V_,
                children: [
                    (0, l.jsx)(u.E, {
                        variant: "text-md/bold",
                        color: "always-white",
                        children: p.intl.string(p.t.OEtqpm),
                    }),
                    (0, l.jsx)(u.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: p.intl.formatToPlainString(p.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != r &&
                (0, l.jsx)("div", {
                    className: C.R3,
                    children: (0, l.jsx)("img", {
                        alt: "gift promotion reward",
                        src: r,
                        className: i()(C.my, { [C.R_]: _ }),
                    }),
                }),
        ],
    });
}
