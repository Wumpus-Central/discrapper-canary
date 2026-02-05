t.d(n, { _: () => b });
var i = t(627968),
    l = t(64700),
    r = t(284009),
    s = t.n(r),
    a = t(735438),
    o = t(877624),
    u = t(311907),
    d = t(554146),
    c = t(397927),
    p = t(964486),
    m = t(841702),
    E = t(367727),
    g = t(810498),
    _ = t(173834),
    x = t(412260),
    T = t(380083),
    h = t(954571),
    P = t(203982),
    A = t(45938),
    S = t(615396),
    I = t(937008),
    j = t(156312),
    f = t(491057),
    R = t(482132),
    C = t(877156),
    M = t(216641),
    N = t(921925),
    y = t(652215),
    O = t(49999);
function b(e) {
    let n,
        {
            handleClose: r,
            planGroup: b,
            onSubscriptionConfirmation: v,
            renderPurchaseConfirmation: k,
            postSuccessGuild: w,
            followupSKUInfo: U,
            continueSessionToInitialStep: D,
        } = e,
        {
            activeSubscription: L,
            paymentSources: G,
            paymentSourceId: H,
            selectedPlan: F,
            selectedSkuId: B,
            step: W,
            updatedSubscription: K,
            startingPremiumSubscriptionPlanIdRef: V,
            startingFractionalPremiumEndsAtRef: Y,
            isPremiumGroupPurchase: z,
        } = (0, j.P5)(),
        {
            isGift: q,
            giftRecipient: Z,
            giftCode: Q,
            hasSentMessage: X,
            isSendingMessage: J,
            sendGiftMessage: $,
            claimableRewards: ee,
            selectedGiftingPromotionReward: en,
        } = (0, I.Pv)(),
        { confirmationFooter: et } = (0, f.cG)(),
        ei = (0, g.px)(F, q, ee),
        el = (0, g.Mq)(F),
        er = (0, m.Mv)(en, !1),
        es = (0, u.bG)([x.A], () => {
            let e = x.A.getMarketingComponentByType(o.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        ea = (0, M.g)(G, H),
        eo = q && null != en && null != er && el;
    s()(null != F, "Expected plan to selected"),
        s()(null != B, "Expected selectedSkuId"),
        s()(null != W, "Step should be set");
    let eu = l.useCallback(() => {
        r(), v?.();
    }, [r, v]);
    (0, p.Ay)(() => {
        z &&
            h.default.track(y.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != K,
                has_any_premium_group: K?.hasAnyPremiumGroup ?? !1,
                subscription_id: K?.id,
            });
    }),
        l.useEffect(() => {
            function e() {
                if (z)
                    if (null != K && K.hasAnyPremiumGroup) {
                        h.default.track(y.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: K.id });
                        let e = (0, a.uniqueId)("premium-group-purchase-flow-modal");
                        (0, c.mMO)(
                            async () => {
                                let { default: e } = await t.e("73987").then(t.bind(t, 773486));
                                return (n) =>
                                    (0, i.jsx)(e, {
                                        ...n,
                                        subscription: K,
                                        isFromPurchaseFlow: !0,
                                        onClose: async () => {
                                            P._.dispatch(y.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                                await n.onClose();
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    P._.dispatch(y.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, c.OoC)(e);
                                },
                                modalKey: e,
                            },
                        );
                    } else
                        h.default.track(y.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                            has_updated_subscription: null != K,
                            has_any_premium_group: K?.hasAnyPremiumGroup ?? !1,
                        }),
                            P._.dispatch(y.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            }
            return (
                P._.subscribe(y.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    P._.unsubscribe(y.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [z, K]),
        l.useEffect(() => {
            !q || null == Z || null == Q || X || J || (0, A.Ik)(Z) || $({ onSubscriptionConfirmation: v });
        }, [$, q, Z, Q, X, J, v]),
        l.useEffect(() => {
            ei &&
                null != es &&
                (0, E.$l)(d.M.GIFTING_PROMOTION_REMINDER, (0, _.p)(), { dismissAction: O.i.INDIRECT_ACTION });
        }, [es, ei]);
    let ed = null != D ? T.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != k) n = k(F, eu, K);
    else if (q) n = (0, i.jsx)(T.fw, { planId: F.id, onClose: eu });
    else {
        let e =
            V.current === F.id
                ? { postSuccessGuild: w }
                : {
                      followupSKUInfo: U,
                      startingPremiumSubscriptionPlanId: V.current,
                      isDowngrade: null != L && (0, S.vT)(L, F.id, b),
                  };
        n = (0, i.jsx)(T.Ay, {
            planId: F.id,
            onClose: eu,
            paymentSourceType: ea,
            hideClose: null != et,
            startingFractionalPremiumEndsAt: Y.current,
            customCTAType: ed,
            ...e,
        });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(R.dZ, { children: [(0, i.jsx)(N.A, {}), n] }),
            null != et && et,
            eo && null != en && (0, i.jsx)(C.A, { rewardSkuId: en, onClose: eu }),
        ],
    });
}
