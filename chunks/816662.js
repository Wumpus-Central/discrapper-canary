"use strict";
n.d(t, { AC: () => A, Hb: () => N, Ol: () => O, e4: () => y, hp: () => S, jA: () => C, zk: () => I });
var i = n(735438),
    r = n(665260),
    s = n(873298),
    a = n(228366),
    o = n(832712),
    l = n(95561),
    u = n(529942),
    c = n(164956),
    d = n(931260),
    _ = n(594061),
    f = n(734057),
    h = n(543465),
    p = n(174459),
    E = n(477427),
    m = n(652215),
    g = n(355097);
function A(e, t, n, i) {
    if (null == e) return;
    if (c.A.isFullServerPreview(e)) return void (0, u.$u)(e, n ? [t] : [], n ? [] : [t]);
    let s = h.Ay.getChannelIdFlags(e, t);
    n || (s = (0, r.lA)(s, g.vv.FAVORITED, !1));
    let o = (0, E.ME)(e, t),
        _ = { flags: (0, r.lA)(s, g.vv.OPT_IN_ENABLED, n) };
    d.A.saveUserGuildSettingsBulk({ [e]: { channel_overrides: { [t]: _ } } }),
        a.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: e, channelId: t, settings: _ }),
        (0, E.ct)({ guildId: e, channelId: t, change: _, previous: o, label: E.G_.optedIn(n), location: i }),
        v(e),
        p.default.track(m.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, l.H$)(e),
            ...(0, l.dI)(f.A.getChannel(t)),
            action_type: n ? "add" : "remove",
            location: i,
        });
}
function I(e, t, n, i) {
    if (null == e) return;
    if (c.A.isFullServerPreview(e)) {
        (0, u.$u)(e, n ? [t] : [], n ? [] : [t]), (0, u.Z$)(e, { optInEnabled: !0 });
        return;
    }
    let s = h.Ay.getChannelIdFlags(e, t);
    n || (s = (0, r.lA)(s, g.vv.FAVORITED, !1));
    let o = (0, E.ME)(e, t),
        _ = { flags: (0, r.lA)(s, g.vv.OPT_IN_ENABLED, n) };
    if (!h.Ay.isOptInEnabled(e)) {
        let n = (0, r.lA)(h.Ay.getGuildFlags(e), g.n3.OPT_IN_CHANNELS_ON, !0);
        d.A.saveUserGuildSettingsBulk({ [e]: { channel_overrides: { [t]: _ }, flags: n } });
    }
    a.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: e, channelId: t, settings: _ }),
        (0, E.ct)({ guildId: e, channelId: t, change: _, previous: o, label: E.G_.optedIn(n), location: i }),
        v(e),
        p.default.track(m.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, l.H$)(e),
            ...(0, l.dI)(f.A.getChannel(t)),
            action_type: n ? "add" : "remove",
            location: i,
        });
}
async function T(e, t) {
    null == e ||
        c.A.isFullServerPreview(e) ||
        (await d.A.saveUserGuildSettingsBulk({ [e]: { channel_overrides: t } }),
        a.h.dispatch({ type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES", guildId: e, updates: t }));
}
let S = (0, i.debounce)((e, t) => T(e, t), 1e3);
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    if (null == e) return;
    if (c.A.isFullServerPreview(e)) {
        (0, u.$u)(e, t, []), n && (0, u.Z$)(e, { optInEnabled: !0 });
        return;
    }
    let s = {};
    if (
        (t.forEach((t) => {
            let n = h.Ay.getChannelIdFlags(e, t);
            s[t] = { flags: (0, r.lA)(n, g.vv.OPT_IN_ENABLED, !0) };
        }),
        n)
    ) {
        let t = (0, r.lA)(h.Ay.getGuildFlags(e), g.n3.OPT_IN_CHANNELS_ON, !0);
        o.A.updateGuildAndChannelNotificationSettings(e, { flags: t, channel_overrides: s }, E.fd.OptedIn),
            p.default.track(m.HAw.CHANNEL_LIST_UPDATED, {
                ...(0, l.H$)(e),
                action_type: "add_many_and_enable_guild",
                location: i,
            });
    } else
        o.A.updateChannelOverrideSettingsBulk(e, s, E.fd.OptedIn),
            p.default.track(m.HAw.CHANNEL_LIST_UPDATED, { ...(0, l.H$)(e), action_type: "add_many", location: i });
}
function y(e, t, n) {
    if (c.A.isFullServerPreview(e)) return void (0, u.Z$)(e, { optInEnabled: t });
    let i = h.Ay.getGuildFlags(e);
    o.A.updateGuildNotificationSettings(e, { flags: (0, r.lA)(i, g.n3.OPT_IN_CHANNELS_ON, t) }, E.G_.optedIn(t)),
        p.default.track(m.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, l.H$)(e),
            action_type: t ? "guild_enabled" : "guild_disabled",
            location: n,
        });
}
function C(e, t, n, i) {
    if (null == e || c.A.isFullServerPreview(e)) return;
    let s = h.Ay.getChannelIdFlags(e, t);
    !(0, r.Lt)(s, g.vv.OPT_IN_ENABLED) && n && (s = (0, r.lA)(s, g.vv.OPT_IN_ENABLED, !0)),
        o.A.updateChannelOverrideSettings(e, t, { flags: (0, r.lA)(s, g.vv.FAVORITED, n) }, E.G_.favorited(n)),
        p.default.track(m.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, l.H$)(e),
            action_type: n ? "favorited" : "unfavorited",
            location: i,
        });
}
function v(e) {
    (0, _.TG)(
        e,
        (e) =>
            (!(0, r.Lt)(e.guildOnboardingProgress, s.eF.GUILD_NOTICE_CLEARED) ||
                !!(0, r.Lt)(e.guildOnboardingProgress, s.eF.GUILD_NOTICE_SHOWN)) &&
            ((e.guildOnboardingProgress = (0, r.UI)(e.guildOnboardingProgress, s.eF.GUILD_NOTICE_CLEARED)),
            (e.guildOnboardingProgress = (0, r.lA)(e.guildOnboardingProgress, s.eF.GUILD_NOTICE_SHOWN, !1)),
            !0),
        _.Sb.INFREQUENT_USER_ACTION,
    );
}
function O(e, t) {
    a.h.dispatch({ type: "DISMISS_FAVORITE_SUGGESTION", guildId: e, channelId: t });
}
