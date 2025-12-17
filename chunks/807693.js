t.d(n, { Z: () => c });
var r,
    a,
    i = t(442837),
    s = t(570140);
let l = {};
class o extends (a = i.ZP.Store) {
    getEULA(e) {
        return l[e];
    }
}
(r = "displayName") in o
    ? Object.defineProperty(o, r, {
          value: "EULAStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (o[r] = "EULAStore");
let c = new o(s.Z, {
    EULA_FETCH_SUCCESS: function (e) {
        let { eula: n } = e;
        l[n.id] = n;
    },
});
