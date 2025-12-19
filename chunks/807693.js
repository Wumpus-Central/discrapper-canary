t.d(e, { Z: () => o });
var a,
    i,
    r = t(442837),
    s = t(570140);
let d = {};
class l extends (i = r.ZP.Store) {
    getEULA(n) {
        return d[n];
    }
}
(a = "displayName") in l
    ? Object.defineProperty(l, a, {
          value: "EULAStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (l[a] = "EULAStore");
let o = new l(s.Z, {
    EULA_FETCH_SUCCESS: function (n) {
        let { eula: e } = n;
        d[e.id] = e;
    },
});
