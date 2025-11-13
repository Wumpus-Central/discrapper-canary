n.d(t, {
    U2: () => X,
    ZP: () => eh,
    wL: () => q,
}),
    n(388685),
    n(997841);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(798140),
    c = n(160404),
    u = n(569471),
    d = n(131704),
    f = n(630388),
    _ = n(709054),
    p = n(592125),
    h = n(430824),
    m = n(594174),
    g = n(981631),
    E = n(468788),
    b = n(490897),
    y = n(526761);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = {},
    A = {},
    C = !1,
    N = !1,
    R = { flags: 0 },
    P = new l.ZP(),
    D = new l.ZP(),
    w = {
        suppress_everyone: !1,
        suppress_roles: !1,
        mute_scheduled_events: !1,
        mobile_push: !0,
        muted: !1,
        message_notifications: g.bL.ALL_MESSAGES,
        flags: 0,
        channel_overrides: {},
        notify_highlights: g.gLR.NULL,
        hide_muted_channels: !1,
        version: -1,
        mute_config: null,
    },
    x = {
        [g.bL.ALL_MESSAGES]: T(v({}, w), { message_notifications: g.bL.ALL_MESSAGES }),
        [g.bL.ONLY_MENTIONS]: T(v({}, w), { message_notifications: g.bL.ONLY_MENTIONS }),
    },
    L = {},
    M = {},
    j = "null",
    k = new Set(),
    U = new Set(),
    G = {},
    B = {};
function Z(e, t) {
    var n;
    let r = S[e],
        i = null != (n = null == r ? void 0 : r.channel_overrides) ? n : {},
        o = X(t.channel_overrides),
        s = T(v({}, q(e), r, t), { channel_overrides: o });
    P.clearTimer(e),
        a().forEach(i, (e) => {
            D.clearTimer(e.channel_id);
        }),
        F(e, s),
        (S[e] = s),
        (L[e] = ed(S[e]));
    let l = a().filter(s.channel_overrides, (e) => {
        var t;
        return f.yE(null != (t = e.flags) ? t : 0, y.ic.OPT_IN_ENABLED);
    });
    (M[e] = new Set(l.map((e) => e.channel_id))), V(e), delete A[e];
}
function F(e, t) {
    !0 === t.muted &&
        P.setTimer(e, t.mute_config, () => {
            H(e, { muted: !1 }),
                s.Z.dispatch({
                    type: "GUILD_MUTE_EXPIRED",
                    guildId: e,
                });
        }) &&
        (t.muted = !1),
        a().forEach(t.channel_overrides, (t) => {
            !0 === t.muted &&
                D.setTimer(t.channel_id, t.mute_config, () => {
                    Y(e, t.channel_id, { muted: !1 }),
                        s.Z.dispatch({
                            type: "CHANNEL_MUTE_EXPIRED",
                            guildId: e,
                            channelId: t.channel_id,
                        });
                }) &&
                (t.muted = !1);
        });
}
function V(e) {
    var t;
    if (null == e) return;
    let n = new Set(M[e]),
        r = null != (t = G[e]) ? t : {};
    for (let e in r) {
        let t = r[e];
        f.yE(t.flags, y.ic.OPT_IN_ENABLED) ? n.add(e) : n.delete(e);
    }
    Object.keys(r).length > 0 ? (B[e] = n) : delete B[e];
}
function H(e, t) {
    var n;
    let r = S[e];
    Z(e, v({ channel_overrides: null != (n = null == r ? void 0 : r.channel_overrides) ? n : {} }, t));
}
function Y(e, t, n) {
    let r = z(e, t, n);
    K(e, { [t]: r });
}
function W(e, t) {
    var n;
    let r = {},
        i = null != (n = null != e ? G[e] : null) ? n : {};
    _.default.keys(t).forEach((n) => {
        var a;
        let o = z(e, n, t[n]);
        (r[n] = o), (i[n] = { flags: null != (a = o.flags) ? a : 0 });
    }),
        null != e && (G[e] = v({}, G[e], i)),
        K(e, r);
}
function K(e, t) {
    var n;
    let r = S[e],
        i = null != (n = null == r ? void 0 : r.channel_overrides) ? n : {};
    Z(e, { channel_overrides: null == r ? t : v({}, i, t) });
}
function z(e, t, n) {
    var r;
    let i = S[e];
    return v(
        {},
        {
            channel_id: t,
            muted: !1,
        },
        (null != (r = null == i ? void 0 : i.channel_overrides) ? r : {})[t],
        n,
    );
}
function q(e) {
    let t = h.Z.getGuild(e);
    return x[null != t ? t.defaultMessageNotifications : g.bL.ALL_MESSAGES];
}
function X() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e instanceof Array ? a().keyBy(e, "channel_id") : e;
}
function Q(e) {
    var t;
    return null != (t = S[e]) ? t : q(e);
}
function J(e) {
    null != e.userGuildSettings &&
        0 !== e.userGuildSettings.length &&
        ((S = {}),
        (L = {}),
        (M = {}),
        e.userGuildSettings.forEach((e) => {
            let t = e.guild_id;
            S[t] = e;
            let n = new Set(),
                r = new Set();
            for (let t in e.channel_overrides) {
                var i;
                let a = e.channel_overrides[t];
                (0, l.m$)(a) && n.add(t), f.yE(null != (i = a.flags) ? i : 0, y.ic.OPT_IN_ENABLED) && r.add(t);
            }
            (L[t] = n), (M[t] = r);
        }));
}
function $(e) {
    en(e.notificationSettings), P.reset(), D.reset(), e.userGuildSettings.partial || ((S = {}), (L = {}), (M = {}));
    let t = new Set();
    for (let n in (e.userGuildSettings.entries.forEach((e) => {
        let n = e;
        "channel_overrides" in n || (n.channel_overrides = {}),
            Z(e.guild_id, n),
            null != e.guild_id && t.add(e.guild_id);
    }),
    S))
        t.has(n) || F(n, S[n]);
}
function ee(e) {
    let { allUserGuildSettings: t } = e,
        { userGuildSettings: n, mutedChannels: r, optedInChannelsByGuild: i } = t;
    (S = v({}, n)),
        (L = {}),
        (M = {}),
        _.default.keys(r).forEach((e) => {
            L[e] = new Set(r[e]);
        }),
        _.default.keys(i).forEach((e) => {
            M[e] = new Set(i[e]);
        });
}
function et(e) {
    let { settings: t } = e;
    en(t);
}
function en(e) {
    (C = f.yE(e.flags, E.c.USE_NEW_NOTIFICATIONS)), (N = f.yE(e.flags, E.c.MENTION_ON_ALL_MESSAGES)), (R = e);
}
function er(e) {
    let { userGuildSettings: t } = e;
    t.forEach((e) => {
        Z(e.guild_id, v({ channel_overrides: {} }, e));
    });
}
function ei(e) {
    let { guildId: t, settings: n } = e;
    H(t, n);
}
function ea(e) {
    let { guildId: t, settings: n } = e;
    H(t, n), W(t, n.channel_overrides);
}
function eo(e) {
    let { guildId: t, channelId: n, settings: r } = e;
    null != t && null != r.flags && (G[t] = T(v({}, G[t]), { [n]: { flags: r.flags } })), Y(t, n, r);
}
function es(e) {
    let { guildId: t } = e;
    if (null == t) return !1;
    delete G[t], delete B[t];
}
function el(e) {
    let { guildId: t, updates: n } = e;
    if (null == t) return !1;
    let r = G[t];
    if (null == r) return !1;
    for (let e in n) a().isEqual(n[e], r[e]) && delete r[e];
}
function ec(e) {
    let { guildId: t, overrides: n } = e;
    return !(null == t || c.Z.isFullServerPreview(t)) && (W(t, n), !0);
}
function eu(e) {
    let { guildId: t } = e,
        n = null == S[t] ? q(t) : S[t];
    S[t] = T(v({}, n), {
        guild_id: t,
        hide_muted_channels: !0 !== n.hide_muted_channels,
    });
}
function ed(e) {
    return new Set(
        null != e.channel_overrides
            ? a()(e.channel_overrides)
                  .filter((e) => (0, l.m$)(e))
                  .map((e) => e.channel_id)
                  .value()
            : null,
    );
}
function ef() {
    return !0;
}
function e_() {
    return C;
}
class ep extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(p.Z, h.Z, c.Z, u.Z, m.default), null != e)) {
            var t, n;
            (C = null != (t = e.useNewNotifications) && t),
                "userGuildSettings" in e &&
                    ((S = e.userGuildSettings),
                    (M = a().mapValues(null != (n = e.optedInChannelsByGuild) ? n : {}, (e) => new Set(e))),
                    a().forEach(S, (e, t) => {
                        L[t] = ed(e);
                    }));
        }
    }
    getState() {
        return { useNewNotifications: C };
    }
    get mentionOnAllMessages() {
        return N;
    }
    isSuppressEveryoneEnabled(e) {
        return Q(e).suppress_everyone;
    }
    isSuppressRolesEnabled(e) {
        return Q(e).suppress_roles;
    }
    isMuteScheduledEventsEnabled(e) {
        return Q(e).mute_scheduled_events;
    }
    isMobilePushEnabled(e) {
        return Q(e).mobile_push;
    }
    isMuted(e) {
        let t = Q(e);
        return (0, l.m$)(t);
    }
    isTemporarilyMuted(e) {
        let t = Q(e);
        return (0, l.Cl)(t);
    }
    getMuteConfig(e) {
        return Q(e).mute_config;
    }
    getMessageNotifications(e) {
        return Q(e).message_notifications;
    }
    getChannelOverrides(e) {
        var t;
        return null != (t = Q(e).channel_overrides) ? t : {};
    }
    getNotifyHighlights(e) {
        return Q(e).notify_highlights;
    }
    getGuildFlags(e) {
        return Q(e).flags;
    }
    getChannelMessageNotifications(e, t) {
        let n = this.getChannelOverrides(e)[t];
        return null == n || null == n.message_notifications ? g.bL.NULL : n.message_notifications;
    }
    getChannelMuteConfig(e, t) {
        let n = this.getChannelOverrides(e)[t];
        return null != n ? n.mute_config : null;
    }
    getMutedChannels(e) {
        var t;
        return null != (t = L[e]) ? t : k;
    }
    isChannelMuted(e, t) {
        var n;
        let r = p.Z.getChannel(t);
        return (e = null != (n = null == r ? void 0 : r.getGuildId()) ? n : e), this.getMutedChannels(e).has(t);
    }
    isCategoryMuted(e, t) {
        let n = p.Z.getChannel(t);
        if (null == n) return !1;
        let r = n.parent_id;
        return null != r && this.getMutedChannels(e).has(r);
    }
    resolvedMessageNotifications(e) {
        let t = this.getChannelMessageNotifications(e.guild_id, e.id);
        if (t !== g.bL.NULL) return t;
        if (null != e.parent_id) {
            let t = this.getChannelMessageNotifications(e.guild_id, e.parent_id);
            if (t !== g.bL.NULL) return t;
        }
        return this.getMessageNotifications(e.guild_id);
    }
    resolveUnreadSetting(e) {
        if (d.Ec.has(e.type) || (0, d.hv)(e.type) || !e_()) return b.i.ALL_MESSAGES;
        let t = this.getChannelUnreadSetting(e.guild_id, e.id);
        if (t !== b.i.UNSET) return t;
        if (null != e.parent_id) {
            let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
            if (t !== b.i.UNSET) return t;
        }
        let n = this.getGuildUnreadSetting(e.guild_id);
        return n !== b.i.UNSET
            ? n
            : this.resolvedMessageNotifications(e) === g.bL.ALL_MESSAGES
              ? b.i.ALL_MESSAGES
              : b.i.ONLY_MENTIONS;
    }
    isGuildOrCategoryOrChannelMuted(e, t) {
        return this.isMuted(e) || this.isCategoryMuted(e, t) || this.isChannelMuted(e, t);
    }
    allowNoMessages(e) {
        return (
            this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) ||
            this.resolvedMessageNotifications(e) === g.bL.NO_MESSAGES ||
            (this.isOptInEnabled(e.guild_id) && !this.isChannelRecordOrParentOptedIn(e))
        );
    }
    allowAllMessages(e) {
        return (
            !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) &&
            this.resolvedMessageNotifications(e) === g.bL.ALL_MESSAGES &&
            (!this.isOptInEnabled(e.guild_id) || this.isChannelRecordOrParentOptedIn(e))
        );
    }
    isGuildCollapsed(e) {
        var t;
        return (null == (t = S[e]) ? void 0 : t.hide_muted_channels) === !0;
    }
    getAllSettings() {
        return {
            userGuildSettings: S,
            mutedChannels: L,
            optedInChannelsByGuild: M,
        };
    }
    getChannelIdFlags(e, t) {
        var n;
        let r = this.getChannelOverrides(e)[t];
        return null != (n = null == r ? void 0 : r.flags) ? n : 0;
    }
    getChannelFlags(e) {
        return this.getChannelIdFlags(e.guild_id, e.id);
    }
    getNewForumThreadsCreated(e) {
        let t = this.getChannelOverrides(e.guild_id)[e.id];
        if (null != t && null != t.flags) {
            if (f.yE(t.flags, y.ic.NEW_FORUM_THREADS_ON)) return !0;
            if (f.yE(t.flags, y.ic.NEW_FORUM_THREADS_OFF)) return !1;
        }
        return this.resolvedMessageNotifications(e) === g.bL.ALL_MESSAGES;
    }
    isOptInEnabled(e) {
        return (
            null != e &&
            (c.Z.isFullServerPreview(e) ? c.Z.isOptInEnabled(e) : f.yE(this.getGuildFlags(e), y.vc.OPT_IN_CHANNELS_ON))
        );
    }
    isChannelRecordOrParentOptedIn(e, t) {
        return (
            null != e &&
            null != e.guild_id &&
            (this.isChannelOptedIn(e.guild_id, e.id, t) ||
                (null != e.parent_id && this.isChannelOptedIn(e.guild_id, e.parent_id, t)))
        );
    }
    isChannelOrParentOptedIn(e, t, n) {
        return this.isChannelRecordOrParentOptedIn(p.Z.getChannel(t), n);
    }
    isChannelOptedIn(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e) return !1;
        if (c.Z.isFullServerPreview(e)) return c.Z.isChannelOptedIn(e, t);
        if (i && null != B[e]) return B[e].has(t);
        let a = null != (r = null == (n = this.getChannelOverrides(e)[t]) ? void 0 : n.flags) ? r : 0;
        return f.yE(a, y.ic.OPT_IN_ENABLED);
    }
    getOptedInChannels(e) {
        var t, n;
        return c.Z.isFullServerPreview(e)
            ? null != (t = c.Z.getViewingChannels(e))
                ? t
                : U
            : null != (n = M[e])
              ? n
              : U;
    }
    getOptedInChannelsWithPendingUpdates(e) {
        return B[e];
    }
    getPendingChannelUpdates(e) {
        return G[e];
    }
    getGuildFavorites(e) {
        if (c.Z.isFullServerPreview(e)) return null;
        if (null == A[e]) {
            let t = a().filter(this.getChannelOverrides(e), (t) => {
                var n, r;
                return (
                    f.yE(null != (r = t.flags) ? r : 0, y.ic.FAVORITED) &&
                    (null == (n = p.Z.getChannel(t.channel_id)) ? void 0 : n.guild_id) === e
                );
            });
            A[e] = t.map((e) => e.channel_id);
        }
        return A[e];
    }
    isFavorite(e, t) {
        var n;
        return !c.Z.isFullServerPreview(e) && (null == (n = this.getGuildFavorites(e)) ? void 0 : n.includes(t)) === !0;
    }
    isMessagesFavorite(e) {
        var t, n;
        let r = null != (n = null == (t = this.getChannelOverrides(null)[e]) ? void 0 : t.flags) ? n : 0;
        return f.yE(r, y.ic.FAVORITED);
    }
    isAddedToMessages(e) {
        var t, n;
        let r = null != (n = null == (t = this.getChannelOverrides(null)[e]) ? void 0 : t.flags) ? n : 0;
        return f.yE(r, y.ic.OPT_IN_ENABLED);
    }
    getAddedToMessages() {
        var e;
        return null != (e = M[j]) ? e : U;
    }
    get accountNotificationSettings() {
        return R;
    }
    get useNewNotifications() {
        return C;
    }
    getGuildUnreadSetting(e) {
        if (!e_()) return b.i.ALL_MESSAGES;
        let t = this.getGuildFlags(e);
        return f.yE(t, y.vc.UNREADS_ALL_MESSAGES)
            ? b.i.ALL_MESSAGES
            : f.yE(t, y.vc.UNREADS_ONLY_MENTIONS)
              ? b.i.ONLY_MENTIONS
              : b.i.UNSET;
    }
    resolveGuildUnreadSetting(e) {
        let t = this.getGuildFlags(e.id);
        return !e_() || f.yE(t, y.vc.UNREADS_ALL_MESSAGES)
            ? b.i.ALL_MESSAGES
            : f.yE(t, y.vc.UNREADS_ONLY_MENTIONS)
              ? b.i.ONLY_MENTIONS
              : e.defaultMessageNotifications === g.bL.ALL_MESSAGES
                ? b.i.ALL_MESSAGES
                : b.i.ONLY_MENTIONS;
    }
    getChannelRecordUnreadSetting(e) {
        return this.getChannelUnreadSetting(e.guild_id, e.id);
    }
    getChannelUnreadSetting(e, t) {
        let n = this.getChannelIdFlags(e, t);
        return f.yE(n, y.ic.UNREADS_ALL_MESSAGES)
            ? b.i.ALL_MESSAGES
            : f.yE(n, y.ic.UNREADS_ONLY_MENTIONS)
              ? b.i.ONLY_MENTIONS
              : b.i.UNSET;
    }
}
O(ep, "displayName", "UserGuildSettingsStore"), O(ep, "persistKey", "collapsedGuilds");
let eh = new ep(s.Z, {
    USER_GUILD_SETTINGS_FULL_UPDATE: er,
    USER_GUILD_SETTINGS_GUILD_UPDATE: ei,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: ea,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: eo,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: ec,
    CONNECTION_OPEN: $,
    CACHE_LOADED: J,
    OVERLAY_INITIALIZE: ee,
    GUILD_CREATE: ef,
    GUILD_UPDATE: ef,
    GUILD_TOGGLE_COLLAPSE_MUTED: eu,
    IMPERSONATE_UPDATE: ef,
    IMPERSONATE_STOP: ef,
    USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: el,
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: es,
    NOTIFICATION_SETTINGS_UPDATE: et,
    GUILD_MUTE_EXPIRED: () => !0,
    CHANNEL_MUTE_EXPIRED: () => !0,
});
