(n.d(t, { Z: () => ec }), n(361932), n(187205), n(539854), n(388685), n(642613), n(387201));
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let w = {},
    R = null,
    P = [],
    D = new T.Z(),
    L = !1,
    x = !1,
    k = !1,
    j = !1,
    M = O.default.fromTimestamp(Date.now()),
    U = !0,
    G = null,
    B = null,
    Z = !0;
function F() {
    let e = E.ZP.getFlattenedGuildIds().flatMap((e) => h.ZP.getSelectableChannelIds(e)),
        t = u.Z.getAllActiveJoinedThreads(),
        n = (e) => !!A.TPd.GUILD_TEXTUAL.has(e.type) && (b.ZP.allowAllMessages(e) || (0, f.J)(e, d.Z, b.ZP, p.Z) === N.iN.ALL_MESSAGES),
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
        .reduce((e, t) => (g.ZP.lastMessageTimestamp(t) > Date.now() - S.ib ? e.notifyingChannelIds.push(t) : e.staleChannelIds.push(t), e), {
            notifyingChannelIds: [],
            staleChannelIds: []
        });
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
                userId: null == (t = y.default.getCurrentUser()) ? void 0 : t.id
            }),
            r
        );
}
function H() {
    if (null == R) {
        M = O.default.fromTimestamp(Date.now());
        return;
    }
    for (let e of R.toSorted((e, t) => O.default.compare(g.ZP.lastMessageId(t), g.ZP.lastMessageId(e)))) {
        let t = w[e];
        if (t.loadState === S.a7.UNLOADED && null != t.mostRecentMessageId) {
            M = t.mostRecentMessageId;
            return;
        }
    }
    M = '0';
}
function Y() {
    let { notifyingChannelIds: e, staleChannelIds: t } = F();
    ((R = e), (P = t), a()(null != R, 'notifyingChannelIds should not be null'));
    let n = R.filter((e) => null == w[e]),
        r = Object.keys(w).filter((e) => !(null == R ? void 0 : R.includes(e)));
    if (0 !== R.length && 0 === n.length && 0 === r.length) return !1;
    for (let e of r) delete w[e];
    for (let e of n)
        if (
            ((w[e] = {
                loadState: S.a7.UNLOADED,
                mostRecentMessageId: g.ZP.lastMessageId(e)
            }),
            m.Z.isReady(e))
        ) {
            let t = V(e);
            if (null != t) {
                var i, o;
                ((w[e].loadState = S.a7.LOADED), (w[e].mostRecentMessageId = null != (o = null == (i = t.last()) ? void 0 : i.id) ? o : w[e].mostRecentMessageId));
            }
        }
    (D.updateChannelIds(R), H());
}
function W() {
    for (let n of ((w = {}), (R = null), (P = []), (D = new T.Z()), (L = !1), (x = !1), (k = !1), (M = O.default.fromTimestamp(Date.now())), (U = !0), (j = !1), (B = null), (G = null), Y(), null != R ? R : [])) {
        var e, t;
        let r = V(n);
        null != r && ((w[n].loadState = S.a7.LOADED), (w[n].mostRecentMessageId = null != (t = null == (e = r.last()) ? void 0 : e.id) ? t : null), H());
    }
}
function K(e) {
    if (e instanceof _.ZP) return e;
    let t = m.Z.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, l.e5)(e);
}
function z(e) {
    var t, n, r;
    let { channelId: i, message: a } = e;
    if (null == R || (null == (t = a.author) ? void 0 : t.id) === (null == (n = y.default.getCurrentUser()) ? void 0 : n.id)) return !1;
    let o = R.includes(i),
        s = K(a),
        l = s.mentioned;
    if (!o && !l) {
        if (!P.includes(i)) return !1;
        Y();
    }
    if (!o && l && !(0, c.ln)(s)) return !1;
    D.addMessage({
        id: a.id,
        channelId: a.channel_id,
        guildId: null == (r = p.Z.getBasicChannel(a.channel_id)) ? void 0 : r.guild_id,
        kind: l ? S.fL.MENTION : S.fL.ALL_MESSAGES_CHANNEL,
        message: s
    });
}
function q(e) {
    let { channelId: t } = e;
    if (!(null == R ? void 0 : R.includes(t))) return !1;
    let n = V(t);
    if (null == n) return !1;
    let r = n.length >= S.AQ || (n.hasFetched && !n.hasMoreBefore);
    (w[t].loadState !== S.a7.LOADED && (w[t].loadState = r ? S.a7.LOADED : S.a7.LOADED_UNREAD), H());
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
                message: e
            };
        })
    );
}
function X(e) {
    let { id: t } = e;
    return D.deleteMessages([t]);
}
function Q(e) {
    let { ids: t } = e;
    return D.deleteMessages(t);
}
function J() {
    L = !0;
}
function ee(e) {
    let { preload: t, finished: n, analyticsPayload: r } = e;
    ((L = !1), t ? (j = !0) : ((U = !0 !== n), (k = !0)), (B = null != r ? r : null));
}
function et(e) {
    var t;
    let { preload: n } = e;
    return null != (null == (t = v.Lk.getCurrentConfig({ location: 'NotificationsInboxStore.canLoadMore' })) ? void 0 : t.notificationCenterVariant) && null != R && !L && !x && (!n || !j) && U;
}
function en() {
    ((L = !1), (B = null), (x = !0));
}
function er(e) {
    let { messageId: t, channelId: n, isUnread: r } = e,
        i = v.Lk.getCurrentConfig({ location: 'handleInboxItemClick' }).notificationCenterVariant;
    G =
        r && i === v.jP.SIDEBAR
            ? {
                  channelId: n,
                  messageId: t
              }
            : null;
}
function ei(e) {
    let { channelId: t, messageId: n } = e;
    (0, I.Tj)(
        {
            channelId: t,
            id: n
        },
        G
    ) && (G = null);
}
function ea() {
    x = !1;
}
function eo() {
    G = null;
}
function es(e) {
    let { navOnClick: t } = e;
    Z = null == t || t;
}
class el extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(E.ZP, h.ZP, p.Z, g.ZP, u.Z, d.Z, b.ZP, m.Z, c.ZP);
    }
    canLoadMore(e) {
        let { preload: t } = e;
        return et({ preload: t });
    }
    getInboxMessages() {
        return D.getMessages();
    }
    getNotifyingChannelIds() {
        return R;
    }
    getChannelInfoMap() {
        return w;
    }
    get oldestDisplayedMessageId() {
        return M;
    }
    get hasMoreToLoad() {
        return U;
    }
    get isLoading() {
        return L;
    }
    get hasLoadedEver() {
        return k;
    }
    get hasPreloaded() {
        return j;
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
C(el, 'displayName', 'NotificationsInboxStore');
let ec = new el(s.Z, {
    LOAD_RECENT_MENTIONS_SUCCESS: $,
    LOAD_MESSAGES_SUCCESS: q,
    MESSAGE_CREATE: z,
    MESSAGE_DELETE: X,
    RECENT_MENTION_DELETE: X,
    MESSAGE_DELETE_BULK: Q,
    CONNECTION_OPEN: W,
    GUILD_CREATE: Y,
    GUILD_DELETE: Y,
    USER_GUILD_SETTINGS_FULL_UPDATE: Y,
    THREAD_CREATE: Y,
    CHANNEL_CREATE: Y,
    THREAD_DELETE: Y,
    CHANNEL_DELETE: Y,
    NOTIFICATIONS_INBOX_OPEN: ea,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START: J,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS: ee,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE: en,
    NOTIFICATIONS_INBOX_ITEM_CLICK: er,
    NOTIFICATIONS_INBOX_ITEM_ACK: ei,
    NOTIFICATIONS_INBOX_CLOSE: eo,
    NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES: es
});
