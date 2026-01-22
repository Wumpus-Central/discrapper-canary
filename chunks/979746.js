n.d(t, {
    A: () => o,
});
var r = n(385987),
    i = {
        full: "EEEE, MMMM do, y",
        long: "MMMM do, y",
        medium: "MMM d, y",
        short: "MM/dd/yyyy",
    },
    a = {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a",
    },
    s = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}",
    };
let o = {
    date: (0, r.A)({
        formats: i,
        defaultWidth: "full",
    }),
    time: (0, r.A)({
        formats: a,
        defaultWidth: "full",
    }),
    dateTime: (0, r.A)({
        formats: s,
        defaultWidth: "full",
    }),
};
