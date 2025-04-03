n.d(t, {
    a: () => p,
    h: () => f
}),
    n(789020);
var r = n(192379),
    i = n(442837),
    o = n(430198),
    a = n(592125),
    l = n(430824),
    s = n(630388),
    c = n(981631);
let u = c.iLy.CROSSPOSTED | c.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | c.iLy.GUILD_FEED_HIDDEN | c.iLy.HAS_SNAPSHOT | c.iLy.HAS_THREAD | c.iLy.IS_CROSSPOST | c.iLy.IS_VOICE_MESSAGE | c.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | c.iLy.SUPPRESS_EMBEDS | c.iLy.SUPPRESS_NOTIFICATIONS | c.iLy.URGENT | c.iLy.IS_COMPONENTS_V2;
function d(e) {
    return e.state !== c.yb.SEND_FAILED && !!c.V$x.FORWARDABLE.has(e.type) && null == e.poll && null == e.activity && null == e.call && null == e.activityInstance && 0 === (0, s.Ge)(e.flags, u) && !0;
}
function f(e) {
    var t;
    if (!d(e)) return !1;
    let n = null == (t = a.Z.getChannel(e.channel_id)) ? void 0 : t.guild_id;
    return !(null != n && o.Z.isChannelOrThreadParentGated(n, e.channel_id));
}
function p(e) {
    let t = (0, i.e7)([l.Z, o.Z, a.Z], () => {
        var t, n;
        if (null == e) return !0;
        let r = null == (t = a.Z.getChannel(e.channel_id)) ? void 0 : t.guild_id;
        return !!(null != r && (null == (n = l.Z.getGuild(r)) ? void 0 : n.hasFeature(c.oNc.FORWARDING_DISABLED))) || (null != r && o.Z.isChannelOrThreadParentGated(r, e.channel_id));
    });
    return r.useMemo(() => !t && null != e && d(e), [t, e]);
}
