n.d(t, {
    ZP: () => en,
    b2: () => P
}),
    n(47120);
var r = n(952639),
    i = n.n(r),
    o = n(605906),
    a = n.n(o),
    s = n(286379),
    l = n(570140),
    c = n(147913),
    u = n(786761),
    d = n(797614),
    f = n(869765),
    _ = n(314897),
    p = n(433355),
    h = n(592125),
    m = n(375954),
    g = n(944486),
    E = n(914010),
    b = n(709054),
    y = n(93735),
    v = n(522664),
    O = n(247206),
    I = n(735020),
    S = n(774863),
    T = n(590773),
    N = n(799525),
    A = n(981631),
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
let P = 3000,
    w = 800,
    D = {};
function L(e) {
    return ''.concat(e.channel_id, ':').concat(e.id);
}
function x() {
    Object.values(D).forEach((e) => {
        let { timeout: t } = e;
        clearTimeout(t);
    }),
        (D = {});
}
function M(e, t) {
    if (null == e.id || null == e.channel_id) return !1;
    let n = L(e);
    if (null != D[n]) {
        let { timeout: r } = D[n];
        return clearTimeout(r), k(e, t), delete D[n], !0;
    }
    return !1;
}
function k(e, t) {
    let { setAt: n } = D[L(e)];
    if (t === O.Pq.UPDATE) {
        var r, i;
        let t = null != (r = e.attachments) ? r : [],
            n = null != (i = e.embeds) ? i : [],
            o = t.filter((e) =>
                (0, O.KP)(
                    {
                        type: O.lJ.Attachment,
                        media: e
                    },
                    !0
                )
            ),
            a = n.filter((e) =>
                (0, O.KP)(
                    {
                        type: O.lJ.Embed,
                        media: e
                    },
                    !0
                )
            );
        (0, O.xx)({
            messageId: e.id,
            channelId: e.channel_id,
            numOfAttachments: t.length,
            numOfEmbeds: n.length,
            numOfExplicitAttachments: o.length,
            numOfExplicitEmbeds: a.length
        });
    }
    (0, O.OP)(n, t);
}
function j(e) {
    if (M(e, O.Pq.TIMEOUT)) {
        let t = m.Z.getMessage(e.channel_id, e.id),
            { attachmentIds: n, embedIds: r } = (0, y.ZW)(t);
        (0, O.Hc)({
            channelId: e.channel_id,
            messageId: e.id,
            attachmentIds: n,
            embedIds: r
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
        if (t) return void (0, v.gx)(e);
        (0, v.qO)(
            e[0].channel_id,
            e.map((e) => e.id)
        );
    }
};
function G(e, t) {
    let { forceBatchScan: n = !1, jitter: r = !1 } = null != t ? t : {},
        i = (null == t ? void 0 : t.isMessageUpdate) ? e.filter(y.N7) : e;
    i.forEach((e) => {
        let t = L(e);
        null == D[t] &&
            (d.Z.increment({ name: s.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE }),
            (D[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    j(e);
                }, P)
            }));
    });
    let o = n || new Set(i.map((e) => e.channel_id)).size > 1;
    r
        ? setTimeout(() => {
              U(
                  i.filter((e) => null != D[L(e)]),
                  o
              );
          }, Math.random() * w)
        : U(i, o);
}
function B(e) {
    let t = S.Z.validContentScanVersion,
        n = {},
        r = {};
    return (
        e.forEach((e) => {
            var i, o, a, s, l, c, u, d, f, _, p, h;
            null == n[e.channel_id] &&
                (n[e.channel_id] = {
                    numOfAttachments: 0,
                    numOfAttachmentsPendingScan: 0,
                    numOfEmbeds: 0,
                    numOfEmbedsPendingScan: 0
                }),
                null == r[e.id] &&
                    (r[e.id] = {
                        channelId: e.channel_id,
                        numOfAttachments: 0,
                        numOfGoreAttachments: 0,
                        numOfExplicitAttachments: 0,
                        numOfEmbeds: 0,
                        numOfGoreEmbeds: 0,
                        numOfExplicitEmbeds: 0
                    });
            let m = null != (u = null == (i = e.attachments) ? void 0 : i.length) ? u : 0,
                g = null != (d = null == (o = e.embeds) ? void 0 : o.length) ? d : 0,
                E = null != (f = null == (a = e.attachments) ? void 0 : a.filter((e) => (0, y.CN)(e, t)).length) ? f : 0,
                b = null != (_ = null == (s = e.embeds) ? void 0 : s.filter((e) => (0, y.fj)(e, t)).length) ? _ : 0,
                v = n[e.channel_id];
            (v.numOfAttachments += m), (v.numOfEmbeds += g), (v.numOfAttachmentsPendingScan += E), (v.numOfEmbedsPendingScan += b);
            let I = r[e.id];
            (I.numOfAttachments += m),
                (I.numOfEmbeds += g),
                (I.numOfExplicitAttachments =
                    null !=
                    (p =
                        null == (l = e.attachments)
                            ? void 0
                            : l.filter((e) =>
                                  (0, O.KP)(
                                      {
                                          type: O.lJ.Attachment,
                                          media: e
                                      },
                                      !0
                                  )
                              ).length)
                        ? p
                        : 0),
                (I.numOfExplicitEmbeds =
                    null !=
                    (h =
                        null == (c = e.embeds)
                            ? void 0
                            : c.filter((e) =>
                                  (0, O.KP)(
                                      {
                                          type: O.lJ.Embed,
                                          media: e
                                      },
                                      !0
                                  )
                              ).length)
                        ? h
                        : 0),
                (I.numOfGoreAttachments = 0),
                (I.numOfGoreEmbeds = 0);
        }),
        {
            channelLookup: n,
            messageLookup: r
        }
    );
}
function F(e) {
    function t(e) {
        return null != e;
    }
    let n = e.filter((e) => (0, y.OR)(e) && (0, O.HH)(e)),
        r = e
            .map((e) => {
                if (null != e && 'referenced_message' in e && null != e.referenced_message && (0, y.OR)(e.referenced_message) && (0, O.HH)(e.referenced_message)) return e.referenced_message;
            })
            .filter(t);
    r.length > 0 && (n = [...n, ...r]);
    let i = a()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
        o = i.filter((e) => (0, y.xG)(e)),
        s = B(i);
    return {
        messagesPendingScan: o,
        attributesByMessageId: s.messageLookup,
        attributesByChannelId: s.channelLookup
    };
}
function V(e) {
    function t(e) {
        return null != e;
    }
    let n = e.filter((e) => (0, y.OR)(e) && (0, O.HH)(e)),
        r = e
            .map((e) => {
                if (A.OBS.has(e.type) && null != e.messageReference) {
                    let t = f.Z.getMessageByReference(e.messageReference);
                    if (t.state === f.Y.LOADED && null != t.message && (0, y.OR)(t.message) && (0, O.HH)(t.message)) return t.message;
                }
            })
            .filter(t);
    r.length > 0 && (n = [...n, ...r]);
    let i = a()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
        o = i.filter((e) => (0, y.xG)(e)),
        s = B(i);
    return {
        messagesPendingScan: o,
        attributesByChannelId: s.channelLookup,
        attributesByMessageId: s.messageLookup
    };
}
function Z(e, t) {
    let { messagesPendingScan: n, attributesByChannelId: r, attributesByMessageId: i } = F(e);
    return (
        b.default.entries(r).forEach((e) => {
            let [t, n] = e;
            (0, O.IV)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
            });
        }),
        (0, T.S)() &&
            b.default.entries(i).forEach((e) => {
                let [t, n] = e;
                (0, O.QN)({
                    messageId: t,
                    channelId: n.channelId,
                    numOfAttachments: n.numOfAttachments,
                    numOfGoreAttachments: n.numOfGoreAttachments,
                    numOfExplicitAttachments: n.numOfExplicitAttachments,
                    numOfEmbeds: n.numOfEmbeds,
                    numOfGoreEmbeds: n.numOfGoreEmbeds,
                    numOfExplicitEmbeds: n.numOfExplicitEmbeds
                });
            }),
        n.length > 0 && (G(n, t), !0)
    );
}
function H(e) {
    let { messagesPendingScan: t, attributesByChannelId: n, attributesByMessageId: r } = V(e);
    return (
        b.default.entries(n).forEach((e) => {
            let [t, n] = e;
            (0, O.IV)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
            });
        }),
        (0, T.S)() &&
            b.default.entries(r).forEach((e) => {
                let [t, n] = e;
                (0, O.QN)({
                    messageId: t,
                    channelId: n.channelId,
                    numOfAttachments: n.numOfAttachments,
                    numOfGoreAttachments: n.numOfGoreAttachments,
                    numOfExplicitAttachments: n.numOfExplicitAttachments,
                    numOfEmbeds: n.numOfEmbeds,
                    numOfGoreEmbeds: n.numOfGoreEmbeds,
                    numOfExplicitEmbeds: n.numOfExplicitEmbeds
                });
            }),
        t.length > 0 && (G(t), !0)
    );
}
function W(e) {
    var t, n, r, i, o, a;
    let { message: s } = e;
    if (null == s.channel_id || null == s.id || (null == (t = s.author) ? void 0 : t.id) === _.default.getId() || (null == s.embeds && null == s.attachments) || ((null == (n = s.embeds) ? void 0 : n.length) === 0 && (null == (r = s.attachments) ? void 0 : r.length) === 0)) return !1;
    if (!(0, y.N7)(s)) {
        let e = null != (a = null != (o = m.Z.getMessage(s.channel_id, s.id)) ? o : I.Z.getMessage(s.id, s.channel_id)) ? a : null == (i = f.Z.getMessage(s.channel_id, s.id)) ? void 0 : i.message;
        null == e || (0, y.N7)((0, u.wi)(e, s)) || M(e, O.Pq.UPDATE);
    }
    let l = g.Z.getChannelId(),
        c = p.ZP.getCurrentSidebarChannelId(l);
    if (s.channel_id !== l && s.channel_id !== c) return !1;
    let d = m.Z.getMessage(s.channel_id, s.id);
    return null != d && Z([d], { isMessageUpdate: !0 });
}
function Y(e) {
    var t, n;
    let { channelId: r, message: i, optimistic: o, isPushNotification: a } = e;
    if (o || a || null == r || (null == (t = i.author) ? void 0 : t.id) === _.default.getId()) return !1;
    let s = g.Z.getChannelId(),
        l = p.ZP.getCurrentSidebarChannelId(s),
        c = r === s || r === l,
        u = h.Z.getChannel(r);
    if (!c) return !1;
    let d = null == (n = null == u ? void 0 : u.isPrivate()) || n,
        f = (null == u ? void 0 : u.memberCount) == null || (null == u ? void 0 : u.memberCount) > 100;
    return Z([i], { jitter: d && f });
}
function K(e) {
    let { channelId: t, messages: n } = e;
    if (null == t || null == n) return !1;
    let r = g.Z.getChannelId(),
        i = p.ZP.getCurrentSidebarChannelId(r);
    return (t === r || t === i) && Z(n);
}
function z(e) {
    let { messages: t } = e;
    if (null == t) return !1;
    let n = i()(t);
    return Z(a()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id));
}
function q(e) {
    let { guildId: t, threads: n } = e;
    return null != n && E.Z.getGuildId() === t && Z(b.default.keys(n).map((e) => n[e].first_message));
}
function Q(e) {
    let { guildId: t, firstMessages: n } = e;
    return null != n && E.Z.getGuildId() === t && Z(n, { forceBatchScan: !0 });
}
function X(e) {
    (0, N.U)();
    let { channelId: t } = e;
    return null != t && t === g.Z.getChannelId() && ee(t);
}
function J(e) {
    let { settings: t, local: n } = e;
    if (!n || t.type !== C.yP.PRELOADED_USER_SETTINGS) return !1;
    let r = g.Z.getChannelId();
    return null != r && ee(r);
}
function $(e) {
    let { channelId: t, chatOpen: n } = e;
    return !!n && ee(t);
}
function ee(e) {
    let t = m.Z.getMessages(e);
    return 0 !== t.length && H(t);
}
class et extends c.Z {
    constructor(...e) {
        super(...e),
            R(this, 'actions', {
                LOAD_MESSAGES_SUCCESS: K,
                LOAD_FORUM_POSTS: q,
                LOAD_THREADS_SUCCESS: Q,
                LOAD_ARCHIVED_THREADS_SUCCESS: Q,
                MESSAGE_CREATE: Y,
                MESSAGE_UPDATE: W,
                LOGOUT: x,
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
