r.d(n, {
    Z: function () {
        return b;
    }
});
var i = r(200651);
r(192379);
var a = r(97613),
    o = r.n(a),
    s = r(772848),
    l = r(481060),
    u = r(570140),
    c = r(159351),
    d = r(366939),
    f = r(667),
    p = r(138464),
    h = r(619067),
    _ = r(594174),
    m = r(626135),
    g = r(585483),
    E = r(74538),
    v = r(981631),
    y = r(474936);
function b(e) {
    let { initialPlanId: n, followupSKUInfo: a, onClose: b, onComplete: I, onSubscriptionConfirmation: T, analyticsLocations: S, analyticsObject: A, analyticsLocation: C, analyticsSourceLocation: N, isGift: R = !1, giftMessage: O, giftStyle: D, giftingOrigin: x, subscriptionTier: L, trialId: w, postSuccessGuild: P, openInvoiceId: M, applicationId: k, referralTrialOfferId: U, giftRecipient: B, returnRef: G, subscription: Z, skipConfirm: F, repeatPurchase: V } = null != e ? e : {},
        j = !1,
        H = (0, s.Z)(),
        Y = _.default.getCurrentUser(),
        W = (0, E.M5)(Y, y.p9.TIER_2),
        K = o()('payment-modal'),
        z = (0, E.Wz)(L);
    return (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([r.e('8016'), r.e('17938'), r.e('54433'), r.e('95838')]).then(r.bind(r, 7305));
            return (r) => {
                let { onClose: o, ...s } = r;
                return (0, i.jsx)(e, {
                    ...s,
                    loadId: H,
                    subscriptionTier: L,
                    skuId: z,
                    isGift: R,
                    giftMessage: O,
                    giftStyle: D,
                    giftingOrigin: x,
                    giftRecipient: B,
                    initialPlanId: n,
                    followupSKUInfo: a,
                    onClose: (e, n) => {
                        o(),
                            null == b || b(e),
                            e && (null == T || T(), (0, h.I)(R, W, n) && g.S.dispatch(v.CkL.PREMIUM_SUBSCRIPTION_CREATED)),
                            u.Z.dispatch({
                                type: 'PREMIUM_PAYMENT_MODAL_CLOSE',
                                didSucceed: e
                            });
                    },
                    onComplete: (e) => {
                        (j = !0), null == I || I(), (0, h.I)(R, W, (0, E.k5)(null == e ? void 0 : e.subscription)) && (0, p.H)(!0);
                    },
                    onSubscriptionConfirmation: T,
                    analyticsLocations: S,
                    analyticsObject: A,
                    analyticsLocation: C,
                    analyticsSourceLocation: N,
                    trialId: w,
                    postSuccessGuild: P,
                    planGroup: y.Y1,
                    openInvoiceId: M,
                    applicationId: k,
                    referralTrialOfferId: U,
                    returnRef: G,
                    subscription: Z,
                    skipConfirm: !!F,
                    repeatPurchase: V
                });
            };
        },
        {
            modalKey: K,
            onCloseCallback: () => {
                !j &&
                    m.default.track(v.rMx.PAYMENT_FLOW_CANCELED, {
                        load_id: H,
                        payment_type: v.Zuq[v.GZQ.SUBSCRIPTION],
                        location: null != C ? C : A,
                        source: N,
                        subscription_type: v.NYc.PREMIUM,
                        is_gift: R,
                        sku_id: z,
                        eligible_for_trial: null != w,
                        application_id: k,
                        location_stack: S
                    }),
                    (0, d.fw)(),
                    (0, c.fw)(),
                    (0, f.p)(),
                    null == b || b(j),
                    j && (null == T || T());
            }
        }
    );
}
