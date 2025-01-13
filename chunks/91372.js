var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(570140);
let c = 'UPDATE_NOT_AVAILABLE';
function d(e) {
    c = e.type;
}
class u extends (a = o.ZP.Store) {
    getState() {
        return c;
    }
}
(l = 'AutoUpdateStore'),
    (r = 'displayName') in (i = u)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new u(s.Z, {
        CHECKING_FOR_UPDATES: d,
        UPDATE_NOT_AVAILABLE: d,
        UPDATE_AVAILABLE: d,
        UPDATE_MANUALLY: d,
        UPDATE_ERROR: d,
        UPDATE_DOWNLOADED: d
    }));
