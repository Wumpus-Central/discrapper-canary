n.d(t, { Z: () => s }), n(47120);
var r = n(147913),
    i = n(914010);
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
class a extends r.Z {
    handleSelectedGuildChange() {}
    constructor(...e) {
        super(...e), o(this, 'stores', new Map().set(i.Z, this.handleSelectedGuildChange));
    }
}
let s = new a();
