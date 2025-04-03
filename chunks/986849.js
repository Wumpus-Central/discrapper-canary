n.d(t, { Z: () => i });
var a = n(261168);
let i = {
    date: (0, a.Z)({
        formats: {
            full: 'EEEE, do MMMM y',
            long: 'do MMMM y',
            medium: 'do MMM y',
            short: 'dd.MM.y'
        },
        defaultWidth: 'full'
    }),
    time: (0, a.Z)({
        formats: {
            full: 'HH:mm:ss zzzz',
            long: 'HH:mm:ss z',
            medium: 'HH:mm:ss',
            short: 'HH:mm'
        },
        defaultWidth: 'full'
    }),
    dateTime: (0, a.Z)({
        formats: {
            full: "{{date}} 'um' {{time}}",
            long: "{{date}} 'um' {{time}}",
            medium: '{{date}} {{time}}',
            short: '{{date}} {{time}}'
        },
        defaultWidth: 'full'
    })
};
