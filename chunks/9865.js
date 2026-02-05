"use strict";
n.d(t, { Wj: () => u, cH: () => f, hd: () => l, lj: () => _, np: () => c }), n(938796);
var r = n(136722),
    i = n(317097),
    a = n(867051),
    s = n(176201),
    o = n(34457);
function l(e, t) {
    let n = {};
    for (let r of t) n[r.id] = u(e, r);
    return n;
}
function u(e, t) {
    return c({
        id: t.id,
        name: t.name,
        guildId: e,
        permissions: r.iu(t.permissions),
        mentionable: t.mentionable,
        position: t.position,
        color: t.color,
        colorString: 0 !== t.color ? (0, i.Hl)(t.color) : null,
        colors: t.colors ?? null,
        colorStrings: null != t.colors ? (0, s.K3)(t.colors) : null,
        hoist: t.hoist,
        managed: t.managed ?? !1,
        tags: t.tags ?? {},
        icon: t.icon,
        unicodeEmoji: t.unicode_emoji,
        flags: t.flags ?? 0,
        description: t.description ?? null,
        version: t.version,
    });
}
function c(e) {
    return (0, a.yE)(o.xh, e);
}
function d(e, t) {
    return c({
        id: t.id,
        name: t.name,
        guildId: e,
        permissions: r.iu(t.permissions),
        mentionable: t.mentionable,
        position: t.position,
        color: t.color,
        colorString: null != t.color && 0 !== t.color ? (0, i.Hl)(t.color) : null,
        colors: t.colors ?? null,
        colorStrings: null != t.colors ? (0, s.K3)(t.colors) : null,
        hoist: t.hoist,
        managed: t.managed ?? !1,
        tags: t.tags ?? {},
        icon: t.icon,
        unicodeEmoji: t.unicodeEmoji,
        flags: t.flags ?? 0,
        description: t.description ?? null,
        version: t.version,
    });
}
function _(e, t) {
    let n = {};
    for (let r in t) n[r] = d(e, t[r]);
    return n;
}
function f(e) {
    let t = {};
    for (let n in e) {
        let r = e[n];
        t[n] = { ...r, permissions: r.permissions.toString() };
    }
    return t;
}
