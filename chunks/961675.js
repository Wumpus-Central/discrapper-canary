n.d(t, { Z: () => c }), n(47120);
var r,
    i = n(442837),
    l = n(570140);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let a = new Set();
class s extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (a = new Set(e));
    }
    hasHidden(e) {
        return a.has(e);
    }
    getState() {
        return a;
    }
}
o(s, 'displayName', 'ForumChannelAdminOnboardingGuideStore'), o(s, 'persistKey', 'ForumChannelAdminOnboardingGuideStore');
let c = new s(l.Z, {
    ADMIN_ONBOARDING_GUIDE_HIDE: function (e) {
        let { channelId: t, hide: n } = e;
        n ? a.add(t) : a.delete(t);
    }
});
