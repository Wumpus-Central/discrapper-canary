n.d(t, {
    Qe: () => m,
    Tf: () => h,
    ab: () => E,
    ev: () => g,
}),
    n(415506);
var r = n(544891),
    i = n(704215),
    a = n(570140),
    o = n(266454),
    s = n(675478),
    l = n(626135),
    c = n(358085),
    u = n(960048),
    d = n(981631);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
let p = () => {
    let e = null;
    return (0, c.isAndroid)() ? (e = d.gg$.GOOGLE) : (0, c.isIOS)() && (e = d.gg$.APPLE), e;
};
async function h(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {
                      offerId: void 0,
                      paymentGatewayOverride: void 0,
                  },
        c = arguments.length > 3 ? arguments[3] : void 0;
    if (t) {
        a.Z.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
        try {
            var f, h, m;
            null != e && l.default.track(d.rMx.FETCH_USER_OFFER_STARTED, { call_location: e });
            let { offerId: t, paymentGatewayOverride: g } = n,
                E = void 0 !== g ? g : p(),
                b =
                    null != E || null != t
                        ? {
                              payment_gateway: E,
                              offer_id: t,
                          }
                        : {},
                y = await r.tn.post({
                    url: d.ANM.USER_OFFER,
                    body: b,
                    rejectWithError: !0,
                }),
                O = null != (f = y.body.user_trial_offer) ? f : null,
                v = null != (h = y.body.user_discount) ? h : null,
                I = null != (m = y.body.user_discount_offer) ? m : null;
            if (null != t && null != I && I.discount_id !== t) {
                let e = Error("Returned user discount offer does not match offer ID request parameter");
                throw (
                    (u.Z.captureException(
                        e,
                        _(
                            {
                                extra: {
                                    offer_id: t,
                                    user_discount_offer: I,
                                },
                            },
                            c,
                        ),
                    ),
                    e)
                );
            }
            return (
                null == O &&
                    (0, o.zu)(i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) &&
                    (0, s.w9)(i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING),
                a.Z.dispatch({
                    type: "BILLING_USER_OFFER_FETCH_SUCCESS",
                    userTrialOffer: O,
                    userDiscount: v,
                    userDiscountOffer: I,
                }),
                {
                    userTrialOffer: O,
                    userDiscount: v,
                    userDiscountOffer: I,
                }
            );
        } catch (e) {
            a.Z.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
        }
    }
}
async function m() {
    a.Z.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
    try {
        var e;
        let t =
            null !=
            (e = (
                await r.tn.get({
                    url: d.ANM.CHURN_USER_OFFER,
                    rejectWithError: !0,
                })
            ).body.offer)
                ? e
                : null;
        return (
            a.Z.dispatch({
                type: "BILLING_USER_OFFER_FETCH_SUCCESS",
                userDiscountOffer: t,
            }),
            { userDiscountOffer: t }
        );
    } catch (e) {
        a.Z.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
    }
}
async function g() {
    let e = null;
    try {
        var t;
        (e =
            null !=
            (t = (
                await r.tn.post({
                    url: d.ANM.CHURN_USER_OFFER,
                    rejectWithError: !0,
                })
            ).body.offer)
                ? t
                : null),
            null != e &&
                a.Z.dispatch({
                    type: "BILLING_USER_OFFER_FETCH_SUCCESS",
                    userDiscountOffer: e,
                });
    } catch (e) {}
    return e;
}
function E(e, t) {
    let n = null != e && null == e.expires_at ? e.id : void 0,
        i = null != t && null == t.expires_at ? t.id : void 0;
    if (void 0 !== n || void 0 !== i)
        return r.tn
            .post({
                url: d.ANM.USER_OFFER_ACKNOWLEDGED,
                body: {
                    user_trial_offer_id: n,
                    user_discount_offer_id: i,
                },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
            .then((e) => {
                var t, n, r;
                a.Z.dispatch({
                    type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
                    userTrialOffer: null != (t = e.body.user_trial_offer) ? t : null,
                    userDiscount: null != (n = e.body.user_discount) ? n : null,
                    userDiscountOffer: null != (r = e.body.user_discount_offer) ? r : null,
                });
            })
            .catch((e) => {
                404 === e.status &&
                    a.Z.dispatch({
                        type: "BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS",
                        userTrialOffer: null,
                        userDiscount: null,
                        userDiscountOffer: null,
                    });
            });
}
