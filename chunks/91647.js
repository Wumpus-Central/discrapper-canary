_.d(e, { P: () => c });
var a = _(101284),
    r = _(696486),
    n = _(147498),
    o = _(218234),
    E = _(823878),
    i = _(939747);
class c {
    constructor(t) {
        (this._client = t), (this._buckets = new Map()), (this._interval = setInterval(() => this.flush(), n.RF));
    }
    add(t, e, _, o = "none", c = {}, s = (0, a.ph)()) {
        let l = Math.floor(s),
            I = (0, i.s3)(e),
            R = (0, i.Bg)(c),
            N = (0, i.OC)(o),
            A = (0, i.Ic)(t, I, N, R),
            u = this._buckets.get(A),
            T = u && t === n.is ? u.metric.weight : 0;
        u
            ? (u.metric.add(_), u.timestamp < l && (u.timestamp = l))
            : ((u = {
                  metric: new E.ZN[t](_),
                  timestamp: l,
                  metricType: t,
                  name: I,
                  unit: N,
                  tags: R,
              }),
              this._buckets.set(A, u));
        let d = "string" == typeof _ ? u.metric.weight - T : _;
        (0, r.yc)(t, I, d, N, c, A);
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
