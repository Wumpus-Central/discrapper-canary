e.r(a), e.d(a, { default: () => s });
var n = {
        lessThanXSeconds: { one: "mai pu\u021Bin de o secund\u0103", other: "mai pu\u021Bin de {{count}} secunde" },
        xSeconds: { one: "1 secund\u0103", other: "{{count}} secunde" },
        halfAMinute: "jum\u0103tate de minut",
        lessThanXMinutes: { one: "mai pu\u021Bin de un minut", other: "mai pu\u021Bin de {{count}} minute" },
        xMinutes: { one: "1 minut", other: "{{count}} minute" },
        aboutXHours: { one: "circa 1 or\u0103", other: "circa {{count}} ore" },
        xHours: { one: "1 or\u0103", other: "{{count}} ore" },
        xDays: { one: "1 zi", other: "{{count}} zile" },
        aboutXWeeks: { one: "circa o s\u0103pt\u0103m\xe2n\u0103", other: "circa {{count}} s\u0103pt\u0103m\xe2ni" },
        xWeeks: { one: "1 s\u0103pt\u0103m\xe2n\u0103", other: "{{count}} s\u0103pt\u0103m\xe2ni" },
        aboutXMonths: { one: "circa 1 lun\u0103", other: "circa {{count}} luni" },
        xMonths: { one: "1 lun\u0103", other: "{{count}} luni" },
        aboutXYears: { one: "circa 1 an", other: "circa {{count}} ani" },
        xYears: { one: "1 an", other: "{{count}} ani" },
        overXYears: { one: "peste 1 an", other: "peste {{count}} ani" },
        almostXYears: { one: "aproape 1 an", other: "aproape {{count}} ani" },
    },
    t = e(385987),
    r = {
        date: (0, t.A)({
            formats: { full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "dd.MM.yyyy" },
            defaultWidth: "full",
        }),
        time: (0, t.A)({
            formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" },
            defaultWidth: "full",
        }),
        dateTime: (0, t.A)({
            formats: {
                full: "{{date}} 'la' {{time}}",
                long: "{{date}} 'la' {{time}}",
                medium: "{{date}}, {{time}}",
                short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
        }),
    },
    o = {
        lastWeek: "eeee 'trecut\u0103 la' p",
        yesterday: "'ieri la' p",
        today: "'ast\u0103zi la' p",
        tomorrow: "'m\xe2ine la' p",
        nextWeek: "eeee 'viitoare la' p",
        other: "P",
    },
    m = e(981737),
    u = {
        ordinalNumber: function (i, a) {
            return String(i);
        },
        era: (0, m.A)({
            values: {
                narrow: ["\xce", "D"],
                abbreviated: ["\xce.d.C.", "D.C."],
                wide: ["\xcenainte de Cristos", "Dup\u0103 Cristos"],
            },
            defaultWidth: "wide",
        }),
        quarter: (0, m.A)({
            values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["T1", "T2", "T3", "T4"],
                wide: ["primul trimestru", "al doilea trimestru", "al treilea trimestru", "al patrulea trimestru"],
            },
            defaultWidth: "wide",
            argumentCallback: function (i) {
                return i - 1;
            },
        }),
        month: (0, m.A)({
            values: {
                narrow: ["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"],
                abbreviated: ["ian", "feb", "mar", "apr", "mai", "iun", "iul", "aug", "sep", "oct", "noi", "dec"],
                wide: [
                    "ianuarie",
                    "februarie",
                    "martie",
                    "aprilie",
                    "mai",
                    "iunie",
                    "iulie",
                    "august",
                    "septembrie",
                    "octombrie",
                    "noiembrie",
                    "decembrie",
                ],
            },
            defaultWidth: "wide",
        }),
        day: (0, m.A)({
            values: {
                narrow: ["d", "l", "m", "m", "j", "v", "s"],
                short: ["du", "lu", "ma", "mi", "jo", "vi", "s\xe2"],
                abbreviated: ["dum", "lun", "mar", "mie", "joi", "vin", "s\xe2m"],
                wide: ["duminic\u0103", "luni", "mar\u021Bi", "miercuri", "joi", "vineri", "s\xe2mb\u0103t\u0103"],
            },
            defaultWidth: "wide",
        }),
        dayPeriod: (0, m.A)({
            values: {
                narrow: {
                    am: "a",
                    pm: "p",
                    midnight: "mn",
                    noon: "ami",
                    morning: "dim",
                    afternoon: "da",
                    evening: "s",
                    night: "n",
                },
                abbreviated: {
                    am: "AM",
                    pm: "PM",
                    midnight: "miezul nop\u021Bii",
                    noon: "amiaz\u0103",
                    morning: "diminea\u021B\u0103",
                    afternoon: "dup\u0103-amiaz\u0103",
                    evening: "sear\u0103",
                    night: "noapte",
                },
                wide: {
                    am: "a.m.",
                    pm: "p.m.",
                    midnight: "miezul nop\u021Bii",
                    noon: "amiaz\u0103",
                    morning: "diminea\u021B\u0103",
                    afternoon: "dup\u0103-amiaz\u0103",
                    evening: "sear\u0103",
                    night: "noapte",
                },
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: {
                    am: "a",
                    pm: "p",
                    midnight: "mn",
                    noon: "amiaz\u0103",
                    morning: "diminea\u021B\u0103",
                    afternoon: "dup\u0103-amiaz\u0103",
                    evening: "sear\u0103",
                    night: "noapte",
                },
                abbreviated: {
                    am: "AM",
                    pm: "PM",
                    midnight: "miezul nop\u021Bii",
                    noon: "amiaz\u0103",
                    morning: "diminea\u021B\u0103",
                    afternoon: "dup\u0103-amiaz\u0103",
                    evening: "sear\u0103",
                    night: "noapte",
                },
                wide: {
                    am: "a.m.",
                    pm: "p.m.",
                    midnight: "miezul nop\u021Bii",
                    noon: "amiaz\u0103",
                    morning: "diminea\u021B\u0103",
                    afternoon: "dup\u0103-amiaz\u0103",
                    evening: "sear\u0103",
                    night: "noapte",
                },
            },
            defaultFormattingWidth: "wide",
        }),
    },
    d = e(303527);
let s = {
    code: "ro",
    formatDistance: function (i, a, e) {
        var t,
            r = n[i];
        if (
            ((t = "string" == typeof r ? r : 1 === a ? r.one : r.other.replace("{{count}}", String(a))),
            null != e && e.addSuffix)
        )
            if (e.comparison && e.comparison > 0) return "\xeen " + t;
            else return t + " \xeen urm\u0103";
        return t;
    },
    formatLong: r,
    formatRelative: function (i, a, e, n) {
        return o[i];
    },
    localize: u,
    match: {
        ordinalNumber: (0, e(722023).A)({
            matchPattern: /^(\d+)?/i,
            parsePattern: /\d+/i,
            valueCallback: function (i) {
                return parseInt(i, 10);
            },
        }),
        era: (0, d.A)({
            matchPatterns: {
                narrow: /^(\xce|D)/i,
                abbreviated: /^(\xce\.?\s?d\.?\s?C\.?|\xce\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i,
                wide: /^(\xcenainte de Cristos|\xcenaintea erei noastre|Dup\u0103 Cristos|Era noastr\u0103)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                any: [/^\xceC/i, /^DC/i],
                wide: [/^(\xcenainte de Cristos|\xcenaintea erei noastre)/i, /^(Dup\u0103 Cristos|Era noastr\u0103)/i],
            },
            defaultParseWidth: "any",
        }),
        quarter: (0, d.A)({
            matchPatterns: { narrow: /^[1234]/i, abbreviated: /^T[1234]/i, wide: /^trimestrul [1234]/i },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (i) {
                return i + 1;
            },
        }),
        month: (0, d.A)({
            matchPatterns: {
                narrow: /^[ifmaasond]/i,
                abbreviated: /^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i,
                wide: /^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^i/i, /^f/i, /^m/i, /^a/i, /^m/i, /^i/i, /^i/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                any: [/^ia/i, /^f/i, /^mar/i, /^ap/i, /^mai/i, /^iun/i, /^iul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i],
            },
            defaultParseWidth: "any",
        }),
        day: (0, d.A)({
            matchPatterns: {
                narrow: /^[dlmjvs]/i,
                short: /^(d|l|ma|mi|j|v|s)/i,
                abbreviated: /^(dum|lun|mar|mie|jo|vi|s\xe2)/i,
                wide: /^(duminica|luni|mar\u0163i|miercuri|joi|vineri|s\xe2mb\u0103t\u0103)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
                any: [/^d/i, /^l/i, /^ma/i, /^mi/i, /^j/i, /^v/i, /^s/i],
            },
            defaultParseWidth: "any",
        }),
        dayPeriod: (0, d.A)({
            matchPatterns: {
                narrow: /^(a|p|mn|a|(diminea\u0163a|dup\u0103-amiaza|seara|noaptea))/i,
                any: /^([ap]\.?\s?m\.?|miezul nop\u021bii|amiaza|(diminea\u0163a|dup\u0103-amiaza|seara|noaptea))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
                any: {
                    am: /^a/i,
                    pm: /^p/i,
                    midnight: /^mn/i,
                    noon: /amiaza/i,
                    morning: /diminea\u0163a/i,
                    afternoon: /dup\u0103-amiaza/i,
                    evening: /seara/i,
                    night: /noaptea/i,
                },
            },
            defaultParseWidth: "any",
        }),
    },
    options: { weekStartsOn: 1, firstWeekContainsDate: 1 },
};
