"use strict";
n.d(t, { Au: () => f, UD: () => h, bH: () => A, gN: () => I, mA: () => p, qk: () => T });
var i = n(702841),
    r = n(832712),
    a = n(734057),
    s = n(543465),
    l = n(477427),
    o = n(769591),
    d = n(393432),
    c = n(24873),
    u = n(652215),
    _ = n(790782),
    E = n(355097);
function A(e) {
    let t = (0, i.bG)([s.Ay], () => s.Ay.resolveUnreadSetting(e)),
        n = (0, i.bG)([s.Ay], () => s.Ay.resolvedMessageNotifications(e));
    return { unread: t, notification: n, preset: (0, c.jU)(t, n) };
}
function h(e) {
    let t = (0, i.yK)([s.Ay], () =>
            (0, o.ct)(s.Ay.getChannelOverrides(e.guild_id), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1,
            }),
        ),
        [n, r] = (0, i.yK)([s.Ay, a.A], () => {
            let n = a.A.getChannel(e.parent_id);
            return null != n && t.includes(n.id)
                ? ["parent", (0, c.jL)((0, c.jU)(s.Ay.resolveUnreadSetting(n), s.Ay.resolvedMessageNotifications(n)))]
                : [
                      "guild",
                      (0, c.jL)(
                          (0, c.jU)(s.Ay.getGuildUnreadSetting(e.guild_id), s.Ay.getMessageNotifications(e.guild_id)),
                      ),
                  ];
        }, [e.guild_id, e.parent_id, t]);
    return { inherited: !t.includes(e.id), inheritedFrom: n, inheritedPreset: r };
}
function I(e, t, n) {
    let i = s.Ay.getChannelIdFlags(e, t);
    n === c.N9.ALL_MESSAGES
        ? r.A.updateChannelOverrideSettings(
              e,
              t,
              { message_notifications: u.orn.ALL_MESSAGES, flags: (0, d.mD)(i, E.vv.UNREADS_ALL_MESSAGES) },
              l.fd.PresetAll,
          )
        : n === c.N9.MENTIONS
          ? r.A.updateChannelOverrideSettings(
                e,
                t,
                { message_notifications: u.orn.ONLY_MENTIONS, flags: (0, d.mD)(i, E.vv.UNREADS_ONLY_MENTIONS) },
                l.fd.PresetMentions,
            )
          : n === c.N9.NOTHING &&
            r.A.updateChannelOverrideSettings(
                e,
                t,
                { message_notifications: u.orn.NO_MESSAGES, flags: (0, d.mD)(i, E.vv.UNREADS_ONLY_MENTIONS) },
                l.fd.PresetNothing,
            );
}
function f(e, t) {
    r.A.updateChannelOverrideSettings(
        e,
        t,
        { message_notifications: u.orn.NULL, flags: (0, d.PW)(s.Ay.getChannelIdFlags(e, t)) },
        l.fd.PresetDefault,
    );
}
function p(e, t, n) {
    let i = s.Ay.getChannelIdFlags(e, t);
    r.A.updateChannelOverrideSettings(
        e,
        t,
        { flags: (0, d.mD)(i, n === _.e.ALL_MESSAGES ? E.vv.UNREADS_ALL_MESSAGES : E.vv.UNREADS_ONLY_MENTIONS) },
        l.G_.unreads(n),
    );
}
function T(e, t, n) {
    r.A.updateChannelOverrideSettings(e, t, { message_notifications: n }, l.G_.notifications(n));
}
