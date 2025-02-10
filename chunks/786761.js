n.d(t, {
    Pv: () => P,
    e5: () => A,
    gx: () => N,
    lp: () => w,
    wi: () => C
}),
    n(789020),
    n(47120);
var i = n(913527),
    r = n.n(i),
    a = n(830121);
n(712057);
var s = n(292419),
    o = n(330044),
    l = n(378233),
    u = n(360742),
    c = n(23750),
    d = n(598077),
    f = n(314897),
    _ = n(699516),
    p = n(594174),
    h = n(408433),
    m = n(669079);
n(358085);
var g = n(709054),
    E = n(572804);
n(739566);
var v = n(959517),
    y = n(981631);
let I = new d.Z({
    id: '???',
    username: '???'
});
function T(e) {
    var t;
    return null == e.author ? I : null != e.webhook_id ? new d.Z(e.author) : null !== (t = p.default.getUser(e.author.id)) && void 0 !== t ? t : new d.Z(e.author);
}
function b(e) {
    return !1;
}
function S(e) {
    var t;
    return new c.pi({
        ...e,
        timestamp: new Date(e.timestamp),
        editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
        attachments: R(e),
        embeds: D(e),
        components: (0, s.uZ)(null !== (t = e.components) && void 0 !== t ? t : [], { includeEmojiSrc: !1 }),
        codedLinks: e.type === y.uaV.THREAD_CREATED ? [] : (0, a.ZP)(e.content)
    });
}
function A(e) {
    var t, n, i, r, a, s, l;
    let d;
    let { reactions: p, interactionData: h } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        v = S(e),
        I = null !== (r = null === (t = e.mentions) || void 0 === t ? void 0 : t.map((e) => e.id)) && void 0 !== r ? r : [],
        A = null !== (a = e.mention_roles) && void 0 !== a ? a : [],
        N = null !== (s = e.mention_channels) && void 0 !== s ? s : [],
        C = e.message_reference,
        R = T(e),
        D = null,
        w = null == e ? void 0 : e.gift_info,
        P = e.gifting_prompt,
        M = null != e.interaction ? u.Z.createFromServer(e.interaction) : null,
        k = e.type === y.uaV.THREAD_STARTER_MESSAGE ? (null === (i = e.referenced_message) || void 0 === i ? void 0 : null === (n = i.author) || void 0 === n ? void 0 : n.id) : void 0,
        U = e.content;
    return new c.ZP(
        (e.type === y.uaV.PREMIUM_REFERRAL && ((d = g.default.isProbablyAValidSnowflake(e.content) ? e.content : void 0), (U = '')), b(e))
            ? {
                  ...D,
                  id: e.id,
                  channel_id: e.channel_id,
                  type: y.uaV.DEFAULT,
                  author: R,
                  timestamp: v.timestamp,
                  isUnsupported: !0
              }
            : {
                  ...e,
                  ...D,
                  ...v.toJS(),
                  author: R,
                  webhookId: e.webhook_id,
                  blocked: _.Z.isBlockedForMessage(e) || (null != k && _.Z.isBlocked(k)),
                  ignored: _.Z.isIgnoredForMessage(e) || (null != k && _.Z.isIgnored(k)),
                  mentionEveryone: e.mention_everyone,
                  mentions: I,
                  mentionRoles: A,
                  mentionChannels: N,
                  messageReference: C,
                  mentioned: (0, E.Sz)({
                      userId: f.default.getId(),
                      channelId: e.channel_id,
                      mentionEveryone: null !== (l = e.mention_everyone) && void 0 !== l && l,
                      mentionUsers: I,
                      mentionRoles: A
                  }),
                  giftCodes: (0, m.Fp)(e) ? (0, m.Q_)(null == e ? void 0 : e.embeds[0].url) : (0, m.Q_)(e.content),
                  content: U,
                  referralTrialOfferId: d,
                  call: O(e.call, v.timestamp),
                  messageSnapshots: x(e),
                  reactions: L(null != p ? p : e.reactions, e.poll),
                  interaction: M,
                  interactionData: null != h ? h : e.interaction_data,
                  interactionMetadata: e.interaction_metadata,
                  roleSubscriptionData: e.role_subscription_data,
                  purchaseNotification: e.purchase_notification,
                  poll: null == e.poll ? void 0 : (0, o.Z)(e.poll),
                  potions: e.potions,
                  giftInfo: null == w ? void 0 : w,
                  giftingPrompt: P
              }
    );
}
function N(e, t) {
    return null != t.edited_timestamp
        ? {
              ...t,
              reactions: e.reactions,
              interaction_data: e.interaction_data
          }
        : {
              ...e,
              ...t
          };
}
function C(e, t) {
    if (null != t.edited_timestamp)
        return A(t, {
            reactions: e.reactions,
            interactionData: e.interactionData
        });
    let n = e,
        i = !1;
    if ((null != t.call && (n = n.set('call', O(t.call, e.timestamp))), null != t.attachments && (n = n.set('attachments', R(t))), null != t.content && '' !== t.content && (n = n.set('content', t.content)), null != t.embeds && (n = n.set('embeds', D(t))), null != t.message_snapshots && (n = n.set('messageSnapshots', x(t))), t.pinned !== n.pinned && (n = n.set('pinned', t.pinned)), null != n.webhookId && null != t.author && (n = n.set('author', new d.Z(t.author))), null != t.flags && t.flags !== n.flags && (n = n.set('flags', t.flags)), null != t.components && (n = n.set('components', (0, s.uZ)(t.components, { includeEmojiSrc: !1 }))), null != t.role_subscription_data && (n = n.set('roleSubscriptionData', t.role_subscription_data)), null != t.reactions)) {
        var r;
        n = n.set('reactions', L(null !== (r = e.reactions) && void 0 !== r ? r : t.reactions));
    }
    return (
        null != t.poll && (n = n.set('poll', (0, o.Z)(t.poll))),
        null != t.mentions &&
            ((n = n.set(
                'mentions',
                t.mentions.map((e) => e.id)
            )),
            (i = !0)),
        null != t.mention_everyone && ((n = n.set('mentionEveryone', t.mention_everyone)), (i = !0)),
        null != t.mention_roles && ((n = n.set('mentionRoles', t.mention_roles)), (i = !0)),
        null != t.potions && (n = n.set('potions', t.potions)),
        i &&
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
function R(e) {
    return null == e.attachments
        ? []
        : e.attachments.map((e) => ({
              ...e,
              spoiler: e.filename.startsWith(v._j)
          }));
}
function O(e, t) {
    if (null != e) {
        let n = null != e.ended_timestamp ? r()(new Date(e.ended_timestamp)) : null,
            i = null != n ? r().duration(n.diff(t)) : null;
        return {
            participants: e.participants,
            endedTimestamp: n,
            duration: i
        };
    }
    return null;
}
function D(e) {
    if (null == e.embeds) return [];
    let t = e.embeds.map((t) => (0, h.kC)(e.channel_id, e.id, t));
    return (0, h.o3)(t);
}
function L(e, t) {
    var n;
    if (null == e && (null == t ? void 0 : t.results) == null) return [];
    let i =
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
    return [...(null != e ? e : []), ...(null != i ? i : [])].map((e) => {
        let t = { ...e };
        if ((null == t ? void 0 : t.count_details) != null) {
            var n, i;
            (t.burst_count = null !== (n = t.count_details.burst) && void 0 !== n ? n : 0), (t.count = null !== (i = t.count_details.normal) && void 0 !== i ? i : 0);
        }
        return t.count < 0 && (t.count = 0), t.burst_count < 0 && (t.burst_count = 0), t;
    });
}
function x(e) {
    return null == e.message_snapshots
        ? []
        : e.message_snapshots.map((e) => {
              let { message: t } = e;
              return new c.Hx({ message: S(t) });
          });
}
let w = (e) => 0 === (0, l.cv)(e).length || '' !== e.content;
function P(e) {
    return e.hasFlag(y.iLy.EPHEMERAL) && e.type !== y.uaV.IN_GAME_MESSAGE_NUX;
}
