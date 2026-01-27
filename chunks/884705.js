n.d(t, {
    A: () => o,
});
var r = n(311907),
    i = n(73153);
let l = !1;

function s() {
    l = !1;
}
class a extends r.Ay.Store {
    isTogglesDisabled() {
        return l;
    }
}
let o = new a(i.h, {
    AD_PERSONALIZATION_TOGGLES_RESTRICTED: function (e) {
        var t;
        l = null != (t = e.disabled) && t;
    },
    CONNECTION_OPEN: s,
    LOGOUT: s,
});
