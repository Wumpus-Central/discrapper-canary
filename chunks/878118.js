"use strict";
n.d(t, { A: () => u });
var i = n(17928),
    r = n(228366),
    s = n(546183);
let a = new Map(),
    o = new Set();
class l extends i.Ay.Store {
    initialize() {
        this.waitFor(s.default);
    }
    static displayName = "AccountLinkStore";
    getPendingAuthorizations() {
        return a;
    }
    deletePendingAuthorization(e) {
        a.delete(e);
    }
    getGloballyDisabledAuthorizationFlows() {
        return o;
    }
}
let u = new l(r.h, {
    ACCOUNT_LINK_AUTHORIZATION_STARTED: function (e) {
        null != s.default.getNewestTokenForApplication(e.applicationId) ||
            (null != e.accountLinkCallbacks &&
                a.set(e.applicationId, {
                    applicationId: e.applicationId,
                    startedAt: Date.now(),
                    accountLinkCallbacks: e.accountLinkCallbacks,
                }));
    },
    ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS: function (e) {
        o = new Set(e.flows);
    },
});
