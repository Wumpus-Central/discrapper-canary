n.d(t, { Z: () => eE }), n(361932), n(187205), n(539854), n(388685), n(642613), n(387201);
var r,
    i = n(512722),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(786761),
    c = n(455199),
    u = n(601070),
    d = n(569471),
    f = n(723170),
    _ = n(131704),
    p = n(23750),
    h = n(592125),
    m = n(984933),
    g = n(375954),
    E = n(306680),
    b = n(771845),
    y = n(9156),
    O = n(594174),
    v = n(709054),
    I = n(821020),
    T = n(370774),
    S = n(810457),
    A = n(982183),
    C = n(981631),
    N = n(124368);
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
let P = {},
    w = null,
    D = [],
    x = new S.Z(),
    L = !1,
    j = !1,
    M = !1,
    k = !1,
    U = v.default.fromTimestamp(Date.now()),
    G = !0,
    B = null,
    Z = null,
    V = !0;
function F() {
    let e = b.ZP.getFlattenedGuildIds().flatMap((e) => m.ZP.getSelectableChannelIds(e)),
        t = u.Z.getAllActiveJoinedThreads(),
        n = (e) =>
            !(!C.TPd.GUILD_TEXTUAL.has(e.type) || (0, T.ES)(e)) &&
            ((0, _.Q5)(e.type) ? (0, f.J)(e) === N.iN.ALL_MESSAGES && !d.Z.isMuted(e.id) : y.ZP.allowAllMessages(e)),
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
            let n = E.ZP.hasUnread(e);
            return n !== E.ZP.hasUnread(t)
                ? n
                    ? -1
                    : 1
                : v.default.compare(E.ZP.lastMessageId(t), E.ZP.lastMessageId(e));
        })
        .reduce(
            (e, t) => (
                E.ZP.lastMessageTimestamp(t) > Date.now() - A.ib
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
function H(e) {
    var t;
    if (!g.Z.isReady(e)) return;
    let n = h.Z.getBasicChannel(e),
        r = g.Z.getMessages(e);
    if (r.hasPresent() && 0 !== r.length)
        return (
            x.addChannelMessages({
                channel: n,
                channelMessages: r,
                userId: null == (t = O.default.getCurrentUser()) ? void 0 : t.id,
            }),
            r
        );
}
function Y() {
    if (null == w) {
        U = v.default.fromTimestamp(Date.now());
        return;
    }
    for (let e of w.toSorted((e, t) => v.default.compare(E.ZP.lastMessageId(t), E.ZP.lastMessageId(e)))) {
        let t = P[e];
        if (t.loadState === A.a7.UNLOADED && null != t.mostRecentMessageId) {
            U = t.mostRecentMessageId;
            return;
        }
    }
    U = "0";
}
function W() {
    let { notifyingChannelIds: e, staleChannelIds: t } = F();
    (w = e), (D = t), a()(null != w, "notifyingChannelIds should not be null");
    let n = w.filter((e) => null == P[e]),
        r = Object.keys(P).filter((e) => !(null == w ? void 0 : w.includes(e)));
    if (0 !== w.length && 0 === n.length && 0 === r.length) return !1;
    for (let e of r) delete P[e];
    for (let e of n)
        if (
            ((P[e] = {
                loadState: A.a7.UNLOADED,
                mostRecentMessageId: E.ZP.lastMessageId(e),
            }),
            g.Z.isReady(e))
        ) {
            let t = H(e);
            if (null != t) {
                var i, o;
                (P[e].loadState = A.a7.LOADED),
                    (P[e].mostRecentMessageId =
                        null != (o = null == (i = t.last()) ? void 0 : i.id) ? o : P[e].mostRecentMessageId);
            }
        }
    x.updateChannelIds(w), Y();
}
function K() {
    (P = {}),
        (w = null),
        (D = []),
        (x = new S.Z()),
        (L = !1),
        (j = !1),
        (M = !1),
        (U = v.default.fromTimestamp(Date.now())),
        (G = !0),
        (k = !1),
        (Z = null),
        (B = null);
}
function z() {
    var e, t, n;
    for (let n of (W(), null != w ? w : [])) {
        let r = H(n);
        null != r &&
            ((P[n].loadState = A.a7.LOADED),
            (P[n].mostRecentMessageId = null != (t = null == (e = r.last()) ? void 0 : e.id) ? t : null),
            Y());
    }
    let r = null != (n = c.ZP.getSettingsFilteredMentions()) ? n : [];
    x.addMessages(
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
function q() {
    K(), z();
}
function X() {
    K();
}
function Q(e) {
    if (e instanceof p.ZP) return e;
    let t = g.Z.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, l.e5)(e);
}
function J(e) {
    var t, n, r;
    let { channelId: i, message: a } = e;
    if (
        null == w ||
        (null == (t = a.author) ? void 0 : t.id) === (null == (n = O.default.getCurrentUser()) ? void 0 : n.id)
    )
        return !1;
    let o = w.includes(i);
    if ((0, T.ES)({ id: i })) return !1;
    let s = Q(a),
        l = s.mentioned;
    if (!o && !l) {
        if (!D.includes(i)) return !1;
        W();
    }
    if (!o && l && !(0, c.ln)(s)) return !1;
    x.addMessage({
        id: a.id,
        channelId: a.channel_id,
        guildId: null == (r = h.Z.getBasicChannel(a.channel_id)) ? void 0 : r.guild_id,
        kind: l ? A.fL.MENTION : A.fL.ALL_MESSAGES_CHANNEL,
        message: s,
    });
}
function $(e) {
    let { channelId: t } = e;
    if (!(null == w ? void 0 : w.includes(t))) return !1;
    let n = H(t);
    if (null == n) return !1;
    let r = n.length >= A.AQ || (n.hasFetched && !n.hasMoreBefore);
    P[t].loadState !== A.a7.LOADED && (P[t].loadState = r ? A.a7.LOADED : A.a7.LOADED_UNREAD), Y();
}
function ee(e) {
    let { messages: t } = e;
    if (0 === t.length) return !1;
    let n = c.ZP.getSettingsFilteredMentions();
    if (null == n || 0 === n.length) return !1;
    x.addMessages(
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
function et(e) {
    let { id: t } = e;
    return x.deleteMessages([t]);
}
function en(e) {
    let { ids: t } = e;
    return x.deleteMessages(t);
}
function er() {
    L = !0;
}
function ei(e) {
    let { preload: t, hasMoreToLoad: n, analyticsPayload: r } = e;
    (L = !1), t ? (k = !0) : (null != n && (G = n), (M = !0)), (Z = null != r ? r : null);
}
function ea(e) {
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
        !L &&
        !j &&
        (!n || !k) &&
        G
    );
}
function eo() {
    (L = !1), (Z = null), (j = !0);
}
function es(e) {
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
function el(e) {
    let { channelId: t, messageId: n } = e;
    (0, T.Tj)(
        {
            channelId: t,
            id: n,
        },
        B,
    ) && (B = null);
}
function ec() {
    j = !1;
}
function eu() {
    B = null;
}
function ed(e) {
    let { channel: t } = e;
    if (y.ZP.allowNoMessages(t)) return !1;
    q();
}
function ef(e) {
    var t;
    let { userId: n } = e;
    if (n !== (null == (t = O.default.getCurrentUser()) ? void 0 : t.id)) return !1;
    q();
}
function e_(e) {
    var t;
    let { id: n, addedMembers: r, removedMemberIds: i } = e,
        a = null == (t = O.default.getCurrentUser()) ? void 0 : t.id;
    if (null == a) return !1;
    if (null == r ? void 0 : r.some((e) => e.userId === a)) {
        let e = h.Z.getBasicChannel(n);
        return !(null == e || d.Z.isMuted(n)) && (0, f.J)(e) !== N.iN.NO_MESSAGES && void q();
    }
    return null != i && !!i.includes(a) && void q();
}
function ep(e) {
    let { channel: t } = e;
    if (!x.getMessages().some((e) => e.channelId === t.id)) return !1;
    q();
}
function eh(e) {
    let { guild: t } = e;
    if (!x.getMessages().some((e) => e.guildId === t.id)) return !1;
    q();
}
function em(e) {
    let { navOnClick: t } = e;
    V = null == t || t;
}
class eg extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(b.ZP, m.ZP, h.Z, E.ZP, u.Z, d.Z, y.ZP, g.Z, c.ZP);
    }
    canLoadMore(e) {
        let { preload: t } = e;
        return ea({ preload: t });
    }
    getInboxMessages() {
        return x.getMessages();
    }
    getNotifyingChannelIds() {
        return w;
    }
    getChannelInfoMap() {
        return P;
    }
    get oldestDisplayedMessageId() {
        return U;
    }
    get hasMoreToLoad() {
        return G;
    }
    get isLoading() {
        return L;
    }
    get hasLoadedEver() {
        return M;
    }
    get hasPreloaded() {
        return k;
    }
    get isLoadingComplete() {
        return !L && !G;
    }
    get selectedItemInfo() {
        return B;
    }
    get currentRequestAnalyticsPayload() {
        return Z;
    }
    getDevOverrides() {
        return { navOnClick: V };
    }
}
R(eg, "displayName", "NotificationsInboxStore");
let eE = new eg(s.Z, {
    LOAD_RECENT_MENTIONS_SUCCESS: ee,
    LOAD_MESSAGES_SUCCESS: $,
    MESSAGE_CREATE: J,
    MESSAGE_DELETE: et,
    RECENT_MENTION_DELETE: et,
    MESSAGE_DELETE_BULK: en,
    CONNECTION_OPEN: q,
    LOGOUT: X,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: q,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: q,
    GUILD_CREATE: q,
    USER_GUILD_SETTINGS_GUILD_UPDATE: q,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: q,
    CHANNEL_CREATE: ed,
    GUILD_DELETE: eh,
    THREAD_DELETE: ep,
    CHANNEL_DELETE: ep,
    THREAD_MEMBER_UPDATE: ef,
    THREAD_MEMBERS_UPDATE: e_,
    NOTIFICATIONS_INBOX_OPEN: ec,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START: er,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS: ei,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE: eo,
    NOTIFICATIONS_INBOX_ITEM_CLICK: es,
    NOTIFICATIONS_INBOX_ITEM_ACK: el,
    NOTIFICATIONS_INBOX_CLOSE: eu,
    NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES: em,
});
