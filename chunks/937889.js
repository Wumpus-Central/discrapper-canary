n.d(t, {
    ZP: () => k,
    k$: () => d,
    p6: () => g,
    rs: () => l
}),
    n(47120),
    n(566702),
    n(757143),
    n(301563),
    n(865427);
var i = n(830121),
    r = n(202131),
    o = n(454585);
n(528264);
var a = n(408433),
    c = n(981631);
n(46140);
let s = new Set([c.hBH.IMAGE, c.hBH.GIFV]),
    u = new Set(['strong', 'em', 'u', 'text', 'inlineCode', 's', 'spoiler']);
function l(e, t) {
    var n, i, r;
    let o = g({
            channelId: e.channel_id,
            messageId: e.id,
            renderOptions: t
        }),
        a = null != e.webhookId;
    return (
        (i = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })({}, o)),
        (r = r =
            {
                allowLinks: a || o.allowLinks,
                allowEmojiLinks: a,
                mentionChannels: e.mentionChannels,
                soundboardSounds: null !== (n = e.soundboardSounds) && void 0 !== n ? n : []
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        i
    );
}
function g(e) {
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
        soundboardSounds: [],
        muted: !1,
        unknownUserMentionPlaceholder: !0,
        viewingChannelId: i.viewingChannelId,
        forceWhite: !!i.forceWhite
    };
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (function (e, t, n) {
        var o;
        let { toAST: c = !1, hideSimpleEmbedContent: g = !0, formatInline: k = !1, postProcessor: d, shouldFilterKeywords: h, contentMessage: p } = n,
            m = !1,
            y = (null != p ? p : t).content,
            w = e(
                h
                    ? (0, r.N)(y, {
                          escapeReplacement: !0,
                          messageId: t.id,
                          channelId: t.channel_id,
                          authorId: null === (o = t.author) || void 0 === o ? void 0 : o.id
                      })
                    : y,
                !0,
                l(t, n),
                (e, n) => {
                    var r, o;
                    return (
                        Array.isArray(e) || (e = [e]),
                        g &&
                            (e = (function (e, t) {
                                if (1 !== e.length || 1 !== t.length) return e;
                                let n = e[0],
                                    i = t[0];
                                return ('link' === n.type || 'attachmentLink' === n.type) && s.has(i.type) && (0, a.dY)(i) ? [] : e;
                            })(e, (null != p ? p : t).embeds)),
                        k || ((r = e), (e = n ? f(r) : ('paragraph' === r[0].type && r[0].content instanceof Array && (r[0].content = f(r[0].content)), r))),
                        (e = (function (e) {
                            let t = e.some((e) => 'link' !== e.type);
                            return e.filter((e) => {
                                let n = 'link' === e.type,
                                    r = null != e.target ? (0, i.el)(e.target) : null;
                                return !(n && null != r && !t);
                            });
                        })(e)),
                        t.embeds.length > 0 && ((o = e), (m = n ? b(o) : 'paragraph' === o[0].type && o[0].content instanceof Array && b(o[0].content))),
                        k &&
                            (e = (function e(t) {
                                return (
                                    t.forEach((t) => {
                                        u.has(t.type) && null != t.content && (Array.isArray(t.content) ? e(t.content) : (t.content = t.content.replace(/\n/g, ' ')));
                                    }),
                                    t
                                );
                            })(e)),
                        null != d && (e = d(e, n)),
                        e
                    );
                }
            );
        return {
            hasSpoilerEmbeds: m,
            content: w
        };
    })(t.formatInline ? o.Z.parseInlineReply : o.Z.parse, e, t);
}
function d(e, t, n) {
    return (0, o.Z.parseAutoModerationSystemMessage)(
        e,
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
            disableAutoBlockNewlines: !0,
            highlightWord: t,
            disableAnimatedEmoji: !1,
            channelId: n,
            muted: !1
        },
        (e) => (Array.isArray(e) || (e = [e]), e)
    );
}
function f(e) {
    if (e.some((e) => 'emoji' !== e.type && 'customEmoji' !== e.type && 'soundboard' !== e.type && ('string' != typeof e.content || '' !== e.content.trim()))) return e;
    let t = 0;
    return (
        e.forEach((e) => {
            if ((('emoji' === e.type || 'customEmoji' === e.type || 'soundboard' === e.type) && (t += 1), t > 30)) return !1;
        }),
        t > 30 ||
            e.forEach((e) => {
                e.jumboable = !0;
            }),
        e
    );
}
function h(e, t) {
    if (e instanceof Array) return e.some((e) => h(e, t));
    let n = t(e);
    return null != n ? n : e.content instanceof Array ? h(e.content, t) : e.items instanceof Array && e.items.some((e) => h(e, t));
}
function b(e) {
    return h(e, (e) => ('spoiler' === e.type ? h(e, (e) => 'link' === e.type || 'attachmentLink' === e.type || null) : null));
}
