n.d(t, { Z: () => u });
var i,
    l,
    a,
    r = n(442837),
    s = n(570140);
let o = 'UPDATE_NOT_AVAILABLE';
function c(e) {
    o = e.type;
}
class d extends (a = r.ZP.Store) {
    getState() {
        return o;
    }
}
(l = 'AutoUpdateStore'),
    (i = 'displayName') in d
        ? Object.defineProperty(d, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[i] = l);
let u = new d(s.Z, {
    CHECKING_FOR_UPDATES: c,
    UPDATE_NOT_AVAILABLE: c,
    UPDATE_AVAILABLE: c,
    UPDATE_MANUALLY: c,
    UPDATE_ERROR: c,
    UPDATE_DOWNLOADED: c
});
