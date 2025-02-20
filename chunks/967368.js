n.d(t, { Z: () => u });
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = n(65154).dX;
function l(e) {
    s = e.bitrate;
}
class c extends (r = i.ZP.Store) {
    get bitrate() {
        return s;
    }
}
a(c, 'displayName', 'BitRateStore');
let u = new c(o.Z, { SET_CHANNEL_BITRATE: l });
