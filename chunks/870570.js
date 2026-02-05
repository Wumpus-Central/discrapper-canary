"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153);
let a = null;
class s extends r.Ay.Store {
    static displayName = "UserRequiredActionStore";
    hasAction() {
        return null != a;
    }
    getAction() {
        return a;
    }
}
function o(e) {
    a = e.requiredAction;
}
let l = new s(i.h, { CONNECTION_OPEN: o, USER_REQUIRED_ACTION_UPDATE: o });
