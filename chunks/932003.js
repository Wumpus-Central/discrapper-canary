r.d(t, { b: () => T });
var n = r(627968);
r(64700);
var i = r(877624),
    a = r(311907),
    s = r(397927),
    l = r(937008),
    o = r(807098),
    c = r(412260),
    d = r(810498),
    m = r(985018),
    u = r(4733);
function T() {
    let { claimableRewards: e } = (0, l.Pv)(),
        t = (0, a.bG)([c.A], () => {
            let e = c.A.getMarketingComponentByType(i.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        r = (0, o.T)(t?.bannerAsset),
        T = (0, o.T)(t?.avatarAsset);
    if (null == t || null == e || 0 === e.length) return null;
    let g = (0, d.gc)(r),
        I = t?.gradient,
        x =
            null != I && null != I.colors && I.colors.length >= 2
                ? (0, d.K5)({ gradient: I.colors, angle: I.angle ?? void 0 })
                : void 0,
        p = (0, d.x)(g, x);
    return (0, n.jsxs)("div", {
        className: u.kL,
        style: p,
        children: [
            (0, n.jsxs)("div", {
                className: u.V_,
                children: [
                    (0, n.jsx)(s.Text, {
                        variant: "text-md/bold",
                        color: "always-white",
                        children: m.intl.string(m.t.OEtqpm),
                    }),
                    (0, n.jsx)(s.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: m.intl.formatToPlainString(m.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != T && (0, n.jsx)("img", { alt: "gift promotion reward", src: T, className: u.my }),
        ],
    });
}
