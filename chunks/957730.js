n.d(t, { ZP: () => el }), n(35282), n(388685), n(539854), n(361932), n(187205);
var r = n(392711),
    i = n.n(r),
    a = n(159635),
    o = n.n(a),
    s = n(599149),
    l = n(933557),
    c = n(339085),
    u = n(633302),
    d = n(627050),
    f = n(428595),
    p = n(594199),
    _ = n(11637),
    m = n(467798),
    h = n(601070),
    g = n(695346),
    E = n(592125),
    b = n(77498),
    y = n(984933),
    O = n(271383),
    v = n(485386),
    S = n(430824),
    I = n(496675),
    T = n(699516),
    A = n(246946),
    C = n(594174),
    N = n(483360),
    P = n(176354),
    R = n(5192),
    w = n(51144),
    D = n(981631),
    x = n(185923),
    L = n(388032);
function j(e, t, n) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
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
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function G(e, t, n) {
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
function Z(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    if (t[0] !== e) return null;
    if ('"' !== t[1]) return G(e, t, n, r);
    let i = 2;
    for (; i < t.length; i++) {
        if ("\\" === t[i]) {
            i++;
            continue;
        }
        if ('"' === t[i]) break;
    }
    let a = t.substring(0, i + 1),
        o = (0, l.mA)(t.substring(2, i));
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
function F(e) {
    return {
        match: o().anyScopeRegex(e),
        parse: (e) => ({
            type: "text",
            content: e[0],
        }),
    };
}
let V = f.Z.RULES,
    H = p.ZP,
    Y = /^<@!?(\d+)>/,
    W = /^<@&(\d+)>/,
    K = /^<@\$(\d+)>/,
    z = /^<#(\d+)>/,
    q = /^<a?:(\w+):(\d+)>/,
    X = /(@everyone|@here|@Clyde)\b/,
    Q = /^[^\s]+@[^\s]+\.[^\s.]+/,
    J = {
        link: B(o().defaultRules.link),
        autolink: B(o().defaultRules.autolink),
        url: B(o().defaultRules.url),
        inlineCode: B(V.inlineCode),
        codeBlock: B(V.codeBlock),
        rawUserMention: F(Y),
        rawRoleMention: F(W),
        rawChannelMention: F(z),
        rawEmoji: F(q),
        mention: {
            match(e, t, n) {
                let r = n.split(" ").pop() + e;
                if (Q.test(r)) return null;
                let i = G("@", e, t.users, "mention");
                if (i || (i = G("@", e, t.mentionableRoles, "roleMention"))) return i;
                if (
                    !(i = G(
                        "@",
                        e,
                        t.users.map((e) => U(M({}, e), { text: e.text.split("#")[0] })),
                        "mention",
                    ))
                )
                    return null;
                let a = X.exec(e);
                if (null != a && i[0].length <= a[0].length) return null;
                if ("" === n) {
                    let t = m.v.exec(e);
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
            match: (e, t) => Z("#", e, t.channels),
            parse: (e) => ({
                type: "text",
                content: "<#".concat(e[1], ">"),
            }),
        },
        emoticon: {
            match(e, t, n) {
                if (!g.ev.getSetting() || (0 !== n.length && !/\s$/.test(n))) return null;
                let r = u.ZP.EMOJI_SHORTCUT_RE.exec(e);
                return null == r || (r[0].length !== e.length && " " !== e[r[0].length] && "\n" !== e[r[0].length])
                    ? null
                    : r;
            },
            parse: (e) => ({
                type: "emoticon",
                content: u.ZP.convertShortcutToName(e[1]),
                isShortcut: !0,
            }),
        },
        emoji: {
            order: V.emoji.order,
            match: (e) => u.ZP.EMOJI_NAME_RE.exec(e),
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
        text: U(M({}, H), {
            match: (e, t) =>
                "string" == typeof t.textExclusions && "" !== t.textExclusions
                    ? (0, p.T9)(t.textExclusions).exec(e)
                    : null != H.match
                      ? H.match(e, t, "")
                      : null,
        }),
    },
    $ = {
        inlineCode: B(V.inlineCode),
        codeBlock: B(V.codeBlock),
        mention: {
            match: o().anyScopeRegex(Y),
            parse(e, t, n) {
                let { isNotification: r, guild: a, channelId: o } = n,
                    s = C.default.getUser(e[1]);
                if (null == s) return { content: e[0] };
                let l = w.ZP.getUserTag(s, { identifiable: r && A.Z.enabled ? "never" : "always" });
                if (r) {
                    var c;
                    let e = null != (c = R.ZP.getNickname(null == a ? void 0 : a.id, o, s)) ? c : w.ZP.getGlobalName(s);
                    return { content: null != e ? "@".concat(e) : "@".concat(l) };
                }
                {
                    if (s.bot) return { content: "@".concat(l) };
                    let e = "";
                    if ((null == a ? void 0 : a.id) != null) {
                        let t = l.toLowerCase();
                        e = i().some(v.Z.getUnsafeMutableRoles(a.id), (e) => t.startsWith(e.name.toLowerCase()))
                            ? "#".concat("".concat(s.discriminator).padStart(4, "0"))
                            : "";
                    }
                    return { content: "@".concat(l).concat(e) };
                }
            },
        },
        roleMention: {
            match: o().anyScopeRegex(W),
            parse(e, t, n) {
                let { guild: r } = n;
                if (null != r) {
                    let t = v.Z.getRole(r.id, e[1]);
                    if (null != t) return { content: "@".concat(t.name) };
                }
                return { content: e[0] };
            },
        },
        gameMention: {
            match: o().anyScopeRegex(K),
            parse(e, t, n) {
                let { guild: r } = n;
                if (
                    r &&
                    d.N.getCurrentConfig(
                        {
                            guildId: r.id,
                            location: "Message Unparser",
                        },
                        { autoTrackExposure: !0 },
                    ).enabled
                ) {
                    let t = b.Z.getDetectableGame(e[1]);
                    return null != t
                        ? { content: "@".concat(t.name) }
                        : { content: "@".concat(L.intl.string(L.t["11pdXZ"])) };
                }
                return { content: e[0] };
            },
        },
        channel: {
            match: o().anyScopeRegex(z),
            parse(e) {
                let t = E.Z.getChannel(e[1]);
                return { content: null == t ? e[0] : (0, l.F6)(t, C.default, T.Z, !0, !0) };
            },
        },
        emoji: {
            match: o().anyScopeRegex(q),
            parse(e, t, n) {
                let [r, i, a] = e,
                    { guild: o } = n,
                    s = c.ZP.getDisambiguatedEmojiContext(o ? o.id : null).getById(a),
                    l = null != s ? s.name : i;
                return {
                    content: ":".concat(l, ":"),
                    id: a,
                };
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
            match: o().anyScopeRegex(D.$92),
            parse: () => ({ content: "<".concat(L.intl.string(L.t["F+x38C"]).toLowerCase(), ">") }),
        },
        staticRouteLink: {
            match: o().anyScopeRegex(D.PEY),
            parse: (e) => ({ content: "<id:".concat(e[1], ">") }),
        },
        timestamp: U(M({}, V.timestamp), {
            parse() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                let r = V.timestamp.parse(...t);
                return "text" === r.type ? { content: r.content } : { content: r.formatted };
            },
        }),
        text: M({}, H),
    };
[J, $].forEach((e) => {
    Object.keys(e).forEach((t, n) => {
        e[t].order = n;
    });
});
let ee = o().parserFor(J),
    et = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
function en(e, t, n) {
    if (null != n && ("customEmoticon" === t.type && n(t.emoji, !1), "emoticon" === t.type || "text" === t.type)) {
        let r,
            i = u.ZP.translateSurrogatesToInlineEmoji(t.content);
        for (; null !== (r = et.exec(i)); ) {
            let i;
            null != r[1] && "" !== r[1]
                ? e.emojiContext && (i = e.emojiContext.getById(r[1]))
                : (i = u.ZP.getByName(r[2])),
                i && n(i, t.isShortcut || !1);
        }
    }
}
function er(e, t, n, r) {
    let i = "",
        a = [];
    return (
        e.forEach((e) => {
            if ((en(t, e, r), "string" == typeof e.content))
                switch (e.type) {
                    case "emoji":
                        a.push({
                            position: i.length,
                            length: e.content.length,
                            id: e.id,
                        }),
                            (i += e.content);
                        break;
                    case "codeBlock":
                    case "inlineCode":
                    case "mention":
                    case "roleMention":
                    case "channel":
                        !0 === t.isNotification ? (i += (0, s.KM)(e.content, !0)) : (i += e.content);
                        break;
                    default:
                        i += n(e.content);
                }
            else if (e.content.constructor === Array) {
                let { content: o, emoji: s } = er(e.content, t, n, r);
                for (let e of s)
                    a.push({
                        position: i.length + e.position,
                        length: e.length,
                        id: e.id,
                    });
                i += o;
            } else console.warn("Unknown message item type: ", e);
        }),
        {
            content: i,
            emoji: a,
        }
    );
}
function ei(e, t, n) {
    return er(ee(e, t), t, u.ZP.translateInlineEmojiToSurrogates, n).content;
}
function ea(e) {
    let t,
        n = null == e ? void 0 : e.getGuildId(),
        r = null != n ? S.Z.getGuild(n) : null,
        a = I.Z.can(D.Plq.MENTION_EVERYONE, e);
    t = (null == e ? void 0 : e.isPrivate())
        ? e.recipients.map((e) => ({
              userId: e,
              nick: null,
          }))
        : null != n
          ? O.ZP.getMembers(n).map((e) => {
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
                    r = C.default.getUser(n);
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
        s = i()(null != r ? v.Z.getSortedRoles(r.id) : [])
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
        l = i()(y.ZP.getTextChannelNameDisambiguations(n)).map((e) => {
            let { id: t, name: n } = e;
            return {
                id: t,
                text: n,
            };
        }),
        u =
            null != n
                ? i()(N.k1)
                      .filter((e) => e !== y.sH)
                      .flatMap((e) =>
                          y.ZP.getChannels(n)[e].map((e) => ({
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
        f = c.ZP.getDisambiguatedEmojiContext(n),
        p = f.getEscapedCustomEmoticonNames(),
        _ = f.getCustomEmoji(),
        m = f.getCustomEmoticonRegex();
    return {
        inline: !0,
        mentionableRoles: s,
        guild: r,
        users: o,
        channels: l.concat(u).concat(d),
        emojiContext: f,
        customEmoticonsRegex: m,
        customEmoji: _,
        textExclusions: p,
        disableErrorGuards: !0,
        isNotification: !1,
    };
}
function eo(e) {
    return e;
}
function es(e, t, n) {
    let r = E.Z.getChannel(t),
        a = null != r ? r.getGuildId() : null,
        s = null != a ? S.Z.getGuild(a) : null,
        l = n ? $ : i().omit($, ["spoiler", "timestamp"]),
        c = n ? eo : u.ZP.translateSurrogatesToInlineEmoji,
        d = o().parserFor(l),
        f = {
            inline: !0,
            guild: s,
            channelId: t,
            isNotification: n,
        };
    return er(d(e, f), f, c);
}
let el = {
    parse(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            r = null != n ? n : ea(e),
            i = {
                content: t,
                tts: !1,
                invalidEmojis: [],
                validNonShortcutEmojis: [],
            };
        return (
            (i.content = ei(i.content, r, (t, n) => {
                P.ZP.isEmojiPremiumLocked({
                    emoji: t,
                    channel: e,
                    intention: x.Hz.CHAT,
                })
                    ? i.invalidEmojis.push(t)
                    : n || i.validNonShortcutEmojis.push(t);
            })),
            i
        );
    },
    parsePreprocessor: (e, t) => ee(t, ea(e)),
    unparse: (e, t, n) => es(e, t, n).content,
    unparseWithMeta: es,
};
