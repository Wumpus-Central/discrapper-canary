!(function (e) {
    e(n(989349));
})(function (e) {
    return e.defineLocale("se", {
        months: "ođđajagem\xe1nnu_guovvam\xe1nnu_njukčam\xe1nnu_cuoŋom\xe1nnu_miessem\xe1nnu_geassem\xe1nnu_suoidnem\xe1nnu_borgem\xe1nnu_čakčam\xe1nnu_golggotm\xe1nnu_sk\xe1bmam\xe1nnu_juovlam\xe1nnu".split(
            "_",
        ),
        monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_sk\xe1b_juov".split("_"),
        weekdays: "sotnabeaivi_vuoss\xe1rga_maŋŋeb\xe1rga_gaskavahkku_duorastat_bearjadat_l\xe1vvardat".split("_"),
        weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_l\xe1v".split("_"),
        weekdaysMin: "s_v_m_g_d_b_L".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "MMMM D. [b.] YYYY",
            LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
            LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm",
        },
        calendar: {
            sameDay: "[otne ti] LT",
            nextDay: "[ihttin ti] LT",
            nextWeek: "dddd [ti] LT",
            lastDay: "[ikte ti] LT",
            lastWeek: "[ovddit] dddd [ti] LT",
            sameElse: "L",
        },
        relativeTime: {
            future: "%s geažes",
            past: "maŋit %s",
            s: "moadde sekunddat",
            ss: "%d sekunddat",
            m: "okta minuhta",
            mm: "%d minuhtat",
            h: "okta diimmu",
            hh: "%d diimmut",
            d: "okta beaivi",
            dd: "%d beaivvit",
            M: "okta m\xe1nnu",
            MM: "%d m\xe1nut",
            y: "okta jahki",
            yy: "%d jagit",
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
    });
});
