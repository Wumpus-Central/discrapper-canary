n.d(t, {
    ZP: () => h,
    k$: () => g,
    p6: () => f,
    rs: () => d
}),
    n(47120),
    n(757143),
    n(865427);
var i = n(830121),
    r = n(202131),
    a = n(454585);
n(528264);
var s = n(408433),
    o = n(981631);
n(46140);
let l = 30,
    u = new Set([o.hBH.IMAGE, o.hBH.GIFV]),
    c = new Set(['strong', 'em', 'u', 'text', 'inlineCode', 's', 'spoiler']);
function d(e, t) {
    let n = f({
            channelId: e.channel_id,
            messageId: e.id,
            renderOptions: t
        }),
        i = null != e.webhookId;
    return {
        ...n,
        allowLinks: i || n.allowLinks,
        allowEmojiLinks: i,
        mentionChannels: e.mentionChannels
    };
}
function f(e) {
    let { channelId: t, messageId: n, renderOptions: i } = e;
    return {
        channelId: t,
        messageId: n,
        allowLinks: !!i.allowLinks,
        allowDevLinks: !!i.allowDevLinks,
        formatInline: !!i.formatInline,
        noStyleAndInteraction: !!i.noStyleAndInteraction,
        allowHeading: !!i.allowHeading,
        allowList: !!i.allowList,
        previewLinkTarget: !!i.previewLinkTarget,
        disableAnimatedEmoji: !!i.disableAnimatedEmoji,
        isInteracting: !!i.isInteracting,
        allowEmojiLinks: !1,
        disableAutoBlockNewlines: !0,
        mentionChannels: [],
        muted: !1,
        unknownUserMentionPlaceholder: !0,
        viewingChannelId: i.viewingChannelId,
        forceWhite: !!i.forceWhite
    };
}
function _(e, t, n) {
    var i;
    let { toAST: a = !1, hideSimpleEmbedContent: s = !0, formatInline: o = !1, postProcessor: l, shouldFilterKeywords: u, contentMessage: c } = n,
        f = !1,
        _ = (null != c ? c : t).content,
        h = e(
            u
                ? (0, r.N)(_, {
                      escapeReplacement: !0,
                      messageId: t.id,
                      channelId: t.channel_id,
                      authorId: null === (i = t.author) || void 0 === i ? void 0 : i.id
                  })
                : _,
            !0,
            d(t, n),
            (e, n) => (Array.isArray(e) || (e = [e]), s && (e = T(e, (null != c ? c : t).embeds)), o || (e = E(e, n)), (e = p(e)), t.embeds.length > 0 && (f = y(e, n)), o && (e = S(e)), null != l && (e = l(e, n)), e)
        );
    return {
        hasSpoilerEmbeds: f,
        content: h
    };
}
function p(e) {
    let t = e.some((e) => 'link' !== e.type);
    return e.filter((e) => {
        let n = 'link' === e.type,
            r = null != (null != e.target ? (0, i.el)(e.target) : null);
        return !(n && r && !t);
    });
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return _(t.formatInline ? a.Z.parseInlineReply : a.Z.parse, e, t);
}
function m(e, t, n, i) {
    return e(
        t,
        !0,
        {
            allowLinks: !1,
            allowDevLinks: !1,
            allowEmojiLinks: !1,
            mentionChannels: [],
            isInteracting: !1,
            formatInline: !1,
            noStyleAndInteraction: !1,
            allowHeading: !1,
            allowList: !1,
            disableAutoBlockNewlines: !0,
            highlightWord: n,
            disableAnimatedEmoji: !1,
            channelId: i,
            muted: !1
        },
        (e) => (Array.isArray(e) || (e = [e]), e)
    );
}
function g(e, t, n) {
    return m(a.Z.parseAutoModerationSystemMessage, e, t, n);
}
function E(e, t) {
    return t ? v(e) : ('paragraph' === e[0].type && e[0].content instanceof Array && (e[0].content = v(e[0].content)), e);
}
function v(e) {
    if (e.some((e) => 'emoji' !== e.type && 'customEmoji' !== e.type && 'soundboard' !== e.type && ('string' != typeof e.content || '' !== e.content.trim()))) return e;
    let t = 0;
    return (
        e.forEach((e) => {
            if ((('emoji' === e.type || 'customEmoji' === e.type || 'soundboard' === e.type) && (t += 1), t > l)) return !1;
        }),
        t > l ||
            e.forEach((e) => {
                e.jumboable = !0;
            }),
        e
    );
}
function y(e, t) {
    return t ? b(e) : 'paragraph' === e[0].type && e[0].content instanceof Array && b(e[0].content);
}
function I(e, t) {
    if (e instanceof Array) return e.some((e) => I(e, t));
    let n = t(e);
    return null != n ? n : e.content instanceof Array ? I(e.content, t) : e.items instanceof Array && e.items.some((e) => I(e, t));
}
function b(e) {
    return I(e, (e) => ('spoiler' === e.type ? I(e, (e) => 'link' === e.type || 'attachmentLink' === e.type || null) : null));
}
function T(e, t) {
    if (1 !== e.length || 1 !== t.length) return e;
    let n = e[0],
        i = t[0];
    return ('link' === n.type || 'attachmentLink' === n.type) && u.has(i.type) && (0, s.dY)(i) ? [] : e;
}
function S(e) {
    return (
        e.forEach((e) => {
            c.has(e.type) && null != e.content && (Array.isArray(e.content) ? S(e.content) : (e.content = e.content.replace(/\n/g, ' ')));
        }),
        e
    );
}
