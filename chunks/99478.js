"use strict";
n.d(t, { Ip: () => g, _l: () => h, gX: () => f, ng: () => d });
var r = n(440491),
    i = n(352404),
    a = n(928231),
    s = n(142922),
    o = n(376472),
    l = n(170372);
function u(e) {
    let t,
        n = "object" == typeof e[0] ? e.shift() : new (0, s.FG)();
    if ("string" == typeof e[0]) t = e.shift();
    else {
        let e = n.getEras();
        t = e[e.length - 1];
    }
    return [n, t, e.shift(), e.shift(), e.shift()];
}
var c = new WeakMap();
class d {
    copy() {
        return this.era
            ? new d(this.calendar, this.era, this.year, this.month, this.day)
            : new d(this.calendar, this.year, this.month, this.day);
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
    cycle(e, t, n) {
        return (0, r.xy)(this, e, t, n);
    }
    toDate(e) {
        return (0, o.ay)(this, e);
    }
    toString() {
        return (0, a.$T)(this);
    }
    compare(e) {
        return (0, i.SE)(this, e);
    }
    constructor(...e) {
        (0, l._)(this, c, { writable: !0, value: void 0 });
        let [t, n, i, a, s] = u(e);
        (this.calendar = t), (this.era = n), (this.year = i), (this.month = a), (this.day = s), (0, r.AU)(this);
    }
}
var _ = new WeakMap();
class f {
    copy() {
        return new f(this.hour, this.minute, this.second, this.millisecond);
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
    cycle(e, t, n) {
        return (0, r.gt)(this, e, t, n);
    }
    toString() {
        return (0, a.ot)(this);
    }
    compare(e) {
        return (0, i.Nu)(this, e);
    }
    constructor(e = 0, t = 0, n = 0, i = 0) {
        (0, l._)(this, _, { writable: !0, value: void 0 }),
            (this.hour = e),
            (this.minute = t),
            (this.second = n),
            (this.millisecond = i),
            (0, r.Rb)(this);
    }
}
var p = new WeakMap();
class h {
    copy() {
        return this.era
            ? new h(
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
            : new h(
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
    cycle(e, t, n) {
        switch (e) {
            case "era":
            case "year":
            case "month":
            case "day":
                return (0, r.xy)(this, e, t, n);
            default:
                return (0, r.gt)(this, e, t, n);
        }
    }
    toDate(e, t) {
        return (0, o.ay)(this, e, t);
    }
    toString() {
        return (0, a.qk)(this);
    }
    compare(e) {
        let t = (0, i.SE)(this, e);
        return 0 === t ? (0, i.Nu)(this, (0, o.tR)(e)) : t;
    }
    constructor(...e) {
        (0, l._)(this, p, { writable: !0, value: void 0 });
        let [t, n, i, a, s] = u(e);
        (this.calendar = t),
            (this.era = n),
            (this.year = i),
            (this.month = a),
            (this.day = s),
            (this.hour = e.shift() || 0),
            (this.minute = e.shift() || 0),
            (this.second = e.shift() || 0),
            (this.millisecond = e.shift() || 0),
            (0, r.AU)(this);
    }
}
var m = new WeakMap();
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
    set(e, t) {
        return (0, r.D8)(this, e, t);
    }
    cycle(e, t, n) {
        return (0, r.XH)(this, e, t, n);
    }
    toDate() {
        return (0, o.cd)(this);
    }
    toString() {
        return (0, a.e6)(this);
    }
    toAbsoluteString() {
        return this.toDate().toISOString();
    }
    compare(e) {
        return this.toDate().getTime() - (0, o.uB)(e, this.timeZone).toDate().getTime();
    }
    constructor(...e) {
        (0, l._)(this, m, { writable: !0, value: void 0 });
        let [t, n, i, a, s] = u(e),
            o = e.shift(),
            c = e.shift();
        (this.calendar = t),
            (this.era = n),
            (this.year = i),
            (this.month = a),
            (this.day = s),
            (this.timeZone = o),
            (this.offset = c),
            (this.hour = e.shift() || 0),
            (this.minute = e.shift() || 0),
            (this.second = e.shift() || 0),
            (this.millisecond = e.shift() || 0),
            (0, r.AU)(this);
    }
}
