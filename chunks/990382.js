!(function (e, n) {
    n(r(913527));
})(0, function (e) {
    function n(e) {
        if (e % 100 == 11);
        else if (e % 10 == 1) return !1;
        return !0;
    }
    function r(e, r, i, a) {
        var o = e + ' ';
        switch (i) {
            case 's':
                return r || a ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
            case 'ss':
                if (n(e)) return o + (r || a ? 'sekúndur' : 'sekúndum');
                return o + 'sekúnda';
            case 'm':
                return r ? 'mínúta' : 'mínútu';
            case 'mm':
                if (n(e)) return o + (r || a ? 'mínútur' : 'mínútum');
                if (r) return o + 'mínúta';
                return o + 'mínútu';
            case 'hh':
                if (n(e)) return o + (r || a ? 'klukkustundir' : 'klukkustundum');
                return o + 'klukkustund';
            case 'd':
                if (r) return 'dagur';
                return a ? 'dag' : 'degi';
            case 'dd':
                if (n(e)) {
                    if (r) return o + 'dagar';
                    return o + (a ? 'daga' : 'dögum');
                }
                if (r) return o + 'dagur';
                return o + (a ? 'dag' : 'degi');
            case 'M':
                if (r) return 'mánuður';
                return a ? 'mánuð' : 'mánuði';
            case 'MM':
                if (n(e)) {
                    if (r) return o + 'mánuðir';
                    return o + (a ? 'mánuði' : 'mánuðum');
                }
                if (r) return o + 'mánuður';
                return o + (a ? 'mánuð' : 'mánuði');
            case 'y':
                return r || a ? 'ár' : 'ári';
            case 'yy':
                if (n(e)) return o + (r || a ? 'ár' : 'árum');
                return o + (r || a ? 'ár' : 'ári');
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
            s: r,
            ss: r,
            m: r,
            mm: r,
            h: 'klukkustund',
            hh: r,
            d: r,
            dd: r,
            M: r,
            MM: r,
            y: r,
            yy: r
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1,
            doy: 4
        }
    });
});
