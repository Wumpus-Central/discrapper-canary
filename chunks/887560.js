t.d(n, { Au: () => E, bH: () => o, gN: () => l, mA: () => _ });
var s = t(702841),
    a = t(832712);
t(734057);
var i = t(543465),
    S = t(477427);
t(769591);
var r = t(393432),
    A = t(24873),
    N = t(652215),
    d = t(790782),
    g = t(355097);
function o(e) {
    let n = (0, s.bG)([i.Ay], () => i.Ay.resolveUnreadSetting(e)),
        t = (0, s.bG)([i.Ay], () => i.Ay.resolvedMessageNotifications(e));
    return { unread: n, notification: t, preset: (0, A.jU)(n, t) };
}
function l(e, n, t) {
    let s = i.Ay.getChannelIdFlags(e, n);
    t === A.N9.ALL_MESSAGES
        ? a.A.updateChannelOverrideSettings(
              e,
              n,
              { message_notifications: N.orn.ALL_MESSAGES, flags: (0, r.mD)(s, g.vv.UNREADS_ALL_MESSAGES) },
              S.fd.PresetAll,
          )
        : t === A.N9.HYBRID
          ? a.A.updateChannelOverrideSettings(
                e,
                n,
                { message_notifications: N.orn.ONLY_MENTIONS, flags: (0, r.mD)(s, g.vv.UNREADS_ALL_MESSAGES) },
                S.fd.PresetHybrid,
            )
          : t === A.N9.MENTIONS
            ? a.A.updateChannelOverrideSettings(
                  e,
                  n,
                  { message_notifications: N.orn.ONLY_MENTIONS, flags: (0, r.mD)(s, g.vv.UNREADS_ONLY_MENTIONS) },
                  S.fd.PresetMentions,
              )
            : t === A.N9.NOTHING &&
              a.A.updateChannelOverrideSettings(
                  e,
                  n,
                  { message_notifications: N.orn.NO_MESSAGES, flags: (0, r.mD)(s, g.vv.UNREADS_ONLY_MENTIONS) },
                  S.fd.PresetNothing,
              );
}
function E(e, n) {
    a.A.updateChannelOverrideSettings(
        e,
        n,
        { message_notifications: N.orn.NULL, flags: (0, r.PW)(i.Ay.getChannelIdFlags(e, n)) },
        S.fd.PresetDefault,
    );
}
function _(e, n, t) {
    let s = i.Ay.getChannelIdFlags(e, n);
    a.A.updateChannelOverrideSettings(
        e,
        n,
        { flags: (0, r.mD)(s, t === d.e.ALL_MESSAGES ? g.vv.UNREADS_ALL_MESSAGES : g.vv.UNREADS_ONLY_MENTIONS) },
        S.G_.unreads(t),
    );
}
