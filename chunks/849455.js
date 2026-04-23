r.r(t),
    r.d(t, {
        parseDate: () => ee,
        casual: () => _,
        ReferenceWithTimezone: () => C.b5,
        ParsingResult: () => C.s4,
        createCasualConfiguration: () => et,
        Weekday: () => A.Bw,
        strict: () => X,
        Chrono: () => G.u,
        Meridiem: () => A.FF,
        ParsingComponents: () => C.BP,
        createConfiguration: () => er,
        parse: () => Q,
    });
var n = r(476858),
    s = r(364242);
let a = "([^\\p{L}\\p{N}_]|^)",
    i = "(?=[^\\p{L}\\p{N}_]|$)",
    o = {
        воскресенье: 0,
        воскресенья: 0,
        вск: 0,
        "вск.": 0,
        понедельник: 1,
        понедельника: 1,
        пн: 1,
        "пн.": 1,
        вторник: 2,
        вторника: 2,
        вт: 2,
        "вт.": 2,
        среда: 3,
        среды: 3,
        среду: 3,
        ср: 3,
        "ср.": 3,
        четверг: 4,
        четверга: 4,
        чт: 4,
        "чт.": 4,
        пятница: 5,
        пятницу: 5,
        пятницы: 5,
        пт: 5,
        "пт.": 5,
        суббота: 6,
        субботу: 6,
        субботы: 6,
        сб: 6,
        "сб.": 6,
    },
    l = {
        январь: 1,
        января: 1,
        январе: 1,
        февраль: 2,
        февраля: 2,
        феврале: 2,
        март: 3,
        марта: 3,
        марте: 3,
        апрель: 4,
        апреля: 4,
        апреле: 4,
        май: 5,
        мая: 5,
        мае: 5,
        июнь: 6,
        июня: 6,
        июне: 6,
        июль: 7,
        июля: 7,
        июле: 7,
        август: 8,
        августа: 8,
        августе: 8,
        сентябрь: 9,
        сентября: 9,
        сентябре: 9,
        октябрь: 10,
        октября: 10,
        октябре: 10,
        ноябрь: 11,
        ноября: 11,
        ноябре: 11,
        декабрь: 12,
        декабря: 12,
        декабре: 12,
    },
    u = {
        ...l,
        янв: 1,
        "янв.": 1,
        фев: 2,
        "фев.": 2,
        мар: 3,
        "мар.": 3,
        апр: 4,
        "апр.": 4,
        авг: 8,
        "авг.": 8,
        сен: 9,
        "сен.": 9,
        окт: 10,
        "окт.": 10,
        ноя: 11,
        "ноя.": 11,
        дек: 12,
        "дек.": 12,
    },
    m = {
        один: 1,
        одна: 1,
        одной: 1,
        одну: 1,
        две: 2,
        два: 2,
        двух: 2,
        три: 3,
        трех: 3,
        трёх: 3,
        четыре: 4,
        четырех: 4,
        четырёх: 4,
        пять: 5,
        пяти: 5,
        шесть: 6,
        шести: 6,
        семь: 7,
        семи: 7,
        восемь: 8,
        восьми: 8,
        девять: 9,
        девяти: 9,
        десять: 10,
        десяти: 10,
        одиннадцать: 11,
        одиннадцати: 11,
        двенадцать: 12,
        двенадцати: 12,
    },
    d = {
        первое: 1,
        первого: 1,
        второе: 2,
        второго: 2,
        третье: 3,
        третьего: 3,
        четвертое: 4,
        четвертого: 4,
        пятое: 5,
        пятого: 5,
        шестое: 6,
        шестого: 6,
        седьмое: 7,
        седьмого: 7,
        восьмое: 8,
        восьмого: 8,
        девятое: 9,
        девятого: 9,
        десятое: 10,
        десятого: 10,
        одиннадцатое: 11,
        одиннадцатого: 11,
        двенадцатое: 12,
        двенадцатого: 12,
        тринадцатое: 13,
        тринадцатого: 13,
        четырнадцатое: 14,
        четырнадцатого: 14,
        пятнадцатое: 15,
        пятнадцатого: 15,
        шестнадцатое: 16,
        шестнадцатого: 16,
        семнадцатое: 17,
        семнадцатого: 17,
        восемнадцатое: 18,
        восемнадцатого: 18,
        девятнадцатое: 19,
        девятнадцатого: 19,
        двадцатое: 20,
        двадцатого: 20,
        "двадцать первое": 21,
        "двадцать первого": 21,
        "двадцать второе": 22,
        "двадцать второго": 22,
        "двадцать третье": 23,
        "двадцать третьего": 23,
        "двадцать четвертое": 24,
        "двадцать четвертого": 24,
        "двадцать пятое": 25,
        "двадцать пятого": 25,
        "двадцать шестое": 26,
        "двадцать шестого": 26,
        "двадцать седьмое": 27,
        "двадцать седьмого": 27,
        "двадцать восьмое": 28,
        "двадцать восьмого": 28,
        "двадцать девятое": 29,
        "двадцать девятого": 29,
        тридцатое: 30,
        тридцатого: 30,
        "тридцать первое": 31,
        "тридцать первого": 31,
    },
    c = {
        сек: "second",
        секунда: "second",
        секунд: "second",
        секунды: "second",
        секунду: "second",
        секундочка: "second",
        секундочки: "second",
        секундочек: "second",
        секундочку: "second",
        мин: "minute",
        минута: "minute",
        минут: "minute",
        минуты: "minute",
        минуту: "minute",
        минуток: "minute",
        минутки: "minute",
        минутку: "minute",
        минуточек: "minute",
        минуточки: "minute",
        минуточку: "minute",
        час: "hour",
        часов: "hour",
        часа: "hour",
        часу: "hour",
        часиков: "hour",
        часика: "hour",
        часике: "hour",
        часик: "hour",
        день: "day",
        дня: "day",
        дней: "day",
        суток: "day",
        сутки: "day",
        неделя: "week",
        неделе: "week",
        недели: "week",
        неделю: "week",
        недель: "week",
        недельке: "week",
        недельки: "week",
        неделек: "week",
        месяц: "month",
        месяце: "month",
        месяцев: "month",
        месяца: "month",
        квартал: "quarter",
        квартале: "quarter",
        кварталов: "quarter",
        год: "year",
        года: "year",
        году: "year",
        годов: "year",
        лет: "year",
        годик: "year",
        годика: "year",
        годиков: "year",
    },
    g = `(?:${(0, n.uJ)(m)}|[0-9]+|[0-9]+\\.[0-9]+|пол|несколько|пар(?:ы|у)|\\s{0,3})`,
    h = `(?:${(0, n.uJ)(d)}|[0-9]{1,2}(?:го|ого|е|ое)?)`;
function f(e) {
    let t = e.toLowerCase();
    return void 0 !== d[t] ? d[t] : parseInt(t);
}
let p = "(?:\\s+(?:году|года|год|г|г.))?",
    y = `(?:[1-9][0-9]{0,3}${p}\\s*(?:н.э.|до н.э.|н. э.|до н. э.)|[1-2][0-9]{3}${p}|[5-9][0-9]${p})`;
function x(e) {
    if ((/(год|года|г|г.)/i.test(e) && (e = e.replace(/(год|года|г|г.)/i, "")), /(до н.э.|до н. э.)/i.test(e)))
        return -parseInt((e = e.replace(/(до н.э.|до н. э.)/i, "")));
    if (/(н. э.|н.э.)/i.test(e)) return parseInt((e = e.replace(/(н. э.|н.э.)/i, "")));
    let t = parseInt(e);
    return (0, s.D)(t);
}
let w = `(${g})\\s{0,3}(${(0, n.uJ)(c)})`,
    D = RegExp(w, "i"),
    P = (0, n.mb)("(?:(?:около|примерно)\\s{0,3})?", w);
function F(e) {
    let t = {},
        r = e,
        n = D.exec(r);
    for (; n; )
        (function (e, t) {
            let r = (function (e) {
                let t = e.toLowerCase();
                return void 0 !== m[t]
                    ? m[t]
                    : t.match(/несколько/)
                      ? 3
                      : t.match(/пол/)
                        ? 0.5
                        : t.match(/пар/)
                          ? 2
                          : "" === t
                            ? 1
                            : parseFloat(t);
            })(t[1]);
            e[c[t[2].toLowerCase()]] = r;
        })(t, n),
            (r = r.substring(n[0].length).trim()),
            (n = D.exec(r));
    return t;
}
var C = r(374372),
    T = r(355418);
let v = `(?:(?:около|примерно)\\s*(?:~\\s*)?)?(${P})${i}`;
class M extends T.c {
    patternLeftBoundary() {
        return a;
    }
    innerPattern(e) {
        return e.option.forwardDate ? RegExp(v, "iu") : RegExp(`(?:в течение|в течении)\\s*${v}`, "iu");
    }
    innerExtract(e, t) {
        let r = F(t[1]);
        return C.BP.createRelativeFromReference(e.reference, r);
    }
}
class $ extends T.c {
    patternLeftBoundary() {
        return a;
    }
    innerPattern(e) {
        return RegExp(this.innerPatternString(e), "iu");
    }
    innerPatternHasChange(e, t) {
        return !1;
    }
}
class R extends $ {
    innerPattern(e) {
        return RegExp(`${this.innerPatternString(e)}${i}`, "iu");
    }
}
class E extends R {
    innerPatternString(e) {
        return `(?:с)?\\s*(${h})(?:\\s{0,3}(?:по|-|–|до)?\\s{0,3}(${h}))?(?:-|\\/|\\s{0,3}(?:of)?\\s{0,3})(${(0, n.uJ)(u)})(?:(?:-|\\/|,?\\s{0,3})(${y}(?![^\\s]\\d)))?`;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = u[t[3].toLowerCase()],
            a = f(t[1]);
        if (a > 31) return (t.index = t.index + t[1].length), null;
        if ((r.start.assign("month", n), r.start.assign("day", a), t[4])) {
            let e = x(t[4]);
            r.start.assign("year", e);
        } else {
            let t = (0, s.Y)(e.refDate, a, n);
            r.start.imply("year", t);
        }
        if (t[2]) {
            let e = f(t[2]);
            (r.end = r.start.clone()), r.end.assign("day", e);
        }
        return r;
    }
}
class b extends $ {
    innerPatternString(e) {
        return `((?:в)\\s*)?(${(0, n.uJ)(u)})\\s*(?:[,-]?\\s*(${y})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`;
    }
    innerExtract(e, t) {
        let r = t[2].toLowerCase();
        if (t[0].length <= 3 && !l[r]) return null;
        let n = e.createParsingResult(t.index, t.index + t[0].length);
        n.start.imply("day", 1);
        let a = u[r];
        if ((n.start.assign("month", a), t[3])) {
            let e = x(t[3]);
            n.start.assign("year", e);
        } else {
            let t = (0, s.Y)(e.refDate, 1, a);
            n.start.imply("year", t);
        }
        return n;
    }
}
var A = r(322811),
    k = r(985971);
class j extends k.B {
    constructor(e) {
        super(e);
    }
    patternFlags() {
        return "iu";
    }
    primaryPatternLeftBoundary() {
        return "(^|\\s|T|(?:[^\\p{L}\\p{N}_]))";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|до|и|по|\\?)\\s*";
    }
    primaryPrefix() {
        return "(?:(?:в|с)\\s*)??";
    }
    primarySuffix() {
        return `(?:\\s*(?:утра|вечера|после полудня))?(?!\\/)${i}`;
    }
    extractPrimaryTimeComponents(e, t) {
        let r = super.extractPrimaryTimeComponents(e, t);
        if (r) {
            if (t[0].endsWith("вечера")) {
                let e = r.get("hour");
                e >= 6 && e < 12
                    ? (r.assign("hour", r.get("hour") + 12), r.assign("meridiem", A.FF.PM))
                    : e < 6 && r.assign("meridiem", A.FF.AM);
            }
            if (t[0].endsWith("после полудня")) {
                r.assign("meridiem", A.FF.PM);
                let e = r.get("hour");
                e >= 0 && e <= 6 && r.assign("hour", r.get("hour") + 12);
            }
            t[0].endsWith("утра") &&
                (r.assign("meridiem", A.FF.AM), 12 > r.get("hour") && r.assign("hour", r.get("hour")));
        }
        return r;
    }
}
var B = r(632434);
class W extends $ {
    innerPatternString(e) {
        return `(${P})\\s{0,5}назад(?=(?:\\W|$))`;
    }
    innerExtract(e, t) {
        let r = F(t[1]),
            n = (0, B.x4)(r);
        return C.BP.createRelativeFromReference(e.reference, n);
    }
}
var S = r(172609);
class I extends S.A {
    patternBetween() {
        return /^\s*(и до|и по|до|по|-)\s*$/i;
    }
}
var Y = r(230205);
class z extends Y.A {
    patternBetween() {
        return RegExp("^\\s*(T|в|,|-)?\\s*$");
    }
}
var L = r(132588),
    N = r(996483);
class O extends R {
    innerPatternString(e) {
        return "(?:с|со)?\\s*(сегодня|вчера|завтра|послезавтра|послепослезавтра|позапозавчера|позавчера)";
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = e.createParsingComponents();
        switch (r) {
            case "сегодня":
                return N.Ec(e.reference);
            case "вчера":
                return N.jI(e.reference);
            case "завтра":
                return N.uf(e.reference);
            case "послезавтра":
                return N.AV(e.reference, 2);
            case "послепослезавтра":
                return N.AV(e.reference, 3);
            case "позавчера":
                return N.ti(e.reference, 2);
            case "позапозавчера":
                return N.ti(e.reference, 3);
        }
        return n;
    }
}
var J = r(658809);
class q extends R {
    innerPatternString(e) {
        return "(сейчас|прошлым\\s*вечером|прошлой\\s*ночью|следующей\\s*ночью|сегодня\\s*ночью|этой\\s*ночью|ночью|этим утром|утром|утра|в\\s*полдень|вечером|вечера|в\\s*полночь)";
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = t[0].toLowerCase(),
            s = e.createParsingComponents();
        if ("сейчас" === n) return N.tB(e.reference);
        if ("вечером" === n || "вечера" === n) return N.Jp(e.reference);
        if (n.endsWith("утром") || n.endsWith("утра")) return N.F1(e.reference);
        if (n.match(/в\s*полдень/)) return N.zW(e.reference);
        if (n.match(/прошлой\s*ночью/)) return N.zr(e.reference);
        if (n.match(/прошлым\s*вечером/)) return N.Z6(e.reference);
        if (n.match(/следующей\s*ночью/)) {
            let e = 22 > r.getHours() ? 1 : 2,
                t = new Date(r.getTime());
            t.setDate(t.getDate() + e), (0, J.Pl)(s, t), s.imply("hour", 0);
        }
        return n.match(/в\s*полночь/) || n.endsWith("ночью") ? N.Bm(e.reference) : s;
    }
}
var H = r(1673);
class V extends R {
    innerPatternString(e) {
        return `(?:(?:,|\\(|（)\\s*)?(?:в\\s*?)?(?:(эту|этот|прошлый|прошлую|следующий|следующую|следующего)\\s*)?(${(0, n.uJ)(o)})(?:\\s*(?:,|\\)|）))?(?:\\s*на\\s*(этой|прошлой|следующей)\\s*неделе)?`;
    }
    innerExtract(e, t) {
        let r = o[t[2].toLowerCase()],
            n = t[1],
            s = t[3],
            a = n || s;
        a = (a = a || "").toLowerCase();
        let i = null;
        return (
            "прошлый" == a || "прошлую" == a || "прошлой" == a
                ? (i = "last")
                : "следующий" == a || "следующую" == a || "следующей" == a || "следующего" == a
                  ? (i = "next")
                  : ("этот" == a || "эту" == a || "этой" == a) && (i = "this"),
            (0, H.Y5)(e.reference, r, i)
        );
    }
}
class U extends R {
    innerPatternString(e) {
        return `(в прошлом|на прошлой|на следующей|в следующем|на этой|в этом)\\s*(${(0, n.uJ)(c)})`;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = c[t[2].toLowerCase()];
        if ("на следующей" == r || "в следующем" == r) {
            let t = {};
            return (t[n] = 1), C.BP.createRelativeFromReference(e.reference, t);
        }
        if ("в прошлом" == r || "на прошлой" == r) {
            let t = {};
            return (t[n] = -1), C.BP.createRelativeFromReference(e.reference, t);
        }
        let s = e.createParsingComponents(),
            a = new Date(e.reference.instant.getTime());
        return (
            n.match(/week/i)
                ? (a.setDate(a.getDate() - a.getDay()),
                  s.imply("day", a.getDate()),
                  s.imply("month", a.getMonth() + 1),
                  s.imply("year", a.getFullYear()))
                : n.match(/month/i)
                  ? (a.setDate(1),
                    s.imply("day", a.getDate()),
                    s.assign("year", a.getFullYear()),
                    s.assign("month", a.getMonth() + 1))
                  : n.match(/year/i) &&
                    (a.setDate(1),
                    a.setMonth(0),
                    s.imply("day", a.getDate()),
                    s.imply("month", a.getMonth() + 1),
                    s.assign("year", a.getFullYear())),
            s
        );
    }
}
var G = r(880683),
    Z = r(774188);
class K extends R {
    innerPatternString(e) {
        return `(эти|последние|прошлые|следующие|после|спустя|через|\\+|-)\\s*(${P})`;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = F(t[2]);
        switch (r) {
            case "последние":
            case "прошлые":
            case "-":
                n = (0, B.x4)(n);
        }
        return C.BP.createRelativeFromReference(e.reference, n);
    }
}
let _ = new G.u(et()),
    X = new G.u(er(!0));
function Q(e, t, r) {
    return _.parse(e, t, r);
}
function ee(e, t, r) {
    return _.parseDate(e, t, r);
}
function et() {
    let e = er(!1);
    return (
        e.parsers.unshift(new O()),
        e.parsers.unshift(new q()),
        e.parsers.unshift(new b()),
        e.parsers.unshift(new U()),
        e.parsers.unshift(new K()),
        e
    );
}
function er(e = !0) {
    return (0, L.i)(
        { parsers: [new Z.A(!0), new M(), new E(), new V(), new j(e), new W()], refiners: [new z(), new I()] },
        e,
    );
}
