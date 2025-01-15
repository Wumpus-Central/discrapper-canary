n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    s = n(481060),
    r = n(596454),
    a = n(339085),
    o = n(59200);
function d(e) {
    let { reactionEmoji: t } = e,
        n = (0, l.e7)([a.ZP], () => ((null == t ? void 0 : t.emojiId) != null ? a.ZP.getUsableCustomEmojiById(t.emojiId) : null));
    return (0, i.jsxs)('div', {
        className: o.container,
        children: [
            (0, i.jsxs)('div', {
                className: o.body,
                children: [
                    (0, i.jsxs)('div', {
                        className: o.placeholderLines,
                        children: [
                            (0, i.jsx)(c, {
                                width: '100%',
                                marginBottom: 8
                            }),
                            (0, i.jsx)(c, {
                                width: '80%',
                                marginBottom: 16
                            }),
                            (0, i.jsx)(c, {
                                width: '50%',
                                marginBottom: 8
                            }),
                            (0, i.jsx)(c, {
                                width: '60%',
                                marginBottom: 16
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { className: o.placeholderMedia })
                ]
            }),
            (0, i.jsxs)('div', {
                className: o.footer,
                children: [
                    (0, i.jsxs)('div', {
                        className: o.reaction,
                        children: [
                            null != t
                                ? (0, i.jsx)(r.Z, {
                                      className: o.reactionEmote,
                                      emojiId: t.emojiId,
                                      emojiName: t.emojiName,
                                      animated: !!(null == n ? void 0 : n.animated)
                                  })
                                : (0, i.jsx)(s.ReactionIcon, {
                                      size: 'sm',
                                      color: 'currentColor',
                                      className: o.reactionEmote
                                  }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-sm/semibold',
                                color: 'interactive-normal',
                                children: 17
                            })
                        ]
                    }),
                    (0, i.jsx)(c, {
                        width: '24px',
                        marginBottom: 0
                    }),
                    (0, i.jsx)('div', { className: o.dot }),
                    (0, i.jsx)(c, {
                        width: '24px',
                        marginBottom: 0
                    })
                ]
            })
        ]
    });
}
function c(e) {
    let { width: t, marginBottom: n } = e;
    return (0, i.jsx)('div', {
        className: o.placeholderLine,
        style: {
            width: t,
            marginBottom: n
        }
    });
}
