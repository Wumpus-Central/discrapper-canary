n.d(t, { P: () => c });
var r = n(343573),
    i = n(82255),
    a = n(639323),
    o = n(759532),
    _ = n(465270),
    s = n(588957);
class c {
    constructor(e) {
        (this._client = e), (this._buckets = new Map()), (this._interval = setInterval(() => this.flush(), a.RF));
    }
    add(e, t, n, o = "none", c = {}, E = (0, r.ph)()) {
        let l = Math.floor(E),
            u = (0, s.s3)(t),
            d = (0, s.Bg)(c),
            p = (0, s.OC)(o),
            f = (0, s.Ic)(e, u, p, d),
            I = this._buckets.get(f),
            T = I && e === a.is ? I.metric.weight : 0;
        I
            ? (I.metric.add(n), I.timestamp < l && (I.timestamp = l))
            : ((I = {
                  metric: new _.ZN[e](n),
                  timestamp: l,
                  metricType: e,
                  name: u,
                  unit: p,
                  tags: d,
              }),
              this._buckets.set(f, I));
        let R = "string" == typeof n ? I.metric.weight - T : n;
        (0, i.yc)(e, u, R, p, c, f);
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
