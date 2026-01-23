n.d(t, {
    b: () => h,
});
var r = n(627968);
n(64700);
var i = n(877624),
    a = n(311907),
    s = n(397927),
    o = n(775602),
    l = n(937008),
    c = n(807098),
    u = n(412260),
    d = n(743108),
    f = n(298305),
    p = n(985018),
    _ = n(708611);

function h() {
    let e = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        { claimableRewards: t } = (0, l.Pv)(),
        n = (0, a.bG)([u.A], () => {
            let e = u.A.getMarketingComponentByType(i.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        h = (0, c.T)(null == n ? void 0 : n.bannerAsset),
        m = (0, c.T)(null == n ? void 0 : n.avatarAsset),
        g = (0, d.F)(null == n ? void 0 : n.gradient);
    return null == n || null == t || 0 === t.length
        ? null
        : (0, r.jsxs)("div", {
              className: _.kL,
              style: g,
              children: [
                  null != h &&
                      (0, r.jsx)("div", {
                          className: _._e,
                          style: {
                              backgroundImage: "url(".concat(h, ")"),
                          },
                      }),
                  (0, r.jsxs)("div", {
                      className: _.V_,
                      children: [
                          (0, r.jsx)(s.Text, {
                              variant: "text-md/bold",
                              color: "always-white",
                              children: p.intl.string(p.t.OEtqpm),
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: "text-md/medium",
                              color: "always-white",
                              children: p.intl.formatToPlainString(p.t["2h5M+X"], {
                                  availableCount: t.length,
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: _.my,
                      children:
                          null != m
                              ? (0, r.jsx)(f.A, {
                                    maxRewardImageSrc: m,
                                    claimableRewards: t,
                                    size: s._3J.SIZE_48,
                                    imageScaling: e ? 1.9 : 2.4,
                                })
                              : null,
                  }),
              ],
          });
}
