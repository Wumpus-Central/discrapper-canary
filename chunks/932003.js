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
    d = n(810498),
    f = n(298305),
    p = n(985018),
    _ = n(708611);

function h() {
    var e;
    let t = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        { claimableRewards: n } = (0, l.Pv)(),
        h = (0, a.bG)([u.A], () => {
            let e = u.A.getMarketingComponentByType(i.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        m = (0, c.T)(null == h ? void 0 : h.bannerAsset),
        g = (0, c.T)(null == h ? void 0 : h.avatarAsset),
        E = null == h ? void 0 : h.gradient,
        y =
            null != E && null != E.colors && E.colors.length >= 2
                ? (0, d.K5)({
                      gradient: E.colors,
                      angle: null != (e = E.angle) ? e : void 0,
                  })
                : void 0;
    return null == h || null == n || 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              className: _.kL,
              style: y,
              children: [
                  null != m &&
                      (0, r.jsx)("div", {
                          className: _._e,
                          style: {
                              backgroundImage: "url(".concat(m, ")"),
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
                                  availableCount: n.length,
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: _.my,
                      children:
                          null != g
                              ? (0, r.jsx)(f.A, {
                                    maxRewardImageSrc: g,
                                    claimableRewards: n,
                                    size: s._3J.SIZE_48,
                                    imageScaling: t ? 1.9 : 2.4,
                                })
                              : null,
                  }),
              ],
          });
}
