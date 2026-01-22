n.d(t, {
    HJ: () => f,
    Hb: () => h,
    Hg: () => d,
    Jk: () => b,
    XS: () => y,
    YT: () => E,
    cw: () => p,
    k0: () => m,
    kF: () => _,
    y5: () => g,
});
var r = n(58149),
    i = n(672385),
    a = n(734057),
    s = n(954571),
    o = n(652215);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e) {
    var t;
    return null == (t = a.A.getChannel(e)) ? void 0 : t.guild_id;
}
function d(e) {
    let { channelId: t, selectedTab: n } = e;
    r.Ay.trackWithMetadata(o.HAw.RTC_PANEL_VIEWED, {
        channel_id: t,
        guild_id: u(t),
        selected_tab: n,
    });
}
function f(e) {
    let { channelId: t, userId: n } = e;
    r.Ay.trackWithMetadata(
        o.HAw.E2EE_USER_VERIFICATION_VIEWED,
        c(
            {
                channel_id: t,
                guild_id: u(t),
            },
            (0, i.UI)({ userId: n }),
        ),
    );
}
function p(e) {
    let { channelId: t, userId: n, analyticsLocation: a } = e;
    r.Ay.trackWithMetadata(
        o.HAw.E2EE_USER_VERIFIED,
        c(
            {
                channel_id: t,
                guild_id: u(t),
                location: a,
            },
            (0, i.UI)({ userId: n }),
        ),
    );
}
function _(e) {
    let { channelId: t, userId: n, keyVersion: a, reason: s } = e;
    r.Ay.trackWithMetadata(
        o.HAw.E2EE_USER_VERIFICATION_FAILED,
        c(
            {
                channel_id: t,
                guild_id: u(t),
                failure_reason: s,
                key_version: "".concat(a),
            },
            (0, i.UI)({ userId: n }),
        ),
    );
}
function h(e) {
    let { channelId: t, userId: n } = e;
    r.Ay.trackWithMetadata(
        o.HAw.E2EE_USER_VERIFICATION_CODE_COPIED,
        c(
            {
                channel_id: t,
                guild_id: u(t),
            },
            (0, i.UI)({ userId: n }),
        ),
    );
}
function m(e) {
    let { channelId: t } = e;
    r.Ay.trackWithMetadata(o.HAw.E2EE_CALL_VERIFICATION_CODE_COPIED, {
        channel_id: t,
        guild_id: u(t),
    });
}
function g(e) {
    let { channelId: t } = e;
    r.Ay.trackWithMetadata(o.HAw.E2EE_STREAM_VERIFICATION_CODE_COPIED, {
        channel_id: t,
        guild_id: u(t),
    });
}
function E() {
    s.default.track(o.HAw.E2EE_SETTINGS_USER_DELETE);
}
function b() {
    s.default.track(o.HAw.E2EE_SETTINGS_DEVICE_DELETE);
}
function y(e) {
    s.default.track(o.HAw.E2EE_PUBLIC_KEY_MISMATCH, { key_version: "".concat(e) });
}
