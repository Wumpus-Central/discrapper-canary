a.d(t, { A: () => r });
var n = {
    lessThanXSeconds: { one: "mindre enn ett sekund", other: "mindre enn {{count}} sekunder" },
    xSeconds: { one: "ett sekund", other: "{{count}} sekunder" },
    halfAMinute: "et halvt minutt",
    lessThanXMinutes: { one: "mindre enn ett minutt", other: "mindre enn {{count}} minutter" },
    xMinutes: { one: "ett minutt", other: "{{count}} minutter" },
    aboutXHours: { one: "omtrent en time", other: "omtrent {{count}} timer" },
    xHours: { one: "en time", other: "{{count}} timer" },
    xDays: { one: "en dag", other: "{{count}} dager" },
    aboutXWeeks: { one: "omtrent en uke", other: "omtrent {{count}} uker" },
    xWeeks: { one: "en uke", other: "{{count}} uker" },
    aboutXMonths: { one: "omtrent en m\xe5ned", other: "omtrent {{count}} m\xe5neder" },
    xMonths: { one: "en m\xe5ned", other: "{{count}} m\xe5neder" },
    aboutXYears: { one: "omtrent ett \xe5r", other: "omtrent {{count}} \xe5r" },
    xYears: { one: "ett \xe5r", other: "{{count}} \xe5r" },
    overXYears: { one: "over ett \xe5r", other: "over {{count}} \xe5r" },
    almostXYears: { one: "nesten ett \xe5r", other: "nesten {{count}} \xe5r" },
};
let r = function (e, t, a) {
    var r,
        i = n[e];
    if (
        ((r = "string" == typeof i ? i : 1 === t ? i.one : i.other.replace("{{count}}", String(t))),
        null != a && a.addSuffix)
    )
        if (a.comparison && a.comparison > 0) return "om " + r;
        else return r + " siden";
    return r;
};
