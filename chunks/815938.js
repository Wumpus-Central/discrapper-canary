i.d(a, { A: () => n });
var t = {
    lessThanXSeconds: { one: "meno di un secondo", other: "meno di {{count}} secondi" },
    xSeconds: { one: "un secondo", other: "{{count}} secondi" },
    halfAMinute: "alcuni secondi",
    lessThanXMinutes: { one: "meno di un minuto", other: "meno di {{count}} minuti" },
    xMinutes: { one: "un minuto", other: "{{count}} minuti" },
    aboutXHours: { one: "circa un'ora", other: "circa {{count}} ore" },
    xHours: { one: "un'ora", other: "{{count}} ore" },
    xDays: { one: "un giorno", other: "{{count}} giorni" },
    aboutXWeeks: { one: "circa una settimana", other: "circa {{count}} settimane" },
    xWeeks: { one: "una settimana", other: "{{count}} settimane" },
    aboutXMonths: { one: "circa un mese", other: "circa {{count}} mesi" },
    xMonths: { one: "un mese", other: "{{count}} mesi" },
    aboutXYears: { one: "circa un anno", other: "circa {{count}} anni" },
    xYears: { one: "un anno", other: "{{count}} anni" },
    overXYears: { one: "pi\xf9 di un anno", other: "pi\xf9 di {{count}} anni" },
    almostXYears: { one: "quasi un anno", other: "quasi {{count}} anni" },
};
let n = function (e, a, i) {
    var n,
        o = t[e];
    if (
        ((n = "string" == typeof o ? o : 1 === a ? o.one : o.other.replace("{{count}}", a.toString())),
        null != i && i.addSuffix)
    )
        if (i.comparison && i.comparison > 0) return "tra " + n;
        else return n + " fa";
    return n;
};
