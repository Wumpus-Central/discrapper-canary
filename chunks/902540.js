"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.makeDataFormatters = s);
let r = n(207536),
    i = n(532466);
function s(e, t, n = !1) {
    function a(e) {
        return n ? Object.assign(Object.assign({}, e), { localeMatcher: "lookup" }) : e;
    }
    return {
        formatDate(n, s) {
            let o = (0, r.resolveFormatConfigOptions)(t.date, s);
            return i.dataFormatterCache.getDateTimeFormatter(e, a(o)).format(n);
        },
        formatDuration(n, s) {
            let o = (0, r.resolveFormatConfigOptions)(t.time, s);
            return i.dataFormatterCache.getDurationFormatter(e, a(o)).format(n);
        },
        formatNumber(n, s) {
            let o = (0, r.resolveFormatConfigOptions)(t.number, s);
            return i.dataFormatterCache.getNumberFormatter(e, a(o)).format(n);
        },
        formatList(n, s) {
            let o = (0, r.resolveFormatConfigOptions)(t.list, s);
            return i.dataFormatterCache.getListFormatter(e, a(o)).format(n);
        },
        formatListToParts(n, s) {
            let o = (0, r.resolveFormatConfigOptions)(t.list, s),
                l = {};
            for (let e in n) l["$+/-$placeholder." + e] = n[e];
            return i.dataFormatterCache
                .getListFormatter(e, a(o))
                .formatToParts(Object.keys(l))
                .map((e) => {
                    var t;
                    return (e.value = null != (t = l[e.value]) ? t : e.value);
                });
        },
        formatRelativeTime(n, s, o) {
            let l = (0, r.resolveFormatConfigOptions)(t.relativeTime, o);
            return i.dataFormatterCache.getRelativeTimeFormatter(e, a(l)).format(n, s);
        },
        formatTime(n, s) {
            let o = (0, r.resolveFormatConfigOptions)(t.time, s);
            return i.dataFormatterCache.getDateTimeFormatter(e, a(o)).format(n);
        },
        getPluralRules: (t) => i.dataFormatterCache.getPluralRules(e, a(t)),
    };
}
