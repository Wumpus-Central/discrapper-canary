"use strict";
n.d(t, { A: () => P });
var r = n(791332),
    i = n.n(r),
    a = n(717125),
    s = n(47167),
    o = n(721592),
    l = n(376943),
    u = n(734057),
    c = n(71393),
    d = n(576705),
    _ = n(994500),
    f = n(287809),
    p = n(486020),
    h = n(147036),
    m = n(240248),
    g = n(465365),
    E = n(704726),
    A = n(652215),
    I = n(985018);
let T = (e) => {
    let t = u.A.getChannel(e);
    return t?.getGuildId();
};
function y(e) {
    return {
        type: "guild",
        guildId: e.id,
        content: (0, m.EJ)(e.name, 32),
        icon: p.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 40 }),
    };
}
function S(e, t) {
    let n,
        r = R((0, m.EJ)(e.name, 32));
    return {
        type: "channel",
        content: [(n = "italics" === t ? { type: "em", content: [r] } : r)],
        channelType: e.type,
        iconType: e.iconType,
    };
}
function v(e, t) {
    let n = {
        type: "channel",
        content: [R(e.roleSubscriptionGated ? e.name : I.intl.string(I.t["/YzI63"]))],
        channelType: e.roleSubscriptionGated ? e.type : A.rbe.UNKNOWN,
        iconType: "locked",
    };
    return { type: "channelMention", guildId: e.guildId, channelId: e.id, messageId: t, inContent: null, content: [n] };
}
function C(e) {
    return { type: "channel", content: [R("")], iconType: e ? "post" : "message" };
}
function b(e, t) {
    let n = u.A.getChannel(e),
        r = (0, o.p)(e, u.A, a.A, d.A).isSubscriptionGated,
        i = (0, h.QG)(n) ?? "text";
    if (null != t) {
        let a = t.find((t) => t.id === e);
        if (null != a)
            return {
                type: a.type,
                id: a.id,
                guildId: a.guild_id,
                name: a.name,
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
              name: (0, s.m1)(n, f.default, _.A),
              isDm: n.isPrivate(),
              isForumPost: n.isForumPost(),
              isMentionable: (0, g.Y)(n.type),
              canViewChannel: (0, l.nc)(n),
              roleSubscriptionGated: r,
              iconType: i,
              parentId: n.parent_id,
          }
        : null;
}
function N(e) {
    return { type: "link", content: [{ type: "text", content: e }], target: e, title: void 0 };
}
function R(e) {
    return { type: "text", content: e };
}
function O(e) {
    return null != e ? N(e) : R(`#${I.intl.string(I.t.J90oLW)}`);
}
function D() {
    return S({ name: I.intl.string(I.t.zLZPmk).toLowerCase(), type: A.rbe.UNKNOWN, iconType: "text" }, "italics");
}
function L(e, t, n, r, i) {
    let a = c.A.getGuild(e),
        s = a?.id === r;
    return {
        type: "channelMention",
        guildId: e,
        channelId: t,
        messageId: n,
        originalLink: i,
        inContent: null == a || s ? null : [y(a)],
        content: [D()],
    };
}
function w(e, t, n, r) {
    let i = y(e),
        a = S(t),
        s = C(t.isForumPost);
    if (n && r) {
        if (t.isForumPost) {
            let e = u.A.getChannel(t.parentId);
            if (null != e)
                return {
                    inContent: [S({ name: e.name, type: e.type, iconType: (0, h.QG)(e) ?? "forum" })],
                    content: [a],
                };
        }
        return { inContent: [a], content: [s] };
    }
    return n && !r
        ? { inContent: null, content: [a] }
        : !n && r
          ? { inContent: [i], content: [t.isForumPost ? a : s] }
          : n || r
            ? void 0
            : { inContent: [i], content: [a] };
}
function x(e, t, n, r) {
    if (!e.canViewChannel) return v(e, t);
    if (!e.isMentionable) return R(`#${e.name}`);
    let i = { type: "channelMention", channelId: e.id, guildId: e.guildId, messageId: t, originalLink: r },
        a = c.A.getGuild(e.guildId);
    if (null == a)
        if (e.isDm) return { ...i, guildId: A.ME, inContent: [S(e)], content: [C(!1)] };
        else return O(r);
    let s = e.guildId === n,
        o = null != t;
    return { ...i, ...w(a, e, s, o) };
}
let P = {
    channelMention: {
        order: E.Ay.order,
        requiredFirstCharacters: ["<"],
        match: (e) => /^<#(\d+)>/.exec(e),
        parse(e, t, n) {
            let r = e[1];
            if (n.returnMentionIds) return { type: "channelMention", id: r };
            let i = b(r, n.mentionChannels);
            return null == i ? L(null, r, null, T(n.channelId)) : x(i, null, T(n.channelId));
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
                a = e[2],
                s = e[3];
            if (null == a) return N(r);
            let o = b(a, null);
            return null == o ? L(i, a, s, T(n.channelId), r) : x(o, s, T(n.channelId), r);
        },
    },
    mediaPostLink: {
        order: i().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ["h"],
        match: (e) => l.En.exec(e),
        parse(e, t, n) {
            let r = e[0],
                i = e[1],
                a = e[2],
                s = e[3],
                o = e[4];
            if (null == a || null == s) return N(r);
            let l = b(s, null);
            if (null != l) return x(l, o, T(n.channelId), r);
            let u = b(a, null);
            return null != u ? x(u, o, T(n.channelId), r) : L(i, a, o, T(n.channelId), r);
        },
    },
};
