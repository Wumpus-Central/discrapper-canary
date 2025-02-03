n.d(t, {
    ZP: () => et,
    b2: () => O
}),
    n(47120),
    n(724458);
var i = n(952639),
    r = n.n(i),
    a = n(605906),
    s = n.n(a),
    o = n(286379),
    l = n(570140),
    u = n(147913),
    c = n(786761),
    d = n(797614),
    f = n(869765),
    _ = n(314897),
    p = n(433355),
    h = n(592125),
    m = n(375954),
    g = n(944486),
    E = n(914010),
    v = n(709054),
    y = n(93735),
    I = n(522664),
    b = n(247206),
    T = n(735020),
    S = n(774863),
    A = n(799525),
    N = n(981631),
    C = n(526761);
function R(e, t, n) {
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
let O = 3000,
    D = 800,
    x = {};
function L(e) {
    return ''.concat(e.channel_id, ':').concat(e.id);
}
function P() {
    Object.values(x).forEach((e) => {
        let { timeout: t } = e;
        clearTimeout(t);
    }),
        (x = {});
}
function w(e, t) {
    if (null == e.id || null == e.channel_id) return !1;
    let n = L(e);
    if (null != x[n]) {
        let { timeout: i } = x[n];
        return clearTimeout(i), M(e, t), delete x[n], !0;
    }
    return !1;
}
function M(e, t) {
    let { setAt: n } = x[L(e)];
    if (t === b.Pq.UPDATE) {
        var i, r;
        let t = null !== (i = e.attachments) && void 0 !== i ? i : [],
            n = null !== (r = e.embeds) && void 0 !== r ? r : [],
            a = t.filter((e) =>
                (0, b.KP)(
                    {
                        type: b.lJ.Attachment,
                        media: e
                    },
                    !0
                )
            ),
            s = n.filter((e) =>
                (0, b.KP)(
                    {
                        type: b.lJ.Embed,
                        media: e
                    },
                    !0
                )
            );
        (0, b.xx)({
            messageId: e.id,
            channelId: e.channel_id,
            numOfAttachments: t.length,
            numOfEmbeds: n.length,
            numOfExplicitAttachments: a.length,
            numOfExplicitEmbeds: s.length
        });
    }
    (0, b.OP)(n, t);
}
function k(e) {
    if (w(e, b.Pq.TIMEOUT)) {
        let t = m.Z.getMessage(e.channel_id, e.id),
            { attachmentIds: n, embedIds: i } = (0, y.ZW)(t);
        (0, b.Hc)({
            channelId: e.channel_id,
            messageId: e.id,
            attachmentIds: n,
            embedIds: i
        }),
            l.Z.dispatch({
                type: 'MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT',
                messageId: e.id,
                channelId: e.channel_id
            });
    }
}
let U = (e, t) => {
    if (0 !== e.length) {
        if (t) {
            (0, I.gx)(e);
            return;
        }
        (0, I.qO)(
            e[0].channel_id,
            e.map((e) => e.id)
        );
    }
};
function G(e, t) {
    let { forceBatchScan: n = !1, jitter: i = !1 } = null != t ? t : {},
        r = (null == t ? void 0 : t.isMessageUpdate) ? e.filter(y.N7) : e;
    r.forEach((e) => {
        let t = L(e);
        null == x[t] &&
            (d.Z.increment({ name: o.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE }),
            (x[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    k(e);
                }, O)
            }));
    });
    let a = n || new Set(r.map((e) => e.channel_id)).size > 1;
    i
        ? setTimeout(() => {
              U(
                  r.filter((e) => null != x[L(e)]),
                  a
              );
          }, Math.random() * D)
        : U(r, a);
}
function B(e) {
    let t = S.Z.validContentScanVersion;
    return e.reduce((e, n) => {
        var i, r, a, s, o, l, u, c;
        null == e[n.channel_id] &&
            (e[n.channel_id] = {
                numOfAttachments: 0,
                numOfAttachmentsPendingScan: 0,
                numOfEmbeds: 0,
                numOfEmbedsPendingScan: 0
            });
        let d = e[n.channel_id];
        return (
            (d.numOfAttachments += null !== (o = null === (i = n.attachments) || void 0 === i ? void 0 : i.length) && void 0 !== o ? o : 0),
            (d.numOfEmbeds += null !== (l = null === (r = n.embeds) || void 0 === r ? void 0 : r.length) && void 0 !== l ? l : 0),
            (d.numOfAttachmentsPendingScan += null !== (u = null === (a = n.attachments) || void 0 === a ? void 0 : a.filter((e) => (0, y.CN)(e, t)).length) && void 0 !== u ? u : 0),
            (d.numOfEmbedsPendingScan += null !== (c = null == n ? void 0 : null === (s = n.embeds) || void 0 === s ? void 0 : s.filter((e) => (0, y.fj)(e, t)).length) && void 0 !== c ? c : 0),
            {
                ...e,
                [n.channel_id]: d
            }
        );
    }, {});
}
function Z(e) {
    function t(e) {
        return null != e;
    }
    let n = e.filter((e) => (0, y.OR)(e) && (0, b.HH)(e)),
        i = e
            .map((e) => {
                if (null != e && 'referenced_message' in e && null != e.referenced_message && (0, y.OR)(e.referenced_message) && (0, b.HH)(e.referenced_message)) return e.referenced_message;
            })
            .filter(t);
    i.length > 0 && (n = [...n, ...i]);
    let r = s()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
    return {
        messagesPendingScan: r.filter((e) => (0, y.xG)(e)),
        attributesByChannelId: B(r)
    };
}
function F(e) {
    function t(e) {
        return null != e;
    }
    let n = e.filter((e) => (0, y.OR)(e) && (0, b.HH)(e)),
        i = e
            .map((e) => {
                if (N.OBS.has(e.type) && null != e.messageReference) {
                    let t = f.Z.getMessageByReference(e.messageReference);
                    if (t.state === f.Y.LOADED && null != t.message && (0, y.OR)(t.message) && (0, b.HH)(t.message)) return t.message;
                }
            })
            .filter(t);
    i.length > 0 && (n = [...n, ...i]);
    let r = s()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
    return {
        messagesPendingScan: r.filter((e) => (0, y.xG)(e)),
        attributesByChannelId: B(r)
    };
}
function V(e, t) {
    let { messagesPendingScan: n, attributesByChannelId: i } = Z(e);
    return (
        v.default.entries(i).forEach((e) => {
            let [t, n] = e;
            (0, b.IV)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
            });
        }),
        n.length > 0 && (G(n, t), !0)
    );
}
function j(e) {
    let { messagesPendingScan: t, attributesByChannelId: n } = F(e);
    return (
        v.default.entries(n).forEach((e) => {
            let [t, n] = e;
            (0, b.IV)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
            });
        }),
        t.length > 0 && (G(t), !0)
    );
}
function H(e) {
    var t, n, i, r, a, s;
    let { message: o } = e;
    if (null == o.channel_id || null == o.id || (null === (t = o.author) || void 0 === t ? void 0 : t.id) === _.default.getId() || (null == o.embeds && null == o.attachments) || ((null === (n = o.embeds) || void 0 === n ? void 0 : n.length) === 0 && (null === (i = o.attachments) || void 0 === i ? void 0 : i.length) === 0)) return !1;
    if (!(0, y.N7)(o)) {
        let e = null !== (s = null !== (a = m.Z.getMessage(o.channel_id, o.id)) && void 0 !== a ? a : T.Z.getMessage(o.id, o.channel_id)) && void 0 !== s ? s : null === (r = f.Z.getMessage(o.channel_id, o.id)) || void 0 === r ? void 0 : r.message;
        null == e || (0, y.N7)((0, c.wi)(e, o)) || w(e, b.Pq.UPDATE);
    }
    let l = g.Z.getChannelId(),
        u = p.ZP.getCurrentSidebarChannelId(l);
    if (!(o.channel_id === l || o.channel_id === u)) return !1;
    let d = m.Z.getMessage(o.channel_id, o.id);
    return null != d && V([d], { isMessageUpdate: !0 });
}
function Y(e) {
    var t, n;
    let { channelId: i, message: r, optimistic: a, isPushNotification: s } = e;
    if (a || s || null == i || (null === (t = r.author) || void 0 === t ? void 0 : t.id) === _.default.getId()) return !1;
    let o = g.Z.getChannelId(),
        l = p.ZP.getCurrentSidebarChannelId(o),
        u = i === o || i === l,
        c = h.Z.getChannel(i);
    if (!u) return !1;
    let d = null === (n = null == c ? void 0 : c.isPrivate()) || void 0 === n || n,
        f = (null == c ? void 0 : c.memberCount) == null || (null == c ? void 0 : c.memberCount) > 100;
    return V([r], { jitter: d && f });
}
function W(e) {
    let { channelId: t, messages: n } = e;
    if (null == t || null == n) return !1;
    let i = g.Z.getChannelId(),
        r = p.ZP.getCurrentSidebarChannelId(i);
    return (t === i || t === r) && V(n);
}
function K(e) {
    let { messages: t } = e;
    if (null == t) return !1;
    let n = r()(t);
    return V(s()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id));
}
function z(e) {
    let { guildId: t, threads: n } = e;
    return null != n && E.Z.getGuildId() === t && V(v.default.keys(n).map((e) => n[e].first_message));
}
function q(e) {
    let { guildId: t, firstMessages: n } = e;
    return null != n && E.Z.getGuildId() === t && V(n, { forceBatchScan: !0 });
}
function Q(e) {
    (0, A.U)();
    let { channelId: t } = e;
    return null != t && t === g.Z.getChannelId() && $(t);
}
function X(e) {
    let { settings: t, local: n } = e;
    if (!n || t.type !== C.yP.PRELOADED_USER_SETTINGS) return !1;
    let i = g.Z.getChannelId();
    return null != i && $(i);
}
function J(e) {
    let { channelId: t, chatOpen: n } = e;
    return !!n && $(t);
}
function $(e) {
    let t = m.Z.getMessages(e);
    return 0 !== t.length && j(t);
}
class ee extends u.Z {
    constructor(...e) {
        super(...e),
            R(this, 'actions', {
                LOAD_MESSAGES_SUCCESS: W,
                LOAD_FORUM_POSTS: z,
                LOAD_THREADS_SUCCESS: q,
                LOAD_ARCHIVED_THREADS_SUCCESS: q,
                MESSAGE_CREATE: Y,
                MESSAGE_UPDATE: H,
                LOGOUT: P,
                SEARCH_FINISH: K,
                MOD_VIEW_SEARCH_FINISH: K,
                CHANNEL_SELECT: Q,
                LOAD_PINNED_MESSAGES_SUCCESS: K,
                USER_SETTINGS_PROTO_UPDATE: X,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: J
            });
    }
}
let et = new ee();
