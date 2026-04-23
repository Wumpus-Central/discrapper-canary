"use strict";
r.r(t), r.d(t, { default: () => u });
var n = r(632903),
    a = r(385987),
    s = {
        date: (0, a.A)({
            formats: { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" },
            defaultWidth: "full",
        }),
        time: (0, a.A)({
            formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" },
            defaultWidth: "full",
        }),
        dateTime: (0, a.A)({
            formats: {
                full: "{{date}} 'at' {{time}}",
                long: "{{date}} 'at' {{time}}",
                medium: "{{date}}, {{time}}",
                short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
        }),
    },
    i = r(247320),
    o = r(416616),
    l = r(899024);
let u = {
    code: "en-US",
    formatDistance: n.A,
    formatLong: s,
    formatRelative: i.A,
    localize: o.A,
    match: l.A,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
};
