n.d(t, { Z: () => eg }), n(361932), n(187205), n(539854), n(388685), n(642613), n(387201);
var r,
    i = n(512722),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(786761),
    c = n(455199),
    u = n(601070),
    d = n(569471),
    f = n(723170),
    _ = n(23750),
    p = n(592125),
    h = n(984933),
    m = n(375954),
    g = n(306680),
    E = n(771845),
    b = n(9156),
    y = n(594174),
    O = n(709054),
    v = n(821020),
    I = n(370774),
    T = n(810457),
    S = n(982183),
    A = n(981631),
    N = n(124368);
function C(e, t, n) {
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
let R = {},
    P = null,
    w = [],
    D = new T.Z(),
    L = !1,
    x = !1,
    M = !1,
    k = !1,
    j = O.default.fromTimestamp(Date.now()),
    U = !0,
    G = null,
    B = null,
    Z = !0;
function F() {
    let e = E.ZP.getFlattenedGuildIds().flatMap((e) => h.ZP.getSelectableChannelIds(e)),
        t = u.Z.getAllActiveJoinedThreads(),
        n = (e) =>
            !!A.TPd.GUILD_TEXTUAL.has(e.type) &&
            (b.ZP.allowAllMessages(e) || (0, f.J)(e, d.Z, b.ZP, p.Z) === N.iN.ALL_MESSAGES),
        r = [];
    for (let t of e) {
        let e = p.Z.getBasicChannel(t);
        null != e && n(e) && r.push(e);
    }
    for (let e in t)
        for (let i in t[e])
            for (let o in t[e][i]) {
                let e = p.Z.getBasicChannel(o);
                null != e && n(e) && r.push(e);
            }
    return r
        .map((e) => e.id)
        .sort((e, t) => {
            let n = g.ZP.hasUnread(e);
            return n !== g.ZP.hasUnread(t)
                ? n
                    ? -1
                    : 1
                : O.default.compare(g.ZP.lastMessageId(t), g.ZP.lastMessageId(e));
        })
        .reduce(
            (e, t) => (
                g.ZP.lastMessageTimestamp(t) > Date.now() - S.ib
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
function V(e) {
    var t;
    if (!m.Z.isReady(e)) return;
    let n = p.Z.getBasicChannel(e),
        r = m.Z.getMessages(e);
    if (r.hasPresent() && 0 !== r.length)
        return (
            D.addChannelMessages({
                channel: n,
                channelMessages: r,
                userId: null == (t = y.default.getCurrentUser()) ? void 0 : t.id,
            }),
            r
        );
}
function H() {
    if (null == P) {
        j = O.default.fromTimestamp(Date.now());
        return;
    }
    for (let e of P.toSorted((e, t) => O.default.compare(g.ZP.lastMessageId(t), g.ZP.lastMessageId(e)))) {
        let t = R[e];
        if (t.loadState === S.a7.UNLOADED && null != t.mostRecentMessageId) {
            j = t.mostRecentMessageId;
            return;
        }
    }
    j = "0";
}
function Y() {
    let { notifyingChannelIds: e, staleChannelIds: t } = F();
    (P = e), (w = t), o()(null != P, "notifyingChannelIds should not be null");
    let n = P.filter((e) => null == R[e]),
        r = Object.keys(R).filter((e) => !(null == P ? void 0 : P.includes(e)));
    if (0 !== P.length && 0 === n.length && 0 === r.length) return !1;
    for (let e of r) delete R[e];
    for (let e of n)
        if (
            ((R[e] = {
                loadState: S.a7.UNLOADED,
                mostRecentMessageId: g.ZP.lastMessageId(e),
            }),
            m.Z.isReady(e))
        ) {
            let t = V(e);
            if (null != t) {
                var i, a;
                (R[e].loadState = S.a7.LOADED),
                    (R[e].mostRecentMessageId =
                        null != (a = null == (i = t.last()) ? void 0 : i.id) ? a : R[e].mostRecentMessageId);
            }
        }
    D.updateChannelIds(P), H();
}
function W() {
    (R = {}),
        (P = null),
        (w = []),
        (D = new T.Z()),
        (L = !1),
        (x = !1),
        (M = !1),
        (j = O.default.fromTimestamp(Date.now())),
        (U = !0),
        (k = !1),
        (B = null),
        (G = null);
}
function K() {
    var e, t, n;
    for (let n of (Y(), null != P ? P : [])) {
        let r = V(n);
        null != r &&
            ((R[n].loadState = S.a7.LOADED),
            (R[n].mostRecentMessageId = null != (t = null == (e = r.last()) ? void 0 : e.id) ? t : null),
            H());
    }
    let r = null != (n = c.ZP.getSettingsFilteredMentions()) ? n : [];
    D.addMessages(
        r.map((e) => {
            var t;
            return {
                id: e.id,
                channelId: e.channel_id,
                guildId: null == (t = p.Z.getBasicChannel(e.channel_id)) ? void 0 : t.guild_id,
                kind: S.fL.MENTION,
                message: e,
            };
        }),
    );
}
function z() {
    W(), K();
}
function q() {
    W();
}
function X(e) {
    if (e instanceof _.ZP) return e;
    let t = m.Z.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, l.e5)(e);
}
function Q(e) {
    var t, n, r;
    let { channelId: i, message: o } = e;
    if (
        null == P ||
        (null == (t = o.author) ? void 0 : t.id) === (null == (n = y.default.getCurrentUser()) ? void 0 : n.id)
    )
        return !1;
    let a = P.includes(i),
        s = X(o),
        l = s.mentioned;
    if (!a && !l) {
        if (!w.includes(i)) return !1;
        Y();
    }
    if (!a && l && !(0, c.ln)(s)) return !1;
    D.addMessage({
        id: o.id,
        channelId: o.channel_id,
        guildId: null == (r = p.Z.getBasicChannel(o.channel_id)) ? void 0 : r.guild_id,
        kind: l ? S.fL.MENTION : S.fL.ALL_MESSAGES_CHANNEL,
        message: s,
    });
}
function J(e) {
    let { channelId: t } = e;
    if (!(null == P ? void 0 : P.includes(t))) return !1;
    let n = V(t);
    if (null == n) return !1;
    let r = n.length >= S.AQ || (n.hasFetched && !n.hasMoreBefore);
    R[t].loadState !== S.a7.LOADED && (R[t].loadState = r ? S.a7.LOADED : S.a7.LOADED_UNREAD), H();
}
function $(e) {
    let { messages: t } = e;
    if (0 === t.length) return !1;
    let n = c.ZP.getSettingsFilteredMentions();
    if (null == n || 0 === n.length) return !1;
    D.addMessages(
        n.map((e) => {
            var t;
            return {
                id: e.id,
                channelId: e.channel_id,
                guildId: null == (t = p.Z.getBasicChannel(e.channel_id)) ? void 0 : t.guild_id,
                kind: S.fL.MENTION,
                message: e,
            };
        }),
    );
}
function ee(e) {
    let { id: t } = e;
    return D.deleteMessages([t]);
}
function et(e) {
    let { ids: t } = e;
    return D.deleteMessages(t);
}
function en() {
    L = !0;
}
function er(e) {
    let { preload: t, finished: n, analyticsPayload: r } = e;
    (L = !1), t ? (k = !0) : ((U = !0 !== n), (M = !0)), (B = null != r ? r : null);
}
function ei(e) {
    var t;
    let { preload: n } = e;
    return (
        null !=
            (null == (t = v.Lk.getCurrentConfig({ location: "NotificationsInboxStore.canLoadMore" }))
                ? void 0
                : t.notificationCenterVariant) &&
        null != P &&
        !L &&
        !x &&
        (!n || !k) &&
        U
    );
}
function eo() {
    (L = !1), (B = null), (x = !0);
}
function ea(e) {
    let { messageId: t, channelId: n, isUnread: r } = e,
        i = v.Lk.getCurrentConfig({ location: "handleInboxItemClick" }).notificationCenterVariant;
    G =
        r && i === v.jP.SIDEBAR
            ? {
                  channelId: n,
                  messageId: t,
              }
            : null;
}
function es(e) {
    let { channelId: t, messageId: n } = e;
    (0, I.Tj)(
        {
            channelId: t,
            id: n,
        },
        G,
    ) && (G = null);
}
function el() {
    x = !1;
}
function ec() {
    G = null;
}
function eu(e) {
    let { channel: t } = e;
    if (b.ZP.allowNoMessages(t)) return !1;
    z();
}
function ed(e) {
    var t;
    let { userId: n } = e;
    if (n !== (null == (t = y.default.getCurrentUser()) ? void 0 : t.id)) return !1;
    z();
}
function ef(e) {
    var t;
    let { id: n, addedMembers: r, removedMemberIds: i } = e,
        o = null == (t = y.default.getCurrentUser()) ? void 0 : t.id;
    if (null == o) return !1;
    if (null == r ? void 0 : r.some((e) => e.userId === o)) {
        let e = p.Z.getBasicChannel(n);
        return null != e && (0, f.J)(e, d.Z, b.ZP, p.Z) !== N.iN.NO_MESSAGES && void z();
    }
    return null != i && !!i.includes(o) && void z();
}
function e_(e) {
    let { channel: t } = e;
    if (!D.getMessages().some((e) => e.channelId === t.id)) return !1;
    z();
}
function ep(e) {
    let { guild: t } = e;
    if (!D.getMessages().some((e) => e.guildId === t.id)) return !1;
    z();
}
function eh(e) {
    let { navOnClick: t } = e;
    Z = null == t || t;
}
class em extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(E.ZP, h.ZP, p.Z, g.ZP, u.Z, d.Z, b.ZP, m.Z, c.ZP);
    }
    canLoadMore(e) {
        let { preload: t } = e;
        return ei({ preload: t });
    }
    getInboxMessages() {
        return D.getMessages();
    }
    getNotifyingChannelIds() {
        return P;
    }
    getChannelInfoMap() {
        return R;
    }
    get oldestDisplayedMessageId() {
        return j;
    }
    get hasMoreToLoad() {
        return U;
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
        return !L && !U;
    }
    get selectedItemInfo() {
        return G;
    }
    get currentRequestAnalyticsPayload() {
        return B;
    }
    getDevOverrides() {
        return { navOnClick: Z };
    }
}
C(em, "displayName", "NotificationsInboxStore");
let eg = new em(s.Z, {
    LOAD_RECENT_MENTIONS_SUCCESS: $,
    LOAD_MESSAGES_SUCCESS: J,
    MESSAGE_CREATE: Q,
    MESSAGE_DELETE: ee,
    RECENT_MENTION_DELETE: ee,
    MESSAGE_DELETE_BULK: et,
    CONNECTION_OPEN: z,
    LOGOUT: q,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: z,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: z,
    GUILD_CREATE: z,
    USER_GUILD_SETTINGS_GUILD_UPDATE: z,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: z,
    CHANNEL_CREATE: eu,
    GUILD_DELETE: ep,
    THREAD_DELETE: e_,
    CHANNEL_DELETE: e_,
    THREAD_MEMBER_UPDATE: ed,
    THREAD_MEMBERS_UPDATE: ef,
    NOTIFICATIONS_INBOX_OPEN: el,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START: en,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS: er,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE: eo,
    NOTIFICATIONS_INBOX_ITEM_CLICK: ea,
    NOTIFICATIONS_INBOX_ITEM_ACK: es,
    NOTIFICATIONS_INBOX_CLOSE: ec,
    NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES: eh,
});
