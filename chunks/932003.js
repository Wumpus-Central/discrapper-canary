i.d(t, { b: () => C });
var r = i(627968);
i(64700);
var n = i(877624),
    a = i(311907),
    s = i(397927),
    l = i(937008),
    o = i(807098),
    c = i(412260),
    d = i(810498),
    m = i(985018),
    u = i(4733);
function C() {
    let { claimableRewards: e } = (0, l.Pv)(),
        t = (0, a.bG)([c.A], () => {
            let e = c.A.getMarketingComponentByType(n.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        i = (0, o.T)(t?.bannerAsset),
        C = (0, o.T)(t?.avatarAsset);
    if (null == t || null == e || 0 === e.length) return null;
    let x = (0, d.gc)(i),
        T = t?.gradient,
        p =
            null != T && null != T.colors && T.colors.length >= 2
                ? (0, d.K5)({ gradient: T.colors, angle: T.angle ?? void 0 })
                : void 0,
        g = (0, d.x)(x, p);
    return (0, r.jsxs)("div", {
        className: u.kL,
        style: g,
        children: [
            (0, r.jsxs)("div", {
                className: u.V_,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/bold",
                        color: "always-white",
                        children: m.intl.string(m.t.OEtqpm),
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: m.intl.formatToPlainString(m.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != C && (0, r.jsx)("img", { alt: "gift promotion reward", src: C, className: u.my }),
        ],
    });
}
