n.d(t, {
    Ac: () => d,
    eN: () => f,
    z_: () => u,
});
var r = n(56636),
    i = n(114922),
    a = n(391898),
    s = n(90727),
    o = n(222367),
    l = n(734481),
    c = n(327854);
function u(e) {
    for (var t = [], n = Object.keys(e), i = 0, l = n; i < l.length; i++) {
        var c = l[i];
        (0, a.mK)(s.KB, c) || t.push(c), (0, o.$P)(e[c]) && !(0, o.vd)(e[c]) && t.push(c);
    }
    if (t.length) throw Error("Invalid options: " + t.join(", "));
    return (0, r.Cl)({}, e);
}
function d(e) {
    var t = (0, r.Cl)((0, r.Cl)({}, s.lp), u(e));
    if (((0, a.Wo)(t.byeaster) && (t.freq = s.p3.YEARLY), !((0, a.Wo)(t.freq) && s.p3.FREQUENCIES[t.freq])))
        throw Error("Invalid frequency: ".concat(t.freq, " ").concat(e.freq));
    if (
        (t.dtstart || (t.dtstart = new Date(new Date().setMilliseconds(0))),
        (0, a.Wo)(t.wkst) ? (0, a.Et)(t.wkst) || (t.wkst = t.wkst.weekday) : (t.wkst = s.p3.MO.weekday),
        (0, a.Wo)(t.bysetpos))
    ) {
        (0, a.Et)(t.bysetpos) && (t.bysetpos = [t.bysetpos]);
        for (var n = 0; n < t.bysetpos.length; n++) {
            var i = t.bysetpos[n];
            if (0 === i || !(i >= -366 && i <= 366))
                throw Error("bysetpos must be between 1 and 366, or between -366 and -1");
        }
    }
    if (
        !(
            t.byweekno ||
            (0, a.z2)(t.byweekno) ||
            (0, a.z2)(t.byyearday) ||
            t.bymonthday ||
            (0, a.z2)(t.bymonthday) ||
            (0, a.Wo)(t.byweekday) ||
            (0, a.Wo)(t.byeaster)
        )
    )
        switch (t.freq) {
            case s.p3.YEARLY:
                t.bymonth || (t.bymonth = t.dtstart.getUTCMonth() + 1), (t.bymonthday = t.dtstart.getUTCDate());
                break;
            case s.p3.MONTHLY:
                t.bymonthday = t.dtstart.getUTCDate();
                break;
            case s.p3.WEEKLY:
                t.byweekday = [(0, o.VJ)(t.dtstart)];
        }
    if (
        ((0, a.Wo)(t.bymonth) && !(0, a.cy)(t.bymonth) && (t.bymonth = [t.bymonth]),
        (0, a.Wo)(t.byyearday) && !(0, a.cy)(t.byyearday) && (0, a.Et)(t.byyearday) && (t.byyearday = [t.byyearday]),
        (0, a.Wo)(t.bymonthday))
    )
        if ((0, a.cy)(t.bymonthday)) {
            for (var c = [], d = [], n = 0; n < t.bymonthday.length; n++) {
                var i = t.bymonthday[n];
                i > 0 ? c.push(i) : i < 0 && d.push(i);
            }
            (t.bymonthday = c), (t.bynmonthday = d);
        } else
            t.bymonthday < 0
                ? ((t.bynmonthday = [t.bymonthday]), (t.bymonthday = []))
                : ((t.bynmonthday = []), (t.bymonthday = [t.bymonthday]));
    else (t.bymonthday = []), (t.bynmonthday = []);
    if (((0, a.Wo)(t.byweekno) && !(0, a.cy)(t.byweekno) && (t.byweekno = [t.byweekno]), (0, a.Wo)(t.byweekday)))
        if ((0, a.Et)(t.byweekday)) (t.byweekday = [t.byweekday]), (t.bynweekday = null);
        else if ((0, a.Mx)(t.byweekday)) (t.byweekday = [l.B.fromStr(t.byweekday).weekday]), (t.bynweekday = null);
        else if (t.byweekday instanceof l.B)
            !t.byweekday.n || t.freq > s.p3.MONTHLY
                ? ((t.byweekday = [t.byweekday.weekday]), (t.bynweekday = null))
                : ((t.bynweekday = [[t.byweekday.weekday, t.byweekday.n]]), (t.byweekday = null));
        else {
            for (var f = [], p = [], n = 0; n < t.byweekday.length; n++) {
                var _ = t.byweekday[n];
                if ((0, a.Et)(_)) {
                    f.push(_);
                    continue;
                }
                if ((0, a.Mx)(_)) {
                    f.push(l.B.fromStr(_).weekday);
                    continue;
                }
                !_.n || t.freq > s.p3.MONTHLY ? f.push(_.weekday) : p.push([_.weekday, _.n]);
            }
            (t.byweekday = (0, a.z2)(f) ? f : null), (t.bynweekday = (0, a.z2)(p) ? p : null);
        }
    else t.bynweekday = null;
    return (
        (0, a.Wo)(t.byhour)
            ? (0, a.Et)(t.byhour) && (t.byhour = [t.byhour])
            : (t.byhour = t.freq < s.p3.HOURLY ? [t.dtstart.getUTCHours()] : null),
        (0, a.Wo)(t.byminute)
            ? (0, a.Et)(t.byminute) && (t.byminute = [t.byminute])
            : (t.byminute = t.freq < s.p3.MINUTELY ? [t.dtstart.getUTCMinutes()] : null),
        (0, a.Wo)(t.bysecond)
            ? (0, a.Et)(t.bysecond) && (t.bysecond = [t.bysecond])
            : (t.bysecond = t.freq < s.p3.SECONDLY ? [t.dtstart.getUTCSeconds()] : null),
        { parsedOptions: t }
    );
}
function f(e) {
    var t = e.dtstart.getTime() % 1000;
    if (!(0, i.d)(e.freq)) return [];
    var n = [];
    return (
        e.byhour.forEach(function (r) {
            e.byminute.forEach(function (i) {
                e.bysecond.forEach(function (e) {
                    n.push(new c.g(r, i, e, t));
                });
            });
        }),
        n
    );
}
