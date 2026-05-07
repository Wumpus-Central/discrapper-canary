t.r(a), t.d(a, { default: () => u });
var i = {
        lessThanXSeconds: { one: "menos de um segundo", other: "menos de {{count}} segundos" },
        xSeconds: { one: "1 segundo", other: "{{count}} segundos" },
        halfAMinute: "meio minuto",
        lessThanXMinutes: { one: "menos de um minuto", other: "menos de {{count}} minutos" },
        xMinutes: { one: "1 minuto", other: "{{count}} minutos" },
        aboutXHours: { one: "cerca de 1 hora", other: "cerca de {{count}} horas" },
        xHours: { one: "1 hora", other: "{{count}} horas" },
        xDays: { one: "1 dia", other: "{{count}} dias" },
        aboutXWeeks: { one: "cerca de 1 semana", other: "cerca de {{count}} semanas" },
        xWeeks: { one: "1 semana", other: "{{count}} semanas" },
        aboutXMonths: { one: "cerca de 1 m\xeas", other: "cerca de {{count}} meses" },
        xMonths: { one: "1 m\xeas", other: "{{count}} meses" },
        aboutXYears: { one: "cerca de 1 ano", other: "cerca de {{count}} anos" },
        xYears: { one: "1 ano", other: "{{count}} anos" },
        overXYears: { one: "mais de 1 ano", other: "mais de {{count}} anos" },
        almostXYears: { one: "quase 1 ano", other: "quase {{count}} anos" },
    },
    n = t(385987),
    o = {
        date: (0, n.A)({
            formats: {
                full: "EEEE, d 'de' MMMM 'de' y",
                long: "d 'de' MMMM 'de' y",
                medium: "d MMM y",
                short: "dd/MM/yyyy",
            },
            defaultWidth: "full",
        }),
        time: (0, n.A)({
            formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" },
            defaultWidth: "full",
        }),
        dateTime: (0, n.A)({
            formats: {
                full: "{{date}} '\xe0s' {{time}}",
                long: "{{date}} '\xe0s' {{time}}",
                medium: "{{date}}, {{time}}",
                short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
        }),
    },
    r = {
        lastWeek: function (e) {
            var a = e.getUTCDay();
            return "'" + (0 === a || 6 === a ? "\xfaltimo" : "\xfaltima") + "' eeee '\xe0s' p";
        },
        yesterday: "'ontem \xe0s' p",
        today: "'hoje \xe0s' p",
        tomorrow: "'amanh\xe3 \xe0s' p",
        nextWeek: "eeee '\xe0s' p",
        other: "P",
    },
    d = t(981737),
    s = {
        ordinalNumber: function (e, a) {
            var t = Number(e);
            return (null == a ? void 0 : a.unit) === "week" ? t + "\xaa" : t + "\xba";
        },
        era: (0, d.A)({
            values: { narrow: ["AC", "DC"], abbreviated: ["AC", "DC"], wide: ["antes de cristo", "depois de cristo"] },
            defaultWidth: "wide",
        }),
        quarter: (0, d.A)({
            values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["T1", "T2", "T3", "T4"],
                wide: ["1\xba trimestre", "2\xba trimestre", "3\xba trimestre", "4\xba trimestre"],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
                return e - 1;
            },
        }),
        month: (0, d.A)({
            values: {
                narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
                abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
                wide: [
                    "janeiro",
                    "fevereiro",
                    "mar\xe7o",
                    "abril",
                    "maio",
                    "junho",
                    "julho",
                    "agosto",
                    "setembro",
                    "outubro",
                    "novembro",
                    "dezembro",
                ],
            },
            defaultWidth: "wide",
        }),
        day: (0, d.A)({
            values: {
                narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                short: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"],
                abbreviated: ["domingo", "segunda", "ter\xe7a", "quarta", "quinta", "sexta", "s\xe1bado"],
                wide: [
                    "domingo",
                    "segunda-feira",
                    "ter\xe7a-feira",
                    "quarta-feira",
                    "quinta-feira",
                    "sexta-feira",
                    "s\xe1bado",
                ],
            },
            defaultWidth: "wide",
        }),
        dayPeriod: (0, d.A)({
            values: {
                narrow: {
                    am: "a",
                    pm: "p",
                    midnight: "mn",
                    noon: "md",
                    morning: "manh\xe3",
                    afternoon: "tarde",
                    evening: "tarde",
                    night: "noite",
                },
                abbreviated: {
                    am: "AM",
                    pm: "PM",
                    midnight: "meia-noite",
                    noon: "meio-dia",
                    morning: "manh\xe3",
                    afternoon: "tarde",
                    evening: "tarde",
                    night: "noite",
                },
                wide: {
                    am: "a.m.",
                    pm: "p.m.",
                    midnight: "meia-noite",
                    noon: "meio-dia",
                    morning: "manh\xe3",
                    afternoon: "tarde",
                    evening: "tarde",
                    night: "noite",
                },
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: {
                    am: "a",
                    pm: "p",
                    midnight: "mn",
                    noon: "md",
                    morning: "da manh\xe3",
                    afternoon: "da tarde",
                    evening: "da tarde",
                    night: "da noite",
                },
                abbreviated: {
                    am: "AM",
                    pm: "PM",
                    midnight: "meia-noite",
                    noon: "meio-dia",
                    morning: "da manh\xe3",
                    afternoon: "da tarde",
                    evening: "da tarde",
                    night: "da noite",
                },
                wide: {
                    am: "a.m.",
                    pm: "p.m.",
                    midnight: "meia-noite",
                    noon: "meio-dia",
                    morning: "da manh\xe3",
                    afternoon: "da tarde",
                    evening: "da tarde",
                    night: "da noite",
                },
            },
            defaultFormattingWidth: "wide",
        }),
    },
    m = t(303527);
let u = {
    code: "pt-BR",
    formatDistance: function (e, a, t) {
        var n,
            o = i[e];
        if (
            ((n = "string" == typeof o ? o : 1 === a ? o.one : o.other.replace("{{count}}", String(a))),
            null != t && t.addSuffix)
        )
            if (t.comparison && t.comparison > 0) return "em " + n;
            else return "h\xe1 " + n;
        return n;
    },
    formatLong: o,
    formatRelative: function (e, a, t, i) {
        var n = r[e];
        return "function" == typeof n ? n(a) : n;
    },
    localize: s,
    match: {
        ordinalNumber: (0, t(722023).A)({
            matchPattern: /^(\d+)[\xba\xaao]?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
                return parseInt(e, 10);
            },
        }),
        era: (0, m.A)({
            matchPatterns: {
                narrow: /^(ac|dc|a|d)/i,
                abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
                wide: /^(antes de cristo|depois de cristo)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^ac/i, /^dc/i], wide: [/^antes de cristo/i, /^depois de cristo/i] },
            defaultParseWidth: "any",
        }),
        quarter: (0, m.A)({
            matchPatterns: { narrow: /^[1234]/i, abbreviated: /^T[1234]/i, wide: /^[1234](\xba)? trimestre/i },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
                return e + 1;
            },
        }),
        month: (0, m.A)({
            matchPatterns: {
                narrow: /^[jfmajsond]/i,
                abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
                wide: /^(janeiro|fevereiro|mar\xe7o|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                any: [
                    /^ja/i,
                    /^fev/i,
                    /^mar/i,
                    /^abr/i,
                    /^mai/i,
                    /^jun/i,
                    /^jul/i,
                    /^ago/i,
                    /^set/i,
                    /^out/i,
                    /^nov/i,
                    /^dez/i,
                ],
            },
            defaultParseWidth: "any",
        }),
        day: (0, m.A)({
            matchPatterns: {
                narrow: /^(dom|[23456]\xaa?|s[a\xe1]b)/i,
                short: /^(dom|[23456]\xaa?|s[a\xe1]b)/i,
                abbreviated: /^(dom|seg|ter|qua|qui|sex|s[a\xe1]b)/i,
                wide: /^(domingo|(segunda|ter[c\xe7]a|quarta|quinta|sexta)([- ]feira)?|s[a\xe1]bado)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[a\xe1]/i],
                narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[a\xe1]/i],
                any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[a\xe1]b/i],
            },
            defaultParseWidth: "any",
        }),
        dayPeriod: (0, m.A)({
            matchPatterns: {
                narrow: /^(a|p|mn|md|(da) (manh\xe3|tarde|noite))/i,
                any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manh\xe3|tarde|noite))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
                any: {
                    am: /^a/i,
                    pm: /^p/i,
                    midnight: /^mn|^meia[-\s]noite/i,
                    noon: /^md|^meio[-\s]dia/i,
                    morning: /manh\xe3/i,
                    afternoon: /tarde/i,
                    evening: /tarde/i,
                    night: /noite/i,
                },
            },
            defaultParseWidth: "any",
        }),
    },
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
};
