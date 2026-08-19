"use strict";
n.d(t, { A: () => c });
var i = n(439372),
    r = n(287809),
    a = n(166403),
    s = n(751877);
n(591566);
var l = n(233317),
    o = n(862990);
class d extends i.A {
    handlePostConnectionOpen = () => this.maybeFetchSubscriptionGroupMembers();
    handleBillingSubscriptionFetchSuccess = () => this.maybeFetchSubscriptionGroupMembers();
    maybeFetchSubscriptionGroupMembers = () => {
        let e = r.default.getCurrentUser(),
            t = a.A.getPremiumGroupSubscription();
        null != e && null != t && (0, o.ux)(e, t) && !l.A.hasFetchedMembers() && (0, s.mm)(t.id);
    };
    actions = {
        POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: this.handleBillingSubscriptionFetchSuccess,
    };
}
let c = new d();
