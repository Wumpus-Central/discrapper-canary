r.d(n, {
    ZP: function () {
        return v;
    },
    k$: function () {
        return b;
    },
    p6: function () {
        return m;
    },
    rs: function () {
        return p;
    }
});
var i = r(47120);
var a = r(757143);
var s = r(865427),
    o = r(830121),
    l = r(202131),
    u = r(454585);
r(665430);
var c = r(408433),
    d = r(981631);
let f = 30,
    _ = new Set([d.hBH.IMAGE, d.hBH.GIFV]),
    h = new Set(['strong', 'em', 'u', 'text', 'inlineCode', 's', 'spoiler']);
function p(e, n) {
    let r = m({
            channelId: e.channel_id,
            messageId: e.id,
            renderOptions: n
        }),
        i = null != e.webhookId;
    return {
        ...r,
        allowLinks: i || r.allowLinks,
        allowEmojiLinks: i,
        mentionChannels: e.mentionChannels
    };
}
function m(e) {
    let { channelId: n, messageId: r, renderOptions: i } = e;
    return {
        channelId: n,
        messageId: r,
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
function g(e, n, r) {
    var i;
    let { toAST: a = !1, hideSimpleEmbedContent: s = !0, formatInline: o = !1, postProcessor: u, shouldFilterKeywords: c, contentMessage: d } = r,
        f = !1,
        _ = (null != d ? d : n).content,
        h = e(
            c
                ? (0, l.N)(_, {
                      escapeReplacement: !0,
                      messageId: n.id,
                      channelId: n.channel_id,
                      authorId: null === (i = n.author) || void 0 === i ? void 0 : i.id
                  })
                : _,
            !0,
            p(n, r),
            (e, r) => (!Array.isArray(e) && (e = [e]), s && (e = R(e, (null != d ? d : n).embeds)), !o && (e = y(e, r)), (e = E(e)), n.embeds.length > 0 && (f = A(e, r)), o && (e = O(e)), null != u && (e = u(e, r)), e)
        );
    return {
        hasSpoilerEmbeds: f,
        content: h
    };
}
function E(e) {
    let n = e.some((e) => 'link' !== e.type || !1);
    return e.filter((e) => {
        let r = 'link' === e.type,
            i = null != (null != e.target ? (0, o.el)(e.target) : null);
        return !(r && i && !n);
    });
}
function v(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return g(n.formatInline ? u.Z.parseInlineReply : u.Z.parse, e, n);
}
function I(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { content: i, guildId: a, channelId: s, messageId: o } = n,
        l = {
            allowLinks: !1,
            allowDevLinks: !1,
            allowEmojiLinks: !1,
            mentionChannels: [],
            isInteracting: !1,
            formatInline: !0,
            noStyleAndInteraction: !1,
            allowHeading: !1,
            allowList: !1,
            disableAutoBlockNewlines: !0,
            previewLinkTarget: !1,
            disableAnimatedEmoji: !0,
            guildId: a,
            channelId: s,
            muted: !1,
            disablePressableChannelMention: !0
        };
    return e(
        (null == r ? void 0 : r.shouldFilterKeywords)
            ? getKeywordSubstitutedContent(i, {
                  escapeReplacement: !0,
                  channelId: s,
                  messageId: o
              })
            : i,
        !0,
        l,
        (e) => (!Array.isArray(e) && (e = [e]), e)
    );
}
function T(e, n, r, i) {
    return e(
        n,
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
            highlightWord: r,
            disableAnimatedEmoji: !1,
            channelId: i,
            muted: !1
        },
        (e) => (!Array.isArray(e) && (e = [e]), e)
    );
}
function b(e, n, r) {
    return T(u.Z.parseAutoModerationSystemMessage, e, n, r);
}
function y(e, n) {
    return n ? S(e) : ('paragraph' === e[0].type && e[0].content instanceof Array && (e[0].content = S(e[0].content)), e);
}
function S(e) {
    if (e.some((e) => 'emoji' !== e.type && 'customEmoji' !== e.type && 'soundboard' !== e.type && ('string' != typeof e.content || '' !== e.content.trim()) && !0)) return e;
    let n = 0;
    return (e.forEach((e) => {
        if ((('emoji' === e.type || 'customEmoji' === e.type || 'soundboard' === e.type) && (n += 1), n > f)) return !1;
    }),
    n > f)
        ? e
        : (e.forEach((e) => {
              e.jumboable = !0;
          }),
          e);
}
function A(e, n) {
    return n ? C(e) : 'paragraph' === e[0].type && e[0].content instanceof Array && C(e[0].content);
}
function N(e, n) {
    if (e instanceof Array) return e.some((e) => N(e, n));
    let r = n(e);
    if (null != r) return r;
    if (e.content instanceof Array) return N(e.content, n);
    if (e.items instanceof Array) return e.items.some((e) => N(e, n));
    else return !1;
}
function C(e) {
    return N(e, (e) => ('spoiler' === e.type ? N(e, (e) => 'link' === e.type || 'attachmentLink' === e.type || null) : null));
}
function R(e, n) {
    if (1 !== e.length || 1 !== n.length) return e;
    let r = e[0],
        i = n[0];
    return ('link' === r.type || 'attachmentLink' === r.type) && _.has(i.type) && (0, c.dY)(i) ? [] : e;
}
function O(e) {
    return (
        e.forEach((e) => {
            h.has(e.type) && null != e.content && (Array.isArray(e.content) ? O(e.content) : (e.content = e.content.replace(/\n/g, ' ')));
        }),
        e
    );
}
