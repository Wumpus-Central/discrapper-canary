"use strict";
n.d(t, { AT: () => l, ZW: () => d, d6: () => c, gE: () => o, ly: () => _, zA: () => u }), n(284009);
var r = n(317097),
    i = n(176201),
    a = n(9865),
    s = n(661191);
function o(e) {
    return e.sort(l), e;
}
function l(e, t) {
    let n = e.guildId;
    return e.id === n
        ? t.id === n
            ? s.default.compare(e.id, t.id)
            : 1
        : t.id === n
          ? -1
          : e.position !== t.position
            ? t.position - e.position
            : s.default.compare(e.id, t.id);
}
function u(e, t) {
    return 0 > l(e, t);
}
function c(e, t) {
    return e.position !== t.position ? t.position - e.position : s.default.compare(e.id, t.id);
}
function d(e, t) {
    return {
        id: t.id,
        name: t.name,
        guildId: e,
        colorString: 0 !== t.color ? (0, r.Hl)(t.color) : null,
        colorStrings: null != t.colors ? (0, i.K3)(t.colors) : null,
        icon: t.icon ?? null,
        unicodeEmoji: t.unicode_emoji ?? null,
    };
}
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
    if (r.length + n.length === 0) return t;
    let i = { ...t };
    if (null != r) for (let e of r) delete i[e];
    for (let t of n) i[t.id] = a.Wj(e, t);
    return i;
}
