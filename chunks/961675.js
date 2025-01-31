n.d(t, { Z: () => c }), n(47120);
var i,
    l = n(442837),
    a = n(570140);
function r(e, t, n) {
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
class o extends (i = l.ZP.PersistedStore) {
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
r(o, 'displayName', 'ForumChannelAdminOnboardingGuideStore'), r(o, 'persistKey', 'ForumChannelAdminOnboardingGuideStore');
let c = new o(a.Z, {
    ADMIN_ONBOARDING_GUIDE_HIDE: function (e) {
        let { channelId: t, hide: n } = e;
        n ? s.add(t) : s.delete(t);
    }
});
