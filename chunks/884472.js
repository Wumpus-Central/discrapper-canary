"use strict";
n.d(t, { A: () => f });
var i = n(439372),
    r = n(287809),
    s = n(166403),
    a = n(751877),
    o = n(17928),
    l = n(228366);
let u = { lastDismissedAnnouncementModalAt: null };
class c extends o.Ay.PersistedStore {
    static displayName = "PremiumGroupPersistedStore";
    static persistKey = "PremiumGroupPersistedStore";
    initialize(e) {
        null != e && (u = e);
    }
    getState() {
        return u;
    }
    getLastDismissedAnnouncementModalAt() {
        return u.lastDismissedAnnouncementModalAt;
    }
}
new c(l.h, {
    LOGOUT: function () {
        return (u = { lastDismissedAnnouncementModalAt: null }), !0;
    },
});
var d = n(233317),
    _ = n(862990);
class h extends i.A {
    handlePostConnectionOpen = () => this.maybeFetchSubscriptionGroupMembers();
    handleBillingSubscriptionFetchSuccess = () => this.maybeFetchSubscriptionGroupMembers();
    maybeFetchSubscriptionGroupMembers = () => {
        let e = r.default.getCurrentUser(),
            t = s.A.getPremiumGroupSubscription();
        null != e && null != t && (0, _.ux)(e, t) && !d.A.hasFetchedMembers() && (0, a.mm)(t.id);
    };
    actions = {
        POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: this.handleBillingSubscriptionFetchSuccess,
    };
}
let f = new h();
