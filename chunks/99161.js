t.d(e, {
    a: () =>
        function i(e, p) {
            let { isGift: h, giftRecipient: k, giftingOrigin: y, additionalUserIds: C } = p,
                {
                    discoverySessionId: f,
                    analyticsLocations: g,
                    guildId: _,
                    isEligibilityCheckContinuation: I,
                    checkoutState: b,
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                m = c.A.getSKUEligibilityEntry(e.id),
                L = m?.state,
                E = !h && (null == L || "checking" === L || "ineligible" === L);
            if (!E && !I) {
                let i = "none";
                h ? (i = "gift") : "eligible" === L ? (i = "already_eligible") : "error" === L && (i = "prior_error"),
                    d.default.track(u.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                        sku_id: e.id,
                        guild_id: _ ?? null,
                        application_id: e.applicationId,
                        is_gift: h,
                        eligibility_state: L ?? "none",
                        skip_reason: i,
                        error_http_status: m?.state === "error" ? (m.httpStatus ?? null) : null,
                        location_stack: g,
                    });
            }
            let S = b ?? { hasFinished: !1 };
            E
                ? (function (i) {
                      let {
                          guildId: e,
                          applicationId: o,
                          skuId: l,
                          analyticsLocations: s,
                          onContinue: d,
                          onClose: c,
                      } = i;
                      (0, a.openModalLazy)(
                          async () => {
                              let { default: i } = await Promise.all([t.e("833192"), t.e("262754")]).then(
                                  t.bind(t, 424185),
                              );
                              return (t) =>
                                  (0, n.jsx)(i, {
                                      ...t,
                                      skuId: l,
                                      guildId: e,
                                      applicationId: o,
                                      analyticsLocations: s,
                                      onContinue: d,
                                  });
                          },
                          { modalKey: r, onCloseCallback: c },
                      );
                  })({
                      guildId: _,
                      applicationId: e.applicationId,
                      skuId: e.id,
                      analyticsLocations: g ?? [],
                      onContinue: () => {
                          if (!S.hasFinished)
                              return i(
                                  e,
                                  { isGift: h, giftRecipient: k, giftingOrigin: y, additionalUserIds: C },
                                  {
                                      discoverySessionId: f,
                                      analyticsLocations: g,
                                      guildId: _,
                                      isEligibilityCheckContinuation: !0,
                                      checkoutState: S,
                                  },
                              );
                      },
                  })
                : (function (i) {
                      let {
                          discoverySessionId: e,
                          sku: t,
                          analyticsLocations: n,
                          isGift: a,
                          giftRecipient: o,
                          additionalUserIds: l,
                          giftingOrigin: d,
                          onCloseCallback: c,
                          onComplete: r,
                          modalKey: u,
                      } = i;
                      s.UnifiedCheckoutFlowManagerSingletons[s.CL.SLAYER_STOREFRONT_CHECKOUT]
                          .get()
                          .openCheckoutModal({
                              checkoutConfiguration: {
                                  discoverySessionId: e,
                                  applicationId: t.applicationId,
                                  skuId: t.id,
                                  skuProductLine: t.productLine,
                              },
                              unifiedCheckoutProviderProps: { analyticsLocations: n },
                              checkoutHandlers: { onComplete: r },
                              giftContextProps: { isGift: a, giftRecipient: o, giftingOrigin: d, additionalUserIds: l },
                              modalAPIOptions: { modalKey: u, onCloseCallback: c },
                          });
                  })({
                      discoverySessionId: f,
                      sku: e,
                      analyticsLocations: g ?? [],
                      isGift: h,
                      giftRecipient: k,
                      giftingOrigin: y,
                      additionalUserIds: C,
                      onCloseCallback: function () {
                          (0, o.ET)(), (0, l.z)(), (0, a.closeModal)(r), (S.hasFinished = !0);
                      },
                      onComplete: function () {
                          S.hasFinished = !0;
                      },
                      modalKey: "slayer-payment-modal",
                  });
        },
    openSocialLayerStorefrontAnnouncementModal: () => p,
});
var n = t(477900),
    a = t(192308),
    o = t(391048),
    l = t(636099),
    s = t(529427),
    d = t(174459),
    c = t(832163);
let r = "slayer-eligibility-check-modal";
var u = t(652215);
function p() {
    (0, a.openModalLazy)(
        async () => {
            let { default: i } = await Promise.all([t.e("324732"), t.e("847799"), t.e("701218")]).then(
                t.bind(t, 839225),
            );
            return (e) => (0, n.jsx)(i, { ...e });
        },
        { modalKey: "slayer-storefront-announcement-modal" },
    );
}
