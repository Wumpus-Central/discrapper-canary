(n.d(t, {
    ZP: () => es,
    b2: () => D
}),
    n(388685));
var r = n(952639),
    i = n.n(r),
    a = n(605906),
    o = n.n(a),
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
    O = n(522664),
    v = n(991621),
    I = n(247206),
    T = n(735020),
    S = n(294509),
    A = n(629710),
    N = n(590773),
    C = n(799525),
    R = n(981631),
    P = n(526761);
function w(e, t, n) {
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
    L = 800,
    x = {};
function M(e) {
    return ''.concat(e.channel_id, ':').concat(e.id);
}
function k() {
    (Object.values(x).forEach((e) => {
        let { timeout: t } = e;
        clearTimeout(t);
    }),
        (x = {}));
}
function j(e, t) {
    if (null == e.id || null == e.channel_id) return !1;
    let n = M(e);
    if (null != x[n]) {
        let { timeout: r, setAt: i } = x[n];
        return (U(e, t, i), clearTimeout(r), delete x[n], !0);
    }
    return !1;
}
function U(e, t, n) {
    if (t === I.Pq.UPDATE) {
        var r, i;
        let t = null != (r = e.attachments) ? r : [],
            n = null != (i = e.embeds) ? i : [],
            a = t.filter((e) =>
                (0, A.SI)(S._.EXPLICIT, {
                    type: v.l.Attachment,
                    media: e
                })
            ),
            o = n.filter((e) =>
                (0, A.SI)(S._.EXPLICIT, {
                    type: v.l.Embed,
                    media: e
                })
            );
        (0, I.xx)({
            messageId: e.id,
            channelId: e.channel_id,
            numOfAttachments: t.length,
            numOfEmbeds: n.length,
            numOfExplicitAttachments: a.length,
            numOfExplicitEmbeds: o.length
        });
    }
    (0, I.OP)(n, t);
}
function G(e) {
    if (j(e, I.Pq.TIMEOUT)) {
        let t = m.Z.getMessage(e.channel_id, e.id);
        if (null != t) {
            let { attachmentIds: n, embedIds: r } = (0, A.DQ)(t);
            (0, I.Hc)({
                channelId: e.channel_id,
                messageId: e.id,
                attachmentIds: n,
                embedIds: r
            });
        }
        l.Z.dispatch({
            type: 'MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT',
            messageId: e.id,
            channelId: e.channel_id
        });
    }
}
let B = (e, t) => {
    if (0 !== e.length) {
        if (t) return void (0, O.gx)(e);
        (0, O.qO)(
            e[0].channel_id,
            e.map((e) => e.id)
        );
    }
};
function V(e) {
    return null == x[M(e)];
}
function F(e, t) {
    let { forceBatchScan: n = !1, jitter: r = !1 } = null != t ? t : {},
        i = (null == t ? void 0 : t.isMessageUpdate) ? e.filter((e) => (0, A.MD)(e)).filter(V) : e.filter(V);
    i.forEach((e) => {
        let t = M(e);
        null == x[t] &&
            (d.Z.increment({ name: s.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE }),
            (x[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    G(e);
                }, D)
            }));
    });
    let a = n || new Set(i.map((e) => e.channel_id)).size > 1;
    r
        ? setTimeout(() => {
              B(
                  i.filter((e) => null != x[M(e)]),
                  a
              );
          }, Math.random() * L)
        : B(i, a);
}
function Z(e) {
    let t = {},
        n = {};
    return (
        e.forEach((e) => {
            var r, i, a, o, s, l, c, u, d, f, _, p;
            (null == t[e.channel_id] &&
                (t[e.channel_id] = {
                    numOfAttachments: 0,
                    numOfAttachmentsPendingScan: 0,
                    numOfEmbeds: 0,
                    numOfEmbedsPendingScan: 0
                }),
                null == n[e.id] &&
                    (n[e.id] = {
                        channelId: e.channel_id,
                        numOfAttachments: 0,
                        numOfGoreAttachments: 0,
                        numOfExplicitAttachments: 0,
                        numOfEmbeds: 0,
                        numOfGoreEmbeds: 0,
                        numOfExplicitEmbeds: 0
                    }));
            let h = null != (c = null == (r = e.attachments) ? void 0 : r.length) ? c : 0,
                m = null != (u = null == (i = e.embeds) ? void 0 : i.length) ? u : 0,
                { attachmentIds: g, embedIds: E } = (0, A.DQ)(e),
                b = t[e.channel_id];
            ((b.numOfAttachments += h), (b.numOfEmbeds += m), (b.numOfAttachmentsPendingScan += g.length), (b.numOfEmbedsPendingScan += E.length));
            let y = n[e.id];
            ((y.numOfAttachments += h),
                (y.numOfEmbeds += m),
                (y.numOfExplicitAttachments =
                    null !=
                    (d =
                        null == (a = e.attachments)
                            ? void 0
                            : a.filter((e) =>
                                  (0, A.SI)(S._.EXPLICIT, {
                                      type: v.l.Attachment,
                                      media: e
                                  })
                              ).length)
                        ? d
                        : 0),
                (y.numOfExplicitEmbeds =
                    null !=
                    (f =
                        null == (o = e.embeds)
                            ? void 0
                            : o.filter((e) =>
                                  (0, A.SI)(S._.EXPLICIT, {
                                      type: v.l.Embed,
                                      media: e
                                  })
                              ).length)
                        ? f
                        : 0),
                (y.numOfGoreAttachments =
                    null !=
                    (_ =
                        null == (s = e.attachments)
                            ? void 0
                            : s.filter((e) =>
                                  (0, A.SI)(S._.GORE, {
                                      type: v.l.Attachment,
                                      media: e
                                  })
                              ).length)
                        ? _
                        : 0),
                (y.numOfGoreEmbeds =
                    null !=
                    (p =
                        null == (l = e.embeds)
                            ? void 0
                            : l.filter((e) =>
                                  (0, A.SI)(S._.GORE, {
                                      type: v.l.Embed,
                                      media: e
                                  })
                              ).length)
                        ? p
                        : 0));
        }),
        {
            channelLookup: t,
            messageLookup: n
        }
    );
}
function H(e) {
    function t(e) {
        return null != e;
    }
    let n = e.filter((e) => {
            let t = (0, y.t)(e),
                n = 0 !== (0, A.rb)(e);
            return t && n;
        }),
        r = e
            .map((e) => {
                if (null != e && 'referenced_message' in e && null != e.referenced_message && (0, y.t)(e.referenced_message) && 0 !== (0, A.rb)(e.referenced_message)) return e.referenced_message;
            })
            .filter(t);
    r.length > 0 && (n = [...n, ...r]);
    let i = o()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
        a = i.filter((e) => (0, A.MD)(e)),
        s = Z(i);
    return {
        messagesPendingScan: a,
        attributesByMessageId: s.messageLookup,
        attributesByChannelId: s.channelLookup
    };
}
function Y(e) {
    function t(e) {
        return null != e;
    }
    let n = e.filter((e) => (0, y.t)(e) && 0 !== (0, A.rb)(e)),
        r = e
            .map((e) => {
                if (R.OBS.has(e.type) && null != e.messageReference) {
                    let t = f.Z.getMessageByReference(e.messageReference);
                    if (t.state === f.Y.LOADED && null != t.message && (0, y.t)(t.message) && 0 !== (0, A.rb)(t.message)) return t.message;
                }
            })
            .filter(t);
    r.length > 0 && (n = [...n, ...r]);
    let i = o()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
        a = i.filter((e) => (0, A.MD)(e)),
        s = Z(i);
    return {
        messagesPendingScan: a,
        attributesByChannelId: s.channelLookup,
        attributesByMessageId: s.messageLookup
    };
}
function W(e, t) {
    let { messagesPendingScan: n, attributesByChannelId: r, attributesByMessageId: i } = H(e);
    return (
        b.default.entries(r).forEach((e) => {
            let [t, n] = e;
            (0, I.IV)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
            });
        }),
        (0, N.S)() &&
            b.default.entries(i).forEach((e) => {
                let [t, n] = e;
                (0, I.QN)({
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
        n.length > 0 && (F(n, t), !0)
    );
}
function K(e) {
    let { messagesPendingScan: t, attributesByChannelId: n, attributesByMessageId: r } = Y(e);
    return (
        b.default.entries(n).forEach((e) => {
            let [t, n] = e;
            (0, I.IV)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
            });
        }),
        (0, N.S)() &&
            b.default.entries(r).forEach((e) => {
                let [t, n] = e;
                (0, I.QN)({
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
        t.length > 0 && (F(t), !0)
    );
}
function z(e) {
    var t, n, r, i, a, o;
    let { message: s } = e;
    if (null == s.channel_id || null == s.id || (null == (t = s.author) ? void 0 : t.id) === _.default.getId() || (null == s.embeds && null == s.attachments) || ((null == (n = s.embeds) ? void 0 : n.length) === 0 && (null == (r = s.attachments) ? void 0 : r.length) === 0)) return !1;
    if (!(0, A.MD)(s)) {
        let e = null != (o = null != (a = m.Z.getMessage(s.channel_id, s.id)) ? a : T.Z.getMessage(s.id, s.channel_id)) ? o : null == (i = f.Z.getMessage(s.channel_id, s.id)) ? void 0 : i.message;
        null == e || (0, A.MD)((0, u.wi)(e, s)) || j(e, I.Pq.UPDATE);
    }
    let l = g.Z.getChannelId(),
        c = p.ZP.getCurrentSidebarChannelId(l);
    if (s.channel_id !== l && s.channel_id !== c) return !1;
    let d = m.Z.getMessage(s.channel_id, s.id);
    return null != d && W([d], { isMessageUpdate: !0 });
}
function q(e) {
    var t, n;
    let { channelId: r, message: i, optimistic: a, isPushNotification: o } = e;
    if (a || o || null == r || (null == (t = i.author) ? void 0 : t.id) === _.default.getId()) return !1;
    let s = g.Z.getChannelId(),
        l = p.ZP.getCurrentSidebarChannelId(s),
        c = r === s || r === l,
        u = h.Z.getChannel(r);
    if (!c) return !1;
    let d = null == (n = null == u ? void 0 : u.isPrivate()) || n,
        f = (null == u ? void 0 : u.memberCount) == null || (null == u ? void 0 : u.memberCount) > 100;
    return W([i], { jitter: d && f });
}
function X(e) {
    let { channelId: t, messages: n } = e;
    if (null == t || null == n) return !1;
    let r = g.Z.getChannelId(),
        i = p.ZP.getCurrentSidebarChannelId(r);
    return (t === r || t === i) && W(n);
}
function Q(e) {
    let { messages: t } = e;
    if (null == t) return !1;
    let n = i()(t);
    return W(o()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id));
}
function J(e) {
    let { pins: t } = e;
    return W(
        t.map((e) => {
            let { message: t } = e;
            return t;
        })
    );
}
function $(e) {
    let { guildId: t, threads: n } = e;
    return null != n && E.Z.getGuildId() === t && W(b.default.keys(n).map((e) => n[e].first_message));
}
function ee(e) {
    let { guildId: t, firstMessages: n } = e;
    return null != n && E.Z.getGuildId() === t && W(n, { forceBatchScan: !0 });
}
function et(e) {
    let { channelId: t } = e;
    return null != t && ea(t);
}
function en(e) {
    let { channelId: t } = e;
    return ((0, C.U)(), null != t && t === g.Z.getChannelId() && ea(t));
}
function er(e) {
    let { settings: t, local: n } = e;
    if (!n || t.type !== P.yP.PRELOADED_USER_SETTINGS) return !1;
    let r = g.Z.getChannelId();
    return null != r && ea(r);
}
function ei(e) {
    let { channelId: t, chatOpen: n } = e;
    return !!n && ea(t);
}
function ea(e) {
    let t = m.Z.getMessages(e);
    return 0 !== t.length && K(t);
}
class eo extends c.Z {
    constructor(...e) {
        (super(...e),
            w(this, 'actions', {
                LOAD_MESSAGES_SUCCESS: X,
                LOAD_FORUM_POSTS: $,
                LOAD_THREADS_SUCCESS: ee,
                LOAD_ARCHIVED_THREADS_SUCCESS: ee,
                SIDEBAR_VIEW_CHANNEL: et,
                MESSAGE_CREATE: q,
                MESSAGE_UPDATE: z,
                LOGOUT: k,
                SEARCH_FINISH: Q,
                MOD_VIEW_SEARCH_FINISH: Q,
                CHANNEL_SELECT: en,
                LOAD_PINNED_MESSAGES_SUCCESS: J,
                USER_SETTINGS_PROTO_UPDATE: er,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: ei
            }));
    }
}
let es = new eo();
