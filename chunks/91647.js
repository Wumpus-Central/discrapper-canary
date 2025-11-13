a.d(e, { P: () => c });
var r = a(101284),
    _ = a(696486),
    n = a(147498),
    o = a(218234),
    i = a(823878),
    E = a(939747);
class c {
    constructor(t) {
        (this._client = t), (this._buckets = new Map()), (this._interval = setInterval(() => this.flush(), n.RF));
    }
    add(t, e, a, o = "none", c = {}, s = (0, r.ph)()) {
        let l = Math.floor(s),
            I = (0, E.s3)(e),
            R = (0, E.Bg)(c),
            u = (0, E.OC)(o),
            A = (0, E.Ic)(t, I, u, R),
            N = this._buckets.get(A),
            T = N && t === n.is ? N.metric.weight : 0;
        N
            ? (N.metric.add(a), N.timestamp < l && (N.timestamp = l))
            : ((N = {
                  metric: new i.ZN[t](a),
                  timestamp: l,
                  metricType: t,
                  name: I,
                  unit: u,
                  tags: R,
              }),
              this._buckets.set(A, N));
        let d = "string" == typeof a ? N.metric.weight - T : a;
        (0, _.yc)(t, I, d, u, c, A);
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
