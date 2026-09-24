(n.d(t, { Ay: () => eS }), n(321073));
var i = n(435558),
    r = n.n(i),
    a = n(478676),
    s = n.n(a),
    l = n(7584),
    o = n(176201),
    d = n(676608),
    c = n(113051),
    u = n(734057),
    _ = n(317525),
    E = n(71393),
    A = n(287809),
    h = n(562153),
    I = n(427262),
    f = n(258072),
    p = n(717125),
    T = n(47167),
    g = n(499211),
    m = n(376943),
    S = n(576705),
    N = n(994500),
    C = n(486020),
    O = n(147036),
    R = n(240248),
    L = n(465365),
    y = n(704726),
    D = n(652215),
    v = n(375708);
function b(e) {
    let t = u.A.getChannel(e);
    return t?.getGuildId();
}
function M(e) {
    return {
        type: "guild",
        guildId: e.id,
        content: (0, R.EJ)(e.name, 32),
        icon: C.Ay.getGuildIconURL({ id: e.id, icon: e.icon, size: 40 }),
    };
}
function P(e, t) {
    let n = x((0, R.EJ)(e.name, 32));
    return {
        type: "channel",
        content: ["italics" === t ? { type: "em", content: [n] } : n],
        channelType: e.type,
        iconType: e.iconType,
    };
}
function U(e) {
    return { type: "channel", content: [x("")], iconType: e ? "post" : "message" };
}
function w(e, t) {
    let n = u.A.getChannel(e),
        i = (0, g.p)(e, u.A, p.A, S.A).isSubscriptionGated,
        r = (0, O.QG)(n) ?? "text";
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
                roleSubscriptionGated: i,
                iconType: r,
                parentId: n?.parent_id,
            };
    }
    return null != n
        ? {
              type: n.type,
              id: n.id,
              guildId: n.guild_id,
              name: (0, T.m1)(n, A.default, N.A),
              isDm: n.isPrivate(),
              isForumPost: n.isForumPost(),
              isMentionable: (0, L.Y)(n.type),
              canViewChannel: (0, m.nc)(n),
              roleSubscriptionGated: i,
              iconType: r,
              parentId: n.parent_id,
          }
        : null;
}
function G(e) {
    return { type: "link", content: [{ type: "text", content: e }], target: e, title: void 0 };
}
function x(e) {
    return { type: "text", content: e };
}
function k(e, t, n, i, r) {
    let a = E.A.getGuild(e),
        s = a?.id === i;
    return {
        type: "channelMention",
        guildId: e,
        channelId: t,
        messageId: n,
        originalLink: r,
        inContent: null == a || s ? null : [M(a)],
        content: [
            P({ name: v.intl.string(v.t.zLZPmk).toLowerCase(), type: D.rbe.UNKNOWN, iconType: "text" }, "italics"),
        ],
    };
}
function F(e, t, n, i) {
    if (!e.canViewChannel) {
        let n;
        return (
            (n = {
                type: "channel",
                content: [x(e.roleSubscriptionGated ? e.name : v.intl.string(v.t["/YzI63"]))],
                channelType: e.roleSubscriptionGated ? e.type : D.rbe.UNKNOWN,
                iconType: "locked",
            }),
            { type: "channelMention", guildId: e.guildId, channelId: e.id, messageId: t, inContent: null, content: [n] }
        );
    }
    if (!e.isMentionable) return x(`#${e.name}`);
    let r = { type: "channelMention", channelId: e.id, guildId: e.guildId, messageId: t, originalLink: i },
        a = E.A.getGuild(e.guildId);
    if (null == a)
        if (e.isDm) return { ...r, guildId: D.ME, inContent: [P(e)], content: [U(!1)] };
        else return null != i ? G(i) : x(`#${v.intl.string(v.t.J90oLW)}`);
    let s = e.guildId === n;
    return {
        ...r,
        ...(function (e, t, n, i) {
            let r = M(e),
                a = P(t),
                s = U(t.isForumPost);
            if (n && i) {
                if (t.isForumPost) {
                    let e = u.A.getChannel(t.parentId);
                    if (null != e)
                        return {
                            inContent: [
                                P({
                                    name: (0, T.m1)(e, A.default, N.A),
                                    type: e.type,
                                    iconType: (0, O.QG)(e) ?? "forum",
                                }),
                            ],
                            content: [a],
                        };
                }
                return { inContent: [a], content: [s] };
            }
            return n && !i
                ? { inContent: null, content: [a] }
                : !n && i
                  ? { inContent: [r], content: [t.isForumPost ? a : s] }
                  : n || i
                    ? void 0
                    : { inContent: [r], content: [a] };
        })(a, e, s, null != t),
    };
}
let B = {
        order: y.Ay.order,
        requiredFirstCharacters: ["<"],
        match: (e) => /^<#(\d+)>/.exec(e),
        parse(e, t, n) {
            let i = e[1];
            if (n.returnMentionIds) return { type: "channelMention", id: i };
            let r = w(i, n.mentionChannels);
            return null == r ? k(null, i, null, b(n.channelId)) : F(r, null, b(n.channelId));
        },
    },
    V = {
        order: s().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ["h"],
        match(e) {
            let t = m.Ju.exec(e);
            return null != t && ((null != t[2] && /\D/.test(t[2])) || (null != t[3] && /\D/.test(t[3]))) ? null : t;
        },
        parse(e, t, n) {
            let i = e[0],
                r = e[1],
                a = e[2],
                s = e[3];
            if (null == a) return G(i);
            let l = w(a, null);
            return null == l ? k(r, a, s, b(n.channelId), i) : F(l, s, b(n.channelId), i);
        },
    },
    H = {
        order: s().defaultRules.url.order - 0.5,
        requiredFirstCharacters: ["h"],
        match: (e) => m.En.exec(e),
        parse(e, t, n) {
            let i = e[0],
                r = e[1],
                a = e[2],
                s = e[3],
                l = e[4];
            if (null == a || null == s) return G(i);
            let o = w(s, null);
            if (null != o) return F(o, l, b(n.channelId), i);
            let d = w(a, null);
            return null != d ? F(d, l, b(n.channelId), i) : k(r, a, l, b(n.channelId), i);
        },
    };
var j = n(223637),
    W = n(694403),
    Y = n(873879),
    K = n(683412),
    $ = n(236285),
    z = n(690521);
let X = {
    s: { requiredFirstCharacters: ["~"], match: s().inlineRegex(/^~~([\s\S]+?)~~(?!_)/) },
    highlight: { order: y.Ay.order, match: () => null },
    emoji: {
        order: y.Ay.order,
        requiredFirstCharacters: [":"],
        match(e) {
            let t = l.Ay.EMOJI_NAME_AND_DIVERSITY_RE.exec(e);
            return null != t && "" !== l.Ay.convertNameToSurrogate(t[1]) ? t : null;
        },
        parse(e) {
            let [t, n] = e,
                i = l.Ay.convertNameToSurrogate(n);
            return null == i || "" === i
                ? { type: "text", content: t }
                : { name: `:${n}:`, surrogate: i, src: z.Ay.getURL(i) };
        },
    },
    customEmoji: {
        order: s().defaultRules.codeBlock.order,
        requiredFirstCharacters: ["<"],
        match: (e) => /^<(a)?:(\w+):(\d+)>/.exec(e),
        parse(e, t, n) {
            let [i, r, a, s] = e,
                { guildId: l } = n,
                o = $.Ay.getDisambiguatedEmojiContext(l).getById(s),
                d = null == o || o.require_colons;
            return (null != o && (a = o.name), { emojiId: s, name: d ? `:${a}:` : a, animated: "a" === r });
        },
    },
    text: {
        parse(e) {
            let t = l.Ay.findInlineEmojisFromSurrogates(e[0]),
                n = 0;
            return t.map((e) => {
                if ("text" === e.type) {
                    let t = { index: n, 0: e.text };
                    return ((n += e.text.length), { type: "text", content: e.text, originalMatch: t });
                }
                {
                    let t = { index: n, 0: e.surrogate };
                    return (
                        (n += e.surrogate.length),
                        {
                            type: "emoji",
                            name: e.emojiName,
                            surrogate: e.surrogate,
                            src: z.Ay.getURL(e.surrogate),
                            originalMatch: t,
                        }
                    );
                }
            });
        },
    },
    looseEm: {
        ...s().defaultRules.em,
        match: s().inlineRegex(
            RegExp(
                "^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?) {1,2}\\*(?!\\*)",
            ),
        ),
        parse: (e, t, n) => ({ type: "em", content: t(e[1], n), originalMatch: e }),
    },
};
var q = n(78390),
    Z = n(379418),
    Q = n(551965),
    J = n(73510),
    ee = n(827669);
let et = /^( *>>> +([\s\S]*))|^( *>(?!>>) +[^\n]*(\n *>(?!>>) +[^\n]*)*\n?)/,
    en = /^$|\n *$/,
    ei = /^ *>>> ?/,
    er = /^ *> ?/gm,
    ea = /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])/;
function es(e) {
    let t = (0, W.W1)(e[1]);
    if (null == t) return { type: "text", content: e[1] };
    let { displayTarget: n, target: i } = t;
    return { type: "link", content: [{ type: "text", content: n }], target: i, title: void 0 };
}
function el(e) {
    let t = u.A.getChannel(e);
    return t?.getGuildId();
}
function eo(e) {
    return null != e.guildId ? E.A.getGuild(e.guildId) : null != e.channelId ? E.A.getGuild(el(e.channelId)) : null;
}
let ed = {
        newline: s().defaultRules.newline,
        paragraph: s().defaultRules.paragraph,
        escape: {
            ...s().defaultRules.escape,
            match: (e, t, n) => (!1 === t.allowEscape ? null : s().defaultRules.escape.match(e, t, n)),
        },
        blockQuote: {
            ...s().defaultRules.blockQuote,
            requiredFirstCharacters: [" ", ">"],
            match(e, t) {
                let { prevCapture: n, inQuote: i, nested: r } = t;
                if (i || r) return null;
                if (null == n) return et.exec(e);
                let a = n[0];
                return en.test(a) ? et.exec(e) : null;
            },
            parse(e, t, n) {
                let i = e[0],
                    r = !!ei.exec(i),
                    a = r ? ei : er,
                    s = i.replace(a, ""),
                    l = n.inQuote || !1,
                    o = n.inline || !1;
                ((n.inQuote = !0), r || (n.inline = !0));
                let d = t(s, n);
                return (
                    (n.inQuote = l),
                    (n.inline = o),
                    0 === d.length && d.push({ type: "text", content: " " }),
                    { content: d, type: "blockQuote" }
                );
            },
        },
        link: W.Ay,
        autolink: { ...s().defaultRules.autolink, parse: es },
        mailto: {
            ...s().defaultRules.mailto,
            match: s().inlineRegex(/^<([^\s<>@]+@[^\s<>@]+\.[^\s<>@]+)>/),
            requiredFirstCharacters: ["<"],
            parse(e) {
                let t = e[1],
                    n = e[1];
                return (
                    n.startsWith("mailto:") || (n = "mailto:" + n),
                    { type: "link", content: [{ type: "text", content: t }], target: n }
                );
            },
        },
        tel: {
            ...s().defaultRules.mailto,
            requiredFirstCharacters: ["<"],
            match: s().inlineRegex(
                /^<((?:(?:tel|sms):\+?|\+)(?:(?:[0-9]|\([0-9]+\)))(?:[- .\/]?(?:[0-9]|\([0-9]+\)))+)>/,
            ),
            parse(e) {
                let t = e[1],
                    n = e[1].replaceAll(/[ \/]+/g, "-");
                return (
                    n.startsWith("tel:") || n.startsWith("sms:") || (n = "tel:" + n),
                    { type: "link", content: [{ type: "text", content: t }], target: n }
                );
            },
        },
        url: {
            ...s().defaultRules.url,
            requiredFirstCharacters: ["h", "s"],
            match(e, t) {
                if (!t.inline) return null;
                let n = ea.exec(e);
                if (null != n) {
                    let e = 0,
                        t = n[0];
                    for (let n = t.length - 1; n >= 0 && ")" === t[n]; n--) {
                        let n = t.indexOf("(", e);
                        if (-1 === n) {
                            t = t.slice(0, t.length - 1);
                            break;
                        }
                        e = n + 1;
                    }
                    n[0] = n[1] = t;
                }
                return n;
            },
            parse: es,
        },
        strong: s().defaultRules.strong,
        em: s().defaultRules.em,
        u: s().defaultRules.u,
        br: s().defaultRules.br,
        text: y.Ay,
        inlineCode: {
            ...s().defaultRules.inlineCode,
            parse(e, t, n) {
                let i = s().defaultRules.inlineCode.parse(e, t, n);
                return !0 === n.parseInlineCodeChildContent ? { ...i, validationChildContent: t(i.content, n) } : i;
            },
        },
        emoticon: {
            order: y.Ay.order,
            requiredFirstCharacters: ["\xaf"],
            match: (e) => /^(\xaf\\_\(\u30c4\)_\/\xaf)/.exec(e),
            parse: (e) => ({ type: "text", content: e[1] }),
        },
        codeBlock: {
            order: s().defaultRules.codeBlock.order,
            requiredFirstCharacters: ["`"],
            match: (e) => /^```(?:([a-z0-9_+\-.#]+?)\n)?\n*([^\n][^]*?)\n*```/i.exec(e),
            parse: (e, t, n) => ({ lang: e[1] ?? "", content: e[2] ?? "", inQuote: n.inQuote || n.formatInline || !1 }),
        },
        roleMention: {
            order: y.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => /^<@&(\d+)>/.exec(e),
            parse(e, t, n) {
                let [i, r] = e;
                if (n.returnMentionIds) return { type: "roleMention", id: r };
                let a = eo(n),
                    s = null != a ? _.A.getRole(a.id, r) : null;
                if (null == s) return { type: "text", content: `@${v.intl.string(v.t["YV4F/n"])}` };
                let l = (0, d.aF)(a?.id, s) && !(0, o.Qv)(s);
                return {
                    type: "mention",
                    channelId: n.channelId,
                    guildId: null != a ? a.id : null,
                    roleId: r,
                    roleColor: s.color,
                    roleColors: l
                        ? {
                              primaryColor: s.colors?.primary_color,
                              secondaryColor: s.colors?.secondary_color,
                              tertiaryColor: s.colors?.tertiary_color,
                          }
                        : null,
                    roleName: `@${s.name}`,
                    color: s.color,
                    colorString: s.colorString,
                    content: [{ type: "text", content: `@${s.name}` }],
                };
            },
        },
        mention: {
            order: y.Ay.order,
            requiredFirstCharacters: ["<", "@"],
            match(e) {
                let t = /^<@!?(\d+)>|^(@(?:everyone|here))/.exec(e);
                return null == t ? null : t;
            },
            parse: (e, t, n) =>
                n.returnMentionIds
                    ? null == e[1]
                        ? { type: "mention", text: e[0] }
                        : { type: "mention", id: e[1] }
                    : (function (e, t) {
                          let n,
                              i,
                              { fullMatch: r, id: a, everyoneOrHere: s } = e,
                              l = A.default.getUser(a),
                              o = u.A.getChannel(t.channelId);
                          null != l &&
                              ((i = l.id),
                              (n = l.toString()),
                              null != o && (n = h.Ay.getNickname(o.getGuildId(), t.channelId, l) ?? I.Ay.getName(l)));
                          let d = null != a && D.Ut1.test(a.trim()),
                              c = d && t.unknownUserMentionPlaceholder ? `@${v.intl.string(v.t.sKdZ6U)}` : r;
                          return {
                              type: "mention",
                              userId: i,
                              channelId: t.channelId,
                              viewingChannelId: t.viewingChannelId,
                              guildId: o?.getGuildId(),
                              parsedUserId: d ? a : null,
                              roleName: s,
                              content: [{ type: "text", content: null != n ? `@${n}` : c }],
                          };
                      })({ fullMatch: e[0], id: e[1], everyoneOrHere: e[2] }, n),
        },
        silentPrefix: {
            order: y.Ay.order,
            requiredFirstCharacters: ["@"],
            match: (e, t, n) => (null == n || "" === n ? /^(@silent(?![^\s]))/.exec(e) : null),
            parse: function (e) {
                return { type: "silentPrefix", content: e[0] };
            },
        },
        channelMention: B,
        channelOrMessageUrl: V,
        mediaPostLink: H,
        attachmentLink: f.A.attachmentLink,
        commandMention: {
            order: s().defaultRules.text.order,
            requiredFirstCharacters: ["<"],
            match: (e) =>
                /^<\/((?:[-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?(?: [-_\p{Letter}\p{Number}\p{sc=Deva}\p{sc=Thai}]{1,32})?):(\d+)>/u.exec(
                    e,
                ),
            parse: (e, t, n) =>
                n.returnMentionIds
                    ? { type: "commandMention", id: e[2] }
                    : (function (e, t, n) {
                          let [, ...i] = e.split(" "),
                              r = `${t}${[...i].map((e) => `${J.v4}${e}`).join("")}`;
                          return {
                              type: "commandMention",
                              channelId: n.channelId,
                              commandId: t,
                              commandName: e,
                              commandKey: r,
                              content: [{ type: "text", content: `${e}` }],
                          };
                      })(e[1], e[2], n),
        },
        timestampMentionInput: {
            order: s().defaultRules.text.order,
            requiredFirstCharacters: ["<"],
            match: (e, t) => (t.allowTimeMentionInput ? /^<@time:([^>]*)>/.exec(e) : null),
            parse: (e) => ({ type: "timestampMentionInput", content: e[1] }),
        },
        gameMention: {
            order: s().defaultRules.text.order,
            requiredFirstCharacters: ["<"],
            match: (e, t) => (t.allowGameMentions ? ee.P7.exec(e) : null),
            parse: (e) => ({ type: "gameMention", gameId: e[1] }),
        },
        emoji: {
            order: y.Ay.order,
            requiredFirstCharacters: [":"],
            match(e) {
                let t = l.Ay.EMOJI_NAME_RE.exec(e);
                return null != t && "" !== l.Ay.convertNameToSurrogate(t[1]) ? t : null;
            },
            parse(e) {
                let t = l.Ay.convertNameToSurrogate(e[1]);
                return { type: "text", content: null == t || "" === t ? `:${e[1]}:` : t };
            },
        },
        soundboard: {
            order: y.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => c.ds.exec(e),
            parse: (e, t, n) => (0, c.Ay)(e, n),
        },
        customEmoji: {
            order: y.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => /^<a?:(\w+):(\d+)>/.exec(e),
            parse: (e) => ({ type: "text", content: `:${e[1]}:` }),
        },
        timestamp: {
            order: y.Ay.order - 1,
            requiredFirstCharacters: ["<"],
            match: (e) => Z.l9.exec(e),
            parse(e) {
                let [t, n, i] = e,
                    r = (0, Z.EH)(n, i);
                return null == r ? { type: "text", content: t } : ((r.type = "timestamp"), r);
            },
        },
        s: {
            order: s().defaultRules.u.order,
            requiredFirstCharacters: ["~"],
            match: s().inlineRegex(/^~~([\s\S]+?)~~(?!_)/),
            parse: s().defaultRules.u.parse,
        },
        spoiler: {
            order: y.Ay.order,
            requiredFirstCharacters: ["|"],
            match: (e) => D.VFs.exec(e),
            parse: (e, t, n) => ({ content: t(e[1], n), channelId: n.channelId }),
        },
        staticRouteLink: {
            order: y.Ay.order,
            requiredFirstCharacters: ["<"],
            match: (e) => D.P0V.exec(e),
            parse(e, t, n) {
                let [, i, r] = e,
                    a = (0, q.Q)(i),
                    s = (0, q.f)(_.A, i, r, eo(n)?.id);
                function l(e) {
                    return null == e ? null : [{ type: "text", content: e }];
                }
                return {
                    type: "staticRouteLink",
                    content: l(a + (null != s ? ` \u{203A} ${s}` : "")),
                    mainContent: l(a),
                    itemContent: l(s),
                    itemId: r,
                    id: i,
                    guildId: el(n.channelId),
                    channelId: i,
                };
            },
        },
        heading: j.A,
        list: Y.A,
        subtext: K.A,
    },
    ec = (0, Q.A)([ed, X]),
    eu = r().omit(ec, ["inlineCode", "codeBlock", "br", "blockQuote", "subtext", "soundboard"]),
    e_ = r().omit(ec, [
        "inlineCode",
        "codeBlock",
        "br",
        "blockQuote",
        "autolink",
        "url",
        "attachmentLink",
        "mention",
        "roleMention",
        "channelMention",
        "channelOrMessageUrl",
        "mediaPostLink",
        "subtext",
        "soundboard",
        "gameMention",
    ]),
    eE = r().omit(ec, [
        "codeBlock",
        "br",
        "mention",
        "channel",
        "roleMention",
        "attachmentLink",
        "subtext",
        "soundboard",
        "gameMention",
    ]),
    eA = r().omit(
        (0, Q.A)([
            ec,
            {
                inlineCode: {
                    match(e, t, n) {
                        let i = ec.codeBlock.match(e, t, n);
                        if (null != i) return i;
                        let r = ec.inlineCode.match(e, t, n);
                        if (null != r) return r;
                    },
                },
            },
        ]),
        ["blockQuote", "codeBlock", "br"],
    ),
    eh = r().omit(ec, ["codeBlock", "br", "blockQuote"]),
    eI = r().omit(ec, [
        "codeBlock",
        "br",
        "attachmentLink",
        "mention",
        "roleMention",
        "channel",
        "paragraph",
        "newline",
        "soundboard",
    ]),
    ef = r().omit(ec, ["codeBlock", "blockQuote", "br"]),
    ep = r().omit(ec, ["codeBlock", "br", "inlineCode"]);
function eT(e, t) {
    return 0 === e.length || 0 === t || "" === e.charAt(t - 1).trim();
}
function eg(e, t, n) {
    let i = t + n;
    return i === e.length || "" === e.charAt(i).trim();
}
let em = (0, Q.A)([
        {
            highlightWord: {
                order: -1,
                match(e, t) {
                    if (
                        (null != t.parseDepth && t.parseDepth > 10) ||
                        null == t.highlightWord ||
                        0 === t.highlightWord.length
                    )
                        return null;
                    let n = e.indexOf(t.highlightWord);
                    if (-1 === n) return null;
                    let i = !eT(e, n) || !eg(e, n, t.highlightWord.length);
                    if (i)
                        do
                            ((n = e.indexOf(t.highlightWord, n + 1)),
                                (i = !eT(e, n) || !eg(e, n, t.highlightWord.length)));
                        while (i && -1 !== n);
                    if (-1 === n) return null;
                    let r = e.substring(0, n),
                        a = e.substring(n + t.highlightWord.length);
                    return [e, t.highlightWord, r, a];
                },
                parse(e, t, n) {
                    let i = n.parseDepth ?? 0,
                        r = { ...n, parseDepth: i + 1 },
                        a = t(e[2], r),
                        s = t(e[3], r);
                    return [...a, { type: "highlight", content: e[1] }, ...s];
                },
            },
        },
        r().omit(ec, ["url"]),
    ]),
    eS = {
        RULES: ec,
        CHANNEL_TOPIC_RULES: eu,
        VOICE_CHANNEL_STATUS_RULES: e_,
        EMBED_TITLE_RULES: eE,
        INLINE_REPLY_RULES: eA,
        GUILD_VERIFICATION_FORM_RULES: eh,
        GUILD_EVENT_RULES: ef,
        PROFILE_BIO_RULES: eI,
        AUTO_MODERATION_SYSTEM_MESSAGE_RULES: em,
        NATIVE_SEARCH_RESULT_LINK_RULES: ep,
    };
