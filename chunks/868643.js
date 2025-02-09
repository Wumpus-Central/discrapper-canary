n.d(t, {
    a: () => _,
    h: () => m
}),
    n(789020);
var i = n(192379),
    l = n(442837),
    a = n(430198),
    r = n(592125),
    s = n(430824),
    o = n(630388),
    c = n(981631);
let d = c.iLy.CROSSPOSTED | c.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | c.iLy.GUILD_FEED_HIDDEN | c.iLy.HAS_SNAPSHOT | c.iLy.HAS_THREAD | c.iLy.IS_CROSSPOST | c.iLy.IS_VOICE_MESSAGE | c.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | c.iLy.SUPPRESS_EMBEDS | c.iLy.SUPPRESS_NOTIFICATIONS | c.iLy.URGENT | c.iLy.IS_COMPONENTS_V2;
function u(e) {
    return !!(e.state !== c.yb.SEND_FAILED && c.V$x.FORWARDABLE.has(e.type)) && null == e.poll && null == e.activity && null == e.call && null == e.activityInstance && 0 === (0, o.Ge)(e.flags, d);
}
function m(e) {
    var t;
    if (!u(e)) return !1;
    let n = null === (t = r.Z.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.guild_id;
    return !(null != n && a.Z.isChannelOrThreadParentGated(n, e.channel_id));
}
function _(e) {
    let t = (0, l.e7)([s.Z, a.Z, r.Z], () => {
        var t, n;
        if (null == e) return !0;
        let i = null === (t = r.Z.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.guild_id;
        return !!(null != i && (null === (n = s.Z.getGuild(i)) || void 0 === n ? void 0 : n.hasFeature(c.oNc.FORWARDING_DISABLED))) || (null != i && a.Z.isChannelOrThreadParentGated(i, e.channel_id));
    });
    return i.useMemo(() => !t && null != e && u(e), [t, e]);
}
