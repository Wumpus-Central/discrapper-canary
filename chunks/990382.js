!(function (e, t) {
    t(n(913527));
})(0, function (e) {
    function t(e) {
        if (e % 100 == 11);
        else if (e % 10 == 1) return !1;
        return !0;
    }
    function n(e, n, r, i) {
        var o = e + ' ';
        switch (r) {
            case 's':
                return n || i ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
            case 'ss':
                if (t(e)) return o + (n || i ? 'sekúndur' : 'sekúndum');
                return o + 'sekúnda';
            case 'm':
                return n ? 'mínúta' : 'mínútu';
            case 'mm':
                if (t(e)) return o + (n || i ? 'mínútur' : 'mínútum');
                if (n) return o + 'mínúta';
                return o + 'mínútu';
            case 'hh':
                if (t(e)) return o + (n || i ? 'klukkustundir' : 'klukkustundum');
                return o + 'klukkustund';
            case 'd':
                if (n) return 'dagur';
                return i ? 'dag' : 'degi';
            case 'dd':
                if (t(e)) {
                    if (n) return o + 'dagar';
                    return o + (i ? 'daga' : 'dögum');
                }
                if (n) return o + 'dagur';
                return o + (i ? 'dag' : 'degi');
            case 'M':
                if (n) return 'mánuður';
                return i ? 'mánuð' : 'mánuði';
            case 'MM':
                if (t(e)) {
                    if (n) return o + 'mánuðir';
                    return o + (i ? 'mánuði' : 'mánuðum');
                }
                if (n) return o + 'mánuður';
                return o + (i ? 'mánuð' : 'mánuði');
            case 'y':
                return n || i ? 'ár' : 'ári';
            case 'yy':
                if (t(e)) return o + (n || i ? 'ár' : 'árum');
                return o + (n || i ? 'ár' : 'ári');
        }
    }
    return e.defineLocale('is', {
        months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
        weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
        weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
        weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY [kl.] H:mm',
            LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm'
        },
        calendar: {
            sameDay: '[í dag kl.] LT',
            nextDay: '[á morgun kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[í gær kl.] LT',
            lastWeek: '[síðasta] dddd [kl.] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'eftir %s',
            past: 'fyrir %s síðan',
            s: n,
            ss: n,
            m: n,
            mm: n,
            h: 'klukkustund',
            hh: n,
            d: n,
            dd: n,
            M: n,
            MM: n,
            y: n,
            yy: n
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    });
});
