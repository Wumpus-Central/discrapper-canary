"use strict";
n.d(t, {
    BE: () => p,
    DP: () => h,
    Hy: () => g,
    LM: () => l,
    TE: () => f,
    Vu: () => c,
    aw: () => u,
    mU: () => m,
    qk: () => d,
    wl: () => _,
    xI: () => E,
});
var r = n(927813),
    i = n(975571),
    s = n(652215),
    a = n(466919),
    o = n(985018);
let l = 5,
    u = 6,
    c = 3,
    d = r.A.Millis.DAY,
    _ = 12,
    f = i.A.getArticleURL(s.MVz.PREMIUM_GROUP_ABOUT),
    p = [s.Dmq.CANCELED, s.Dmq.PAUSED, s.Dmq.PAST_DUE, s.Dmq.ACCOUNT_HOLD, s.Dmq.BILLING_RETRY],
    h = () => o.intl.string(a.default.aFBQ3d),
    m = () => o.intl.string(o.t.jI66M4);
var E = (function (e) {
        return (
            (e.UNKNOWN = "UNKNOWN"),
            (e.FETCHING = "FETCHING"),
            (e.PENDING = "PENDING"),
            (e.ACCEPTED = "ACCEPTED"),
            (e.REMOVED = "REMOVED"),
            (e.NOT_FOUND = "NOT_FOUND"),
            (e.ERROR = "ERROR"),
            e
        );
    })({}),
    g = (function (e) {
        return (
            (e[(e.UNKNOWN_USER = 10013)] = "UNKNOWN_USER"),
            (e[(e.BILLING_SUBSCRIPTION_GROUP_MAX_MEMBERS = 100123)] = "BILLING_SUBSCRIPTION_GROUP_MAX_MEMBERS"),
            (e[(e.BILLING_SUBSCRIPTION_GROUP_USER_INELIGIBLE = 100124)] = "BILLING_SUBSCRIPTION_GROUP_USER_INELIGIBLE"),
            (e[(e.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED = 100125)] =
                "BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED"),
            (e[(e.BILLING_SUBSCRIPTION_GROUP_USER_IS_BOT = 100126)] = "BILLING_SUBSCRIPTION_GROUP_USER_IS_BOT"),
            (e[(e.BILLING_SUBSCRIPTION_GROUP_USER_ALREADY_IN_GROUP = 100127)] =
                "BILLING_SUBSCRIPTION_GROUP_USER_ALREADY_IN_GROUP"),
            (e[(e.BILLING_SUBSCRIPTION_GROUP_USER_HAS_FRACTIONAL_NITRO = 100128)] =
                "BILLING_SUBSCRIPTION_GROUP_USER_HAS_FRACTIONAL_NITRO"),
            (e[(e.BILLING_SUBSCRIPTION_GROUP_USER_BOOST_ONLY = 100129)] = "BILLING_SUBSCRIPTION_GROUP_USER_BOOST_ONLY"),
            (e[(e.BILLING_SUBSCRIPTION_GROUP_USER_ACCOUNT_TOO_YOUNG = 100130)] =
                "BILLING_SUBSCRIPTION_GROUP_USER_ACCOUNT_TOO_YOUNG"),
            (e[(e.BILLING_SUBSCRIPTION_GROUP_USER_HAS_INELIGIBLE_PLAN = 100131)] =
                "BILLING_SUBSCRIPTION_GROUP_USER_HAS_INELIGIBLE_PLAN"),
            (e[(e.BILLING_SUBSCRIPTION_GROUP_USER_ON_COOLDOWN = 100132)] =
                "BILLING_SUBSCRIPTION_GROUP_USER_ON_COOLDOWN"),
            (e[(e.BILLING_SUBSCRIPTION_GROUP_USER_ACTIVE_BOOSTS = 100133)] =
                "BILLING_SUBSCRIPTION_GROUP_USER_ACTIVE_BOOSTS"),
            (e[(e.BILLING_SUBSCRIPTION_GROUP_USER_ON_GIFT_SUBSCRIPTION = 100135)] =
                "BILLING_SUBSCRIPTION_GROUP_USER_ON_GIFT_SUBSCRIPTION"),
            (e[(e.BILLING_SUBSCRIPTION_GROUP_USER_HAS_MOBILE_SUBSCRIPTION = 100136)] =
                "BILLING_SUBSCRIPTION_GROUP_USER_HAS_MOBILE_SUBSCRIPTION"),
            (e[(e.BILLING_SUBSCRIPTION_GROUP_USER_INVALID_SUBSCRIPTION = 100137)] =
                "BILLING_SUBSCRIPTION_GROUP_USER_INVALID_SUBSCRIPTION"),
            e
        );
    })({});
