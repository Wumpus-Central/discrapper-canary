"use strict";
n.d(t, { AC: () => A, Hb: () => S, Ol: () => N, e4: () => v, hp: () => y, jA: () => C, zk: () => I });
var r = n(735438),
    i = n(665260),
    a = n(873298),
    s = n(73153),
    o = n(832712),
    l = n(58149),
    u = n(529942),
    c = n(164956),
    d = n(931260),
    _ = n(594061),
    f = n(734057),
    p = n(543465),
    h = n(954571),
    m = n(477427),
    g = n(652215),
    E = n(355097);
function A(e, t, n, r) {
    if (null == e) return;
    if (c.A.isFullServerPreview(e)) return void (0, u.$u)(e, n ? [t] : [], n ? [] : [t]);
    let a = p.Ay.getChannelIdFlags(e, t);
    n || (a = (0, i.lA)(a, E.vv.FAVORITED, !1));
    let o = (0, m.ME)(e, t),
        _ = { flags: (0, i.lA)(a, E.vv.OPT_IN_ENABLED, n) },
        A = { channel_overrides: { [t]: _ } };
    d.A.saveUserGuildSettingsBulk({ [e]: A }),
        s.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: e, channelId: t, settings: _ }),
        (0, m.ct)({ guildId: e, channelId: t, change: _, previous: o, label: m.G_.optedIn(n), location: r }),
        b(e),
        h.default.track(g.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, l.H$)(e),
            ...(0, l.dI)(f.A.getChannel(t)),
            action_type: n ? "add" : "remove",
            location: r,
        });
}
function I(e, t, n, r) {
    if (null == e) return;
    if (c.A.isFullServerPreview(e)) {
        (0, u.$u)(e, n ? [t] : [], n ? [] : [t]), (0, u.Z$)(e, { optInEnabled: !0 });
        return;
    }
    let a = p.Ay.getChannelIdFlags(e, t);
    n || (a = (0, i.lA)(a, E.vv.FAVORITED, !1));
    let o = (0, m.ME)(e, t),
        _ = { flags: (0, i.lA)(a, E.vv.OPT_IN_ENABLED, n) };
    if (!p.Ay.isOptInEnabled(e)) {
        let n = (0, i.lA)(p.Ay.getGuildFlags(e), E.n3.OPT_IN_CHANNELS_ON, !0);
        d.A.saveUserGuildSettingsBulk({ [e]: { channel_overrides: { [t]: _ }, flags: n } });
    }
    s.h.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: e, channelId: t, settings: _ }),
        (0, m.ct)({ guildId: e, channelId: t, change: _, previous: o, label: m.G_.optedIn(n), location: r }),
        b(e),
        h.default.track(g.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, l.H$)(e),
            ...(0, l.dI)(f.A.getChannel(t)),
            action_type: n ? "add" : "remove",
            location: r,
        });
}
async function T(e, t) {
    if (null == e || c.A.isFullServerPreview(e)) return;
    let n = { channel_overrides: t };
    await d.A.saveUserGuildSettingsBulk({ [e]: n }),
        s.h.dispatch({ type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES", guildId: e, updates: t });
}
let y = (0, r.debounce)((e, t) => T(e, t), 1e3);
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    if (null == e) return;
    if (c.A.isFullServerPreview(e)) {
        (0, u.$u)(e, t, []), n && (0, u.Z$)(e, { optInEnabled: !0 });
        return;
    }
    let a = {};
    if (
        (t.forEach((t) => {
            let n = p.Ay.getChannelIdFlags(e, t);
            a[t] = { flags: (0, i.lA)(n, E.vv.OPT_IN_ENABLED, !0) };
        }),
        n)
    ) {
        let t = (0, i.lA)(p.Ay.getGuildFlags(e), E.n3.OPT_IN_CHANNELS_ON, !0);
        o.A.updateGuildAndChannelNotificationSettings(e, { flags: t, channel_overrides: a }, m.fd.OptedIn),
            h.default.track(g.HAw.CHANNEL_LIST_UPDATED, {
                ...(0, l.H$)(e),
                action_type: "add_many_and_enable_guild",
                location: r,
            });
    } else
        o.A.updateChannelOverrideSettingsBulk(e, a, m.fd.OptedIn),
            h.default.track(g.HAw.CHANNEL_LIST_UPDATED, { ...(0, l.H$)(e), action_type: "add_many", location: r });
}
function v(e, t, n) {
    if (c.A.isFullServerPreview(e)) return void (0, u.Z$)(e, { optInEnabled: t });
    let r = p.Ay.getGuildFlags(e);
    o.A.updateGuildNotificationSettings(e, { flags: (0, i.lA)(r, E.n3.OPT_IN_CHANNELS_ON, t) }, m.G_.optedIn(t)),
        h.default.track(g.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, l.H$)(e),
            action_type: t ? "guild_enabled" : "guild_disabled",
            location: n,
        });
}
function C(e, t, n, r) {
    if (null == e || c.A.isFullServerPreview(e)) return;
    let a = p.Ay.getChannelIdFlags(e, t);
    !(0, i.Lt)(a, E.vv.OPT_IN_ENABLED) && n && (a = (0, i.lA)(a, E.vv.OPT_IN_ENABLED, !0)),
        o.A.updateChannelOverrideSettings(e, t, { flags: (0, i.lA)(a, E.vv.FAVORITED, n) }, m.G_.favorited(n)),
        h.default.track(g.HAw.CHANNEL_LIST_UPDATED, {
            ...(0, l.H$)(e),
            action_type: n ? "favorited" : "unfavorited",
            location: r,
        });
}
function b(e) {
    (0, _.TG)(
        e,
        (e) =>
            (!(0, i.Lt)(e.guildOnboardingProgress, a.eF.GUILD_NOTICE_CLEARED) ||
                !!(0, i.Lt)(e.guildOnboardingProgress, a.eF.GUILD_NOTICE_SHOWN)) &&
            ((e.guildOnboardingProgress = (0, i.UI)(e.guildOnboardingProgress, a.eF.GUILD_NOTICE_CLEARED)),
            (e.guildOnboardingProgress = (0, i.lA)(e.guildOnboardingProgress, a.eF.GUILD_NOTICE_SHOWN, !1)),
            !0),
        _.Sb.INFREQUENT_USER_ACTION,
    );
}
function N(e, t) {
    s.h.dispatch({ type: "DISMISS_FAVORITE_SUGGESTION", guildId: e, channelId: t });
}
