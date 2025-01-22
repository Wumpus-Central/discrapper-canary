var i = r(653041);
function a(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class o {
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
        a(this, 'queue', []);
    }
}
n.Z = new o();
