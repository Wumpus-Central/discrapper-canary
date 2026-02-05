i.d(t, { b: () => g });
var r = i(627968);
i(64700);
var n = i(877624),
    s = i(311907),
    a = i(397927),
    l = i(775602),
    o = i(937008),
    c = i(807098),
    d = i(412260),
    m = i(810498),
    u = i(298305),
    x = i(985018),
    C = i(708611);
function g() {
    let e = (0, s.bG)([l.A], () => l.A.useReducedMotion),
        { claimableRewards: t } = (0, o.Pv)(),
        i = (0, s.bG)([d.A], () => {
            let e = d.A.getMarketingComponentByType(n.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        g = (0, c.T)(i?.bannerAsset),
        p = (0, c.T)(i?.avatarAsset),
        T = i?.gradient,
        h =
            null != T && null != T.colors && T.colors.length >= 2
                ? (0, m.K5)({ gradient: T.colors, angle: T.angle ?? void 0 })
                : void 0;
    return null == i || null == t || 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: C.kL,
              style: h,
              children: [
                  null != g && (0, r.jsx)("div", { className: C._e, style: { backgroundImage: `url(${g})` } }),
                  (0, r.jsxs)("div", {
                      className: C.V_,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: "text-md/bold",
                              color: "always-white",
                              children: x.intl.string(x.t.OEtqpm),
                          }),
                          (0, r.jsx)(a.Text, {
                              variant: "text-md/medium",
                              color: "always-white",
                              children: x.intl.formatToPlainString(x.t["2h5M+X"], { availableCount: t.length }),
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: C.my,
                      children:
                          null != p
                              ? (0, r.jsx)(u.A, {
                                    maxRewardImageSrc: p,
                                    claimableRewards: t,
                                    size: a._3J.SIZE_48,
                                    imageScaling: e ? 1.7 : 2.4,
                                })
                              : null,
                  }),
              ],
          });
}
