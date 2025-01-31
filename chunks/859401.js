n.d(t, { Z: () => o }), n(653041), n(47120);
var i = n(392711),
    r = n.n(i);
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
let s = [];
class o {
    static create() {
        let e = new o();
        return s.push(e), e.record;
    }
    getTotalBytes() {
        return r().sum(Object.values(this.bytes));
    }
    constructor() {
        a(this, 'bytes', {}),
            a(this, 'record', (e) => {
                if (null != e) {
                    for (let t in e.rtp.inbound)
                        for (let n of e.rtp.inbound[t]) {
                            let e = 'inbound-'.concat(t, '-').concat(n.type);
                            e in this.bytes || (this.bytes[e] = 0), (this.bytes[e] = n.bytesReceived);
                        }
                    for (let t of e.rtp.outbound) {
                        let e = 'outbound-'.concat(t.type);
                        e in this.bytes || (this.bytes[e] = 0), (this.bytes[e] = t.bytesSent);
                    }
                }
            });
    }
}
