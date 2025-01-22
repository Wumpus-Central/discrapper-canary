r.d(n, {
    b: function () {
        return l;
    }
});
var i = r(653041);
var a = r(47120);
var o = r(508385);
function s(e, n, r) {
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
class l {
    addSample(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        (this.total += e * n), (this.totalWeight += n), this.samples++, o.TDigest.prototype.push.call(this.digest, e, n), this.digest.check_continuous();
    }
    getReport() {
        var e, n, r, i;
        let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [25, 50, 75, 90, 95],
            o = {};
        for (let n of a) o[n] = null !== (e = this.digest.percentile(n / 100)) && void 0 !== e ? e : 0;
        return {
            min: null !== (n = this.digest.percentile(0)) && void 0 !== n ? n : 0,
            max: null !== (r = this.digest.percentile(1)) && void 0 !== r ? r : 0,
            count: null !== (i = this.digest.size()) && void 0 !== i ? i : 0,
            percentiles: o,
            mean: this.totalWeight > 0 ? this.total / this.totalWeight : 0,
            samples: this.samples
        };
    }
    constructor() {
        s(this, 'digest', new o.Digest()), s(this, 'total', 0), s(this, 'samples', 0), s(this, 'totalWeight', 0);
    }
}
