var i = n(855986),
    r = n(73153);
let s = !1;
function l() {
    s = !1;
}
class a extends i.Ay.Store {
    isTogglesDisabled() {
        return s;
    }
}
let o = new a(r.h, {
    AD_PERSONALIZATION_TOGGLES_RESTRICTED: function (e) {
        s = e.disabled ?? !1;
    },
    CONNECTION_OPEN: l,
    LOGOUT: l,
});
n.d(t, {}, { A: o });
