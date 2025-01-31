t.d(n, {
    a: () => h,
    h: () => _
}),
    t(789020);
var a = t(192379),
    i = t(442837),
    r = t(430198),
    l = t(592125),
    o = t(430824),
    s = t(630388),
    c = t(981631);
let u = c.iLy.CROSSPOSTED | c.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | c.iLy.GUILD_FEED_HIDDEN | c.iLy.HAS_SNAPSHOT | c.iLy.HAS_THREAD | c.iLy.IS_CROSSPOST | c.iLy.IS_VOICE_MESSAGE | c.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | c.iLy.SUPPRESS_EMBEDS | c.iLy.SUPPRESS_NOTIFICATIONS | c.iLy.URGENT | c.iLy.IS_UIKIT_COMPONENTS;
function d(e) {
    return !!(e.state !== c.yb.SEND_FAILED && c.V$x.FORWARDABLE.has(e.type)) && null == e.poll && null == e.activity && null == e.call && null == e.activityInstance && 0 === (0, s.Ge)(e.flags, u);
}
function _(e) {
    var n;
    if (!d(e)) return !1;
    let t = null === (n = l.Z.getChannel(e.channel_id)) || void 0 === n ? void 0 : n.guild_id;
    return !(null != t && r.Z.isChannelOrThreadParentGated(t, e.channel_id));
}
function h(e) {
    let n = (0, i.e7)([o.Z, r.Z, l.Z], () => {
        var n, t;
        if (null == e) return !0;
        let a = null === (n = l.Z.getChannel(e.channel_id)) || void 0 === n ? void 0 : n.guild_id;
        return !!(null != a && (null === (t = o.Z.getGuild(a)) || void 0 === t ? void 0 : t.hasFeature(c.oNc.FORWARDING_DISABLED))) || (null != a && r.Z.isChannelOrThreadParentGated(a, e.channel_id));
    });
    return a.useMemo(() => !n && null != e && d(e), [n, e]);
}
