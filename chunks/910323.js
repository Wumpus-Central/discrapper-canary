i.d(t, { i: () => c }), i(417597);
var n = i(832712),
    l = i(543465),
    s = i(477427),
    r = i(393432),
    a = i(24873),
    d = i(652215),
    o = i(355097);
function c(e, t) {
    let i = l.Ay.getGuildFlags(e);
    t === a.N9.ALL_MESSAGES
        ? n.A.updateGuildNotificationSettings(
              e,
              { message_notifications: d.orn.ALL_MESSAGES, flags: (0, r.md)(i, o.n3.UNREADS_ALL_MESSAGES) },
              s.fd.PresetAll,
          )
        : t === a.N9.MENTIONS
          ? n.A.updateGuildNotificationSettings(
                e,
                { message_notifications: d.orn.ONLY_MENTIONS, flags: (0, r.md)(i, o.n3.UNREADS_ONLY_MENTIONS) },
                s.fd.PresetMentions,
            )
          : t === a.N9.NOTHING &&
            n.A.updateGuildNotificationSettings(
                e,
                { message_notifications: d.orn.NO_MESSAGES, flags: (0, r.md)(i, o.n3.UNREADS_ONLY_MENTIONS) },
                s.fd.PresetNothing,
            );
}
