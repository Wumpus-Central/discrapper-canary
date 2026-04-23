a.d(t, { A: () => n });
var i = a(385987);
let n = {
    date: (0, i.A)({
        formats: { full: "EEEE, d MMMM y", long: "d MMMM y", medium: "d MMM y", short: "d/M/yy" },
        defaultWidth: "full",
    }),
    time: (0, i.A)({
        formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" },
        defaultWidth: "full",
    }),
    dateTime: (0, i.A)({
        formats: {
            full: "{{date}} - {{time}}",
            long: "{{date}} - {{time}}",
            medium: "{{date}}, {{time}}",
            short: "{{date}}, {{time}}",
        },
        defaultWidth: "full",
    }),
};
