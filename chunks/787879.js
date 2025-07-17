(n.d(t, { Z: () => ei }), n(361932), n(187205), n(539854), n(388685), n(642613));
var r,
    i = n(512722),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(442837),
    c = n(570140),
    u = n(786761),
    d = n(455199),
    f = n(601070),
    _ = n(569471),
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
    k = I.default.fromTimestamp(Date.now()),
    M = I.default.fromTimestamp(Date.now()),
    j = !0,
    U = !0;
function G() {
    let e = y.ZP.getFlattenedGuildIds().flatMap((e) => g.ZP.getSelectableChannelIds(e)),
        t = f.Z.getAllActiveJoinedThreads(),
        n = (e) => !!A.TPd.GUILD_TEXTUAL.has(e.type) && (O.ZP.allowAllMessages(e) || (0, p.J)(e, _.Z, O.ZP, m.Z) === N.iN.ALL_MESSAGES),
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
        .sort((e, t) => I.default.compare(b.ZP.lastMessageId(t), b.ZP.lastMessageId(e)))
        .reduce((e, t) => (b.ZP.lastMessageTimestamp(t) > Date.now() - S.ib ? e.notifyingChannelIds.push(t) : e.staleChannelIds.push(t), e), {
            notifyingChannelIds: [],
            staleChannelIds: []
        });
}
function B(e) {
    ((D = s().sortedUniqBy(
        e.sort((e, t) => {
            let n = I.default.compare(e.id, t.id);
            return 0 !== n ? n : e.kind === S.fL.MENTION && t.kind !== S.fL.MENTION ? -1 : +(e.kind !== S.fL.MENTION && t.kind === S.fL.MENTION);
        }),
        'id'
    )),
        V());
}
function V() {
    D.length <= 1.5 * S.Vp || (D = D.filter((e) => I.default.extractTimestamp(e.id) > Date.now() - S.ib).slice(-S.Vp));
}
function F(e) {
    if (!E.Z.isReady(e)) return;
    let t = m.Z.getBasicChannel(e),
        n = E.Z.getMessages(e);
    if (n.hasPresent() && 0 !== n.length)
        return (
            B([
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
                        kind: S.fL.ALL_MESSAGES_CHANNEL,
                        message: e
                    }))
            ]),
            n
        );
}
function Z() {
    if (null == P) {
        k = I.default.fromTimestamp(Date.now());
        return;
    }
    for (let e of (P.sort((e, t) => I.default.compare(b.ZP.lastMessageId(t), b.ZP.lastMessageId(e))), P)) {
        let t = R[e];
        if (t.loadState === S.a7.UNLOADED && null != t.mostRecentMessageId) {
            k = t.mostRecentMessageId;
            return;
        }
    }
    k = '0';
}
function H() {
    let { notifyingChannelIds: e, staleChannelIds: t } = G();
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
    ((D = D.filter((e) => e.kind !== S.fL.ALL_MESSAGES_CHANNEL || e.channelId in R)), Z());
}
function Y() {
    for (let n of ((R = {}), (P = null), (w = []), (D = []), (L = !1), (x = !1), (k = I.default.fromTimestamp(Date.now())), (M = I.default.fromTimestamp(Date.now())), (j = !0), (U = !0), H(), null != P ? P : [])) {
        var e, t;
        let r = F(n);
        null != r && ((R[n].loadState = S.a7.LOADED), (R[n].mostRecentMessageId = null != (t = null == (e = r.last()) ? void 0 : e.id) ? t : null), Z());
    }
}
function W(e) {
    if (e instanceof h.ZP) return e;
    let t = E.Z.getMessage(e.channel_id, e.id);
    return null != t ? t : (0, u.e5)(e);
}
function K(e) {
    var t, n, r;
    let { channelId: i, message: a } = e;
    if (null == P || (null == (t = a.author) ? void 0 : t.id) === (null == (n = v.default.getCurrentUser()) ? void 0 : n.id)) return !1;
    let o = P.includes(i),
        s = d.ZP.hasMention(a.id);
    if (!o && !s) {
        if (!w.includes(i)) return !1;
        H();
    }
    let l = W(a);
    if (!o && s && !(0, d.ln)(l)) return !1;
    ((D = D.slice()).push({
        id: a.id,
        channelId: a.channel_id,
        guildId: null == (r = m.Z.getBasicChannel(a.channel_id)) ? void 0 : r.guild_id,
        kind: s ? S.fL.MENTION : S.fL.ALL_MESSAGES_CHANNEL,
        message: l
    }),
        V());
}
function z(e) {
    let { channelId: t } = e;
    if (!(null == P ? void 0 : P.includes(t))) return !1;
    let n = F(t);
    if (null == n) return !1;
    let r = n.length >= S.AQ || (n.hasFetched && !n.hasMoreBefore);
    (R[t].loadState !== S.a7.LOADED && (R[t].loadState = r ? S.a7.LOADED : S.a7.LOADED_UNREAD), Z());
}
function q(e) {
    let { messages: t } = e;
    if (0 === t.length) return !1;
    let n = d.ZP.getSettingsFilteredMentions();
    if (null == n || 0 === n.length) return !1;
    B([
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
function X(e) {
    if (!D.map((e) => e.id).includes(e)) return !1;
    D = D.filter((t) => t.id !== e);
}
function Q(e) {
    let { id: t } = e;
    return X(t);
}
function J(e) {
    let { ids: t } = e;
    s().forEach(t, X);
}
function $() {
    L = !0;
}
function ee(e) {
    let { onlyUnread: t, finished: n, requestedMessageId: r } = e;
    ((L = !1), t || (j = !0 !== n), (U = !0 !== n), !0 !== n && (x = !0), null != r && (M = r));
}
function et(e, t) {
    var n;
    if (null == (null == (n = T.Lk.getCurrentConfig({ location: 'NotificationsInboxStore.canLoadMore' })) ? void 0 : n.notificationCenterVariant) || null == P || L || (t && !U)) return !1;
    let r = null == e || 0 > I.default.compare(e, M);
    return j || r;
}
function en() {
    L = !1;
}
class er extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(y.ZP, g.ZP, m.Z, b.ZP, f.Z, _.Z, O.ZP, E.Z, d.ZP);
    }
    canLoadMore(e, t) {
        return et(e, t);
    }
    getInboxMessages() {
        return D;
    }
    get oldestDisplayedMessageId() {
        return k;
    }
    getNotifyingChannelIds() {
        return P;
    }
    getChannelInfoMap() {
        return R;
    }
    get hasMoreCurrentRequest() {
        return j;
    }
    get hasMoreUnreadToLoad() {
        return U;
    }
    get isLoading() {
        return L;
    }
    get hasLoadedEver() {
        return x;
    }
    get oldestRequestedMessageId() {
        return M;
    }
    get isLoadingComplete() {
        return !L && !j && '0' === M;
    }
}
C(er, 'displayName', 'NotificationsInboxStore');
let ei = new er(c.Z, {
    LOAD_RECENT_MENTIONS_SUCCESS: q,
    LOAD_MESSAGES_SUCCESS: z,
    MESSAGE_CREATE: K,
    MESSAGE_DELETE: Q,
    RECENT_MENTION_DELETE: Q,
    MESSAGE_DELETE_BULK: J,
    CONNECTION_OPEN: Y,
    GUILD_CREATE: H,
    GUILD_DELETE: H,
    USER_GUILD_SETTINGS_FULL_UPDATE: H,
    THREAD_CREATE: H,
    CHANNEL_CREATE: H,
    THREAD_DELETE: H,
    CHANNEL_DELETE: H,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_START: $,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_SUCCESS: ee,
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE: en
});
