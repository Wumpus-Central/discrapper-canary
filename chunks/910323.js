s.d(t, { i: () => A }), s(702841);
var n = s(832712),
    e = s(543465),
    N = s(477427),
    S = s(393432),
    a = s(24873),
    o = s(652215),
    d = s(355097);
function A(i, t) {
    let s = e.Ay.getGuildFlags(i);
    t === a.N9.ALL_MESSAGES
        ? n.A.updateGuildNotificationSettings(
              i,
              { message_notifications: o.orn.ALL_MESSAGES, flags: (0, S.md)(s, d.n3.UNREADS_ALL_MESSAGES) },
              N.fd.PresetAll,
          )
        : t === a.N9.MENTIONS
          ? n.A.updateGuildNotificationSettings(
                i,
                { message_notifications: o.orn.ONLY_MENTIONS, flags: (0, S.md)(s, d.n3.UNREADS_ONLY_MENTIONS) },
                N.fd.PresetMentions,
            )
          : t === a.N9.NOTHING &&
            n.A.updateGuildNotificationSettings(
                i,
                { message_notifications: o.orn.NO_MESSAGES, flags: (0, S.md)(s, d.n3.UNREADS_ONLY_MENTIONS) },
                N.fd.PresetNothing,
            );
}
