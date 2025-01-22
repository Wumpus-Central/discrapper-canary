!(function (e, n) {
    n(r(913527));
})(0, function (e) {
    var n = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
        r = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
    function i(e) {
        return e > 1 && e < 5;
    }
    function a(e, n, r, a) {
        var o = e + ' ';
        switch (r) {
            case 's':
                return n || a ? 'pár sekúnd' : 'pár sekundami';
            case 'ss':
                if (n || a) return o + (i(e) ? 'sekundy' : 'sekúnd');
                return o + 'sekundami';
            case 'm':
                return n ? 'minúta' : a ? 'minútu' : 'minútou';
            case 'mm':
                if (n || a) return o + (i(e) ? 'minúty' : 'minút');
                return o + 'minútami';
            case 'h':
                return n ? 'hodina' : a ? 'hodinu' : 'hodinou';
            case 'hh':
                if (n || a) return o + (i(e) ? 'hodiny' : 'hodín');
                return o + 'hodinami';
            case 'd':
                return n || a ? 'deň' : 'dňom';
            case 'dd':
                if (n || a) return o + (i(e) ? 'dni' : 'dní');
                return o + 'dňami';
            case 'M':
                return n || a ? 'mesiac' : 'mesiacom';
            case 'MM':
                if (n || a) return o + (i(e) ? 'mesiace' : 'mesiacov');
                return o + 'mesiacmi';
            case 'y':
                return n || a ? 'rok' : 'rokom';
            case 'yy':
                if (n || a) return o + (i(e) ? 'roky' : 'rokov');
                return o + 'rokmi';
        }
    }
    return e.defineLocale('sk', {
        months: n,
        monthsShort: r,
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
            s: a,
            ss: a,
            m: a,
            mm: a,
            h: a,
            hh: a,
            d: a,
            dd: a,
            M: a,
            MM: a,
            y: a,
            yy: a
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    });
});
