t.d(n, { Z: () => a });
var e = t(261168);
let a = {
    date: (0, e.Z)({
        formats: {
            full: "EEEE, d MMMM y 'г.'",
            long: "d MMMM y 'г.'",
            medium: "d MMM y 'г.'",
            short: 'dd.MM.y'
        },
        defaultWidth: 'full'
    }),
    time: (0, e.Z)({
        formats: {
            full: 'H:mm:ss zzzz',
            long: 'H:mm:ss z',
            medium: 'H:mm:ss',
            short: 'H:mm'
        },
        defaultWidth: 'full'
    }),
    dateTime: (0, e.Z)({
        formats: { any: '{{date}}, {{time}}' },
        defaultWidth: 'any'
    })
};
