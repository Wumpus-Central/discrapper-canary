"use strict";
n.d(t, { J: () => a });
let r = new Map(),
    i = new Map();
class a {
    format(e, t) {
        let n = this.strings.getStringForLocale(e, this.locale);
        return "function" == typeof n ? n(t, this) : n;
    }
    plural(e, t, n = "cardinal") {
        let i = t["=" + e];
        if (i) return "function" == typeof i ? i() : i;
        let a = this.locale + ":" + n,
            s = r.get(a);
        return (
            s || ((s = new Intl.PluralRules(this.locale, { type: n })), r.set(a, s)),
            "function" == typeof (i = t[s.select(e)] || t.other) ? i() : i
        );
    }
    number(e) {
        let t = i.get(this.locale);
        return t || ((t = new Intl.NumberFormat(this.locale)), i.set(this.locale, t)), t.format(e);
    }
    select(e, t) {
        let n = e[t] || e.other;
        return "function" == typeof n ? n() : n;
    }
    constructor(e, t) {
        (this.locale = e), (this.strings = t);
    }
}
