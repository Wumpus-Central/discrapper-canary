var i = n(311907),
    a = n(73153);
let l = !1;
function r() {
    l = !1;
}
class s extends i.Ay.Store {
    isTogglesDisabled() {
        return l;
    }
}
new s(a.h, {
    AD_PERSONALIZATION_TOGGLES_RESTRICTED: function (e) {
        l = e.disabled ?? !1;
    },
    CONNECTION_OPEN: r,
    LOGOUT: r,
});
