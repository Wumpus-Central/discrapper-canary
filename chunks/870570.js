n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let a = null;
class s extends i.Ay.Store {
    static displayName = "UserRequiredActionStore";
    hasAction() {
        return null != a;
    }
    getAction() {
        return a;
    }
}
function l(e) {
    a = e.requiredAction;
}
let o = new s(r.h, { CONNECTION_OPEN: l, USER_REQUIRED_ACTION_UPDATE: l });
