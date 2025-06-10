a.d(e, { P: () => E });
var r = a(101284),
    _ = a(696486),
    n = a(147498),
    o = a(218234),
    i = a(823878),
    c = a(939747);
class E {
    constructor(t) {
        (this._client = t), (this._buckets = new Map()), (this._interval = setInterval(() => this.flush(), n.RF));
    }
    add(t, e, a, o = 'none', E = {}, s = (0, r.ph)()) {
        let l = Math.floor(s),
            u = (0, c.s3)(e),
            I = (0, c.Bg)(E),
            R = (0, c.OC)(o),
            N = (0, c.Ic)(t, u, R, I),
            d = this._buckets.get(N),
            A = d && t === n.is ? d.metric.weight : 0;
        d
            ? (d.metric.add(a), d.timestamp < l && (d.timestamp = l))
            : ((d = {
                  metric: new i.ZN[t](a),
                  timestamp: l,
                  metricType: t,
                  name: u,
                  unit: R,
                  tags: I
              }),
              this._buckets.set(N, d));
        let f = 'string' == typeof a ? d.metric.weight - A : a;
        (0, _.yc)(t, u, f, R, E, N);
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
