n.d(t, {
    HJ: () => u,
    Hb: () => f,
    Hg: () => c,
    Jk: () => S,
    XS: () => g,
    YT: () => _,
    cw: () => d,
    k0: () => A,
    kF: () => E,
    y5: () => h,
});
var r = n(58149),
    i = n(672385),
    a = n(734057),
    l = n(954571),
    o = n(652215);
function s(e) {
    return a.A.getChannel(e)?.guild_id;
}
function c(e) {
    let { channelId: t, selectedTab: n } = e;
    r.Ay.trackWithMetadata(o.HAw.RTC_PANEL_VIEWED, { channel_id: t, guild_id: s(t), selected_tab: n });
}
function u(e) {
    let { channelId: t, userId: n } = e;
    r.Ay.trackWithMetadata(o.HAw.E2EE_USER_VERIFICATION_VIEWED, {
        channel_id: t,
        guild_id: s(t),
        ...(0, i.UI)({ userId: n }),
    });
}
function d(e) {
    let { channelId: t, userId: n, analyticsLocation: a } = e;
    r.Ay.trackWithMetadata(o.HAw.E2EE_USER_VERIFIED, {
        channel_id: t,
        guild_id: s(t),
        location: a,
        ...(0, i.UI)({ userId: n }),
    });
}
function E(e) {
    let { channelId: t, userId: n, keyVersion: a, reason: l } = e;
    r.Ay.trackWithMetadata(o.HAw.E2EE_USER_VERIFICATION_FAILED, {
        channel_id: t,
        guild_id: s(t),
        failure_reason: l,
        key_version: `${a}`,
        ...(0, i.UI)({ userId: n }),
    });
}
function f(e) {
    let { channelId: t, userId: n } = e;
    r.Ay.trackWithMetadata(o.HAw.E2EE_USER_VERIFICATION_CODE_COPIED, {
        channel_id: t,
        guild_id: s(t),
        ...(0, i.UI)({ userId: n }),
    });
}
function A(e) {
    let { channelId: t } = e;
    r.Ay.trackWithMetadata(o.HAw.E2EE_CALL_VERIFICATION_CODE_COPIED, { channel_id: t, guild_id: s(t) });
}
function h(e) {
    let { channelId: t } = e;
    r.Ay.trackWithMetadata(o.HAw.E2EE_STREAM_VERIFICATION_CODE_COPIED, { channel_id: t, guild_id: s(t) });
}
function _() {
    l.default.track(o.HAw.E2EE_SETTINGS_USER_DELETE);
}
function S() {
    l.default.track(o.HAw.E2EE_SETTINGS_DEVICE_DELETE);
}
function g(e) {
    l.default.track(o.HAw.E2EE_PUBLIC_KEY_MISMATCH, { key_version: `${e}` });
}
