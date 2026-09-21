t.d(n, { Au: () => E, UD: () => u, bH: () => _, gN: () => f, mA: () => c, qk: () => v });
var i = t(702841),
    s = t(832712),
    a = t(734057),
    r = t(543465),
    d = t(477427),
    g = t(769591),
    o = t(393432),
    A = t(24873),
    S = t(652215),
    l = t(790782),
    N = t(355097);
function _(e) {
    let n = (0, i.bG)([r.Ay], () => r.Ay.resolveUnreadSetting(e)),
        t = (0, i.bG)([r.Ay], () => r.Ay.resolvedMessageNotifications(e));
    return { unread: n, notification: t, preset: (0, A.jU)(n, t) };
}
function u(e) {
    let n = (0, i.yK)([r.Ay], () =>
            (0, g.ct)(r.Ay.getChannelOverrides(e.guild_id), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1,
            }),
        ),
        [t, s] = (0, i.yK)(
            [r.Ay, a.A],
            () => {
                let t = a.A.getChannel(e.parent_id);
                return null != t && n.includes(t.id)
                    ? [
                          "parent",
                          (0, A.jL)((0, A.hJ)(r.Ay.resolveUnreadSetting(t), r.Ay.resolvedMessageNotifications(t))),
                      ]
                    : [
                          "guild",
                          (0, A.jL)(
                              (0, A.hJ)(
                                  r.Ay.getGuildUnreadSetting(e.guild_id),
                                  r.Ay.getMessageNotifications(e.guild_id),
                              ),
                          ),
                      ];
            },
            [e.guild_id, e.parent_id, n],
        );
    return { inherited: !n.includes(e.id), inheritedFrom: t, inheritedPreset: s };
}
function f(e, n, t) {
    let i = r.Ay.getChannelIdFlags(e, n);
    t === A.N9.ALL_MESSAGES
        ? s.A.updateChannelOverrideSettings(
              e,
              n,
              { message_notifications: S.orn.ALL_MESSAGES, flags: (0, o.mD)(i, N.vv.UNREADS_ALL_MESSAGES) },
              d.fd.PresetAll,
          )
        : t === A.N9.HYBRID
          ? s.A.updateChannelOverrideSettings(
                e,
                n,
                { message_notifications: S.orn.ONLY_MENTIONS, flags: (0, o.mD)(i, N.vv.UNREADS_ALL_MESSAGES) },
                d.fd.PresetHybrid,
            )
          : t === A.N9.MENTIONS
            ? s.A.updateChannelOverrideSettings(
                  e,
                  n,
                  { message_notifications: S.orn.ONLY_MENTIONS, flags: (0, o.mD)(i, N.vv.UNREADS_ONLY_MENTIONS) },
                  d.fd.PresetMentions,
              )
            : t === A.N9.NOTHING &&
              s.A.updateChannelOverrideSettings(
                  e,
                  n,
                  { message_notifications: S.orn.NO_MESSAGES, flags: (0, o.mD)(i, N.vv.UNREADS_ONLY_MENTIONS) },
                  d.fd.PresetNothing,
              );
}
function E(e, n) {
    s.A.updateChannelOverrideSettings(
        e,
        n,
        { message_notifications: S.orn.NULL, flags: (0, o.PW)(r.Ay.getChannelIdFlags(e, n)) },
        d.fd.PresetDefault,
    );
}
function c(e, n, t) {
    let i = r.Ay.getChannelIdFlags(e, n);
    s.A.updateChannelOverrideSettings(
        e,
        n,
        { flags: (0, o.mD)(i, t === l.e.ALL_MESSAGES ? N.vv.UNREADS_ALL_MESSAGES : N.vv.UNREADS_ONLY_MENTIONS) },
        d.G_.unreads(t),
    );
}
function v(e, n, t) {
    s.A.updateChannelOverrideSettings(e, n, { message_notifications: t }, d.G_.notifications(t));
}
