a.d(e, { P: () => s });
var r = a(101284),
    n = a(696486),
    _ = a(147498),
    o = a(218234),
    i = a(823878),
    c = a(939747);
class s {
    constructor(t) {
        (this._client = t), (this._buckets = new Map()), (this._interval = setInterval(() => this.flush(), _.RF));
    }
    add(t, e, a, o = 'none', s = {}, E = (0, r.ph)()) {
        let l = Math.floor(E),
            u = (0, c.s3)(e),
            I = (0, c.Bg)(s),
            R = (0, c.OC)(o),
            d = (0, c.Ic)(t, u, R, I),
            A = this._buckets.get(d),
            f = A && t === _.is ? A.metric.weight : 0;
        A
            ? (A.metric.add(a), A.timestamp < l && (A.timestamp = l))
            : ((A = {
                  metric: new i.ZN[t](a),
                  timestamp: l,
                  metricType: t,
                  name: u,
                  unit: R,
                  tags: I
              }),
              this._buckets.set(d, A));
        let p = 'string' == typeof a ? A.metric.weight - f : a;
        (0, n.yc)(t, u, p, R, s, d);
    }
    flush() {
        if (0 === this._buckets.size) return;
        let t = Array.from(this._buckets.values());
        (0, o.o)(this._client, t), this._buckets.clear();
    }
    close() {
        clearInterval(this._interval), this.flush();
    }
}
