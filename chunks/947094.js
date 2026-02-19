"use strict";
n.d(t, { A: () => a });
var i = n(311907),
    s = n(73153);
let l = new Set();
class r extends i.Ay.PersistedStore {
    static displayName = "ForumChannelAdminOnboardingGuideStore";
    static persistKey = "ForumChannelAdminOnboardingGuideStore";
    initialize(e) {
        null != e && (l = new Set(e));
    }
    hasHidden(e) {
        return l.has(e);
    }
    getState() {
        return l;
    }
}
let a = new r(s.h, {
    ADMIN_ONBOARDING_GUIDE_HIDE: function (e) {
        let { channelId: t, hide: n } = e;
        n ? l.add(t) : l.delete(t);
    },
});
