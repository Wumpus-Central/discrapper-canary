!(function (e, t) {
    t(n(913527));
})(0, function (e) {
    var t = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
        n = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
    function r(e) {
        return e > 1 && e < 5;
    }
    function i(e, t, n, i) {
        var a = e + ' ';
        switch (n) {
            case 's':
                return t || i ? 'pár sekúnd' : 'pár sekundami';
            case 'ss':
                if (t || i) return a + (r(e) ? 'sekundy' : 'sekúnd');
                return a + 'sekundami';
            case 'm':
                return t ? 'minúta' : i ? 'minútu' : 'minútou';
            case 'mm':
                if (t || i) return a + (r(e) ? 'minúty' : 'minút');
                return a + 'minútami';
            case 'h':
                return t ? 'hodina' : i ? 'hodinu' : 'hodinou';
            case 'hh':
                if (t || i) return a + (r(e) ? 'hodiny' : 'hodín');
                return a + 'hodinami';
            case 'd':
                return t || i ? 'deň' : 'dňom';
            case 'dd':
                if (t || i) return a + (r(e) ? 'dni' : 'dní');
                return a + 'dňami';
            case 'M':
                return t || i ? 'mesiac' : 'mesiacom';
            case 'MM':
                if (t || i) return a + (r(e) ? 'mesiace' : 'mesiacov');
                return a + 'mesiacmi';
            case 'y':
                return t || i ? 'rok' : 'rokom';
            case 'yy':
                if (t || i) return a + (r(e) ? 'roky' : 'rokov');
                return a + 'rokmi';
        }
    }
    return e.defineLocale('sk', {
        months: t,
        monthsShort: n,
        weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
        weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
        weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[dnes o] LT',
            nextDay: '[zajtra o] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[v nedeľu o] LT';
                    case 1:
                    case 2:
                        return '[v] dddd [o] LT';
                    case 3:
                        return '[v stredu o] LT';
                    case 4:
                        return '[vo štvrtok o] LT';
                    case 5:
                        return '[v piatok o] LT';
                    case 6:
                        return '[v sobotu o] LT';
                }
            },
            lastDay: '[včera o] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[minulú nedeľu o] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[minulý] dddd [o] LT';
                    case 3:
                        return '[minulú stredu o] LT';
                    case 6:
                        return '[minulú sobotu o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'za %s',
            past: 'pred %s',
            s: i,
            ss: i,
            m: i,
            mm: i,
            h: i,
            hh: i,
            d: i,
            dd: i,
            M: i,
            MM: i,
            y: i,
            yy: i
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    });
});
