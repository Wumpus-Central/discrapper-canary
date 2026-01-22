n.d(t, { A: () => c });
var i,
    s = n(311907),
    r = n(73153);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let a = {};
class o extends (i = s.Ay.PersistedStore) {
    initialize(e) {
        Object.assign(a, e);
    }
    getState() {
        return a;
    }
    shouldShowEducation(e) {
        return !0 !== a[e];
    }
}
l(o, "displayName", "ActivityInviteEducationStore"), l(o, "persistKey", "ActivityInviteEducationExperimentStore");
let c = new o(r.h, {
    ACTIVITY_INVITE_EDUCATION_DISMISS: function (e) {
        return (a[e.key] = e.value), !0;
    },
});
