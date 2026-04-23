var i = n(311907),
    r = n(73153);
let a = !1;
function l() {
    a = !1;
}
class s extends i.Ay.Store {
    isTogglesDisabled() {
        return a;
    }
}
new s(r.h, {
    AD_PERSONALIZATION_TOGGLES_RESTRICTED: function (e) {
        a = e.disabled ?? !1;
    },
    CONNECTION_OPEN: l,
    LOGOUT: l,
});
