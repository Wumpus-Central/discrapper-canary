n.d(t, { A: () => o });
var i = n(17928),
    l = n(228366);
let r = !1;
function s() {
    r = !1;
}
class a extends i.Ay.Store {
    isTogglesDisabled() {
        return r;
    }
}
let o = new a(l.h, {
    AD_PERSONALIZATION_TOGGLES_RESTRICTED: function (e) {
        r = e.disabled ?? !1;
    },
    CONNECTION_OPEN: s,
    LOGOUT: s,
});
