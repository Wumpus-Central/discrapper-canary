n.d(t, { A: () => D }), n(896048), n(205816);
var r,
    i = n(311907),
    a = n(73153),
    s = n(851746),
    o = n(694080),
    l = n(287809),
    c = n(469778),
    u = n(927578),
    d = n(166403),
    f = n(788868);
function p(e, t, n) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = 600000,
    E = {
        userOffersLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1,
        lastFetchSuccessful: !1,
    },
    b = E;
function y() {
    b.isFetching = !0;
}
function O(e) {
    let { userTrialOffer: t } = e;
    null != t ? (b.userTrialOffers[t.trial_id] = t) : T(),
        (b.userOffersLastFetchedAtDate = Date.now()),
        (b.isFetching = !1);
}
function A(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
    null == t && null == n && null == r && T(),
        null != t
            ? ((b.userTrialOffers[t.trial_id] = t), (b.userDiscountOffers = {}))
            : null != n
              ? ((b.userDiscountOffers[n.discount_id] = n), (b.userTrialOffers = {}))
              : null != r && ((b.userDiscountOffers[r.discount_id] = r), (b.userTrialOffers = {})),
        (b.userOffersLastFetchedAtDate = Date.now()),
        (b.isFetching = !1),
        (b.lastFetchSuccessful = !0);
}
function v() {
    T(), (b.userOffersLastFetchedAtDate = Date.now()), (b.isFetching = !1), (b.lastFetchSuccessful = !1);
}
function S(e) {
    let { userTrialOffer: t } = e;
    null != t ? (b.userTrialOffers[t.trial_id] = t) : (b.userTrialOffers = {}),
        (b.userOffersLastFetchedAtDate = Date.now());
}
function I(e) {
    let { userTrialOffer: t, userDiscount: n, userDiscountOffer: r } = e;
    null != t ? (b.userTrialOffers[t.trial_id] = t) : (b.userTrialOffers = {}),
        null != n
            ? (b.userDiscountOffers[n.discount_id] = n)
            : null != r
              ? (b.userDiscountOffers[r.discount_id] = r)
              : (b.userDiscountOffers = {}),
        (b.userOffersLastFetchedAtDate = Date.now());
}
function T() {
    (b.userTrialOffers = {}),
        (b.userDiscountOffers = {}),
        (b.userOffersLastFetchedAtDate = void 0),
        (b.isFetching = !1);
}
let C = () => !0;
function N() {
    return (
        null != d.A.getPremiumTypeSubscription() &&
        (null != b.userDiscountOffers[f.q]
            ? (b.userDiscountOffers = { [f.q]: b.userDiscountOffers[f.q] })
            : null != b.userDiscountOffers[f.EG]
              ? (b.userDiscountOffers = { [f.EG]: b.userDiscountOffers[f.EG] })
              : (b.userDiscountOffers = {}),
        (b.userTrialOffers = {}),
        !0)
    );
}
function R() {
    let e = l.default.getCurrentUser();
    !(0, u.TW)(e) && Object.keys(b.userDiscountOffers).length > 0 && (0, o._D)("UserOfferStore", !0);
}
function w() {
    var e;
    let t = null == (e = l.default.getCurrentUser()) ? void 0 : e.id;
    if (null == t) return !1;
    let n = s.A.getAllRelevantReferralTrialOffers().filter((e) => e.user_id === t);
    if (n.length > 0) {
        let e = n[0];
        return (b.userTrialOffers[e.trial_id] = e), !0;
    }
    return !1;
}
class P extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        (b = null != e ? e : E),
            this.waitFor(c.A, s.A, d.A, l.default),
            this.syncWith([l.default], C),
            this.syncWith([d.A], N),
            this.syncWith([s.A], w);
    }
    getUserTrialOffer(e) {
        if (null !== e) return b.userTrialOffers[e];
    }
    getUserDiscountOffer(e) {
        if (null !== e) return b.userDiscountOffers[e];
    }
    getAnyOfUserTrialOfferId(e) {
        for (let t of e) if (null != b.userTrialOffers[t]) return t;
        return null;
    }
    isFetchingOffer() {
        var e;
        return null != (e = b.isFetching) && e;
    }
    hasFetchedOffer() {
        return null != b.userOffersLastFetchedAtDate;
    }
    shouldFetchReferralOffer(e) {
        var t;
        let n = b.userOffersLastFetchedAtDate,
            r = null != (t = b.isFetching) && t;
        if (null == n) return !r;
        let i = Date.now() - g > n,
            a = (null != e ? e : 0) > n;
        return !r && (i || a);
    }
    getAlmostExpiringTrialOffers(e) {
        let t = Object.values(f.TP).map((e) => e.id),
            n = l.default.getCurrentUser();
        return (0, u.TW)(n) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(b.userTrialOffers).filter(
                  (n) =>
                      t.includes(n.trial_id) &&
                      null != n.expires_at &&
                      null != n.subscription_trial &&
                      e.includes(n.subscription_trial.sku_id) &&
                      Date.parse(n.expires_at) < Date.now() + (0, u.e1)(n),
              );
    }
    getAlmostExpiringDiscountOffers(e) {
        let t = l.default.getCurrentUser();
        return (0, u.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(b.userDiscountOffers).filter(
                  (t) =>
                      null != t.expires_at &&
                      null != t.discount &&
                      t.discount.plan_ids.some((t) => e.includes(f.hd[t].skuId)) &&
                      Date.parse(t.expires_at) < Date.now() + (0, u.e1)(t),
              );
    }
    getAcknowledgedOffers(e) {
        let t = l.default.getCurrentUser();
        return (0, u.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(b.userTrialOffers).filter((t) => e.includes(t.trial_id) && null != t.expires_at);
    }
    getUnacknowledgedDiscountOffers() {
        var e;
        let t = l.default.getCurrentUser();
        return (0, u.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(null != (e = b.userDiscountOffers) ? e : {}).filter(
                  (e) => null == e.expires_at && !f.ly.includes(e.discount_id),
              );
    }
    getUnacknowledgedOffers(e) {
        let t = l.default.getCurrentUser();
        return (0, u.TW)(t) && !this.canFractionalPremiumUserUseOffer()
            ? []
            : Object.values(b.userTrialOffers).filter((t) => e.includes(t.trial_id) && null == t.expires_at);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(b.userTrialOffers).some(
            (e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now(),
        );
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(b.userDiscountOffers).some(
            (e) => null == e.expires_at || Date.parse(e.expires_at) > Date.now(),
        );
    }
    canFractionalPremiumUserUseOffer() {
        return c.A.isFractionalPremiumActive({ excludeReverseTrial: !0 }) && null == d.A.getPremiumTypeSubscription();
    }
    getReferrer(e) {
        var t;
        return null == e ? null : null == (t = b.userTrialOffers[e]) ? void 0 : t.referrer;
    }
    getState() {
        return b;
    }
    forceReset() {
        T();
    }
    lastFetchSuccessful() {
        return b.lastFetchSuccessful;
    }
}
p(P, "displayName", "UserOfferStore"),
    p(P, "persistKey", "UserOfferStore"),
    p(P, "migrations", [
        (e) => {
            let t = null == e ? void 0 : e.userDiscounts;
            if (null != t) return m(_({}, e), { userDiscountOffers: t });
        },
        (e) => {
            if (null != e)
                return (
                    Object.hasOwn(e, "userAnnualOfferLastFetchedAtDate") && delete e.userAnnualOfferLastFetchedAtDate, e
                );
        },
        (e) => {
            if (null != e) return (null == e ? void 0 : e.isFetching) == null ? m(_({}, e), { isFetching: !1 }) : e;
        },
    ]);
let D = new P(a.h, {
    BILLING_USER_OFFER_FETCH_START: y,
    BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: O,
    BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: S,
    BILLING_USER_OFFER_FETCH_SUCCESS: A,
    BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: I,
    BILLING_USER_OFFER_FETCH_FAIL: v,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: R,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: R,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: R,
    LOGOUT: T,
});
