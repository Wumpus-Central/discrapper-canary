(n.d(t, { Z: () => es }), n(361932), n(187205), n(539854), n(388685), n(642613), n(387201));
var r,
    i = n(512722),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(442837),
    c = n(570140),
    u = n(786761),
    d = n(455199),
    _ = n(601070),
    f = n(569471),
    p = n(723170),
    h = n(23750),
    m = n(592125),
    g = n(984933),
    E = n(375954),
    b = n(306680),
    y = n(771845),
    O = n(9156),
    v = n(594174),
    I = n(709054),
    T = n(821020),
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
let R = {},
    P = null,
    w = [],
    D = [],
    L = !1,
    x = !1,
    M = !1,
    k = I.default.fromTimestamp(Date.now()),
    j = !0;
function U() {
    let e = y.ZP.getFlattenedGuildIds().flatMap((e) => g.ZP.getSelectableChannelIds(e)),
        t = _.Z.getAllActiveJoinedThreads(),
        n = (e) => !!A.TPd.GUILD_TEXTUAL.has(e.type) && (O.ZP.allowAllMessages(e) || (0, p.J)(e, f.Z, O.ZP, m.Z) === N.iN.ALL_MESSAGES),
        r = [];
    for (let t of e) {
        let e = m.Z.getBasicChannel(t);
        null != e && n(e) && r.push(e);
    }
    for (let e in t)
        for (let i in t[e])
            for (let a in t[e][i]) {
                let e = m.Z.getBasicChannel(a);
                null != e && n(e) && r.push(e);
            }
    return r
        .map((e) => e.id)
        .sort((e, t) => {
            let n = b.ZP.hasUnread(e);
            return n !== b.ZP.hasUnread(t) ? (n ? -1 : 1) : I.default.compare(b.ZP.lastMessageId(t), b.ZP.lastMessageId(e));
        })
        .reduce((e, t) => (b.ZP.lastMessageTimestamp(t) > Date.now() - S.ib ? e.notifyingChannelIds.push(t) : e.staleChannelIds.push(t), e), {
            notifyingChannelIds: [],
            staleChannelIds: []
        });
}
function G(e) {
    ((D = s().sortedUniqBy(
        e.sort((e, t) => {
            let n = I.default.compare(e.id, t.id);
            return 0 !== n ? n : e.kind === S.fL.MENTION && t.kind !== S.fL.MENTION ? -1 : +(e.kind !== S.fL.MENTION && t.kind === S.fL.MENTION);
        }),
        'id'
    )),
        B());
}
function B() {
    D.length <= 1.5 * S.Vp || (D = D.filter((e) => I.default.extractTimestamp(e.id) > Date.now() - S.ib).slice(-S.Vp));
}
function V(e) {
    if (!E.Z.isReady(e)) return;
    let t = m.Z.getBasicChannel(e),
        n = E.Z.getMessages(e);
    if (n.hasPresent() && 0 !== n.length)
        return (
            G([
                ...D,
                ...n
                    .filter((e) => {
                        var t;
                        return e.author.id !== (null == (t = v.default.getCurrentUser()) ? void 0 : t.id);
                    })
                    .map((e) => ({
                        id: e.id,
                        channelId: e.channel_id,
                        guildId: null == t ? void 0 : t.guild_id,
                        kind: e.mentioned ? S.fL.MENTION : S.fL.ALL_MESSAGES_CHANNEL,
                        message: e
                    }))
            ]),
            n
        );
}
function F() {
    if (null == P) {
        k = I.default.fromTimestamp(Date.now());
        return;
    }
    for (let e of P.toSorted((e, t) => I.default.compare(b.ZP.lastMessageId(t), b.ZP.lastMessageId(e)))) {
        let t = R[e];
        if (t.loadState === S.a7.UNLOADED && null != t.mostRecentMessageId) {
            k = t.mostRecentMessageId;
            return;
        }
    }
    k = '0';
}
function Z() {
    let { notifyingChannelIds: e, staleChannelIds: t } = U();
    ((P = e), (w = t), a()(null != P, 'notifyingChannelIds should not be null'));
    let n = P.filter((e) => null == R[e]),
        r = Object.keys(R).filter((e) => !(null == P ? void 0 : P.includes(e)));
    if (0 !== P.length && 0 === n.length && 0 === r.length) return !1;
    for (let e of r) delete R[e];
    for (let e of n)
        R[e] = {
            loadState: E.Z.isReady(e) ? S.a7.LOADED : S.a7.UNLOADED,
            mostRecentMessageId: b.ZP.lastMessageId(e)
        };
    ((D = D.filter((e) => e.kind !== S.fL.ALL_MESSAGES_CHANNEL || e.channelId in R)), F());
}
function H() {
    for (let n of ((R = {}), (P = null), (w = []), (D = []), (L = !1), (x = !1), (k = I.default.fromTimestamp(Date.now())), (j = !0), Z(), null != P ? P : [])) {
        var e, t;
        let r = V(n);
        null != r && ((R[n].loadState = S.a7.LOADED), (R[n].mostRecentMessageId = null != (t = null == (e = r.last()) ? void 0 : e.id) ? t : null), F());
    }
}
function Y(e) {
    if (e instanceof h.ZP) return e;
    let t = E.Z.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, u.e5)(e);
}
function W(e) {
    var t, n, r;
    let { channelId: i, message: a } = e;
    if (null == P || (null == (t = a.author) ? void 0 : t.id) === (null == (n = v.default.getCurrentUser()) ? void 0 : n.id)) return !1;
    let o = P.includes(i),
        s = Y(a),
        l = s.mentioned;
    if (!o && !l) {
        if (!w.includes(i)) return !1;
        Z();
    }
    if (!o && l && !(0, d.ln)(s)) return !1;
    ((D = D.slice()).push({
        id: a.id,
        channelId: a.channel_id,
        guildId: null == (r = m.Z.getBasicChannel(a.channel_id)) ? void 0 : r.guild_id,
        kind: l ? S.fL.MENTION : S.fL.ALL_MESSAGES_CHANNEL,
        message: s
    }),
        B());
}
function K(e) {
    let { channelId: t } = e;
    if (!(null == P ? void 0 : P.includes(t))) return !1;
    let n = V(t);
    if (null == n) return !1;
    let r = n.length >= S.AQ || (n.hasFetched && !n.hasMoreBefore);
    (R[t].loadState !== S.a7.LOADED && (R[t].loadState = r ? S.a7.LOADED : S.a7.LOADED_UNREAD), F());
}
function z(e) {
    let { messages: t } = e;
    if (0 === t.length) return !1;
    let n = d.ZP.getSettingsFilteredMentions();
    if (null == n || 0 === n.length) return !1;
    G([
        ...D,
        ...n.map((e) => {
            let t = m.Z.getBasicChannel(e.channel_id);
            return {
                id: e.id,
                channelId: e.channel_id,
                guildId: null == t ? void 0 : t.guild_id,
                kind: S.fL.MENTION,
                message: e
            };
        })
    ]);
}
function q(e) {
    if (!D.map((e) => e.id).includes(e)) return !1;
    D = D.filter((t) => t.id !== e);
}
function X(e) {
    let { id: t } = e;
    return q(t);
}
function Q(e) {
    let { ids: t } = e;
    t.forEach(q);
}
function J() {
    L = !0;
}
function $(e) {
    let { preload: t, finished: n } = e;
    ((L = !1), t ? (M = !0) : ((j = !0 !== n), (x = !0)));
}
function ee(e) {
    var t;
    let { preload: n } = e;
    return null != (null == (t = T.Lk.getCurrentConfig({ location: 'NotificationsInboxStore.canLoadMore' })) ? void 0 : t.notificationCenterVariant) && null != P && !L && (!n || !M) && j;
}
function et() {
    L = !1;
}
let en = null;
function er(e) {
    let { messageId: t, isUnread: n } = e,
        r = T.Lk.getCurrentConfig({ location: 'handleInboxItemClick' }).notificationCenterVariant;
    en = n && r === T.jP.SIDEBAR ? t : null;
}
function ei(e) {
    let { messageId: t } = e;
    t === en && (en = null);
}
function ea() {
    en = null;
}
class eo extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(y.ZP, g.ZP, m.Z, b.ZP, _.Z, f.Z, O.ZP, E.Z, d.ZP);
    }
    canLoadMore(e) {
        let { preload: t } = e;
        return ee({ preload: t });
    }
    getInboxMessages() {
        return D;
    }
    getNotifyingChannelIds() {
        return P;
    }
    getChannelInfoMap() {
        return R;
    }
    get oldestDisplayedMessageId() {
        return k;
    }
    get hasMoreToLoad() {
        return j;
    }
    get isLoading() {
        return L;
    }
    get hasLoadedEver() {
        return x;
    }
    get hasPreloaded() {
        return M;
    }
    get isLoadingComplete() {
        return !L && !j;
    }
    get lastClickedUnreadMessageId() {
        return en;
    }
}
C(eo, 'displayName', 'NotificationsInboxStore');
let es = new eo(c.Z, {
    LOAD_RECENT_MENTIONS_SUCCESS: z,
    LOAD_MESSAGES_SUCCESS: K,
    MESSAGE_CREATE: W,
    MESSAGE_DELETE: X,
    RECENT_MENTION_DELETE: X,
    MESSAGE_DELETE_BULK: Q,
    CONNECTION_OPEN: H,
    GUILD_CREATE: Z,
    GUILD_DELETE: Z,
    USER_GUILD_SETTINGS_FULL_UPDATE: Z,
    THREAD_CREATE: Z,
    CHANNEL_CREATE: Z,
    THREAD_DELETE: Z,
    CHANNEL_DELETE: Z,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START: J,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS: $,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE: et,
    NOTIFICATIONS_INBOX_ITEM_CLICK: er,
    NOTIFICATIONS_INBOX_ITEM_ACK: ei,
    NOTIFICATIONS_INBOX_CLOSE: ea
});
