n.d(t, { A: () => o });
var i = n(311907),
    s = n(73153);
let r = !1;
function a() {
    r = !1;
}
class l extends i.Ay.Store {
    isTogglesDisabled() {
        return r;
    }
}
let o = new l(s.h, {
    AD_PERSONALIZATION_TOGGLES_RESTRICTED: function (e) {
        r = e.disabled ?? !1;
    },
    CONNECTION_OPEN: a,
    LOGOUT: a,
});
