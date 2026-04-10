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
    _ = n(810498),
    S = n(412260),
    x = n(380083),
    P = n(954571),
    T = n(203982),
    A = n(45938),
    h = n(615396),
    g = n(937008),
    I = n(156312),
    f = n(491057),
    j = n(482132),
    R = n(877156),
    M = n(970077),
    C = n(615310),
    N = n(216641),
    O = n(921925),
    y = n(652215),
    b = n(49999);
function v(e) {
    let t,
        {
            handleClose: r,
            planGroup: v,
            onSubscriptionConfirmation: k,
            renderPurchaseConfirmation: U,
            postSuccessGuild: w,
            followupSKUInfo: G,
            continueSessionToInitialStep: D,
        } = e,
        {
            activeSubscription: L,
            paymentSources: F,
            paymentSourceId: H,
            selectedSkuId: B,
            updatedSubscription: W,
            startingPremiumSubscriptionPlanIdRef: K,
            startingFractionalPremiumEndsAtRef: z,
            isPremiumGroupPurchase: V,
        } = (0, I.P5)(),
        q = (0, M.A)(),
        Y = (0, C.bB)(),
        {
            isGift: Z,
            giftRecipient: X,
            giftCode: Q,
            hasSentMessage: J,
            isSendingMessage: $,
            sendGiftMessage: ee,
            claimableRewards: et,
            selectedGiftingPromotionReward: en,
        } = (0, g.Pv)(),
        { confirmationFooter: el } = (0, f.cG)(),
        ei = (0, _.px)(q, Z, et),
        er = (0, _.Mq)(q),
        es = (0, m.Mv)(en, !1),
        ea = (0, u.bG)([S.A], () => S.A.getGiftPromotion()?.id),
        eo = (0, u.bG)([S.A], () => {
            let e = S.A.getMarketingComponentByType(o.C.GIFT_REMINDER_NAGBAR);
            return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftReminderNagbar;
        }),
        eu = (0, N.g)(F, H),
        ed = Z && null != en && null != es && er;
    s()(null != q, "Expected plan to selected"),
        s()(null != B, "Expected selectedSkuId"),
        s()(null != Y, "Step should be set");
    let ec = i.useCallback(() => {
        r(), k?.();
    }, [r, k]);
    (0, p.Ay)(() => {
        V &&
            P.default.track(y.HAw.PREMIUM_GROUP_PURCHASE_CONFIRMATION_VIEWED, {
                has_updated_subscription: null != W,
                has_any_premium_group: W?.hasAnyPremiumGroup ?? !1,
                subscription_id: W?.id,
            });
    }),
        i.useEffect(() => {
            function e() {
                if (V)
                    if (null != W && W.hasAnyPremiumGroup) {
                        P.default.track(y.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_OPENED, { subscription_id: W.id });
                        let e = (0, a.uniqueId)("premium-group-purchase-flow-modal");
                        (0, c.mMO)(
                            async () => {
                                let { default: e } = await n.e("29225").then(n.bind(n, 773486));
                                return (t) =>
                                    (0, l.jsx)(e, {
                                        ...t,
                                        subscription: W,
                                        isFromPurchaseFlow: !0,
                                        onClose: async () => {
                                            T._.dispatch(y.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED),
                                                await t.onClose();
                                        },
                                    });
                            },
                            {
                                onCloseRequest: () => {
                                    T._.dispatch(y.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED), (0, c.OoC)(e);
                                },
                                modalKey: e,
                            },
                        );
                    } else
                        P.default.track(y.HAw.PREMIUM_GROUP_PURCHASE_FRIEND_SELECTOR_SKIPPED, {
                            has_updated_subscription: null != W,
                            has_any_premium_group: W?.hasAnyPremiumGroup ?? !1,
                        }),
                            T._.dispatch(y.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED);
            }
            return (
                T._.subscribe(y.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    T._.unsubscribe(y.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [V, W]),
        i.useEffect(() => {
            !Z || null == X || null == Q || J || $ || (0, A.Ik)(X) || ee({ onSubscriptionConfirmation: k });
        }, [ee, Z, X, Q, J, $, k]),
        i.useEffect(() => {
            ei &&
                null != eo &&
                null != ea &&
                (0, E.qr)(d.M.GIFTING_PROMOTION_REMINDER, ea, { dismissAction: b.i.INDIRECT_ACTION });
        }, [eo, ea, ei]);
    let ep = null != D ? x.Rs.DEEPLINK_TO_DESKTOP_APP : void 0;
    if (null != U) t = U(q, ec, W);
    else if (Z) t = (0, l.jsx)(x.fw, { planId: q.id, onClose: ec });
    else {
        let e =
            K.current === q.id
                ? { postSuccessGuild: w }
                : {
                      followupSKUInfo: G,
                      startingPremiumSubscriptionPlanId: K.current,
                      isDowngrade: null != L && (0, h.vT)(L, q.id, v),
                  };
        t = (0, l.jsx)(x.Ay, {
            planId: q.id,
            onClose: ec,
            paymentSourceType: eu,
            hideClose: null != el,
            startingFractionalPremiumEndsAt: z.current,
            customCTAType: ep,
            ...e,
        });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(j.dZ, { children: [(0, l.jsx)(O.A, {}), t] }),
            null != el && el,
            ed && null != en && (0, l.jsx)(R.A, { rewardSkuId: en, onClose: ec }),
        ],
    });
}
