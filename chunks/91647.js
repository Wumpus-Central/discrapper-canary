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
            I = (0, c.s3)(e),
            u = (0, c.Bg)(E),
            R = (0, c.OC)(o),
            A = (0, c.Ic)(t, I, R, u),
            T = this._buckets.get(A),
            N = T && t === n.is ? T.metric.weight : 0;
        T
            ? (T.metric.add(a), T.timestamp < l && (T.timestamp = l))
            : ((T = {
                  metric: new i.ZN[t](a),
                  timestamp: l,
                  metricType: t,
                  name: I,
                  unit: R,
                  tags: u
              }),
              this._buckets.set(A, T));
        let d = 'string' == typeof a ? T.metric.weight - N : a;
        (0, _.yc)(t, I, d, R, E, A);
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
