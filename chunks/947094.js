t.d(n, { A: () => r });
var l = t(17928),
    i = t(228366);
let s = new Set();
class a extends l.Ay.PersistedStore {
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
let r = new a(i.h, {
    ADMIN_ONBOARDING_GUIDE_HIDE: function (e) {
        let { channelId: n, hide: t } = e;
        t ? s.add(n) : s.delete(n);
    },
});
