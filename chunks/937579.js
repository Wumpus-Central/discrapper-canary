n.d(t, {
    T: () => f,
    a: () => _
});
var r = n(544891),
    i = n(704215),
    o = n(570140),
    a = n(605236),
    s = n(675478),
    l = n(626135),
    c = n(358085),
    u = n(981631);
let d = () => {
    let e = null;
    return (0, c.isAndroid)() ? (e = u.gg$.GOOGLE) : (0, c.isIOS)() && (e = u.gg$.APPLE), e;
};
async function f(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (t) {
        o.Z.dispatch({ type: 'BILLING_USER_OFFER_FETCH_START' });
        try {
            var n, c, f;
            null != e && l.default.track(u.rMx.FETCH_USER_OFFER_STARTED, { call_location: e });
            let t = d(),
                _ = await r.tn.post({
                    url: u.ANM.USER_OFFER,
                    body: null != t ? { payment_gateway: t } : {},
                    rejectWithError: !0
                }),
                p = null != (n = _.body.user_trial_offer) ? n : null,
                h = null != (c = _.body.user_discount) ? c : null,
                m = null != (f = _.body.user_discount_offer) ? f : null;
            return (
                null == p && (0, a.un)(i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (0, s.w9)(i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING),
                o.Z.dispatch({
                    type: 'BILLING_USER_OFFER_FETCH_SUCCESS',
                    userTrialOffer: p,
                    userDiscount: h,
                    userDiscountOffer: m
                }),
                {
                    userTrialOffer: p,
                    userDiscount: h,
                    userDiscountOffer: m
                }
            );
        } catch (e) {
            o.Z.dispatch({ type: 'BILLING_USER_OFFER_FETCH_FAIL' });
        }
    }
}
function _(e, t) {
    let n = null != e && null == e.expires_at ? e.id : void 0,
        i = null != t && null == t.expires_at ? t.id : void 0;
    if (void 0 !== n || void 0 !== i)
        return r.tn
            .post({
                url: u.ANM.USER_OFFER_ACKNOWLEDGED,
                body: {
                    user_trial_offer_id: n,
                    user_discount_offer_id: i
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                var t, n, r;
                o.Z.dispatch({
                    type: 'BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS',
                    userTrialOffer: null != (t = e.body.user_trial_offer) ? t : null,
                    userDiscount: null != (n = e.body.user_discount) ? n : null,
                    userDiscountOffer: null != (r = e.body.user_discount_offer) ? r : null
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
