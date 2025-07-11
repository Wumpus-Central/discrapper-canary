(n.d(t, { Z: () => er }), n(361932), n(187205), n(539854), n(388685), n(642613));
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
    w = [],
    D = !1,
    L = !1,
    x = I.default.fromTimestamp(Date.now()),
    k = I.default.fromTimestamp(Date.now()),
    M = !0,
    j = !0;
function U() {
    let e = y.ZP.getFlattenedGuildIds().flatMap((e) => g.ZP.getSelectableChannelIds(e)),
        t = f.Z.getAllActiveJoinedThreads(),
        n = (e) => !!S.TPd.GUILD_TEXTUAL.has(e.type) && (O.ZP.allowAllMessages(e) || (0, p.J)(e, _.Z, O.ZP, m.Z) === A.iN.ALL_MESSAGES),
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
        .reduce((e, t) => (b.ZP.lastMessageTimestamp(t) > Date.now() - T.ib ? e.notifyingChannelIds.push(t) : e.staleChannelIds.push(t), e), {
            notifyingChannelIds: [],
            staleChannelIds: []
        });
}
function G(e) {
    ((w = s().sortedUniqBy(
        e.sort((e, t) => {
            let n = I.default.compare(e.id, t.id);
            return 0 !== n ? n : e.kind === T.fL.MENTION && t.kind !== T.fL.MENTION ? -1 : +(e.kind !== T.fL.MENTION && t.kind === T.fL.MENTION);
        }),
        'id'
    )),
        B());
}
function B() {
    w.length <= 1.5 * T.Vp || (w = w.filter((e) => I.default.extractTimestamp(e.id) > Date.now() - T.ib).slice(-T.Vp));
}
function V(e) {
    if (!E.Z.isReady(e)) return;
    let t = m.Z.getBasicChannel(e),
        n = E.Z.getMessages(e);
    if (n.hasPresent() && 0 !== n.length)
        return (
            G([
                ...w,
                ...n
                    .filter((e) => {
                        var t;
                        return e.author.id !== (null == (t = v.default.getCurrentUser()) ? void 0 : t.id);
                    })
                    .map((e) => ({
                        id: e.id,
                        channelId: e.channel_id,
                        guildId: null == t ? void 0 : t.guild_id,
                        kind: T.fL.ALL_MESSAGES_CHANNEL,
                        message: e
                    }))
            ]),
            n
        );
}
function F() {
    if (null == R) {
        x = I.default.fromTimestamp(Date.now());
        return;
    }
    for (let e of (R.sort((e, t) => I.default.compare(b.ZP.lastMessageId(t), b.ZP.lastMessageId(e))), R)) {
        let t = C[e];
        if (t.loadState === T.a7.UNLOADED && null != t.mostRecentMessageId) {
            x = t.mostRecentMessageId;
            return;
        }
    }
    x = '0';
}
function Z() {
    let { notifyingChannelIds: e, staleChannelIds: t } = U();
    ((R = e), (P = t), a()(null != R, 'notifyingChannelIds should not be null'));
    let n = R.filter((e) => null == C[e]),
        r = Object.keys(C).filter((e) => !(null == R ? void 0 : R.includes(e)));
    if (0 !== R.length && 0 === n.length && 0 === r.length) return !1;
    for (let e of r) delete C[e];
    for (let e of n)
        C[e] = {
            loadState: E.Z.isReady(e) ? T.a7.LOADED : T.a7.UNLOADED,
            mostRecentMessageId: b.ZP.lastMessageId(e)
        };
    ((w = w.filter((e) => e.kind !== T.fL.ALL_MESSAGES_CHANNEL || e.channelId in C)), F());
}
function H() {
    for (let n of ((C = {}), (R = null), (P = []), (w = []), (D = !1), (L = !1), (x = I.default.fromTimestamp(Date.now())), (k = I.default.fromTimestamp(Date.now())), (M = !0), (j = !0), Z(), null != R ? R : [])) {
        var e, t;
        let r = V(n);
        null != r && ((C[n].loadState = T.a7.LOADED), (C[n].mostRecentMessageId = null != (t = null == (e = r.last()) ? void 0 : e.id) ? t : null), F());
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
    if (null == R || (null == (t = a.author) ? void 0 : t.id) === (null == (n = v.default.getCurrentUser()) ? void 0 : n.id)) return !1;
    let o = R.includes(i),
        s = d.ZP.hasMention(a.id);
    if (!o && !s) {
        if (!P.includes(i)) return !1;
        Z();
    }
    let l = Y(a);
    if (!o && s && !(0, d.ln)(l)) return !1;
    ((w = w.slice()).push({
        id: a.id,
        channelId: a.channel_id,
        guildId: null == (r = m.Z.getBasicChannel(a.channel_id)) ? void 0 : r.guild_id,
        kind: s ? T.fL.MENTION : T.fL.ALL_MESSAGES_CHANNEL,
        message: l
    }),
        B());
}
function K(e) {
    let { channelId: t } = e;
    if (!(null == R ? void 0 : R.includes(t))) return !1;
    let n = V(t);
    if (null == n) return !1;
    let r = n.length >= T.AQ || (n.hasFetched && !n.hasMoreBefore);
    (C[t].loadState !== T.a7.LOADED && (C[t].loadState = r ? T.a7.LOADED : T.a7.LOADED_UNREAD), F());
}
function z(e) {
    let { messages: t } = e;
    if (0 === t.length) return !1;
    let n = d.ZP.getSettingsFilteredMentions();
    if (null == n || 0 === n.length) return !1;
    G([
        ...w,
        ...n.map((e) => {
            let t = m.Z.getBasicChannel(e.channel_id);
            return {
                id: e.id,
                channelId: e.channel_id,
                guildId: null == t ? void 0 : t.guild_id,
                kind: T.fL.MENTION,
                message: e
            };
        })
    ]);
}
function q(e) {
    if (!w.map((e) => e.id).includes(e)) return !1;
    w = w.filter((t) => t.id !== e);
}
function X(e) {
    let { id: t } = e;
    return q(t);
}
function Q(e) {
    let { ids: t } = e;
    s().forEach(t, q);
}
function J() {
    D = !0;
}
function $(e) {
    let { onlyUnread: t, finished: n, requestedMessageId: r } = e;
    ((D = !1), t || (M = !0 !== n), (j = !0 !== n), !0 !== n && (L = !0), null != r && (k = r));
}
function ee(e, t) {
    if (null == R || D || (t && !j)) return !1;
    let n = null == e || 0 > I.default.compare(e, k);
    return M || n;
}
function et() {
    D = !1;
}
class en extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(y.ZP, g.ZP, m.Z, b.ZP, f.Z, _.Z, O.ZP, E.Z, d.ZP);
    }
    canLoadMore(e, t) {
        return ee(e, t);
    }
    getInboxMessages() {
        return w;
    }
    get oldestDisplayedMessageId() {
        return x;
    }
    getNotifyingChannelIds() {
        return R;
    }
    getChannelInfoMap() {
        return C;
    }
    get hasMoreCurrentRequest() {
        return M;
    }
    get hasMoreUnreadToLoad() {
        return j;
    }
    get isLoading() {
        return D;
    }
    get hasLoadedEver() {
        return L;
    }
    get oldestRequestedMessageId() {
        return k;
    }
    get isLoadingComplete() {
        return !D && !M && '0' === k;
    }
}
N(en, 'displayName', 'NotificationsInboxStore');
let er = new en(c.Z, {
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
    NOTIFICATIONS_INBOX_LOAD_MORE_INBOX_FAILURE: et
});
