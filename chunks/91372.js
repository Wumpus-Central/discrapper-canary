n.d(t, { Z: () => d });
var r,
    i,
    a,
    l = n(442837),
    o = n(570140);
let s = 'UPDATE_NOT_AVAILABLE';
function c(e) {
    s = e.type;
}
class u extends (a = l.ZP.Store) {
    getState() {
        return s;
    }
}
(i = 'AutoUpdateStore'),
    (r = 'displayName') in u
        ? Object.defineProperty(u, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[r] = i);
let d = new u(o.Z, {
    CHECKING_FOR_UPDATES: c,
    UPDATE_NOT_AVAILABLE: c,
    UPDATE_AVAILABLE: c,
    UPDATE_MANUALLY: c,
    UPDATE_ERROR: c,
    UPDATE_DOWNLOADED: c
});
