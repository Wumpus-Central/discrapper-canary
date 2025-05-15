n.d(t, { Z: () => u });
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
o(c, 'displayName', 'BitRateStore');
let u = new c(a.Z, { SET_CHANNEL_BITRATE: l });
