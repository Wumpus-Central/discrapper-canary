n.d(t, {
    ZP: () => y,
    d6: () => v,
    k$: () => I,
    p6: () => g,
    rs: () => h,
}),
    n(388685),
    n(781311),
    n(704826),
    n(35282);
var r = n(25209);
n(865427);
var i = n(830121);
n(922699);
var a = n(454585),
    o = n(408433),
    s = n(960048),
    l = n(981631);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = 30,
    _ = new Set([l.hBH.IMAGE, l.hBH.GIFV]),
    m = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);
function h(e, t) {
    var n;
    let r = g({
            channelId: e.channel_id,
            messageId: e.id,
            renderOptions: t,
        }),
        i = null != e.webhookId;
    return f(u({}, r), {
        allowLinks: i || r.allowLinks,
        allowEmojiLinks: i,
        mentionChannels: e.mentionChannels,
        soundboardSounds: null != (n = e.soundboardSounds) ? n : [],
    });
}
function g(e) {
    let { channelId: t, messageId: n, renderOptions: r } = e;
    return {
        channelId: t,
        messageId: n,
        allowLinks: !!r.allowLinks,
        allowDevLinks: !!r.allowDevLinks,
        allowGameMentions: !!r.allowGameMentions,
        allowTimeMentionInput: !!r.allowTimeMentionInput,
        formatInline: !!r.formatInline,
        noStyleAndInteraction: !!r.noStyleAndInteraction,
        allowHeading: !!r.allowHeading,
        allowList: !!r.allowList,
        previewLinkTarget: !!r.previewLinkTarget,
        disableAnimatedEmoji: !!r.disableAnimatedEmoji,
        isInteracting: !!r.isInteracting,
        allowEmojiLinks: !1,
        disableAutoBlockNewlines: !0,
        mentionChannels: [],
        soundboardSounds: [],
        muted: !1,
        unknownUserMentionPlaceholder: !0,
        viewingChannelId: r.viewingChannelId,
        forceWhite: !!r.forceWhite,
        textColor: r.textColor,
    };
}
function E(e, t, n) {
    let {
            toAST: i = !1,
            hideSimpleEmbedContent: a = !0,
            formatInline: o = !1,
            postProcessor: s,
            contentMessage: l,
        } = n,
        c = !1,
        u = !1,
        d = (null != l ? l : t).content,
        f = e(
            d,
            !0,
            h(t, n),
            (e, n) => (
                Array.isArray(e) || (e = [e]),
                e.length >= r.dc - 10 &&
                    ((u = !0),
                    (e = [
                        {
                            type: "text",
                            content: d,
                            originalMatch: {
                                index: 0,
                                0: d,
                            },
                        },
                    ])),
                a && (e = R(e, (null != l ? l : t).embeds)),
                o || (e = T(e, n)),
                (e = b(e)),
                t.embeds.length > 0 && (c = A(e, n)),
                o && (e = w(e)),
                null != s && (e = s(e, n)),
                e
            ),
        );
    return {
        hasSpoilerEmbeds: c,
        content: f,
        hasBailedAst: u,
    };
}
function b(e) {
    let t = e.some((e) => "link" !== e.type);
    return e.filter((e) => {
        let n = "link" === e.type,
            r = null != (null != e.target ? (0, i.el)(e.target) : null);
        return !(n && r && !t);
    });
}
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return E(t.formatInline ? a.Z.parseInlineReply : a.Z.parse, e, t);
}
function O(e, t) {
    arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    let { content: n, guildId: r, channelId: i } = t;
    return e(
        n,
        !0,
        {
            allowLinks: !1,
            allowDevLinks: !1,
            allowEmojiLinks: !1,
            mentionChannels: [],
            soundboardSounds: [],
            isInteracting: !1,
            formatInline: !0,
            noStyleAndInteraction: !1,
            allowHeading: !1,
            allowList: !1,
            allowGameMentions: !1,
            disableAutoBlockNewlines: !0,
            previewLinkTarget: !1,
            disableAnimatedEmoji: !0,
            guildId: r,
            channelId: i,
            muted: !1,
            disablePressableChannelMention: !0,
        },
        (e) => (Array.isArray(e) || (e = [e]), e),
    );
}
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return O(e, t, n);
}
function S(e, t, n, r) {
    return e(
        t,
        !0,
        {
            allowLinks: !1,
            allowDevLinks: !1,
            allowEmojiLinks: !1,
            mentionChannels: [],
            soundboardSounds: [],
            isInteracting: !1,
            formatInline: !1,
            noStyleAndInteraction: !1,
            allowHeading: !1,
            allowList: !1,
            allowGameMentions: !1,
            disableAutoBlockNewlines: !0,
            highlightWord: n,
            disableAnimatedEmoji: !1,
            channelId: r,
            muted: !1,
        },
        (e) => (Array.isArray(e) || (e = [e]), e),
    );
}
function I(e, t, n) {
    return S(a.Z.parseAutoModerationSystemMessage, e, t, n);
}
function T(e, t) {
    return t
        ? C(e)
        : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = C(e[0].content)), e);
}
function C(e) {
    if (
        e.some(
            (e) =>
                "emoji" !== e.type &&
                "customEmoji" !== e.type &&
                "soundboard" !== e.type &&
                ("string" != typeof e.content || "" !== e.content.trim()),
        )
    )
        return e;
    let t = 0;
    return (
        e.forEach((e) => {
            if ((("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (t += 1), t > p))
                return !1;
        }),
        t > p ||
            e.forEach((e) => {
                e.jumboable = !0;
            }),
        e
    );
}
function A(e, t) {
    return t ? P(e) : "paragraph" === e[0].type && e[0].content instanceof Array && P(e[0].content);
}
function N(e, t) {
    if (e instanceof Array) return e.some((e) => N(e, t));
    let n = t(e);
    return null != n
        ? n
        : e.content instanceof Array
          ? N(e.content, t)
          : e.items instanceof Array && e.items.some((e) => N(e, t));
}
function P(e) {
    return N(e, (e) =>
        "spoiler" === e.type ? N(e, (e) => "link" === e.type || "attachmentLink" === e.type || null) : null,
    );
}
function R(e, t) {
    if (1 !== e.length || 1 !== t.length) return e;
    let n = e[0],
        r = t[0];
    return ("link" === n.type || "attachmentLink" === n.type) && _.has(r.type) && (0, o.dY)(r) ? [] : e;
}
function w(e) {
    return (
        e.forEach((e) => {
            m.has(e.type) &&
                null != e.content &&
                (Array.isArray(e.content)
                    ? w(e.content)
                    : "string" == typeof e.content
                      ? (e.content = e.content.replace(/\n/g, " "))
                      : s.Z.captureMessage(
                            "AST node type:"
                                .concat(e.type, " with content typeof ")
                                .concat(typeof e.content, ". Keys ")
                                .concat(Object.keys(e)),
                        ));
        }),
        e
    );
}
