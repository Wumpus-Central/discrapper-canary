n.d(t, {
    ZP: () => ei,
    b2: () => D
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
    p = n(314897),
    _ = n(433355),
    h = n(592125),
    m = n(375954),
    g = n(944486),
    E = n(914010),
    v = n(709054),
    b = n(93735),
    y = n(522664),
    O = n(247206),
    S = n(735020),
    I = n(774863),
    T = n(799525),
    N = n(981631),
    A = n(526761);
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
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                C(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = 3000,
    x = 800,
    L = {};
function M(e) {
    return ''.concat(e.channel_id, ':').concat(e.id);
}
function k() {
    Object.values(L).forEach((e) => {
        let { timeout: t } = e;
        clearTimeout(t);
    }),
        (L = {});
}
function j(e, t) {
    if (null == e.id || null == e.channel_id) return !1;
    let n = M(e);
    if (null != L[n]) {
        let { timeout: r } = L[n];
        return clearTimeout(r), U(e, t), delete L[n], !0;
    }
    return !1;
}
function U(e, t) {
    let { setAt: n } = L[M(e)];
    if (t === O.Pq.UPDATE) {
        var r, i;
        let t = null !== (r = e.attachments) && void 0 !== r ? r : [],
            n = null !== (i = e.embeds) && void 0 !== i ? i : [],
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
function G(e) {
    if (j(e, O.Pq.TIMEOUT)) {
        let t = m.Z.getMessage(e.channel_id, e.id),
            { attachmentIds: n, embedIds: r } = (0, b.ZW)(t);
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
let B = (e, t) => {
    if (0 !== e.length) {
        if (t) {
            (0, y.gx)(e);
            return;
        }
        (0, y.qO)(
            e[0].channel_id,
            e.map((e) => e.id)
        );
    }
};
function Z(e, t) {
    let { forceBatchScan: n = !1, jitter: r = !1 } = null != t ? t : {},
        i = (null == t ? void 0 : t.isMessageUpdate) ? e.filter(b.N7) : e;
    i.forEach((e) => {
        let t = M(e);
        null == L[t] &&
            (d.Z.increment({ name: s.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE }),
            (L[t] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    G(e);
                }, D)
            }));
    });
    let o = n || new Set(i.map((e) => e.channel_id)).size > 1;
    r
        ? setTimeout(() => {
              B(
                  i.filter((e) => null != L[M(e)]),
                  o
              );
          }, Math.random() * x)
        : B(i, o);
}
function F(e) {
    let t = I.Z.validContentScanVersion;
    return e.reduce((e, n) => {
        var r, i, o, a, s, l, c, u;
        null == e[n.channel_id] &&
            (e[n.channel_id] = {
                numOfAttachments: 0,
                numOfAttachmentsPendingScan: 0,
                numOfEmbeds: 0,
                numOfEmbedsPendingScan: 0
            });
        let d = e[n.channel_id];
        return (d.numOfAttachments += null !== (s = null === (r = n.attachments) || void 0 === r ? void 0 : r.length) && void 0 !== s ? s : 0), (d.numOfEmbeds += null !== (l = null === (i = n.embeds) || void 0 === i ? void 0 : i.length) && void 0 !== l ? l : 0), (d.numOfAttachmentsPendingScan += null !== (c = null === (o = n.attachments) || void 0 === o ? void 0 : o.filter((e) => (0, b.CN)(e, t)).length) && void 0 !== c ? c : 0), (d.numOfEmbedsPendingScan += null !== (u = null == n ? void 0 : null === (a = n.embeds) || void 0 === a ? void 0 : a.filter((e) => (0, b.fj)(e, t)).length) && void 0 !== u ? u : 0), w(R({}, e), { [n.channel_id]: d });
    }, {});
}
function V(e) {
    function t(e) {
        return null != e;
    }
    let n = e.filter((e) => (0, b.OR)(e) && (0, O.HH)(e)),
        r = e
            .map((e) => {
                if (null != e && 'referenced_message' in e && null != e.referenced_message && (0, b.OR)(e.referenced_message) && (0, O.HH)(e.referenced_message)) return e.referenced_message;
            })
            .filter(t);
    r.length > 0 && (n = [...n, ...r]);
    let i = a()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
    return {
        messagesPendingScan: i.filter((e) => (0, b.xG)(e)),
        attributesByChannelId: F(i)
    };
}
function H(e) {
    function t(e) {
        return null != e;
    }
    let n = e.filter((e) => (0, b.OR)(e) && (0, O.HH)(e)),
        r = e
            .map((e) => {
                if (N.OBS.has(e.type) && null != e.messageReference) {
                    let t = f.Z.getMessageByReference(e.messageReference);
                    if (t.state === f.Y.LOADED && null != t.message && (0, b.OR)(t.message) && (0, O.HH)(t.message)) return t.message;
                }
            })
            .filter(t);
    r.length > 0 && (n = [...n, ...r]);
    let i = a()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
    return {
        messagesPendingScan: i.filter((e) => (0, b.xG)(e)),
        attributesByChannelId: F(i)
    };
}
function W(e, t) {
    let { messagesPendingScan: n, attributesByChannelId: r } = V(e);
    return (
        v.default.entries(r).forEach((e) => {
            let [t, n] = e;
            (0, O.IV)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
            });
        }),
        n.length > 0 && (Z(n, t), !0)
    );
}
function Y(e) {
    let { messagesPendingScan: t, attributesByChannelId: n } = H(e);
    return (
        v.default.entries(n).forEach((e) => {
            let [t, n] = e;
            (0, O.IV)({
                channelId: t,
                numOfAttachments: n.numOfAttachments,
                numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                numOfEmbeds: n.numOfEmbeds,
                numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
            });
        }),
        t.length > 0 && (Z(t), !0)
    );
}
function K(e) {
    var t, n, r, i, o, a;
    let { message: s } = e;
    if (null == s.channel_id || null == s.id || (null === (t = s.author) || void 0 === t ? void 0 : t.id) === p.default.getId() || (null == s.embeds && null == s.attachments) || ((null === (n = s.embeds) || void 0 === n ? void 0 : n.length) === 0 && (null === (r = s.attachments) || void 0 === r ? void 0 : r.length) === 0)) return !1;
    if (!(0, b.N7)(s)) {
        let e = null !== (a = null !== (o = m.Z.getMessage(s.channel_id, s.id)) && void 0 !== o ? o : S.Z.getMessage(s.id, s.channel_id)) && void 0 !== a ? a : null === (i = f.Z.getMessage(s.channel_id, s.id)) || void 0 === i ? void 0 : i.message;
        null == e || (0, b.N7)((0, u.wi)(e, s)) || j(e, O.Pq.UPDATE);
    }
    let l = g.Z.getChannelId(),
        c = _.ZP.getCurrentSidebarChannelId(l);
    if (s.channel_id !== l && s.channel_id !== c) return !1;
    let d = m.Z.getMessage(s.channel_id, s.id);
    return null != d && W([d], { isMessageUpdate: !0 });
}
function z(e) {
    var t, n;
    let { channelId: r, message: i, optimistic: o, isPushNotification: a } = e;
    if (o || a || null == r || (null === (t = i.author) || void 0 === t ? void 0 : t.id) === p.default.getId()) return !1;
    let s = g.Z.getChannelId(),
        l = _.ZP.getCurrentSidebarChannelId(s),
        c = r === s || r === l,
        u = h.Z.getChannel(r);
    if (!c) return !1;
    let d = null === (n = null == u ? void 0 : u.isPrivate()) || void 0 === n || n,
        f = (null == u ? void 0 : u.memberCount) == null || (null == u ? void 0 : u.memberCount) > 100;
    return W([i], { jitter: d && f });
}
function q(e) {
    let { channelId: t, messages: n } = e;
    if (null == t || null == n) return !1;
    let r = g.Z.getChannelId(),
        i = _.ZP.getCurrentSidebarChannelId(r);
    return (t === r || t === i) && W(n);
}
function Q(e) {
    let { messages: t } = e;
    if (null == t) return !1;
    let n = i()(t);
    return W(a()(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id));
}
function X(e) {
    let { guildId: t, threads: n } = e;
    return null != n && E.Z.getGuildId() === t && W(v.default.keys(n).map((e) => n[e].first_message));
}
function J(e) {
    let { guildId: t, firstMessages: n } = e;
    return null != n && E.Z.getGuildId() === t && W(n, { forceBatchScan: !0 });
}
function $(e) {
    (0, T.U)();
    let { channelId: t } = e;
    return null != t && t === g.Z.getChannelId() && en(t);
}
function ee(e) {
    let { settings: t, local: n } = e;
    if (!n || t.type !== A.yP.PRELOADED_USER_SETTINGS) return !1;
    let r = g.Z.getChannelId();
    return null != r && en(r);
}
function et(e) {
    let { channelId: t, chatOpen: n } = e;
    return !!n && en(t);
}
function en(e) {
    let t = m.Z.getMessages(e);
    return 0 !== t.length && Y(t);
}
class er extends c.Z {
    constructor(...e) {
        super(...e),
            C(this, 'actions', {
                LOAD_MESSAGES_SUCCESS: q,
                LOAD_FORUM_POSTS: X,
                LOAD_THREADS_SUCCESS: J,
                LOAD_ARCHIVED_THREADS_SUCCESS: J,
                MESSAGE_CREATE: z,
                MESSAGE_UPDATE: K,
                LOGOUT: k,
                SEARCH_FINISH: Q,
                MOD_VIEW_SEARCH_FINISH: Q,
                CHANNEL_SELECT: $,
                LOAD_PINNED_MESSAGES_SUCCESS: Q,
                USER_SETTINGS_PROTO_UPDATE: ee,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: et
            });
    }
}
let ei = new er();
