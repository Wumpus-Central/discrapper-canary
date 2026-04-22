"use strict";
n.d(t, { Ac: () => c, eN: () => _, z_: () => d });
var r = n(56636),
    i = n(114922),
    s = n(391898),
    a = n(90727),
    o = n(222367),
    l = n(734481),
    u = n(327854);
function d(e) {
    for (var t = [], n = Object.keys(e), i = 0; i < n.length; i++) {
        var l = n[i];
        (0, s.mK)(a.KB, l) || t.push(l), (0, o.$P)(e[l]) && !(0, o.vd)(e[l]) && t.push(l);
    }
    if (t.length) throw Error("Invalid options: " + t.join(", "));
    return (0, r.Cl)({}, e);
}
function c(e) {
    var t = (0, r.Cl)((0, r.Cl)({}, a.lp), d(e));
    if (((0, s.Wo)(t.byeaster) && (t.freq = a.p3.YEARLY), !((0, s.Wo)(t.freq) && a.p3.FREQUENCIES[t.freq])))
        throw Error("Invalid frequency: ".concat(t.freq, " ").concat(e.freq));
    if (
        (t.dtstart || (t.dtstart = new Date(new Date().setMilliseconds(0))),
        (0, s.Wo)(t.wkst) ? (0, s.Et)(t.wkst) || (t.wkst = t.wkst.weekday) : (t.wkst = a.p3.MO.weekday),
        (0, s.Wo)(t.bysetpos))
    ) {
        (0, s.Et)(t.bysetpos) && (t.bysetpos = [t.bysetpos]);
        for (var n = 0; n < t.bysetpos.length; n++) {
            var i = t.bysetpos[n];
            if (0 === i || !(i >= -366 && i <= 366))
                throw Error("bysetpos must be between 1 and 366, or between -366 and -1");
        }
    }
    if (
        !(
            t.byweekno ||
            (0, s.z2)(t.byweekno) ||
            (0, s.z2)(t.byyearday) ||
            t.bymonthday ||
            (0, s.z2)(t.bymonthday) ||
            (0, s.Wo)(t.byweekday) ||
            (0, s.Wo)(t.byeaster)
        )
    )
        switch (t.freq) {
            case a.p3.YEARLY:
                t.bymonth || (t.bymonth = t.dtstart.getUTCMonth() + 1), (t.bymonthday = t.dtstart.getUTCDate());
                break;
            case a.p3.MONTHLY:
                t.bymonthday = t.dtstart.getUTCDate();
                break;
            case a.p3.WEEKLY:
                t.byweekday = [(0, o.VJ)(t.dtstart)];
        }
    if (
        ((0, s.Wo)(t.bymonth) && !(0, s.cy)(t.bymonth) && (t.bymonth = [t.bymonth]),
        (0, s.Wo)(t.byyearday) && !(0, s.cy)(t.byyearday) && (0, s.Et)(t.byyearday) && (t.byyearday = [t.byyearday]),
        (0, s.Wo)(t.bymonthday))
    )
        if ((0, s.cy)(t.bymonthday)) {
            for (var u = [], c = [], n = 0; n < t.bymonthday.length; n++) {
                var i = t.bymonthday[n];
                i > 0 ? u.push(i) : i < 0 && c.push(i);
            }
            (t.bymonthday = u), (t.bynmonthday = c);
        } else
            t.bymonthday < 0
                ? ((t.bynmonthday = [t.bymonthday]), (t.bymonthday = []))
                : ((t.bynmonthday = []), (t.bymonthday = [t.bymonthday]));
    else (t.bymonthday = []), (t.bynmonthday = []);
    if (((0, s.Wo)(t.byweekno) && !(0, s.cy)(t.byweekno) && (t.byweekno = [t.byweekno]), (0, s.Wo)(t.byweekday)))
        if ((0, s.Et)(t.byweekday)) (t.byweekday = [t.byweekday]), (t.bynweekday = null);
        else if ((0, s.Mx)(t.byweekday)) (t.byweekday = [l.B.fromStr(t.byweekday).weekday]), (t.bynweekday = null);
        else if (t.byweekday instanceof l.B)
            !t.byweekday.n || t.freq > a.p3.MONTHLY
                ? ((t.byweekday = [t.byweekday.weekday]), (t.bynweekday = null))
                : ((t.bynweekday = [[t.byweekday.weekday, t.byweekday.n]]), (t.byweekday = null));
        else {
            for (var _ = [], f = [], n = 0; n < t.byweekday.length; n++) {
                var E = t.byweekday[n];
                if ((0, s.Et)(E)) {
                    _.push(E);
                    continue;
                }
                if ((0, s.Mx)(E)) {
                    _.push(l.B.fromStr(E).weekday);
                    continue;
                }
                !E.n || t.freq > a.p3.MONTHLY ? _.push(E.weekday) : f.push([E.weekday, E.n]);
            }
            (t.byweekday = (0, s.z2)(_) ? _ : null), (t.bynweekday = (0, s.z2)(f) ? f : null);
        }
    else t.bynweekday = null;
    return (
        (0, s.Wo)(t.byhour)
            ? (0, s.Et)(t.byhour) && (t.byhour = [t.byhour])
            : (t.byhour = t.freq < a.p3.HOURLY ? [t.dtstart.getUTCHours()] : null),
        (0, s.Wo)(t.byminute)
            ? (0, s.Et)(t.byminute) && (t.byminute = [t.byminute])
            : (t.byminute = t.freq < a.p3.MINUTELY ? [t.dtstart.getUTCMinutes()] : null),
        (0, s.Wo)(t.bysecond)
            ? (0, s.Et)(t.bysecond) && (t.bysecond = [t.bysecond])
            : (t.bysecond = t.freq < a.p3.SECONDLY ? [t.dtstart.getUTCSeconds()] : null),
        { parsedOptions: t }
    );
}
function _(e) {
    var t = e.dtstart.getTime() % 1e3;
    if (!(0, i.d)(e.freq)) return [];
    var n = [];
    return (
        e.byhour.forEach(function (r) {
            e.byminute.forEach(function (i) {
                e.bysecond.forEach(function (e) {
                    n.push(new u.g(r, i, e, t));
                });
            });
        }),
        n
    );
}
