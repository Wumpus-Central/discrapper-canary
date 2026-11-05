!(function (e) {
    var n = [
            /^led/i,
            /^\xfano/i,
            /^b\u0159e/i,
            /^dub/i,
            /^kv\u011b/i,
            /^(\u010dvn|\u010derven$|\u010dervna)/i,
            /^(\u010dvc|\u010dervenec|\u010dervence)/i,
            /^srp/i,
            /^z\xe1\u0159/i,
            /^\u0159\xedj/i,
            /^lis/i,
            /^pro/i,
        ],
        r =
            /^(leden|\xfanor|b\u0159ezen|duben|kv\u011bten|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|z\xe1\u0159\xed|\u0159\xedjen|listopad|prosinec|led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i;
    function s(e) {
        return e > 1 && e < 5 && 1 != ~~(e / 10);
    }
    function t(e, n, r, t) {
        var a = e + " ";
        switch (r) {
            case "s":
                return n || t ? "p\xe1r sekund" : "p\xe1r sekundami";
            case "ss":
                if (n || t) return a + (s(e) ? "sekundy" : "sekund");
                return a + "sekundami";
            case "m":
                return n ? "minuta" : t ? "minutu" : "minutou";
            case "mm":
                if (n || t) return a + (s(e) ? "minuty" : "minut");
                return a + "minutami";
            case "h":
                return n ? "hodina" : t ? "hodinu" : "hodinou";
            case "hh":
                if (n || t) return a + (s(e) ? "hodiny" : "hodin");
                return a + "hodinami";
            case "d":
                return n || t ? "den" : "dnem";
            case "dd":
                if (n || t) return a + (s(e) ? "dny" : "dn\xed");
                return a + "dny";
            case "M":
                return n || t ? "m\u011Bs\xedc" : "m\u011Bs\xedcem";
            case "MM":
                if (n || t) return a + (s(e) ? "m\u011Bs\xedce" : "m\u011Bs\xedc\u016F");
                return a + "m\u011Bs\xedci";
            case "y":
                return n || t ? "rok" : "rokem";
            case "yy":
                if (n || t) return a + (s(e) ? "roky" : "let");
                return a + "lety";
        }
    }
    e.defineLocale("cs", {
        months: {
            standalone:
                "leden_\xfanor_b\u0159ezen_duben_kv\u011Bten_\u010Derven_\u010Dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split(
                    "_",
                ),
            format: "ledna_\xfanora_b\u0159ezna_dubna_kv\u011Btna_\u010Dervna_\u010Dervence_srpna_z\xe1\u0159\xed_\u0159\xedjna_listopadu_prosince".split(
                "_",
            ),
            isFormat: /DD?[o.]?(\[[^\[\]]*\]|\s)+MMMM/,
        },
        monthsShort: "led_\xfano_b\u0159e_dub_kv\u011B_\u010Dvn_\u010Dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split(
            "_",
        ),
        monthsRegex: r,
        monthsShortRegex: r,
        monthsStrictRegex:
            /^(leden|ledna|\xfanora|\xfanor|b\u0159ezen|b\u0159ezna|duben|dubna|kv\u011bten|kv\u011btna|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|srpna|z\xe1\u0159\xed|\u0159\xedjen|\u0159\xedjna|listopadu|listopad|prosinec|prosince)/i,
        monthsShortStrictRegex:
            /^(led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i,
        monthsParse: n,
        longMonthsParse: n,
        shortMonthsParse: n,
        weekdays: "ned\u011Ble_pond\u011Bl\xed_\xfater\xfd_st\u0159eda_\u010Dtvrtek_p\xe1tek_sobota".split("_"),
        weekdaysShort: "ne_po_\xfat_st_\u010Dt_p\xe1_so".split("_"),
        weekdaysMin: "ne_po_\xfat_st_\u010Dt_p\xe1_so".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm",
            l: "D. M. YYYY",
        },
        calendar: {
            sameDay: "[dnes v] LT",
            nextDay: "[z\xedtra v] LT",
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[v ned\u011Bli v] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [v] LT";
                    case 3:
                        return "[ve st\u0159edu v] LT";
                    case 4:
                        return "[ve \u010Dtvrtek v] LT";
                    case 5:
                        return "[v p\xe1tek v] LT";
                    case 6:
                        return "[v sobotu v] LT";
                }
            },
            lastDay: "[v\u010Dera v] LT",
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[minulou ned\u011Bli v] LT";
                    case 1:
                    case 2:
                        return "[minul\xe9] dddd [v] LT";
                    case 3:
                        return "[minulou st\u0159edu v] LT";
                    case 4:
                    case 5:
                        return "[minul\xfd] dddd [v] LT";
                    case 6:
                        return "[minulou sobotu v] LT";
                }
            },
            sameElse: "L",
        },
        relativeTime: {
            future: "za %s",
            past: "p\u0159ed %s",
            s: t,
            ss: t,
            m: t,
            mm: t,
            h: t,
            hh: t,
            d: t,
            dd: t,
            M: t,
            MM: t,
            y: t,
            yy: t,
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 },
    });
})(r(536637));
