n.d(t, { Z: () => f });
var r,
    i,
    s = n(973361),
    a = n(442837),
    l = n(570140),
    o = n(358085),
    c = n(723359);
let u = null,
    d = "underage";
class h extends (i = a.ZP.Store) {
    isUnderageAnonymous() {
        if (o.isPlatformEmbedded && 1) {
            if (null != u && u + c.k0 > Date.now()) return !0;
        } else if (1) return null != s.parse(document.cookie)[d];
        return !1;
    }
}
(r = "displayName") in h
    ? Object.defineProperty(h, r, {
          value: "AgeGateStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (h[r] = "AgeGateStore");
let f = new h(l.Z, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        (u = Date.now()), (document.cookie = "".concat(d, "=1;path=/"));
    },
    LOGIN_SUCCESS: function () {
        (u = null), (document.cookie = "".concat(d, "=1;path=/;max-age=0"));
    },
});
