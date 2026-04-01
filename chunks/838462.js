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
    _ = t(810498),
    S = t(173834),
    x = t(412260),
    P = t(380083),
    T = t(954571),
    I = t(203982),
    h = t(45938),
    g = t(615396),
    A = t(937008),
    f = t(156312),
    j = t(491057),
    R = t(482132),
    M = t(877156),
    C = t(615310),
    N = t(216641),
    O = t(921925),
    y = t(652215),
    v = t(49999);
function b(e) {
    let n,
        {
            handleClose: r,
            planGroup: b,
            onSubscriptionConfirmation: k,
            renderPurchaseConfirmation: U,
            postSuccessGuild: w,
            followupSKUInfo: D,
            continueSessionToInitialStep: G,
        } = e,
        {
            activeSubscription: L,
            paymentSources: F,
            paymentSourceId: H,
            selectedPlan: B,
            selectedSkuId: W,
            updatedSubscription: K,
            startingPremiumSubscriptionPlanIdRef: z,
            startingFractionalPremiumEndsAtRef: V,
            isPremiumGroupPurchase: q,
        } = (0, f.P5)(),
        Y = (0, C.bB)(),
        {
            isGift: Z,
            giftRecipient: X,
            giftCode: Q,
            hasSentMessage: J,
            isSendingMessage: $,
            sendGiftMessage: ee,
            claimableRewards: en,
            selectedGiftingPromotionReward: et,
        } = (0, A.Pv)(),
        { confirmationFooter: ei } = (0, j.cG)(),
        el = (0, _.px)(B, Z, en),
        er = (0, _.Mq)(B),
        es = (0, m.Mv)(et, !1),
        ea = (0, u.bG)([x.A], () => {
            let e = x.A.getMarketingComponentByType(o.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        eo = (0, N.g)(F, H),
        eu = Z && null != et && null != es && er;
    s()(null != B, "Expected plan to selected"),
        s()(null != W, "Expected selectedSkuId"),
        s()(null != Y, "Step should be set");
    let ed = l.useCallback(() => {
        r(), k?.();
    }, [r, k]);
    (0, p.Ay)(() => {
        q &&
            T.default.track(y.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != K,
                has_any_premium_group: K?.hasAnyPremiumGroup ?? !1,
                subscription_id: K?.id,
            });
    }),
        l.useEffect(() => {
            function e() {
                if (q)
                    if (null != K && K.hasAnyPremiumGroup) {
                        T.default.track(y.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: K.id });
                        let e = (0, a.uniqueId)("premium-group-purchase-flow-modal");
                        (0, c.mMO)(
                            async () => {
                                let { default: e } = await t.e("29225").then(t.bind(t, 773486));
                                return (n) =>
                                    (0, i.jsx)(e, {
                                        ...n,
                                        subscription: K,
                                        isFromPurchaseFlow: !0,
                                        onClose: async () => {
                                            I._.dispatch(y.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                                await n.onClose();
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    I._.dispatch(y.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, c.OoC)(e);
                                },
                                modalKey: e,
                            },
                        );
                    } else
                        T.default.track(y.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                            has_updated_subscription: null != K,
                            has_any_premium_group: K?.hasAnyPremiumGroup ?? !1,
                        }),
                            I._.dispatch(y.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            }
            return (
                I._.subscribe(y.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    I._.unsubscribe(y.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [q, K]),
        l.useEffect(() => {
            !Z || null == X || null == Q || J || $ || (0, h.Ik)(X) || ee({ onSubscriptionConfirmation: k });
        }, [ee, Z, X, Q, J, $, k]),
        l.useEffect(() => {
            el &&
                null != ea &&
                (0, E.$l)(d.M.GIFTING_PROMOTION_REMINDER, (0, S.p)(), { dismissAction: v.i.INDIRECT_ACTION });
        }, [ea, el]);
    let ec = null != G ? P.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != U) n = U(B, ed, K);
    else if (Z) n = (0, i.jsx)(P.fw, { planId: B.id, onClose: ed });
    else {
        let e =
            z.current === B.id
                ? { postSuccessGuild: w }
                : {
                      followupSKUInfo: D,
                      startingPremiumSubscriptionPlanId: z.current,
                      isDowngrade: null != L && (0, g.vT)(L, B.id, b),
                  };
        n = (0, i.jsx)(P.Ay, {
            planId: B.id,
            onClose: ed,
            paymentSourceType: eo,
            hideClose: null != ei,
            startingFractionalPremiumEndsAt: V.current,
            customCTAType: ec,
            ...e,
        });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(R.dZ, { children: [(0, i.jsx)(O.A, {}), n] }),
            null != ei && ei,
            eu && null != et && (0, i.jsx)(M.A, { rewardSkuId: et, onClose: ed }),
        ],
    });
}
