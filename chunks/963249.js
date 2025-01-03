r.d(n, {
    Z: function () {
        return T;
    }
});
var i = r(200651);
r(192379);
var a = r(97613),
    s = r.n(a),
    o = r(772848),
    l = r(481060),
    u = r(570140),
    c = r(159351),
    d = r(366939),
    f = r(667),
    _ = r(138464),
    h = r(619067),
    p = r(594174),
    m = r(626135),
    g = r(585483),
    E = r(74538),
    v = r(981631),
    I = r(474936);
function T(e) {
    let { initialPlanId: n, followupSKUInfo: a, onClose: T, onComplete: b, onSubscriptionConfirmation: y, analyticsLocations: S, analyticsObject: A, analyticsLocation: N, analyticsSourceLocation: C, isGift: R = !1, giftMessage: O, giftStyle: D, giftingOrigin: L, subscriptionTier: x, trialId: w, postSuccessGuild: P, openInvoiceId: M, applicationId: k, referralTrialOfferId: U, giftRecipient: B, returnRef: G, subscription: Z, skipConfirm: F, repeatPurchase: V } = null != e ? e : {},
        j = !1,
        H = (0, o.Z)(),
        Y = p.default.getCurrentUser(),
        W = (0, E.M5)(Y, I.p9.TIER_2),
        K = s()('payment-modal'),
        z = (0, E.Wz)(x);
    return (0, l.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([r.e('77298'), r.e('23357'), r.e('12013'), r.e('73503'), r.e('8016'), r.e('52249'), r.e('68956'), r.e('26182'), r.e('95900'), r.e('32776'), r.e('17938'), r.e('74421'), r.e('54433'), r.e('65994')]).then(r.bind(r, 7305));
            return (r) => {
                let { onClose: s, ...o } = r;
                return (0, i.jsx)(e, {
                    ...o,
                    loadId: H,
                    subscriptionTier: x,
                    skuId: z,
                    isGift: R,
                    giftMessage: O,
                    giftStyle: D,
                    giftingOrigin: L,
                    giftRecipient: B,
                    initialPlanId: n,
                    followupSKUInfo: a,
                    onClose: (e, n) => {
                        s(),
                            null == T || T(e),
                            e && (null == y || y(), (0, h.I)(R, W, n) && g.S.dispatch(v.CkL.PREMIUM_SUBSCRIPTION_CREATED)),
                            u.Z.dispatch({
                                type: 'PREMIUM_PAYMENT_MODAL_CLOSE',
                                didSucceed: e
                            });
                    },
                    onComplete: (e) => {
                        (j = !0), null == b || b(), (0, h.I)(R, W, (0, E.k5)(null == e ? void 0 : e.subscription)) && (0, _.H)(!0);
                    },
                    onSubscriptionConfirmation: y,
                    analyticsLocations: S,
                    analyticsObject: A,
                    analyticsLocation: N,
                    analyticsSourceLocation: C,
                    trialId: w,
                    postSuccessGuild: P,
                    planGroup: I.Y1,
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
                        location: null != N ? N : A,
                        source: C,
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
                    null == T || T(j),
                    j && (null == y || y());
            }
        }
    );
}
