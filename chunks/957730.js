n.d(t, { ZP: () => Q }), n(47120), n(724458), n(653041), n(390547);
var i = n(392711),
    r = n.n(i),
    a = n(477660),
    s = n.n(a),
    o = n(933557),
    l = n(339085),
    u = n(633302),
    c = n(428595),
    d = n(594199),
    f = n(11637),
    _ = n(467798),
    p = n(601070),
    h = n(695346),
    m = n(592125),
    g = n(984933),
    E = n(271383),
    v = n(430824),
    y = n(496675),
    I = n(699516),
    b = n(246946),
    T = n(594174),
    S = n(483360),
    A = n(176354),
    N = n(51144),
    C = n(981631),
    R = n(185923),
    O = n(388032);
function D(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (t[0] !== e) return null;
    let r = t.substr(e.length);
    return n
        .sortBy((e) => {
            let { text: t } = e;
            return -t.length;
        })
        .filter((e) => {
            let { text: n } = e;
            return 1 === t.toLowerCase().indexOf(n.toLowerCase());
        })
        .sortBy((e) => {
            let { text: t } = e;
            return t === r ? 0 : 1;
        })
        .map((t) => {
            let { id: n, text: r } = t;
            return [e + r, n, i];
        })
        .first();
}
function x(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (t[0] !== e) return null;
    if ('"' !== t[1]) return D(e, t, n, i);
    let r = 2;
    for (; r < t.length; r++) {
        if ('\\' === t[r]) {
            r++;
            continue;
        }
        if ('"' === t[r]) break;
    }
    let a = t.substring(0, r + 1),
        s = (0, o.mA)(t.substring(2, r));
    return n
        .sortBy((e) => {
            let { text: t } = e;
            return -t.length;
        })
        .filter((e) => {
            let { text: t } = e;
            return s === t;
        })
        .map((e) => {
            let { id: t } = e;
            return [a, t, i];
        })
        .first();
}
function L(e) {
    return {
        order: e.order,
        match: e.match,
        parse: (t) => ({
            type: e.type,
            content: t[0]
        })
    };
}
function P(e) {
    return {
        match: s().anyScopeRegex(e),
        parse: (e) => ({
            type: 'text',
            content: e[0]
        })
    };
}
let w = c.Z.RULES,
    M = d.ZP,
    k = /^<@!?(\d+)>/,
    U = /^<@&(\d+)>/,
    G = /^<#(\d+)>/,
    B = /^<a?:(\w+):(\d+)>/,
    Z = /(@everyone|@here|@Clyde)\b/,
    F = {
        link: L(s().defaultRules.link),
        autolink: L(s().defaultRules.autolink),
        url: L(s().defaultRules.url),
        inlineCode: L(w.inlineCode),
        codeBlock: L(w.codeBlock),
        rawUserMention: P(k),
        rawRoleMention: P(U),
        rawChannelMention: P(G),
        rawEmoji: P(B),
        mention: {
            match(e, t, n) {
                let i = n.split(' ').pop() + e;
                if (/^[^ ]+@[^ ]+\.[^ .]+/.test(i)) return null;
                let r = D('@', e, t.users, 'mention');
                if (r || (r = D('@', e, t.mentionableRoles, 'roleMention'))) return r;
                if (
                    !(r = D(
                        '@',
                        e,
                        t.users.map((e) => ({
                            ...e,
                            text: e.text.split('#')[0]
                        })),
                        'mention'
                    ))
                )
                    return null;
                let a = Z.exec(e);
                if (null != a && r[0].length <= a[0].length) return null;
                if ('' === n) {
                    let t = _.v.exec(e);
                    if (null != t && r[0].length <= t[0].length) return null;
                }
                return r;
            },
            parse(e) {
                let [, t, n] = e,
                    i = '@';
                return (
                    'roleMention' === n && (i += '&'),
                    {
                        type: n,
                        content: '<'.concat(i).concat(t, '>')
                    }
                );
            }
        },
        channel: {
            match: (e, t) => x('#', e, t.channels),
            parse: (e) => ({
                type: 'text',
                content: '<#'.concat(e[1], '>')
            })
        },
        emoticon: {
            match(e, t, n) {
                if (!h.ev.getSetting() || (0 !== n.length && !/\s$/.test(n))) return null;
                let i = u.ZP.EMOJI_SHORTCUT_RE.exec(e);
                return null == i || (i[0].length !== e.length && ' ' !== e[i[0].length] && '\n' !== e[i[0].length]) ? null : i;
            },
            parse: (e) => ({
                type: 'emoticon',
                content: u.ZP.convertShortcutToName(e[1]),
                isShortcut: !0
            })
        },
        emoji: {
            order: w.emoji.order,
            match: (e) => u.ZP.EMOJI_NAME_RE.exec(e),
            parse(e, t, n) {
                let [i, r] = e,
                    { customEmoji: a } = n,
                    s = Object.prototype.hasOwnProperty.call(a, r) ? a[r] : null;
                if (null != s) {
                    var o;
                    return {
                        type: 'customEmoticon',
                        content: '<'
                            .concat(!0 === s.animated ? 'a' : '', ':')
                            .concat(null !== (o = s.originalName) && void 0 !== o ? o : s.name, ':')
                            .concat(s.id, '>'),
                        emoji: s
                    };
                }
                return {
                    type: 'text',
                    content: i
                };
            }
        },
        customEmoticons: {
            match(e, t) {
                var n, i;
                return null !== (i = null === (n = t.customEmoticonsRegex) || void 0 === n ? void 0 : n.exec(e)) && void 0 !== i ? i : null;
            },
            parse(e, t, n) {
                let [i, r] = e,
                    { emojiContext: a } = n,
                    s = a.getEmoticonByName(r);
                return null != s
                    ? {
                          type: 'customEmoticon',
                          content: '<'
                              .concat(!0 === s.animated ? 'a' : '', ':')
                              .concat(s.name, ':')
                              .concat(s.id, '>'),
                          emoji: s
                      }
                    : {
                          type: 'text',
                          content: i
                      };
            }
        },
        text: {
            ...M,
            match: (e, t) => ('string' == typeof t.textExclusions && '' !== t.textExclusions ? (0, d.T9)(t.textExclusions).exec(e) : null != M.match ? M.match(e, t, '') : null)
        }
    },
    V = {
        inlineCode: L(w.inlineCode),
        codeBlock: L(w.codeBlock),
        mention: {
            match: s().anyScopeRegex(k),
            parse(e, t, n) {
                let { isNotification: i } = n,
                    r = T.default.getUser(e[1]);
                if (null == r) return { content: e[0] };
                let a = N.ZP.getUserTag(r, { identifiable: i && b.Z.enabled ? 'never' : 'always' });
                if (!i) return { content: '@'.concat(a) };
                {
                    let e = N.ZP.getGlobalName(r);
                    return { content: null != e ? '@'.concat(e) : '@'.concat(a) };
                }
            }
        },
        roleMention: {
            match: s().anyScopeRegex(U),
            parse(e, t, n) {
                let { guild: i } = n;
                if (null != i) {
                    let t = v.Z.getRoles(i.id)[e[1]];
                    if (null != t) return { content: '@'.concat(t.name) };
                }
                return { content: e[0] };
            }
        },
        channel: {
            match: s().anyScopeRegex(G),
            parse(e) {
                let t = m.Z.getChannel(e[1]);
                return { content: null == t ? e[0] : (0, o.F6)(t, T.default, I.Z, !0, !0) };
            }
        },
        emoji: {
            match: s().anyScopeRegex(B),
            parse(e, t, n) {
                let [i, r, a] = e,
                    { guild: s } = n,
                    o = l.ZP.getDisambiguatedEmojiContext(s ? s.id : null).getById(a),
                    u = null != o ? o.name : r;
                return { content: ':'.concat(u, ':') };
            }
        },
        soundboard: {
            match: s().anyScopeRegex(f.hf),
            parse(e) {
                let [t, n, i] = e;
                return { content: '<sound:'.concat(n, ':').concat(i, '>') };
            }
        },
        spoiler: {
            match: s().anyScopeRegex(C.$92),
            parse: () => ({ content: '<'.concat(O.intl.string(O.t['F+x38P']).toLowerCase(), '>') })
        },
        staticRouteLink: {
            match: s().anyScopeRegex(C.PEY),
            parse: (e) => ({ content: '<id:'.concat(e[1], '>') })
        },
        timestamp: {
            ...w.timestamp,
            parse() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let i = w.timestamp.parse(...t);
                return 'text' === i.type ? { content: i.content } : { content: i.formatted };
            }
        },
        text: { ...M }
    };
[F, V].forEach((e) => {
    Object.keys(e).forEach((t, n) => {
        e[t].order = n;
    });
});
let j = s().parserFor(F),
    H = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
function Y(e, t, n) {
    if (null != n && ('customEmoticon' === t.type && n(t.emoji, !1), 'emoticon' === t.type || 'text' === t.type)) {
        let i;
        let r = u.ZP.translateSurrogatesToInlineEmoji(t.content);
        for (; null !== (i = H.exec(r)); ) {
            let r;
            null != i[1] && '' !== i[1] ? e.emojiContext && (r = e.emojiContext.getById(i[1])) : (r = u.ZP.getByName(i[2])), r && n(r, t.isShortcut || !1);
        }
    }
}
function W(e, t, n, i) {
    let r = '';
    return (
        e.forEach((e) => {
            if ((Y(t, e, i), 'string' == typeof e.content))
                switch (e.type) {
                    case 'codeBlock':
                    case 'inlineCode':
                    case 'mention':
                    case 'roleMention':
                    case 'channel':
                    case 'emoji':
                        r += e.content;
                        break;
                    default:
                        r += n(e.content);
                }
            else e.content.constructor === Array ? (r += W(e.content, t, n, i)) : console.warn('Unknown message item type: ', e);
        }),
        r
    );
}
function K(e, t, n) {
    return W(j(e, t), t, u.ZP.translateInlineEmojiToSurrogates, n);
}
function z(e) {
    let t;
    let n = null == e ? void 0 : e.getGuildId(),
        i = null != n ? v.Z.getGuild(n) : null,
        a = y.Z.can(C.Plq.MENTION_EVERYONE, e);
    t = (null == e ? void 0 : e.isPrivate())
        ? e.recipients.map((e) => ({
              userId: e,
              nick: null
          }))
        : null != n
          ? E.ZP.getMembers(n).map((e) => {
                let { userId: t, nick: n } = e;
                return {
                    userId: t,
                    nick: n
                };
            })
          : [];
    let s = r()(
            t.reduce((e, t) => {
                let { userId: n } = t,
                    i = T.default.getUser(n);
                return (
                    null == i ||
                        e.push({
                            id: n,
                            text: i.tag
                        }),
                    e
                );
            }, [])
        ),
        o = r()(null != i ? v.Z.getRoles(i.id) : {})
            .values()
            .filter((e) => {
                let { mentionable: t } = e;
                return a || t;
            })
            .map((e) => {
                let { id: t, name: n } = e;
                return {
                    id: t,
                    text: n
                };
            }),
        u = r()(g.ZP.getTextChannelNameDisambiguations(n)).map((e) => {
            let { id: t, name: n } = e;
            return {
                id: t,
                text: n
            };
        }),
        c =
            null != n
                ? r()(S.k1)
                      .filter((e) => e !== g.sH)
                      .flatMap((e) =>
                          g.ZP.getChannels(n)[e].map((e) => ({
                              id: e.channel.id,
                              text: e.channel.name
                          }))
                      )
                      .value()
                : [],
        d = p.Z.computeAllActiveJoinedThreads(n).map((e) => ({
            id: e.id,
            text: e.name
        })),
        f = l.ZP.getDisambiguatedEmojiContext(n),
        _ = f.getEscapedCustomEmoticonNames(),
        h = f.getCustomEmoji(),
        m = f.getCustomEmoticonRegex();
    return {
        inline: !0,
        mentionableRoles: o,
        guild: i,
        users: s,
        channels: u.concat(c).concat(d),
        emojiContext: f,
        customEmoticonsRegex: m,
        customEmoji: h,
        textExclusions: _,
        disableErrorGuards: !0
    };
}
function q(e) {
    return e;
}
let Q = {
    parse(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            i = null != n ? n : z(e),
            r = {
                content: t,
                tts: !1,
                invalidEmojis: [],
                validNonShortcutEmojis: []
            };
        return (
            (r.content = K(r.content, i, (t, n) => {
                A.ZP.isEmojiPremiumLocked({
                    emoji: t,
                    channel: e,
                    intention: R.Hz.CHAT
                })
                    ? r.invalidEmojis.push(t)
                    : n || r.validNonShortcutEmojis.push(t);
            })),
            r
        );
    },
    parsePreprocessor: (e, t) => j(t, z(e)),
    unparse(e, t, n) {
        let i = m.Z.getChannel(t),
            a = null != i ? i.getGuildId() : null,
            o = null != a ? v.Z.getGuild(a) : null,
            l = n ? V : r().omit(V, ['spoiler', 'timestamp']),
            c = n ? q : u.ZP.translateSurrogatesToInlineEmoji,
            d = s().parserFor(l),
            f = {
                inline: !0,
                guild: o,
                isNotification: n
            };
        return W(d(e, f), f, c);
    }
};
