r.d(n, {
    kp: function () {
        return c;
    },
    uX: function () {
        return i;
    }
});
var i,
    a,
    o = r(442837),
    s = r(570140),
    l = r(981631);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function c(e) {
    return null != e && ['started', 'ready'].includes(e);
}
!(function (e) {
    (e.STARTED = 'started'), (e.READY = 'ready'), (e.COMPLETED = 'completed'), (e.NOT_APPLICABLE = 'not_applicable');
})(i || (i = {}));
let d = {},
    f = {};
function p() {
    (d = {}), (f = {});
}
function h(e) {
    let { guildId: n } = e;
    d[n] = 'started';
}
function _(e) {
    let { guildId: n, enabled: r } = e;
    if ('started' !== d[n]) return !1;
    r ? (d[n] = 'ready') : (d[n] = 'not_applicable');
}
function m(e) {
    let { guildId: n } = e;
    d[n] = 'not_applicable';
}
function g(e) {
    let { guildId: n } = e;
    d[n] = 'completed';
}
function E(e) {
    let { guild: n } = e;
    delete d[n.id], delete f[n.id];
}
function v(e) {
    let { guildId: n, step: r } = e;
    f[n] = r;
}
function y() {
    f = {};
}
class b extends (a = o.ZP.Store) {
    shouldShowOnboarding(e) {
        return !!(e !== l.ME && e !== l.I_8 && c(d[e])) || !1;
    }
    getOnboardingStatus(e) {
        return d[e];
    }
    resetOnboardingStatus(e) {
        (d[e] = 'started'), (f[e] = 'cover');
    }
    getCurrentOnboardingStep(e) {
        var n;
        return null !== (n = f[e]) && void 0 !== n ? n : 'cover';
    }
}
u(b, 'displayName', 'GuildOnboardingStore'),
    (n.ZP = new b(s.Z, {
        LOGOUT: p,
        GUILD_DELETE: E,
        GUILD_ONBOARDING_START: h,
        GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: _,
        GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: m,
        GUILD_ONBOARDING_COMPLETE: g,
        GUILD_ONBOARDING_SET_STEP: v,
        CONNECTION_OPEN: y
    }));
