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
let o = !1;
function l(e) {
    o = !0;
}
class c extends (r = i.Ay.Store) {
    get blockedByProxy() {
        return o;
    }
}
s(c, "displayName", "ProxyBlockStore");
let u = new c(a.h, { PROXY_BLOCKED_REQUEST: l });
