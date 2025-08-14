r.d(t, { Z: () => s });
var n,
    l,
    a = r(442837),
    o = r(570140);
let c = {};
class i extends (l = a.ZP.Store) {
    getEULA(e) {
        return c[e];
    }
}
(n = "displayName") in i
    ? Object.defineProperty(i, n, {
          value: "EULAStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (i[n] = "EULAStore");
let s = new i(o.Z, {
    EULA_FETCH_SUCCESS: function (e) {
        let { eula: t } = e;
        c[t.id] = t;
    },
});
