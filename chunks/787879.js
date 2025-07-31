(n.d(t, { Z: () => ei }), n(361932), n(187205), n(539854), n(388685), n(642613), n(387201));
var r,
    i = n(512722),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(786761),
    c = n(455199),
    u = n(601070),
    d = n(569471),
    _ = n(723170),
    f = n(23750),
    p = n(592125),
    h = n(984933),
    m = n(375954),
    g = n(306680),
    E = n(771845),
    b = n(9156),
    y = n(594174),
    O = n(709054),
    v = n(821020),
    I = n(810457),
    T = n(982183),
    S = n(981631),
    A = n(124368);
function N(e, t, n) {
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
let C = {},
    R = null,
    P = [],
    w = new I.Z(),
    D = !1,
    L = !1,
    x = !1,
    M = O.default.fromTimestamp(Date.now()),
    k = !0,
    j = null;
function U() {
    let e = E.ZP.getFlattenedGuildIds().flatMap((e) => h.ZP.getSelectableChannelIds(e)),
        t = u.Z.getAllActiveJoinedThreads(),
        n = (e) => !!S.TPd.GUILD_TEXTUAL.has(e.type) && (b.ZP.allowAllMessages(e) || (0, _.J)(e, d.Z, b.ZP, p.Z) === A.iN.ALL_MESSAGES),
        r = [];
    for (let t of e) {
        let e = p.Z.getBasicChannel(t);
        null != e && n(e) && r.push(e);
    }
    for (let e in t)
        for (let i in t[e])
            for (let a in t[e][i]) {
                let e = p.Z.getBasicChannel(a);
                null != e && n(e) && r.push(e);
            }
    return r
        .map((e) => e.id)
        .sort((e, t) => {
            let n = g.ZP.hasUnread(e);
            return n !== g.ZP.hasUnread(t) ? (n ? -1 : 1) : O.default.compare(g.ZP.lastMessageId(t), g.ZP.lastMessageId(e));
        })
        .reduce((e, t) => (g.ZP.lastMessageTimestamp(t) > Date.now() - T.ib ? e.notifyingChannelIds.push(t) : e.staleChannelIds.push(t), e), {
            notifyingChannelIds: [],
            staleChannelIds: []
        });
}
function G(e) {
    var t;
    if (!m.Z.isReady(e)) return;
    let n = p.Z.getBasicChannel(e),
        r = m.Z.getMessages(e);
    if (r.hasPresent() && 0 !== r.length)
        return (
            w.addChannelMessages({
                channel: n,
                channelMessages: r,
                userId: null == (t = y.default.getCurrentUser()) ? void 0 : t.id
            }),
            r
        );
}
function B() {
    if (null == R) {
        M = O.default.fromTimestamp(Date.now());
        return;
    }
    for (let e of R.toSorted((e, t) => O.default.compare(g.ZP.lastMessageId(t), g.ZP.lastMessageId(e)))) {
        let t = C[e];
        if (t.loadState === T.a7.UNLOADED && null != t.mostRecentMessageId) {
            M = t.mostRecentMessageId;
            return;
        }
    }
    M = '0';
}
function V() {
    let { notifyingChannelIds: e, staleChannelIds: t } = U();
    ((R = e), (P = t), a()(null != R, 'notifyingChannelIds should not be null'));
    let n = R.filter((e) => null == C[e]),
        r = Object.keys(C).filter((e) => !(null == R ? void 0 : R.includes(e)));
    if (0 !== R.length && 0 === n.length && 0 === r.length) return !1;
    for (let e of r) delete C[e];
    for (let e of n)
        if (
            ((C[e] = {
                loadState: T.a7.UNLOADED,
                mostRecentMessageId: g.ZP.lastMessageId(e)
            }),
            m.Z.isReady(e))
        ) {
            let t = G(e);
            if (null != t) {
                var i, o;
                ((C[e].loadState = T.a7.LOADED), (C[e].mostRecentMessageId = null != (o = null == (i = t.last()) ? void 0 : i.id) ? o : C[e].mostRecentMessageId));
            }
        }
    (w.updateChannelIds(R), B());
}
function F() {
    for (let n of ((C = {}), (R = null), (P = []), (w = new I.Z()), (D = !1), (L = !1), (M = O.default.fromTimestamp(Date.now())), (k = !0), (x = !1), (j = null), ($ = null), V(), null != R ? R : [])) {
        var e, t;
        let r = G(n);
        null != r && ((C[n].loadState = T.a7.LOADED), (C[n].mostRecentMessageId = null != (t = null == (e = r.last()) ? void 0 : e.id) ? t : null), B());
    }
}
function Z(e) {
    if (e instanceof f.ZP) return e;
    let t = m.Z.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, l.e5)(e);
}
function H(e) {
    var t, n, r;
    let { channelId: i, message: a } = e;
    if (null == R || (null == (t = a.author) ? void 0 : t.id) === (null == (n = y.default.getCurrentUser()) ? void 0 : n.id)) return !1;
    let o = R.includes(i),
        s = Z(a),
        l = s.mentioned;
    if (!o && !l) {
        if (!P.includes(i)) return !1;
        V();
    }
    if (!o && l && !(0, c.ln)(s)) return !1;
    w.addMessage({
        id: a.id,
        channelId: a.channel_id,
        guildId: null == (r = p.Z.getBasicChannel(a.channel_id)) ? void 0 : r.guild_id,
        kind: l ? T.fL.MENTION : T.fL.ALL_MESSAGES_CHANNEL,
        message: s
    });
}
function Y(e) {
    let { channelId: t } = e;
    if (!(null == R ? void 0 : R.includes(t))) return !1;
    let n = G(t);
    if (null == n) return !1;
    let r = n.length >= T.AQ || (n.hasFetched && !n.hasMoreBefore);
    (C[t].loadState !== T.a7.LOADED && (C[t].loadState = r ? T.a7.LOADED : T.a7.LOADED_UNREAD), B());
}
function W(e) {
    let { messages: t } = e;
    if (0 === t.length) return !1;
    let n = c.ZP.getSettingsFilteredMentions();
    if (null == n || 0 === n.length) return !1;
    w.addMessages(
        n.map((e) => {
            var t;
            return {
                id: e.id,
                channelId: e.channel_id,
                guildId: null == (t = p.Z.getBasicChannel(e.channel_id)) ? void 0 : t.guild_id,
                kind: T.fL.MENTION,
                message: e
            };
        })
    );
}
function K(e) {
    let { id: t } = e;
    return w.deleteMessages([t]);
}
function z(e) {
    let { ids: t } = e;
    return w.deleteMessages(t);
}
function q() {
    D = !0;
}
function X(e) {
    let { preload: t, finished: n, analyticsPayload: r } = e;
    ((D = !1), t ? (x = !0) : ((k = !0 !== n), (L = !0)), (j = null != r ? r : null));
}
function Q(e) {
    var t;
    let { preload: n } = e;
    return null != (null == (t = v.Lk.getCurrentConfig({ location: 'NotificationsInboxStore.canLoadMore' })) ? void 0 : t.notificationCenterVariant) && null != R && !D && (!n || !x) && k;
}
function J() {
    ((D = !1), (j = null));
}
let $ = null;
function ee(e) {
    let { messageId: t, isUnread: n } = e,
        r = v.Lk.getCurrentConfig({ location: 'handleInboxItemClick' }).notificationCenterVariant;
    $ = n && r === v.jP.SIDEBAR ? t : null;
}
function et(e) {
    let { messageId: t } = e;
    t === $ && ($ = null);
}
function en() {
    $ = null;
}
class er extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(E.ZP, h.ZP, p.Z, g.ZP, u.Z, d.Z, b.ZP, m.Z, c.ZP);
    }
    canLoadMore(e) {
        let { preload: t } = e;
        return Q({ preload: t });
    }
    getInboxMessages() {
        return w.getMessages();
    }
    getNotifyingChannelIds() {
        return R;
    }
    getChannelInfoMap() {
        return C;
    }
    get oldestDisplayedMessageId() {
        return M;
    }
    get hasMoreToLoad() {
        return k;
    }
    get isLoading() {
        return D;
    }
    get hasLoadedEver() {
        return L;
    }
    get hasPreloaded() {
        return x;
    }
    get isLoadingComplete() {
        return !D && !k;
    }
    get lastClickedUnreadMessageId() {
        return $;
    }
    get currentRequestAnalyticsPayload() {
        return j;
    }
}
N(er, 'displayName', 'NotificationsInboxStore');
let ei = new er(s.Z, {
    LOAD_RECENT_MENTIONS_SUCCESS: W,
    LOAD_MESSAGES_SUCCESS: Y,
    MESSAGE_CREATE: H,
    MESSAGE_DELETE: K,
    RECENT_MENTION_DELETE: K,
    MESSAGE_DELETE_BULK: z,
    CONNECTION_OPEN: F,
    GUILD_CREATE: V,
    GUILD_DELETE: V,
    USER_GUILD_SETTINGS_FULL_UPDATE: V,
    THREAD_CREATE: V,
    CHANNEL_CREATE: V,
    THREAD_DELETE: V,
    CHANNEL_DELETE: V,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START: q,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS: X,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE: J,
    NOTIFICATIONS_INBOX_ITEM_CLICK: ee,
    NOTIFICATIONS_INBOX_ITEM_ACK: et,
    NOTIFICATIONS_INBOX_CLOSE: en
});
