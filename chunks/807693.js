r.d(t, { Z: () => u });
var n,
    l,
    a,
    o = r(442837),
    c = r(570140);
let i = {};
class s extends (a = o.ZP.Store) {
    getEULA(e) {
        return i[e];
    }
}
(l = 'EULAStore'),
    (n = 'displayName') in s
        ? Object.defineProperty(s, n, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[n] = l);
let u = new s(c.Z, {
    EULA_FETCH_SUCCESS: function (e) {
        let { eula: t } = e;
        i[t.id] = t;
    }
});
