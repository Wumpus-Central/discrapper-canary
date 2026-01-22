n.d(t, {
    AC: () => v,
    Hb: () => C,
    Ol: () => P,
    e4: () => N,
    hp: () => T,
    jA: () => R,
    zk: () => S,
}),
    n(896048);
var r = n(735438),
    i = n(665260),
    a = n(873298),
    s = n(73153),
    o = n(832712),
    l = n(58149),
    c = n(529942),
    u = n(164956),
    d = n(931260),
    f = n(594061),
    p = n(734057),
    _ = n(543465),
    h = n(954571),
    m = n(477427),
    g = n(652215),
    E = n(355097);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t, n, r) {
    if (null == e) return;
    if (u.A.isFullServerPreview(e)) return void (0, c.$u)(e, n ? [t] : [], n ? [] : [t]);
    let a = _.Ay.getChannelIdFlags(e, t);
    n || (a = (0, i.lA)(a, E.vv.FAVORITED, !1));
    let o = (0, m.ME)(e, t),
        f = { flags: (0, i.lA)(a, E.vv.OPT_IN_ENABLED, n) },
        b = { channel_overrides: { [t]: f } };
    d.A.saveUserGuildSettingsBulk({ [e]: b }),
        s.h.dispatch({
            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
            guildId: e,
            channelId: t,
            settings: f,
        }),
        (0, m.ct)({
            guildId: e,
            channelId: t,
            change: f,
            previous: o,
            label: m.G_.optedIn(n),
            location: r,
        }),
        w(e),
        h.default.track(
            g.HAw.CHANNEL_LIST_UPDATED,
            A(y({}, (0, l.H$)(e), (0, l.dI)(p.A.getChannel(t))), {
                action_type: n ? "add" : "remove",
                location: r,
            }),
        );
}
function S(e, t, n, r) {
    if (null == e) return;
    if (u.A.isFullServerPreview(e)) {
        (0, c.$u)(e, n ? [t] : [], n ? [] : [t]), (0, c.Z$)(e, { optInEnabled: !0 });
        return;
    }
    let a = _.Ay.getChannelIdFlags(e, t);
    n || (a = (0, i.lA)(a, E.vv.FAVORITED, !1));
    let o = (0, m.ME)(e, t),
        f = { flags: (0, i.lA)(a, E.vv.OPT_IN_ENABLED, n) };
    if (!_.Ay.isOptInEnabled(e)) {
        let n = (0, i.lA)(_.Ay.getGuildFlags(e), E.n3.OPT_IN_CHANNELS_ON, !0);
        d.A.saveUserGuildSettingsBulk({
            [e]: {
                channel_overrides: { [t]: f },
                flags: n,
            },
        });
    }
    s.h.dispatch({
        type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
        guildId: e,
        channelId: t,
        settings: f,
    }),
        (0, m.ct)({
            guildId: e,
            channelId: t,
            change: f,
            previous: o,
            label: m.G_.optedIn(n),
            location: r,
        }),
        w(e),
        h.default.track(
            g.HAw.CHANNEL_LIST_UPDATED,
            A(y({}, (0, l.H$)(e), (0, l.dI)(p.A.getChannel(t))), {
                action_type: n ? "add" : "remove",
                location: r,
            }),
        );
}
async function I(e, t) {
    if (null == e || u.A.isFullServerPreview(e)) return;
    let n = { channel_overrides: t };
    await d.A.saveUserGuildSettingsBulk({ [e]: n }),
        s.h.dispatch({
            type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES",
            guildId: e,
            updates: t,
        });
}
let T = (0, r.debounce)((e, t) => I(e, t), 1000);
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (null == e) return;
    if (u.A.isFullServerPreview(e)) {
        (0, c.$u)(e, t, []), n && (0, c.Z$)(e, { optInEnabled: !0 });
        return;
    }
    let a = {};
    if (
        (t.forEach((t) => {
            let n = _.Ay.getChannelIdFlags(e, t);
            a[t] = { flags: (0, i.lA)(n, E.vv.OPT_IN_ENABLED, !0) };
        }),
        n)
    ) {
        let t = (0, i.lA)(_.Ay.getGuildFlags(e), E.n3.OPT_IN_CHANNELS_ON, !0);
        o.A.updateGuildAndChannelNotificationSettings(
            e,
            {
                flags: t,
                channel_overrides: a,
            },
            m.fd.OptedIn,
        ),
            h.default.track(
                g.HAw.CHANNEL_LIST_UPDATED,
                A(y({}, (0, l.H$)(e)), {
                    action_type: "add_many_and_enable_guild",
                    location: r,
                }),
            );
    } else
        o.A.updateChannelOverrideSettingsBulk(e, a, m.fd.OptedIn),
            h.default.track(
                g.HAw.CHANNEL_LIST_UPDATED,
                A(y({}, (0, l.H$)(e)), {
                    action_type: "add_many",
                    location: r,
                }),
            );
}
function N(e, t, n) {
    if (u.A.isFullServerPreview(e)) return void (0, c.Z$)(e, { optInEnabled: t });
    let r = _.Ay.getGuildFlags(e);
    o.A.updateGuildNotificationSettings(e, { flags: (0, i.lA)(r, E.n3.OPT_IN_CHANNELS_ON, t) }, m.G_.optedIn(t)),
        h.default.track(
            g.HAw.CHANNEL_LIST_UPDATED,
            A(y({}, (0, l.H$)(e)), {
                action_type: t ? "guild_enabled" : "guild_disabled",
                location: n,
            }),
        );
}
function R(e, t, n, r) {
    if (null == e || u.A.isFullServerPreview(e)) return;
    let a = _.Ay.getChannelIdFlags(e, t);
    !(0, i.Lt)(a, E.vv.OPT_IN_ENABLED) && n && (a = (0, i.lA)(a, E.vv.OPT_IN_ENABLED, !0)),
        o.A.updateChannelOverrideSettings(e, t, { flags: (0, i.lA)(a, E.vv.FAVORITED, n) }, m.G_.favorited(n)),
        h.default.track(
            g.HAw.CHANNEL_LIST_UPDATED,
            A(y({}, (0, l.H$)(e)), {
                action_type: n ? "favorited" : "unfavorited",
                location: r,
            }),
        );
}
function w(e) {
    (0, f.TG)(
        e,
        (e) =>
            (!(0, i.Lt)(e.guildOnboardingProgress, a.eF.GUILD_NOTICE_CLEARED) ||
                !!(0, i.Lt)(e.guildOnboardingProgress, a.eF.GUILD_NOTICE_SHOWN)) &&
            ((e.guildOnboardingProgress = (0, i.UI)(e.guildOnboardingProgress, a.eF.GUILD_NOTICE_CLEARED)),
            (e.guildOnboardingProgress = (0, i.lA)(e.guildOnboardingProgress, a.eF.GUILD_NOTICE_SHOWN, !1)),
            !0),
        f.Sb.INFREQUENT_USER_ACTION,
    );
}
function P(e, t) {
    s.h.dispatch({
        type: "DISMISS_FAVORITE_SUGGESTION",
        guildId: e,
        channelId: t,
    });
}
