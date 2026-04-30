n.d(t, { AX: () => o, Gp: () => c, pE: () => d });
var i = n(478437),
    a = n(17928),
    r = n(734057),
    s = n(576705),
    l = n(818348);
function o(e) {
    var t;
    if (null == e) return !1;
    let n = r.A.getChannel(e.parent_id);
    return (
        (null == n || n?.type === i.r.GUILD_CATEGORY) &&
        ((t = e.type), [i.r.GUILD_TEXT, i.r.GUILD_VOICE, i.r.GROUP_DM, i.r.DM].includes(t))
    );
}
function d(e) {
    return _(e, s.A);
}
function c(e) {
    return (0, a.bG)([r.A, s.A], () => _(r.A.getChannel(e), s.A));
}
function _(e, t) {
    return (
        null != e && void 0 !== e && !!o(e) && (null == e.guild_id || !!t.can(l.xB.USE_EMBEDDED_ACTIVITIES, e)) && !0
    );
}
