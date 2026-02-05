i.d(t, { b: () => x });
var r = i(627968);
i(64700);
var n = i(877624),
    s = i(311907),
    a = i(397927),
    l = i(937008),
    o = i(807098),
    c = i(412260),
    d = i(810498),
    m = i(985018),
    u = i(708611);
function x() {
    let { claimableRewards: e } = (0, l.Pv)(),
        t = (0, s.bG)([c.A], () => {
            let e = c.A.getMarketingComponentByType(n.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        i = (0, o.T)(t?.bannerAsset),
        x = (0, o.T)(t?.avatarAsset);
    if (null == t || null == e || 0 === e.length) return null;
    let C = (0, d.gc)(i),
        g = t?.gradient,
        p =
            null != g && null != g.colors && g.colors.length >= 2
                ? (0, d.K5)({ gradient: g.colors, angle: g.angle ?? void 0 })
                : void 0,
        T = (0, d.x)(C, p);
    return (0, r.jsxs)("div", {
        className: u.kL,
        style: T,
        children: [
            (0, r.jsxs)("div", {
                className: u.V_,
                children: [
                    (0, r.jsx)(a.Text, {
                        variant: "text-md/bold",
                        color: "always-white",
                        children: m.intl.string(m.t.OEtqpm),
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: m.intl.formatToPlainString(m.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != x && (0, r.jsx)("img", { alt: "gift promotion reward", src: x, className: u.my }),
        ],
    });
}
