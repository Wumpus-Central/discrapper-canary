"use strict";
n.d(t, { J: () => s });
let i = new Map(),
    r = new Map();
class s {
    format(e, t) {
        let n = this.strings.getStringForLocale(e, this.locale);
        return "function" == typeof n ? n(t, this) : n;
    }
    plural(e, t, n = "cardinal") {
        let r = t["=" + e];
        if (r) return "function" == typeof r ? r() : r;
        let s = this.locale + ":" + n,
            a = i.get(s);
        return (
            a || ((a = new Intl.PluralRules(this.locale, { type: n })), i.set(s, a)),
            "function" == typeof (r = t[a.select(e)] || t.other) ? r() : r
        );
    }
    number(e) {
        let t = r.get(this.locale);
        return t || ((t = new Intl.NumberFormat(this.locale)), r.set(this.locale, t)), t.format(e);
    }
    select(e, t) {
        let n = e[t] || e.other;
        return "function" == typeof n ? n() : n;
    }
    constructor(e, t) {
        (this.locale = e), (this.strings = t);
    }
}
