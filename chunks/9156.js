r.d(n, {
    U2: function () {
        return X;
    },
    wL: function () {
        return Q;
    }
});
var i,
    a = r(47120);
var s = r(789020);
var o = r(392711),
    l = r.n(o),
    u = r(442837),
    c = r(570140),
    d = r(798140),
    f = r(160404),
    _ = r(312400),
    h = r(569471),
    p = r(131704),
    m = r(630388),
    g = r(709054),
    E = r(592125),
    v = r(430824),
    I = r(594174),
    T = r(981631),
    b = r(468788),
    y = r(490897),
    S = r(526761);
function A(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let N = {},
    C = {},
    R = !1,
    O = !1,
    D = { flags: 0 },
    L = new d.ZP(),
    x = new d.ZP(),
    w = {
        suppress_everyone: !1,
        suppress_roles: !1,
        mute_scheduled_events: !1,
        mobile_push: !0,
        muted: !1,
        message_notifications: T.bL.ALL_MESSAGES,
        flags: 0,
        channel_overrides: {},
        notify_highlights: T.gLR.NULL,
        hide_muted_channels: !1,
        version: -1,
        mute_config: null
    },
    P = {
        [T.bL.ALL_MESSAGES]: {
            ...w,
            message_notifications: T.bL.ALL_MESSAGES
        },
        [T.bL.ONLY_MENTIONS]: {
            ...w,
            message_notifications: T.bL.ONLY_MENTIONS
        }
    },
    M = {},
    k = {},
    U = 'null',
    B = new Set(),
    G = new Set(),
    Z = {},
    F = {};
function V(e, n) {
    var r;
    let i = N[e],
        a = null !== (r = null == i ? void 0 : i.channel_overrides) && void 0 !== r ? r : {},
        s = X(n.channel_overrides),
        o = {
            ...Q(e),
            ...i,
            ...n,
            channel_overrides: s
        };
    L.clearTimer(e),
        l().forEach(a, (e) => {
            x.clearTimer(e.channel_id);
        }),
        j(e, o),
        (N[e] = o),
        (M[e] = ef(N[e]));
    let u = l().filter(o.channel_overrides, (e) => {
        var n;
        return m.yE(null !== (n = e.flags) && void 0 !== n ? n : 0, S.ic.OPT_IN_ENABLED);
    });
    (k[e] = new Set(u.map((e) => e.channel_id))), H(e), delete C[e];
}
function j(e, n) {
    !0 === n.muted &&
        L.setTimer(e, n.mute_config, () => {
            Y(e, { muted: !1 }),
                c.Z.dispatch({
                    type: 'GUILD_MUTE_EXPIRED',
                    guildId: e
                });
        }) &&
        (n.muted = !1),
        l().forEach(n.channel_overrides, (n) => {
            !0 === n.muted &&
                x.setTimer(n.channel_id, n.mute_config, () => {
                    W(e, n.channel_id, { muted: !1 }),
                        c.Z.dispatch({
                            type: 'CHANNEL_MUTE_EXPIRED',
                            guildId: e,
                            channelId: n.channel_id
                        });
                }) &&
                (n.muted = !1);
        });
}
function H(e) {
    var n;
    if (null == e) return;
    let r = new Set(k[e]),
        i = null !== (n = Z[e]) && void 0 !== n ? n : {};
    for (let e in i) {
        let n = i[e];
        m.yE(n.flags, S.ic.OPT_IN_ENABLED) ? r.add(e) : r.delete(e);
    }
    Object.keys(i).length > 0 ? (F[e] = r) : delete F[e];
}
function Y(e, n) {
    var r;
    let i = N[e];
    V(e, {
        channel_overrides: null !== (r = null == i ? void 0 : i.channel_overrides) && void 0 !== r ? r : {},
        ...n
    });
}
function W(e, n, r) {
    let i = q(e, n, r);
    z(e, { [n]: i });
}
function K(e, n) {
    var r;
    let i = {},
        a = null !== (r = null != e ? Z[e] : null) && void 0 !== r ? r : {};
    g.default.keys(n).forEach((r) => {
        var s;
        let o = q(e, r, n[r]);
        (i[r] = o), (a[r] = { flags: null !== (s = o.flags) && void 0 !== s ? s : 0 });
    }),
        null != e &&
            (Z[e] = {
                ...Z[e],
                ...a
            }),
        z(e, i);
}
function z(e, n) {
    var r;
    let i = N[e],
        a = null !== (r = null == i ? void 0 : i.channel_overrides) && void 0 !== r ? r : {};
    V(e, {
        channel_overrides:
            null == i
                ? n
                : {
                      ...a,
                      ...n
                  }
    });
}
function q(e, n, r) {
    var i;
    let a = N[e],
        s = null !== (i = null == a ? void 0 : a.channel_overrides) && void 0 !== i ? i : {};
    return {
        channel_id: n,
        muted: !1,
        ...s[n],
        ...r
    };
}
function Q(e) {
    let n = v.Z.getGuild(e);
    return P[null != n ? n.defaultMessageNotifications : T.bL.ALL_MESSAGES];
}
function X() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e instanceof Array ? l().keyBy(e, 'channel_id') : e;
}
function J(e) {
    var n;
    return null !== (n = N[e]) && void 0 !== n ? n : Q(e);
}
function $(e) {
    null != e.userGuildSettings &&
        0 !== e.userGuildSettings.length &&
        ((N = {}),
        (M = {}),
        (k = {}),
        e.userGuildSettings.forEach((e) => {
            let n = e.guild_id;
            N[n] = e;
            let r = new Set(),
                i = new Set();
            for (let n in e.channel_overrides) {
                var a;
                let s = e.channel_overrides[n];
                (0, d.m$)(s) && r.add(n), m.yE(null !== (a = s.flags) && void 0 !== a ? a : 0, S.ic.OPT_IN_ENABLED) && i.add(n);
            }
            (M[n] = r), (k[n] = i);
        }));
}
function ee(e) {
    er(e.notificationSettings), L.reset(), x.reset(), !e.userGuildSettings.partial && ((N = {}), (M = {}), (k = {}));
    let n = new Set();
    for (let r in (e.userGuildSettings.entries.forEach((e) => {
        let r = e;
        !('channel_overrides' in r) && (r.channel_overrides = {}), V(e.guild_id, r), null != e.guild_id && n.add(e.guild_id);
    }),
    N))
        !n.has(r) && j(r, N[r]);
}
function et(e) {
    let { allUserGuildSettings: n } = e,
        { userGuildSettings: r, mutedChannels: i, optedInChannelsByGuild: a } = n;
    (N = { ...r }),
        (M = {}),
        (k = {}),
        g.default.keys(i).forEach((e) => {
            M[e] = new Set(i[e]);
        }),
        g.default.keys(a).forEach((e) => {
            k[e] = new Set(a[e]);
        });
}
function en(e) {
    let { settings: n } = e;
    er(n);
}
function er(e) {
    (R = m.yE(e.flags, b.c.USE_NEW_NOTIFICATIONS)), (O = m.yE(e.flags, b.c.MENTION_ON_ALL_MESSAGES)), (D = e);
}
function ei(e) {
    let { userGuildSettings: n } = e;
    n.forEach((e) => {
        V(e.guild_id, {
            channel_overrides: {},
            ...e
        });
    });
}
function ea(e) {
    let { guildId: n, settings: r } = e;
    Y(n, r);
}
function es(e) {
    let { guildId: n, settings: r } = e;
    Y(n, r), K(n, r.channel_overrides);
}
function eo(e) {
    let { guildId: n, channelId: r, settings: i } = e;
    null != n &&
        null != i.flags &&
        (Z[n] = {
            ...Z[n],
            [r]: { flags: i.flags }
        }),
        W(n, r, i);
}
function el(e) {
    let { guildId: n } = e;
    if (null == n) return !1;
    delete Z[n], delete F[n];
}
function eu(e) {
    let { guildId: n, updates: r } = e;
    if (null == n) return !1;
    let i = Z[n];
    if (null == i) return !1;
    for (let e in r) l().isEqual(r[e], i[e]) && delete i[e];
}
function ec(e) {
    let { guildId: n, overrides: r } = e;
    return !(null == n || f.Z.isFullServerPreview(n)) && (K(n, r), !0);
}
function ed(e) {
    let { guildId: n } = e,
        r = null == N[n] ? Q(n) : N[n];
    N[n] = {
        ...r,
        guild_id: n,
        hide_muted_channels: !0 !== r.hide_muted_channels
    };
}
function ef(e) {
    return new Set(
        null != e.channel_overrides
            ? l()(e.channel_overrides)
                  .filter((e) => (0, d.m$)(e))
                  .map((e) => e.channel_id)
                  .value()
            : null
    );
}
function e_() {
    return !0;
}
function eh() {
    return R && _.xT.getCurrentConfig({ location: 'UserGuildSettingsStore' }, { autoTrackExposure: !1 }).enabled;
}
class ep extends (i = u.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(I.default, v.Z, f.Z, h.Z), null != e)) {
            var n, r;
            (R = null !== (n = e.useNewNotifications) && void 0 !== n && n),
                'userGuildSettings' in e &&
                    ((N = e.userGuildSettings),
                    (k = l().mapValues(null !== (r = e.optedInChannelsByGuild) && void 0 !== r ? r : {}, (e) => new Set(e))),
                    l().forEach(N, (e, n) => {
                        M[n] = ef(e);
                    }));
        }
    }
    getState() {
        return { useNewNotifications: R };
    }
    get mentionOnAllMessages() {
        return O;
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
        let n = J(e);
        return (0, d.m$)(n);
    }
    isTemporarilyMuted(e) {
        let n = J(e);
        return (0, d.Cl)(n);
    }
    getMuteConfig(e) {
        return J(e).mute_config;
    }
    getMessageNotifications(e) {
        return J(e).message_notifications;
    }
    getChannelOverrides(e) {
        var n;
        return null !== (n = J(e).channel_overrides) && void 0 !== n ? n : {};
    }
    getNotifyHighlights(e) {
        return J(e).notify_highlights;
    }
    getGuildFlags(e) {
        return J(e).flags;
    }
    getChannelMessageNotifications(e, n) {
        let r = this.getChannelOverrides(e)[n];
        return null == r || null == r.message_notifications ? T.bL.NULL : r.message_notifications;
    }
    getChannelMuteConfig(e, n) {
        let r = this.getChannelOverrides(e)[n];
        return null != r ? r.mute_config : null;
    }
    getMutedChannels(e) {
        var n;
        return null !== (n = M[e]) && void 0 !== n ? n : B;
    }
    isChannelMuted(e, n) {
        var r;
        let i = E.Z.getChannel(n);
        return (e = null !== (r = null == i ? void 0 : i.getGuildId()) && void 0 !== r ? r : e), this.getMutedChannels(e).has(n);
    }
    isCategoryMuted(e, n) {
        let r = E.Z.getChannel(n);
        if (null == r) return !1;
        let i = r.parent_id;
        return null != i && this.getMutedChannels(e).has(i);
    }
    resolvedMessageNotifications(e) {
        let n = this.getChannelMessageNotifications(e.guild_id, e.id);
        if (n !== T.bL.NULL) return n;
        if (null != e.parent_id) {
            let n = this.getChannelMessageNotifications(e.guild_id, e.parent_id);
            if (n !== T.bL.NULL) return n;
        }
        return this.getMessageNotifications(e.guild_id);
    }
    resolveUnreadSetting(e) {
        if (p.Ec.has(e.type) || (0, p.hv)(e.type) || !eh()) return y.i.ALL_MESSAGES;
        let n = this.getChannelUnreadSetting(e.guild_id, e.id);
        if (n !== y.i.UNSET) return n;
        if (null != e.parent_id) {
            let n = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
            if (n !== y.i.UNSET) return n;
        }
        let r = this.getGuildUnreadSetting(e.guild_id);
        return r !== y.i.UNSET ? r : this.resolvedMessageNotifications(e) === T.bL.ALL_MESSAGES ? y.i.ALL_MESSAGES : y.i.ONLY_MENTIONS;
    }
    isGuildOrCategoryOrChannelMuted(e, n) {
        return this.isMuted(e) || this.isCategoryMuted(e, n) || this.isChannelMuted(e, n);
    }
    allowNoMessages(e) {
        return this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) || this.resolvedMessageNotifications(e) === T.bL.NO_MESSAGES || (this.isOptInEnabled(e.guild_id) && !this.isChannelRecordOrParentOptedIn(e));
    }
    allowAllMessages(e) {
        return !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) && this.resolvedMessageNotifications(e) === T.bL.ALL_MESSAGES && (!this.isOptInEnabled(e.guild_id) || this.isChannelRecordOrParentOptedIn(e));
    }
    isGuildCollapsed(e) {
        var n;
        return (null === (n = N[e]) || void 0 === n ? void 0 : n.hide_muted_channels) === !0;
    }
    getAllSettings() {
        return {
            userGuildSettings: N,
            mutedChannels: M,
            optedInChannelsByGuild: k
        };
    }
    getChannelIdFlags(e, n) {
        var r;
        let i = this.getChannelOverrides(e)[n];
        return null !== (r = null == i ? void 0 : i.flags) && void 0 !== r ? r : 0;
    }
    getChannelFlags(e) {
        return this.getChannelIdFlags(e.guild_id, e.id);
    }
    getNewForumThreadsCreated(e) {
        let n = this.getChannelOverrides(e.guild_id)[e.id];
        if (null != n && null != n.flags) {
            if (m.yE(n.flags, S.ic.NEW_FORUM_THREADS_ON)) return !0;
            if (m.yE(n.flags, S.ic.NEW_FORUM_THREADS_OFF)) return !1;
        }
        return this.resolvedMessageNotifications(e) === T.bL.ALL_MESSAGES;
    }
    isOptInEnabled(e) {
        return null != e && (f.Z.isFullServerPreview(e) ? f.Z.isOptInEnabled(e) : m.yE(this.getGuildFlags(e), S.vc.OPT_IN_CHANNELS_ON));
    }
    isChannelRecordOrParentOptedIn(e, n) {
        return null != e && null != e.guild_id && (this.isChannelOptedIn(e.guild_id, e.id, n) || (null != e.parent_id && this.isChannelOptedIn(e.guild_id, e.parent_id, n)));
    }
    isChannelOrParentOptedIn(e, n, r) {
        return this.isChannelRecordOrParentOptedIn(E.Z.getChannel(n), r);
    }
    isChannelOptedIn(e, n) {
        var r, i;
        let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e) return !1;
        if (f.Z.isFullServerPreview(e)) return f.Z.isChannelOptedIn(e, n);
        if (a && null != F[e]) return F[e].has(n);
        let s = null !== (i = null === (r = this.getChannelOverrides(e)[n]) || void 0 === r ? void 0 : r.flags) && void 0 !== i ? i : 0;
        return m.yE(s, S.ic.OPT_IN_ENABLED);
    }
    getOptedInChannels(e) {
        var n, r;
        return f.Z.isFullServerPreview(e) ? (null !== (n = f.Z.getViewingChannels(e)) && void 0 !== n ? n : G) : null !== (r = k[e]) && void 0 !== r ? r : G;
    }
    getOptedInChannelsWithPendingUpdates(e) {
        return F[e];
    }
    getPendingChannelUpdates(e) {
        return Z[e];
    }
    getGuildFavorites(e) {
        if (f.Z.isFullServerPreview(e)) return null;
        if (null == C[e]) {
            let n = l().filter(this.getChannelOverrides(e), (n) => {
                var r, i;
                return m.yE(null !== (i = n.flags) && void 0 !== i ? i : 0, S.ic.FAVORITED) && (null === (r = E.Z.getChannel(n.channel_id)) || void 0 === r ? void 0 : r.guild_id) === e;
            });
            C[e] = n.map((e) => e.channel_id);
        }
        return C[e];
    }
    isFavorite(e, n) {
        var r;
        return !f.Z.isFullServerPreview(e) && (null === (r = this.getGuildFavorites(e)) || void 0 === r ? void 0 : r.includes(n)) === !0;
    }
    isMessagesFavorite(e) {
        var n, r;
        let i = null !== (r = null === (n = this.getChannelOverrides(null)[e]) || void 0 === n ? void 0 : n.flags) && void 0 !== r ? r : 0;
        return m.yE(i, S.ic.FAVORITED);
    }
    isAddedToMessages(e) {
        var n, r;
        let i = null !== (r = null === (n = this.getChannelOverrides(null)[e]) || void 0 === n ? void 0 : n.flags) && void 0 !== r ? r : 0;
        return m.yE(i, S.ic.OPT_IN_ENABLED);
    }
    getAddedToMessages() {
        var e;
        return null !== (e = k[U]) && void 0 !== e ? e : G;
    }
    get accountNotificationSettings() {
        return D;
    }
    get useNewNotifications() {
        return R;
    }
    getGuildUnreadSetting(e) {
        if (!eh()) return y.i.ALL_MESSAGES;
        let n = this.getGuildFlags(e);
        return m.yE(n, S.vc.UNREADS_ALL_MESSAGES) ? y.i.ALL_MESSAGES : m.yE(n, S.vc.UNREADS_ONLY_MENTIONS) ? y.i.ONLY_MENTIONS : y.i.UNSET;
    }
    resolveGuildUnreadSetting(e) {
        let n = this.getGuildFlags(e.id);
        return !eh() || m.yE(n, S.vc.UNREADS_ALL_MESSAGES) ? y.i.ALL_MESSAGES : m.yE(n, S.vc.UNREADS_ONLY_MENTIONS) ? y.i.ONLY_MENTIONS : e.defaultMessageNotifications === T.bL.ALL_MESSAGES ? y.i.ALL_MESSAGES : y.i.ONLY_MENTIONS;
    }
    getChannelRecordUnreadSetting(e) {
        return this.getChannelUnreadSetting(e.guild_id, e.id);
    }
    getChannelUnreadSetting(e, n) {
        let r = this.getChannelIdFlags(e, n);
        return m.yE(r, S.ic.UNREADS_ALL_MESSAGES) ? y.i.ALL_MESSAGES : m.yE(r, S.ic.UNREADS_ONLY_MENTIONS) ? y.i.ONLY_MENTIONS : y.i.UNSET;
    }
}
A(ep, 'displayName', 'UserGuildSettingsStore'), A(ep, 'persistKey', 'collapsedGuilds');
let em = new ep(c.Z, {
    USER_GUILD_SETTINGS_FULL_UPDATE: ei,
    USER_GUILD_SETTINGS_GUILD_UPDATE: ea,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: es,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: eo,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: ec,
    CONNECTION_OPEN: ee,
    CACHE_LOADED: $,
    OVERLAY_INITIALIZE: et,
    GUILD_CREATE: e_,
    GUILD_UPDATE: e_,
    GUILD_TOGGLE_COLLAPSE_MUTED: ed,
    IMPERSONATE_UPDATE: e_,
    IMPERSONATE_STOP: e_,
    USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: eu,
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: el,
    NOTIFICATION_SETTINGS_UPDATE: en,
    GUILD_MUTE_EXPIRED: () => !0,
    CHANNEL_MUTE_EXPIRED: () => !0
});
n.ZP = em;
