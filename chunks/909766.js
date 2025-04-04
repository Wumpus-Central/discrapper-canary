n.d(t, { b: () => o }), n(653041), n(47120);
var r = n(508385);
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
class o {
    addSample(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        (this.total += e * t), (this.totalWeight += t), this.samples++, r.TDigest.prototype.push.call(this.digest, e, t), this.digest.check_continuous();
    }
    getReport() {
        var e, t, n, r;
        let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [25, 50, 75, 90, 95],
            o = {};
        for (let t of i) o[t] = null != (e = this.digest.percentile(t / 100)) ? e : 0;
        return {
            min: null != (t = this.digest.percentile(0)) ? t : 0,
            max: null != (n = this.digest.percentile(1)) ? n : 0,
            count: null != (r = this.digest.size()) ? r : 0,
            percentiles: o,
            mean: this.totalWeight > 0 ? this.total / this.totalWeight : 0,
            samples: this.samples
        };
    }
    constructor() {
        i(this, 'digest', new r.Digest()), i(this, 'total', 0), i(this, 'samples', 0), i(this, 'totalWeight', 0);
    }
}
