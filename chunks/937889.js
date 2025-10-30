n.d(t, {
    ZP: () => y,
    k$: () => v,
    p6: () => g,
    rs: () => m,
}),
    n(388685),
    n(781311),
    n(704826),
    n(35282),
    n(865427);
var r = n(830121),
    i = n(202131),
    a = n(454585),
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
let _ = 30,
    p = new Set([l.hBH.IMAGE, l.hBH.GIFV]),
    h = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);
function m(e, t) {
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
    var r;
    let {
            toAST: a = !1,
            hideSimpleEmbedContent: o = !0,
            formatInline: s = !1,
            postProcessor: l,
            shouldFilterKeywords: c,
            contentMessage: u,
        } = n,
        d = !1,
        f = (null != u ? u : t).content,
        _ = e(
            c
                ? (0, i.N)(f, {
                      escapeReplacement: !0,
                      messageId: t.id,
                      channelId: t.channel_id,
                      authorId: null == (r = t.author) ? void 0 : r.id,
                  })
                : f,
            !0,
            m(t, n),
            (e, n) => (
                Array.isArray(e) || (e = [e]),
                o && (e = N(e, (null != u ? u : t).embeds)),
                s || (e = I(e, n)),
                (e = b(e)),
                t.embeds.length > 0 && (d = S(e, n)),
                s && (e = R(e)),
                null != l && (e = l(e, n)),
                e
            ),
        );
    return {
        hasSpoilerEmbeds: d,
        content: _,
    };
}
function b(e) {
    let t = e.some((e) => "link" !== e.type);
    return e.filter((e) => {
        let n = "link" === e.type,
            i = null != (null != e.target ? (0, r.el)(e.target) : null);
        return !(n && i && !t);
    });
}
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return E(t.formatInline ? a.Z.parseInlineReply : a.Z.parse, e, t);
}
function O(e, t, n, r) {
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
function v(e, t, n) {
    return O(a.Z.parseAutoModerationSystemMessage, e, t, n);
}
function I(e, t) {
    return t
        ? T(e)
        : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = T(e[0].content)), e);
}
function T(e) {
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
            if ((("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (t += 1), t > _))
                return !1;
        }),
        t > _ ||
            e.forEach((e) => {
                e.jumboable = !0;
            }),
        e
    );
}
function S(e, t) {
    return t ? C(e) : "paragraph" === e[0].type && e[0].content instanceof Array && C(e[0].content);
}
function A(e, t) {
    if (e instanceof Array) return e.some((e) => A(e, t));
    let n = t(e);
    return null != n
        ? n
        : e.content instanceof Array
          ? A(e.content, t)
          : e.items instanceof Array && e.items.some((e) => A(e, t));
}
function C(e) {
    return A(e, (e) =>
        "spoiler" === e.type ? A(e, (e) => "link" === e.type || "attachmentLink" === e.type || null) : null,
    );
}
function N(e, t) {
    if (1 !== e.length || 1 !== t.length) return e;
    let n = e[0],
        r = t[0];
    return ("link" === n.type || "attachmentLink" === n.type) && p.has(r.type) && (0, o.dY)(r) ? [] : e;
}
function R(e) {
    return (
        e.forEach((e) => {
            h.has(e.type) &&
                null != e.content &&
                (Array.isArray(e.content)
                    ? R(e.content)
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
