function i(e, t, n) {
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
n.d(t, { Z: () => a }), n(653041);
class r {
    enqueue(e) {
        this.queue.push(e);
    }
    flush() {
        for (; this.queue.length > 0; ) {
            var e;
            null === (e = this.queue.shift()) || void 0 === e || e();
        }
    }
    constructor() {
        i(this, 'queue', []);
    }
}
let a = new r();
