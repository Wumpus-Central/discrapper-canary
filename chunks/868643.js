t.d(n, {
    a: function () {
        return _;
    },
    h: function () {
        return f;
    }
}),
    t(789020);
var a = t(192379),
    r = t(442837),
    i = t(430198),
    l = t(592125),
    o = t(430824),
    s = t(630388),
    u = t(981631);
let c = u.iLy.CROSSPOSTED | u.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | u.iLy.GUILD_FEED_HIDDEN | u.iLy.HAS_SNAPSHOT | u.iLy.HAS_THREAD | u.iLy.IS_CROSSPOST | u.iLy.IS_VOICE_MESSAGE | u.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | u.iLy.SUPPRESS_EMBEDS | u.iLy.SUPPRESS_NOTIFICATIONS | u.iLy.URGENT;
function d(e) {
    return (!!(e.state !== u.yb.SEND_FAILED && u.V$x.FORWARDABLE.has(e.type)) && null == e.poll && null == e.activity && null == e.call && null == e.activityInstance && 0 === (0, s.Ge)(e.flags, c)) || !1;
}
function f(e) {
    var n;
    if (!d(e)) return !1;
    let t = null === (n = l.Z.getChannel(e.channel_id)) || void 0 === n ? void 0 : n.guild_id;
    return !(null != t && i.Z.isChannelOrThreadParentGated(t, e.channel_id)) && !0;
}
function _(e) {
    let n = (0, r.e7)([o.Z, i.Z, l.Z], () => {
        var n, t;
        if (null == e) return !0;
        let a = null === (n = l.Z.getChannel(e.channel_id)) || void 0 === n ? void 0 : n.guild_id;
        return !!(null != a && (null === (t = o.Z.getGuild(a)) || void 0 === t ? void 0 : t.hasFeature(u.oNc.FORWARDING_DISABLED))) || (null != a && i.Z.isChannelOrThreadParentGated(a, e.channel_id));
    });
    return a.useMemo(() => !n && null != e && d(e), [n, e]);
}
