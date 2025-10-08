n.d(t, { ZP: () => ea }), n(35282), n(388685), n(539854), n(361932), n(187205);
var r = n(392711),
    i = n.n(r),
    a = n(159635),
    o = n.n(a),
    s = n(933557),
    l = n(339085),
    c = n(633302),
    u = n(627050),
    d = n(428595),
    f = n(594199),
    _ = n(11637),
    p = n(467798),
    h = n(601070),
    m = n(695346),
    g = n(592125),
    E = n(77498),
    b = n(984933),
    y = n(271383),
    O = n(485386),
    v = n(430824),
    I = n(496675),
    T = n(699516),
    S = n(246946),
    A = n(594174),
    C = n(483360),
    N = n(176354),
    R = n(5192),
    P = n(51144),
    w = n(981631),
    D = n(185923),
    L = n(388032);
function x(e, t, n) {
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
function M(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
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
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function U(e, t, n) {
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
function G(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (t[0] !== e) return null;
    if ('"' !== t[1]) return U(e, t, n, r);
    let i = 2;
    for (; i < t.length; i++) {
        if ("\\" === t[i]) {
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
function B(e) {
    return {
        order: e.order,
        match: e.match,
        parse: (t) => ({
            type: e.type,
            content: t[0],
        }),
    };
}
function Z(e) {
    return {
        match: o().anyScopeRegex(e),
        parse: (e) => ({
            type: "text",
            content: e[0],
        }),
    };
}
let F = d.Z.RULES,
    V = f.ZP,
    H = /^<@!?(\d+)>/,
    Y = /^<@&(\d+)>/,
    W = /^<@\$(\d+)>/,
    K = /^<#(\d+)>/,
    z = /^<a?:(\w+):(\d+)>/,
    q = /(@everyone|@here|@Clyde)\b/,
    X = {
        link: B(o().defaultRules.link),
        autolink: B(o().defaultRules.autolink),
        url: B(o().defaultRules.url),
        inlineCode: B(F.inlineCode),
        codeBlock: B(F.codeBlock),
        rawUserMention: Z(H),
        rawRoleMention: Z(Y),
        rawChannelMention: Z(K),
        rawEmoji: Z(z),
        mention: {
            match(e, t, n) {
                let r = n.split(" ").pop() + e;
                if (/^[^ ]+@[^ ]+\.[^ .]+/.test(r)) return null;
                let i = U("@", e, t.users, "mention");
                if (i || (i = U("@", e, t.mentionableRoles, "roleMention"))) return i;
                if (
                    !(i = U(
                        "@",
                        e,
                        t.users.map((e) => k(M({}, e), { text: e.text.split("#")[0] })),
                        "mention",
                    ))
                )
                    return null;
                let a = q.exec(e);
                if (null != a && i[0].length <= a[0].length) return null;
                if ("" === n) {
                    let t = p.v.exec(e);
                    if (null != t && i[0].length <= t[0].length) return null;
                }
                return i;
            },
            parse(e) {
                let [, t, n] = e,
                    r = "@";
                return (
                    "roleMention" === n && (r += "&"),
                    {
                        type: n,
                        content: "<".concat(r).concat(t, ">"),
                    }
                );
            },
        },
        channel: {
            match: (e, t) => G("#", e, t.channels),
            parse: (e) => ({
                type: "text",
                content: "<#".concat(e[1], ">"),
            }),
        },
        emoticon: {
            match(e, t, n) {
                if (!m.ev.getSetting() || (0 !== n.length && !/\s$/.test(n))) return null;
                let r = c.ZP.EMOJI_SHORTCUT_RE.exec(e);
                return null == r || (r[0].length !== e.length && " " !== e[r[0].length] && "\n" !== e[r[0].length])
                    ? null
                    : r;
            },
            parse: (e) => ({
                type: "emoticon",
                content: c.ZP.convertShortcutToName(e[1]),
                isShortcut: !0,
            }),
        },
        emoji: {
            order: F.emoji.order,
            match: (e) => c.ZP.EMOJI_NAME_RE.exec(e),
            parse(e, t, n) {
                let [r, i] = e,
                    { customEmoji: a } = n,
                    o = Object.prototype.hasOwnProperty.call(a, i) ? a[i] : null;
                if (null != o) {
                    var s;
                    return {
                        type: "customEmoticon",
                        content: "<"
                            .concat(!0 === o.animated ? "a" : "", ":")
                            .concat(null != (s = o.originalName) ? s : o.name, ":")
                            .concat(o.id, ">"),
                        emoji: o,
                    };
                }
                return {
                    type: "text",
                    content: r,
                };
            },
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
                          type: "customEmoticon",
                          content: "<"
                              .concat(!0 === o.animated ? "a" : "", ":")
                              .concat(o.name, ":")
                              .concat(o.id, ">"),
                          emoji: o,
                      }
                    : {
                          type: "text",
                          content: r,
                      };
            },
        },
        text: k(M({}, V), {
            match: (e, t) =>
                "string" == typeof t.textExclusions && "" !== t.textExclusions
                    ? (0, f.T9)(t.textExclusions).exec(e)
                    : null != V.match
                      ? V.match(e, t, "")
                      : null,
        }),
    },
    Q = {
        inlineCode: B(F.inlineCode),
        codeBlock: B(F.codeBlock),
        mention: {
            match: o().anyScopeRegex(H),
            parse(e, t, n) {
                let { isNotification: r, guild: a, channelId: o } = n,
                    s = A.default.getUser(e[1]);
                if (null == s) return { content: e[0] };
                let l = P.ZP.getUserTag(s, { identifiable: r && S.Z.enabled ? "never" : "always" });
                if (r) {
                    var c;
                    let e = null != (c = R.ZP.getNickname(null == a ? void 0 : a.id, o, s)) ? c : P.ZP.getGlobalName(s);
                    return { content: null != e ? "@".concat(e) : "@".concat(l) };
                }
                {
                    if (s.bot) return { content: "@".concat(l) };
                    let e = "";
                    if ((null == a ? void 0 : a.id) != null) {
                        let t = l.toLowerCase();
                        e = i().some(O.Z.getUnsafeMutableRoles(a.id), (e) => t.startsWith(e.name.toLowerCase()))
                            ? "#".concat("".concat(s.discriminator).padStart(4, "0"))
                            : "";
                    }
                    return { content: "@".concat(l).concat(e) };
                }
            },
        },
        roleMention: {
            match: o().anyScopeRegex(Y),
            parse(e, t, n) {
                let { guild: r } = n;
                if (null != r) {
                    let t = O.Z.getRole(r.id, e[1]);
                    if (null != t) return { content: "@".concat(t.name) };
                }
                return { content: e[0] };
            },
        },
        gameMention: {
            match: o().anyScopeRegex(W),
            parse(e, t, n) {
                let { guild: r } = n;
                if (
                    r &&
                    u.N.getCurrentConfig(
                        {
                            guildId: r.id,
                            location: "Message Unparser",
                        },
                        { autoTrackExposure: !0 },
                    ).enabled
                ) {
                    let t = E.Z.getDetectableGame(e[1]);
                    return null != t
                        ? { content: "@".concat(t.name) }
                        : { content: "@".concat(L.intl.string(L.t["11pdXV"])) };
                }
                return { content: e[0] };
            },
        },
        channel: {
            match: o().anyScopeRegex(K),
            parse(e) {
                let t = g.Z.getChannel(e[1]);
                return { content: null == t ? e[0] : (0, s.F6)(t, A.default, T.Z, !0, !0) };
            },
        },
        emoji: {
            match: o().anyScopeRegex(z),
            parse(e, t, n) {
                let [r, i, a] = e,
                    { guild: o } = n,
                    s = l.ZP.getDisambiguatedEmojiContext(o ? o.id : null).getById(a),
                    c = null != s ? s.name : i;
                return { content: ":".concat(c, ":") };
            },
        },
        soundboard: {
            match: o().anyScopeRegex(_.hf),
            parse(e) {
                let [t, n, r] = e;
                return { content: "<sound:".concat(n, ":").concat(r, ">") };
            },
        },
        spoiler: {
            match: o().anyScopeRegex(w.$92),
            parse: () => ({ content: "<".concat(L.intl.string(L.t["F+x38P"]).toLowerCase(), ">") }),
        },
        staticRouteLink: {
            match: o().anyScopeRegex(w.PEY),
            parse: (e) => ({ content: "<id:".concat(e[1], ">") }),
        },
        timestamp: k(M({}, F.timestamp), {
            parse() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let r = F.timestamp.parse(...t);
                return "text" === r.type ? { content: r.content } : { content: r.formatted };
            },
        }),
        text: M({}, V),
    };
[X, Q].forEach((e) => {
    Object.keys(e).forEach((t, n) => {
        e[t].order = n;
    });
});
let J = o().parserFor(X),
    $ = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
function ee(e, t, n) {
    if (null != n && ("customEmoticon" === t.type && n(t.emoji, !1), "emoticon" === t.type || "text" === t.type)) {
        let r,
            i = c.ZP.translateSurrogatesToInlineEmoji(t.content);
        for (; null !== (r = $.exec(i)); ) {
            let i;
            null != r[1] && "" !== r[1]
                ? e.emojiContext && (i = e.emojiContext.getById(r[1]))
                : (i = c.ZP.getByName(r[2])),
                i && n(i, t.isShortcut || !1);
        }
    }
}
function et(e, t, n, r) {
    let i = "";
    return (
        e.forEach((e) => {
            if ((ee(t, e, r), "string" == typeof e.content))
                switch (e.type) {
                    case "codeBlock":
                    case "inlineCode":
                    case "mention":
                    case "roleMention":
                    case "channel":
                    case "emoji":
                        i += e.content;
                        break;
                    default:
                        i += n(e.content);
                }
            else
                e.content.constructor === Array
                    ? (i += et(e.content, t, n, r))
                    : console.warn("Unknown message item type: ", e);
        }),
        i
    );
}
function en(e, t, n) {
    return et(J(e, t), t, c.ZP.translateInlineEmojiToSurrogates, n);
}
function er(e) {
    let t,
        n = null == e ? void 0 : e.getGuildId(),
        r = null != n ? v.Z.getGuild(n) : null,
        a = I.Z.can(w.Plq.MENTION_EVERYONE, e);
    t = (null == e ? void 0 : e.isPrivate())
        ? e.recipients.map((e) => ({
              userId: e,
              nick: null,
          }))
        : null != n
          ? y.ZP.getMembers(n).map((e) => {
                let { userId: t, nick: n } = e;
                return {
                    userId: t,
                    nick: n,
                };
            })
          : [];
    let o = i()(
            t.reduce((e, t) => {
                let { userId: n } = t,
                    r = A.default.getUser(n);
                return (
                    null == r ||
                        e.push({
                            id: n,
                            text: r.tag,
                        }),
                    e
                );
            }, []),
        ),
        s = i()(null != r ? O.Z.getSortedRoles(r.id) : [])
            .filter((e) => {
                let { mentionable: t } = e;
                return a || t;
            })
            .map((e) => {
                let { id: t, name: n } = e;
                return {
                    id: t,
                    text: n,
                };
            }),
        c = i()(b.ZP.getTextChannelNameDisambiguations(n)).map((e) => {
            let { id: t, name: n } = e;
            return {
                id: t,
                text: n,
            };
        }),
        u =
            null != n
                ? i()(C.k1)
                      .filter((e) => e !== b.sH)
                      .flatMap((e) =>
                          b.ZP.getChannels(n)[e].map((e) => ({
                              id: e.channel.id,
                              text: e.channel.name,
                          })),
                      )
                      .value()
                : [],
        d = h.Z.computeAllActiveJoinedThreads(n).map((e) => ({
            id: e.id,
            text: e.name,
        })),
        f = l.ZP.getDisambiguatedEmojiContext(n),
        _ = f.getEscapedCustomEmoticonNames(),
        p = f.getCustomEmoji(),
        m = f.getCustomEmoticonRegex();
    return {
        inline: !0,
        mentionableRoles: s,
        guild: r,
        users: o,
        channels: c.concat(u).concat(d),
        emojiContext: f,
        customEmoticonsRegex: m,
        customEmoji: p,
        textExclusions: _,
        disableErrorGuards: !0,
    };
}
function ei(e) {
    return e;
}
let ea = {
    parse(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            r = null != n ? n : er(e),
            i = {
                content: t,
                tts: !1,
                invalidEmojis: [],
                validNonShortcutEmojis: [],
            };
        return (
            (i.content = en(i.content, r, (t, n) => {
                N.ZP.isEmojiPremiumLocked({
                    emoji: t,
                    channel: e,
                    intention: D.Hz.CHAT,
                })
                    ? i.invalidEmojis.push(t)
                    : n || i.validNonShortcutEmojis.push(t);
            })),
            i
        );
    },
    parsePreprocessor: (e, t) => J(t, er(e)),
    unparse(e, t, n) {
        let r = g.Z.getChannel(t),
            a = null != r ? r.getGuildId() : null,
            s = null != a ? v.Z.getGuild(a) : null,
            l = n ? Q : i().omit(Q, ["spoiler", "timestamp"]),
            u = n ? ei : c.ZP.translateSurrogatesToInlineEmoji,
            d = o().parserFor(l),
            f = {
                inline: !0,
                guild: s,
                channelId: t,
                isNotification: n,
            };
        return et(d(e, f), f, u);
    },
};
