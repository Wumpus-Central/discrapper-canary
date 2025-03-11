n.d(t, {
    F6: () => d,
    ZP: () => p,
    le: () => f,
    mA: () => _
}),
    n(47120),
    n(757143),
    n(301563);
var r = n(442837),
    i = n(353926),
    o = n(699516),
    a = n(594174),
    s = n(823379),
    l = n(51144),
    c = n(981631),
    u = n(388032);
function d(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    switch (e.type) {
        case c.d4z.DM:
            var o;
            let [a] = e.recipients.map(t.getUser).filter(s.lm);
            if (null == a) return '???';
            if (a.isProvisional && null != a.globalName) return a.globalName;
            let d = n.getNickname(a.id),
                _ = null !== (o = null != d ? d : l.ZP.getName(a)) && void 0 !== o ? o : '???';
            return r ? '@'.concat(_) : _;
        case c.d4z.GROUP_DM:
            if ('' !== e.name) return e.name;
            let p = e.recipients
                .map(t.getUser)
                .filter(s.lm)
                .map((e) => {
                    var t;
                    return null !== (t = n.getNickname(e.id)) && void 0 !== t ? t : l.ZP.getName(e);
                });
            if (p.length > 0) return p.join(', ');
            return u.NW.formatToPlainString(u.t['9Uk8PD'], { name: l.ZP.getName(t.getCurrentUser()) });
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
            if (i) return '#"'.concat(f(e.name), '"');
            if (r && e.isThread()) return '"'.concat(e.name, '"');
            return e.name;
        default:
            return e.name;
    }
}
function f(e) {
    return e.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}
function _(e) {
    return e.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, r.e7)([a.default, i.Z, o.Z], () => (null == e ? null : d(e, a.default, o.Z, t)));
}
