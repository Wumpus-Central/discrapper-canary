t.d(n, { Z: () => u });
var r,
    l,
    a,
    o = t(442837),
    i = t(570140);
let s = {};
class c extends (a = o.ZP.Store) {
    getEULA(e) {
        return s[e];
    }
}
(l = 'EULAStore'),
    (r = 'displayName') in c
        ? Object.defineProperty(c, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[r] = l);
let u = new c(i.Z, {
    EULA_FETCH_SUCCESS: function (e) {
        let { eula: n } = e;
        s[n.id] = n;
    }
});
