r.d(n, {
    b2: function () {
        return w;
    }
});
var i = r(47120);
var a = r(724458);
var s = r(952639),
    o = r.n(s),
    l = r(605906),
    u = r.n(l),
    c = r(286379),
    d = r(570140),
    f = r(147913),
    _ = r(786761),
    h = r(797614),
    p = r(869765),
    m = r(314897),
    g = r(433355),
    E = r(592125),
    v = r(375954),
    I = r(944486),
    T = r(914010),
    b = r(709054),
    y = r(93735),
    S = r(522664),
    A = r(651530),
    N = r(247206),
    C = r(735020),
    R = r(774863),
    O = r(799525),
    D = r(981631),
    L = r(526761);
function x(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let w = 3000,
    P = 800,
    M = {};
function k(e) {
    return ''.concat(e.channel_id, ':').concat(e.id);
}
function U() {
    Object.values(M).forEach((e) => {
        let { timeout: n } = e;
        clearTimeout(n);
    }),
        (M = {});
}
function B(e, n) {
    if (null == e.id || null == e.channel_id) return !1;
    let r = k(e);
    if (null != M[r]) {
        let { timeout: i } = M[r];
        return clearTimeout(i), G(e, n), delete M[r], !0;
    }
    return !1;
}
function G(e, n) {
    let { setAt: r } = M[k(e)];
    if (n === N.Pq.UPDATE) {
        var i, a;
        let n = null !== (i = e.attachments) && void 0 !== i ? i : [],
            r = null !== (a = e.embeds) && void 0 !== a ? a : [],
            s = n.filter((e) =>
                (0, N.KP)(
                    {
                        type: N.lJ.Attachment,
                        media: e
                    },
                    !0
                )
            ),
            o = r.filter((e) =>
                (0, N.KP)(
                    {
                        type: N.lJ.Embed,
                        media: e
                    },
                    !0
                )
            );
        (0, N.xx)({
            messageId: e.id,
            channelId: e.channel_id,
            numOfAttachments: n.length,
            numOfEmbeds: r.length,
            numOfExplicitAttachments: s.length,
            numOfExplicitEmbeds: o.length
        });
    }
    (0, N.OP)(r, n);
}
function Z(e) {
    if (B(e, N.Pq.TIMEOUT)) {
        let n = v.Z.getMessage(e.channel_id, e.id),
            { attachmentIds: r, embedIds: i } = (0, y.ZW)(n);
        (0, N.Hc)({
            channelId: e.channel_id,
            messageId: e.id,
            attachmentIds: r,
            embedIds: i
        }),
            d.Z.dispatch({
                type: 'MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT',
                messageId: e.id,
                channelId: e.channel_id
            });
    }
}
let F = (e, n) => {
    if (0 !== e.length) {
        if (n) {
            (0, S.gx)(e);
            return;
        }
        (0, S.qO)(
            e[0].channel_id,
            e.map((e) => e.id)
        );
    }
};
function V(e, n) {
    let { forceBatchScan: r = !1, jitter: i = !1 } = null != n ? n : {},
        a = (null == n ? void 0 : n.isMessageUpdate) ? e.filter(y.N7) : e;
    a.forEach((e) => {
        let n = k(e);
        null == M[n] &&
            (h.Z.increment({ name: c.V.EXPLICIT_MEDIA_SCAN_CLIENT_TIMEOUT_CREATE }),
            (M[n] = {
                setAt: Date.now(),
                timeout: setTimeout(() => {
                    Z(e);
                }, w)
            }));
    });
    let s = r || new Set(a.map((e) => e.channel_id)).size > 1;
    i
        ? setTimeout(() => {
              F(
                  a.filter((e) => null != M[k(e)]),
                  s
              );
          }, Math.random() * P)
        : F(a, s);
}
function j(e) {
    let n = R.Z.validContentScanVersion;
    return e.reduce((e, r) => {
        var i, a, s, o, l, u, c, d;
        null == e[r.channel_id] &&
            (e[r.channel_id] = {
                numOfAttachments: 0,
                numOfAttachmentsPendingScan: 0,
                numOfEmbeds: 0,
                numOfEmbedsPendingScan: 0
            });
        let f = e[r.channel_id];
        return (
            (f.numOfAttachments += null !== (l = null === (i = r.attachments) || void 0 === i ? void 0 : i.length) && void 0 !== l ? l : 0),
            (f.numOfEmbeds += null !== (u = null === (a = r.embeds) || void 0 === a ? void 0 : a.length) && void 0 !== u ? u : 0),
            (f.numOfAttachmentsPendingScan += null !== (c = null === (s = r.attachments) || void 0 === s ? void 0 : s.filter((e) => (0, y.CN)(e, n)).length) && void 0 !== c ? c : 0),
            (f.numOfEmbedsPendingScan += null !== (d = null == r ? void 0 : null === (o = r.embeds) || void 0 === o ? void 0 : o.filter((e) => (0, y.fj)(e, n)).length) && void 0 !== d ? d : 0),
            {
                ...e,
                [r.channel_id]: f
            }
        );
    }, {});
}
function H(e) {
    function n(e) {
        return null != e;
    }
    let r = e.filter((e) => (0, y.OR)(e) && (0, N.HH)(e)),
        i = e
            .map((e) => {
                if (null != e && 'referenced_message' in e && null != e.referenced_message && (0, y.OR)(e.referenced_message) && (0, N.HH)(e.referenced_message)) return e.referenced_message;
            })
            .filter(n);
    i.length > 0 && (r = [...r, ...i]);
    let a = u()(r, (e, n) => e.id === n.id && e.channel_id === n.channel_id);
    return {
        messagesPendingScan: a.filter((e) => (0, y.xG)(e)),
        attributesByChannelId: j(a)
    };
}
function Y(e) {
    function n(e) {
        return null != e;
    }
    let r = e.filter((e) => (0, y.OR)(e) && (0, N.HH)(e)),
        i = e
            .map((e) => {
                if (D.OBS.has(e.type) && null != e.messageReference) {
                    let n = p.Z.getMessageByReference(e.messageReference);
                    if (n.state === p.Y.LOADED && null != n.message && (0, y.OR)(n.message) && (0, N.HH)(n.message)) return n.message;
                }
            })
            .filter(n);
    i.length > 0 && (r = [...r, ...i]);
    let a = u()(r, (e, n) => e.id === n.id && e.channel_id === n.channel_id);
    return {
        messagesPendingScan: a.filter((e) => (0, y.xG)(e)),
        attributesByChannelId: j(a)
    };
}
function W(e, n) {
    let { messagesPendingScan: r, attributesByChannelId: i } = H(e);
    return (
        b.default.entries(i).forEach((e) => {
            let [n, r] = e;
            (0, N.IV)({
                channelId: n,
                numOfAttachments: r.numOfAttachments,
                numOfAttachmentsPendingScan: r.numOfAttachmentsPendingScan,
                numOfEmbeds: r.numOfEmbeds,
                numOfEmbedsPendingScan: r.numOfEmbedsPendingScan
            });
        }),
        !!(r.length > 0) && (V(r, n), !0)
    );
}
function K(e) {
    let { messagesPendingScan: n, attributesByChannelId: r } = Y(e);
    return (
        b.default.entries(r).forEach((e) => {
            let [n, r] = e;
            (0, N.IV)({
                channelId: n,
                numOfAttachments: r.numOfAttachments,
                numOfAttachmentsPendingScan: r.numOfAttachmentsPendingScan,
                numOfEmbeds: r.numOfEmbeds,
                numOfEmbedsPendingScan: r.numOfEmbedsPendingScan
            });
        }),
        !!(n.length > 0) && (V(n), !0)
    );
}
function z(e) {
    var n, r, i, a, s, o;
    let { message: l } = e;
    if (!(0, A.Kh)() || null == l.channel_id || null == l.id || (null === (n = l.author) || void 0 === n ? void 0 : n.id) === m.default.getId() || (null == l.embeds && null == l.attachments) || ((null === (r = l.embeds) || void 0 === r ? void 0 : r.length) === 0 && (null === (i = l.attachments) || void 0 === i ? void 0 : i.length) === 0)) return !1;
    if (!(0, y.N7)(l)) {
        let e = null !== (o = null !== (s = v.Z.getMessage(l.channel_id, l.id)) && void 0 !== s ? s : C.Z.getMessage(l.id, l.channel_id)) && void 0 !== o ? o : null === (a = p.Z.getMessage(l.channel_id, l.id)) || void 0 === a ? void 0 : a.message;
        null != e && !(0, y.N7)((0, _.wi)(e, l)) && B(e, N.Pq.UPDATE);
    }
    let u = I.Z.getChannelId(),
        c = g.ZP.getCurrentSidebarChannelId(u);
    if (!(l.channel_id === u || l.channel_id === c)) return !1;
    let d = v.Z.getMessage(l.channel_id, l.id);
    return null != d && W([d], { isMessageUpdate: !0 });
}
function q(e) {
    var n, r;
    let { channelId: i, message: a, optimistic: s, isPushNotification: o } = e;
    if (!(0, A.Kh)() || s || o || null == i || (null === (n = a.author) || void 0 === n ? void 0 : n.id) === m.default.getId()) return !1;
    let l = I.Z.getChannelId(),
        u = g.ZP.getCurrentSidebarChannelId(l),
        c = i === l || i === u,
        d = E.Z.getChannel(i);
    if (!c) return !1;
    let f = null === (r = null == d ? void 0 : d.isPrivate()) || void 0 === r || r,
        _ = (null == d ? void 0 : d.memberCount) == null || (null == d ? void 0 : d.memberCount) > 100;
    return W([a], { jitter: f && _ });
}
function Q(e) {
    let { channelId: n, messages: r } = e;
    if (!(0, A.Kh)() || null == n || null == r) return !1;
    let i = I.Z.getChannelId(),
        a = g.ZP.getCurrentSidebarChannelId(i);
    return (n === i || n === a) && W(r);
}
function X(e) {
    let { messages: n } = e;
    if (!(0, A.Kh)() || null == n) return !1;
    let r = o()(n);
    return W(u()(r, (e, n) => e.id === n.id && e.channel_id === n.channel_id));
}
function J(e) {
    let { guildId: n, threads: r } = e;
    return !!(null != r && (0, A.Kh)()) && T.Z.getGuildId() === n && W(b.default.keys(r).map((e) => r[e].first_message));
}
function $(e) {
    let { guildId: n, firstMessages: r } = e;
    return !!(null != r && (0, A.Kh)()) && T.Z.getGuildId() === n && W(r, { forceBatchScan: !0 });
}
function ee(e) {
    (0, O.U)();
    let { channelId: n } = e;
    return !!(null != n && (0, A.Kh)()) && n === I.Z.getChannelId() && er(n);
}
function et(e) {
    let { settings: n, local: r } = e;
    if (!(0, A.Kh)() || !r || n.type !== L.yP.PRELOADED_USER_SETTINGS) return !1;
    let i = I.Z.getChannelId();
    return null != i && er(i);
}
function en(e) {
    let { channelId: n, chatOpen: r } = e;
    return !!(0, A.Kh)() && !!r && er(n);
}
function er(e) {
    let n = v.Z.getMessages(e);
    return 0 !== n.length && K(n);
}
class ei extends f.Z {
    constructor(...e) {
        super(...e),
            x(this, 'actions', {
                LOAD_MESSAGES_SUCCESS: Q,
                LOAD_FORUM_POSTS: J,
                LOAD_THREADS_SUCCESS: $,
                LOAD_ARCHIVED_THREADS_SUCCESS: $,
                MESSAGE_CREATE: q,
                MESSAGE_UPDATE: z,
                LOGOUT: U,
                SEARCH_FINISH: X,
                MOD_VIEW_SEARCH_FINISH: X,
                CHANNEL_SELECT: ee,
                LOAD_PINNED_MESSAGES_SUCCESS: X,
                USER_SETTINGS_PROTO_UPDATE: et,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: en
            });
    }
}
n.ZP = new ei();
