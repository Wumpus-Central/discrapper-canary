r.d(n, {
    F6: function () {
        return h;
    },
    ZP: function () {
        return g;
    },
    le: function () {
        return _;
    },
    mA: function () {
        return m;
    }
});
var i = r(47120);
var a = r(757143);
var o = r(442837),
    s = r(353926),
    l = r(699516),
    u = r(594174),
    c = r(823379),
    d = r(51144),
    f = r(981631),
    p = r(388032);
function h(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    switch (e.type) {
        case f.d4z.DM:
            var o;
            let [s] = e.recipients.map(n.getUser).filter(c.lm);
            if (null == s) return '???';
            let l = r.getNickname(s.id),
                u = null !== (o = null != l ? l : d.ZP.getName(s)) && void 0 !== o ? o : '???';
            return i ? '@'.concat(u) : u;
        case f.d4z.GROUP_DM:
            if ('' !== e.name) return e.name;
            let h = e.recipients
                .map(n.getUser)
                .filter(c.lm)
                .map((e) => {
                    var n;
                    return null !== (n = r.getNickname(e.id)) && void 0 !== n ? n : d.ZP.getName(e);
                });
            if (h.length > 0) return h.join(', ');
            return p.intl.formatToPlainString(p.t['9Uk8PD'], { name: d.ZP.getName(n.getCurrentUser()) });
        case f.d4z.GUILD_ANNOUNCEMENT:
        case f.d4z.GUILD_TEXT:
        case f.d4z.GUILD_FORUM:
        case f.d4z.GUILD_MEDIA:
            if (i) return '#'.concat(e.name);
            return e.name;
        case f.d4z.PUBLIC_THREAD:
        case f.d4z.PRIVATE_THREAD:
        case f.d4z.ANNOUNCEMENT_THREAD:
        case f.d4z.GUILD_VOICE:
        case f.d4z.GUILD_STAGE_VOICE:
        case f.d4z.GUILD_CATEGORY:
            if (a) return '#"'.concat(_(e.name), '"');
            if (i && e.isThread()) return '"'.concat(e.name, '"');
            return e.name;
        default:
            return e.name;
    }
}
function _(e) {
    return e.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}
function m(e) {
    return e.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
}
function g(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, o.e7)([u.default, s.Z, l.Z], () => (null == e ? null : h(e, u.default, l.Z, n)));
}
