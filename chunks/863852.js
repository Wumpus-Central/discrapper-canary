e.d(n, { Z: () => a });
var t = e(261168);
let a = {
    date: (0, t.Z)({
        formats: {
            full: "EEEE, d MMMM y 'г.'",
            long: "d MMMM y 'г.'",
            medium: "d MMM y 'г.'",
            short: 'dd.MM.y'
        },
        defaultWidth: 'full'
    }),
    time: (0, t.Z)({
        formats: {
            full: 'H:mm:ss zzzz',
            long: 'H:mm:ss z',
            medium: 'H:mm:ss',
            short: 'H:mm'
        },
        defaultWidth: 'full'
    }),
    dateTime: (0, t.Z)({
        formats: { any: '{{date}}, {{time}}' },
        defaultWidth: 'any'
    })
};
