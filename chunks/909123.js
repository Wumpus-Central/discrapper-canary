n.d(t, { Z: () => l }), n(47120);
var r = n(147913),
    i = n(914010),
    o = n(713081);
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
class s extends r.Z {
    handleSelectedGuildChange() {
        let e = i.Z.getGuildId();
        null != e && ((0, o.Sn)(e), (0, o.Fm)(e));
    }
    constructor(...e) {
        super(...e), a(this, 'stores', new Map().set(i.Z, this.handleSelectedGuildChange));
    }
}
let l = new s();
