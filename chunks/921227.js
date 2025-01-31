n.d(t, { Z: () => c });
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
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
let o = {};
function l(e) {
    return (o[e.key] = e.value), !0;
}
class u extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        Object.assign(o, e);
    }
    getState() {
        return o;
    }
    shouldShowEducation(e) {
        return !0 !== o[e];
    }
}
s(u, 'displayName', 'ActivityInviteEducationStore'), s(u, 'persistKey', 'ActivityInviteEducationExperimentStore');
let c = new u(a.Z, { ACTIVITY_INVITE_EDUCATION_DISMISS: l });
