"use strict";
n.d(t, { Wj: () => u, cH: () => f, hd: () => l, j_: () => c, lj: () => _, np: () => d }), n(938796);
var r = n(136722),
    i = n(317097),
    s = n(867051),
    a = n(176201),
    o = n(34457);
function l(e, t) {
    let n = {};
    for (let r of t) n[r.id] = u(e, r);
    return n;
}
function u(e, t) {
    return d({
        id: t.id,
        name: t.name,
        guildId: e,
        permissions: r.iu(t.permissions),
        mentionable: t.mentionable,
        position: t.position,
        color: t.color,
        colorString: 0 !== t.color ? (0, i.Hl)(t.color) : null,
        colors: t.colors ?? null,
        colorStrings: null != t.colors ? (0, a.K3)(t.colors) : null,
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
function d(e) {
    return (0, s.yE)(o.xh, e);
}
function c(e, t, n) {
    if ("full_sync" === t.op) return l(e, t.items);
    let r = { ...n };
    for (let e of t.deletes) delete r[e];
    for (let n of t.writes) r[n.id] = u(e, n);
    return r;
}
function _(e, t) {
    let n = {};
    for (let o in t) {
        var s;
        n[o] = d({
            id: (s = t[o]).id,
            name: s.name,
            guildId: e,
            permissions: r.iu(s.permissions),
            mentionable: s.mentionable,
            position: s.position,
            color: s.color,
            colorString: null != s.color && 0 !== s.color ? (0, i.Hl)(s.color) : null,
            colors: s.colors ?? null,
            colorStrings: null != s.colors ? (0, a.K3)(s.colors) : null,
            hoist: s.hoist,
            managed: s.managed ?? !1,
            tags: s.tags ?? {},
            icon: s.icon,
            unicodeEmoji: s.unicodeEmoji,
            flags: s.flags ?? 0,
            description: s.description ?? null,
            version: s.version,
        });
    }
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
