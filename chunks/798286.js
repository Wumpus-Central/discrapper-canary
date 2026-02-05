n.d(t, {
    HJ: () => u,
    Hb: () => _,
    Hg: () => E,
    Jk: () => h,
    XS: () => y,
    YT: () => S,
    cw: () => s,
    k0: () => f,
    kF: () => d,
    y5: () => A,
});
var r = n(58149),
    i = n(672385),
    a = n(734057),
    o = n(954571),
    l = n(652215);
function c(e) {
    return a.A.getChannel(e)?.guild_id;
}
function E(e) {
    let { channelId: t, selectedTab: n } = e;
    r.Ay.trackWithMetadata(l.HAw.RTC_PANEL_VIEWED, { channel_id: t, guild_id: c(t), selected_tab: n });
}
function u(e) {
    let { channelId: t, userId: n } = e;
    r.Ay.trackWithMetadata(l.HAw.E2EE_USER_VERIFICATION_VIEWED, {
        channel_id: t,
        guild_id: c(t),
        ...(0, i.UI)({ userId: n }),
    });
}
function s(e) {
    let { channelId: t, userId: n, analyticsLocation: a } = e;
    r.Ay.trackWithMetadata(l.HAw.E2EE_USER_VERIFIED, {
        channel_id: t,
        guild_id: c(t),
        location: a,
        ...(0, i.UI)({ userId: n }),
    });
}
function d(e) {
    let { channelId: t, userId: n, keyVersion: a, reason: o } = e;
    r.Ay.trackWithMetadata(l.HAw.E2EE_USER_VERIFICATION_FAILED, {
        channel_id: t,
        guild_id: c(t),
        failure_reason: o,
        key_version: `${a}`,
        ...(0, i.UI)({ userId: n }),
    });
}
function _(e) {
    let { channelId: t, userId: n } = e;
    r.Ay.trackWithMetadata(l.HAw.E2EE_USER_VERIFICATION_CODE_COPIED, {
        channel_id: t,
        guild_id: c(t),
        ...(0, i.UI)({ userId: n }),
    });
}
function f(e) {
    let { channelId: t } = e;
    r.Ay.trackWithMetadata(l.HAw.E2EE_CALL_VERIFICATION_CODE_COPIED, { channel_id: t, guild_id: c(t) });
}
function A(e) {
    let { channelId: t } = e;
    r.Ay.trackWithMetadata(l.HAw.E2EE_STREAM_VERIFICATION_CODE_COPIED, { channel_id: t, guild_id: c(t) });
}
function S() {
    o.default.track(l.HAw.E2EE_SETTINGS_USER_DELETE);
}
function h() {
    o.default.track(l.HAw.E2EE_SETTINGS_DEVICE_DELETE);
}
function y(e) {
    o.default.track(l.HAw.E2EE_PUBLIC_KEY_MISMATCH, { key_version: `${e}` });
}
