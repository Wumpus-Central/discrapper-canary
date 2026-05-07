!(function (e) {
    "use strict";
    var t = {
        ss: "sekundes_sekund\u0113m_sekunde_sekundes".split("_"),
        m: "min\u016Btes_min\u016Bt\u0113m_min\u016Bte_min\u016Btes".split("_"),
        mm: "min\u016Btes_min\u016Bt\u0113m_min\u016Bte_min\u016Btes".split("_"),
        h: "stundas_stund\u0101m_stunda_stundas".split("_"),
        hh: "stundas_stund\u0101m_stunda_stundas".split("_"),
        d: "dienas_dien\u0101m_diena_dienas".split("_"),
        dd: "dienas_dien\u0101m_diena_dienas".split("_"),
        M: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"),
        MM: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"),
        y: "gada_gadiem_gads_gadi".split("_"),
        yy: "gada_gadiem_gads_gadi".split("_"),
    };
    function n(e, t, n) {
        return n ? (t % 10 == 1 && t % 100 != 11 ? e[2] : e[3]) : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1];
    }
    function i(e, i, r) {
        return e + " " + n(t[r], e, i);
    }
    function r(e, i, r) {
        return n(t[r], e, i);
    }
    e.defineLocale("lv", {
        months: "janv\u0101ris_febru\u0101ris_marts_apr\u012Blis_maijs_j\u016Bnijs_j\u016Blijs_augusts_septembris_oktobris_novembris_decembris".split(
            "_",
        ),
        monthsShort: "jan_feb_mar_apr_mai_j\u016Bn_j\u016Bl_aug_sep_okt_nov_dec".split("_"),
        weekdays: "sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split("_"),
        weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY.",
            LL: "YYYY. [gada] D. MMMM",
            LLL: "YYYY. [gada] D. MMMM, HH:mm",
            LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm",
        },
        calendar: {
            sameDay: "[\u0160odien pulksten] LT",
            nextDay: "[R\u012Bt pulksten] LT",
            nextWeek: "dddd [pulksten] LT",
            lastDay: "[Vakar pulksten] LT",
            lastWeek: "[Pag\u0101ju\u0161\u0101] dddd [pulksten] LT",
            sameElse: "L",
        },
        relativeTime: {
            future: "p\u0113c %s",
            past: "pirms %s",
            s: function (e, t) {
                return t ? "da\u017Eas sekundes" : "da\u017E\u0101m sekund\u0113m";
            },
            ss: i,
            m: r,
            mm: i,
            h: r,
            hh: i,
            d: r,
            dd: i,
            M: r,
            MM: i,
            y: r,
            yy: i,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
    });
})(n(989349));
