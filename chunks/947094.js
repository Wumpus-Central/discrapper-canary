var i = t(855986),
    l = t(73153);
let r = new Set();
class s extends i.Ay.PersistedStore {
    static displayName = "ForumChannelAdminOnboardingGuideStore";
    static persistKey = "ForumChannelAdminOnboardingGuideStore";
    initialize(e) {
        null != e && (r = new Set(e));
    }
    hasHidden(e) {
        return r.has(e);
    }
    getState() {
        return r;
    }
}
let a = new s(l.h, {
    ADMIN_ONBOARDING_GUIDE_HIDE: function (e) {
        let { channelId: n, hide: t } = e;
        t ? r.add(n) : r.delete(n);
    },
});
t.d(n, {}, { A: a });
