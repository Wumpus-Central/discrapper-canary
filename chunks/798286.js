"use strict";
n.d(t, {
    HJ: () => c,
    Hb: () => f,
    Hg: () => u,
    Jk: () => m,
    XS: () => g,
    YT: () => E,
    cw: () => d,
    k0: () => h,
    kF: () => _,
    y5: () => p,
});
var i = n(95561),
    r = n(47675),
    s = n(734057),
    a = n(174459),
    o = n(652215);
function l(e) {
    return s.A.getChannel(e)?.guild_id;
}
function u(e) {
    let { channelId: t, selectedTab: n } = e;
    i.Ay.trackWithMetadata(o.HAw.RTC_PANEL_VIEWED, { channel_id: t, guild_id: l(t), selected_tab: n });
}
function c(e) {
    let { channelId: t, userId: n } = e;
    i.Ay.trackWithMetadata(o.HAw.E2EE_USER_VERIFICATION_VIEWED, {
        channel_id: t,
        guild_id: l(t),
        ...(0, r.UI)({ userId: n }),
    });
}
function d(e) {
    let { channelId: t, userId: n, analyticsLocation: s } = e;
    i.Ay.trackWithMetadata(o.HAw.E2EE_USER_VERIFIED, {
        channel_id: t,
        guild_id: l(t),
        location: s,
        ...(0, r.UI)({ userId: n }),
    });
}
function _(e) {
    let { channelId: t, userId: n, keyVersion: s, reason: a } = e;
    i.Ay.trackWithMetadata(o.HAw.E2EE_USER_VERIFICATION_FAILED, {
        channel_id: t,
        guild_id: l(t),
        failure_reason: a,
        key_version: `${s}`,
        ...(0, r.UI)({ userId: n }),
    });
}
function f(e) {
    let { channelId: t, userId: n } = e;
    i.Ay.trackWithMetadata(o.HAw.E2EE_USER_VERIFICATION_CODE_COPIED, {
        channel_id: t,
        guild_id: l(t),
        ...(0, r.UI)({ userId: n }),
    });
}
function h(e) {
    let { channelId: t } = e;
    i.Ay.trackWithMetadata(o.HAw.E2EE_CALL_VERIFICATION_CODE_COPIED, { channel_id: t, guild_id: l(t) });
}
function p(e) {
    let { channelId: t } = e;
    i.Ay.trackWithMetadata(o.HAw.E2EE_STREAM_VERIFICATION_CODE_COPIED, { channel_id: t, guild_id: l(t) });
}
function E() {
    a.default.track(o.HAw.E2EE_SETTINGS_USER_DELETE);
}
function m() {
    a.default.track(o.HAw.E2EE_SETTINGS_DEVICE_DELETE);
}
function g(e) {
    a.default.track(o.HAw.E2EE_PUBLIC_KEY_MISMATCH, { key_version: `${e}` });
}
