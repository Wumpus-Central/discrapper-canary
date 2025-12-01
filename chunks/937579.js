n.d(t, {
    Qe: () => h,
    Tf: () => m,
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
function p(e) {
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
let _ = () => {
    let e = null;
    return (0, c.isAndroid)() ? (e = d.gg$.GOOGLE) : (0, c.isIOS)() && (e = d.gg$.APPLE), e;
};
async function m(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n =
            arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {
                      offerId: void 0,
                      paymentGatewayOverride: void 0,
                  },
        c = arguments.length > 3 ? arguments[3] : void 0,
        f = arguments.length > 4 ? arguments[4] : void 0;
    if (t) {
        a.Z.dispatch({ type: "BILLING_USER_OFFER_FETCH_START" });
        try {
            var m, h, g;
            null != e && l.default.track(d.rMx.FETCH_USER_OFFER_STARTED, { call_location: e });
            let { offerId: t, paymentGatewayOverride: E } = n,
                b = void 0 !== E ? E : _(),
                y =
                    null != b || null != t
                        ? {
                              payment_gateway: b,
                              offer_id: t,
                          }
                        : {},
                O = await r.tn.post({
                    url: d.ANM.USER_OFFER,
                    body: y,
                    rejectWithError: !0,
                    retries: null != c ? c.retries : void 0,
                }),
                v = null != (m = O.body.user_trial_offer) ? m : null,
                S = null != (h = O.body.user_discount) ? h : null,
                I = null != (g = O.body.user_discount_offer) ? g : null;
            if (null != t && null != I && I.discount_id !== t) {
                let e = Error("Returned user discount offer does not match offer ID request parameter");
                throw (
                    (u.Z.captureException(
                        e,
                        p(
                            {
                                extra: {
                                    offer_id: t,
                                    user_discount_offer: I,
                                },
                            },
                            f,
                        ),
                    ),
                    e)
                );
            }
            return (
                null == v &&
                    (0, o.zu)(i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) &&
                    (0, s.w9)(i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING),
                a.Z.dispatch({
                    type: "BILLING_USER_OFFER_FETCH_SUCCESS",
                    userTrialOffer: v,
                    userDiscount: S,
                    userDiscountOffer: I,
                }),
                {
                    userTrialOffer: v,
                    userDiscount: S,
                    userDiscountOffer: I,
                }
            );
        } catch (e) {
            a.Z.dispatch({ type: "BILLING_USER_OFFER_FETCH_FAIL" });
        }
    }
}
async function h() {
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
