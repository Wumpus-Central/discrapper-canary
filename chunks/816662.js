n.d(t, { AC: () => O, Hb: () => p, Ol: () => h, e4: () => m, hp: () => C, jA: () => L, zk: () => R });
var i = n(735438),
    r = n(665260),
    a = n(873298),
    s = n(228366),
    _ = n(832712),
    l = n(58149),
    o = n(529942),
    E = n(164956),
    d = n(931260),
    c = n(594061),
    u = n(734057),
    I = n(543465),
    A = n(954571),
    T = n(477427),
    S = n(652215),
    N = n(355097);
function O(e, t, n, i) {
    if (null == e) return;
    if (E.A.isFullServerPreview(e)) return void (0, o.$u)(e, n ? [t] : [], n ? [] : [t]);
    let a = I.Ay.getChannelIdFlags(e, t);
    n || (a = (0, r.lA)(a, N.vv.FAVORITED, !1));
    let _ = (0, T.ME)(e, t),
        c = { flags: (0, r.lA)(a, N.vv.OPT_IN_ENABLED, n) };
    d.A.saveUserGuildSettingsBulk({ [e]: { channel_overrides: { [t]: c } } }),
        s.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: e, channelId: t, settings: c }),
        (0, T.ct)({ guildId: e, channelId: t, change: c, previous: _, label: T.G_.optedIn(n), location: i }),
        D(e),
        A.default.track(S.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, l.H$)(e),
            ...(0, l.dI)(u.A.getChannel(t)),
            action_type: n ? "add" : "remove",
            location: i,
        });
}
function R(e, t, n, i) {
    if (null == e) return;
    if (E.A.isFullServerPreview(e)) {
        (0, o.$u)(e, n ? [t] : [], n ? [] : [t]), (0, o.Z$)(e, { optInEnabled: !0 });
        return;
    }
    let a = I.Ay.getChannelIdFlags(e, t);
    n || (a = (0, r.lA)(a, N.vv.FAVORITED, !1));
    let _ = (0, T.ME)(e, t),
        c = { flags: (0, r.lA)(a, N.vv.OPT_IN_ENABLED, n) };
    if (!I.Ay.isOptInEnabled(e)) {
        let n = (0, r.lA)(I.Ay.getGuildFlags(e), N.n3.OPT_IN_CHANNELS_ON, !0);
        d.A.saveUserGuildSettingsBulk({ [e]: { channel_overrides: { [t]: c }, flags: n } });
    }
    s.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: e, channelId: t, settings: c }),
        (0, T.ct)({ guildId: e, channelId: t, change: c, previous: _, label: T.G_.optedIn(n), location: i }),
        D(e),
        A.default.track(S.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, l.H$)(e),
            ...(0, l.dI)(u.A.getChannel(t)),
            action_type: n ? "add" : "remove",
            location: i,
        });
}
async function f(e, t) {
    null == e ||
        E.A.isFullServerPreview(e) ||
        (await d.A.saveUserGuildSettingsBulk({ [e]: { channel_overrides: t } }),
        s.h.dispatch({ type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES", guildId: e, updates: t }));
}
let C = (0, i.debounce)((e, t) => f(e, t), 1e3);
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    if (null == e) return;
    if (E.A.isFullServerPreview(e)) {
        (0, o.$u)(e, t, []), n && (0, o.Z$)(e, { optInEnabled: !0 });
        return;
    }
    let a = {};
    if (
        (t.forEach((t) => {
            let n = I.Ay.getChannelIdFlags(e, t);
            a[t] = { flags: (0, r.lA)(n, N.vv.OPT_IN_ENABLED, !0) };
        }),
        n)
    ) {
        let t = (0, r.lA)(I.Ay.getGuildFlags(e), N.n3.OPT_IN_CHANNELS_ON, !0);
        _.A.updateGuildAndChannelNotificationSettings(e, { flags: t, channel_overrides: a }, T.fd.OptedIn),
            A.default.track(S.HAw.CHANNEL_LIST_UPDATED, {
                ...(0, l.H$)(e),
                action_type: "add_many_and_enable_guild",
                location: i,
            });
    } else
        _.A.updateChannelOverrideSettingsBulk(e, a, T.fd.OptedIn),
            A.default.track(S.HAw.CHANNEL_LIST_UPDATED, { ...(0, l.H$)(e), action_type: "add_many", location: i });
}
function m(e, t, n) {
    if (E.A.isFullServerPreview(e)) return void (0, o.Z$)(e, { optInEnabled: t });
    let i = I.Ay.getGuildFlags(e);
    _.A.updateGuildNotificationSettings(e, { flags: (0, r.lA)(i, N.n3.OPT_IN_CHANNELS_ON, t) }, T.G_.optedIn(t)),
        A.default.track(S.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, l.H$)(e),
            action_type: t ? "guild_enabled" : "guild_disabled",
            location: n,
        });
}
function L(e, t, n, i) {
    if (null == e || E.A.isFullServerPreview(e)) return;
    let a = I.Ay.getChannelIdFlags(e, t);
    !(0, r.Lt)(a, N.vv.OPT_IN_ENABLED) && n && (a = (0, r.lA)(a, N.vv.OPT_IN_ENABLED, !0)),
        _.A.updateChannelOverrideSettings(e, t, { flags: (0, r.lA)(a, N.vv.FAVORITED, n) }, T.G_.favorited(n)),
        A.default.track(S.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, l.H$)(e),
            action_type: n ? "favorited" : "unfavorited",
            location: i,
        });
}
function D(e) {
    (0, c.TG)(
        e,
        (e) =>
            (!(0, r.Lt)(e.guildOnboardingProgress, a.eF.GUILD_NOTICE_CLEARED) ||
                !!(0, r.Lt)(e.guildOnboardingProgress, a.eF.GUILD_NOTICE_SHOWN)) &&
            ((e.guildOnboardingProgress = (0, r.UI)(e.guildOnboardingProgress, a.eF.GUILD_NOTICE_CLEARED)),
            (e.guildOnboardingProgress = (0, r.lA)(e.guildOnboardingProgress, a.eF.GUILD_NOTICE_SHOWN, !1)),
            !0),
        c.Sb.INFREQUENT_USER_ACTION,
    );
}
function h(e, t) {
    s.h.dispatch({ type: "DISMISS_FAVORITE_SUGGESTION", guildId: e, channelId: t });
}
