r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(653041);
var a = r(47120);
var o = r(392711),
    s = r.n(o);
function l(e, n, r) {
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
let u = [];
class c {
    static create() {
        let e = new c();
        return u.push(e), e.record;
    }
    getTotalBytes() {
        return s().sum(Object.values(this.bytes));
    }
    constructor() {
        l(this, 'bytes', {}),
            l(this, 'record', (e) => {
                if (null != e) {
                    for (let n in e.rtp.inbound)
                        for (let r of e.rtp.inbound[n]) {
                            let e = 'inbound-'.concat(n, '-').concat(r.type);
                            !(e in this.bytes) && (this.bytes[e] = 0), (this.bytes[e] = r.bytesReceived);
                        }
                    for (let n of e.rtp.outbound) {
                        let e = 'outbound-'.concat(n.type);
                        !(e in this.bytes) && (this.bytes[e] = 0), (this.bytes[e] = n.bytesSent);
                    }
                }
            });
    }
}
