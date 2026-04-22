"use strict";
n.d(t, { x: () => i });
let r = (e, t) => {
    let n = e instanceof Map ? e : new Map(e.entries()),
        r = t instanceof Map ? t : new Map(t.entries());
    if (n.size !== r.size) return !1;
    for (let [e, t] of n) if (!r.has(e) || !Object.is(t, r.get(e))) return !1;
    return !0;
};
function i(e, t) {
    if (Object.is(e, t)) return !0;
    if (
        "object" != typeof e ||
        null === e ||
        "object" != typeof t ||
        null === t ||
        Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
    )
        return !1;
    if (Symbol.iterator in e && Symbol.iterator in t) {
        if ("entries" in e && "entries" in t) return r(e, t);
        let n = e[Symbol.iterator](),
            i = t[Symbol.iterator](),
            s = n.next(),
            a = i.next();
        for (; !s.done && !a.done; ) {
            if (!Object.is(s.value, a.value)) return !1;
            (s = n.next()), (a = i.next());
        }
        return !!s.done && !!a.done;
    }
    return r({ entries: () => Object.entries(e) }, { entries: () => Object.entries(t) });
}
