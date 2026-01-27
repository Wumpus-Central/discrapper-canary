n.d(t, {
    A: () => c,
});
var r,
    i,
    l = n(311907),
    a = n(73153);
let s = !1;
class o extends (i = l.Ay.Store) {
    get blockedByProxy() {
        return s;
    }
}
(r = "displayName") in o
    ? Object.defineProperty(o, r, {
          value: "ProxyBlockStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (o[r] = "ProxyBlockStore");
let c = new o(a.h, {
    PROXY_BLOCKED_REQUEST: function (e) {
        s = !0;
    },
});
