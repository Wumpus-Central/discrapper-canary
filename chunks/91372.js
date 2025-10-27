n.d(t, { Z: () => u });
var r,
    i,
    l = n(442837),
    a = n(570140);
let s = "UPDATE_NOT_AVAILABLE";
function o(e) {
    s = e.type;
}
class c extends (i = l.ZP.Store) {
    getState() {
        return s;
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
    CHECKING_FOR_UPDATES: o,
    UPDATE_NOT_AVAILABLE: o,
    UPDATE_AVAILABLE: o,
    UPDATE_MANUALLY: o,
    UPDATE_ERROR: o,
    UPDATE_DOWNLOADED: o,
});
