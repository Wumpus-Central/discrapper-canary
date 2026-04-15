n.d(t, { _: () => v });
var l = n(627968),
    i = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(735438),
    o = n(877624),
    u = n(311907),
    d = n(554146),
    c = n(397927),
    p = n(964486),
    m = n(841702),
    E = n(367727),
    S = n(810498),
    _ = n(412260),
    I = n(380083),
    P = n(954571),
    x = n(203982),
    T = n(45938),
    A = n(615396),
    h = n(413748),
    g = n(937008),
    f = n(156312),
    j = n(491057),
    R = n(482132),
    M = n(877156),
    C = n(970077),
    N = n(615310),
    O = n(216641),
    k = n(921925),
    y = n(652215),
    b = n(49999);
function v(e) {
    let t,
        {
            handleClose: r,
            planGroup: v,
            onSubscriptionConfirmation: U,
            renderPurchaseConfirmation: w,
            postSuccessGuild: G,
            followupSKUInfo: D,
            continueSessionToInitialStep: L,
        } = e,
        F = (0, h.t4)((e) => e.selectedSkuId),
        {
            activeSubscription: H,
            paymentSources: B,
            paymentSourceId: W,
            updatedSubscription: K,
            startingPremiumSubscriptionPlanIdRef: z,
            startingFractionalPremiumEndsAtRef: V,
            isPremiumGroupPurchase: q,
        } = (0, f.P5)(),
        Y = (0, C.A)(),
        Z = (0, N.bB)(),
        {
            isGift: X,
            giftRecipient: Q,
            giftCode: J,
            hasSentMessage: $,
            isSendingMessage: ee,
            sendGiftMessage: et,
            claimableRewards: en,
            selectedGiftingPromotionReward: el,
        } = (0, g.Pv)(),
        { confirmationFooter: ei } = (0, j.cG)(),
        er = (0, S.px)(Y, X, en),
        es = (0, S.Mq)(Y),
        ea = (0, m.Mv)(el, !1),
        eo = (0, u.bG)([_.A], () => _.A.getGiftPromotion()?.id),
        eu = (0, u.bG)([_.A], () => {
            let e = _.A.getMarketingComponentByType(o.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        ed = (0, O.g)(B, W),
        ec = X && null != el && null != ea && es;
    s()(null != Y, "Expected plan to selected"),
        s()(null != F, "Expected selectedSkuId"),
        s()(null != Z, "Step should be set");
    let ep = i.useCallback(() => {
        r(), U?.();
    }, [r, U]);
    (0, p.Ay)(() => {
        q &&
            P.default.track(y.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != K,
                has_any_premium_group: K?.hasAnyPremiumGroup ?? !1,
                subscription_id: K?.id,
            });
    }),
        i.useEffect(() => {
            function e() {
                if (q)
                    if (null != K && K.hasAnyPremiumGroup) {
                        P.default.track(y.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: K.id });
                        let e = (0, a.uniqueId)("premium-group-purchase-flow-modal");
                        (0, c.mMO)(
                            async () => {
                                let { default: e } = await n.e("29225").then(n.bind(n, 773486));
                                return (t) =>
                                    (0, l.jsx)(e, {
                                        ...t,
                                        subscription: K,
                                        isFromPurchaseFlow: !0,
                                        onClose: async () => {
                                            x._.dispatch(y.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                                await t.onClose();
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    x._.dispatch(y.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, c.OoC)(e);
                                },
                                modalKey: e,
                            },
                        );
                    } else
                        P.default.track(y.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                            has_updated_subscription: null != K,
                            has_any_premium_group: K?.hasAnyPremiumGroup ?? !1,
                        }),
                            x._.dispatch(y.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            }
            return (
                x._.subscribe(y.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    x._.unsubscribe(y.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [q, K]),
        i.useEffect(() => {
            !X || null == Q || null == J || $ || ee || (0, T.Ik)(Q) || et({ onSubscriptionConfirmation: U });
        }, [et, X, Q, J, $, ee, U]),
        i.useEffect(() => {
            er &&
                null != eu &&
                null != eo &&
                (0, E.qr)(d.M.GIFTING_PROMOTION_REMINDER, eo, { dismissAction: b.i.INDIRECT_ACTION });
        }, [eu, eo, er]);
    let em = null != L ? I.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != w) t = w(Y, ep, K);
    else if (X) t = (0, l.jsx)(I.fw, { planId: Y.id, onClose: ep });
    else {
        let e =
            z.current === Y.id
                ? { postSuccessGuild: G }
                : {
                      followupSKUInfo: D,
                      startingPremiumSubscriptionPlanId: z.current,
                      isDowngrade: null != H && (0, A.vT)(H, Y.id, v),
                  };
        t = (0, l.jsx)(I.Ay, {
            planId: Y.id,
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
            (0, l.jsxs)(R.dZ, { children: [(0, l.jsx)(k.A, {}), t] }),
            null != ei && ei,
            ec && null != el && (0, l.jsx)(M.A, { rewardSkuId: el, onClose: ep }),
        ],
    });
}
