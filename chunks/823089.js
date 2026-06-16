a.r(e), a.d(e, { default: () => f });
var d = a(632903),
    m = a(247320),
    s = a(416616),
    i = a(899024),
    l = a(385987),
    o = {
        date: (0, l.A)({
            formats: { full: "EEEE, d MMMM yyyy", long: "d MMMM yyyy", medium: "d MMM yyyy", short: "dd/MM/yyyy" },
            defaultWidth: "full",
        }),
        time: (0, l.A)({
            formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "HH:mm" },
            defaultWidth: "full",
        }),
        dateTime: (0, l.A)({
            formats: {
                full: "{{date}} 'at' {{time}}",
                long: "{{date}} 'at' {{time}}",
                medium: "{{date}}, {{time}}",
                short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
        }),
    };
let f = {
    code: "en-GB",
    formatDistance: d.A,
    formatLong: o,
    formatRelative: m.A,
    localize: s.A,
    match: i.A,
    options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
};
