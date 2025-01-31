n.d(t, { b: () => a }), n(653041), n(47120);
var i = n(508385);
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
class a {
    addSample(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        (this.total += e * t), (this.totalWeight += t), this.samples++, i.TDigest.prototype.push.call(this.digest, e, t), this.digest.check_continuous();
    }
    getReport() {
        var e, t, n, i;
        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [25, 50, 75, 90, 95],
            a = {};
        for (let t of r) a[t] = null !== (e = this.digest.percentile(t / 100)) && void 0 !== e ? e : 0;
        return {
            min: null !== (t = this.digest.percentile(0)) && void 0 !== t ? t : 0,
            max: null !== (n = this.digest.percentile(1)) && void 0 !== n ? n : 0,
            count: null !== (i = this.digest.size()) && void 0 !== i ? i : 0,
            percentiles: a,
            mean: this.totalWeight > 0 ? this.total / this.totalWeight : 0,
            samples: this.samples
        };
    }
    constructor() {
        r(this, 'digest', new i.Digest()), r(this, 'total', 0), r(this, 'samples', 0), r(this, 'totalWeight', 0);
    }
}
