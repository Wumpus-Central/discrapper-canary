t.d(n, { _: () => k });
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
    T = t(380083),
    I = t(954571),
    P = t(203982),
    h = t(45938),
    A = t(615396),
    g = t(937008),
    f = t(156312),
    j = t(491057),
    R = t(482132),
    M = t(877156),
    C = t(970077),
    N = t(615310),
    O = t(216641),
    y = t(921925),
    v = t(652215),
    b = t(49999);
function k(e) {
    let n,
        {
            handleClose: r,
            planGroup: k,
            onSubscriptionConfirmation: U,
            renderPurchaseConfirmation: w,
            postSuccessGuild: D,
            followupSKUInfo: G,
            continueSessionToInitialStep: L,
        } = e,
        {
            activeSubscription: F,
            paymentSources: H,
            paymentSourceId: B,
            selectedSkuId: W,
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
            sendGiftMessage: en,
            claimableRewards: et,
            selectedGiftingPromotionReward: ei,
        } = (0, g.Pv)(),
        { confirmationFooter: el } = (0, j.cG)(),
        er = (0, _.px)(Y, X, et),
        es = (0, _.Mq)(Y),
        ea = (0, m.Mv)(ei, !1),
        eo = (0, u.bG)([x.A], () => {
            let e = x.A.getMarketingComponentByType(o.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        eu = (0, O.g)(H, B),
        ed = X && null != ei && null != ea && es;
    s()(null != Y, "Expected plan to selected"),
        s()(null != W, "Expected selectedSkuId"),
        s()(null != Z, "Step should be set");
    let ec = l.useCallback(() => {
        r(), U?.();
    }, [r, U]);
    (0, p.Ay)(() => {
        q &&
            I.default.track(v.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != K,
                has_any_premium_group: K?.hasAnyPremiumGroup ?? !1,
                subscription_id: K?.id,
            });
    }),
        l.useEffect(() => {
            function e() {
                if (q)
                    if (null != K && K.hasAnyPremiumGroup) {
                        I.default.track(v.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: K.id });
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
                                            P._.dispatch(v.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                                await n.onClose();
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    P._.dispatch(v.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, c.OoC)(e);
                                },
                                modalKey: e,
                            },
                        );
                    } else
                        I.default.track(v.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                            has_updated_subscription: null != K,
                            has_any_premium_group: K?.hasAnyPremiumGroup ?? !1,
                        }),
                            P._.dispatch(v.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            }
            return (
                P._.subscribe(v.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    P._.unsubscribe(v.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [q, K]),
        l.useEffect(() => {
            !X || null == Q || null == J || $ || ee || (0, h.Ik)(Q) || en({ onSubscriptionConfirmation: U });
        }, [en, X, Q, J, $, ee, U]),
        l.useEffect(() => {
            er &&
                null != eo &&
                (0, E.$l)(d.M.GIFTING_PROMOTION_REMINDER, (0, S.p)(), { dismissAction: b.i.INDIRECT_ACTION });
        }, [eo, er]);
    let ep = null != L ? T.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != w) n = w(Y, ec, K);
    else if (X) n = (0, i.jsx)(T.fw, { planId: Y.id, onClose: ec });
    else {
        let e =
            z.current === Y.id
                ? { postSuccessGuild: D }
                : {
                      followupSKUInfo: G,
                      startingPremiumSubscriptionPlanId: z.current,
                      isDowngrade: null != F && (0, A.vT)(F, Y.id, k),
                  };
        n = (0, i.jsx)(T.Ay, {
            planId: Y.id,
            onClose: ec,
            paymentSourceType: eu,
            hideClose: null != el,
            startingFractionalPremiumEndsAt: V.current,
            customCTAType: ep,
            ...e,
        });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(R.dZ, { children: [(0, i.jsx)(y.A, {}), n] }),
            null != el && el,
            ed && null != ei && (0, i.jsx)(M.A, { rewardSkuId: ei, onClose: ec }),
        ],
    });
}
