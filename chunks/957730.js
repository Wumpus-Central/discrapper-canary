(n.d(t, { ZP: () => et }), n(35282), n(388685), n(539854), n(361932), n(187205));
var r = n(392711),
    i = n.n(r),
    a = n(159635),
    o = n.n(a),
    s = n(933557),
    l = n(339085),
    c = n(633302),
    u = n(428595),
    d = n(594199),
    f = n(11637),
    _ = n(467798),
    p = n(601070),
    h = n(695346),
    m = n(592125),
    g = n(984933),
    E = n(271383),
    b = n(485386),
    y = n(430824),
    O = n(496675),
    v = n(699516),
    I = n(246946),
    T = n(594174),
    S = n(483360),
    A = n(176354),
    N = n(51144),
    C = n(981631),
    R = n(185923),
    P = n(388032);
function w(e, t, n) {
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
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            }));
    }
    return e;
}
function L(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function M(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (t[0] !== e) return null;
    let i = t.substr(e.length);
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
            return +(t !== i);
        })
        .map((t) => {
            let { id: n, text: i } = t;
            return [e + i, n, r];
        })
        .first();
}
function k(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (t[0] !== e) return null;
    if ('"' !== t[1]) return M(e, t, n, r);
    let i = 2;
    for (; i < t.length; i++) {
        if ('\\' === t[i]) {
            i++;
            continue;
        }
        if ('"' === t[i]) break;
    }
    let a = t.substring(0, i + 1),
        o = (0, s.mA)(t.substring(2, i));
    return n
        .sortBy((e) => {
            let { text: t } = e;
            return -t.length;
        })
        .filter((e) => {
            let { text: t } = e;
            return o === t;
        })
        .map((e) => {
            let { id: t } = e;
            return [a, t, r];
        })
        .first();
}
function j(e) {
    return {
        order: e.order,
        match: e.match,
        parse: (t) => ({
            type: e.type,
            content: t[0]
        })
    };
}
function U(e) {
    return {
        match: o().anyScopeRegex(e),
        parse: (e) => ({
            type: 'text',
            content: e[0]
        })
    };
}
let G = u.Z.RULES,
    B = d.ZP,
    V = /^<@!?(\d+)>/,
    F = /^<@&(\d+)>/,
    Z = /^<#(\d+)>/,
    H = /^<a?:(\w+):(\d+)>/,
    Y = /(@everyone|@here|@Clyde)\b/,
    W = {
        link: j(o().defaultRules.link),
        autolink: j(o().defaultRules.autolink),
        url: j(o().defaultRules.url),
        inlineCode: j(G.inlineCode),
        codeBlock: j(G.codeBlock),
        rawUserMention: U(V),
        rawRoleMention: U(F),
        rawChannelMention: U(Z),
        rawEmoji: U(H),
        mention: {
            match(e, t, n) {
                let r = n.split(' ').pop() + e;
                if (/^[^ ]+@[^ ]+\.[^ .]+/.test(r)) return null;
                let i = M('@', e, t.users, 'mention');
                if (i || (i = M('@', e, t.mentionableRoles, 'roleMention'))) return i;
                if (
                    !(i = M(
                        '@',
                        e,
                        t.users.map((e) => x(D({}, e), { text: e.text.split('#')[0] })),
                        'mention'
                    ))
                )
                    return null;
                let a = Y.exec(e);
                if (null != a && i[0].length <= a[0].length) return null;
                if ('' === n) {
                    let t = _.v.exec(e);
                    if (null != t && i[0].length <= t[0].length) return null;
                }
                return i;
            },
            parse(e) {
                let [, t, n] = e,
                    r = '@';
                return (
                    'roleMention' === n && (r += '&'),
                    {
                        type: n,
                        content: '<'.concat(r).concat(t, '>')
                    }
                );
            }
        },
        channel: {
            match: (e, t) => k('#', e, t.channels),
            parse: (e) => ({
                type: 'text',
                content: '<#'.concat(e[1], '>')
            })
        },
        emoticon: {
            match(e, t, n) {
                if (!h.ev.getSetting() || (0 !== n.length && !/\s$/.test(n))) return null;
                let r = c.ZP.EMOJI_SHORTCUT_RE.exec(e);
                return null == r || (r[0].length !== e.length && ' ' !== e[r[0].length] && '\n' !== e[r[0].length]) ? null : r;
            },
            parse: (e) => ({
                type: 'emoticon',
                content: c.ZP.convertShortcutToName(e[1]),
                isShortcut: !0
            })
        },
        emoji: {
            order: G.emoji.order,
            match: (e) => c.ZP.EMOJI_NAME_RE.exec(e),
            parse(e, t, n) {
                let [r, i] = e,
                    { customEmoji: a } = n,
                    o = Object.prototype.hasOwnProperty.call(a, i) ? a[i] : null;
                if (null != o) {
                    var s;
                    return {
                        type: 'customEmoticon',
                        content: '<'
                            .concat(!0 === o.animated ? 'a' : '', ':')
                            .concat(null != (s = o.originalName) ? s : o.name, ':')
                            .concat(o.id, '>'),
                        emoji: o
                    };
                }
                return {
                    type: 'text',
                    content: r
                };
            }
        },
        customEmoticons: {
            match(e, t) {
                var n, r;
                return null != (r = null == (n = t.customEmoticonsRegex) ? void 0 : n.exec(e)) ? r : null;
            },
            parse(e, t, n) {
                let [r, i] = e,
                    { emojiContext: a } = n,
                    o = a.getEmoticonByName(i);
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
                          content: r
                      };
            }
        },
        text: x(D({}, B), { match: (e, t) => ('string' == typeof t.textExclusions && '' !== t.textExclusions ? (0, d.T9)(t.textExclusions).exec(e) : null != B.match ? B.match(e, t, '') : null) })
    },
    K = {
        inlineCode: j(G.inlineCode),
        codeBlock: j(G.codeBlock),
        mention: {
            match: o().anyScopeRegex(V),
            parse(e, t, n) {
                let { isNotification: r, guild: i } = n,
                    a = T.default.getUser(e[1]);
                if (null == a) return { content: e[0] };
                let o = N.ZP.getUserTag(a, { identifiable: r && I.Z.enabled ? 'never' : 'always' });
                if (r) {
                    let e = N.ZP.getGlobalName(a);
                    return { content: null != e ? '@'.concat(e) : '@'.concat(o) };
                }
                {
                    if (a.bot) return { content: '@'.concat(o) };
                    let e = '';
                    if ((null == i ? void 0 : i.id) != null) {
                        let t = b.Z.getRoles(i.id);
                        e = null != t && Object.values(t).some((e) => o.toLowerCase().startsWith(e.name.toLowerCase())) ? '#'.concat(''.concat(a.discriminator).padStart(4, '0')) : '';
                    }
                    return { content: '@'.concat(o).concat(e) };
                }
            }
        },
        roleMention: {
            match: o().anyScopeRegex(F),
            parse(e, t, n) {
                let { guild: r } = n;
                if (null != r) {
                    let t = b.Z.getRoles(r.id)[e[1]];
                    if (null != t) return { content: '@'.concat(t.name) };
                }
                return { content: e[0] };
            }
        },
        channel: {
            match: o().anyScopeRegex(Z),
            parse(e) {
                let t = m.Z.getChannel(e[1]);
                return { content: null == t ? e[0] : (0, s.F6)(t, T.default, v.Z, !0, !0) };
            }
        },
        emoji: {
            match: o().anyScopeRegex(H),
            parse(e, t, n) {
                let [r, i, a] = e,
                    { guild: o } = n,
                    s = l.ZP.getDisambiguatedEmojiContext(o ? o.id : null).getById(a),
                    c = null != s ? s.name : i;
                return { content: ':'.concat(c, ':') };
            }
        },
        soundboard: {
            match: o().anyScopeRegex(f.hf),
            parse(e) {
                let [t, n, r] = e;
                return { content: '<sound:'.concat(n, ':').concat(r, '>') };
            }
        },
        spoiler: {
            match: o().anyScopeRegex(C.$92),
            parse: () => ({ content: '<'.concat(P.intl.string(P.t['F+x38P']).toLowerCase(), '>') })
        },
        staticRouteLink: {
            match: o().anyScopeRegex(C.PEY),
            parse: (e) => ({ content: '<id:'.concat(e[1], '>') })
        },
        timestamp: x(D({}, G.timestamp), {
            parse() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let r = G.timestamp.parse(...t);
                return 'text' === r.type ? { content: r.content } : { content: r.formatted };
            }
        }),
        text: D({}, B)
    };
[W, K].forEach((e) => {
    Object.keys(e).forEach((t, n) => {
        e[t].order = n;
    });
});
let z = o().parserFor(W),
    q = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
function X(e, t, n) {
    if (null != n && ('customEmoticon' === t.type && n(t.emoji, !1), 'emoticon' === t.type || 'text' === t.type)) {
        let r,
            i = c.ZP.translateSurrogatesToInlineEmoji(t.content);
        for (; null !== (r = q.exec(i)); ) {
            let i;
            (null != r[1] && '' !== r[1] ? e.emojiContext && (i = e.emojiContext.getById(r[1])) : (i = c.ZP.getByName(r[2])), i && n(i, t.isShortcut || !1));
        }
    }
}
function Q(e, t, n, r) {
    let i = '';
    return (
        e.forEach((e) => {
            if ((X(t, e, r), 'string' == typeof e.content))
                switch (e.type) {
                    case 'codeBlock':
                    case 'inlineCode':
                    case 'mention':
                    case 'roleMention':
                    case 'channel':
                    case 'emoji':
                        i += e.content;
                        break;
                    default:
                        i += n(e.content);
                }
            else e.content.constructor === Array ? (i += Q(e.content, t, n, r)) : console.warn('Unknown message item type: ', e);
        }),
        i
    );
}
function J(e, t, n) {
    return Q(z(e, t), t, c.ZP.translateInlineEmojiToSurrogates, n);
}
function $(e) {
    let t,
        n = null == e ? void 0 : e.getGuildId(),
        r = null != n ? y.Z.getGuild(n) : null,
        a = O.Z.can(C.Plq.MENTION_EVERYONE, e);
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
    let o = i()(
            t.reduce((e, t) => {
                let { userId: n } = t,
                    r = T.default.getUser(n);
                return (
                    null == r ||
                        e.push({
                            id: n,
                            text: r.tag
                        }),
                    e
                );
            }, [])
        ),
        s = i()(null != r ? b.Z.getRoles(r.id) : {})
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
        c = i()(g.ZP.getTextChannelNameDisambiguations(n)).map((e) => {
            let { id: t, name: n } = e;
            return {
                id: t,
                text: n
            };
        }),
        u =
            null != n
                ? i()(S.k1)
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
        mentionableRoles: s,
        guild: r,
        users: o,
        channels: c.concat(u).concat(d),
        emojiContext: f,
        customEmoticonsRegex: m,
        customEmoji: h,
        textExclusions: _,
        disableErrorGuards: !0
    };
}
function ee(e) {
    return e;
}
let et = {
    parse(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            r = null != n ? n : $(e),
            i = {
                content: t,
                tts: !1,
                invalidEmojis: [],
                validNonShortcutEmojis: []
            };
        return (
            (i.content = J(i.content, r, (t, n) => {
                A.ZP.isEmojiPremiumLocked({
                    emoji: t,
                    channel: e,
                    intention: R.Hz.CHAT
                })
                    ? i.invalidEmojis.push(t)
                    : n || i.validNonShortcutEmojis.push(t);
            })),
            i
        );
    },
    parsePreprocessor: (e, t) => z(t, $(e)),
    unparse(e, t, n) {
        let r = m.Z.getChannel(t),
            a = null != r ? r.getGuildId() : null,
            s = null != a ? y.Z.getGuild(a) : null,
            l = n ? K : i().omit(K, ['spoiler', 'timestamp']),
            u = n ? ee : c.ZP.translateSurrogatesToInlineEmoji,
            d = o().parserFor(l),
            f = {
                inline: !0,
                guild: s,
                isNotification: n
            };
        return Q(d(e, f), f, u);
    }
};
