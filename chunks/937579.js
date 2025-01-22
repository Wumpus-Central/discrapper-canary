r.d(n, {
    T: function () {
        return d;
    },
    a: function () {
        return f;
    }
});
var i = r(544891),
    a = r(704215),
    o = r(570140),
    s = r(605236),
    l = r(675478),
    u = r(626135),
    c = r(981631);
async function d(e, n) {
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if (r) {
        o.Z.dispatch({ type: 'BILLING_USER_OFFER_FETCH_START' });
        try {
            var d, f, p;
            null != e && u.default.track(c.rMx.FETCH_USER_OFFER_STARTED, { call_location: e });
            let r = await i.tn.post({
                    url: c.ANM.USER_OFFER,
                    body: null != n ? { payment_gateway: n } : {},
                    rejectWithError: !0
                }),
                h = null !== (d = r.body.user_trial_offer) && void 0 !== d ? d : null,
                _ = null !== (f = r.body.user_discount) && void 0 !== f ? f : null,
                m = null !== (p = r.body.user_discount_offer) && void 0 !== p ? p : null;
            return (
                null == h && (0, s.un)(a.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, l.w9)(a.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING),
                o.Z.dispatch({
                    type: 'BILLING_USER_OFFER_FETCH_SUCCESS',
                    userTrialOffer: h,
                    userDiscount: _,
                    userDiscountOffer: m
                }),
                {
                    userTrialOffer: h,
                    userDiscount: _,
                    userDiscountOffer: m
                }
            );
        } catch (e) {
            o.Z.dispatch({ type: 'BILLING_USER_OFFER_FETCH_FAIL' });
        }
    }
}
function f(e, n) {
    let r = null != e && null == e.expires_at ? e.id : void 0,
        a = null != n && null == n.expires_at ? n.id : void 0;
    if (void 0 !== r || void 0 !== a)
        return i.tn
            .post({
                url: c.ANM.USER_OFFER_ACKNOWLEDGED,
                body: {
                    user_trial_offer_id: r,
                    user_discount_offer_id: a
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                var n, r, i;
                o.Z.dispatch({
                    type: 'BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS',
                    userTrialOffer: null !== (n = e.body.user_trial_offer) && void 0 !== n ? n : null,
                    userDiscount: null !== (r = e.body.user_discount) && void 0 !== r ? r : null,
                    userDiscountOffer: null !== (i = e.body.user_discount_offer) && void 0 !== i ? i : null
                });
            })
            .catch((e) => {
                404 === e.status &&
                    o.Z.dispatch({
                        type: 'BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS',
                        userTrialOffer: null,
                        userDiscount: null,
                        userDiscountOffer: null
                    });
            });
}
