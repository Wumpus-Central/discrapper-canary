n.d(t, {
    Pv: () => G,
    e5: () => P,
    gx: () => w,
    lp: () => U,
    wi: () => D
}),
    n(789020),
    n(47120);
var r = n(913527),
    i = n.n(r),
    o = n(920412),
    a = n(830121);
n(712057);
var s = n(292419),
    l = n(330044),
    c = n(378233),
    u = n(360742),
    d = n(23750),
    f = n(598077),
    _ = n(314897),
    p = n(699516),
    h = n(594174),
    m = n(408433),
    g = n(669079);
n(358085);
var E = n(709054),
    b = n(572804);
n(739566);
var y = n(959517),
    v = n(981631);
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
function I(e) {
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
                O(e, t, n[t]);
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
function T(e, t) {
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
let N = new f.Z({
    id: '???',
    username: '???'
});
function A(e) {
    var t;
    return null == e.author ? N : null != e.webhook_id ? new f.Z(e.author) : null != (t = h.default.getUser(e.author.id)) ? t : new f.Z(e.author);
}
function C(e) {
    return !1;
}
function R(e) {
    var t;
    return new d.pi(
        T(I({}, e), {
            timestamp: new Date(e.timestamp),
            editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
            attachments: L(e),
            embeds: M(e),
            components: (0, s.uZ)(null != (t = e.components) ? t : [], { includeEmojiSrc: !1 }),
            codedLinks: e.type === v.uaV.THREAD_CREATED ? [] : (0, a.ZP)(e.content)
        })
    );
}
function P(e) {
    var t, n, r, i, a, s, c;
    let f,
        h,
        { reactions: m, interactionData: y } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        O = R(e),
        S = null != (i = null == (t = e.mentions) ? void 0 : t.map((e) => e.id)) ? i : [],
        N = null != (a = e.mention_roles) ? a : [],
        P = null != (s = e.mention_channels) ? s : [],
        w = e.message_reference,
        D = A(e),
        L = null,
        M = null == e ? void 0 : e.gift_info,
        U = e.gifting_prompt,
        G = null != e.interaction ? u.Z.createFromServer(e.interaction) : null,
        B = e.type === v.uaV.THREAD_STARTER_MESSAGE ? (null == (r = e.referenced_message) || null == (n = r.author) ? void 0 : n.id) : void 0,
        F = e.content;
    return new d.ZP(
        (e.type === v.uaV.PREMIUM_REFERRAL ? ((f = E.default.isProbablyAValidSnowflake(e.content) ? e.content : void 0), (F = '')) : e.type === v.uaV.CHAT_WALLPAPER_SET && ((h = (0, o.Z)(e.content)), (F = '')), C(e))
            ? T(I({}, L), {
                  id: e.id,
                  channel_id: e.channel_id,
                  type: v.uaV.DEFAULT,
                  author: D,
                  timestamp: O.timestamp,
                  isUnsupported: !0
              })
            : T(I({}, e, L, O.toJS()), {
                  author: D,
                  webhookId: e.webhook_id,
                  blocked: p.Z.isBlockedForMessage(e) || (null != B && p.Z.isBlocked(B)),
                  ignored: p.Z.isIgnoredForMessage(e) || (null != B && p.Z.isIgnored(B)),
                  mentionEveryone: e.mention_everyone,
                  mentions: S,
                  mentionRoles: N,
                  mentionChannels: P,
                  messageReference: w,
                  mentioned: (0, b.Sz)({
                      userId: _.default.getId(),
                      channelId: e.channel_id,
                      mentionEveryone: null != (c = e.mention_everyone) && c,
                      mentionUsers: S,
                      mentionRoles: N
                  }),
                  giftCodes: (0, g.Fp)(e) ? (0, g.Q_)(null == e ? void 0 : e.embeds[0].url) : (0, g.Q_)(e.content),
                  content: F,
                  referralTrialOfferId: f,
                  call: x(e.call, O.timestamp),
                  messageSnapshots: j(e),
                  reactions: k(null != m ? m : e.reactions, e.poll),
                  interaction: G,
                  interactionData: null != y ? y : e.interaction_data,
                  interactionMetadata: e.interaction_metadata,
                  roleSubscriptionData: e.role_subscription_data,
                  purchaseNotification: e.purchase_notification,
                  poll: null == e.poll ? void 0 : (0, l.Z)(e.poll),
                  potions: e.potions,
                  giftInfo: null == M ? void 0 : M,
                  giftingPrompt: U,
                  chatWallpaperInfo: h
              })
    );
}
function w(e, t) {
    return null != t.edited_timestamp
        ? T(I({}, t), {
              reactions: e.reactions,
              interaction_data: e.interaction_data
          })
        : I({}, e, t);
}
function D(e, t) {
    if (null != t.edited_timestamp)
        return P(t, {
            reactions: e.reactions,
            interactionData: e.interactionData
        });
    let n = e,
        r = !1;
    if ((null != t.call && (n = n.set('call', x(t.call, e.timestamp))), null != t.attachments && (n = n.set('attachments', L(t))), null != t.content && '' !== t.content && (n = n.set('content', t.content)), null != t.embeds && (n = n.set('embeds', M(t))), null != t.message_snapshots && (n = n.set('messageSnapshots', j(t))), t.pinned !== n.pinned && (n = n.set('pinned', t.pinned)), null != n.webhookId && null != t.author && (n = n.set('author', new f.Z(t.author))), null != t.flags && t.flags !== n.flags && (n = n.set('flags', t.flags)), null != t.components && (n = n.set('components', (0, s.uZ)(t.components, { includeEmojiSrc: !1 }))), null != t.role_subscription_data && (n = n.set('roleSubscriptionData', t.role_subscription_data)), null != t.reactions)) {
        var i;
        n = n.set('reactions', k(null != (i = e.reactions) ? i : t.reactions));
    }
    return (
        null != t.poll && (n = n.set('poll', (0, l.Z)(t.poll))),
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
                (0, b.ZP)({
                    message: n,
                    userId: _.default.getId()
                })
            )),
        n
    );
}
function L(e) {
    return null == e.attachments ? [] : e.attachments.map((e) => T(I({}, e), { spoiler: e.filename.startsWith(y._j) }));
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
function M(e) {
    if (null == e.embeds) return [];
    let t = e.embeds.map((t) => (0, m.kC)(e.channel_id, e.id, t));
    return (0, m.o3)(t);
}
function k(e, t) {
    var n;
    if (null == e && (null == t ? void 0 : t.results) == null) return [];
    let r =
        null == t || null == (n = t.results)
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
        let t = I({}, e);
        if ((null == t ? void 0 : t.count_details) != null) {
            var n, r;
            (t.burst_count = null != (n = t.count_details.burst) ? n : 0), (t.count = null != (r = t.count_details.normal) ? r : 0);
        }
        return t.count < 0 && (t.count = 0), t.burst_count < 0 && (t.burst_count = 0), t;
    });
}
function j(e) {
    return null == e.message_snapshots
        ? []
        : e.message_snapshots.map((e) => {
              let { message: t } = e;
              return new d.Hx({ message: R(t) });
          });
}
let U = (e) => 0 === (0, c.cv)(e).length || '' !== e.content;
function G(e) {
    return e.hasFlag(v.iLy.EPHEMERAL) && e.type !== v.uaV.IN_GAME_MESSAGE_NUX;
}
