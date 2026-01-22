n.d(t, { i: () => u }), n(417597);
var i = n(832712),
    r = n(543465),
    s = n(477427),
    l = n(393432),
    a = n(24873),
    o = n(652215),
    c = n(355097);
function u(e, t) {
    let n = r.Ay.getGuildFlags(e);
    t === a.N9.ALL_MESSAGES
        ? i.A.updateGuildNotificationSettings(
              e,
              {
                  message_notifications: o.orn.ALL_MESSAGES,
                  flags: (0, l.md)(n, c.n3.UNREADS_ALL_MESSAGES),
              },
              s.fd.PresetAll,
          )
        : t === a.N9.MENTIONS
          ? i.A.updateGuildNotificationSettings(
                e,
                {
                    message_notifications: o.orn.ONLY_MENTIONS,
                    flags: (0, l.md)(n, c.n3.UNREADS_ONLY_MENTIONS),
                },
                s.fd.PresetMentions,
            )
          : t === a.N9.NOTHING &&
            i.A.updateGuildNotificationSettings(
                e,
                {
                    message_notifications: o.orn.NO_MESSAGES,
                    flags: (0, l.md)(n, c.n3.UNREADS_ONLY_MENTIONS),
                },
                s.fd.PresetNothing,
            );
}
