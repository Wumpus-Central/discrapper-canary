!(function (e) {
    e(n(989349));
})(function (e) {
    "use strict";
    var t = "vas\xe1rnap h\xe9tfőn kedden szerd\xe1n cs\xfct\xf6rt\xf6k\xf6n p\xe9nteken szombaton".split(" ");
    function n(e, t, n, r) {
        var i = e;
        switch (n) {
            case "s":
                return r || t ? "n\xe9h\xe1ny m\xe1sodperc" : "n\xe9h\xe1ny m\xe1sodperce";
            case "ss":
                return i + (r || t) ? " m\xe1sodperc" : " m\xe1sodperce";
            case "m":
                return "egy" + (r || t ? " perc" : " perce");
            case "mm":
                return i + (r || t ? " perc" : " perce");
            case "h":
                return "egy" + (r || t ? " \xf3ra" : " \xf3r\xe1ja");
            case "hh":
                return i + (r || t ? " \xf3ra" : " \xf3r\xe1ja");
            case "d":
                return "egy" + (r || t ? " nap" : " napja");
            case "dd":
                return i + (r || t ? " nap" : " napja");
            case "M":
                return "egy" + (r || t ? " h\xf3nap" : " h\xf3napja");
            case "MM":
                return i + (r || t ? " h\xf3nap" : " h\xf3napja");
            case "y":
                return "egy" + (r || t ? " \xe9v" : " \xe9ve");
            case "yy":
                return i + (r || t ? " \xe9v" : " \xe9ve");
        }
        return "";
    }
    function r(e) {
        return (e ? "" : "[m\xfalt] ") + "[" + t[this.day()] + "] LT[-kor]";
    }
    return e.defineLocale("hu", {
        months: "janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december".split(
            "_",
        ),
        monthsShort: "jan_feb_m\xe1rc_\xe1pr_m\xe1j_j\xfan_j\xfal_aug_szept_okt_nov_dec".split("_"),
        weekdays: "vas\xe1rnap_h\xe9tfő_kedd_szerda_cs\xfct\xf6rt\xf6k_p\xe9ntek_szombat".split("_"),
        weekdaysShort: "vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo".split("_"),
        weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY. MMMM D.",
            LLL: "YYYY. MMMM D. H:mm",
            LLLL: "YYYY. MMMM D., dddd H:mm",
        },
        meridiemParse: /de|du/i,
        isPM: function (e) {
            return "u" === e.charAt(1).toLowerCase();
        },
        meridiem: function (e, t, n) {
            return e < 12 ? (!0 === n ? "de" : "DE") : !0 === n ? "du" : "DU";
        },
        calendar: {
            sameDay: "[ma] LT[-kor]",
            nextDay: "[holnap] LT[-kor]",
            nextWeek: function () {
                return r.call(this, !0);
            },
            lastDay: "[tegnap] LT[-kor]",
            lastWeek: function () {
                return r.call(this, !1);
            },
            sameElse: "L",
        },
        relativeTime: {
            future: "%s m\xfalva",
            past: "%s",
            s: n,
            ss: n,
            m: n,
            mm: n,
            h: n,
            hh: n,
            d: n,
            dd: n,
            M: n,
            MM: n,
            y: n,
            yy: n,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
    });
});
