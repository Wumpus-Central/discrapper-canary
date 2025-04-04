n.d(t, { ZP: () => ee }), n(301563), n(47120), n(653041), n(13667), n(390547);
var r = n(392711),
    i = n.n(r),
    o = n(477660),
    a = n.n(o),
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
    b = n(430824),
    y = n(496675),
    v = n(699516),
    O = n(246946),
    I = n(594174),
    S = n(483360),
    T = n(176354),
    N = n(51144),
    A = n(981631),
    C = n(185923),
    R = n(388032);
function P(e, t, n) {
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
function w(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e, t, n) {
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
function M(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (t[0] !== e) return null;
    if ('"' !== t[1]) return x(e, t, n, r);
    let i = 2;
    for (; i < t.length; i++) {
        if ('\\' === t[i]) {
            i++;
            continue;
        }
        if ('"' === t[i]) break;
    }
    let o = t.substring(0, i + 1),
        a = (0, s.mA)(t.substring(2, i));
    return n
        .sortBy((e) => {
            let { text: t } = e;
            return -t.length;
        })
        .filter((e) => {
            let { text: t } = e;
            return a === t;
        })
        .map((e) => {
            let { id: t } = e;
            return [o, t, r];
        })
        .first();
}
function k(e) {
    return {
        order: e.order,
        match: e.match,
        parse: (t) => ({
            type: e.type,
            content: t[0]
        })
    };
}
function j(e) {
    return {
        match: a().anyScopeRegex(e),
        parse: (e) => ({
            type: 'text',
            content: e[0]
        })
    };
}
let U = u.Z.RULES,
    G = d.ZP,
    B = /^<@!?(\d+)>/,
    F = /^<@&(\d+)>/,
    V = /^<#(\d+)>/,
    Z = /^<a?:(\w+):(\d+)>/,
    H = /(@everyone|@here|@Clyde)\b/,
    W = {
        link: k(a().defaultRules.link),
        autolink: k(a().defaultRules.autolink),
        url: k(a().defaultRules.url),
        inlineCode: k(U.inlineCode),
        codeBlock: k(U.codeBlock),
        rawUserMention: j(B),
        rawRoleMention: j(F),
        rawChannelMention: j(V),
        rawEmoji: j(Z),
        mention: {
            match(e, t, n) {
                let r = n.split(' ').pop() + e;
                if (/^[^ ]+@[^ ]+\.[^ .]+/.test(r)) return null;
                let i = x('@', e, t.users, 'mention');
                if (i || (i = x('@', e, t.mentionableRoles, 'roleMention'))) return i;
                if (
                    !(i = x(
                        '@',
                        e,
                        t.users.map((e) => L(w({}, e), { text: e.text.split('#')[0] })),
                        'mention'
                    ))
                )
                    return null;
                let o = H.exec(e);
                if (null != o && i[0].length <= o[0].length) return null;
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
            match: (e, t) => M('#', e, t.channels),
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
            order: U.emoji.order,
            match: (e) => c.ZP.EMOJI_NAME_RE.exec(e),
            parse(e, t, n) {
                let [r, i] = e,
                    { customEmoji: o } = n,
                    a = Object.prototype.hasOwnProperty.call(o, i) ? o[i] : null;
                if (null != a) {
                    var s;
                    return {
                        type: 'customEmoticon',
                        content: '<'
                            .concat(!0 === a.animated ? 'a' : '', ':')
                            .concat(null != (s = a.originalName) ? s : a.name, ':')
                            .concat(a.id, '>'),
                        emoji: a
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
                    { emojiContext: o } = n,
                    a = o.getEmoticonByName(i);
                return null != a
                    ? {
                          type: 'customEmoticon',
                          content: '<'
                              .concat(!0 === a.animated ? 'a' : '', ':')
                              .concat(a.name, ':')
                              .concat(a.id, '>'),
                          emoji: a
                      }
                    : {
                          type: 'text',
                          content: r
                      };
            }
        },
        text: L(w({}, G), { match: (e, t) => ('string' == typeof t.textExclusions && '' !== t.textExclusions ? (0, d.T9)(t.textExclusions).exec(e) : null != G.match ? G.match(e, t, '') : null) })
    },
    Y = {
        inlineCode: k(U.inlineCode),
        codeBlock: k(U.codeBlock),
        mention: {
            match: a().anyScopeRegex(B),
            parse(e, t, n) {
                let { isNotification: r } = n,
                    i = I.default.getUser(e[1]);
                if (null == i) return { content: e[0] };
                let o = N.ZP.getUserTag(i, { identifiable: r && O.Z.enabled ? 'never' : 'always' });
                if (!r) return { content: '@'.concat(o) };
                {
                    let e = N.ZP.getGlobalName(i);
                    return { content: null != e ? '@'.concat(e) : '@'.concat(o) };
                }
            }
        },
        roleMention: {
            match: a().anyScopeRegex(F),
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
            match: a().anyScopeRegex(V),
            parse(e) {
                let t = m.Z.getChannel(e[1]);
                return { content: null == t ? e[0] : (0, s.F6)(t, I.default, v.Z, !0, !0) };
            }
        },
        emoji: {
            match: a().anyScopeRegex(Z),
            parse(e, t, n) {
                let [r, i, o] = e,
                    { guild: a } = n,
                    s = l.ZP.getDisambiguatedEmojiContext(a ? a.id : null).getById(o),
                    c = null != s ? s.name : i;
                return { content: ':'.concat(c, ':') };
            }
        },
        soundboard: {
            match: a().anyScopeRegex(f.hf),
            parse(e) {
                let [t, n, r] = e;
                return { content: '<sound:'.concat(n, ':').concat(r, '>') };
            }
        },
        spoiler: {
            match: a().anyScopeRegex(A.$92),
            parse: () => ({ content: '<'.concat(R.NW.string(R.t['F+x38P']).toLowerCase(), '>') })
        },
        staticRouteLink: {
            match: a().anyScopeRegex(A.PEY),
            parse: (e) => ({ content: '<id:'.concat(e[1], '>') })
        },
        timestamp: L(w({}, U.timestamp), {
            parse() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let r = U.timestamp.parse(...t);
                return 'text' === r.type ? { content: r.content } : { content: r.formatted };
            }
        }),
        text: w({}, G)
    };
[W, Y].forEach((e) => {
    Object.keys(e).forEach((t, n) => {
        e[t].order = n;
    });
});
let K = a().parserFor(W),
    z = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
function q(e, t, n) {
    if (null != n && ('customEmoticon' === t.type && n(t.emoji, !1), 'emoticon' === t.type || 'text' === t.type)) {
        let r,
            i = c.ZP.translateSurrogatesToInlineEmoji(t.content);
        for (; null !== (r = z.exec(i)); ) {
            let i;
            null != r[1] && '' !== r[1] ? e.emojiContext && (i = e.emojiContext.getById(r[1])) : (i = c.ZP.getByName(r[2])), i && n(i, t.isShortcut || !1);
        }
    }
}
function Q(e, t, n, r) {
    let i = '';
    return (
        e.forEach((e) => {
            if ((q(t, e, r), 'string' == typeof e.content))
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
function X(e, t, n) {
    return Q(K(e, t), t, c.ZP.translateInlineEmojiToSurrogates, n);
}
function J(e) {
    let t,
        n = null == e ? void 0 : e.getGuildId(),
        r = null != n ? b.Z.getGuild(n) : null,
        o = y.Z.can(A.Plq.MENTION_EVERYONE, e);
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
    let a = i()(
            t.reduce((e, t) => {
                let { userId: n } = t,
                    r = I.default.getUser(n);
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
                return o || t;
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
        users: a,
        channels: c.concat(u).concat(d),
        emojiContext: f,
        customEmoticonsRegex: m,
        customEmoji: h,
        textExclusions: _,
        disableErrorGuards: !0
    };
}
function $(e) {
    return e;
}
let ee = {
    parse(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            r = null != n ? n : J(e),
            i = {
                content: t,
                tts: !1,
                invalidEmojis: [],
                validNonShortcutEmojis: []
            };
        return (
            (i.content = X(i.content, r, (t, n) => {
                T.ZP.isEmojiPremiumLocked({
                    emoji: t,
                    channel: e,
                    intention: C.Hz.CHAT
                })
                    ? i.invalidEmojis.push(t)
                    : n || i.validNonShortcutEmojis.push(t);
            })),
            i
        );
    },
    parsePreprocessor: (e, t) => K(t, J(e)),
    unparse(e, t, n) {
        let r = m.Z.getChannel(t),
            o = null != r ? r.getGuildId() : null,
            s = null != o ? b.Z.getGuild(o) : null,
            l = n ? Y : i().omit(Y, ['spoiler', 'timestamp']),
            u = n ? $ : c.ZP.translateSurrogatesToInlineEmoji,
            d = a().parserFor(l),
            f = {
                inline: !0,
                guild: s,
                isNotification: n
            };
        return Q(d(e, f), f, u);
    }
};
