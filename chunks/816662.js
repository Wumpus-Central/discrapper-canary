n.d(t, { AC: () => N, Hb: () => O, Ol: () => L, e4: () => C, hp: () => m, jA: () => R, zk: () => f });
var i = n(735438),
    a = n(665260),
    r = n(873298),
    s = n(228366),
    l = n(832712),
    o = n(58149),
    d = n(529942),
    c = n(164956),
    _ = n(931260),
    E = n(594061),
    u = n(734057),
    A = n(543465),
    I = n(954571),
    T = n(477427),
    h = n(652215),
    S = n(355097);
function N(e, t, n, i) {
    if (null == e) return;
    if (c.A.isFullServerPreview(e)) return void (0, d.$u)(e, n ? [t] : [], n ? [] : [t]);
    let r = A.Ay.getChannelIdFlags(e, t);
    n || (r = (0, a.lA)(r, S.vv.FAVORITED, !1));
    let l = (0, T.ME)(e, t),
        E = { flags: (0, a.lA)(r, S.vv.OPT_IN_ENABLED, n) };
    _.A.saveUserGuildSettingsBulk({ [e]: { channel_overrides: { [t]: E } } }),
        s.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: e, channelId: t, settings: E }),
        (0, T.ct)({ guildId: e, channelId: t, change: E, previous: l, label: T.G_.optedIn(n), location: i }),
        g(e),
        I.default.track(h.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, o.H$)(e),
            ...(0, o.dI)(u.A.getChannel(t)),
            action_type: n ? "add" : "remove",
            location: i,
        });
}
function f(e, t, n, i) {
    if (null == e) return;
    if (c.A.isFullServerPreview(e)) {
        (0, d.$u)(e, n ? [t] : [], n ? [] : [t]), (0, d.Z$)(e, { optInEnabled: !0 });
        return;
    }
    let r = A.Ay.getChannelIdFlags(e, t);
    n || (r = (0, a.lA)(r, S.vv.FAVORITED, !1));
    let l = (0, T.ME)(e, t),
        E = { flags: (0, a.lA)(r, S.vv.OPT_IN_ENABLED, n) };
    if (!A.Ay.isOptInEnabled(e)) {
        let n = (0, a.lA)(A.Ay.getGuildFlags(e), S.n3.OPT_IN_CHANNELS_ON, !0);
        _.A.saveUserGuildSettingsBulk({ [e]: { channel_overrides: { [t]: E }, flags: n } });
    }
    s.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: e, channelId: t, settings: E }),
        (0, T.ct)({ guildId: e, channelId: t, change: E, previous: l, label: T.G_.optedIn(n), location: i }),
        g(e),
        I.default.track(h.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, o.H$)(e),
            ...(0, o.dI)(u.A.getChannel(t)),
            action_type: n ? "add" : "remove",
            location: i,
        });
}
async function p(e, t) {
    null == e ||
        c.A.isFullServerPreview(e) ||
        (await _.A.saveUserGuildSettingsBulk({ [e]: { channel_overrides: t } }),
        s.h.dispatch({ type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES", guildId: e, updates: t }));
}
let m = (0, i.debounce)((e, t) => p(e, t), 1e3);
function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    if (null == e) return;
    if (c.A.isFullServerPreview(e)) {
        (0, d.$u)(e, t, []), n && (0, d.Z$)(e, { optInEnabled: !0 });
        return;
    }
    let r = {};
    if (
        (t.forEach((t) => {
            let n = A.Ay.getChannelIdFlags(e, t);
            r[t] = { flags: (0, a.lA)(n, S.vv.OPT_IN_ENABLED, !0) };
        }),
        n)
    ) {
        let t = (0, a.lA)(A.Ay.getGuildFlags(e), S.n3.OPT_IN_CHANNELS_ON, !0);
        l.A.updateGuildAndChannelNotificationSettings(e, { flags: t, channel_overrides: r }, T.fd.OptedIn),
            I.default.track(h.HAw.CHANNEL_LIST_UPDATED, {
                ...(0, o.H$)(e),
                action_type: "add_many_and_enable_guild",
                location: i,
            });
    } else
        l.A.updateChannelOverrideSettingsBulk(e, r, T.fd.OptedIn),
            I.default.track(h.HAw.CHANNEL_LIST_UPDATED, { ...(0, o.H$)(e), action_type: "add_many", location: i });
}
function C(e, t, n) {
    if (c.A.isFullServerPreview(e)) return void (0, d.Z$)(e, { optInEnabled: t });
    let i = A.Ay.getGuildFlags(e);
    l.A.updateGuildNotificationSettings(e, { flags: (0, a.lA)(i, S.n3.OPT_IN_CHANNELS_ON, t) }, T.G_.optedIn(t)),
        I.default.track(h.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, o.H$)(e),
            action_type: t ? "guild_enabled" : "guild_disabled",
            location: n,
        });
}
function R(e, t, n, i) {
    if (null == e || c.A.isFullServerPreview(e)) return;
    let r = A.Ay.getChannelIdFlags(e, t);
    !(0, a.Lt)(r, S.vv.OPT_IN_ENABLED) && n && (r = (0, a.lA)(r, S.vv.OPT_IN_ENABLED, !0)),
        l.A.updateChannelOverrideSettings(e, t, { flags: (0, a.lA)(r, S.vv.FAVORITED, n) }, T.G_.favorited(n)),
        I.default.track(h.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, o.H$)(e),
            action_type: n ? "favorited" : "unfavorited",
            location: i,
        });
}
function g(e) {
    (0, E.TG)(
        e,
        (e) =>
            (!(0, a.Lt)(e.guildOnboardingProgress, r.eF.GUILD_NOTICE_CLEARED) ||
                !!(0, a.Lt)(e.guildOnboardingProgress, r.eF.GUILD_NOTICE_SHOWN)) &&
            ((e.guildOnboardingProgress = (0, a.UI)(e.guildOnboardingProgress, r.eF.GUILD_NOTICE_CLEARED)),
            (e.guildOnboardingProgress = (0, a.lA)(e.guildOnboardingProgress, r.eF.GUILD_NOTICE_SHOWN, !1)),
            !0),
        E.Sb.INFREQUENT_USER_ACTION,
    );
}
function L(e, t) {
    s.h.dispatch({ type: "DISMISS_FAVORITE_SUGGESTION", guildId: e, channelId: t });
}
