e.d(t, {
    a: () =>
        function i(t, p) {
            let { isGift: h, giftRecipient: k, giftingOrigin: C, additionalUserIds: g } = p,
                {
                    discoverySessionId: _,
                    analyticsLocations: y,
                    guildId: I,
                    isEligibilityCheckContinuation: f,
                    checkoutState: b,
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                E = s.A.getSKUEligibilityEntry(t.id),
                L = E?.state,
                S = !h && (null == L || "checking" === L || "ineligible" === L);
            if (!S && !f) {
                let i = "none";
                h ? (i = "gift") : "eligible" === L ? (i = "already_eligible") : "error" === L && (i = "prior_error"),
                    l.default.track(u.HAw.SLAYER_STOREFRONT_PURCHASE_ELIGIBILITY_SKIPPED, {
                        sku_id: t.id,
                        guild_id: I ?? null,
                        application_id: t.applicationId,
                        is_gift: h,
                        eligibility_state: L ?? "none",
                        skip_reason: i,
                        error_http_status: E?.state === "error" ? (E.httpStatus ?? null) : null,
                        location_stack: y,
                    });
            }
            let P = b ?? { hasFinished: !1 };
            S
                ? (function (i) {
                      let {
                          guildId: t,
                          applicationId: n,
                          skuId: a,
                          analyticsLocations: o,
                          onContinue: l,
                          onClose: s,
                      } = i;
                      (0, c.openModalLazy)(
                          async () => {
                              let { default: i } = await Promise.all([e.e("42211"), e.e("62754")]).then(
                                  e.bind(e, 424185),
                              );
                              return (e) =>
                                  (0, d.jsx)(i, {
                                      ...e,
                                      skuId: a,
                                      guildId: t,
                                      applicationId: n,
                                      analyticsLocations: o,
                                      onContinue: l,
                                  });
                          },
                          { modalKey: r, onCloseCallback: s },
                      );
                  })({
                      guildId: I,
                      applicationId: t.applicationId,
                      skuId: t.id,
                      analyticsLocations: y ?? [],
                      onContinue: () => {
                          if (!P.hasFinished)
                              return i(
                                  t,
                                  { isGift: h, giftRecipient: k, giftingOrigin: C, additionalUserIds: g },
                                  {
                                      discoverySessionId: _,
                                      analyticsLocations: y,
                                      guildId: I,
                                      isEligibilityCheckContinuation: !0,
                                      checkoutState: P,
                                  },
                              );
                      },
                  })
                : (function (i) {
                      let {
                          discoverySessionId: t,
                          sku: e,
                          analyticsLocations: n,
                          isGift: a,
                          giftRecipient: l,
                          additionalUserIds: s,
                          giftingOrigin: d,
                          onCloseCallback: c,
                          onComplete: r,
                          modalKey: u,
                      } = i;
                      o.UnifiedCheckoutFlowManagerSingletons[o.CL.SLAYER_STOREFRONT_CHECKOUT]
                          .get()
                          .openCheckoutModal({
                              checkoutConfiguration: {
                                  discoverySessionId: t,
                                  applicationId: e.applicationId,
                                  skuId: e.id,
                                  skuProductLine: e.productLine,
                              },
                              unifiedCheckoutProviderProps: { analyticsLocations: n },
                              checkoutHandlers: { onComplete: r },
                              giftContextProps: { isGift: a, giftRecipient: l, giftingOrigin: d, additionalUserIds: s },
                              modalAPIOptions: { modalKey: u, onCloseCallback: c },
                          });
                  })({
                      discoverySessionId: _,
                      sku: t,
                      analyticsLocations: y ?? [],
                      isGift: h,
                      giftRecipient: k,
                      giftingOrigin: C,
                      additionalUserIds: g,
                      onCloseCallback: function () {
                          (0, n.ET)(), (0, a.z)(), (0, c.closeModal)(r), (P.hasFinished = !0);
                      },
                      onComplete: function () {
                          P.hasFinished = !0;
                      },
                      modalKey: "slayer-payment-modal",
                  });
        },
});
var n = e(391048),
    a = e(636099),
    o = e(589078),
    l = e(174459),
    s = e(832163),
    d = e(627968),
    c = e(192308);
let r = "slayer-eligibility-check-modal";
var u = e(652215);
