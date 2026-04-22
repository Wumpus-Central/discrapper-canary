"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.makeDataFormatters = function (e, t, n = !1) {
        function s(e) {
            return n ? Object.assign(Object.assign({}, e), { localeMatcher: "lookup" }) : e;
        }
        return {
            formatDate(n, a) {
                let o = (0, r.resolveFormatConfigOptions)(t.date, a);
                return i.dataFormatterCache.getDateTimeFormatter(e, s(o)).format(n);
            },
            formatDuration(n, a) {
                let o = (0, r.resolveFormatConfigOptions)(t.time, a);
                return i.dataFormatterCache.getDurationFormatter(e, s(o)).format(n);
            },
            formatNumber(n, a) {
                let o = (0, r.resolveFormatConfigOptions)(t.number, a);
                return i.dataFormatterCache.getNumberFormatter(e, s(o)).format(n);
            },
            formatList(n, a) {
                let o = (0, r.resolveFormatConfigOptions)(t.list, a);
                return i.dataFormatterCache.getListFormatter(e, s(o)).format(n);
            },
            formatListToParts(n, a) {
                let o = (0, r.resolveFormatConfigOptions)(t.list, a),
                    l = {};
                for (let e in n) l["$+/-$placeholder." + e] = n[e];
                return i.dataFormatterCache
                    .getListFormatter(e, s(o))
                    .formatToParts(Object.keys(l))
                    .map((e) => {
                        var t;
                        return (e.value = null != (t = l[e.value]) ? t : e.value);
                    });
            },
            formatRelativeTime(n, a, o) {
                let l = (0, r.resolveFormatConfigOptions)(t.relativeTime, o);
                return i.dataFormatterCache.getRelativeTimeFormatter(e, s(l)).format(n, a);
            },
            formatTime(n, a) {
                let o = (0, r.resolveFormatConfigOptions)(t.time, a);
                return i.dataFormatterCache.getDateTimeFormatter(e, s(o)).format(n);
            },
            getPluralRules: (t) => i.dataFormatterCache.getPluralRules(e, s(t)),
        };
    });
let r = n(296604),
    i = n(731870);
