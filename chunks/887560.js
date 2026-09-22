n.d(t, { Au: () => E, bH: () => d, gN: () => o, mA: () => _ });
var s = n(702841),
    a = n(832712);
n(734057);
var i = n(543465),
    S = n(477427);
n(769591);
var l = n(393432),
    r = n(24873),
    A = n(652215),
    N = n(790782),
    g = n(355097);
function d(e) {
    let t = (0, s.bG)([i.Ay], () => i.Ay.resolveUnreadSetting(e)),
        n = (0, s.bG)([i.Ay], () => i.Ay.resolvedMessageNotifications(e));
    return { unread: t, notification: n, preset: (0, r.jU)(t, n) };
}
function o(e, t, n) {
    let s = i.Ay.getChannelIdFlags(e, t);
    n === r.N9.ALL_MESSAGES
        ? a.A.updateChannelOverrideSettings({
              guildId: e,
              channelId: t,
              settings: { message_notifications: A.orn.ALL_MESSAGES, flags: (0, l.mD)(s, g.vv.UNREADS_ALL_MESSAGES) },
              label: S.fd.PresetAll,
          })
        : n === r.N9.HYBRID
          ? a.A.updateChannelOverrideSettings({
                guildId: e,
                channelId: t,
                settings: {
                    message_notifications: A.orn.ONLY_MENTIONS,
                    flags: (0, l.mD)(s, g.vv.UNREADS_ALL_MESSAGES),
                },
                label: S.fd.PresetHybrid,
            })
          : n === r.N9.MENTIONS
            ? a.A.updateChannelOverrideSettings({
                  guildId: e,
                  channelId: t,
                  settings: {
                      message_notifications: A.orn.ONLY_MENTIONS,
                      flags: (0, l.mD)(s, g.vv.UNREADS_ONLY_MENTIONS),
                  },
                  label: S.fd.PresetMentions,
              })
            : n === r.N9.NOTHING &&
              a.A.updateChannelOverrideSettings({
                  guildId: e,
                  channelId: t,
                  settings: {
                      message_notifications: A.orn.NO_MESSAGES,
                      flags: (0, l.mD)(s, g.vv.UNREADS_ONLY_MENTIONS),
                  },
                  label: S.fd.PresetNothing,
              });
}
function E(e, t) {
    a.A.updateChannelOverrideSettings({
        guildId: e,
        channelId: t,
        settings: { message_notifications: A.orn.NULL, flags: (0, l.PW)(i.Ay.getChannelIdFlags(e, t)) },
        label: S.fd.PresetDefault,
    });
}
function _(e, t, n) {
    let s = i.Ay.getChannelIdFlags(e, t);
    a.A.updateChannelOverrideSettings({
        guildId: e,
        channelId: t,
        settings: {
            flags: (0, l.mD)(s, n === N.e.ALL_MESSAGES ? g.vv.UNREADS_ALL_MESSAGES : g.vv.UNREADS_ONLY_MENTIONS),
        },
        label: S.G_.unreads(n),
    });
}
