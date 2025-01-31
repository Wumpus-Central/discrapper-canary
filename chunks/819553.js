n.d(t, {
    ZP: () => I,
    kp: () => u,
    uX: () => l
});
var i,
    r = n(442837),
    a = n(570140),
    s = n(981631);
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
var l = (function (e) {
    return (e.STARTED = 'started'), (e.READY = 'ready'), (e.COMPLETED = 'completed'), (e.NOT_APPLICABLE = 'not_applicable'), e;
})({});
function u(e) {
    return null != e && ['started', 'ready'].includes(e);
}
let c = {},
    d = {};
function f() {
    (c = {}), (d = {});
}
function _(e) {
    let { guildId: t } = e;
    c[t] = 'started';
}
function p(e) {
    let { guildId: t, enabled: n } = e;
    if ('started' !== c[t]) return !1;
    n ? (c[t] = 'ready') : (c[t] = 'not_applicable');
}
function h(e) {
    let { guildId: t } = e;
    c[t] = 'not_applicable';
}
function m(e) {
    let { guildId: t } = e;
    c[t] = 'completed';
}
function g(e) {
    let { guild: t } = e;
    delete c[t.id], delete d[t.id];
}
function E(e) {
    let { guildId: t, step: n } = e;
    d[t] = n;
}
function v() {
    d = {};
}
class y extends (i = r.ZP.Store) {
    shouldShowOnboarding(e) {
        return !!(e !== s.ME && e !== s.I_8 && u(c[e]));
    }
    getOnboardingStatus(e) {
        return c[e];
    }
    resetOnboardingStatus(e) {
        (c[e] = 'started'), (d[e] = 'cover');
    }
    getCurrentOnboardingStep(e) {
        var t;
        return null !== (t = d[e]) && void 0 !== t ? t : 'cover';
    }
}
o(y, 'displayName', 'GuildOnboardingStore');
let I = new y(a.Z, {
    LOGOUT: f,
    GUILD_DELETE: g,
    GUILD_ONBOARDING_START: _,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: p,
    GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: h,
    GUILD_ONBOARDING_COMPLETE: m,
    GUILD_ONBOARDING_SET_STEP: E,
    CONNECTION_OPEN: v
});
