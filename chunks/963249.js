n.d(t, { Z: () => y });
var i = n(200651);
n(192379);
var r = n(97613),
    a = n.n(r),
    s = n(772848),
    o = n(481060),
    l = n(570140),
    u = n(159351),
    c = n(366939),
    d = n(667),
    f = n(138464),
    _ = n(619067),
    p = n(594174),
    h = n(626135),
    m = n(585483),
    g = n(74538),
    E = n(981631),
    v = n(474936);
function y(e) {
    let { initialPlanId: t, followupSKUInfo: r, onClose: y, onComplete: I, onSubscriptionConfirmation: T, analyticsLocations: b, analyticsObject: S, analyticsLocation: A, analyticsSourceLocation: N, isGift: C = !1, giftMessage: R, giftStyle: O, giftingOrigin: D, subscriptionTier: x, trialId: L, postSuccessGuild: P, openInvoiceId: w, applicationId: M, referralTrialOfferId: k, giftRecipient: U, returnRef: G, subscription: B, skipConfirm: Z, repeatPurchase: F } = null != e ? e : {},
        V = !1,
        j = (0, s.Z)(),
        H = p.default.getCurrentUser(),
        Y = (0, g.M5)(H, v.p9.TIER_2),
        W = a()('payment-modal'),
        K = (0, g.Wz)(x);
    return (0, o.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e('8016'), n.e('17938'), n.e('54433'), n.e('95838')]).then(n.bind(n, 7305));
            return (n) => {
                let { onClose: a, ...s } = n;
                return (0, i.jsx)(e, {
                    ...s,
                    loadId: j,
                    subscriptionTier: x,
                    skuId: K,
                    isGift: C,
                    giftMessage: R,
                    giftStyle: O,
                    giftingOrigin: D,
                    giftRecipient: U,
                    initialPlanId: t,
                    followupSKUInfo: r,
                    onClose: (e, t) => {
                        a(),
                            null == y || y(e),
                            e && (null == T || T(), (0, _.I)(C, Y, t) && m.S.dispatch(E.CkL.PREMIUM_SUBSCRIPTION_CREATED)),
                            l.Z.dispatch({
                                type: 'PREMIUM_PAYMENT_MODAL_CLOSE',
                                didSucceed: e
                            });
                    },
                    onComplete: (e) => {
                        (V = !0), null == I || I(), (0, _.I)(C, Y, (0, g.k5)(null == e ? void 0 : e.subscription)) && (0, f.H)(!0);
                    },
                    onSubscriptionConfirmation: T,
                    analyticsLocations: b,
                    analyticsObject: S,
                    analyticsLocation: A,
                    analyticsSourceLocation: N,
                    trialId: L,
                    postSuccessGuild: P,
                    planGroup: v.Y1,
                    openInvoiceId: w,
                    applicationId: M,
                    referralTrialOfferId: k,
                    returnRef: G,
                    subscription: B,
                    skipConfirm: !!Z,
                    repeatPurchase: F
                });
            };
        },
        {
            modalKey: W,
            onCloseCallback: () => {
                V ||
                    h.default.track(E.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: j,
                        payment_type: E.Zuq[E.GZQ.SUBSCRIPTION],
                        location: null != A ? A : S,
                        source: N,
                        subscription_type: E.NYc.PREMIUM,
                        is_gift: C,
                        sku_id: K,
                        eligible_for_trial: null != L,
                        application_id: M,
                        location_stack: b
                    }),
                    (0, c.fw)(),
                    (0, u.fw)(),
                    (0, d.p)(),
                    null == y || y(V),
                    V && (null == T || T());
            }
        }
    );
}
