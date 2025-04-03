t.d(e, { Z: () => i });
var n = t(261168);
let i = {
    date: (0, n.Z)({
        formats: {
            full: 'd MMMM y EEEE',
            long: 'd MMMM y',
            medium: 'd MMM y',
            short: 'dd.MM.yyyy'
        },
        defaultWidth: 'full'
    }),
    time: (0, n.Z)({
        formats: {
            full: 'HH:mm:ss zzzz',
            long: 'HH:mm:ss z',
            medium: 'HH:mm:ss',
            short: 'HH:mm'
        },
        defaultWidth: 'full'
    }),
    dateTime: (0, n.Z)({
        formats: {
            full: "{{date}} 'saat' {{time}}",
            long: "{{date}} 'saat' {{time}}",
            medium: '{{date}}, {{time}}',
            short: '{{date}}, {{time}}'
        },
        defaultWidth: 'full'
    })
};
