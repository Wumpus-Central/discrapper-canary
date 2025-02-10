n.d(t, {
    U2: () => z,
    ZP: () => e_,
    wL: () => K
}),
    n(47120),
    n(789020);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(798140),
    u = n(160404),
    c = n(312400),
    d = n(569471),
    f = n(131704),
    _ = n(630388),
    p = n(709054),
    h = n(592125),
    m = n(430824),
    g = n(594174),
    E = n(981631),
    v = n(468788),
    y = n(490897),
    I = n(526761);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let b = {},
    S = {},
    A = !1,
    N = !1,
    C = { flags: 0 },
    R = new l.ZP(),
    O = new l.ZP(),
    D = {
        suppress_everyone: !1,
        suppress_roles: !1,
        mute_scheduled_events: !1,
        mobile_push: !0,
        muted: !1,
        message_notifications: E.bL.ALL_MESSAGES,
        flags: 0,
        channel_overrides: {},
        notify_highlights: E.gLR.NULL,
        hide_muted_channels: !1,
        version: -1,
        mute_config: null
    },
    L = {
        [E.bL.ALL_MESSAGES]: {
            ...D,
            message_notifications: E.bL.ALL_MESSAGES
        },
        [E.bL.ONLY_MENTIONS]: {
            ...D,
            message_notifications: E.bL.ONLY_MENTIONS
        }
    },
    x = {},
    w = {},
    P = 'null',
    M = new Set(),
    k = new Set(),
    U = {},
    G = {};
function B(e, t) {
    var n;
    let i = b[e],
        r = null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {},
        s = z(t.channel_overrides),
        o = {
            ...K(e),
            ...i,
            ...t,
            channel_overrides: s
        };
    R.clearTimer(e),
        a().forEach(r, (e) => {
            O.clearTimer(e.channel_id);
        }),
        Z(e, o),
        (b[e] = o),
        (x[e] = eu(b[e]));
    let l = a().filter(o.channel_overrides, (e) => {
        var t;
        return _.yE(null !== (t = e.flags) && void 0 !== t ? t : 0, I.ic.OPT_IN_ENABLED);
    });
    (w[e] = new Set(l.map((e) => e.channel_id))), F(e), delete S[e];
}
function Z(e, t) {
    !0 === t.muted &&
        R.setTimer(e, t.mute_config, () => {
            V(e, { muted: !1 }),
                o.Z.dispatch({
                    type: 'GUILD_MUTE_EXPIRED',
                    guildId: e
                });
        }) &&
        (t.muted = !1),
        a().forEach(t.channel_overrides, (t) => {
            !0 === t.muted &&
                O.setTimer(t.channel_id, t.mute_config, () => {
                    j(e, t.channel_id, { muted: !1 }),
                        o.Z.dispatch({
                            type: 'CHANNEL_MUTE_EXPIRED',
                            guildId: e,
                            channelId: t.channel_id
                        });
                }) &&
                (t.muted = !1);
        });
}
function F(e) {
    var t;
    if (null == e) return;
    let n = new Set(w[e]),
        i = null !== (t = U[e]) && void 0 !== t ? t : {};
    for (let e in i) {
        let t = i[e];
        _.yE(t.flags, I.ic.OPT_IN_ENABLED) ? n.add(e) : n.delete(e);
    }
    Object.keys(i).length > 0 ? (G[e] = n) : delete G[e];
}
function V(e, t) {
    var n;
    let i = b[e];
    B(e, {
        channel_overrides: null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {},
        ...t
    });
}
function j(e, t, n) {
    let i = W(e, t, n);
    Y(e, { [t]: i });
}
function H(e, t) {
    var n;
    let i = {},
        r = null !== (n = null != e ? U[e] : null) && void 0 !== n ? n : {};
    p.default.keys(t).forEach((n) => {
        var a;
        let s = W(e, n, t[n]);
        (i[n] = s), (r[n] = { flags: null !== (a = s.flags) && void 0 !== a ? a : 0 });
    }),
        null != e &&
            (U[e] = {
                ...U[e],
                ...r
            }),
        Y(e, i);
}
function Y(e, t) {
    var n;
    let i = b[e],
        r = null !== (n = null == i ? void 0 : i.channel_overrides) && void 0 !== n ? n : {};
    B(e, {
        channel_overrides:
            null == i
                ? t
                : {
                      ...r,
                      ...t
                  }
    });
}
function W(e, t, n) {
    var i;
    let r = b[e];
    return {
        channel_id: t,
        muted: !1,
        ...(null !== (i = null == r ? void 0 : r.channel_overrides) && void 0 !== i ? i : {})[t],
        ...n
    };
}
function K(e) {
    let t = m.Z.getGuild(e);
    return L[null != t ? t.defaultMessageNotifications : E.bL.ALL_MESSAGES];
}
function z() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e instanceof Array ? a().keyBy(e, 'channel_id') : e;
}
function q(e) {
    var t;
    return null !== (t = b[e]) && void 0 !== t ? t : K(e);
}
function Q(e) {
    null != e.userGuildSettings &&
        0 !== e.userGuildSettings.length &&
        ((b = {}),
        (x = {}),
        (w = {}),
        e.userGuildSettings.forEach((e) => {
            let t = e.guild_id;
            b[t] = e;
            let n = new Set(),
                i = new Set();
            for (let t in e.channel_overrides) {
                var r;
                let a = e.channel_overrides[t];
                (0, l.m$)(a) && n.add(t), _.yE(null !== (r = a.flags) && void 0 !== r ? r : 0, I.ic.OPT_IN_ENABLED) && i.add(t);
            }
            (x[t] = n), (w[t] = i);
        }));
}
function X(e) {
    ee(e.notificationSettings), R.reset(), O.reset(), e.userGuildSettings.partial || ((b = {}), (x = {}), (w = {}));
    let t = new Set();
    for (let n in (e.userGuildSettings.entries.forEach((e) => {
        let n = e;
        'channel_overrides' in n || (n.channel_overrides = {}), B(e.guild_id, n), null != e.guild_id && t.add(e.guild_id);
    }),
    b))
        t.has(n) || Z(n, b[n]);
}
function J(e) {
    let { allUserGuildSettings: t } = e,
        { userGuildSettings: n, mutedChannels: i, optedInChannelsByGuild: r } = t;
    (b = { ...n }),
        (x = {}),
        (w = {}),
        p.default.keys(i).forEach((e) => {
            x[e] = new Set(i[e]);
        }),
        p.default.keys(r).forEach((e) => {
            w[e] = new Set(r[e]);
        });
}
function $(e) {
    let { settings: t } = e;
    ee(t);
}
function ee(e) {
    (A = _.yE(e.flags, v.c.USE_NEW_NOTIFICATIONS)), (N = _.yE(e.flags, v.c.MENTION_ON_ALL_MESSAGES)), (C = e);
}
function et(e) {
    let { userGuildSettings: t } = e;
    t.forEach((e) => {
        B(e.guild_id, {
            channel_overrides: {},
            ...e
        });
    });
}
function en(e) {
    let { guildId: t, settings: n } = e;
    V(t, n);
}
function ei(e) {
    let { guildId: t, settings: n } = e;
    V(t, n), H(t, n.channel_overrides);
}
function er(e) {
    let { guildId: t, channelId: n, settings: i } = e;
    null != t &&
        null != i.flags &&
        (U[t] = {
            ...U[t],
            [n]: { flags: i.flags }
        }),
        j(t, n, i);
}
function ea(e) {
    let { guildId: t } = e;
    if (null == t) return !1;
    delete U[t], delete G[t];
}
function es(e) {
    let { guildId: t, updates: n } = e;
    if (null == t) return !1;
    let i = U[t];
    if (null == i) return !1;
    for (let e in n) a().isEqual(n[e], i[e]) && delete i[e];
}
function eo(e) {
    let { guildId: t, overrides: n } = e;
    return !(null == t || u.Z.isFullServerPreview(t)) && (H(t, n), !0);
}
function el(e) {
    let { guildId: t } = e,
        n = null == b[t] ? K(t) : b[t];
    b[t] = {
        ...n,
        guild_id: t,
        hide_muted_channels: !0 !== n.hide_muted_channels
    };
}
function eu(e) {
    return new Set(
        null != e.channel_overrides
            ? a()(e.channel_overrides)
                  .filter((e) => (0, l.m$)(e))
                  .map((e) => e.channel_id)
                  .value()
            : null
    );
}
function ec() {
    return !0;
}
function ed() {
    return A && c.xT.getCurrentConfig({ location: 'UserGuildSettingsStore' }, { autoTrackExposure: !1 }).enabled;
}
class ef extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(g.default, m.Z, u.Z, d.Z), null != e)) {
            var t, n;
            (A = null !== (t = e.useNewNotifications) && void 0 !== t && t),
                'userGuildSettings' in e &&
                    ((b = e.userGuildSettings),
                    (w = a().mapValues(null !== (n = e.optedInChannelsByGuild) && void 0 !== n ? n : {}, (e) => new Set(e))),
                    a().forEach(b, (e, t) => {
                        x[t] = eu(e);
                    }));
        }
    }
    getState() {
        return { useNewNotifications: A };
    }
    get mentionOnAllMessages() {
        return N;
    }
    isSuppressEveryoneEnabled(e) {
        return q(e).suppress_everyone;
    }
    isSuppressRolesEnabled(e) {
        return q(e).suppress_roles;
    }
    isMuteScheduledEventsEnabled(e) {
        return q(e).mute_scheduled_events;
    }
    isMobilePushEnabled(e) {
        return q(e).mobile_push;
    }
    isMuted(e) {
        let t = q(e);
        return (0, l.m$)(t);
    }
    isTemporarilyMuted(e) {
        let t = q(e);
        return (0, l.Cl)(t);
    }
    getMuteConfig(e) {
        return q(e).mute_config;
    }
    getMessageNotifications(e) {
        return q(e).message_notifications;
    }
    getChannelOverrides(e) {
        var t;
        return null !== (t = q(e).channel_overrides) && void 0 !== t ? t : {};
    }
    getNotifyHighlights(e) {
        return q(e).notify_highlights;
    }
    getGuildFlags(e) {
        return q(e).flags;
    }
    getChannelMessageNotifications(e, t) {
        let n = this.getChannelOverrides(e)[t];
        return null == n || null == n.message_notifications ? E.bL.NULL : n.message_notifications;
    }
    getChannelMuteConfig(e, t) {
        let n = this.getChannelOverrides(e)[t];
        return null != n ? n.mute_config : null;
    }
    getMutedChannels(e) {
        var t;
        return null !== (t = x[e]) && void 0 !== t ? t : M;
    }
    isChannelMuted(e, t) {
        var n;
        let i = h.Z.getChannel(t);
        return (e = null !== (n = null == i ? void 0 : i.getGuildId()) && void 0 !== n ? n : e), this.getMutedChannels(e).has(t);
    }
    isCategoryMuted(e, t) {
        let n = h.Z.getChannel(t);
        if (null == n) return !1;
        let i = n.parent_id;
        return null != i && this.getMutedChannels(e).has(i);
    }
    resolvedMessageNotifications(e) {
        let t = this.getChannelMessageNotifications(e.guild_id, e.id);
        if (t !== E.bL.NULL) return t;
        if (null != e.parent_id) {
            let t = this.getChannelMessageNotifications(e.guild_id, e.parent_id);
            if (t !== E.bL.NULL) return t;
        }
        return this.getMessageNotifications(e.guild_id);
    }
    resolveUnreadSetting(e) {
        if (f.Ec.has(e.type) || (0, f.hv)(e.type) || !ed()) return y.i.ALL_MESSAGES;
        let t = this.getChannelUnreadSetting(e.guild_id, e.id);
        if (t !== y.i.UNSET) return t;
        if (null != e.parent_id) {
            let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
            if (t !== y.i.UNSET) return t;
        }
        let n = this.getGuildUnreadSetting(e.guild_id);
        return n !== y.i.UNSET ? n : this.resolvedMessageNotifications(e) === E.bL.ALL_MESSAGES ? y.i.ALL_MESSAGES : y.i.ONLY_MENTIONS;
    }
    isGuildOrCategoryOrChannelMuted(e, t) {
        return this.isMuted(e) || this.isCategoryMuted(e, t) || this.isChannelMuted(e, t);
    }
    allowNoMessages(e) {
        return this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) || this.resolvedMessageNotifications(e) === E.bL.NO_MESSAGES || (this.isOptInEnabled(e.guild_id) && !this.isChannelRecordOrParentOptedIn(e));
    }
    allowAllMessages(e) {
        return !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) && this.resolvedMessageNotifications(e) === E.bL.ALL_MESSAGES && (!this.isOptInEnabled(e.guild_id) || this.isChannelRecordOrParentOptedIn(e));
    }
    isGuildCollapsed(e) {
        var t;
        return (null === (t = b[e]) || void 0 === t ? void 0 : t.hide_muted_channels) === !0;
    }
    getAllSettings() {
        return {
            userGuildSettings: b,
            mutedChannels: x,
            optedInChannelsByGuild: w
        };
    }
    getChannelIdFlags(e, t) {
        var n;
        let i = this.getChannelOverrides(e)[t];
        return null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : 0;
    }
    getChannelFlags(e) {
        return this.getChannelIdFlags(e.guild_id, e.id);
    }
    getNewForumThreadsCreated(e) {
        let t = this.getChannelOverrides(e.guild_id)[e.id];
        if (null != t && null != t.flags) {
            if (_.yE(t.flags, I.ic.NEW_FORUM_THREADS_ON)) return !0;
            if (_.yE(t.flags, I.ic.NEW_FORUM_THREADS_OFF)) return !1;
        }
        return this.resolvedMessageNotifications(e) === E.bL.ALL_MESSAGES;
    }
    isOptInEnabled(e) {
        return null != e && (u.Z.isFullServerPreview(e) ? u.Z.isOptInEnabled(e) : _.yE(this.getGuildFlags(e), I.vc.OPT_IN_CHANNELS_ON));
    }
    isChannelRecordOrParentOptedIn(e, t) {
        return null != e && null != e.guild_id && (this.isChannelOptedIn(e.guild_id, e.id, t) || (null != e.parent_id && this.isChannelOptedIn(e.guild_id, e.parent_id, t)));
    }
    isChannelOrParentOptedIn(e, t, n) {
        return this.isChannelRecordOrParentOptedIn(h.Z.getChannel(t), n);
    }
    isChannelOptedIn(e, t) {
        var n, i;
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e) return !1;
        if (u.Z.isFullServerPreview(e)) return u.Z.isChannelOptedIn(e, t);
        if (r && null != G[e]) return G[e].has(t);
        let a = null !== (i = null === (n = this.getChannelOverrides(e)[t]) || void 0 === n ? void 0 : n.flags) && void 0 !== i ? i : 0;
        return _.yE(a, I.ic.OPT_IN_ENABLED);
    }
    getOptedInChannels(e) {
        var t, n;
        return u.Z.isFullServerPreview(e) ? (null !== (t = u.Z.getViewingChannels(e)) && void 0 !== t ? t : k) : null !== (n = w[e]) && void 0 !== n ? n : k;
    }
    getOptedInChannelsWithPendingUpdates(e) {
        return G[e];
    }
    getPendingChannelUpdates(e) {
        return U[e];
    }
    getGuildFavorites(e) {
        if (u.Z.isFullServerPreview(e)) return null;
        if (null == S[e]) {
            let t = a().filter(this.getChannelOverrides(e), (t) => {
                var n, i;
                return _.yE(null !== (i = t.flags) && void 0 !== i ? i : 0, I.ic.FAVORITED) && (null === (n = h.Z.getChannel(t.channel_id)) || void 0 === n ? void 0 : n.guild_id) === e;
            });
            S[e] = t.map((e) => e.channel_id);
        }
        return S[e];
    }
    isFavorite(e, t) {
        var n;
        return !u.Z.isFullServerPreview(e) && (null === (n = this.getGuildFavorites(e)) || void 0 === n ? void 0 : n.includes(t)) === !0;
    }
    isMessagesFavorite(e) {
        var t, n;
        let i = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
        return _.yE(i, I.ic.FAVORITED);
    }
    isAddedToMessages(e) {
        var t, n;
        let i = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
        return _.yE(i, I.ic.OPT_IN_ENABLED);
    }
    getAddedToMessages() {
        var e;
        return null !== (e = w[P]) && void 0 !== e ? e : k;
    }
    get accountNotificationSettings() {
        return C;
    }
    get useNewNotifications() {
        return A;
    }
    getGuildUnreadSetting(e) {
        if (!ed()) return y.i.ALL_MESSAGES;
        let t = this.getGuildFlags(e);
        return _.yE(t, I.vc.UNREADS_ALL_MESSAGES) ? y.i.ALL_MESSAGES : _.yE(t, I.vc.UNREADS_ONLY_MENTIONS) ? y.i.ONLY_MENTIONS : y.i.UNSET;
    }
    resolveGuildUnreadSetting(e) {
        let t = this.getGuildFlags(e.id);
        return !ed() || _.yE(t, I.vc.UNREADS_ALL_MESSAGES) ? y.i.ALL_MESSAGES : _.yE(t, I.vc.UNREADS_ONLY_MENTIONS) ? y.i.ONLY_MENTIONS : e.defaultMessageNotifications === E.bL.ALL_MESSAGES ? y.i.ALL_MESSAGES : y.i.ONLY_MENTIONS;
    }
    getChannelRecordUnreadSetting(e) {
        return this.getChannelUnreadSetting(e.guild_id, e.id);
    }
    getChannelUnreadSetting(e, t) {
        let n = this.getChannelIdFlags(e, t);
        return _.yE(n, I.ic.UNREADS_ALL_MESSAGES) ? y.i.ALL_MESSAGES : _.yE(n, I.ic.UNREADS_ONLY_MENTIONS) ? y.i.ONLY_MENTIONS : y.i.UNSET;
    }
}
T(ef, 'displayName', 'UserGuildSettingsStore'), T(ef, 'persistKey', 'collapsedGuilds');
let e_ = new ef(o.Z, {
    USER_GUILD_SETTINGS_FULL_UPDATE: et,
    USER_GUILD_SETTINGS_GUILD_UPDATE: en,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: ei,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: er,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: eo,
    CONNECTION_OPEN: X,
    CACHE_LOADED: Q,
    OVERLAY_INITIALIZE: J,
    GUILD_CREATE: ec,
    GUILD_UPDATE: ec,
    GUILD_TOGGLE_COLLAPSE_MUTED: el,
    IMPERSONATE_UPDATE: ec,
    IMPERSONATE_STOP: ec,
    USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: es,
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: ea,
    NOTIFICATION_SETTINGS_UPDATE: $,
    GUILD_MUTE_EXPIRED: () => !0,
    CHANNEL_MUTE_EXPIRED: () => !0
});
