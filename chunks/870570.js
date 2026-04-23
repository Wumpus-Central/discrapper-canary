n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let l = null;
class a extends i.Ay.Store {
    static displayName = "UserRequiredActionStore";
    hasAction() {
        return null != l;
    }
    getAction() {
        return l;
    }
}
function s(e) {
    l = e.requiredAction;
}
let o = new a(r.h, { CONNECTION_OPEN: s, USER_REQUIRED_ACTION_UPDATE: s });
