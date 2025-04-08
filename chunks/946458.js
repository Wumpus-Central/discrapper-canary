o.d(t, { Z: () => c });
var i = o(200651);
o(192379);
var n = o(442837),
    l = o(481060),
    r = o(596454),
    a = o(339085),
    s = o(939790);
function c(e) {
    let { reactionEmoji: t } = e,
        o = (0, n.e7)([a.ZP], () => ((null == t ? void 0 : t.emojiId) != null ? a.ZP.getUsableCustomEmojiById(t.emojiId) : null));
    return (0, i.jsxs)('div', {
        className: s.container,
        children: [
            (0, i.jsxs)('div', {
                className: s.body,
                children: [
                    (0, i.jsxs)('div', {
                        className: s.placeholderLines,
                        children: [
                            (0, i.jsx)(d, {
                                width: '100%',
                                marginBottom: 8
                            }),
                            (0, i.jsx)(d, {
                                width: '80%',
                                marginBottom: 16
                            }),
                            (0, i.jsx)(d, {
                                width: '50%',
                                marginBottom: 8
                            }),
                            (0, i.jsx)(d, {
                                width: '60%',
                                marginBottom: 16
                            })
                        ]
                    }),
                    (0, i.jsx)('div', { className: s.placeholderMedia })
                ]
            }),
            (0, i.jsxs)('div', {
                className: s.footer,
                children: [
                    (0, i.jsxs)('div', {
                        className: s.reaction,
                        children: [
                            null != t
                                ? (0, i.jsx)(r.Z, {
                                      className: s.reactionEmote,
                                      emojiId: t.emojiId,
                                      emojiName: t.emojiName,
                                      animated: !!(null == o ? void 0 : o.animated)
                                  })
                                : (0, i.jsx)(l.EO4, {
                                      size: 'sm',
                                      color: 'currentColor',
                                      className: s.reactionEmote
                                  }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/semibold',
                                color: 'interactive-normal',
                                children: 17
                            })
                        ]
                    }),
                    (0, i.jsx)(d, {
                        width: '24px',
                        marginBottom: 0
                    }),
                    (0, i.jsx)('div', { className: s.dot }),
                    (0, i.jsx)(d, {
                        width: '24px',
                        marginBottom: 0
                    })
                ]
            })
        ]
    });
}
function d(e) {
    let { width: t, marginBottom: o } = e;
    return (0, i.jsx)('div', {
        className: s.placeholderLine,
        style: {
            width: t,
            marginBottom: o
        }
    });
}
