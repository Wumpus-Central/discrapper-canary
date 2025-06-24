i.d(e, { Z: () => d });
var n,
    r = i(442837),
    s = i(570140);
function o(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = i),
        t
    );
}
let l = {};
class a extends (n = r.ZP.PersistedStore) {
    initialize(t) {
        Object.assign(l, t);
    }
    getState() {
        return l;
    }
    shouldShowEducation(t) {
        return !0 !== l[t];
    }
}
o(a, 'displayName', 'ActivityInviteEducationStore'), o(a, 'persistKey', 'ActivityInviteEducationExperimentStore');
let d = new a(s.Z, {
    ACTIVITY_INVITE_EDUCATION_DISMISS: function (t) {
        return (l[t.key] = t.value), !0;
    }
});
