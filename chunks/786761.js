n.d(t, {
    Pv: () => U,
    e5: () => R,
    gx: () => P,
    lp: () => j,
    wi: () => w
}),
    n(789020),
    n(47120);
var r = n(913527),
    i = n.n(r),
    o = n(830121);
n(712057);
var a = n(292419),
    s = n(330044),
    l = n(378233),
    c = n(360742),
    u = n(23750),
    d = n(598077),
    f = n(314897),
    p = n(699516),
    _ = n(594174),
    h = n(408433),
    m = n(669079);
n(358085);
var g = n(709054),
    E = n(572804);
n(739566);
var v = n(959517),
    b = n(981631);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = new d.Z({
    id: '???',
    username: '???'
});
function N(e) {
    var t;
    return null == e.author ? T : null != e.webhook_id ? new d.Z(e.author) : null !== (t = _.default.getUser(e.author.id)) && void 0 !== t ? t : new d.Z(e.author);
}
function A(e) {
    return !1;
}
function C(e) {
    var t;
    return new u.pi(
        I(O({}, e), {
            timestamp: new Date(e.timestamp),
            editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
            attachments: D(e),
            embeds: L(e),
            components: (0, a.uZ)(null !== (t = e.components) && void 0 !== t ? t : [], { includeEmojiSrc: !1 }),
            codedLinks: e.type === b.uaV.THREAD_CREATED ? [] : (0, o.ZP)(e.content)
        })
    );
}
function R(e) {
    var t, n, r, i, o, a, l;
    let d;
    let { reactions: _, interactionData: h } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        v = C(e),
        y = null !== (i = null === (t = e.mentions) || void 0 === t ? void 0 : t.map((e) => e.id)) && void 0 !== i ? i : [],
        S = null !== (o = e.mention_roles) && void 0 !== o ? o : [],
        T = null !== (a = e.mention_channels) && void 0 !== a ? a : [],
        R = e.message_reference,
        P = N(e),
        w = null,
        D = null == e ? void 0 : e.gift_info,
        L = e.gifting_prompt,
        j = null != e.interaction ? c.Z.createFromServer(e.interaction) : null,
        U = e.type === b.uaV.THREAD_STARTER_MESSAGE ? (null === (r = e.referenced_message) || void 0 === r ? void 0 : null === (n = r.author) || void 0 === n ? void 0 : n.id) : void 0,
        G = e.content;
    return new u.ZP(
        (e.type === b.uaV.PREMIUM_REFERRAL && ((d = g.default.isProbablyAValidSnowflake(e.content) ? e.content : void 0), (G = '')), A(e))
            ? I(O({}, w), {
                  id: e.id,
                  channel_id: e.channel_id,
                  type: b.uaV.DEFAULT,
                  author: P,
                  timestamp: v.timestamp,
                  isUnsupported: !0
              })
            : I(O({}, e, w, v.toJS()), {
                  author: P,
                  webhookId: e.webhook_id,
                  blocked: p.Z.isBlockedForMessage(e) || (null != U && p.Z.isBlocked(U)),
                  ignored: p.Z.isIgnoredForMessage(e) || (null != U && p.Z.isIgnored(U)),
                  mentionEveryone: e.mention_everyone,
                  mentions: y,
                  mentionRoles: S,
                  mentionChannels: T,
                  messageReference: R,
                  mentioned: (0, E.Sz)({
                      userId: f.default.getId(),
                      channelId: e.channel_id,
                      mentionEveryone: null !== (l = e.mention_everyone) && void 0 !== l && l,
                      mentionUsers: y,
                      mentionRoles: S
                  }),
                  giftCodes: (0, m.Fp)(e) ? (0, m.Q_)(null == e ? void 0 : e.embeds[0].url) : (0, m.Q_)(e.content),
                  content: G,
                  referralTrialOfferId: d,
                  call: x(e.call, v.timestamp),
                  messageSnapshots: k(e),
                  reactions: M(null != _ ? _ : e.reactions, e.poll),
                  interaction: j,
                  interactionData: null != h ? h : e.interaction_data,
                  interactionMetadata: e.interaction_metadata,
                  roleSubscriptionData: e.role_subscription_data,
                  purchaseNotification: e.purchase_notification,
                  poll: null == e.poll ? void 0 : (0, s.Z)(e.poll),
                  potions: e.potions,
                  giftInfo: null == D ? void 0 : D,
                  giftingPrompt: L
              })
    );
}
function P(e, t) {
    return null != t.edited_timestamp
        ? I(O({}, t), {
              reactions: e.reactions,
              interaction_data: e.interaction_data
          })
        : O({}, e, t);
}
function w(e, t) {
    if (null != t.edited_timestamp)
        return R(t, {
            reactions: e.reactions,
            interactionData: e.interactionData
        });
    let n = e,
        r = !1;
    if ((null != t.call && (n = n.set('call', x(t.call, e.timestamp))), null != t.attachments && (n = n.set('attachments', D(t))), null != t.content && '' !== t.content && (n = n.set('content', t.content)), null != t.embeds && (n = n.set('embeds', L(t))), null != t.message_snapshots && (n = n.set('messageSnapshots', k(t))), t.pinned !== n.pinned && (n = n.set('pinned', t.pinned)), null != n.webhookId && null != t.author && (n = n.set('author', new d.Z(t.author))), null != t.flags && t.flags !== n.flags && (n = n.set('flags', t.flags)), null != t.components && (n = n.set('components', (0, a.uZ)(t.components, { includeEmojiSrc: !1 }))), null != t.role_subscription_data && (n = n.set('roleSubscriptionData', t.role_subscription_data)), null != t.reactions)) {
        var i;
        n = n.set('reactions', M(null !== (i = e.reactions) && void 0 !== i ? i : t.reactions));
    }
    return (
        null != t.poll && (n = n.set('poll', (0, s.Z)(t.poll))),
        null != t.mentions &&
            ((n = n.set(
                'mentions',
                t.mentions.map((e) => e.id)
            )),
            (r = !0)),
        null != t.mention_everyone && ((n = n.set('mentionEveryone', t.mention_everyone)), (r = !0)),
        null != t.mention_roles && ((n = n.set('mentionRoles', t.mention_roles)), (r = !0)),
        null != t.potions && (n = n.set('potions', t.potions)),
        r &&
            (n = n.set(
                'mentioned',
                (0, E.ZP)({
                    message: n,
                    userId: f.default.getId()
                })
            )),
        n
    );
}
function D(e) {
    return null == e.attachments ? [] : e.attachments.map((e) => I(O({}, e), { spoiler: e.filename.startsWith(v._j) }));
}
function x(e, t) {
    if (null != e) {
        let n = null != e.ended_timestamp ? i()(new Date(e.ended_timestamp)) : null,
            r = null != n ? i().duration(n.diff(t)) : null;
        return {
            participants: e.participants,
            endedTimestamp: n,
            duration: r
        };
    }
    return null;
}
function L(e) {
    if (null == e.embeds) return [];
    let t = e.embeds.map((t) => (0, h.kC)(e.channel_id, e.id, t));
    return (0, h.o3)(t);
}
function M(e, t) {
    var n;
    if (null == e && (null == t ? void 0 : t.results) == null) return [];
    let r =
        null == t
            ? void 0
            : null === (n = t.results) || void 0 === n
              ? void 0
              : n.answer_counts.map((e) => ({
                    count_details: { vote: e.count },
                    me_vote: e.me_voted,
                    emoji: {
                        id: e.id.toString(),
                        name: '',
                        animated: !1
                    },
                    me: !1,
                    me_burst: !1,
                    count: e.count,
                    burst_count: 0
                }));
    return [...(null != e ? e : []), ...(null != r ? r : [])].map((e) => {
        let t = O({}, e);
        if ((null == t ? void 0 : t.count_details) != null) {
            var n, r;
            (t.burst_count = null !== (n = t.count_details.burst) && void 0 !== n ? n : 0), (t.count = null !== (r = t.count_details.normal) && void 0 !== r ? r : 0);
        }
        return t.count < 0 && (t.count = 0), t.burst_count < 0 && (t.burst_count = 0), t;
    });
}
function k(e) {
    return null == e.message_snapshots
        ? []
        : e.message_snapshots.map((e) => {
              let { message: t } = e;
              return new u.Hx({ message: C(t) });
          });
}
let j = (e) => 0 === (0, l.cv)(e).length || '' !== e.content;
function U(e) {
    return e.hasFlag(b.iLy.EPHEMERAL) && e.type !== b.uaV.IN_GAME_MESSAGE_NUX;
}
