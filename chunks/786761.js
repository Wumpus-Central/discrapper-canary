n.d(t, {
    Pv: () => U,
    e5: () => P,
    gx: () => R,
    lp: () => k,
    wi: () => D,
}),
    n(997841),
    n(388685);
var r = n(913527),
    i = n.n(r),
    a = n(830121),
    o = n(292419),
    s = n(330044),
    l = n(378233),
    c = n(360742),
    u = n(23750),
    d = n(598077),
    f = n(314897),
    p = n(699516),
    _ = n(594174),
    m = n(408433),
    h = n(669079),
    g = n(709054),
    E = n(572804);
n(739566);
var b = n(959517),
    y = n(981631);
function O(e, t, n) {
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
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
    id: "???",
    username: "???",
});
function C(e) {
    var t;
    return null == e.author
        ? T
        : null != e.webhook_id
          ? new d.Z(e.author)
          : null != (t = _.default.getUser(e.author.id))
            ? t
            : new d.Z(e.author);
}
function A(e) {
    return !1;
}
function N(e) {
    var t;
    return new u.pi(
        I(v({}, e), {
            timestamp: new Date(e.timestamp),
            editedTimestamp: null != e.edited_timestamp ? new Date(e.edited_timestamp) : null,
            attachments: w(e),
            embeds: L(e),
            components: (0, o.uZ)(null != (t = e.components) ? t : []),
            codedLinks: y.V$x.NON_PARSED.has(e.type) ? [] : (0, a.ZP)(e.content),
        }),
    );
}
function P(e) {
    var t, n, r, i, a, o, l, d;
    let _,
        m,
        { reactions: b, interactionData: O } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        S = N(e),
        T = null != (i = null == (t = e.mentions) ? void 0 : t.map((e) => e.id)) ? i : [],
        P = null != (a = e.mention_roles) ? a : [],
        R = null != (o = e.mention_channels) ? o : [],
        D = null != (l = e.mention_games) ? l : [],
        w = e.message_reference,
        L = C(e),
        k = null,
        U = null == e ? void 0 : e.gift_info,
        G = e.gifting_prompt,
        Z = null != e.interaction ? c.Z.createFromServer(e.interaction) : null,
        B =
            e.type === y.uaV.THREAD_STARTER_MESSAGE
                ? null == (r = e.referenced_message) || null == (n = r.author)
                    ? void 0
                    : n.id
                : void 0,
        F = e.content;
    return new u.ZP(
        (e.type === y.uaV.PREMIUM_REFERRAL &&
            ((_ = g.default.isProbablyAValidSnowflake(e.content) ? e.content : void 0), (F = "")),
        e.type === y.uaV.PREMIUM_GROUP_INVITE &&
            ((m = g.default.isProbablyAValidSnowflake(e.content) ? e.content : void 0), (F = "")),
        A(e))
            ? I(v({}, k), {
                  id: e.id,
                  channel_id: e.channel_id,
                  type: y.uaV.DEFAULT,
                  author: L,
                  timestamp: S.timestamp,
                  isUnsupported: !0,
              })
            : I(v({}, e, k, S.toJS()), {
                  author: L,
                  webhookId: e.webhook_id,
                  blocked: p.Z.isBlockedForMessage(e) || (null != B && p.Z.isBlocked(B)),
                  ignored: p.Z.isIgnoredForMessage(e) || (null != B && p.Z.isIgnored(B)),
                  mentionEveryone: e.mention_everyone,
                  mentions: T,
                  mentionRoles: P,
                  mentionChannels: R,
                  mentionGames: D,
                  messageReference: w,
                  mentioned: (0, E.Sz)({
                      userId: f.default.getId(),
                      channelId: e.channel_id,
                      mentionEveryone: null != (d = e.mention_everyone) && d,
                      mentionUsers: T,
                      mentionRoles: P,
                      mentionGames: D.map((e) => e.id),
                  }),
                  giftCodes: (0, h.Fp)(e) ? (0, h.Q_)(null == e ? void 0 : e.embeds[0].url) : (0, h.Q_)(e.content),
                  content: F,
                  referralTrialOfferId: _,
                  premiumGroupInviteId: m,
                  call: x(e.call, S.timestamp),
                  messageSnapshots: M(e),
                  reactions: j(null != b ? b : e.reactions, e.poll),
                  interaction: Z,
                  interactionData: null != O ? O : e.interaction_data,
                  interactionMetadata: e.interaction_metadata,
                  roleSubscriptionData: e.role_subscription_data,
                  purchaseNotification: e.purchase_notification,
                  poll: null == e.poll ? void 0 : (0, s.Z)(e.poll),
                  sharedClientTheme: e.shared_client_theme,
                  potions: e.potions,
                  giftInfo: null == U ? void 0 : U,
                  giftingPrompt: G,
              }),
    );
}
function R(e, t) {
    return null != t.edited_timestamp
        ? I(v({}, t), {
              reactions: e.reactions,
              interaction_data: e.interaction_data,
          })
        : v({}, e, t);
}
function D(e, t) {
    if (null != t.edited_timestamp)
        return P(t, {
            reactions: e.reactions,
            interactionData: e.interactionData,
        });
    let n = e,
        r = !1;
    if (
        (null != t.call && (n = n.set("call", x(t.call, e.timestamp))),
        null != t.attachments && (n = n.set("attachments", w(t))),
        null != t.application && (n = n.set("application", t.application)),
        null != t.activity && (n = n.set("activity", t.activity)),
        null != t.content && "" !== t.content && (n = n.set("content", t.content)),
        null != t.embeds && (n = n.set("embeds", L(t))),
        null != t.message_snapshots && (n = n.set("messageSnapshots", M(t))),
        t.pinned !== n.pinned && (n = n.set("pinned", t.pinned)),
        null != n.webhookId && null != t.author && (n = n.set("author", new d.Z(t.author))),
        null != t.flags && t.flags !== n.flags && (n = n.set("flags", t.flags)),
        null != t.components && (n = n.set("components", (0, o.uZ)(t.components))),
        null != t.role_subscription_data && (n = n.set("roleSubscriptionData", t.role_subscription_data)),
        null != t.reactions)
    ) {
        var i;
        n = n.set("reactions", j(null != (i = e.reactions) ? i : t.reactions));
    }
    return (
        null != t.poll && (n = n.set("poll", (0, s.Z)(t.poll))),
        null != t.mentions &&
            ((n = n.set(
                "mentions",
                t.mentions.map((e) => e.id),
            )),
            (r = !0)),
        null != t.mention_games && ((n = n.set("mentionGames", t.mention_games)), (r = !0)),
        null != t.mention_everyone && ((n = n.set("mentionEveryone", t.mention_everyone)), (r = !0)),
        null != t.mention_roles && ((n = n.set("mentionRoles", t.mention_roles)), (r = !0)),
        null != t.potions && (n = n.set("potions", t.potions)),
        r &&
            (n = n.set(
                "mentioned",
                (0, E.ZP)({
                    message: n,
                    userId: f.default.getId(),
                }),
            )),
        n
    );
}
function w(e) {
    return null == e.attachments ? [] : e.attachments.map((e) => I(v({}, e), { spoiler: e.filename.startsWith(b._j) }));
}
function x(e, t) {
    if (null != e) {
        let n = null != e.ended_timestamp ? i()(new Date(e.ended_timestamp)) : null,
            r = null != n ? i().duration(n.diff(t)) : null;
        return {
            participants: e.participants,
            endedTimestamp: n,
            duration: r,
        };
    }
    return null;
}
function L(e) {
    if (null == e.embeds) return [];
    let t = e.embeds.map((t) => (0, m.kC)(e.channel_id, e.id, t));
    return (0, m.o3)(t);
}
function j(e, t) {
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
                      name: "",
                      animated: !1,
                  },
                  me: !1,
                  me_burst: !1,
                  count: e.count,
                  burst_count: 0,
              }));
    return [...(null != e ? e : []), ...(null != r ? r : [])].map((e) => {
        let t = v({}, e);
        if ((null == t ? void 0 : t.count_details) != null) {
            var n, r;
            (t.burst_count = null != (n = t.count_details.burst) ? n : 0),
                (t.count = null != (r = t.count_details.normal) ? r : 0);
        }
        return t.count < 0 && (t.count = 0), t.burst_count < 0 && (t.burst_count = 0), t;
    });
}
function M(e) {
    return null == e.message_snapshots
        ? []
        : e.message_snapshots.map((e) => {
              let { message: t, moderator_report: n } = e;
              return new u.Hx({
                  message: N(t),
                  moderator_report: n,
              });
          });
}
let k = (e) => 0 === (0, l.cv)(e).length || "" !== e.content;
function U(e) {
    return e.hasFlag(y.iLy.EPHEMERAL) && e.type !== y.uaV.IN_GAME_MESSAGE_NUX;
}
