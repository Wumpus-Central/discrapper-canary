n.d(t, { AX: () => l, Gp: () => E, pE: () => o });
var i = n(478437),
    r = n(17928),
    a = n(734057),
    s = n(576705),
    _ = n(818348);
function l(e) {
    var t;
    if (null == e) return !1;
    let n = a.A.getChannel(e.parent_id);
    return (
        (null == n || n?.type === i.r.GUILD_CATEGORY) &&
        ((t = e.type), [i.r.GUILD_TEXT, i.r.GUILD_VOICE, i.r.GROUP_DM, i.r.DM].includes(t))
    );
}
function o(e) {
    return d(e, s.A);
}
function E(e) {
    return (0, r.bG)([a.A, s.A], () => d(a.A.getChannel(e), s.A));
}
function d(e, t) {
    return (
        null != e && void 0 !== e && !!l(e) && (null == e.guild_id || !!t.can(_.xB.USE_EMBEDDED_ACTIVITIES, e)) && !0
    );
}
