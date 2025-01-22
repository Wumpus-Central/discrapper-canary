r.d(n, {
    AQ: function () {
        return E;
    },
    aw: function () {
        return f;
    },
    oz: function () {
        return m;
    },
    qp: function () {
        return h;
    }
});
var i = r(570899),
    a = r(328199),
    o = r(397319),
    s = r(165352),
    l = r(697),
    u = r(410914);
function c(e) {
    let n,
        r = 'object' == typeof e[0] ? e.shift() : new s.IQ();
    if ('string' == typeof e[0]) n = e.shift();
    else {
        let e = r.getEras();
        n = e[e.length - 1];
    }
    return [r, n, e.shift(), e.shift(), e.shift()];
}
var d = new WeakMap();
class f {
    copy() {
        return this.era ? new f(this.calendar, this.era, this.year, this.month, this.day) : new f(this.calendar, this.year, this.month, this.day);
    }
    add(e) {
        return (0, i.IH)(this, e);
    }
    subtract(e) {
        return (0, i.$X)(this, e);
    }
    set(e) {
        return (0, i.t8)(this, e);
    }
    cycle(e, n, r) {
        return (0, i.GK)(this, e, n, r);
    }
    toDate(e) {
        return (0, l.ZU)(this, e);
    }
    toString() {
        return (0, o.UW)(this);
    }
    compare(e) {
        return (0, a.rm)(this, e);
    }
    constructor(...e) {
        (0, u._)(this, d, {
            writable: !0,
            value: void 0
        });
        let [n, r, a, o, s] = c(e);
        (this.calendar = n), (this.era = r), (this.year = a), (this.month = o), (this.day = s), (0, i.jH)(this);
    }
}
var p = new WeakMap();
class h {
    copy() {
        return new h(this.hour, this.minute, this.second, this.millisecond);
    }
    add(e) {
        return (0, i.yG)(this, e);
    }
    subtract(e) {
        return (0, i.U2)(this, e);
    }
    set(e) {
        return (0, i.q_)(this, e);
    }
    cycle(e, n, r) {
        return (0, i.xC)(this, e, n, r);
    }
    toString() {
        return (0, o.to)(this);
    }
    compare(e) {
        return (0, a.Xi)(this, e);
    }
    constructor(e = 0, n = 0, r = 0, a = 0) {
        (0, u._)(this, p, {
            writable: !0,
            value: void 0
        }),
            (this.hour = e),
            (this.minute = n),
            (this.second = r),
            (this.millisecond = a),
            (0, i.dW)(this);
    }
}
var _ = new WeakMap();
class m {
    copy() {
        return this.era ? new m(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new m(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
    }
    add(e) {
        return (0, i.IH)(this, e);
    }
    subtract(e) {
        return (0, i.$X)(this, e);
    }
    set(e) {
        return (0, i.t8)((0, i.q_)(this, e), e);
    }
    cycle(e, n, r) {
        switch (e) {
            case 'era':
            case 'year':
            case 'month':
            case 'day':
                return (0, i.GK)(this, e, n, r);
            default:
                return (0, i.xC)(this, e, n, r);
        }
    }
    toDate(e, n) {
        return (0, l.ZU)(this, e, n);
    }
    toString() {
        return (0, o.LM)(this);
    }
    compare(e) {
        let n = (0, a.rm)(this, e);
        return 0 === n ? (0, a.Xi)(this, (0, l.IO)(e)) : n;
    }
    constructor(...e) {
        (0, u._)(this, _, {
            writable: !0,
            value: void 0
        });
        let [n, r, a, o, s] = c(e);
        (this.calendar = n), (this.era = r), (this.year = a), (this.month = o), (this.day = s), (this.hour = e.shift() || 0), (this.minute = e.shift() || 0), (this.second = e.shift() || 0), (this.millisecond = e.shift() || 0), (0, i.jH)(this);
    }
}
var g = new WeakMap();
class E {
    copy() {
        return this.era ? new E(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new E(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond);
    }
    add(e) {
        return (0, i.cW)(this, e);
    }
    subtract(e) {
        return (0, i.Co)(this, e);
    }
    set(e, n) {
        return (0, i.wC)(this, e, n);
    }
    cycle(e, n, r) {
        return (0, i.qr)(this, e, n, r);
    }
    toDate() {
        return (0, l.fk)(this);
    }
    toString() {
        return (0, o.Rf)(this);
    }
    toAbsoluteString() {
        return this.toDate().toISOString();
    }
    compare(e) {
        return this.toDate().getTime() - (0, l.fW)(e, this.timeZone).toDate().getTime();
    }
    constructor(...e) {
        (0, u._)(this, g, {
            writable: !0,
            value: void 0
        });
        let [n, r, a, o, s] = c(e),
            l = e.shift(),
            d = e.shift();
        (this.calendar = n), (this.era = r), (this.year = a), (this.month = o), (this.day = s), (this.timeZone = l), (this.offset = d), (this.hour = e.shift() || 0), (this.minute = e.shift() || 0), (this.second = e.shift() || 0), (this.millisecond = e.shift() || 0), (0, i.jH)(this);
    }
}
