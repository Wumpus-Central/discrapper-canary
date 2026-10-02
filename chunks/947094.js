t.d(n, { A: () => a });
var i = t(17928),
    l = t(73153);
let s = new Set();
class r extends i.Ay.PersistedStore {
    static displayName = "ForumChannelAdminOnboardingGuideStore";
    static persistKey = "ForumChannelAdminOnboardingGuideStore";
    initialize(e) {
        null != e && (s = new Set(e));
    }
    hasHidden(e) {
        return s.has(e);
    }
    getState() {
        return s;
    }
}
let a = new r(l.h, {
    ADMIN_ONBOARDING_GUIDE_HIDE: function (e) {
        let { channelId: n, hide: t } = e;
        t ? s.add(n) : s.delete(n);
    },
});
