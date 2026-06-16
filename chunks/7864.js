"use strict";
n.d(t, { AT: () => l, ZW: () => d, d6: () => c, gE: () => o, ly: () => _, zA: () => u }), n(284009);
var i = n(317097),
    r = n(176201),
    s = n(9865),
    a = n(935208);
function o(e) {
    return e.sort(l), e;
}
function l(e, t) {
    let n = e.guildId;
    return e.id === n
        ? t.id === n
            ? a.default.compare(e.id, t.id)
            : 1
        : t.id === n
          ? -1
          : e.position !== t.position
            ? t.position - e.position
            : a.default.compare(e.id, t.id);
}
function u(e, t) {
    return 0 > l(e, t);
}
function c(e, t) {
    return e.position !== t.position ? t.position - e.position : a.default.compare(e.id, t.id);
}
function d(e, t) {
    return {
        id: t.id,
        name: t.name,
        guildId: e,
        colorString: 0 !== t.color ? (0, i.Hl)(t.color) : null,
        colorStrings: null != t.colors ? (0, r.K3)(t.colors) : null,
        icon: t.icon ?? null,
        unicodeEmoji: t.unicode_emoji ?? null,
    };
}
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
    if (i.length + n.length === 0) return t;
    let r = { ...t };
    if (null != i) for (let e of i) delete r[e];
    for (let t of n) r[t.id] = s.Wj(e, t);
    return r;
}
