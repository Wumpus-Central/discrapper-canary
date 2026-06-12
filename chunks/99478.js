t.d(a, { Ip: () => p, _l: () => y, gX: () => h, ng: () => c });
var n = t(440491),
    r = t(939546),
    i = t(928231),
    l = t(142922),
    o = t(376472),
    u = t(693770);
function s(e) {
    let a,
        t = "object" == typeof e[0] ? e.shift() : new (0, l.FG)();
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
        return (0, n.WQ)(this, e);
    }
    subtract(e) {
        return (0, n.Re)(this, e);
    }
    set(e) {
        return (0, n.hZ)(this, e);
    }
    cycle(e, a, t) {
        return (0, n.xy)(this, e, a, t);
    }
    toDate(e) {
        return (0, o.ay)(this, e);
    }
    toString() {
        return (0, i.$T)(this);
    }
    compare(e) {
        return (0, r.SE)(this, e);
    }
    constructor(...e) {
        (0, u._)(this, d, { writable: !0, value: void 0 });
        let [a, t, r, i, l] = s(e);
        (this.calendar = a), (this.era = t), (this.year = r), (this.month = i), (this.day = l), (0, n.AU)(this);
    }
}
var m = new WeakMap();
class h {
    copy() {
        return new h(this.hour, this.minute, this.second, this.millisecond);
    }
    add(e) {
        return (0, n.tY)(this, e);
    }
    subtract(e) {
        return (0, n.YP)(this, e);
    }
    set(e) {
        return (0, n.ib)(this, e);
    }
    cycle(e, a, t) {
        return (0, n.gt)(this, e, a, t);
    }
    toString() {
        return (0, i.ot)(this);
    }
    compare(e) {
        return (0, r.Nu)(this, e);
    }
    constructor(e = 0, a = 0, t = 0, r = 0) {
        (0, u._)(this, m, { writable: !0, value: void 0 }),
            (this.hour = e),
            (this.minute = a),
            (this.second = t),
            (this.millisecond = r),
            (0, n.Rb)(this);
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
        return (0, n.WQ)(this, e);
    }
    subtract(e) {
        return (0, n.Re)(this, e);
    }
    set(e) {
        return (0, n.hZ)((0, n.ib)(this, e), e);
    }
    cycle(e, a, t) {
        switch (e) {
            case "era":
            case "year":
            case "month":
            case "day":
                return (0, n.xy)(this, e, a, t);
            default:
                return (0, n.gt)(this, e, a, t);
        }
    }
    toDate(e, a) {
        return (0, o.ay)(this, e, a);
    }
    toString() {
        return (0, i.qk)(this);
    }
    compare(e) {
        let a = (0, r.SE)(this, e);
        return 0 === a ? (0, r.Nu)(this, (0, o.tR)(e)) : a;
    }
    constructor(...e) {
        (0, u._)(this, D, { writable: !0, value: void 0 });
        let [a, t, r, i, l] = s(e);
        (this.calendar = a),
            (this.era = t),
            (this.year = r),
            (this.month = i),
            (this.day = l),
            (this.hour = e.shift() || 0),
            (this.minute = e.shift() || 0),
            (this.second = e.shift() || 0),
            (this.millisecond = e.shift() || 0),
            (0, n.AU)(this);
    }
}
var g = new WeakMap();
class p {
    copy() {
        return this.era
            ? new p(
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
            : new p(
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
        return (0, n.E0)(this, e);
    }
    subtract(e) {
        return (0, n.d_)(this, e);
    }
    set(e, a) {
        return (0, n.D8)(this, e, a);
    }
    cycle(e, a, t) {
        return (0, n.XH)(this, e, a, t);
    }
    toDate() {
        return (0, o.cd)(this);
    }
    toString() {
        return (0, i.e6)(this);
    }
    toAbsoluteString() {
        return this.toDate().toISOString();
    }
    compare(e) {
        return this.toDate().getTime() - (0, o.uB)(e, this.timeZone).toDate().getTime();
    }
    constructor(...e) {
        (0, u._)(this, g, { writable: !0, value: void 0 });
        let [a, t, r, i, l] = s(e),
            o = e.shift(),
            d = e.shift();
        (this.calendar = a),
            (this.era = t),
            (this.year = r),
            (this.month = i),
            (this.day = l),
            (this.timeZone = o),
            (this.offset = d),
            (this.hour = e.shift() || 0),
            (this.minute = e.shift() || 0),
            (this.second = e.shift() || 0),
            (this.millisecond = e.shift() || 0),
            (0, n.AU)(this);
    }
}
