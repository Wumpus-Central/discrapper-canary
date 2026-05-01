t.d(e, {
    a: () =>
        function i(e, s) {
            let { isGift: h, giftRecipient: y, giftingOrigin: k, additionalUserIds: _ } = s,
                {
                    discoverySessionId: g,
                    analyticsLocations: C,
                    guildId: b,
                    isEligibilityCheckContinuation: f,
                    checkoutState: I,
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                m = r.A.getSKUEligibilityEntry(e.id),
                L = m?.state,
                E = !h && null != b && (null == L || "checking" === L || "ineligible" === L);
            if (!E && !f) {
                let i = "none";
                h
                    ? (i = "gift")
                    : null == b
                      ? (i = "no_guild")
                      : "eligible" === L
                        ? (i = "already_eligible")
                        : "error" === L && (i = "prior_error"),
                    d.default.track(c.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                        sku_id: e.id,
                        guild_id: b ?? null,
                        application_id: e.applicationId,
                        is_gift: h,
                        eligibility_state: L ?? "none",
                        skip_reason: i,
                        error_http_status: m?.state === "error" ? (m.httpStatus ?? null) : null,
                        location_stack: C,
                    });
            }
            let S = I ?? { hasFinished: !1 };
            E
                ? (function (i) {
                      let { guildId: e, skuId: a, analyticsLocations: o, onContinue: s, onClose: d } = i;
                      (0, l.openModalLazy)(
                          async () => {
                              let { default: i } = await Promise.all([t.e("42211"), t.e("62754")]).then(
                                  t.bind(t, 424185),
                              );
                              return (t) =>
                                  (0, n.jsx)(i, { ...t, guildId: e, skuId: a, analyticsLocations: o, onContinue: s });
                          },
                          { modalKey: u, onCloseCallback: d },
                      );
                  })({
                      guildId: b,
                      skuId: e.id,
                      analyticsLocations: C ?? [],
                      onContinue: () => {
                          if (!S.hasFinished)
                              return i(
                                  e,
                                  { isGift: h, giftRecipient: y, giftingOrigin: k, additionalUserIds: _ },
                                  {
                                      discoverySessionId: g,
                                      analyticsLocations: C,
                                      guildId: b,
                                      isEligibilityCheckContinuation: !0,
                                      checkoutState: S,
                                  },
                              );
                      },
                  })
                : p({
                      discoverySessionId: g,
                      sku: e,
                      analyticsLocations: C ?? [],
                      isGift: h,
                      giftRecipient: y,
                      giftingOrigin: k,
                      additionalUserIds: _,
                      onCloseCallback: () => {
                          (0, a.ET)(), (0, o.z)(), (0, l.closeModal)(u), (S.hasFinished = !0);
                      },
                      onComplete: () => {
                          S.hasFinished = !0;
                      },
                      modalKey: "slayer-payment-modal",
                  });
        },
    openSocialLayerStorefrontAnnouncementModal: () => h,
});
var n = t(627968),
    l = t(192308),
    a = t(391048),
    o = t(636099),
    s = t(110048),
    d = t(174459),
    r = t(832163);
let u = "slayer-eligibility-check-modal";
var c = t(652215);
let p = (i) => {
    let {
        discoverySessionId: e,
        sku: t,
        analyticsLocations: n,
        isGift: l,
        giftRecipient: a,
        additionalUserIds: o,
        giftingOrigin: d,
        onCloseCallback: r,
        onComplete: u,
        modalKey: c,
    } = i;
    return (0, s.KY)().openCheckoutModal({
        discoverySessionId: e,
        applicationId: t.applicationId,
        skuId: t.id,
        skuProductLine: t.productLine,
        analyticsLocations: n,
        onComplete: u,
        giftContextProps: { isGift: l, giftRecipient: a, giftingOrigin: d, additionalUserIds: o },
        openModalOptions: { modalKey: c, onCloseCallback: r },
    });
};
function h() {
    (0, l.openModalLazy)(
        async () => {
            let { default: i } = await Promise.all([t.e("63292"), t.e("26388")]).then(t.bind(t, 297187));
            return (e) => (0, n.jsx)(i, { ...e });
        },
        { modalKey: "slayer-storefront-announcement-modal" },
    );
}
