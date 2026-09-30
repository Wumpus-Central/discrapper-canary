t.d(e, {
    a: () =>
        function i(e, u) {
            let { isGift: p, giftRecipient: h, giftingOrigin: k, additionalUserIds: y } = u,
                {
                    discoverySessionId: C,
                    analyticsLocations: f,
                    guildId: g,
                    isEligibilityCheckContinuation: _,
                    checkoutState: I,
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                b = d.A.getSKUEligibilityEntry(e.id),
                m = b?.state,
                L = !p && (null == m || "checking" === m || "ineligible" === m);
            if (!L && !_) {
                let i = "none";
                (p ? (i = "gift") : "eligible" === m ? (i = "already_eligible") : "error" === m && (i = "prior_error"),
                    s.default.track(r.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                        sku_id: e.id,
                        guild_id: g ?? null,
                        application_id: e.applicationId,
                        is_gift: p,
                        eligibility_state: m ?? "none",
                        skip_reason: i,
                        error_http_status: b?.state === "error" ? (b.httpStatus ?? null) : null,
                        location_stack: f,
                    }));
            }
            let E = I ?? { hasFinished: !1 };
            L
                ? (function (i) {
                      let {
                          guildId: e,
                          applicationId: o,
                          skuId: l,
                          analyticsLocations: s,
                          onContinue: d,
                          onClose: r,
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
                          { modalKey: c, onCloseCallback: r },
                      );
                  })({
                      guildId: g,
                      applicationId: e.applicationId,
                      skuId: e.id,
                      analyticsLocations: f ?? [],
                      onContinue: () => {
                          if (!E.hasFinished)
                              return i(
                                  e,
                                  { isGift: p, giftRecipient: h, giftingOrigin: k, additionalUserIds: y },
                                  {
                                      discoverySessionId: C,
                                      analyticsLocations: f,
                                      guildId: g,
                                      isEligibilityCheckContinuation: !0,
                                      checkoutState: E,
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
                          additionalUserIds: s,
                          giftingOrigin: d,
                          onCloseCallback: c,
                          onComplete: r,
                          modalKey: u,
                      } = i;
                      l.UnifiedCheckoutFlowManagerSingletons[l.CL.SLAYER_STOREFRONT_CHECKOUT]
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
                              giftContextProps: { isGift: a, giftRecipient: o, giftingOrigin: d, additionalUserIds: s },
                              modalAPIOptions: { modalKey: u, onCloseCallback: c },
                          });
                  })({
                      discoverySessionId: C,
                      sku: e,
                      analyticsLocations: f ?? [],
                      isGift: p,
                      giftRecipient: h,
                      giftingOrigin: k,
                      additionalUserIds: y,
                      onCloseCallback: function () {
                          ((0, o.ET)(), (0, a.closeModal)(c), (E.hasFinished = !0));
                      },
                      onComplete: function () {
                          E.hasFinished = !0;
                      },
                      modalKey: "slayer-payment-modal",
                  });
        },
    openSocialLayerStorefrontAnnouncementModal: () => u,
});
var n = t(477900),
    a = t(192308),
    o = t(391048),
    l = t(589078),
    s = t(174459),
    d = t(832163);
let c = "slayer-eligibility-check-modal";
var r = t(652215);
function u() {
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
