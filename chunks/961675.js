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
let s = new Set();
class o extends (r = i.ZP.PersistedStore) {
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
(a(o, 'displayName', 'ForumChannelAdminOnboardingGuideStore'), a(o, 'persistKey', 'ForumChannelAdminOnboardingGuideStore'));
let c = new o(l.Z, {
    ADMIN_ONBOARDING_GUIDE_HIDE: function (e) {
        let { channelId: t, hide: n } = e;
        n ? s.add(t) : s.delete(t);
    }
});
