n.d(t, { Z: () => eb }), n(361932), n(187205), n(539854), n(388685), n(642613), n(387201);
var r,
    i = n(512722),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(622822),
    c = n(786761),
    u = n(455199),
    d = n(601070),
    f = n(569471),
    p = n(723170),
    _ = n(131704),
    m = n(23750),
    h = n(592125),
    g = n(984933),
    E = n(375954),
    b = n(306680),
    y = n(771845),
    O = n(9156),
    v = n(594174),
    S = n(709054),
    I = n(821020),
    T = n(370774),
    C = n(810457),
    A = n(982183),
    N = n(981631),
    P = n(124368);
function R(e, t, n) {
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
let D = {},
    w = null,
    x = [],
    L = new C.Z(),
    j = !1,
    M = !1,
    k = !1,
    U = !1,
    G = S.default.fromTimestamp(Date.now()),
    Z = !0,
    B = null,
    F = null,
    V = !0;
function H() {
    let e = y.ZP.getFlattenedGuildIds().flatMap((e) => g.ZP.getSelectableChannelIds(e)),
        t = d.Z.getAllActiveJoinedThreads(),
        n = (e) =>
            !(!N.TPd.GUILD_TEXTUAL.has(e.type) || (0, l.zd)(e.id)) &&
            ((0, _.Q5)(e.type) ? (0, p.J)(e) === P.iN.ALL_MESSAGES && !f.Z.isMuted(e.id) : O.ZP.allowAllMessages(e)),
        r = [];
    for (let t of e) {
        let e = h.Z.getBasicChannel(t);
        null != e && n(e) && r.push(e);
    }
    for (let e in t)
        for (let i in t[e])
            for (let a in t[e][i]) {
                let e = h.Z.getBasicChannel(a);
                null != e && n(e) && r.push(e);
            }
    return r
        .map((e) => e.id)
        .sort((e, t) => {
            let n = b.ZP.hasUnread(e);
            return n !== b.ZP.hasUnread(t)
                ? n
                    ? -1
                    : 1
                : S.default.compare(b.ZP.lastMessageId(t), b.ZP.lastMessageId(e));
        })
        .reduce(
            (e, t) => (
                b.ZP.lastMessageTimestamp(t) > Date.now() - A.ib
                    ? e.notifyingChannelIds.push(t)
                    : e.staleChannelIds.push(t),
                e
            ),
            {
                notifyingChannelIds: [],
                staleChannelIds: [],
            },
        );
}
function Y(e) {
    var t;
    if (!E.Z.isReady(e)) return;
    let n = h.Z.getBasicChannel(e),
        r = E.Z.getMessages(e);
    if (r.hasPresent() && 0 !== r.length)
        return (
            L.addChannelMessages({
                channel: n,
                channelMessages: r,
                userId: null == (t = v.default.getCurrentUser()) ? void 0 : t.id,
            }),
            r
        );
}
function W() {
    if (null == w) {
        G = S.default.fromTimestamp(Date.now());
        return;
    }
    for (let e of w.toSorted((e, t) => S.default.compare(b.ZP.lastMessageId(t), b.ZP.lastMessageId(e)))) {
        let t = D[e];
        if (t.loadState === A.a7.UNLOADED && null != t.mostRecentMessageId) {
            G = t.mostRecentMessageId;
            return;
        }
    }
    G = "0";
}
function K() {
    let { notifyingChannelIds: e, staleChannelIds: t } = H();
    (w = e), (x = t), a()(null != w, "notifyingChannelIds should not be null");
    let n = w.filter((e) => null == D[e]),
        r = Object.keys(D).filter((e) => !(null == w ? void 0 : w.includes(e)));
    if (0 !== w.length && 0 === n.length && 0 === r.length) return !1;
    for (let e of r) delete D[e];
    for (let e of n)
        if (
            ((D[e] = {
                loadState: A.a7.UNLOADED,
                mostRecentMessageId: b.ZP.lastMessageId(e),
            }),
            E.Z.isReady(e))
        ) {
            let t = Y(e);
            if (null != t) {
                var i, o;
                (D[e].loadState = A.a7.LOADED),
                    (D[e].mostRecentMessageId =
                        null != (o = null == (i = t.last()) ? void 0 : i.id) ? o : D[e].mostRecentMessageId);
            }
        }
    L.updateChannelIds(w), W();
}
function z() {
    (D = {}),
        (w = null),
        (x = []),
        (L = new C.Z()),
        (j = !1),
        (M = !1),
        (k = !1),
        (G = S.default.fromTimestamp(Date.now())),
        (Z = !0),
        (U = !1),
        (F = null),
        (B = null);
}
function q() {
    var e, t, n;
    for (let n of (K(), null != w ? w : [])) {
        let r = Y(n);
        null != r &&
            ((D[n].loadState = A.a7.LOADED),
            (D[n].mostRecentMessageId = null != (t = null == (e = r.last()) ? void 0 : e.id) ? t : null),
            W());
    }
    let r = null != (n = u.ZP.getSettingsFilteredMentions()) ? n : [];
    L.addMessages(
        r.map((e) => {
            var t;
            return {
                id: e.id,
                channelId: e.channel_id,
                guildId: null == (t = h.Z.getBasicChannel(e.channel_id)) ? void 0 : t.guild_id,
                kind: A.fL.MENTION,
                message: e,
            };
        }),
    );
}
function Q() {
    z(), q();
}
function X() {
    z();
}
function J(e) {
    if (e instanceof m.ZP) return e;
    let t = E.Z.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, c.e5)(e);
}
function $(e) {
    var t, n, r;
    let { channelId: i, message: a } = e;
    if (
        null == w ||
        (null == (t = a.author) ? void 0 : t.id) === (null == (n = v.default.getCurrentUser()) ? void 0 : n.id)
    )
        return !1;
    let o = w.includes(i);
    if ((0, l.zd)(i)) return !1;
    let s = J(a),
        c = s.mentioned;
    if (!o && !c) {
        if (!x.includes(i)) return !1;
        K();
    }
    if (!o && c && !(0, u.ln)(s)) return !1;
    L.addMessage({
        id: a.id,
        channelId: a.channel_id,
        guildId: null == (r = h.Z.getBasicChannel(a.channel_id)) ? void 0 : r.guild_id,
        kind: c ? A.fL.MENTION : A.fL.ALL_MESSAGES_CHANNEL,
        message: s,
    });
}
function ee(e) {
    let { channelId: t } = e;
    if (!(null == w ? void 0 : w.includes(t))) return !1;
    let n = Y(t);
    if (null == n) return !1;
    let r = n.length >= A.AQ || (n.hasFetched && !n.hasMoreBefore);
    D[t].loadState !== A.a7.LOADED && (D[t].loadState = r ? A.a7.LOADED : A.a7.LOADED_UNREAD), W();
}
function et(e) {
    let { messages: t } = e;
    if (0 === t.length) return !1;
    let n = u.ZP.getSettingsFilteredMentions();
    if (null == n || 0 === n.length) return !1;
    L.addMessages(
        n.map((e) => {
            var t;
            return {
                id: e.id,
                channelId: e.channel_id,
                guildId: null == (t = h.Z.getBasicChannel(e.channel_id)) ? void 0 : t.guild_id,
                kind: A.fL.MENTION,
                message: e,
            };
        }),
    );
}
function en(e) {
    let { id: t } = e;
    return L.deleteMessages([t]);
}
function er(e) {
    let { ids: t } = e;
    return L.deleteMessages(t);
}
function ei() {
    j = !0;
}
function ea(e) {
    let { preload: t, hasMoreToLoad: n, analyticsPayload: r } = e;
    (j = !1), t ? (U = !0) : (null != n && (Z = n), (k = !0)), (F = null != r ? r : null);
}
function eo(e) {
    var t;
    let { preload: n } = e;
    return (
        null !=
            (null ==
            (t = (0, I.Ag)({
                location: "NotificationsInboxStore.canLoadMore",
                autoTrackExposure: !1,
            }))
                ? void 0
                : t.notificationCenterVariant) &&
        null != w &&
        !j &&
        !M &&
        (!n || !U) &&
        Z
    );
}
function es() {
    (j = !1), (F = null), (M = !0);
}
function el(e) {
    let { messageId: t, channelId: n, isUnread: r } = e,
        i = (0, I.Ag)({ location: "handleInboxItemClick" }).notificationCenterVariant;
    B =
        r && i === I.jP.SIDEBAR
            ? {
                  channelId: n,
                  messageId: t,
              }
            : null;
}
function ec(e) {
    let { channelId: t, messageId: n } = e;
    (0, T.Tj)(
        {
            channelId: t,
            id: n,
        },
        B,
    ) && (B = null);
}
function eu() {
    M = !1;
}
function ed() {
    B = null;
}
function ef(e) {
    let { channel: t } = e;
    if (O.ZP.allowNoMessages(t)) return !1;
    Q();
}
function ep(e) {
    var t;
    let { userId: n } = e;
    if (n !== (null == (t = v.default.getCurrentUser()) ? void 0 : t.id)) return !1;
    Q();
}
function e_(e) {
    var t;
    let { id: n, addedMembers: r, removedMemberIds: i } = e,
        a = null == (t = v.default.getCurrentUser()) ? void 0 : t.id;
    if (null == a) return !1;
    if (null == r ? void 0 : r.some((e) => e.userId === a)) {
        let e = h.Z.getBasicChannel(n);
        return !(null == e || f.Z.isMuted(n)) && (0, p.J)(e) !== P.iN.NO_MESSAGES && void Q();
    }
    return null != i && !!i.includes(a) && void Q();
}
function em(e) {
    let { channel: t } = e;
    if (!L.getMessages().some((e) => e.channelId === t.id)) return !1;
    Q();
}
function eh(e) {
    let { guild: t } = e;
    if (!L.getMessages().some((e) => e.guildId === t.id)) return !1;
    Q();
}
function eg(e) {
    let { navOnClick: t } = e;
    V = null == t || t;
}
class eE extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, h.Z, g.ZP, f.Z, E.Z, b.ZP, u.ZP, y.ZP, O.ZP, v.default);
    }
    canLoadMore(e) {
        let { preload: t } = e;
        return eo({ preload: t });
    }
    getInboxMessages() {
        return L.getMessages();
    }
    getNotifyingChannelIds() {
        return w;
    }
    getChannelInfoMap() {
        return D;
    }
    get oldestDisplayedMessageId() {
        return G;
    }
    get hasMoreToLoad() {
        return Z;
    }
    get isLoading() {
        return j;
    }
    get hasLoadedEver() {
        return k;
    }
    get hasPreloaded() {
        return U;
    }
    get isLoadingComplete() {
        return !j && !Z;
    }
    get selectedItemInfo() {
        return B;
    }
    get currentRequestAnalyticsPayload() {
        return F;
    }
    getDevOverrides() {
        return { navOnClick: V };
    }
}
R(eE, "displayName", "NotificationsInboxStore");
let eb = new eE(s.Z, {
    LOAD_RECENT_MENTIONS_SUCCESS: et,
    LOAD_MESSAGES_SUCCESS: ee,
    MESSAGE_CREATE: $,
    MESSAGE_DELETE: en,
    RECENT_MENTION_DELETE: en,
    MESSAGE_DELETE_BULK: er,
    CONNECTION_OPEN: Q,
    LOGOUT: X,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: Q,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: Q,
    GUILD_CREATE: Q,
    USER_GUILD_SETTINGS_GUILD_UPDATE: Q,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: Q,
    CHANNEL_CREATE: ef,
    GUILD_DELETE: eh,
    THREAD_DELETE: em,
    CHANNEL_DELETE: em,
    THREAD_MEMBER_UPDATE: ep,
    THREAD_MEMBERS_UPDATE: e_,
    NOTIFICATIONS_INBOX_OPEN: eu,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START: ei,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS: ea,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE: es,
    NOTIFICATIONS_INBOX_ITEM_CLICK: el,
    NOTIFICATIONS_INBOX_ITEM_ACK: ec,
    NOTIFICATIONS_INBOX_CLOSE: ed,
    NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES: eg,
});
