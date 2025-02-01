n.d(t, {
    ZP: () => en,
    b2: () => D
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
    T = n(651530),
    b = n(247206),
    S = n(735020),
    A = n(774863),
    N = n(799525),
    C = n(981631),
    R = n(526761);
function O(e, t, n) {
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
let D = 3000,
    x = 800,
    L = {};
function P(e) {
    return ''.concat(e.channel_id, ':').concat(e.id);
}
function w() {
    Object.values(L).forEach((e) => {
        let { timeout: t } = e;
        clearTimeout(t);
    }),
        (L = {});
}
function M(e, t) {
    if (null == e.id || null == e.channel_id) return !1;
    let n = P(e);
    if (null != L[n]) {
        let { timeout: i } = L[n];
        return clearTimeout(i), k(e, t), delete L[n], !0;
    }
    return !1;
}
function k(e, t) {
    let { setAt: n } = L[P(e)];
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
function U(e) {
    if (M(e, b.Pq.TIMEOUT)) {
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
let G = (e, t) => {
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
function B(e, t) {
    let { forceBatchScan: n = !1, jitter: i = !1 } = null != t ? t : {},
        r = (null == t ? void 0 : t.isMessageUpdate) ? e.filter(y.N7) : e;
    r.forEach((e) => {
        let t = P(e);
        null == L[t] &&
            (d.Z.increment({ name: o.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE }),
            (L[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    U(e);
                }, D)
            }));
    });
    let a = n || new Set(r.map((e) => e.channel_id)).size > 1;
    i
        ? setTimeout(() => {
              G(
                  r.filter((e) => null != L[P(e)]),
                  a
              );
          }, Math.random() * x)
        : G(r, a);
}
function Z(e) {
    let t = A.Z.validContentScanVersion;
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
function F(e) {
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
        attributesByChannelId: Z(r)
    };
}
function V(e) {
    function t(e) {
        return null != e;
    }
    let n = e.filter((e) => (0, y.OR)(e) && (0, b.HH)(e)),
        i = e
            .map((e) => {
                if (C.OBS.has(e.type) && null != e.messageReference) {
                    let t = f.Z.getMessageByReference(e.messageReference);
                    if (t.state === f.Y.LOADED && null != t.message && (0, y.OR)(t.message) && (0, b.HH)(t.message)) return t.message;
                }
            })
            .filter(t);
    i.length > 0 && (n = [...n, ...i]);
    let r = s()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
    return {
        messagesPendingScan: r.filter((e) => (0, y.xG)(e)),
        attributesByChannelId: Z(r)
    };
}
function j(e, t) {
    let { messagesPendingScan: n, attributesByChannelId: i } = F(e);
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
        n.length > 0 && (B(n, t), !0)
    );
}
function H(e) {
    let { messagesPendingScan: t, attributesByChannelId: n } = V(e);
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
        t.length > 0 && (B(t), !0)
    );
}
function Y(e) {
    var t, n, i, r, a, s;
    let { message: o } = e;
    if (!(0, T.Kh)() || null == o.channel_id || null == o.id || (null === (t = o.author) || void 0 === t ? void 0 : t.id) === _.default.getId() || (null == o.embeds && null == o.attachments) || ((null === (n = o.embeds) || void 0 === n ? void 0 : n.length) === 0 && (null === (i = o.attachments) || void 0 === i ? void 0 : i.length) === 0)) return !1;
    if (!(0, y.N7)(o)) {
        let e = null !== (s = null !== (a = m.Z.getMessage(o.channel_id, o.id)) && void 0 !== a ? a : S.Z.getMessage(o.id, o.channel_id)) && void 0 !== s ? s : null === (r = f.Z.getMessage(o.channel_id, o.id)) || void 0 === r ? void 0 : r.message;
        null == e || (0, y.N7)((0, c.wi)(e, o)) || M(e, b.Pq.UPDATE);
    }
    let l = g.Z.getChannelId(),
        u = p.ZP.getCurrentSidebarChannelId(l);
    if (!(o.channel_id === l || o.channel_id === u)) return !1;
    let d = m.Z.getMessage(o.channel_id, o.id);
    return null != d && j([d], { isMessageUpdate: !0 });
}
function W(e) {
    var t, n;
    let { channelId: i, message: r, optimistic: a, isPushNotification: s } = e;
    if (!(0, T.Kh)() || a || s || null == i || (null === (t = r.author) || void 0 === t ? void 0 : t.id) === _.default.getId()) return !1;
    let o = g.Z.getChannelId(),
        l = p.ZP.getCurrentSidebarChannelId(o),
        u = i === o || i === l,
        c = h.Z.getChannel(i);
    if (!u) return !1;
    let d = null === (n = null == c ? void 0 : c.isPrivate()) || void 0 === n || n,
        f = (null == c ? void 0 : c.memberCount) == null || (null == c ? void 0 : c.memberCount) > 100;
    return j([r], { jitter: d && f });
}
function K(e) {
    let { channelId: t, messages: n } = e;
    if (!(0, T.Kh)() || null == t || null == n) return !1;
    let i = g.Z.getChannelId(),
        r = p.ZP.getCurrentSidebarChannelId(i);
    return (t === i || t === r) && j(n);
}
function z(e) {
    let { messages: t } = e;
    if (!(0, T.Kh)() || null == t) return !1;
    let n = r()(t);
    return j(s()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id));
}
function q(e) {
    let { guildId: t, threads: n } = e;
    return !!(null != n && (0, T.Kh)()) && E.Z.getGuildId() === t && j(v.default.keys(n).map((e) => n[e].first_message));
}
function Q(e) {
    let { guildId: t, firstMessages: n } = e;
    return !!(null != n && (0, T.Kh)()) && E.Z.getGuildId() === t && j(n, { forceBatchScan: !0 });
}
function X(e) {
    (0, N.U)();
    let { channelId: t } = e;
    return !!(null != t && (0, T.Kh)()) && t === g.Z.getChannelId() && ee(t);
}
function J(e) {
    let { settings: t, local: n } = e;
    if (!(0, T.Kh)() || !n || t.type !== R.yP.PRELOADED_USER_SETTINGS) return !1;
    let i = g.Z.getChannelId();
    return null != i && ee(i);
}
function $(e) {
    let { channelId: t, chatOpen: n } = e;
    return !!(0, T.Kh)() && !!n && ee(t);
}
function ee(e) {
    let t = m.Z.getMessages(e);
    return 0 !== t.length && H(t);
}
class et extends u.Z {
    constructor(...e) {
        super(...e),
            O(this, 'actions', {
                LOAD_MESSAGES_SUCCESS: K,
                LOAD_FORUM_POSTS: q,
                LOAD_THREADS_SUCCESS: Q,
                LOAD_ARCHIVED_THREADS_SUCCESS: Q,
                MESSAGE_CREATE: W,
                MESSAGE_UPDATE: Y,
                LOGOUT: w,
                SEARCH_FINISH: z,
                MOD_VIEW_SEARCH_FINISH: z,
                CHANNEL_SELECT: X,
                LOAD_PINNED_MESSAGES_SUCCESS: z,
                USER_SETTINGS_PROTO_UPDATE: J,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: $
            });
    }
}
let en = new et();
