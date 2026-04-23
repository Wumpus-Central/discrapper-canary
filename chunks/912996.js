n.d(t, { A: () => r });
var i = n(311907),
    l = n(73153);
let a = {};
class s extends i.Ay.PersistedStore {
    static displayName = "ActivityInviteEducationStore";
    static persistKey = "ActivityInviteEducationExperimentStore";
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
let r = new s(l.h, {
    ACTIVITY_INVITE_EDUCATION_DISMISS: function (e) {
        return (a[e.key] = e.value), !0;
    },
});
