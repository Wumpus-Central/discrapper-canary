"use strict";
n.d(t, { AC: () => A, Hb: () => y, Ol: () => v, e4: () => N, hp: () => S, jA: () => O, zk: () => I });
var r = n(735438),
    i = n(665260),
    s = n(873298),
    a = n(73153),
    o = n(832712),
    l = n(58149),
    u = n(529942),
    d = n(164956),
    c = n(931260),
    _ = n(594061),
    f = n(734057),
    E = n(543465),
    h = n(954571),
    p = n(477427),
    m = n(652215),
    g = n(355097);
function A(e, t, n, r) {
    if (null == e) return;
    if (d.A.isFullServerPreview(e)) return void (0, u.$u)(e, n ? [t] : [], n ? [] : [t]);
    let s = E.Ay.getChannelIdFlags(e, t);
    n || (s = (0, i.lA)(s, g.vv.FAVORITED, !1));
    let o = (0, p.ME)(e, t),
        _ = { flags: (0, i.lA)(s, g.vv.OPT_IN_ENABLED, n) };
    c.A.saveUserGuildSettingsBulk({ [e]: { channel_overrides: { [t]: _ } } }),
        a.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: e, channelId: t, settings: _ }),
        (0, p.ct)({ guildId: e, channelId: t, change: _, previous: o, label: p.G_.optedIn(n), location: r }),
        R(e),
        h.default.track(m.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, l.H$)(e),
            ...(0, l.dI)(f.A.getChannel(t)),
            action_type: n ? "add" : "remove",
            location: r,
        });
}
function I(e, t, n, r) {
    if (null == e) return;
    if (d.A.isFullServerPreview(e)) {
        (0, u.$u)(e, n ? [t] : [], n ? [] : [t]), (0, u.Z$)(e, { optInEnabled: !0 });
        return;
    }
    let s = E.Ay.getChannelIdFlags(e, t);
    n || (s = (0, i.lA)(s, g.vv.FAVORITED, !1));
    let o = (0, p.ME)(e, t),
        _ = { flags: (0, i.lA)(s, g.vv.OPT_IN_ENABLED, n) };
    if (!E.Ay.isOptInEnabled(e)) {
        let n = (0, i.lA)(E.Ay.getGuildFlags(e), g.n3.OPT_IN_CHANNELS_ON, !0);
        c.A.saveUserGuildSettingsBulk({ [e]: { channel_overrides: { [t]: _ }, flags: n } });
    }
    a.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: e, channelId: t, settings: _ }),
        (0, p.ct)({ guildId: e, channelId: t, change: _, previous: o, label: p.G_.optedIn(n), location: r }),
        R(e),
        h.default.track(m.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, l.H$)(e),
            ...(0, l.dI)(f.A.getChannel(t)),
            action_type: n ? "add" : "remove",
            location: r,
        });
}
async function T(e, t) {
    null == e ||
        d.A.isFullServerPreview(e) ||
        (await c.A.saveUserGuildSettingsBulk({ [e]: { channel_overrides: t } }),
        a.h.dispatch({ type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES", guildId: e, updates: t }));
}
let S = (0, r.debounce)((e, t) => T(e, t), 1e3);
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (null == e) return;
    if (d.A.isFullServerPreview(e)) {
        (0, u.$u)(e, t, []), n && (0, u.Z$)(e, { optInEnabled: !0 });
        return;
    }
    let s = {};
    if (
        (t.forEach((t) => {
            let n = E.Ay.getChannelIdFlags(e, t);
            s[t] = { flags: (0, i.lA)(n, g.vv.OPT_IN_ENABLED, !0) };
        }),
        n)
    ) {
        let t = (0, i.lA)(E.Ay.getGuildFlags(e), g.n3.OPT_IN_CHANNELS_ON, !0);
        o.A.updateGuildAndChannelNotificationSettings(e, { flags: t, channel_overrides: s }, p.fd.OptedIn),
            h.default.track(m.HAw.CHANNEL_LIST_UPDATED, {
                ...(0, l.H$)(e),
                action_type: "add_many_and_enable_guild",
                location: r,
            });
    } else
        o.A.updateChannelOverrideSettingsBulk(e, s, p.fd.OptedIn),
            h.default.track(m.HAw.CHANNEL_LIST_UPDATED, { ...(0, l.H$)(e), action_type: "add_many", location: r });
}
function N(e, t, n) {
    if (d.A.isFullServerPreview(e)) return void (0, u.Z$)(e, { optInEnabled: t });
    let r = E.Ay.getGuildFlags(e);
    o.A.updateGuildNotificationSettings(e, { flags: (0, i.lA)(r, g.n3.OPT_IN_CHANNELS_ON, t) }, p.G_.optedIn(t)),
        h.default.track(m.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, l.H$)(e),
            action_type: t ? "guild_enabled" : "guild_disabled",
            location: n,
        });
}
function O(e, t, n, r) {
    if (null == e || d.A.isFullServerPreview(e)) return;
    let s = E.Ay.getChannelIdFlags(e, t);
    !(0, i.Lt)(s, g.vv.OPT_IN_ENABLED) && n && (s = (0, i.lA)(s, g.vv.OPT_IN_ENABLED, !0)),
        o.A.updateChannelOverrideSettings(e, t, { flags: (0, i.lA)(s, g.vv.FAVORITED, n) }, p.G_.favorited(n)),
        h.default.track(m.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, l.H$)(e),
            action_type: n ? "favorited" : "unfavorited",
            location: r,
        });
}
function R(e) {
    (0, _.TG)(
        e,
        (e) =>
            (!(0, i.Lt)(e.guildOnboardingProgress, s.eF.GUILD_NOTICE_CLEARED) ||
                !!(0, i.Lt)(e.guildOnboardingProgress, s.eF.GUILD_NOTICE_SHOWN)) &&
            ((e.guildOnboardingProgress = (0, i.UI)(e.guildOnboardingProgress, s.eF.GUILD_NOTICE_CLEARED)),
            (e.guildOnboardingProgress = (0, i.lA)(e.guildOnboardingProgress, s.eF.GUILD_NOTICE_SHOWN, !1)),
            !0),
        _.Sb.INFREQUENT_USER_ACTION,
    );
}
function v(e, t) {
    a.h.dispatch({ type: "DISMISS_FAVORITE_SUGGESTION", guildId: e, channelId: t });
}
