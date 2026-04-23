"use strict";
n.d(t, { A: () => D });
var r = n(791332),
    i = n.n(r),
    s = n(717125),
    a = n(47167),
    o = n(721592),
    l = n(376943),
    u = n(734057),
    c = n(71393),
    d = n(576705),
    _ = n(994500),
    f = n(287809),
    p = n(486020),
    h = n(147036),
    E = n(240248),
    m = n(465365),
    g = n(704726),
    A = n(652215),
    I = n(985018);
let T = (e) => {
    let t = u.A.getChannel(e);
    return t?.getGuildId();
};
function S(e) {
    return {
        type: "guild",
        guildId: e.id,
        content: (0, E.EJ)(e.name, 32),
        icon: p.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 40 }),
    };
}
function y(e, t) {
    let n = O((0, E.EJ)(e.name, 32));
    return {
        type: "channel",
        content: ["italics" === t ? { type: "em", content: [n] } : n],
        channelType: e.type,
        iconType: e.iconType,
    };
}
function N(e) {
    return { type: "channel", content: [O("")], iconType: e ? "post" : "message" };
}
function v(e, t) {
    let n = u.A.getChannel(e),
        r = (0, o.p)(e, u.A, s.A, d.A).isSubscriptionGated,
        i = (0, h.QG)(n) ?? "text";
    if (null != t) {
        let s = t.find((t) => t.id === e);
        if (null != s)
            return {
                type: s.type,
                id: s.id,
                guildId: s.guild_id,
                name: s.name,
                isDm: null != n && n.isPrivate(),
                isForumPost: null != n && n.isForumPost(),
                isMentionable: !0,
                canViewChannel: !0,
                roleSubscriptionGated: r,
                iconType: i,
                parentId: n?.parent_id,
            };
    }
    return null != n
        ? {
              type: n.type,
              id: n.id,
              guildId: n.guild_id,
              name: (0, a.m1)(n, f.default, _.A),
              isDm: n.isPrivate(),
              isForumPost: n.isForumPost(),
              isMentionable: (0, m.Y)(n.type),
              canViewChannel: (0, l.nc)(n),
              roleSubscriptionGated: r,
              iconType: i,
              parentId: n.parent_id,
          }
        : null;
}
function C(e) {
    return { type: "link", content: [{ type: "text", content: e }], target: e, title: void 0 };
}
function O(e) {
    return { type: "text", content: e };
}
function R(e, t, n, r, i) {
    let s = c.A.getGuild(e),
        a = s?.id === r;
    return {
        type: "channelMention",
        guildId: e,
        channelId: t,
        messageId: n,
        originalLink: i,
        inContent: null == s || a ? null : [S(s)],
        content: [
            y({ name: I.intl.string(I.t.zLZPmk).toLowerCase(), type: A.rbe.UNKNOWN, iconType: "text" }, "italics"),
        ],
    };
}
function b(e, t, n, r) {
    if (!e.canViewChannel) {
        let n;
        return (
            (n = {
                type: "channel",
                content: [O(e.roleSubscriptionGated ? e.name : I.intl.string(I.t["/YzI63"]))],
                channelType: e.roleSubscriptionGated ? e.type : A.rbe.UNKNOWN,
                iconType: "locked",
            }),
            { type: "channelMention", guildId: e.guildId, channelId: e.id, messageId: t, inContent: null, content: [n] }
        );
    }
    if (!e.isMentionable) return O(`#${e.name}`);
    let i = { type: "channelMention", channelId: e.id, guildId: e.guildId, messageId: t, originalLink: r },
        s = c.A.getGuild(e.guildId);
    if (null == s)
        if (e.isDm) return { ...i, guildId: A.ME, inContent: [y(e)], content: [N(!1)] };
        else return null != r ? C(r) : O(`#${I.intl.string(I.t.J90oLW)}`);
    let o = e.guildId === n;
    return {
        ...i,
        ...(function (e, t, n, r) {
            let i = S(e),
                s = y(t),
                o = N(t.isForumPost);
            if (n && r) {
                if (t.isForumPost) {
                    let e = u.A.getChannel(t.parentId);
                    if (null != e)
                        return {
                            inContent: [
                                y({
                                    name: (0, a.m1)(e, f.default, _.A),
                                    type: e.type,
                                    iconType: (0, h.QG)(e) ?? "forum",
                                }),
                            ],
                            content: [s],
                        };
                }
                return { inContent: [s], content: [o] };
            }
            return n && !r
                ? { inContent: null, content: [s] }
                : !n && r
                  ? { inContent: [i], content: [t.isForumPost ? s : o] }
                  : n || r
                    ? void 0
                    : { inContent: [i], content: [s] };
        })(s, e, o, null != t),
    };
}
let D = {
    channelMention: {
        order: g.Ay.order,
        requiredFirstCharacters: ["<"],
        match: (e) => /^<#(\d+)>/.exec(e),
        parse(e, t, n) {
            let r = e[1];
            if (n.returnMentionIds) return { type: "channelMention", id: r };
            let i = v(r, n.mentionChannels);
            return null == i ? R(null, r, null, T(n.channelId)) : b(i, null, T(n.channelId));
        },
    },
    channelOrMessageUrl: {
        order: i().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ["h"],
        match(e) {
            let t = l.Ju.exec(e);
            return null != t && ((null != t[2] && /\D/.test(t[2])) || (null != t[3] && /\D/.test(t[3]))) ? null : t;
        },
        parse(e, t, n) {
            let r = e[0],
                i = e[1],
                s = e[2],
                a = e[3];
            if (null == s) return C(r);
            let o = v(s, null);
            return null == o ? R(i, s, a, T(n.channelId), r) : b(o, a, T(n.channelId), r);
        },
    },
    mediaPostLink: {
        order: i().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ["h"],
        match: (e) => l.En.exec(e),
        parse(e, t, n) {
            let r = e[0],
                i = e[1],
                s = e[2],
                a = e[3],
                o = e[4];
            if (null == s || null == a) return C(r);
            let l = v(a, null);
            if (null != l) return b(l, o, T(n.channelId), r);
            let u = v(s, null);
            return null != u ? b(u, o, T(n.channelId), r) : R(i, s, o, T(n.channelId), r);
        },
    },
};
