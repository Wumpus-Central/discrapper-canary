"use strict";
n.d(t, { A: () => i });
var r = n(385987);
let i = {
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
};
