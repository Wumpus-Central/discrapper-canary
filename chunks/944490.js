"use strict";
r.d(t, { J: () => o });
let n = new Map(),
    i = new Map();
class o {
    format(e, t) {
        let r = this.strings.getStringForLocale(e, this.locale);
        return "function" == typeof r ? r(t, this) : r;
    }
    plural(e, t, r = "cardinal") {
        let i = t["=" + e];
        if (i) return "function" == typeof i ? i() : i;
        let o = this.locale + ":" + r,
            a = n.get(o);
        return (
            a || ((a = new Intl.PluralRules(this.locale, { type: r })), n.set(o, a)),
            "function" == typeof (i = t[a.select(e)] || t.other) ? i() : i
        );
    }
    number(e) {
        let t = i.get(this.locale);
        return t || ((t = new Intl.NumberFormat(this.locale)), i.set(this.locale, t)), t.format(e);
    }
    select(e, t) {
        let r = e[t] || e.other;
        return "function" == typeof r ? r() : r;
    }
    constructor(e, t) {
        (this.locale = e), (this.strings = t);
    }
}
