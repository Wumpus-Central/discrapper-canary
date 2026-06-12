"use strict";
n.r(t), n.d(t, { default: () => u });
var i = n(632903),
    r = n(385987),
    s = {
        date: (0, r.A)({
            formats: { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" },
            defaultWidth: "full",
        }),
        time: (0, r.A)({
            formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" },
            defaultWidth: "full",
        }),
        dateTime: (0, r.A)({
            formats: {
                full: "{{date}} 'at' {{time}}",
                long: "{{date}} 'at' {{time}}",
                medium: "{{date}}, {{time}}",
                short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
        }),
    },
    a = n(247320),
    o = n(416616),
    l = n(899024);
let u = {
    code: "en-US",
    formatDistance: i.A,
    formatLong: s,
    formatRelative: a.A,
    localize: o.A,
    match: l.A,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
};
