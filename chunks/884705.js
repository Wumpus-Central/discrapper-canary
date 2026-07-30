"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let a = !1;
function s() {
    a = !1;
}
class l extends i.Ay.Store {
    isTogglesDisabled() {
        return a;
    }
}
let o = new l(r.h, {
    AD_PERSONALIZATION_TOGGLES_RESTRICTED: function (e) {
        a = e.disabled ?? !1;
    },
    CONNECTION_OPEN: s,
    LOGOUT: s,
});
