n.d(t, { A: () => u });
var r,
    i = n(311907),
    a = n(73153);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = null;
class l extends (r = i.Ay.Store) {
    hasAction() {
        return null != o;
    }
    getAction() {
        return o;
    }
}
function c(e) {
    o = e.requiredAction;
}
s(l, "displayName", "UserRequiredActionStore");
let u = new l(a.h, {
    CONNECTION_OPEN: c,
    USER_REQUIRED_ACTION_UPDATE: c,
});
