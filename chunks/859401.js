n.d(t, { Z: () => s }), n(653041), n(47120);
var r = n(392711),
    i = n.n(r);
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
let a = [];
class s {
    static create() {
        let e = new s();
        return a.push(e), e.record;
    }
    getTotalBytes() {
        return i().sum(Object.values(this.bytes));
    }
    constructor() {
        o(this, 'bytes', {}),
            o(this, 'record', (e) => {
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
