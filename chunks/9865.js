n.d(t, { Wj: () => d, cH: () => E, hd: () => o, j_: () => u, lj: () => _, np: () => c }), n(938796);
var i = n(136722),
    r = n(317097),
    a = n(867051),
    s = n(176201),
    l = n(34457);
function o(e, t) {
    let n = {};
    for (let i of t) n[i.id] = d(e, i);
    return n;
}
function d(e, t) {
    return c({
        id: t.id,
        name: t.name,
        guildId: e,
        permissions: i.iu(t.permissions),
        mentionable: t.mentionable,
        position: t.position,
        color: t.color,
        colorString: 0 !== t.color ? (0, r.Hl)(t.color) : null,
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
    return (0, a.yE)(l.xh, e);
}
function u(e, t, n) {
    if ("full_sync" === t.op) return o(e, t.items);
    let i = { ...n };
    for (let e of t.deletes) delete i[e];
    for (let n of t.writes) i[n.id] = d(e, n);
    return i;
}
function _(e, t) {
    let n = {};
    for (let l in t) {
        var a;
        n[l] = c({
            id: (a = t[l]).id,
            name: a.name,
            guildId: e,
            permissions: i.iu(a.permissions),
            mentionable: a.mentionable,
            position: a.position,
            color: a.color,
            colorString: null != a.color && 0 !== a.color ? (0, r.Hl)(a.color) : null,
            colors: a.colors ?? null,
            colorStrings: null != a.colors ? (0, s.K3)(a.colors) : null,
            hoist: a.hoist,
            managed: a.managed ?? !1,
            tags: a.tags ?? {},
            icon: a.icon,
            unicodeEmoji: a.unicodeEmoji,
            flags: a.flags ?? 0,
            description: a.description ?? null,
            version: a.version,
        });
    }
    return n;
}
function E(e) {
    let t = {};
    for (let n in e) {
        let i = e[n];
        t[n] = { ...i, permissions: i.permissions.toString() };
    }
    return t;
}
