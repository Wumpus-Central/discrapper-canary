n.d(t, {
    ZP: () => es,
    b2: () => w,
}),
    n(388685);
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
    p = n(314897),
    _ = n(433355),
    m = n(592125),
    h = n(375954),
    g = n(944486),
    E = n(914010),
    b = n(709054),
    y = n(93735),
    O = n(522664),
    v = n(991621),
    S = n(247206),
    I = n(735020),
    T = n(294509),
    A = n(629710),
    C = n(590773),
    N = n(799525),
    P = n(981631),
    R = n(526761);
function D(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let w = 3000,
    x = 800,
    L = {};
function j(e) {
    return "".concat(e.channel_id, ":").concat(e.id);
}
function M() {
    Object.values(L).forEach((e) => {
        let { timeout: t } = e;
        clearTimeout(t);
    }),
        (L = {});
}
function k(e, t) {
    if (null == e.id || null == e.channel_id) return !1;
    let n = j(e);
    if (null != L[n]) {
        let { timeout: r, setAt: i } = L[n];
        return U(e, t, i), clearTimeout(r), delete L[n], !0;
    }
    return !1;
}
function U(e, t, n) {
    if (t === S.Pq.UPDATE) {
        var r, i;
        let t = null != (r = e.attachments) ? r : [],
            n = null != (i = e.embeds) ? i : [],
            a = t.filter((e) =>
                (0, A.SI)(T._.EXPLICIT, {
                    type: v.l.Attachment,
                    media: e,
                }),
            ),
            o = n.filter((e) =>
                (0, A.SI)(T._.EXPLICIT, {
                    type: v.l.Embed,
                    media: e,
                }),
            );
        (0, S.xx)({
            messageId: e.id,
            channelId: e.channel_id,
            numOfAttachments: t.length,
            numOfEmbeds: n.length,
            numOfExplicitAttachments: a.length,
            numOfExplicitEmbeds: o.length,
        });
    }
    (0, S.OP)(n, t);
}
function G(e) {
    if (k(e, S.Pq.TIMEOUT)) {
        let t = h.Z.getMessage(e.channel_id, e.id);
        if (null != t) {
            let { attachmentIds: n, embedIds: r } = (0, A.DQ)(t);
            (0, S.Hc)({
                channelId: e.channel_id,
                messageId: e.id,
                attachmentIds: n,
                embedIds: r,
            });
        }
        l.Z.dispatch({
            type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT",
            messageId: e.id,
            channelId: e.channel_id,
        });
    }
}
let Z = (e, t) => {
    if (0 !== e.length) {
        if (t) return void (0, O.gx)(e);
        (0, O.qO)(
            e[0].channel_id,
            e.map((e) => e.id),
        );
    }
};
function B(e) {
    return null == L[j(e)];
}
function F(e, t) {
    let { forceBatchScan: n = !1, jitter: r = !1 } = null != t ? t : {},
        i = (null == t ? void 0 : t.isMessageUpdate) ? e.filter((e) => (0, A.MD)(e)).filter(B) : e.filter(B);
    i.forEach((e) => {
        let t = j(e);
        null == L[t] &&
            (d.Z.increment({ name: s.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE }),
            (L[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    G(e);
                }, w),
            }));
    });
    let a = n || new Set(i.map((e) => e.channel_id)).size > 1;
    r
        ? setTimeout(() => {
              Z(
                  i.filter((e) => null != L[j(e)]),
                  a,
              );
          }, Math.random() * x)
        : Z(i, a);
}
function V(e) {
    let t = {},
        n = {};
    return (
        e.forEach((e) => {
            var r, i, a, o, s, l, c, u, d, f, p, _, m, h, g, E;
            null == t[e.channel_id] &&
                (t[e.channel_id] = {
                    numOfAttachments: 0,
                    numOfAttachmentsPendingScan: 0,
                    numOfEmbeds: 0,
                    numOfEmbedsPendingScan: 0,
                }),
                null == n[e.id] &&
                    (n[e.id] = {
                        channelId: e.channel_id,
                        numOfAttachments: 0,
                        numOfSelfHarmAttachments: 0,
                        numOfGoreAttachments: 0,
                        numOfExplicitAttachments: 0,
                        numOfEmbeds: 0,
                        numOfSelfHarmEmbeds: 0,
                        numOfGoreEmbeds: 0,
                        numOfExplicitEmbeds: 0,
                    });
            let b = null != (d = null == (r = e.attachments) ? void 0 : r.length) ? d : 0,
                y = null != (f = null == (i = e.embeds) ? void 0 : i.length) ? f : 0,
                { attachmentIds: O, embedIds: S } = (0, A.DQ)(e),
                I = t[e.channel_id];
            (I.numOfAttachments += b),
                (I.numOfEmbeds += y),
                (I.numOfAttachmentsPendingScan += O.length),
                (I.numOfEmbedsPendingScan += S.length);
            let C = n[e.id];
            (C.numOfAttachments += b),
                (C.numOfEmbeds += y),
                (C.numOfExplicitAttachments =
                    null !=
                    (p =
                        null == (a = e.attachments)
                            ? void 0
                            : a.filter((e) =>
                                  (0, A.SI)(T._.EXPLICIT, {
                                      type: v.l.Attachment,
                                      media: e,
                                  }),
                              ).length)
                        ? p
                        : 0),
                (C.numOfExplicitEmbeds =
                    null !=
                    (_ =
                        null == (o = e.embeds)
                            ? void 0
                            : o.filter((e) =>
                                  (0, A.SI)(T._.EXPLICIT, {
                                      type: v.l.Embed,
                                      media: e,
                                  }),
                              ).length)
                        ? _
                        : 0),
                (C.numOfGoreAttachments =
                    null !=
                    (m =
                        null == (s = e.attachments)
                            ? void 0
                            : s.filter((e) =>
                                  (0, A.SI)(T._.GORE, {
                                      type: v.l.Attachment,
                                      media: e,
                                  }),
                              ).length)
                        ? m
                        : 0),
                (C.numOfGoreEmbeds =
                    null !=
                    (h =
                        null == (l = e.embeds)
                            ? void 0
                            : l.filter((e) =>
                                  (0, A.SI)(T._.GORE, {
                                      type: v.l.Embed,
                                      media: e,
                                  }),
                              ).length)
                        ? h
                        : 0),
                (C.numOfSelfHarmAttachments =
                    null !=
                    (g =
                        null == (c = e.attachments)
                            ? void 0
                            : c.filter((e) =>
                                  (0, A.SI)(T._.SELF_HARM, {
                                      type: v.l.Attachment,
                                      media: e,
                                  }),
                              ).length)
                        ? g
                        : 0),
                (C.numOfSelfHarmEmbeds =
                    null !=
                    (E =
                        null == (u = e.embeds)
                            ? void 0
                            : u.filter((e) =>
                                  (0, A.SI)(T._.SELF_HARM, {
                                      type: v.l.Embed,
                                      media: e,
                                  }),
                              ).length)
                        ? E
                        : 0);
        }),
        {
            channelLookup: t,
            messageLookup: n,
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
                if (
                    null != e &&
                    "referenced_message" in e &&
                    null != e.referenced_message &&
                    (0, y.t)(e.referenced_message) &&
                    0 !== (0, A.rb)(e.referenced_message)
                )
                    return e.referenced_message;
            })
            .filter(t);
    r.length > 0 && (n = [...n, ...r]);
    let i = o()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
        a = i.filter((e) => (0, A.MD)(e)),
        s = V(i);
    return {
        messagesPendingScan: a,
        attributesByMessageId: s.messageLookup,
        attributesByChannelId: s.channelLookup,
    };
}
function Y(e) {
    function t(e) {
        return null != e;
    }
    let n = e.filter((e) => (0, y.t)(e) && 0 !== (0, A.rb)(e)),
        r = e
            .map((e) => {
                if (P.OBS.has(e.type) && null != e.messageReference) {
                    let t = f.Z.getMessageByReference(e.messageReference);
                    if (
                        t.state === f.Y.LOADED &&
                        null != t.message &&
                        (0, y.t)(t.message) &&
                        0 !== (0, A.rb)(t.message)
                    )
                        return t.message;
                }
            })
            .filter(t);
    r.length > 0 && (n = [...n, ...r]);
    let i = o()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
        a = i.filter((e) => (0, A.MD)(e)),
        s = V(i);
    return {
        messagesPendingScan: a,
        attributesByChannelId: s.channelLookup,
        attributesByMessageId: s.messageLookup,
    };
}
function W(e, t) {
    let { messagesPendingScan: n, attributesByChannelId: r, attributesByMessageId: i } = H(e);
    return (
        b.default.entries(r).forEach((e) => {
            let [t, n] = e;
            (0, S.IV)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan,
            });
        }),
        (0, C.S)() &&
            b.default.entries(i).forEach((e) => {
                let [t, n] = e;
                (0, S.QN)({
                    messageId: t,
                    channelId: n.channelId,
                    numOfAttachments: n.numOfAttachments,
                    numOfGoreAttachments: n.numOfGoreAttachments,
                    numOfExplicitAttachments: n.numOfExplicitAttachments,
                    numOfSelfHarmAttachments: n.numOfSelfHarmAttachments,
                    numOfEmbeds: n.numOfEmbeds,
                    numOfGoreEmbeds: n.numOfGoreEmbeds,
                    numOfExplicitEmbeds: n.numOfExplicitEmbeds,
                    numOfSelfHarmEmbeds: n.numOfSelfHarmEmbeds,
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
            (0, S.IV)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan,
            });
        }),
        (0, C.S)() &&
            b.default.entries(r).forEach((e) => {
                let [t, n] = e;
                (0, S.QN)({
                    messageId: t,
                    channelId: n.channelId,
                    numOfAttachments: n.numOfAttachments,
                    numOfGoreAttachments: n.numOfGoreAttachments,
                    numOfSelfHarmAttachments: n.numOfSelfHarmAttachments,
                    numOfExplicitAttachments: n.numOfExplicitAttachments,
                    numOfEmbeds: n.numOfEmbeds,
                    numOfGoreEmbeds: n.numOfGoreEmbeds,
                    numOfExplicitEmbeds: n.numOfExplicitEmbeds,
                    numOfSelfHarmEmbeds: n.numOfSelfHarmEmbeds,
                });
            }),
        t.length > 0 && (F(t), !0)
    );
}
function z(e) {
    var t, n, r, i, a, o;
    let { message: s } = e;
    if (
        null == s.channel_id ||
        null == s.id ||
        (null == (t = s.author) ? void 0 : t.id) === p.default.getId() ||
        (null == s.embeds && null == s.attachments && !(0, S.M0)(s)) ||
        ((null == (n = s.embeds) ? void 0 : n.length) === 0 &&
            (null == (r = s.attachments) ? void 0 : r.length) === 0 &&
            !(0, S.M0)(s))
    )
        return !1;
    if (!(0, A.MD)(s)) {
        let e =
            null != (o = null != (a = h.Z.getMessage(s.channel_id, s.id)) ? a : I.Z.getMessage(s.id, s.channel_id))
                ? o
                : null == (i = f.Z.getMessage(s.channel_id, s.id))
                  ? void 0
                  : i.message;
        null == e || (0, A.MD)((0, u.wi)(e, s)) || k(e, S.Pq.UPDATE);
    }
    let l = g.Z.getChannelId(),
        c = _.ZP.getCurrentSidebarChannelId(l);
    if (s.channel_id !== l && s.channel_id !== c) return !1;
    let d = h.Z.getMessage(s.channel_id, s.id);
    return null != d && W([d], { isMessageUpdate: !0 });
}
function q(e) {
    var t, n;
    let { channelId: r, message: i, optimistic: a, isPushNotification: o } = e;
    if (a || o || null == r || (null == (t = i.author) ? void 0 : t.id) === p.default.getId()) return !1;
    let s = g.Z.getChannelId(),
        l = _.ZP.getCurrentSidebarChannelId(s),
        c = r === s || r === l,
        u = m.Z.getChannel(r);
    if (!c) return !1;
    let d = null == (n = null == u ? void 0 : u.isPrivate()) || n,
        f = (null == u ? void 0 : u.memberCount) == null || (null == u ? void 0 : u.memberCount) > 100;
    return W([i], { jitter: d && f });
}
function Q(e) {
    let { channelId: t, messages: n } = e;
    if (null == t || null == n) return !1;
    let r = g.Z.getChannelId(),
        i = _.ZP.getCurrentSidebarChannelId(r);
    return (t === r || t === i) && W(n);
}
function X(e) {
    let { data: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            let { messages: t } = e,
                r = i()(t);
            n = W(o()(r, (e, t) => e.id === t.id && e.channel_id === t.channel_id)) || n;
        }),
        n
    );
}
function J(e) {
    let { pins: t } = e;
    return W(
        t.map((e) => {
            let { message: t } = e;
            return t;
        }),
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
    return (0, N.U)(), null != t && t === g.Z.getChannelId() && ea(t);
}
function er(e) {
    let { settings: t, local: n } = e;
    if (!n || t.type !== R.yP.PRELOADED_USER_SETTINGS) return !1;
    let r = g.Z.getChannelId();
    return null != r && ea(r);
}
function ei(e) {
    let { channelId: t, chatOpen: n } = e;
    return !!n && ea(t);
}
function ea(e) {
    let t = h.Z.getMessages(e);
    return 0 !== t.length && K(t);
}
class eo extends c.Z {
    constructor(...e) {
        super(...e),
            D(this, "actions", {
                LOAD_MESSAGES_SUCCESS: Q,
                LOAD_FORUM_POSTS: $,
                LOAD_THREADS_SUCCESS: ee,
                LOAD_ARCHIVED_THREADS_SUCCESS: ee,
                SIDEBAR_VIEW_CHANNEL: et,
                MESSAGE_CREATE: q,
                MESSAGE_UPDATE: z,
                LOGOUT: M,
                SEARCH_MESSAGES_SUCCESS: X,
                MOD_VIEW_SEARCH_MESSAGES_SUCCESS: X,
                CHANNEL_SELECT: en,
                LOAD_PINNED_MESSAGES_SUCCESS: J,
                USER_SETTINGS_PROTO_UPDATE: er,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: ei,
            });
    }
}
let es = new eo();
