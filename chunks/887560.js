n.d(e, {
    Au: () => N,
    UD: () => S,
    bH: () => A,
    gN: () => f,
    mA: () => E,
    qk: () => h,
}),
    n(896048);
var i = n(417597),
    r = n(832712),
    l = n(734057),
    a = n(543465),
    s = n(477427),
    o = n(769591),
    d = n(393432),
    u = n(24873),
    c = n(652215),
    g = n(790782),
    _ = n(355097);

function A(t) {
    let e = (0, i.bG)([a.Ay], () => a.Ay.resolveUnreadSetting(t)),
        n = (0, i.bG)([a.Ay], () => a.Ay.resolvedMessageNotifications(t));
    return {
        unread: e,
        notification: n,
        preset: (0, u.jU)(e, n),
    };
}

function S(t) {
    let e = (0, i.yK)([a.Ay], () =>
            (0, o.ct)(a.Ay.getChannelOverrides(t.guild_id), {
                ignoreMute: !0,
                ignoreUnreadSetting: !1,
                ignoreNotificationSetting: !1,
            }),
        ),
        [n, r] = (0, i.yK)([a.Ay, l.A], () => {
            let n = l.A.getChannel(t.parent_id);
            return null != n && e.includes(n.id)
                ? ["parent", (0, u.jL)((0, u.jU)(a.Ay.resolveUnreadSetting(n), a.Ay.resolvedMessageNotifications(n)))]
                : [
                      "guild",
                      (0, u.jL)(
                          (0, u.jU)(a.Ay.getGuildUnreadSetting(t.guild_id), a.Ay.getMessageNotifications(t.guild_id)),
                      ),
                  ];
        }, [t.guild_id, t.parent_id, e]);
    return {
        inherited: !e.includes(t.id),
        inheritedFrom: n,
        inheritedPreset: r,
    };
}

function f(t, e, n) {
    let i = a.Ay.getChannelIdFlags(t, e);
    n === u.N9.ALL_MESSAGES
        ? r.A.updateChannelOverrideSettings(
              t,
              e,
              {
                  message_notifications: c.orn.ALL_MESSAGES,
                  flags: (0, d.mD)(i, _.vv.UNREADS_ALL_MESSAGES),
              },
              s.fd.PresetAll,
          )
        : n === u.N9.MENTIONS
          ? r.A.updateChannelOverrideSettings(
                t,
                e,
                {
                    message_notifications: c.orn.ONLY_MENTIONS,
                    flags: (0, d.mD)(i, _.vv.UNREADS_ONLY_MENTIONS),
                },
                s.fd.PresetMentions,
            )
          : n === u.N9.NOTHING &&
            r.A.updateChannelOverrideSettings(
                t,
                e,
                {
                    message_notifications: c.orn.NO_MESSAGES,
                    flags: (0, d.mD)(i, _.vv.UNREADS_ONLY_MENTIONS),
                },
                s.fd.PresetNothing,
            );
}

function N(t, e) {
    r.A.updateChannelOverrideSettings(
        t,
        e,
        {
            message_notifications: c.orn.NULL,
            flags: (0, d.PW)(a.Ay.getChannelIdFlags(t, e)),
        },
        s.fd.PresetDefault,
    );
}

function E(t, e, n) {
    let i = a.Ay.getChannelIdFlags(t, e);
    r.A.updateChannelOverrideSettings(
        t,
        e,
        {
            flags: (0, d.mD)(i, n === g.e.ALL_MESSAGES ? _.vv.UNREADS_ALL_MESSAGES : _.vv.UNREADS_ONLY_MENTIONS),
        },
        s.G_.unreads(n),
    );
}

function h(t, e, n) {
    r.A.updateChannelOverrideSettings(
        t,
        e,
        {
            message_notifications: n,
        },
        s.G_.notifications(n),
    );
}
