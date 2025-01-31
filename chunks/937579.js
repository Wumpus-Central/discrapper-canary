n.d(t, {
    T: () => c,
    a: () => d
});
var i = n(544891),
    r = n(704215),
    a = n(570140),
    s = n(605236),
    o = n(675478),
    l = n(626135),
    u = n(981631);
async function c(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if (n) {
        a.Z.dispatch({ type: 'BILLING_USER_OFFER_FETCH_START' });
        try {
            var c, d, f;
            null != e && l.default.track(u.rMx.FETCH_USER_OFFER_STARTED, { call_location: e });
            let n = await i.tn.post({
                    url: u.ANM.USER_OFFER,
                    body: null != t ? { payment_gateway: t } : {},
                    rejectWithError: !0
                }),
                _ = null !== (c = n.body.user_trial_offer) && void 0 !== c ? c : null,
                p = null !== (d = n.body.user_discount) && void 0 !== d ? d : null,
                h = null !== (f = n.body.user_discount_offer) && void 0 !== f ? f : null;
            return (
                null == _ && (0, s.un)(r.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, o.w9)(r.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING),
                a.Z.dispatch({
                    type: 'BILLING_USER_OFFER_FETCH_SUCCESS',
                    userTrialOffer: _,
                    userDiscount: p,
                    userDiscountOffer: h
                }),
                {
                    userTrialOffer: _,
                    userDiscount: p,
                    userDiscountOffer: h
                }
            );
        } catch (e) {
            a.Z.dispatch({ type: 'BILLING_USER_OFFER_FETCH_FAIL' });
        }
    }
}
function d(e, t) {
    let n = null != e && null == e.expires_at ? e.id : void 0,
        r = null != t && null == t.expires_at ? t.id : void 0;
    if (void 0 !== n || void 0 !== r)
        return i.tn
            .post({
                url: u.ANM.USER_OFFER_ACKNOWLEDGED,
                body: {
                    user_trial_offer_id: n,
                    user_discount_offer_id: r
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                var t, n, i;
                a.Z.dispatch({
                    type: 'BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS',
                    userTrialOffer: null !== (t = e.body.user_trial_offer) && void 0 !== t ? t : null,
                    userDiscount: null !== (n = e.body.user_discount) && void 0 !== n ? n : null,
                    userDiscountOffer: null !== (i = e.body.user_discount_offer) && void 0 !== i ? i : null
                });
            })
            .catch((e) => {
                404 === e.status &&
                    a.Z.dispatch({
                        type: 'BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS',
                        userTrialOffer: null,
                        userDiscount: null,
                        userDiscountOffer: null
                    });
            });
}
