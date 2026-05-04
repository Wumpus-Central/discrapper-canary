"use strict";
n.d(t, { A: () => c });
var i = n(439372),
    r = n(287809),
    s = n(166403),
    a = n(751877),
    o = n(233317),
    l = n(39423);
class u extends i.A {
    handlePostConnectionOpen = () => this.maybeFetchSubscriptionGroupMembers();
    handleBillingSubscriptionFetchSuccess = () => this.maybeFetchSubscriptionGroupMembers();
    maybeFetchSubscriptionGroupMembers = () => {
        let e = r.default.getCurrentUser(),
            t = s.A.getPremiumGroupSubscription();
        null != e && null != t && (0, l.ux)(e, t) && !o.A.hasFetchedMembers() && (0, a.mm)(t.id);
    };
    actions = {
        POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: this.handleBillingSubscriptionFetchSuccess,
    };
}
let c = new u();
