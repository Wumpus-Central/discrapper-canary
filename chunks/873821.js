a.d(t, { A: () => n });
var r = a(385987);
let n = {
    date: (0, r.A)({
        formats: { full: "EEEE, dd MMMM yyyy", long: "dd MMMM yyyy", medium: "dd MMM yyyy", short: "dd/MM/yyyy" },
        defaultWidth: "full",
    }),
    time: (0, r.A)({
        formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "H:mm" },
        defaultWidth: "full",
    }),
    dateTime: (0, r.A)({ formats: { any: "{{date}} {{time}}" }, defaultWidth: "any" }),
};
