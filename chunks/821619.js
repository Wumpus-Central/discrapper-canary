r.d(t, { P: () => c });
var n = r(343573),
    a = r(82255),
    i = r(639323),
    o = r(759532),
    _ = r(465270),
    s = r(588957);
class c {
    constructor(e) {
        (this._client = e), (this._buckets = new Map()), (this._interval = setInterval(() => this.flush(), i.RF));
    }
    add(e, t, r, o = "none", c = {}, E = (0, n.ph)()) {
        let l = Math.floor(E),
            u = (0, s.s3)(t),
            d = (0, s.Bg)(c),
            I = (0, s.OC)(o),
            p = (0, s.Ic)(e, u, I, d),
            R = this._buckets.get(p),
            T = R && e === i.is ? R.metric.weight : 0;
        R
            ? (R.metric.add(r), R.timestamp < l && (R.timestamp = l))
            : ((R = {
                  metric: new _.ZN[e](r),
                  timestamp: l,
                  metricType: e,
                  name: u,
                  unit: I,
                  tags: d,
              }),
              this._buckets.set(p, R));
        let A = "string" == typeof r ? R.metric.weight - T : r;
        (0, a.yc)(e, u, A, I, c, p);
    }
    flush() {
        if (0 === this._buckets.size) return;
        let e = Array.from(this._buckets.values());
        (0, o.o)(this._client, e), this._buckets.clear();
    }
    close() {
        clearInterval(this._interval), this.flush();
    }
}
