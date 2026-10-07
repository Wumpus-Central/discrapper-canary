e.d(i, {
    a: () =>
        function t(i, u) {
            let { isGift: p, giftRecipient: h, giftingOrigin: y, additionalUserIds: k } = u,
                {
                    discoverySessionId: g,
                    analyticsLocations: C,
                    guildId: f,
                    isEligibilityCheckContinuation: _,
                    checkoutState: I,
                    contextKey: b,
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                m = b ?? (0, o.getInteractingModalContext)(),
                L = s.A.getSKUEligibilityEntry(i.id),
                E = L?.state,
                S = !p && (null == E || "checking" === E || "ineligible" === E);
            if (!S && !_) {
                let t = "none";
                (p ? (t = "gift") : "eligible" === E ? (t = "already_eligible") : "error" === E && (t = "prior_error"),
                    c.default.track(r.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                        sku_id: i.id,
                        guild_id: f ?? null,
                        application_id: i.applicationId,
                        is_gift: p,
                        eligibility_state: E ?? "none",
                        skip_reason: t,
                        error_http_status: L?.state === "error" ? (L.httpStatus ?? null) : null,
                        location_stack: C,
                    }));
            }
            let P = I ?? { hasFinished: !1 };
            S
                ? (function (t) {
                      let {
                          guildId: i,
                          applicationId: a,
                          skuId: l,
                          analyticsLocations: c,
                          contextKey: s,
                          onContinue: r,
                          onClose: u,
                      } = t;
                      (0, o.openModalLazy)(
                          async () => {
                              let { default: t } = await Promise.all([e.e("833192"), e.e("262754")]).then(
                                  e.bind(e, 424185),
                              );
                              return (e) =>
                                  (0, n.jsx)(t, {
                                      ...e,
                                      skuId: l,
                                      guildId: i,
                                      applicationId: a,
                                      analyticsLocations: c,
                                      onContinue: r,
                                  });
                          },
                          { modalKey: d, contextKey: s, onCloseCallback: u },
                      );
                  })({
                      guildId: f,
                      applicationId: i.applicationId,
                      skuId: i.id,
                      analyticsLocations: C ?? [],
                      contextKey: m,
                      onContinue: () => {
                          if (!P.hasFinished)
                              return t(
                                  i,
                                  { isGift: p, giftRecipient: h, giftingOrigin: y, additionalUserIds: k },
                                  {
                                      discoverySessionId: g,
                                      analyticsLocations: C,
                                      guildId: f,
                                      isEligibilityCheckContinuation: !0,
                                      checkoutState: P,
                                      contextKey: m,
                                  },
                              );
                      },
                  })
                : (function (t) {
                      let {
                          contextKey: i,
                          discoverySessionId: e,
                          sku: n,
                          analyticsLocations: o,
                          isGift: a,
                          giftRecipient: c,
                          additionalUserIds: s,
                          giftingOrigin: d,
                          onCloseCallback: r,
                          onComplete: u,
                          modalKey: p,
                      } = t;
                      l.UnifiedCheckoutFlowManagerSingletons[l.CL.SLAYER_STOREFRONT_CHECKOUT]
                          .get()
                          .openCheckoutModal({
                              checkoutConfiguration: {
                                  discoverySessionId: e,
                                  applicationId: n.applicationId,
                                  skuId: n.id,
                                  skuProductLine: n.productLine,
                              },
                              unifiedCheckoutProviderProps: { analyticsLocations: o },
                              checkoutHandlers: { onComplete: u },
                              giftContextProps: { isGift: a, giftRecipient: c, giftingOrigin: d, additionalUserIds: s },
                              modalAPIOptions: { contextKey: i, modalKey: p, onCloseCallback: r },
                          });
                  })({
                      contextKey: m,
                      discoverySessionId: g,
                      sku: i,
                      analyticsLocations: C ?? [],
                      isGift: p,
                      giftRecipient: h,
                      giftingOrigin: y,
                      additionalUserIds: k,
                      onCloseCallback: function () {
                          ((0, a.ET)(), (0, o.closeModal)(d, m), (P.hasFinished = !0));
                      },
                      onComplete: function () {
                          P.hasFinished = !0;
                      },
                      modalKey: "slayer-payment-modal",
                  });
        },
    openSocialLayerStorefrontAnnouncementModal: () => u,
});
var n = e(477900),
    o = e(192308),
    a = e(391048),
    l = e(589078),
    c = e(174459),
    s = e(832163);
let d = "slayer-eligibility-check-modal";
var r = e(652215);
function u() {
    (0, o.openModalLazy)(
        async () => {
            let { default: t } = await Promise.all([e.e("132073"), e.e("847799"), e.e("701218")]).then(
                e.bind(e, 839225),
            );
            return (i) => (0, n.jsx)(t, { ...i });
        },
        { modalKey: "slayer-storefront-announcement-modal" },
    );
}
