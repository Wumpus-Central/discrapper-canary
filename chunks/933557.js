n.d(t, {
    F6: () => _,
    ZP: () => m,
    cO: () => f,
    le: () => p,
    mA: () => h
}),
    n(388685),
    n(704826),
    n(35282);
var r = n(442837),
    i = n(353926),
    a = n(699516),
    o = n(594174),
    s = n(823379),
    l = n(51144),
    c = n(981631),
    u = n(388032);
function d(e, t, n) {
    let r = e.recipients
        .map(t.getUser)
        .filter(s.lm)
        .map((e) => {
            var t;
            return null != (t = n.getNickname(e.id)) ? t : l.ZP.getName(e);
        });
    return r.length > 0 ? r.join(', ') : u.NW.formatToPlainString(u.t['9Uk8PD'], { name: l.ZP.getName(t.getCurrentUser()) });
}
function f(e) {
    return (0, r.e7)([o.default, a.Z], () => (null != e && e.isMultiUserDM() ? d(e, o.default, a.Z) : null));
}
function _(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    switch (e.type) {
        case c.d4z.DM:
            var a;
            let [o] = e.recipients.map(t.getUser).filter(s.lm);
            if (null == o) return '???';
            if (o.isProvisional && null != o.globalName) return o.globalName;
            let u = n.getNickname(o.id),
                f = null != (a = null != u ? u : l.ZP.getName(o)) ? a : '???';
            return r ? '@'.concat(f) : f;
        case c.d4z.GROUP_DM:
            if ('' !== e.name) return e.name;
            return d(e, t, n);
        case c.d4z.GUILD_ANNOUNCEMENT:
        case c.d4z.GUILD_TEXT:
        case c.d4z.GUILD_FORUM:
        case c.d4z.GUILD_MEDIA:
            if (r) return '#'.concat(e.name);
            return e.name;
        case c.d4z.PUBLIC_THREAD:
        case c.d4z.PRIVATE_THREAD:
        case c.d4z.ANNOUNCEMENT_THREAD:
        case c.d4z.GUILD_VOICE:
        case c.d4z.GUILD_STAGE_VOICE:
        case c.d4z.GUILD_CATEGORY:
            if (i) return '#"'.concat(p(e.name), '"');
            if (r && e.isThread()) return '"'.concat(e.name, '"');
            return e.name;
        default:
            return e.name;
    }
}
function p(e) {
    return e.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}
function h(e) {
    return e.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, r.e7)([o.default, i.Z, a.Z], () => (null == e ? null : _(e, o.default, a.Z, t)));
}
