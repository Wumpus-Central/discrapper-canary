"use strict";
n.d(t, { Au: () => m, UD: () => p, bH: () => h, gN: () => E, mA: () => g, qk: () => A });
var i = n(702841),
    r = n(832712),
    s = n(734057),
    a = n(543465),
    o = n(477427),
    l = n(769591),
    u = n(393432),
    c = n(24873),
    d = n(652215),
    _ = n(790782),
    f = n(355097);
function h(e) {
    let t = (0, i.bG)([a.Ay], () => a.Ay.resolveUnreadSetting(e)),
        n = (0, i.bG)([a.Ay], () => a.Ay.resolvedMessageNotifications(e));
    return { unread: t, notification: n, preset: (0, c.jU)(t, n) };
}
function p(e) {
    let t = (0, i.yK)([a.Ay], () =>
            (0, l.ct)(a.Ay.getChannelOverrides(e.guild_id), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1,
            }),
        ),
        [n, r] = (0, i.yK)([a.Ay, s.A], () => {
            let n = s.A.getChannel(e.parent_id);
            return null != n && t.includes(n.id)
                ? ["parent", (0, c.jL)((0, c.jU)(a.Ay.resolveUnreadSetting(n), a.Ay.resolvedMessageNotifications(n)))]
                : [
                      "guild",
                      (0, c.jL)(
                          (0, c.jU)(a.Ay.getGuildUnreadSetting(e.guild_id), a.Ay.getMessageNotifications(e.guild_id)),
                      ),
                  ];
        }, [e.guild_id, e.parent_id, t]);
    return { inherited: !t.includes(e.id), inheritedFrom: n, inheritedPreset: r };
}
function E(e, t, n) {
    let i = a.Ay.getChannelIdFlags(e, t);
    n === c.N9.ALL_MESSAGES
        ? r.A.updateChannelOverrideSettings(
              e,
              t,
              { message_notifications: d.orn.ALL_MESSAGES, flags: (0, u.mD)(i, f.vv.UNREADS_ALL_MESSAGES) },
              o.fd.PresetAll,
          )
        : n === c.N9.MENTIONS
          ? r.A.updateChannelOverrideSettings(
                e,
                t,
                { message_notifications: d.orn.ONLY_MENTIONS, flags: (0, u.mD)(i, f.vv.UNREADS_ONLY_MENTIONS) },
                o.fd.PresetMentions,
            )
          : n === c.N9.NOTHING &&
            r.A.updateChannelOverrideSettings(
                e,
                t,
                { message_notifications: d.orn.NO_MESSAGES, flags: (0, u.mD)(i, f.vv.UNREADS_ONLY_MENTIONS) },
                o.fd.PresetNothing,
            );
}
function m(e, t) {
    r.A.updateChannelOverrideSettings(
        e,
        t,
        { message_notifications: d.orn.NULL, flags: (0, u.PW)(a.Ay.getChannelIdFlags(e, t)) },
        o.fd.PresetDefault,
    );
}
function g(e, t, n) {
    let i = a.Ay.getChannelIdFlags(e, t);
    r.A.updateChannelOverrideSettings(
        e,
        t,
        { flags: (0, u.mD)(i, n === _.e.ALL_MESSAGES ? f.vv.UNREADS_ALL_MESSAGES : f.vv.UNREADS_ONLY_MENTIONS) },
        o.G_.unreads(n),
    );
}
function A(e, t, n) {
    r.A.updateChannelOverrideSettings(e, t, { message_notifications: n }, o.G_.notifications(n));
}
