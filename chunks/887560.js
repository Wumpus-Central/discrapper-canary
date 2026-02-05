e.d(i, { Au: () => E, UD: () => A, bH: () => S, gN: () => N, mA: () => h, qk: () => f });
var n = e(417597),
    r = e(832712),
    l = e(734057),
    s = e(543465),
    a = e(477427),
    o = e(769591),
    d = e(393432),
    g = e(24873),
    c = e(652215),
    u = e(790782),
    _ = e(355097);
function S(t) {
    let i = (0, n.bG)([s.Ay], () => s.Ay.resolveUnreadSetting(t)),
        e = (0, n.bG)([s.Ay], () => s.Ay.resolvedMessageNotifications(t));
    return { unread: i, notification: e, preset: (0, g.jU)(i, e) };
}
function A(t) {
    let i = (0, n.yK)([s.Ay], () =>
            (0, o.ct)(s.Ay.getChannelOverrides(t.guild_id), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1,
            }),
        ),
        [e, r] = (0, n.yK)([s.Ay, l.A], () => {
            let e = l.A.getChannel(t.parent_id);
            return null != e && i.includes(e.id)
                ? ["parent", (0, g.jL)((0, g.jU)(s.Ay.resolveUnreadSetting(e), s.Ay.resolvedMessageNotifications(e)))]
                : [
                      "guild",
                      (0, g.jL)(
                          (0, g.jU)(s.Ay.getGuildUnreadSetting(t.guild_id), s.Ay.getMessageNotifications(t.guild_id)),
                      ),
                  ];
        }, [t.guild_id, t.parent_id, i]);
    return { inherited: !i.includes(t.id), inheritedFrom: e, inheritedPreset: r };
}
function N(t, i, e) {
    let n = s.Ay.getChannelIdFlags(t, i);
    e === g.N9.ALL_MESSAGES
        ? r.A.updateChannelOverrideSettings(
              t,
              i,
              { message_notifications: c.orn.ALL_MESSAGES, flags: (0, d.mD)(n, _.vv.UNREADS_ALL_MESSAGES) },
              a.fd.PresetAll,
          )
        : e === g.N9.MENTIONS
          ? r.A.updateChannelOverrideSettings(
                t,
                i,
                { message_notifications: c.orn.ONLY_MENTIONS, flags: (0, d.mD)(n, _.vv.UNREADS_ONLY_MENTIONS) },
                a.fd.PresetMentions,
            )
          : e === g.N9.NOTHING &&
            r.A.updateChannelOverrideSettings(
                t,
                i,
                { message_notifications: c.orn.NO_MESSAGES, flags: (0, d.mD)(n, _.vv.UNREADS_ONLY_MENTIONS) },
                a.fd.PresetNothing,
            );
}
function E(t, i) {
    r.A.updateChannelOverrideSettings(
        t,
        i,
        { message_notifications: c.orn.NULL, flags: (0, d.PW)(s.Ay.getChannelIdFlags(t, i)) },
        a.fd.PresetDefault,
    );
}
function h(t, i, e) {
    let n = s.Ay.getChannelIdFlags(t, i);
    r.A.updateChannelOverrideSettings(
        t,
        i,
        { flags: (0, d.mD)(n, e === u.e.ALL_MESSAGES ? _.vv.UNREADS_ALL_MESSAGES : _.vv.UNREADS_ONLY_MENTIONS) },
        a.G_.unreads(e),
    );
}
function f(t, i, e) {
    r.A.updateChannelOverrideSettings(t, i, { message_notifications: e }, a.G_.notifications(e));
}
