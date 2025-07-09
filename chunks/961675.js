(n.d(t, { Z: () => c }), n(388685));
var r,
    i = n(442837),
    l = n(570140);
function a(e, t, n) {
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
let o = new Set();
class s extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (o = new Set(e));
    }
    hasHidden(e) {
        return o.has(e);
    }
    getState() {
        return o;
    }
}
(a(s, 'displayName', 'ForumChannelAdminOnboardingGuideStore'), a(s, 'persistKey', 'ForumChannelAdminOnboardingGuideStore'));
let c = new s(l.Z, {
    ADMIN_ONBOARDING_GUIDE_HIDE: function (e) {
        let { channelId: t, hide: n } = e;
        n ? o.add(t) : o.delete(t);
    }
});
