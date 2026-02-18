t.d(a, { Ip: () => g, _l: () => y, gX: () => h, ng: () => c });
var r = t(440491),
    n = t(352404),
    i = t(928231),
    o = t(142922),
    u = t(376472),
    l = t(170372);
function s(e) {
    let a,
        t = "object" == typeof e[0] ? e.shift() : new (0, o.FG)();
    if ("string" == typeof e[0]) a = e.shift();
    else {
        let e = t.getEras();
        a = e[e.length - 1];
    }
    return [t, a, e.shift(), e.shift(), e.shift()];
}
var d = new WeakMap();
class c {
    copy() {
        return this.era
            ? new c(this.calendar, this.era, this.year, this.month, this.day)
            : new c(this.calendar, this.year, this.month, this.day);
    }
    add(e) {
        return (0, r.WQ)(this, e);
    }
    subtract(e) {
        return (0, r.Re)(this, e);
    }
    set(e) {
        return (0, r.hZ)(this, e);
    }
    cycle(e, a, t) {
        return (0, r.xy)(this, e, a, t);
    }
    toDate(e) {
        return (0, u.ay)(this, e);
    }
    toString() {
        return (0, i.$T)(this);
    }
    compare(e) {
        return (0, n.SE)(this, e);
    }
    constructor(...e) {
        (0, l._)(this, d, { writable: !0, value: void 0 });
        let [a, t, n, i, o] = s(e);
        (this.calendar = a), (this.era = t), (this.year = n), (this.month = i), (this.day = o), (0, r.AU)(this);
    }
}
var m = new WeakMap();
class h {
    copy() {
        return new h(this.hour, this.minute, this.second, this.millisecond);
    }
    add(e) {
        return (0, r.tY)(this, e);
    }
    subtract(e) {
        return (0, r.YP)(this, e);
    }
    set(e) {
        return (0, r.ib)(this, e);
    }
    cycle(e, a, t) {
        return (0, r.gt)(this, e, a, t);
    }
    toString() {
        return (0, i.ot)(this);
    }
    compare(e) {
        return (0, n.Nu)(this, e);
    }
    constructor(e = 0, a = 0, t = 0, n = 0) {
        (0, l._)(this, m, { writable: !0, value: void 0 }),
            (this.hour = e),
            (this.minute = a),
            (this.second = t),
            (this.millisecond = n),
            (0, r.Rb)(this);
    }
}
var D = new WeakMap();
class y {
    copy() {
        return this.era
            ? new y(
                  this.calendar,
                  this.era,
                  this.year,
                  this.month,
                  this.day,
                  this.hour,
                  this.minute,
                  this.second,
                  this.millisecond,
              )
            : new y(
                  this.calendar,
                  this.year,
                  this.month,
                  this.day,
                  this.hour,
                  this.minute,
                  this.second,
                  this.millisecond,
              );
    }
    add(e) {
        return (0, r.WQ)(this, e);
    }
    subtract(e) {
        return (0, r.Re)(this, e);
    }
    set(e) {
        return (0, r.hZ)((0, r.ib)(this, e), e);
    }
    cycle(e, a, t) {
        switch (e) {
            case "era":
            case "year":
            case "month":
            case "day":
                return (0, r.xy)(this, e, a, t);
            default:
                return (0, r.gt)(this, e, a, t);
        }
    }
    toDate(e, a) {
        return (0, u.ay)(this, e, a);
    }
    toString() {
        return (0, i.qk)(this);
    }
    compare(e) {
        let a = (0, n.SE)(this, e);
        return 0 === a ? (0, n.Nu)(this, (0, u.tR)(e)) : a;
    }
    constructor(...e) {
        (0, l._)(this, D, { writable: !0, value: void 0 });
        let [a, t, n, i, o] = s(e);
        (this.calendar = a),
            (this.era = t),
            (this.year = n),
            (this.month = i),
            (this.day = o),
            (this.hour = e.shift() || 0),
            (this.minute = e.shift() || 0),
            (this.second = e.shift() || 0),
            (this.millisecond = e.shift() || 0),
            (0, r.AU)(this);
    }
}
var p = new WeakMap();
class g {
    copy() {
        return this.era
            ? new g(
                  this.calendar,
                  this.era,
                  this.year,
                  this.month,
                  this.day,
                  this.timeZone,
                  this.offset,
                  this.hour,
                  this.minute,
                  this.second,
                  this.millisecond,
              )
            : new g(
                  this.calendar,
                  this.year,
                  this.month,
                  this.day,
                  this.timeZone,
                  this.offset,
                  this.hour,
                  this.minute,
                  this.second,
                  this.millisecond,
              );
    }
    add(e) {
        return (0, r.E0)(this, e);
    }
    subtract(e) {
        return (0, r.d_)(this, e);
    }
    set(e, a) {
        return (0, r.D8)(this, e, a);
    }
    cycle(e, a, t) {
        return (0, r.XH)(this, e, a, t);
    }
    toDate() {
        return (0, u.cd)(this);
    }
    toString() {
        return (0, i.e6)(this);
    }
    toAbsoluteString() {
        return this.toDate().toISOString();
    }
    compare(e) {
        return this.toDate().getTime() - (0, u.uB)(e, this.timeZone).toDate().getTime();
    }
    constructor(...e) {
        (0, l._)(this, p, { writable: !0, value: void 0 });
        let [a, t, n, i, o] = s(e),
            u = e.shift(),
            d = e.shift();
        (this.calendar = a),
            (this.era = t),
            (this.year = n),
            (this.month = i),
            (this.day = o),
            (this.timeZone = u),
            (this.offset = d),
            (this.hour = e.shift() || 0),
            (this.minute = e.shift() || 0),
            (this.second = e.shift() || 0),
            (this.millisecond = e.shift() || 0),
            (0, r.AU)(this);
    }
}
