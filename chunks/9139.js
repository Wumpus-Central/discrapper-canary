n.d(t, { Z: () => o });
var r = n(715870),
    i = n(424046),
    a = n(344368);
class o extends a.F {
    innerPatternString(e) {
        return `(зараз|минулого\\s*вечора|минулої\\s*ночі|наступної\\s*ночі|сьогодні\\s*вночі|цієї\\s*ночі|цього ранку|вранці|ранку|зранку|опівдні|ввечері|вечора|опівночі|вночі)`;
    }
    innerExtract(e, t) {
        let n = e.refDate,
            a = t[0].toLowerCase(),
            o = e.createParsingComponents();
        if ("зараз" === a) return r.zO(e.reference);
        if ("ввечері" === a || "вечора" === a) return r.DZ(e.reference);
        if (a.endsWith("вранці") || a.endsWith("ранку") || a.endsWith("зранку")) return r.ut(e.reference);
        if (a.endsWith("опівдні")) return r.D_(e.reference);
        if (a.match(/минулої\s*ночі/)) return r.f$(e.reference);
        if (a.match(/минулого\s*вечора/)) return r.o4(e.reference);
        if (a.match(/наступної\s*ночі/)) {
            let e = 22 > n.getHours() ? 1 : 2,
                t = new Date(n.getTime());
            t.setDate(t.getDate() + e), (0, i.cz)(o, t), o.imply("hour", 1);
        }
        return a.match(/цієї\s*ночі/) || a.endsWith("опівночі") || a.endsWith("вночі") ? r.jN(e.reference) : o;
    }
}
