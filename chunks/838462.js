n.d(t, { _: () => v });
var l = n(627968),
    i = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(735438),
    o = n(877624),
    u = n(311907),
    d = n(554146),
    c = n(192308),
    p = n(964486),
    m = n(558620),
    E = n(94420),
    S = n(841702),
    _ = n(367727),
    I = n(810498),
    P = n(412260),
    A = n(380083),
    x = n(954571),
    h = n(203982),
    T = n(45938),
    g = n(615396),
    f = n(937008),
    j = n(156312),
    R = n(491057),
    M = n(482132),
    C = n(877156),
    y = n(615310),
    N = n(216641),
    k = n(921925),
    b = n(652215),
    O = n(49999);
function v(e) {
    let t,
        {
            handleClose: r,
            planGroup: v,
            onSubscriptionConfirmation: w,
            renderPurchaseConfirmation: U,
            postSuccessGuild: D,
            followupSKUInfo: G,
            continueSessionToInitialStep: L,
        } = e,
        F = (0, E.t4)((e) => e.selectedSkuId),
        {
            activeSubscription: H,
            paymentSources: B,
            paymentSourceId: W,
            updatedSubscription: K,
            startingPremiumSubscriptionPlanIdRef: z,
            startingFractionalPremiumEndsAtRef: V,
            isPremiumGroupPurchase: q,
        } = (0, j.P5)(),
        Z = (0, m.A)(),
        Y = (0, y.bB)(),
        {
            isGift: X,
            giftRecipient: Q,
            giftCode: $,
            hasSentMessage: J,
            isSendingMessage: ee,
            sendGiftMessage: et,
            claimableRewards: en,
            selectedGiftingPromotionReward: el,
        } = (0, f.Pv)(),
        { confirmationFooter: ei } = (0, R.cG)(),
        er = (0, I.px)(Z, X, en),
        es = (0, I.Mq)(Z),
        ea = (0, S.Mv)(el, !1),
        eo = (0, u.bG)([P.A], () => P.A.getGiftPromotion()?.id),
        eu = (0, u.bG)([P.A], () => {
            let e = P.A.getMarketingComponentByType(o.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        ed = (0, N.g)(B, W),
        ec = X && null != el && null != ea && es;
    s()(null != Z, "Expected plan to selected"),
        s()(null != F, "Expected selectedSkuId"),
        s()(null != Y, "Step should be set");
    let ep = i.useCallback(() => {
        r(), w?.();
    }, [r, w]);
    (0, p.Ay)(() => {
        q &&
            x.default.track(b.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != K,
                has_any_premium_group: K?.hasAnyPremiumGroup ?? !1,
                subscription_id: K?.id,
            });
    }),
        i.useEffect(() => {
            function e() {
                if (q)
                    if (null != K && K.hasAnyPremiumGroup) {
                        x.default.track(b.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: K.id });
                        let e = (0, a.uniqueId)("premium-group-purchase-flow-modal");
                        (0, c.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("96368").then(n.bind(n, 773486));
                                return (t) =>
                                    (0, l.jsx)(e, {
                                        ...t,
                                        subscription: K,
                                        isFromPurchaseFlow: !0,
                                        onClose: async () => {
                                            h._.dispatch(b.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                                await t.onClose();
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    h._.dispatch(b.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, c.closeModal)(e);
                                },
                                modalKey: e,
                            },
                        );
                    } else
                        x.default.track(b.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                            has_updated_subscription: null != K,
                            has_any_premium_group: K?.hasAnyPremiumGroup ?? !1,
                        }),
                            h._.dispatch(b.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            }
            return (
                h._.subscribe(b.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    h._.unsubscribe(b.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [q, K]),
        i.useEffect(() => {
            !X || null == Q || null == $ || J || ee || (0, T.Ik)(Q) || et({ onSubscriptionConfirmation: w });
        }, [et, X, Q, $, J, ee, w]),
        i.useEffect(() => {
            er &&
                null != eu &&
                null != eo &&
                (0, _.qr)(d.M.GIFTING_PROMOTION_REMINDER, eo, { dismissAction: O.i.INDIRECT_ACTION });
        }, [eu, eo, er]);
    let em = null != L ? A.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != U) t = U(Z, ep, K);
    else if (X) t = (0, l.jsx)(A.fw, { planId: Z.id, onClose: ep });
    else {
        let e =
            z.current === Z.id
                ? { postSuccessGuild: D }
                : {
                      followupSKUInfo: G,
                      startingPremiumSubscriptionPlanId: z.current,
                      isDowngrade: null != H && (0, g.vT)(H, Z.id, v),
                  };
        t = (0, l.jsx)(A.Ay, {
            planId: Z.id,
            onClose: ep,
            paymentSourceType: ed,
            hideClose: null != ei,
            startingFractionalPremiumEndsAt: V.current,
            customCTAType: em,
            ...e,
        });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(M.dZ, { children: [(0, l.jsx)(k.A, {}), t] }),
            null != ei && ei,
            ec && null != el && (0, l.jsx)(C.A, { rewardSkuId: el, onClose: ep }),
        ],
    });
}
