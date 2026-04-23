n.d(t, { A: () => a });
var i = n(17928),
    l = n(228366);
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
        let { channelId: t, hide: n } = e;
        n ? s.add(t) : s.delete(t);
    },
});
