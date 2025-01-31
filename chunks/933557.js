n.d(t, {
    F6: () => d,
    ZP: () => p,
    le: () => f,
    mA: () => _
}),
    n(47120),
    n(757143);
var i = n(442837),
    r = n(353926),
    a = n(699516),
    s = n(594174),
    o = n(823379),
    l = n(51144),
    u = n(981631),
    c = n(388032);
function d(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    switch (e.type) {
        case u.d4z.DM:
            var a;
            let [s] = e.recipients.map(t.getUser).filter(o.lm);
            if (null == s) return '???';
            let d = n.getNickname(s.id),
                _ = null !== (a = null != d ? d : l.ZP.getName(s)) && void 0 !== a ? a : '???';
            return i ? '@'.concat(_) : _;
        case u.d4z.GROUP_DM:
            if ('' !== e.name) return e.name;
            let p = e.recipients
                .map(t.getUser)
                .filter(o.lm)
                .map((e) => {
                    var t;
                    return null !== (t = n.getNickname(e.id)) && void 0 !== t ? t : l.ZP.getName(e);
                });
            if (p.length > 0) return p.join(', ');
            return c.intl.formatToPlainString(c.t['9Uk8PD'], { name: l.ZP.getName(t.getCurrentUser()) });
        case u.d4z.GUILD_ANNOUNCEMENT:
        case u.d4z.GUILD_TEXT:
        case u.d4z.GUILD_FORUM:
        case u.d4z.GUILD_MEDIA:
            if (i) return '#'.concat(e.name);
            return e.name;
        case u.d4z.PUBLIC_THREAD:
        case u.d4z.PRIVATE_THREAD:
        case u.d4z.ANNOUNCEMENT_THREAD:
        case u.d4z.GUILD_VOICE:
        case u.d4z.GUILD_STAGE_VOICE:
        case u.d4z.GUILD_CATEGORY:
            if (r) return '#"'.concat(f(e.name), '"');
            if (i && e.isThread()) return '"'.concat(e.name, '"');
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
    return (0, i.e7)([s.default, r.Z, a.Z], () => (null == e ? null : d(e, s.default, a.Z, t)));
}
