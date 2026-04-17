"use strict";
n.d(t, { A: () => c });
var r = n(439372),
    i = n(287809),
    s = n(166403),
    a = n(677185),
    o = n(233317),
    l = n(612669);
class u extends r.A {
    handlePostConnectionOpen = () => this.maybeFetchSubscriptionGroupMembers();
    handleBillingSubscriptionFetchSuccess = () => this.maybeFetchSubscriptionGroupMembers();
    maybeFetchSubscriptionGroupMembers = () => {
        let e = i.default.getCurrentUser(),
            t = s.A.getPremiumGroupSubscription();
        null != e && null != t && (0, l.ux)(e, t) && !o.A.hasFetchedMembers() && (0, a.mm)(t.id);
    };
    actions = {
        POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: this.handleBillingSubscriptionFetchSuccess,
    };
}
let c = new u();
