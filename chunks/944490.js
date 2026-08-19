"use strict";
r.d(t, { J: () => i });
let n = new Map(),
    o = new Map();
class i {
    format(e, t) {
        let r = this.strings.getStringForLocale(e, this.locale);
        return "function" == typeof r ? r(t, this) : r;
    }
    plural(e, t, r = "cardinal") {
        let o = t["=" + e];
        if (o) return "function" == typeof o ? o() : o;
        let i = this.locale + ":" + r,
            a = n.get(i);
        return (
            a || ((a = new Intl.PluralRules(this.locale, { type: r })), n.set(i, a)),
            "function" == typeof (o = t[a.select(e)] || t.other) ? o() : o
        );
    }
    number(e) {
        let t = o.get(this.locale);
        return t || ((t = new Intl.NumberFormat(this.locale)), o.set(this.locale, t)), t.format(e);
    }
    select(e, t) {
        let r = e[t] || e.other;
        return "function" == typeof r ? r() : r;
    }
    constructor(e, t) {
        (this.locale = e), (this.strings = t);
    }
}
