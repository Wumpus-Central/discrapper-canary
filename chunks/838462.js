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
    m = n(558620),
    E = n(94420),
    S = n(841702),
    _ = n(367727),
    I = n(810498),
    P = n(412260),
    x = n(380083),
    T = n(954571),
    A = n(203982),
    h = n(45938),
    g = n(615396),
    f = n(937008),
    j = n(156312),
    R = n(491057),
    M = n(482132),
    C = n(877156),
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
        Y = (0, m.A)(),
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
        } = (0, f.Pv)(),
        { confirmationFooter: ei } = (0, R.cG)(),
        er = (0, I.px)(Y, X, en),
        es = (0, I.Mq)(Y),
        ea = (0, S.Mv)(el, !1),
        eo = (0, u.bG)([P.A], () => P.A.getGiftPromotion()?.id),
        eu = (0, u.bG)([P.A], () => {
            let e = P.A.getMarketingComponentByType(o.C.GIFT_REMINDER_NAGBAR);
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
            T.default.track(y.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != K,
                has_any_premium_group: K?.hasAnyPremiumGroup ?? !1,
                subscription_id: K?.id,
            });
    }),
        i.useEffect(() => {
            function e() {
                if (q)
                    if (null != K && K.hasAnyPremiumGroup) {
                        T.default.track(y.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: K.id });
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
                                            A._.dispatch(y.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                                await t.onClose();
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    A._.dispatch(y.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, c.OoC)(e);
                                },
                                modalKey: e,
                            },
                        );
                    } else
                        T.default.track(y.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                            has_updated_subscription: null != K,
                            has_any_premium_group: K?.hasAnyPremiumGroup ?? !1,
                        }),
                            A._.dispatch(y.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            }
            return (
                A._.subscribe(y.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    A._.unsubscribe(y.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [q, K]),
        i.useEffect(() => {
            !X || null == Q || null == J || $ || ee || (0, h.Ik)(Q) || et({ onSubscriptionConfirmation: U });
        }, [et, X, Q, J, $, ee, U]),
        i.useEffect(() => {
            er &&
                null != eu &&
                null != eo &&
                (0, _.qr)(d.M.GIFTING_PROMOTION_REMINDER, eo, { dismissAction: b.i.INDIRECT_ACTION });
        }, [eu, eo, er]);
    let em = null != L ? x.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != w) t = w(Y, ep, K);
    else if (X) t = (0, l.jsx)(x.fw, { planId: Y.id, onClose: ep });
    else {
        let e =
            z.current === Y.id
                ? { postSuccessGuild: G }
                : {
                      followupSKUInfo: D,
                      startingPremiumSubscriptionPlanId: z.current,
                      isDowngrade: null != H && (0, g.vT)(H, Y.id, v),
                  };
        t = (0, l.jsx)(x.Ay, {
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
            (0, l.jsxs)(M.dZ, { children: [(0, l.jsx)(k.A, {}), t] }),
            null != ei && ei,
            ec && null != el && (0, l.jsx)(C.A, { rewardSkuId: el, onClose: ep }),
        ],
    });
}
