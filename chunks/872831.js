function t(i, n) {
    if (void 0 !== i.one && 1 === n) return i.one;
    var e = n % 10,
        t = n % 100;
    return 1 === e && 11 !== t
        ? i.singularNominative.replace("{{count}}", String(n))
        : e >= 2 && e <= 4 && (t < 10 || t > 20)
          ? i.singularGenitive.replace("{{count}}", String(n))
          : i.pluralGenitive.replace("{{count}}", String(n));
}
function a(i) {
    return function (n, e) {
        if (null == e || !e.addSuffix) return t(i.regular, n);
        if (e.comparison && e.comparison > 0)
            if (i.future) return t(i.future, n);
            else return "через " + t(i.regular, n);
        return i.past ? t(i.past, n) : t(i.regular, n) + " назад";
    };
}
e.r(n), e.d(n, { default: () => f });
var r = {
        lessThanXSeconds: a({
            regular: {
                one: "меньше секунды",
                singularNominative: "меньше {{count}} секунды",
                singularGenitive: "меньше {{count}} секунд",
                pluralGenitive: "меньше {{count}} секунд",
            },
            future: {
                one: "меньше, чем через секунду",
                singularNominative: "меньше, чем через {{count}} секунду",
                singularGenitive: "меньше, чем через {{count}} секунды",
                pluralGenitive: "меньше, чем через {{count}} секунд",
            },
        }),
        xSeconds: a({
            regular: {
                singularNominative: "{{count}} секунда",
                singularGenitive: "{{count}} секунды",
                pluralGenitive: "{{count}} секунд",
            },
            past: {
                singularNominative: "{{count}} секунду назад",
                singularGenitive: "{{count}} секунды назад",
                pluralGenitive: "{{count}} секунд назад",
            },
            future: {
                singularNominative: "через {{count}} секунду",
                singularGenitive: "через {{count}} секунды",
                pluralGenitive: "через {{count}} секунд",
            },
        }),
        halfAMinute: function (i, n) {
            if (null != n && n.addSuffix)
                if (n.comparison && n.comparison > 0) return "через полминуты";
                else return "полминуты назад";
            return "полминуты";
        },
        lessThanXMinutes: a({
            regular: {
                one: "меньше минуты",
                singularNominative: "меньше {{count}} минуты",
                singularGenitive: "меньше {{count}} минут",
                pluralGenitive: "меньше {{count}} минут",
            },
            future: {
                one: "меньше, чем через минуту",
                singularNominative: "меньше, чем через {{count}} минуту",
                singularGenitive: "меньше, чем через {{count}} минуты",
                pluralGenitive: "меньше, чем через {{count}} минут",
            },
        }),
        xMinutes: a({
            regular: {
                singularNominative: "{{count}} минута",
                singularGenitive: "{{count}} минуты",
                pluralGenitive: "{{count}} минут",
            },
            past: {
                singularNominative: "{{count}} минуту назад",
                singularGenitive: "{{count}} минуты назад",
                pluralGenitive: "{{count}} минут назад",
            },
            future: {
                singularNominative: "через {{count}} минуту",
                singularGenitive: "через {{count}} минуты",
                pluralGenitive: "через {{count}} минут",
            },
        }),
        aboutXHours: a({
            regular: {
                singularNominative: "около {{count}} часа",
                singularGenitive: "около {{count}} часов",
                pluralGenitive: "около {{count}} часов",
            },
            future: {
                singularNominative: "приблизительно через {{count}} час",
                singularGenitive: "приблизительно через {{count}} часа",
                pluralGenitive: "приблизительно через {{count}} часов",
            },
        }),
        xHours: a({
            regular: {
                singularNominative: "{{count}} час",
                singularGenitive: "{{count}} часа",
                pluralGenitive: "{{count}} часов",
            },
        }),
        xDays: a({
            regular: {
                singularNominative: "{{count}} день",
                singularGenitive: "{{count}} дня",
                pluralGenitive: "{{count}} дней",
            },
        }),
        aboutXWeeks: a({
            regular: {
                singularNominative: "около {{count}} недели",
                singularGenitive: "около {{count}} недель",
                pluralGenitive: "около {{count}} недель",
            },
            future: {
                singularNominative: "приблизительно через {{count}} неделю",
                singularGenitive: "приблизительно через {{count}} недели",
                pluralGenitive: "приблизительно через {{count}} недель",
            },
        }),
        xWeeks: a({
            regular: {
                singularNominative: "{{count}} неделя",
                singularGenitive: "{{count}} недели",
                pluralGenitive: "{{count}} недель",
            },
        }),
        aboutXMonths: a({
            regular: {
                singularNominative: "около {{count}} месяца",
                singularGenitive: "около {{count}} месяцев",
                pluralGenitive: "около {{count}} месяцев",
            },
            future: {
                singularNominative: "приблизительно через {{count}} месяц",
                singularGenitive: "приблизительно через {{count}} месяца",
                pluralGenitive: "приблизительно через {{count}} месяцев",
            },
        }),
        xMonths: a({
            regular: {
                singularNominative: "{{count}} месяц",
                singularGenitive: "{{count}} месяца",
                pluralGenitive: "{{count}} месяцев",
            },
        }),
        aboutXYears: a({
            regular: {
                singularNominative: "около {{count}} года",
                singularGenitive: "около {{count}} лет",
                pluralGenitive: "около {{count}} лет",
            },
            future: {
                singularNominative: "приблизительно через {{count}} год",
                singularGenitive: "приблизительно через {{count}} года",
                pluralGenitive: "приблизительно через {{count}} лет",
            },
        }),
        xYears: a({
            regular: {
                singularNominative: "{{count}} год",
                singularGenitive: "{{count}} года",
                pluralGenitive: "{{count}} лет",
            },
        }),
        overXYears: a({
            regular: {
                singularNominative: "больше {{count}} года",
                singularGenitive: "больше {{count}} лет",
                pluralGenitive: "больше {{count}} лет",
            },
            future: {
                singularNominative: "больше, чем через {{count}} год",
                singularGenitive: "больше, чем через {{count}} года",
                pluralGenitive: "больше, чем через {{count}} лет",
            },
        }),
        almostXYears: a({
            regular: {
                singularNominative: "почти {{count}} год",
                singularGenitive: "почти {{count}} года",
                pluralGenitive: "почти {{count}} лет",
            },
            future: {
                singularNominative: "почти через {{count}} год",
                singularGenitive: "почти через {{count}} года",
                pluralGenitive: "почти через {{count}} лет",
            },
        }),
    },
    u = e(385987),
    o = {
        date: (0, u.A)({
            formats: { full: "EEEE, d MMMM y 'г.'", long: "d MMMM y 'г.'", medium: "d MMM y 'г.'", short: "dd.MM.y" },
            defaultWidth: "full",
        }),
        time: (0, u.A)({
            formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" },
            defaultWidth: "full",
        }),
        dateTime: (0, u.A)({ formats: { any: "{{date}}, {{time}}" }, defaultWidth: "any" }),
    },
    l = e(204801),
    s = ["воскресенье", "понедельник", "вторник", "среду", "четверг", "пятницу", "субботу"];
function c(i) {
    var n = s[i];
    return 2 === i ? "'во " + n + " в' p" : "'в " + n + " в' p";
}
var v = {
        lastWeek: function (i, n, e) {
            var t = i.getUTCDay();
            if ((0, l.A)(i, n, e)) return c(t);
            var a = s[t];
            switch (t) {
                case 0:
                    return "'в прошлое " + a + " в' p";
                case 1:
                case 2:
                case 4:
                    return "'в прошлый " + a + " в' p";
                case 3:
                case 5:
                case 6:
                    return "'в прошлую " + a + " в' p";
            }
        },
        yesterday: "'вчера в' p",
        today: "'сегодня в' p",
        tomorrow: "'завтра в' p",
        nextWeek: function (i, n, e) {
            var t = i.getUTCDay();
            if ((0, l.A)(i, n, e)) return c(t);
            var a = s[t];
            switch (t) {
                case 0:
                    return "'в следующее " + a + " в' p";
                case 1:
                case 2:
                case 4:
                    return "'в следующий " + a + " в' p";
                case 3:
                case 5:
                case 6:
                    return "'в следующую " + a + " в' p";
            }
        },
        other: "P",
    },
    d = e(981737),
    g = {
        ordinalNumber: function (i, n) {
            var e = Number(i),
                t = null == n ? void 0 : n.unit;
            return e + ("date" === t ? "-е" : "week" === t || "minute" === t || "second" === t ? "-я" : "-й");
        },
        era: (0, d.A)({
            values: {
                narrow: ["до н.э.", "н.э."],
                abbreviated: ["до н. э.", "н. э."],
                wide: ["до нашей эры", "нашей эры"],
            },
            defaultWidth: "wide",
        }),
        quarter: (0, d.A)({
            values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
                wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"],
            },
            defaultWidth: "wide",
            argumentCallback: function (i) {
                return i - 1;
            },
        }),
        month: (0, d.A)({
            values: {
                narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
                abbreviated: [
                    "янв.",
                    "фев.",
                    "март",
                    "апр.",
                    "май",
                    "июнь",
                    "июль",
                    "авг.",
                    "сент.",
                    "окт.",
                    "нояб.",
                    "дек.",
                ],
                wide: [
                    "январь",
                    "февраль",
                    "март",
                    "апрель",
                    "май",
                    "июнь",
                    "июль",
                    "август",
                    "сентябрь",
                    "октябрь",
                    "ноябрь",
                    "декабрь",
                ],
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
                abbreviated: [
                    "янв.",
                    "фев.",
                    "мар.",
                    "апр.",
                    "мая",
                    "июн.",
                    "июл.",
                    "авг.",
                    "сент.",
                    "окт.",
                    "нояб.",
                    "дек.",
                ],
                wide: [
                    "января",
                    "февраля",
                    "марта",
                    "апреля",
                    "мая",
                    "июня",
                    "июля",
                    "августа",
                    "сентября",
                    "октября",
                    "ноября",
                    "декабря",
                ],
            },
            defaultFormattingWidth: "wide",
        }),
        day: (0, d.A)({
            values: {
                narrow: ["В", "П", "В", "С", "Ч", "П", "С"],
                short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                abbreviated: ["вск", "пнд", "втр", "срд", "чтв", "птн", "суб"],
                wide: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            },
            defaultWidth: "wide",
        }),
        dayPeriod: (0, d.A)({
            values: {
                narrow: {
                    am: "ДП",
                    pm: "ПП",
                    midnight: "полн.",
                    noon: "полд.",
                    morning: "утро",
                    afternoon: "день",
                    evening: "веч.",
                    night: "ночь",
                },
                abbreviated: {
                    am: "ДП",
                    pm: "ПП",
                    midnight: "полн.",
                    noon: "полд.",
                    morning: "утро",
                    afternoon: "день",
                    evening: "веч.",
                    night: "ночь",
                },
                wide: {
                    am: "ДП",
                    pm: "ПП",
                    midnight: "полночь",
                    noon: "полдень",
                    morning: "утро",
                    afternoon: "день",
                    evening: "вечер",
                    night: "ночь",
                },
            },
            defaultWidth: "any",
            formattingValues: {
                narrow: {
                    am: "ДП",
                    pm: "ПП",
                    midnight: "полн.",
                    noon: "полд.",
                    morning: "утра",
                    afternoon: "дня",
                    evening: "веч.",
                    night: "ночи",
                },
                abbreviated: {
                    am: "ДП",
                    pm: "ПП",
                    midnight: "полн.",
                    noon: "полд.",
                    morning: "утра",
                    afternoon: "дня",
                    evening: "веч.",
                    night: "ночи",
                },
                wide: {
                    am: "ДП",
                    pm: "ПП",
                    midnight: "полночь",
                    noon: "полдень",
                    morning: "утра",
                    afternoon: "дня",
                    evening: "вечера",
                    night: "ночи",
                },
            },
            defaultFormattingWidth: "wide",
        }),
    },
    m = e(303527);
let f = {
    code: "ru",
    formatDistance: function (i, n, e) {
        return r[i](n, e);
    },
    formatLong: o,
    formatRelative: function (i, n, e, t) {
        var a = v[i];
        return "function" == typeof a ? a(n, e, t) : a;
    },
    localize: g,
    match: {
        ordinalNumber: (0, e(722023).A)({
            matchPattern: /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,
            parsePattern: /\d+/i,
            valueCallback: function (i) {
                return parseInt(i, 10);
            },
        }),
        era: (0, m.A)({
            matchPatterns: {
                narrow: /^((до )?н\.?\s?э\.?)/i,
                abbreviated: /^((до )?н\.?\s?э\.?)/i,
                wide: /^(до нашей эры|нашей эры|наша эра)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^д/i, /^н/i] },
            defaultParseWidth: "any",
        }),
        quarter: (0, m.A)({
            matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
                wide: /^[1234](-?[ыои]?й?)? квартал/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (i) {
                return i + 1;
            },
        }),
        month: (0, m.A)({
            matchPatterns: {
                narrow: /^[яфмаисонд]/i,
                abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
                wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^я/i, /^ф/i, /^м/i, /^а/i, /^м/i, /^и/i, /^и/i, /^а/i, /^с/i, /^о/i, /^н/i, /^я/i],
                any: [/^я/i, /^ф/i, /^мар/i, /^ап/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^ав/i, /^с/i, /^о/i, /^н/i, /^д/i],
            },
            defaultParseWidth: "any",
        }),
        day: (0, m.A)({
            matchPatterns: {
                narrow: /^[впсч]/i,
                short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
                abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
                wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
                any: [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i],
            },
            defaultParseWidth: "any",
        }),
        dayPeriod: (0, m.A)({
            matchPatterns: {
                narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
                abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
                wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                any: {
                    am: /^дп/i,
                    pm: /^пп/i,
                    midnight: /^полн/i,
                    noon: /^полд/i,
                    morning: /^у/i,
                    afternoon: /^д[ен]/i,
                    evening: /^в/i,
                    night: /^н/i,
                },
            },
            defaultParseWidth: "any",
        }),
    },
    options: { weekStartsOn: 1, firstWeekContainsDate: 1 },
};
