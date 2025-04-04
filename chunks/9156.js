n.d(t, {
    U2: () => X,
    ZP: () => em,
    wL: () => Q
}),
    n(47120),
    n(789020);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(798140),
    c = n(160404),
    u = n(312400),
    d = n(569471),
    f = n(131704),
    _ = n(630388),
    p = n(709054),
    h = n(592125),
    m = n(430824),
    g = n(594174),
    E = n(981631),
    b = n(468788),
    y = n(490897),
    v = n(526761);
function O(e, t, n) {
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
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = {},
    A = {},
    C = !1,
    R = !1,
    P = { flags: 0 },
    w = new l.ZP(),
    D = new l.ZP(),
    L = {
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
    x = {
        [E.bL.ALL_MESSAGES]: T(I({}, L), { message_notifications: E.bL.ALL_MESSAGES }),
        [E.bL.ONLY_MENTIONS]: T(I({}, L), { message_notifications: E.bL.ONLY_MENTIONS })
    },
    M = {},
    k = {},
    j = 'null',
    U = new Set(),
    G = new Set(),
    B = {},
    F = {};
function V(e, t) {
    var n;
    let r = N[e],
        i = null != (n = null == r ? void 0 : r.channel_overrides) ? n : {},
        a = X(t.channel_overrides),
        s = T(I({}, Q(e), r, t), { channel_overrides: a });
    w.clearTimer(e),
        o().forEach(i, (e) => {
            D.clearTimer(e.channel_id);
        }),
        Z(e, s),
        (N[e] = s),
        (M[e] = ef(N[e]));
    let l = o().filter(s.channel_overrides, (e) => {
        var t;
        return _.yE(null != (t = e.flags) ? t : 0, v.ic.OPT_IN_ENABLED);
    });
    (k[e] = new Set(l.map((e) => e.channel_id))), H(e), delete A[e];
}
function Z(e, t) {
    !0 === t.muted &&
        w.setTimer(e, t.mute_config, () => {
            W(e, { muted: !1 }),
                s.Z.dispatch({
                    type: 'GUILD_MUTE_EXPIRED',
                    guildId: e
                });
        }) &&
        (t.muted = !1),
        o().forEach(t.channel_overrides, (t) => {
            !0 === t.muted &&
                D.setTimer(t.channel_id, t.mute_config, () => {
                    Y(e, t.channel_id, { muted: !1 }),
                        s.Z.dispatch({
                            type: 'CHANNEL_MUTE_EXPIRED',
                            guildId: e,
                            channelId: t.channel_id
                        });
                }) &&
                (t.muted = !1);
        });
}
function H(e) {
    var t;
    if (null == e) return;
    let n = new Set(k[e]),
        r = null != (t = B[e]) ? t : {};
    for (let e in r) {
        let t = r[e];
        _.yE(t.flags, v.ic.OPT_IN_ENABLED) ? n.add(e) : n.delete(e);
    }
    Object.keys(r).length > 0 ? (F[e] = n) : delete F[e];
}
function W(e, t) {
    var n;
    let r = N[e];
    V(e, I({ channel_overrides: null != (n = null == r ? void 0 : r.channel_overrides) ? n : {} }, t));
}
function Y(e, t, n) {
    let r = q(e, t, n);
    z(e, { [t]: r });
}
function K(e, t) {
    var n;
    let r = {},
        i = null != (n = null != e ? B[e] : null) ? n : {};
    p.default.keys(t).forEach((n) => {
        var o;
        let a = q(e, n, t[n]);
        (r[n] = a), (i[n] = { flags: null != (o = a.flags) ? o : 0 });
    }),
        null != e && (B[e] = I({}, B[e], i)),
        z(e, r);
}
function z(e, t) {
    var n;
    let r = N[e],
        i = null != (n = null == r ? void 0 : r.channel_overrides) ? n : {};
    V(e, { channel_overrides: null == r ? t : I({}, i, t) });
}
function q(e, t, n) {
    var r;
    let i = N[e];
    return I(
        {},
        {
            channel_id: t,
            muted: !1
        },
        (null != (r = null == i ? void 0 : i.channel_overrides) ? r : {})[t],
        n
    );
}
function Q(e) {
    let t = m.Z.getGuild(e);
    return x[null != t ? t.defaultMessageNotifications : E.bL.ALL_MESSAGES];
}
function X() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e instanceof Array ? o().keyBy(e, 'channel_id') : e;
}
function J(e) {
    var t;
    return null != (t = N[e]) ? t : Q(e);
}
function $(e) {
    null != e.userGuildSettings &&
        0 !== e.userGuildSettings.length &&
        ((N = {}),
        (M = {}),
        (k = {}),
        e.userGuildSettings.forEach((e) => {
            let t = e.guild_id;
            N[t] = e;
            let n = new Set(),
                r = new Set();
            for (let t in e.channel_overrides) {
                var i;
                let o = e.channel_overrides[t];
                (0, l.m$)(o) && n.add(t), _.yE(null != (i = o.flags) ? i : 0, v.ic.OPT_IN_ENABLED) && r.add(t);
            }
            (M[t] = n), (k[t] = r);
        }));
}
function ee(e) {
    er(e.notificationSettings), w.reset(), D.reset(), e.userGuildSettings.partial || ((N = {}), (M = {}), (k = {}));
    let t = new Set();
    for (let n in (e.userGuildSettings.entries.forEach((e) => {
        let n = e;
        'channel_overrides' in n || (n.channel_overrides = {}), V(e.guild_id, n), null != e.guild_id && t.add(e.guild_id);
    }),
    N))
        t.has(n) || Z(n, N[n]);
}
function et(e) {
    let { allUserGuildSettings: t } = e,
        { userGuildSettings: n, mutedChannels: r, optedInChannelsByGuild: i } = t;
    (N = I({}, n)),
        (M = {}),
        (k = {}),
        p.default.keys(r).forEach((e) => {
            M[e] = new Set(r[e]);
        }),
        p.default.keys(i).forEach((e) => {
            k[e] = new Set(i[e]);
        });
}
function en(e) {
    let { settings: t } = e;
    er(t);
}
function er(e) {
    (C = _.yE(e.flags, b.c.USE_NEW_NOTIFICATIONS)), (R = _.yE(e.flags, b.c.MENTION_ON_ALL_MESSAGES)), (P = e);
}
function ei(e) {
    let { userGuildSettings: t } = e;
    t.forEach((e) => {
        V(e.guild_id, I({ channel_overrides: {} }, e));
    });
}
function eo(e) {
    let { guildId: t, settings: n } = e;
    W(t, n);
}
function ea(e) {
    let { guildId: t, settings: n } = e;
    W(t, n), K(t, n.channel_overrides);
}
function es(e) {
    let { guildId: t, channelId: n, settings: r } = e;
    null != t && null != r.flags && (B[t] = T(I({}, B[t]), { [n]: { flags: r.flags } })), Y(t, n, r);
}
function el(e) {
    let { guildId: t } = e;
    if (null == t) return !1;
    delete B[t], delete F[t];
}
function ec(e) {
    let { guildId: t, updates: n } = e;
    if (null == t) return !1;
    let r = B[t];
    if (null == r) return !1;
    for (let e in n) o().isEqual(n[e], r[e]) && delete r[e];
}
function eu(e) {
    let { guildId: t, overrides: n } = e;
    return !(null == t || c.Z.isFullServerPreview(t)) && (K(t, n), !0);
}
function ed(e) {
    let { guildId: t } = e,
        n = null == N[t] ? Q(t) : N[t];
    N[t] = T(I({}, n), {
        guild_id: t,
        hide_muted_channels: !0 !== n.hide_muted_channels
    });
}
function ef(e) {
    return new Set(
        null != e.channel_overrides
            ? o()(e.channel_overrides)
                  .filter((e) => (0, l.m$)(e))
                  .map((e) => e.channel_id)
                  .value()
            : null
    );
}
function e_() {
    return !0;
}
function ep() {
    return C && u.xT.getCurrentConfig({ location: 'UserGuildSettingsStore' }, { autoTrackExposure: !1 }).enabled;
}
class eh extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(g.default, m.Z, c.Z, d.Z), null != e)) {
            var t, n;
            (C = null != (t = e.useNewNotifications) && t),
                'userGuildSettings' in e &&
                    ((N = e.userGuildSettings),
                    (k = o().mapValues(null != (n = e.optedInChannelsByGuild) ? n : {}, (e) => new Set(e))),
                    o().forEach(N, (e, t) => {
                        M[t] = ef(e);
                    }));
        }
    }
    getState() {
        return { useNewNotifications: C };
    }
    get mentionOnAllMessages() {
        return R;
    }
    isSuppressEveryoneEnabled(e) {
        return J(e).suppress_everyone;
    }
    isSuppressRolesEnabled(e) {
        return J(e).suppress_roles;
    }
    isMuteScheduledEventsEnabled(e) {
        return J(e).mute_scheduled_events;
    }
    isMobilePushEnabled(e) {
        return J(e).mobile_push;
    }
    isMuted(e) {
        let t = J(e);
        return (0, l.m$)(t);
    }
    isTemporarilyMuted(e) {
        let t = J(e);
        return (0, l.Cl)(t);
    }
    getMuteConfig(e) {
        return J(e).mute_config;
    }
    getMessageNotifications(e) {
        return J(e).message_notifications;
    }
    getChannelOverrides(e) {
        var t;
        return null != (t = J(e).channel_overrides) ? t : {};
    }
    getNotifyHighlights(e) {
        return J(e).notify_highlights;
    }
    getGuildFlags(e) {
        return J(e).flags;
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
        return null != (t = M[e]) ? t : U;
    }
    isChannelMuted(e, t) {
        var n;
        let r = h.Z.getChannel(t);
        return (e = null != (n = null == r ? void 0 : r.getGuildId()) ? n : e), this.getMutedChannels(e).has(t);
    }
    isCategoryMuted(e, t) {
        let n = h.Z.getChannel(t);
        if (null == n) return !1;
        let r = n.parent_id;
        return null != r && this.getMutedChannels(e).has(r);
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
        if (f.Ec.has(e.type) || (0, f.hv)(e.type) || !ep()) return y.i.ALL_MESSAGES;
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
        return (null == (t = N[e]) ? void 0 : t.hide_muted_channels) === !0;
    }
    getAllSettings() {
        return {
            userGuildSettings: N,
            mutedChannels: M,
            optedInChannelsByGuild: k
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
            if (_.yE(t.flags, v.ic.NEW_FORUM_THREADS_ON)) return !0;
            if (_.yE(t.flags, v.ic.NEW_FORUM_THREADS_OFF)) return !1;
        }
        return this.resolvedMessageNotifications(e) === E.bL.ALL_MESSAGES;
    }
    isOptInEnabled(e) {
        return null != e && (c.Z.isFullServerPreview(e) ? c.Z.isOptInEnabled(e) : _.yE(this.getGuildFlags(e), v.vc.OPT_IN_CHANNELS_ON));
    }
    isChannelRecordOrParentOptedIn(e, t) {
        return null != e && null != e.guild_id && (this.isChannelOptedIn(e.guild_id, e.id, t) || (null != e.parent_id && this.isChannelOptedIn(e.guild_id, e.parent_id, t)));
    }
    isChannelOrParentOptedIn(e, t, n) {
        return this.isChannelRecordOrParentOptedIn(h.Z.getChannel(t), n);
    }
    isChannelOptedIn(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e) return !1;
        if (c.Z.isFullServerPreview(e)) return c.Z.isChannelOptedIn(e, t);
        if (i && null != F[e]) return F[e].has(t);
        let o = null != (r = null == (n = this.getChannelOverrides(e)[t]) ? void 0 : n.flags) ? r : 0;
        return _.yE(o, v.ic.OPT_IN_ENABLED);
    }
    getOptedInChannels(e) {
        var t, n;
        return c.Z.isFullServerPreview(e) ? (null != (t = c.Z.getViewingChannels(e)) ? t : G) : null != (n = k[e]) ? n : G;
    }
    getOptedInChannelsWithPendingUpdates(e) {
        return F[e];
    }
    getPendingChannelUpdates(e) {
        return B[e];
    }
    getGuildFavorites(e) {
        if (c.Z.isFullServerPreview(e)) return null;
        if (null == A[e]) {
            let t = o().filter(this.getChannelOverrides(e), (t) => {
                var n, r;
                return _.yE(null != (r = t.flags) ? r : 0, v.ic.FAVORITED) && (null == (n = h.Z.getChannel(t.channel_id)) ? void 0 : n.guild_id) === e;
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
        return _.yE(r, v.ic.FAVORITED);
    }
    isAddedToMessages(e) {
        var t, n;
        let r = null != (n = null == (t = this.getChannelOverrides(null)[e]) ? void 0 : t.flags) ? n : 0;
        return _.yE(r, v.ic.OPT_IN_ENABLED);
    }
    getAddedToMessages() {
        var e;
        return null != (e = k[j]) ? e : G;
    }
    get accountNotificationSettings() {
        return P;
    }
    get useNewNotifications() {
        return C;
    }
    getGuildUnreadSetting(e) {
        if (!ep()) return y.i.ALL_MESSAGES;
        let t = this.getGuildFlags(e);
        return _.yE(t, v.vc.UNREADS_ALL_MESSAGES) ? y.i.ALL_MESSAGES : _.yE(t, v.vc.UNREADS_ONLY_MENTIONS) ? y.i.ONLY_MENTIONS : y.i.UNSET;
    }
    resolveGuildUnreadSetting(e) {
        let t = this.getGuildFlags(e.id);
        return !ep() || _.yE(t, v.vc.UNREADS_ALL_MESSAGES) ? y.i.ALL_MESSAGES : _.yE(t, v.vc.UNREADS_ONLY_MENTIONS) ? y.i.ONLY_MENTIONS : e.defaultMessageNotifications === E.bL.ALL_MESSAGES ? y.i.ALL_MESSAGES : y.i.ONLY_MENTIONS;
    }
    getChannelRecordUnreadSetting(e) {
        return this.getChannelUnreadSetting(e.guild_id, e.id);
    }
    getChannelUnreadSetting(e, t) {
        let n = this.getChannelIdFlags(e, t);
        return _.yE(n, v.ic.UNREADS_ALL_MESSAGES) ? y.i.ALL_MESSAGES : _.yE(n, v.ic.UNREADS_ONLY_MENTIONS) ? y.i.ONLY_MENTIONS : y.i.UNSET;
    }
}
O(eh, 'displayName', 'UserGuildSettingsStore'), O(eh, 'persistKey', 'collapsedGuilds');
let em = new eh(s.Z, {
    USER_GUILD_SETTINGS_FULL_UPDATE: ei,
    USER_GUILD_SETTINGS_GUILD_UPDATE: eo,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: ea,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: es,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: eu,
    CONNECTION_OPEN: ee,
    CACHE_LOADED: $,
    OVERLAY_INITIALIZE: et,
    GUILD_CREATE: e_,
    GUILD_UPDATE: e_,
    GUILD_TOGGLE_COLLAPSE_MUTED: ed,
    IMPERSONATE_UPDATE: e_,
    IMPERSONATE_STOP: e_,
    USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: ec,
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: el,
    NOTIFICATION_SETTINGS_UPDATE: en,
    GUILD_MUTE_EXPIRED: () => !0,
    CHANNEL_MUTE_EXPIRED: () => !0
});
