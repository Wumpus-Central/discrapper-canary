var i = n(855986),
    r = n(73153),
    a = n(733110);
let s = new Map(),
    l = new Set();
class o extends i.Ay.Store {
    initialize() {
        this.waitFor(a.A);
    }
    static displayName = "AccountLinkStore";
    getPendingAuthorizations() {
        return s;
    }
    deletePendingAuthorization(e) {
        s.delete(e);
    }
    getGloballyDisabledAuthorizationFlows() {
        return l;
    }
}
let d = new o(r.h, {
    ACCOUNT_LINK_AUTHORIZATION_STARTED: function (e) {
        null != a.A.getNewestTokenForApplication(e.applicationId) ||
            (null != e.accountLinkCallbacks &&
                s.set(e.applicationId, {
                    applicationId: e.applicationId,
                    startedAt: Date.now(),
                    accountLinkCallbacks: e.accountLinkCallbacks,
                }));
    },
    ACCOUNT_LINK_DEVTOOLS_SET_GLOBALLY_DISBLED_FLOWS: function (e) {
        l = new Set(e.flows);
    },
});
n.d(t, {}, { A: d });
