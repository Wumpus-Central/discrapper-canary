n.d(e, {
    HJ: () => c,
    Hb: () => h,
    Hg: () => s,
    Jk: () => S,
    XS: () => p,
    YT: () => _,
    cw: () => E,
    k0: () => f,
    kF: () => d,
    y5: () => A,
});
var r = n(58149),
    i = n(47675),
    a = n(734057),
    l = n(954571),
    o = n(652215);
function u(t) {
    return a.A.getChannel(t)?.guild_id;
}
function s(t) {
    let { channelId: e, selectedTab: n } = t;
    r.Ay.trackWithMetadata(o.HAw.RTC_PANEL_VIEWED, { channel_id: e, guild_id: u(e), selected_tab: n });
}
function c(t) {
    let { channelId: e, userId: n } = t;
    r.Ay.trackWithMetadata(o.HAw.E2EE_USER_VERIFICATION_VIEWED, {
        channel_id: e,
        guild_id: u(e),
        ...(0, i.UI)({ userId: n }),
    });
}
function E(t) {
    let { channelId: e, userId: n, analyticsLocation: a } = t;
    r.Ay.trackWithMetadata(o.HAw.E2EE_USER_VERIFIED, {
        channel_id: e,
        guild_id: u(e),
        location: a,
        ...(0, i.UI)({ userId: n }),
    });
}
function d(t) {
    let { channelId: e, userId: n, keyVersion: a, reason: l } = t;
    r.Ay.trackWithMetadata(o.HAw.E2EE_USER_VERIFICATION_FAILED, {
        channel_id: e,
        guild_id: u(e),
        failure_reason: l,
        key_version: `${a}`,
        ...(0, i.UI)({ userId: n }),
    });
}
function h(t) {
    let { channelId: e, userId: n } = t;
    r.Ay.trackWithMetadata(o.HAw.E2EE_USER_VERIFICATION_CODE_COPIED, {
        channel_id: e,
        guild_id: u(e),
        ...(0, i.UI)({ userId: n }),
    });
}
function f(t) {
    let { channelId: e } = t;
    r.Ay.trackWithMetadata(o.HAw.E2EE_CALL_VERIFICATION_CODE_COPIED, { channel_id: e, guild_id: u(e) });
}
function A(t) {
    let { channelId: e } = t;
    r.Ay.trackWithMetadata(o.HAw.E2EE_STREAM_VERIFICATION_CODE_COPIED, { channel_id: e, guild_id: u(e) });
}
function _() {
    l.default.track(o.HAw.E2EE_SETTINGS_USER_DELETE);
}
function S() {
    l.default.track(o.HAw.E2EE_SETTINGS_DEVICE_DELETE);
}
function p(t) {
    l.default.track(o.HAw.E2EE_PUBLIC_KEY_MISMATCH, { key_version: `${t}` });
}
