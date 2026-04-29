"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
let s = null;
class a extends i.Ay.Store {
    static displayName = "UserRequiredActionStore";
    hasAction() {
        return null != s;
    }
    getAction() {
        return s;
    }
}
function o(e) {
    s = e.requiredAction;
}
let l = new a(r.h, { CONNECTION_OPEN: o, USER_REQUIRED_ACTION_UPDATE: o });
