n.d(t, { Z: () => r });
var a = n(261168);
let r = {
    date: (0, a.Z)({
        formats: {
            full: 'y年M月d日EEEE',
            long: 'y年M月d日',
            medium: 'y/MM/dd',
            short: 'y/MM/dd'
        },
        defaultWidth: 'full'
    }),
    time: (0, a.Z)({
        formats: {
            full: 'H時mm分ss秒 zzzz',
            long: 'H:mm:ss z',
            medium: 'H:mm:ss',
            short: 'H:mm'
        },
        defaultWidth: 'full'
    }),
    dateTime: (0, a.Z)({
        formats: {
            full: '{{date}} {{time}}',
            long: '{{date}} {{time}}',
            medium: '{{date}} {{time}}',
            short: '{{date}} {{time}}'
        },
        defaultWidth: 'full'
    })
};
