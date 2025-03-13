n.d(t, { Z: () => s }), n(47120);
var r = n(147913),
    i = n(998502);
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
    constructor(...e) {
        super(...e),
            o(this, 'ownedLocks', new Set()),
            o(this, 'acquireLock', (e) => {
                if (this.ownedLocks.has(e)) return !0;
                let t = 'discord-overlay-global-owner-lock-'.concat(e);
                return !1 !== i.ZP.AcquireGlobalLock(t) && (this.ownedLocks.add(e), !0);
            });
    }
}
let s = new a();
