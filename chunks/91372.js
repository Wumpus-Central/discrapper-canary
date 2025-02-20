n.d(t, { Z: () => u });
var r,
    i,
    a,
    o = n(442837),
    l = n(570140);
let s = 'UPDATE_NOT_AVAILABLE';
function c(e) {
    s = e.type;
}
class d extends (a = o.ZP.Store) {
    getState() {
        return s;
    }
}
(i = 'AutoUpdateStore'),
    (r = 'displayName') in d
        ? Object.defineProperty(d, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[r] = i);
let u = new d(l.Z, {
    CHECKING_FOR_UPDATES: c,
    UPDATE_NOT_AVAILABLE: c,
    UPDATE_AVAILABLE: c,
    UPDATE_MANUALLY: c,
    UPDATE_ERROR: c,
    UPDATE_DOWNLOADED: c
});
