n.d(t, { A: () => o });
var i = n(17928),
    s = n(73153);
let r = !1;
function l() {
    r = !1;
}
class a extends i.Ay.Store {
    isTogglesDisabled() {
        return r;
    }
}
let o = new a(s.h, {
    AD_PERSONALIZATION_TOGGLES_RESTRICTED: function (e) {
        r = e.disabled ?? !1;
    },
    CONNECTION_OPEN: l,
    LOGOUT: l,
});
