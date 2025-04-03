t.d(e, { Z: () => i });
var n = t(799761);
let i = {
    ordinalNumber: function (a, e) {
        return Number(a) + '.';
    },
    era: (0, n.Z)({
        values: {
            narrow: ['MÖ', 'MS'],
            abbreviated: ['MÖ', 'MS'],
            wide: ['Milattan Önce', 'Milattan Sonra']
        },
        defaultWidth: 'wide'
    }),
    quarter: (0, n.Z)({
        values: {
            narrow: ['1', '2', '3', '4'],
            abbreviated: ['1Ç', '2Ç', '3Ç', '4Ç'],
            wide: ['İlk çeyrek', 'İkinci Çeyrek', 'Üçüncü çeyrek', 'Son çeyrek']
        },
        defaultWidth: 'wide',
        argumentCallback: function (a) {
            return Number(a) - 1;
        }
    }),
    month: (0, n.Z)({
        values: {
            narrow: ['O', 'Ş', 'M', 'N', 'M', 'H', 'T', 'A', 'E', 'E', 'K', 'A'],
            abbreviated: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
            wide: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
        },
        defaultWidth: 'wide'
    }),
    day: (0, n.Z)({
        values: {
            narrow: ['P', 'P', 'S', 'Ç', 'P', 'C', 'C'],
            short: ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'],
            abbreviated: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cts'],
            wide: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
        },
        defaultWidth: 'wide'
    }),
    dayPeriod: (0, n.Z)({
        values: {
            narrow: {
                am: 'öö',
                pm: 'ös',
                midnight: 'gy',
                noon: 'ö',
                morning: 'sa',
                afternoon: 'ös',
                evening: 'ak',
                night: 'ge'
            },
            abbreviated: {
                am: 'ÖÖ',
                pm: 'ÖS',
                midnight: 'gece yarısı',
                noon: 'öğle',
                morning: 'sabah',
                afternoon: 'öğleden sonra',
                evening: 'akşam',
                night: 'gece'
            },
            wide: {
                am: 'Ö.Ö.',
                pm: 'Ö.S.',
                midnight: 'gece yarısı',
                noon: 'öğle',
                morning: 'sabah',
                afternoon: 'öğleden sonra',
                evening: 'akşam',
                night: 'gece'
            }
        },
        defaultWidth: 'wide',
        formattingValues: {
            narrow: {
                am: 'öö',
                pm: 'ös',
                midnight: 'gy',
                noon: 'ö',
                morning: 'sa',
                afternoon: 'ös',
                evening: 'ak',
                night: 'ge'
            },
            abbreviated: {
                am: 'ÖÖ',
                pm: 'ÖS',
                midnight: 'gece yarısı',
                noon: 'öğlen',
                morning: 'sabahleyin',
                afternoon: 'öğleden sonra',
                evening: 'akşamleyin',
                night: 'geceleyin'
            },
            wide: {
                am: 'ö.ö.',
                pm: 'ö.s.',
                midnight: 'gece yarısı',
                noon: 'öğlen',
                morning: 'sabahleyin',
                afternoon: 'öğleden sonra',
                evening: 'akşamleyin',
                night: 'geceleyin'
            }
        },
        defaultFormattingWidth: 'wide'
    })
};
