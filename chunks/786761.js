r.d(n, {
    Pv: function () {
        return U;
    },
    e5: function () {
        return R;
    },
    gx: function () {
        return O;
    },
    lp: function () {
        return k;
    },
    wi: function () {
        return D;
    }
});
var i = r(789020);
var a = r(47120);
var o = r(913527),
    s = r.n(o),
    l = r(830121);
r(712057);
var u = r(292419),
    c = r(330044),
    d = r(378233),
    f = r(360742),
    p = r(23750),
    h = r(598077),
    _ = r(314897),
    m = r(699516),
    g = r(594174),
    E = r(408433),
    v = r(669079);
r(358085);
var y = r(709054),
    b = r(572804);
r(739566);
var I = r(959517),
    T = r(981631);
let S = new h.Z({
    id: '???',
    username: '???'
});
function A(e) {
    var n;
    return null == e.author ? S : null != e.webhook_id ? new h.Z(e.author) : null !== (n = g.default.getUser(e.author.id)) && void 0 !== n ? n : new h.Z(e.author);
}
function C(e) {
    return !1;
}
function N(e) {
    var n;
    return new p.pi({
        ...e,
        timestamp: new Date(e.timestamp),
        editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
        attachments: L(e),
        embeds: w(e),
        components: (0, u.uZ)(null !== (n = e.components) && void 0 !== n ? n : [], { includeEmojiSrc: !1 }),
        codedLinks: e.type === T.uaV.THREAD_CREATED ? [] : (0, l.ZP)(e.content)
    });
}
function R(e) {
    var n, r, i, a, o, s, l;
    let u;
    let { reactions: d, interactionData: h } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        g = N(e),
        E = null !== (a = null === (n = e.mentions) || void 0 === n ? void 0 : n.map((e) => e.id)) && void 0 !== a ? a : [],
        I = null !== (o = e.mention_roles) && void 0 !== o ? o : [],
        S = null !== (s = e.mention_channels) && void 0 !== s ? s : [],
        R = e.message_reference,
        O = A(e),
        D = null,
        L = null == e ? void 0 : e.gift_info,
        w = e.gifting_prompt,
        k = null != e.interaction ? f.Z.createFromServer(e.interaction) : null,
        U = e.type === T.uaV.THREAD_STARTER_MESSAGE ? (null === (i = e.referenced_message) || void 0 === i ? void 0 : null === (r = i.author) || void 0 === r ? void 0 : r.id) : void 0;
    let B = e.content;
    return (e.type === T.uaV.PREMIUM_REFERRAL && ((u = y.default.isProbablyAValidSnowflake(e.content) ? e.content : void 0), (B = '')), C(e))
        ? new p.ZP({
              ...D,
              id: e.id,
              channel_id: e.channel_id,
              type: T.uaV.DEFAULT,
              author: O,
              timestamp: g.timestamp,
              isUnsupported: !0
          })
        : new p.ZP({
              ...e,
              ...D,
              ...g.toJS(),
              author: O,
              webhookId: e.webhook_id,
              blocked: m.Z.isBlockedForMessage(e) || (null != U && m.Z.isBlocked(U)),
              ignored: m.Z.isIgnoredForMessage(e) || (null != U && m.Z.isIgnored(U)),
              mentionEveryone: e.mention_everyone,
              mentions: E,
              mentionRoles: I,
              mentionChannels: S,
              messageReference: R,
              mentioned: (0, b.Sz)({
                  userId: _.default.getId(),
                  channelId: e.channel_id,
                  mentionEveryone: null !== (l = e.mention_everyone) && void 0 !== l && l,
                  mentionUsers: E,
                  mentionRoles: I
              }),
              giftCodes: (0, v.Fp)(e) ? (0, v.Q_)(null == e ? void 0 : e.embeds[0].url) : (0, v.Q_)(e.content),
              content: B,
              referralTrialOfferId: u,
              call: x(e.call, g.timestamp),
              messageSnapshots: M(e),
              reactions: P(null != d ? d : e.reactions, e.poll),
              interaction: k,
              interactionData: null != h ? h : e.interaction_data,
              interactionMetadata: e.interaction_metadata,
              roleSubscriptionData: e.role_subscription_data,
              purchaseNotification: e.purchase_notification,
              poll: null == e.poll ? void 0 : (0, c.Z)(e.poll),
              potions: e.potions,
              giftInfo: null == L ? void 0 : L,
              giftingPrompt: w
          });
}
function O(e, n) {
    return null != n.edited_timestamp
        ? {
              ...n,
              reactions: e.reactions,
              interaction_data: e.interaction_data
          }
        : {
              ...e,
              ...n
          };
}
function D(e, n) {
    if (null != n.edited_timestamp)
        return R(n, {
            reactions: e.reactions,
            interactionData: e.interactionData
        });
    let r = e,
        i = !1;
    if ((null != n.call && (r = r.set('call', x(n.call, e.timestamp))), null != n.attachments && (r = r.set('attachments', L(n))), null != n.content && '' !== n.content && (r = r.set('content', n.content)), null != n.embeds && (r = r.set('embeds', w(n))), null != n.message_snapshots && (r = r.set('messageSnapshots', M(n))), n.pinned !== r.pinned && (r = r.set('pinned', n.pinned)), null != r.webhookId && null != n.author && (r = r.set('author', new h.Z(n.author))), null != n.flags && n.flags !== r.flags && (r = r.set('flags', n.flags)), null != n.components && (r = r.set('components', (0, u.uZ)(n.components, { includeEmojiSrc: !1 }))), null != n.role_subscription_data && (r = r.set('roleSubscriptionData', n.role_subscription_data)), null != n.reactions)) {
        var a;
        r = r.set('reactions', P(null !== (a = e.reactions) && void 0 !== a ? a : n.reactions));
    }
    return (
        null != n.poll && (r = r.set('poll', (0, c.Z)(n.poll))),
        null != n.mentions &&
            ((r = r.set(
                'mentions',
                n.mentions.map((e) => e.id)
            )),
            (i = !0)),
        null != n.mention_everyone && ((r = r.set('mentionEveryone', n.mention_everyone)), (i = !0)),
        null != n.mention_roles && ((r = r.set('mentionRoles', n.mention_roles)), (i = !0)),
        null != n.potions && (r = r.set('potions', n.potions)),
        i &&
            (r = r.set(
                'mentioned',
                (0, b.ZP)({
                    message: r,
                    userId: _.default.getId()
                })
            )),
        r
    );
}
function L(e) {
    return null == e.attachments
        ? []
        : e.attachments.map((e) => ({
              ...e,
              spoiler: e.filename.startsWith(I._j)
          }));
}
function x(e, n) {
    if (null != e) {
        let r = null != e.ended_timestamp ? s()(new Date(e.ended_timestamp)) : null,
            i = null != r ? s().duration(r.diff(n)) : null;
        return {
            participants: e.participants,
            endedTimestamp: r,
            duration: i
        };
    }
    return null;
}
function w(e) {
    if (null == e.embeds) return [];
    let n = e.embeds.map((n) => (0, E.kC)(e.channel_id, e.id, n));
    return (0, E.o3)(n);
}
function P(e, n) {
    var r;
    if (null == e && (null == n ? void 0 : n.results) == null) return [];
    let i =
        null == n
            ? void 0
            : null === (r = n.results) || void 0 === r
              ? void 0
              : r.answer_counts.map((e) => ({
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
        let n = { ...e };
        if ((null == n ? void 0 : n.count_details) != null) {
            var r, i;
            (n.burst_count = null !== (r = n.count_details.burst) && void 0 !== r ? r : 0), (n.count = null !== (i = n.count_details.normal) && void 0 !== i ? i : 0);
        }
        return n.count < 0 && (n.count = 0), n.burst_count < 0 && (n.burst_count = 0), n;
    });
}
function M(e) {
    return null == e.message_snapshots
        ? []
        : e.message_snapshots.map((e) => {
              let { message: n } = e;
              return new p.Hx({ message: N(n) });
          });
}
let k = (e) => 0 === (0, d.cv)(e).length || '' !== e.content;
function U(e) {
    return e.hasFlag(T.iLy.EPHEMERAL) && e.type !== T.uaV.IN_GAME_MESSAGE_NUX;
}
