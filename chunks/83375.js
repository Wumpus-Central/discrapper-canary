n.d(t, { A: () => s });
var i = n(311907),
    l = n(73153);
let a = !1;
class r extends i.Ay.Store {
    static displayName = "ProxyBlockStore";
    get blockedByProxy() {
        return a;
    }
}
let s = new r(l.h, {
    PROXY_BLOCKED_REQUEST: function (e) {
        a = !0;
    },
});
