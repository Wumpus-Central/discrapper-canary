"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153);
let s = null;
class a extends r.Ay.Store {
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
let l = new a(i.h, { CONNECTION_OPEN: o, USER_REQUIRED_ACTION_UPDATE: o });
