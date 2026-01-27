n.d(t, {
    HJ: () => E,
    Hb: () => _,
    Hg: () => s,
    Jk: () => h,
    XS: () => g,
    YT: () => y,
    cw: () => d,
    k0: () => A,
    kF: () => f,
    y5: () => S,
});
var r = n(58149),
    i = n(672385),
    a = n(734057),
    o = n(954571),
    l = n(652215);

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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function u(e) {
    var t;
    return null == (t = a.A.getChannel(e)) ? void 0 : t.guild_id;
}

function s(e) {
    let { channelId: t, selectedTab: n } = e;
    r.Ay.trackWithMetadata(l.HAw.RTC_PANEL_VIEWED, {
        channel_id: t,
        guild_id: u(t),
        selected_tab: n,
    });
}

function E(e) {
    let { channelId: t, userId: n } = e;
    r.Ay.trackWithMetadata(
        l.HAw.E2EE_USER_VERIFICATION_VIEWED,
        c(
            {
                channel_id: t,
                guild_id: u(t),
            },
            (0, i.UI)({
                userId: n,
            }),
        ),
    );
}

function d(e) {
    let { channelId: t, userId: n, analyticsLocation: a } = e;
    r.Ay.trackWithMetadata(
        l.HAw.E2EE_USER_VERIFIED,
        c(
            {
                channel_id: t,
                guild_id: u(t),
                location: a,
            },
            (0, i.UI)({
                userId: n,
            }),
        ),
    );
}

function f(e) {
    let { channelId: t, userId: n, keyVersion: a, reason: o } = e;
    r.Ay.trackWithMetadata(
        l.HAw.E2EE_USER_VERIFICATION_FAILED,
        c(
            {
                channel_id: t,
                guild_id: u(t),
                failure_reason: o,
                key_version: "".concat(a),
            },
            (0, i.UI)({
                userId: n,
            }),
        ),
    );
}

function _(e) {
    let { channelId: t, userId: n } = e;
    r.Ay.trackWithMetadata(
        l.HAw.E2EE_USER_VERIFICATION_CODE_COPIED,
        c(
            {
                channel_id: t,
                guild_id: u(t),
            },
            (0, i.UI)({
                userId: n,
            }),
        ),
    );
}

function A(e) {
    let { channelId: t } = e;
    r.Ay.trackWithMetadata(l.HAw.E2EE_CALL_VERIFICATION_CODE_COPIED, {
        channel_id: t,
        guild_id: u(t),
    });
}

function S(e) {
    let { channelId: t } = e;
    r.Ay.trackWithMetadata(l.HAw.E2EE_STREAM_VERIFICATION_CODE_COPIED, {
        channel_id: t,
        guild_id: u(t),
    });
}

function y() {
    o.default.track(l.HAw.E2EE_SETTINGS_USER_DELETE);
}

function h() {
    o.default.track(l.HAw.E2EE_SETTINGS_DEVICE_DELETE);
}

function g(e) {
    o.default.track(l.HAw.E2EE_PUBLIC_KEY_MISMATCH, {
        key_version: "".concat(e),
    });
}
