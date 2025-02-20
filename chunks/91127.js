!(function (e, t) {
    t(n(913527));
})(0, function (e) {
    function t(e, t, n) {
        var r = e + ' ';
        switch (n) {
            case 'ss':
                return 1 === e ? (r += 'sekunda') : 2 === e || 3 === e || 4 === e ? (r += 'sekunde') : (r += 'sekundi'), r;
            case 'm':
                return t ? 'jedna minuta' : 'jedne minute';
            case 'mm':
                return 1 === e ? (r += 'minuta') : 2 === e || 3 === e || 4 === e ? (r += 'minute') : (r += 'minuta'), r;
            case 'h':
                return t ? 'jedan sat' : 'jednog sata';
            case 'hh':
                return 1 === e ? (r += 'sat') : 2 === e || 3 === e || 4 === e ? (r += 'sata') : (r += 'sati'), r;
            case 'dd':
                return 1 === e ? (r += 'dan') : (r += 'dana'), r;
            case 'MM':
                return 1 === e ? (r += 'mjesec') : 2 === e || 3 === e || 4 === e ? (r += 'mjeseca') : (r += 'mjeseci'), r;
            case 'yy':
                return 1 === e ? (r += 'godina') : 2 === e || 3 === e || 4 === e ? (r += 'godine') : (r += 'godina'), r;
        }
    }
    return e.defineLocale('bs', {
        months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sutra u] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[u] [nedjelju] [u] LT';
                    case 3:
                        return '[u] [srijedu] [u] LT';
                    case 6:
                        return '[u] [subotu] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[u] dddd [u] LT';
                }
            },
            lastDay: '[jučer u] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return '[prošlu] dddd [u] LT';
                    case 6:
                        return '[prošle] [subote] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[prošli] dddd [u] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime: {
            future: 'za %s',
            past: 'prije %s',
            s: 'par sekundi',
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: 'dan',
            dd: t,
            M: 'mjesec',
            MM: t,
            y: 'godinu',
            yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 7
        }
    });
});
