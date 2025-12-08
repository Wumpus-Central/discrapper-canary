n.d(t, { Z: () => a }), n(415506);
var r = n(384136);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class a {
    async acquire(e, t) {
        let n = await r.Z.get(e, t, this);
        return (this.pool[n.id] = n), n;
    }
    get(e) {
        let t = this.pool[e];
        return delete this.pool[e], t;
    }
    release(e) {
        if (e.pool !== this) throw Error("DesktopInputPool: Input not from this pool");
        this.pool[e.id] = e;
    }
    constructor() {
        i(this, "pool", {});
    }
}
