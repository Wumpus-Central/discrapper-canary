var r = n(149468),
    i = n(741534),
    a = n(734057),
    o = n(129230),
    u = n(652215);
function l(e) {
    return a.A.getChannel(e)?.guild_id;
}
n.d(
    t,
    {},
    {
        HJ: function (e) {
            let { channelId: t, userId: n } = e;
            r.Ay.trackWithMetadata(u.HAw.E2EE_USER_VERIFICATION_VIEWED, {
                channel_id: t,
                guild_id: l(t),
                ...(0, i.UI)({ userId: n }),
            });
        },
        Hb: function (e) {
            let { channelId: t, userId: n } = e;
            r.Ay.trackWithMetadata(u.HAw.E2EE_USER_VERIFICATION_CODE_COPIED, {
                channel_id: t,
                guild_id: l(t),
                ...(0, i.UI)({ userId: n }),
            });
        },
        Hg: function (e) {
            let { channelId: t, selectedTab: n } = e;
            r.Ay.trackWithMetadata(u.HAw.RTC_PANEL_VIEWED, { channel_id: t, guild_id: l(t), selected_tab: n });
        },
        Jk: function () {
            o.default.track(u.HAw.E2EE_SETTINGS_DEVICE_DELETE);
        },
        XS: function (e) {
            o.default.track(u.HAw.E2EE_PUBLIC_KEY_MISMATCH, { key_version: `${e}` });
        },
        YT: function () {
            o.default.track(u.HAw.E2EE_SETTINGS_USER_DELETE);
        },
        cw: function (e) {
            let { channelId: t, userId: n, analyticsLocation: a } = e;
            r.Ay.trackWithMetadata(u.HAw.E2EE_USER_VERIFIED, {
                channel_id: t,
                guild_id: l(t),
                location: a,
                ...(0, i.UI)({ userId: n }),
            });
        },
        k0: function (e) {
            let { channelId: t } = e;
            r.Ay.trackWithMetadata(u.HAw.E2EE_CALL_VERIFICATION_CODE_COPIED, { channel_id: t, guild_id: l(t) });
        },
        kF: function (e) {
            let { channelId: t, userId: n, keyVersion: a, reason: o } = e;
            r.Ay.trackWithMetadata(u.HAw.E2EE_USER_VERIFICATION_FAILED, {
                channel_id: t,
                guild_id: l(t),
                failure_reason: o,
                key_version: `${a}`,
                ...(0, i.UI)({ userId: n }),
            });
        },
        y5: function (e) {
            let { channelId: t } = e;
            r.Ay.trackWithMetadata(u.HAw.E2EE_STREAM_VERIFICATION_CODE_COPIED, { channel_id: t, guild_id: l(t) });
        },
    },
);
