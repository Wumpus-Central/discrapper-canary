"use strict";
n.d(t, { A: () => p });
var i = n(439372),
    r = n(287809),
    s = n(166403),
    a = n(751877),
    o = n(17928),
    l = n(228366),
    u = n(88001);
let c = { lastDismissedAnnouncementModalAt: null };
class d extends o.Ay.PersistedStore {
    static displayName = "PremiumGroupPersistedStore";
    static persistKey = "PremiumGroupPersistedStore";
    initialize(e) {
        null != e && (c = e);
    }
    getState() {
        return c;
    }
    getLastDismissedAnnouncementModalAt() {
        return c.lastDismissedAnnouncementModalAt;
    }
}
new d(l.h, {
    LOGOUT: function () {
        return (c = { lastDismissedAnnouncementModalAt: null }), !0;
    },
    PREMIUM_MARKETING_ANNOUNCEMENT_MODAL_DISMISSED: function (e) {
        return e.promotionKey === u.Sc && ((c = { ...c, lastDismissedAnnouncementModalAt: Date.now() }), !0);
    },
});
var _ = n(233317),
    h = n(862990);
class f extends i.A {
    handlePostConnectionOpen = () => this.maybeFetchSubscriptionGroupMembers();
    handleBillingSubscriptionFetchSuccess = () => this.maybeFetchSubscriptionGroupMembers();
    maybeFetchSubscriptionGroupMembers = () => {
        let e = r.default.getCurrentUser(),
            t = s.A.getPremiumGroupSubscription();
        null != e && null != t && (0, h.ux)(e, t) && !_.A.hasFetchedMembers() && (0, a.mm)(t.id);
    };
    actions = {
        POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: this.handleBillingSubscriptionFetchSuccess,
    };
}
let p = new f();
