t.d(e, { A: () => u });
var i = t(385987);
let u = {
    date: (0, i.A)({
        formats: { full: "eeee d. MMMM y", long: "d. MMMM y", medium: "d. MMM y", short: "d.M.y" },
        defaultWidth: "full",
    }),
    time: (0, i.A)({
        formats: { full: "HH.mm.ss zzzz", long: "HH.mm.ss z", medium: "HH.mm.ss", short: "HH.mm" },
        defaultWidth: "full",
    }),
    dateTime: (0, i.A)({
        formats: {
            full: "{{date}} 'klo' {{time}}",
            long: "{{date}} 'klo' {{time}}",
            medium: "{{date}} {{time}}",
            short: "{{date}} {{time}}",
        },
        defaultWidth: "full",
    }),
};
