(n.d(t, { Z: () => eo }), n(361932), n(187205), n(539854), n(388685), n(642613), n(387201));
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
    M = !1,
    k = O.default.fromTimestamp(Date.now()),
    j = !0,
    U = null;
function G() {
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
function B(e) {
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
function V() {
    if (null == R) {
        k = O.default.fromTimestamp(Date.now());
        return;
    }
    for (let e of R.toSorted((e, t) => O.default.compare(g.ZP.lastMessageId(t), g.ZP.lastMessageId(e)))) {
        let t = C[e];
        if (t.loadState === T.a7.UNLOADED && null != t.mostRecentMessageId) {
            k = t.mostRecentMessageId;
            return;
        }
    }
    k = '0';
}
function F() {
    let { notifyingChannelIds: e, staleChannelIds: t } = G();
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
            let t = B(e);
            if (null != t) {
                var i, o;
                ((C[e].loadState = T.a7.LOADED), (C[e].mostRecentMessageId = null != (o = null == (i = t.last()) ? void 0 : i.id) ? o : C[e].mostRecentMessageId));
            }
        }
    (w.updateChannelIds(R), V());
}
function Z() {
    for (let n of ((C = {}), (R = null), (P = []), (w = new I.Z()), (D = !1), (L = !1), (x = !1), (k = O.default.fromTimestamp(Date.now())), (j = !0), (M = !1), (U = null), (ee = null), F(), null != R ? R : [])) {
        var e, t;
        let r = B(n);
        null != r && ((C[n].loadState = T.a7.LOADED), (C[n].mostRecentMessageId = null != (t = null == (e = r.last()) ? void 0 : e.id) ? t : null), V());
    }
}
function H(e) {
    if (e instanceof f.ZP) return e;
    let t = m.Z.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, l.e5)(e);
}
function Y(e) {
    var t, n, r;
    let { channelId: i, message: a } = e;
    if (null == R || (null == (t = a.author) ? void 0 : t.id) === (null == (n = y.default.getCurrentUser()) ? void 0 : n.id)) return !1;
    let o = R.includes(i),
        s = H(a),
        l = s.mentioned;
    if (!o && !l) {
        if (!P.includes(i)) return !1;
        F();
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
function W(e) {
    let { channelId: t } = e;
    if (!(null == R ? void 0 : R.includes(t))) return !1;
    let n = B(t);
    if (null == n) return !1;
    let r = n.length >= T.AQ || (n.hasFetched && !n.hasMoreBefore);
    (C[t].loadState !== T.a7.LOADED && (C[t].loadState = r ? T.a7.LOADED : T.a7.LOADED_UNREAD), V());
}
function K(e) {
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
function z(e) {
    let { id: t } = e;
    return w.deleteMessages([t]);
}
function q(e) {
    let { ids: t } = e;
    return w.deleteMessages(t);
}
function X() {
    D = !0;
}
function Q(e) {
    let { preload: t, finished: n, analyticsPayload: r } = e;
    ((D = !1), t ? (M = !0) : ((j = !0 !== n), (x = !0)), (U = null != r ? r : null));
}
function J(e) {
    var t;
    let { preload: n } = e;
    return null != (null == (t = v.Lk.getCurrentConfig({ location: 'NotificationsInboxStore.canLoadMore' })) ? void 0 : t.notificationCenterVariant) && null != R && !D && !L && (!n || !M) && j;
}
function $() {
    ((D = !1), (U = null), (L = !0));
}
let ee = null;
function et(e) {
    let { messageId: t, isUnread: n } = e,
        r = v.Lk.getCurrentConfig({ location: 'handleInboxItemClick' }).notificationCenterVariant;
    ee = n && r === v.jP.SIDEBAR ? t : null;
}
function en(e) {
    let { messageId: t } = e;
    t === ee && (ee = null);
}
function er() {
    L = !1;
}
function ei() {
    ee = null;
}
class ea extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(E.ZP, h.ZP, p.Z, g.ZP, u.Z, d.Z, b.ZP, m.Z, c.ZP);
    }
    canLoadMore(e) {
        let { preload: t } = e;
        return J({ preload: t });
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
        return k;
    }
    get hasMoreToLoad() {
        return j;
    }
    get isLoading() {
        return D;
    }
    get hasLoadedEver() {
        return x;
    }
    get hasPreloaded() {
        return M;
    }
    get isLoadingComplete() {
        return !D && !j;
    }
    get lastClickedUnreadMessageId() {
        return ee;
    }
    get currentRequestAnalyticsPayload() {
        return U;
    }
}
N(ea, 'displayName', 'NotificationsInboxStore');
let eo = new ea(s.Z, {
    LOAD_RECENT_MENTIONS_SUCCESS: K,
    LOAD_MESSAGES_SUCCESS: W,
    MESSAGE_CREATE: Y,
    MESSAGE_DELETE: z,
    RECENT_MENTION_DELETE: z,
    MESSAGE_DELETE_BULK: q,
    CONNECTION_OPEN: Z,
    GUILD_CREATE: F,
    GUILD_DELETE: F,
    USER_GUILD_SETTINGS_FULL_UPDATE: F,
    THREAD_CREATE: F,
    CHANNEL_CREATE: F,
    THREAD_DELETE: F,
    CHANNEL_DELETE: F,
    NOTIFICATIONS_INBOX_OPEN: er,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START: X,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS: Q,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE: $,
    NOTIFICATIONS_INBOX_ITEM_CLICK: et,
    NOTIFICATIONS_INBOX_ITEM_ACK: en,
    NOTIFICATIONS_INBOX_CLOSE: ei
});
