function r(e, t, n) {
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
n.d(t, { Z: () => a }), n(539854);
class i {
    enqueue(e) {
        this.queue.push(e);
    }
    flush() {
        for (; this.queue.length > 0; ) {
            var e;
            null == (e = this.queue.shift()) || e();
        }
    }
    constructor() {
        r(this, 'queue', []);
    }
}
let a = new i();
