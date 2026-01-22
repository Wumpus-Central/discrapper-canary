n.d(t, {
    A: () => c,
});
var r = n(311907),
    i = n(73153);
let a = !1;

function s(e) {
    var t;
    a = null != (t = e.disabled) && t;
}

function o() {
    a = !1;
}
class l extends r.Ay.Store {
    isTogglesDisabled() {
        return a;
    }
}
let c = new l(i.h, {
    AD_PERSONALIZATION_TOGGLES_RESTRICTED: s,
    CONNECTION_OPEN: o,
    LOGOUT: o,
});
