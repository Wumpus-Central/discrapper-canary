var i,
    a = r(442837),
    o = r(570140);
function s(e, n, r) {
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
let l = {};
function u(e) {
    return (l[e.key] = e.value), !0;
}
class c extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        Object.assign(l, e);
    }
    getState() {
        return l;
    }
    shouldShowEducation(e) {
        return !0 !== l[e];
    }
}
s(c, 'displayName', 'ActivityInviteEducationStore'), s(c, 'persistKey', 'ActivityInviteEducationExperimentStore'), (n.Z = new c(o.Z, { ACTIVITY_INVITE_EDUCATION_DISMISS: u }));
