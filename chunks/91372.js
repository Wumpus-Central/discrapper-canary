var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(570140);
let c = 'UPDATE_NOT_AVAILABLE';
function u(e) {
    c = e.type;
}
class d extends (a = o.ZP.Store) {
    getState() {
        return c;
    }
}
(l = 'AutoUpdateStore'),
    (r = 'displayName') in (i = d)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new d(s.Z, {
        CHECKING_FOR_UPDATES: u,
        UPDATE_NOT_AVAILABLE: u,
        UPDATE_AVAILABLE: u,
        UPDATE_MANUALLY: u,
        UPDATE_ERROR: u,
        UPDATE_DOWNLOADED: u
    }));
