t.d(a, { Z: () => n });
var i = t(261168);
let n = {
    date: (0, i.Z)({
        formats: {
            full: "EEEE, d 'de' MMMM 'de' y",
            long: "d 'de' MMMM 'de' y",
            medium: 'd MMM y',
            short: 'dd/MM/yyyy'
        },
        defaultWidth: 'full'
    }),
    time: (0, i.Z)({
        formats: {
            full: 'HH:mm:ss zzzz',
            long: 'HH:mm:ss z',
            medium: 'HH:mm:ss',
            short: 'HH:mm'
        },
        defaultWidth: 'full'
    }),
    dateTime: (0, i.Z)({
        formats: {
            full: "{{date}} 'às' {{time}}",
            long: "{{date}} 'às' {{time}}",
            medium: '{{date}}, {{time}}',
            short: '{{date}}, {{time}}'
        },
        defaultWidth: 'full'
    })
};
