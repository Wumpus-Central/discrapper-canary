n.d(t, { AC: () => g, Hb: () => C, Ol: () => D, e4: () => O, hp: () => N, jA: () => R, xl: () => L, zk: () => m });
var i = n(435558),
    r = n(665260),
    a = n(873298),
    s = n(228366),
    l = n(832712),
    o = n(95561),
    d = n(529942),
    c = n(164956),
    u = n(931260),
    _ = n(594061),
    E = n(734057),
    A = n(543465),
    h = n(174459),
    I = n(477427),
    f = n(652215),
    p = n(355097),
    T = n(375708);
function g(e, t, n, i) {
    if (null == e) return;
    if (c.A.isFullServerPreview(e)) return void (0, d.$u)(e, n ? [t] : [], n ? [] : [t]);
    let a = A.Ay.getChannelIdFlags(e, t);
    n || (a = (0, r.lA)(a, p.vv.FAVORITED, !1));
    let l = (0, I.ME)(e, t),
        _ = { flags: (0, r.lA)(a, p.vv.OPT_IN_ENABLED, n) };
    (u.A.saveUserGuildSettingsBulk({ [e]: { channel_overrides: { [t]: _ } } }),
        s.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: e, channelId: t, settings: _ }),
        (0, I.ct)({ guildId: e, channelId: t, change: _, previous: l, label: I.G_.optedIn(n), location: i }),
        y(e),
        h.default.track(f.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, o.H$)(e),
            ...(0, o.dI)(E.A.getChannel(t)),
            action_type: n ? "add" : "remove",
            location: i,
        }));
}
function m(e, t, n, i) {
    if (null == e) return;
    if (c.A.isFullServerPreview(e)) {
        ((0, d.$u)(e, n ? [t] : [], n ? [] : [t]), (0, d.Z$)(e, { optInEnabled: !0 }));
        return;
    }
    let a = A.Ay.getChannelIdFlags(e, t);
    n || (a = (0, r.lA)(a, p.vv.FAVORITED, !1));
    let l = (0, I.ME)(e, t),
        _ = { flags: (0, r.lA)(a, p.vv.OPT_IN_ENABLED, n) };
    if (!A.Ay.isOptInEnabled(e)) {
        let n = (0, r.lA)(A.Ay.getGuildFlags(e), p.n3.OPT_IN_CHANNELS_ON, !0);
        u.A.saveUserGuildSettingsBulk({ [e]: { channel_overrides: { [t]: _ }, flags: n } });
    }
    (s.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: e, channelId: t, settings: _ }),
        (0, I.ct)({ guildId: e, channelId: t, change: _, previous: l, label: I.G_.optedIn(n), location: i }),
        y(e),
        h.default.track(f.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, o.H$)(e),
            ...(0, o.dI)(E.A.getChannel(t)),
            action_type: n ? "add" : "remove",
            location: i,
        }));
}
async function S(e, t) {
    null == e ||
        c.A.isFullServerPreview(e) ||
        (await u.A.saveUserGuildSettingsBulk({ [e]: { channel_overrides: t } }),
        s.h.dispatch({ type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES", guildId: e, updates: t }));
}
let N = (0, i.debounce)((e, t) => S(e, t), 1e3);
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    if (null == e) return;
    if (c.A.isFullServerPreview(e)) {
        ((0, d.$u)(e, t, []), n && (0, d.Z$)(e, { optInEnabled: !0 }));
        return;
    }
    let a = {};
    if (
        (t.forEach((t) => {
            let n = A.Ay.getChannelIdFlags(e, t);
            a[t] = { flags: (0, r.lA)(n, p.vv.OPT_IN_ENABLED, !0) };
        }),
        n)
    ) {
        let t = (0, r.lA)(A.Ay.getGuildFlags(e), p.n3.OPT_IN_CHANNELS_ON, !0);
        (l.A.updateGuildAndChannelNotificationSettings(e, { flags: t, channel_overrides: a }, I.fd.OptedIn),
            h.default.track(f.HAw.CHANNEL_LIST_UPDATED, {
                ...(0, o.H$)(e),
                action_type: "add_many_and_enable_guild",
                location: i,
            }));
    } else
        (l.A.updateChannelOverrideSettingsBulk(e, a, I.fd.OptedIn),
            h.default.track(f.HAw.CHANNEL_LIST_UPDATED, { ...(0, o.H$)(e), action_type: "add_many", location: i }));
}
function O(e, t, n) {
    if (c.A.isFullServerPreview(e)) return void (0, d.Z$)(e, { optInEnabled: t });
    let i = A.Ay.getGuildFlags(e);
    (l.A.updateGuildNotificationSettings(e, { flags: (0, r.lA)(i, p.n3.OPT_IN_CHANNELS_ON, t) }, I.G_.optedIn(t)),
        h.default.track(f.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, o.H$)(e),
            action_type: t ? "guild_enabled" : "guild_disabled",
            location: n,
        }));
}
function R(e, t, n, i) {
    if (null == e || c.A.isFullServerPreview(e)) return;
    let a = A.Ay.getChannelIdFlags(e, t);
    !(0, r.Lt)(a, p.vv.OPT_IN_ENABLED) && n && (a = (0, r.lA)(a, p.vv.OPT_IN_ENABLED, !0));
    let s = E.A.getChannel(t)?.name,
        d =
            null != s && "" !== s
                ? {
                      message: T.intl.formatToPlainString(n ? T.t.CcNVYB : T.t.zSYTEX, { channelName: s }),
                      assertiveness: "polite",
                  }
                : void 0;
    (l.A.updateChannelOverrideSettings({
        guildId: e,
        channelId: t,
        settings: { flags: (0, r.lA)(a, p.vv.FAVORITED, n) },
        label: I.G_.favorited(n),
        accessibilityAnnouncement: d,
    }),
        h.default.track(f.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, o.H$)(e),
            action_type: n ? "favorited" : "unfavorited",
            location: i,
        }));
}
function L(e, t) {
    let n = A.Ay.getChannelIdFlags(null, e);
    l.A.updateChannelOverrideSettings({
        guildId: null,
        channelId: e,
        settings: { flags: (0, r.lA)(n, p.vv.FAVORITED, t) },
        label: I.G_.favorited(t),
    });
}
function y(e) {
    (0, _.TG)(
        e,
        (e) =>
            (!(0, r.Lt)(e.guildOnboardingProgress, a.eF.GUILD_NOTICE_CLEARED) ||
                !!(0, r.Lt)(e.guildOnboardingProgress, a.eF.GUILD_NOTICE_SHOWN)) &&
            ((e.guildOnboardingProgress = (0, r.UI)(e.guildOnboardingProgress, a.eF.GUILD_NOTICE_CLEARED)),
            (e.guildOnboardingProgress = (0, r.lA)(e.guildOnboardingProgress, a.eF.GUILD_NOTICE_SHOWN, !1)),
            !0),
        _.Sb.INFREQUENT_USER_ACTION,
    );
}
function D(e, t) {
    s.h.dispatch({ type: "DISMISS_FAVORITE_SUGGESTION", guildId: e, channelId: t });
}
