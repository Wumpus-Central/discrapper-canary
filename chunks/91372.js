n.d(t, { Z: () => u });
var r,
    i,
    l = n(442837),
    a = n(570140);
let o = "UPDATE_NOT_AVAILABLE";
function s(e) {
    o = e.type;
}
class c extends (i = l.ZP.Store) {
    getState() {
        return o;
    }
}
(r = "displayName") in c
    ? Object.defineProperty(c, r, {
          value: "AutoUpdateStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[r] = "AutoUpdateStore");
let u = new c(a.Z, {
    CHECKING_FOR_UPDATES: s,
    UPDATE_NOT_AVAILABLE: s,
    UPDATE_AVAILABLE: s,
    UPDATE_MANUALLY: s,
    UPDATE_ERROR: s,
    UPDATE_DOWNLOADED: s,
});
