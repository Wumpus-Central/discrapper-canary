var i = r(47120);
var a = r(724458);
var s = r(653041);
var o = r(390547);
var l = r(392711),
    u = r.n(l),
    c = r(477660),
    d = r.n(c),
    f = r(933557),
    _ = r(339085),
    h = r(633302),
    p = r(428595),
    m = r(594199),
    g = r(11637),
    E = r(467798),
    v = r(601070),
    I = r(695346),
    T = r(592125),
    b = r(984933),
    y = r(271383),
    S = r(430824),
    A = r(496675),
    N = r(699516),
    C = r(246946),
    R = r(594174),
    O = r(483360),
    D = r(176354),
    L = r(51144),
    x = r(981631),
    w = r(185923),
    P = r(388032);
function M(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (n[0] !== e) return null;
    let a = n.substr(e.length);
    return r
        .sortBy((e) => {
            let { text: n } = e;
            return -n.length;
        })
        .filter((e) => {
            let { text: r } = e;
            return 1 === n.toLowerCase().indexOf(r.toLowerCase());
        })
        .sortBy((e) => {
            let { text: n } = e;
            return n === a ? 0 : 1;
        })
        .map((n) => {
            let { id: r, text: a } = n;
            return [e + a, r, i];
        })
        .first();
}
function k(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (n[0] !== e) return null;
    if ('"' !== n[1]) return M(e, n, r, i);
    let a = 2;
    for (; a < n.length; a++) {
        if ('\\' === n[a]) {
            a++;
            continue;
        }
        if ('"' === n[a]) break;
    }
    let s = n.substring(0, a + 1),
        o = (0, f.mA)(n.substring(2, a));
    return r
        .sortBy((e) => {
            let { text: n } = e;
            return -n.length;
        })
        .filter((e) => {
            let { text: n } = e;
            return o === n;
        })
        .map((e) => {
            let { id: n } = e;
            return [s, n, i];
        })
        .first();
}
function U(e) {
    return {
        order: e.order,
        match: e.match,
        parse: (n) => ({
            type: e.type,
            content: n[0]
        })
    };
}
function B(e) {
    return {
        match: d().anyScopeRegex(e),
        parse: (e) => ({
            type: 'text',
            content: e[0]
        })
    };
}
let G = p.Z.RULES,
    Z = m.ZP,
    F = /^<@!?(\d+)>/,
    V = /^<@&(\d+)>/,
    j = /^<#(\d+)>/,
    H = /^<a?:(\w+):(\d+)>/,
    Y = /(@everyone|@here|@Clyde)\b/,
    W = {
        link: U(d().defaultRules.link),
        autolink: U(d().defaultRules.autolink),
        url: U(d().defaultRules.url),
        inlineCode: U(G.inlineCode),
        codeBlock: U(G.codeBlock),
        rawUserMention: B(F),
        rawRoleMention: B(V),
        rawChannelMention: B(j),
        rawEmoji: B(H),
        mention: {
            match(e, n, r) {
                let i = r.split(' ').pop() + e;
                if (/^[^ ]+@[^ ]+\.[^ .]+/.test(i)) return null;
                let a = M('@', e, n.users, 'mention');
                if (a || (a = M('@', e, n.mentionableRoles, 'roleMention'))) return a;
                if (
                    !(a = M(
                        '@',
                        e,
                        n.users.map((e) => ({
                            ...e,
                            text: e.text.split('#')[0]
                        })),
                        'mention'
                    ))
                )
                    return null;
                let s = Y.exec(e);
                if (null != s && a[0].length <= s[0].length) return null;
                if ('' === r) {
                    let n = E.v.exec(e);
                    if (null != n && a[0].length <= n[0].length) return null;
                }
                return a;
            },
            parse(e) {
                let [, n, r] = e,
                    i = '@';
                return (
                    'roleMention' === r && (i += '&'),
                    {
                        type: r,
                        content: '<'.concat(i).concat(n, '>')
                    }
                );
            }
        },
        channel: {
            match: (e, n) => k('#', e, n.channels),
            parse: (e) => ({
                type: 'text',
                content: '<#'.concat(e[1], '>')
            })
        },
        emoticon: {
            match(e, n, r) {
                if (!I.ev.getSetting() || (0 !== r.length && !/\s$/.test(r))) return null;
                let i = h.ZP.EMOJI_SHORTCUT_RE.exec(e);
                return null == i || (i[0].length !== e.length && ' ' !== e[i[0].length] && '\n' !== e[i[0].length]) ? null : i;
            },
            parse: (e) => ({
                type: 'emoticon',
                content: h.ZP.convertShortcutToName(e[1]),
                isShortcut: !0
            })
        },
        emoji: {
            order: G.emoji.order,
            match: (e) => h.ZP.EMOJI_NAME_RE.exec(e),
            parse(e, n, r) {
                let [i, a] = e,
                    { customEmoji: s } = r,
                    o = Object.prototype.hasOwnProperty.call(s, a) ? s[a] : null;
                if (null != o) {
                    var l;
                    return {
                        type: 'customEmoticon',
                        content: '<'
                            .concat(!0 === o.animated ? 'a' : '', ':')
                            .concat(null !== (l = o.originalName) && void 0 !== l ? l : o.name, ':')
                            .concat(o.id, '>'),
                        emoji: o
                    };
                }
                return {
                    type: 'text',
                    content: i
                };
            }
        },
        customEmoticons: {
            match(e, n) {
                var r, i;
                return null !== (i = null === (r = n.customEmoticonsRegex) || void 0 === r ? void 0 : r.exec(e)) && void 0 !== i ? i : null;
            },
            parse(e, n, r) {
                let [i, a] = e,
                    { emojiContext: s } = r,
                    o = s.getEmoticonByName(a);
                return null != o
                    ? {
                          type: 'customEmoticon',
                          content: '<'
                              .concat(!0 === o.animated ? 'a' : '', ':')
                              .concat(o.name, ':')
                              .concat(o.id, '>'),
                          emoji: o
                      }
                    : {
                          type: 'text',
                          content: i
                      };
            }
        },
        text: {
            ...Z,
            match: (e, n) => ('string' == typeof n.textExclusions && '' !== n.textExclusions ? (0, m.T9)(n.textExclusions).exec(e) : null != Z.match ? Z.match(e, n, '') : null)
        }
    },
    K = {
        inlineCode: U(G.inlineCode),
        codeBlock: U(G.codeBlock),
        mention: {
            match: d().anyScopeRegex(F),
            parse(e, n, r) {
                let { isNotification: i } = r,
                    a = R.default.getUser(e[1]);
                if (null == a) return { content: e[0] };
                let s = L.ZP.getUserTag(a, { identifiable: i && C.Z.enabled ? 'never' : 'always' });
                if (!i) return { content: '@'.concat(s) };
                {
                    let e = L.ZP.getGlobalName(a);
                    return { content: null != e ? '@'.concat(e) : '@'.concat(s) };
                }
            }
        },
        roleMention: {
            match: d().anyScopeRegex(V),
            parse(e, n, r) {
                let { guild: i } = r;
                if (null != i) {
                    let n = S.Z.getRoles(i.id)[e[1]];
                    if (null != n) return { content: '@'.concat(n.name) };
                }
                return { content: e[0] };
            }
        },
        channel: {
            match: d().anyScopeRegex(j),
            parse(e) {
                let n = T.Z.getChannel(e[1]);
                return { content: null == n ? e[0] : (0, f.F6)(n, R.default, N.Z, !0, !0) };
            }
        },
        emoji: {
            match: d().anyScopeRegex(H),
            parse(e, n, r) {
                let [i, a, s] = e,
                    { guild: o } = r,
                    l = _.ZP.getDisambiguatedEmojiContext(o ? o.id : null).getById(s),
                    u = null != l ? l.name : a;
                return { content: ':'.concat(u, ':') };
            }
        },
        soundboard: {
            match: d().anyScopeRegex(g.hf),
            parse(e) {
                let [n, r, i] = e;
                return { content: '<sound:'.concat(r, ':').concat(i, '>') };
            }
        },
        spoiler: {
            match: d().anyScopeRegex(x.$92),
            parse: () => ({ content: '<'.concat(P.intl.string(P.t['F+x38P']).toLowerCase(), '>') })
        },
        staticRouteLink: {
            match: d().anyScopeRegex(x.PEY),
            parse: (e) => ({ content: '<id:'.concat(e[1], '>') })
        },
        timestamp: {
            ...G.timestamp,
            parse() {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                let i = G.timestamp.parse(...n);
                return 'text' === i.type ? { content: i.content } : { content: i.formatted };
            }
        },
        text: { ...Z }
    };
[W, K].forEach((e) => {
    Object.keys(e).forEach((n, r) => {
        e[n].order = r;
    });
});
let z = d().parserFor(W),
    q = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
function Q(e, n, r) {
    if (null != r) {
        if (('customEmoticon' === n.type && r(n.emoji, !1), 'emoticon' === n.type || 'text' === n.type)) {
            let i;
            let a = h.ZP.translateSurrogatesToInlineEmoji(n.content);
            for (; null !== (i = q.exec(a)); ) {
                let a;
                null != i[1] && '' !== i[1] ? e.emojiContext && (a = e.emojiContext.getById(i[1])) : (a = h.ZP.getByName(i[2])), a && r(a, n.isShortcut || !1);
            }
        }
    }
}
function X(e, n, r, i) {
    let a = '';
    return (
        e.forEach((e) => {
            if ((Q(n, e, i), 'string' == typeof e.content))
                switch (e.type) {
                    case 'codeBlock':
                    case 'inlineCode':
                    case 'mention':
                    case 'roleMention':
                    case 'channel':
                    case 'emoji':
                        a += e.content;
                        break;
                    default:
                        a += r(e.content);
                }
            else e.content.constructor === Array ? (a += X(e.content, n, r, i)) : console.warn('Unknown message item type: ', e);
        }),
        a
    );
}
function J(e, n, r) {
    return X(z(e, n), n, h.ZP.translateInlineEmojiToSurrogates, r);
}
function $(e) {
    let n;
    let r = null == e ? void 0 : e.getGuildId(),
        i = null != r ? S.Z.getGuild(r) : null,
        a = A.Z.can(x.Plq.MENTION_EVERYONE, e);
    n = (null == e ? void 0 : e.isPrivate())
        ? e.recipients.map((e) => ({
              userId: e,
              nick: null
          }))
        : null != r
          ? y.ZP.getMembers(r).map((e) => {
                let { userId: n, nick: r } = e;
                return {
                    userId: n,
                    nick: r
                };
            })
          : [];
    let s = u()(
            n.reduce((e, n) => {
                let { userId: r } = n,
                    i = R.default.getUser(r);
                return null == i
                    ? e
                    : (e.push({
                          id: r,
                          text: i.tag
                      }),
                      e);
            }, [])
        ),
        o = u()(null != i ? S.Z.getRoles(i.id) : {})
            .values()
            .filter((e) => {
                let { mentionable: n } = e;
                return a || n;
            })
            .map((e) => {
                let { id: n, name: r } = e;
                return {
                    id: n,
                    text: r
                };
            }),
        l = u()(b.ZP.getTextChannelNameDisambiguations(r)).map((e) => {
            let { id: n, name: r } = e;
            return {
                id: n,
                text: r
            };
        }),
        c =
            null != r
                ? u()(O.k1)
                      .filter((e) => e !== b.sH)
                      .flatMap((e) =>
                          b.ZP.getChannels(r)[e].map((e) => ({
                              id: e.channel.id,
                              text: e.channel.name
                          }))
                      )
                      .value()
                : [],
        d = v.Z.computeAllActiveJoinedThreads(r).map((e) => ({
            id: e.id,
            text: e.name
        })),
        f = _.ZP.getDisambiguatedEmojiContext(r),
        h = f.getEscapedCustomEmoticonNames(),
        p = f.getCustomEmoji(),
        m = f.getCustomEmoticonRegex();
    return {
        inline: !0,
        mentionableRoles: o,
        guild: i,
        users: s,
        channels: l.concat(c).concat(d),
        emojiContext: f,
        customEmoticonsRegex: m,
        customEmoji: p,
        textExclusions: h,
        disableErrorGuards: !0
    };
}
function ee(e) {
    return e;
}
n.ZP = {
    parse(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            i = null != r ? r : $(e),
            a = {
                content: n,
                tts: !1,
                invalidEmojis: [],
                validNonShortcutEmojis: []
            };
        return (
            (a.content = J(a.content, i, (n, r) => {
                D.ZP.isEmojiPremiumLocked({
                    emoji: n,
                    channel: e,
                    intention: w.Hz.CHAT
                })
                    ? a.invalidEmojis.push(n)
                    : !r && a.validNonShortcutEmojis.push(n);
            })),
            a
        );
    },
    parsePreprocessor: (e, n) => z(n, $(e)),
    unparse(e, n, r) {
        let i = T.Z.getChannel(n),
            a = null != i ? i.getGuildId() : null,
            s = null != a ? S.Z.getGuild(a) : null,
            o = r ? K : u().omit(K, ['spoiler', 'timestamp']),
            l = r ? ee : h.ZP.translateSurrogatesToInlineEmoji,
            c = d().parserFor(o),
            f = {
                inline: !0,
                guild: s,
                isNotification: r
            };
        return X(c(e, f), f, l);
    }
};
