n.d(t, {
    ZP: () => d,
    k$: () => f,
    p6: () => k,
    rs: () => g
}),
    n(47120),
    n(566702),
    n(757143),
    n(301563),
    n(865427);
var r = n(830121),
    i = n(202131),
    o = n(454585),
    c = n(408433),
    a = n(960048),
    s = n(981631);
let u = new Set([s.hBH.IMAGE, s.hBH.GIFV]),
    l = new Set(['strong', 'em', 'u', 'text', 'inlineCode', 's', 'spoiler']);
function g(e, t) {
    var n, r, i;
    let o = k({
            channelId: e.channel_id,
            messageId: e.id,
            renderOptions: t
        }),
        c = null != e.webhookId;
    return (
        (r = (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, o)),
        (i = i =
            {
                allowLinks: c || o.allowLinks,
                allowEmojiLinks: c,
                mentionChannels: e.mentionChannels,
                soundboardSounds: null != (n = e.soundboardSounds) ? n : []
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(i)).forEach(function (e) {
                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
              }),
        r
    );
}
function k(e) {
    let { channelId: t, messageId: n, renderOptions: r } = e;
    return {
        channelId: t,
        messageId: n,
        allowLinks: !!r.allowLinks,
        allowDevLinks: !!r.allowDevLinks,
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
        forceWhite: !!r.forceWhite
    };
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (function (e, t, n) {
        var o;
        let { toAST: s = !1, hideSimpleEmbedContent: k = !0, formatInline: d = !1, postProcessor: f, shouldFilterKeywords: b, contentMessage: m } = n,
            y = !1,
            w = (null != m ? m : t).content,
            j = e(
                b
                    ? (0, i.N)(w, {
                          escapeReplacement: !0,
                          messageId: t.id,
                          channelId: t.channel_id,
                          authorId: null == (o = t.author) ? void 0 : o.id
                      })
                    : w,
                !0,
                g(t, n),
                (e, n) => {
                    var i, o;
                    return (
                        Array.isArray(e) || (e = [e]),
                        k &&
                            (e = (function (e, t) {
                                if (1 !== e.length || 1 !== t.length) return e;
                                let n = e[0],
                                    r = t[0];
                                return ('link' === n.type || 'attachmentLink' === n.type) && u.has(r.type) && (0, c.dY)(r) ? [] : e;
                            })(e, (null != m ? m : t).embeds)),
                        d || ((i = e), (e = n ? h(i) : ('paragraph' === i[0].type && i[0].content instanceof Array && (i[0].content = h(i[0].content)), i))),
                        (e = (function (e) {
                            let t = e.some((e) => 'link' !== e.type);
                            return e.filter((e) => {
                                let n = 'link' === e.type,
                                    i = null != e.target ? (0, r.el)(e.target) : null;
                                return !(n && null != i && !t);
                            });
                        })(e)),
                        t.embeds.length > 0 && ((o = e), (y = n ? p(o) : 'paragraph' === o[0].type && o[0].content instanceof Array && p(o[0].content))),
                        d &&
                            (e = (function e(t) {
                                return (
                                    t.forEach((t) => {
                                        l.has(t.type) &&
                                            null != t.content &&
                                            (Array.isArray(t.content)
                                                ? e(t.content)
                                                : 'string' == typeof t.content
                                                  ? (t.content = t.content.replace(/\n/g, ' '))
                                                  : a.Z.captureMessage(
                                                        'AST node type:'
                                                            .concat(t.type, ' with content typeof ')
                                                            .concat(typeof t.content, '. Keys ')
                                                            .concat(Object.keys(t))
                                                    ));
                                    }),
                                    t
                                );
                            })(e)),
                        null != f && (e = f(e, n)),
                        e
                    );
                }
            );
        return {
            hasSpoilerEmbeds: y,
            content: j
        };
    })(t.formatInline ? o.Z.parseInlineReply : o.Z.parse, e, t);
}
function f(e, t, n) {
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
function h(e) {
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
function b(e, t) {
    if (e instanceof Array) return e.some((e) => b(e, t));
    let n = t(e);
    return null != n ? n : e.content instanceof Array ? b(e.content, t) : e.items instanceof Array && e.items.some((e) => b(e, t));
}
function p(e) {
    return b(e, (e) => ('spoiler' === e.type ? b(e, (e) => 'link' === e.type || 'attachmentLink' === e.type || null) : null));
}
