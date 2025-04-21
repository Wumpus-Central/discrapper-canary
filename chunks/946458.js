i.d(t, { Z: () => c });
var o = i(200651);
i(192379);
var n = i(442837),
    l = i(481060),
    r = i(596454),
    a = i(339085),
    s = i(939790);
function c(e) {
    let { reactionEmoji: t } = e,
        i = (0, n.e7)([a.ZP], () => ((null == t ? void 0 : t.emojiId) != null ? a.ZP.getUsableCustomEmojiById(t.emojiId) : null));
    return (0, o.jsxs)('div', {
        className: s.container,
        children: [
            (0, o.jsxs)('div', {
                className: s.body,
                children: [
                    (0, o.jsxs)('div', {
                        className: s.placeholderLines,
                        children: [
                            (0, o.jsx)(d, {
                                width: '100%',
                                marginBottom: 8
                            }),
                            (0, o.jsx)(d, {
                                width: '80%',
                                marginBottom: 16
                            }),
                            (0, o.jsx)(d, {
                                width: '50%',
                                marginBottom: 8
                            }),
                            (0, o.jsx)(d, {
                                width: '60%',
                                marginBottom: 16
                            })
                        ]
                    }),
                    (0, o.jsx)('div', { className: s.placeholderMedia })
                ]
            }),
            (0, o.jsxs)('div', {
                className: s.footer,
                children: [
                    (0, o.jsxs)('div', {
                        className: s.reaction,
                        children: [
                            null != t
                                ? (0, o.jsx)(r.Z, {
                                      className: s.reactionEmote,
                                      emojiId: t.emojiId,
                                      emojiName: t.emojiName,
                                      animated: !!(null == i ? void 0 : i.animated)
                                  })
                                : (0, o.jsx)(l.EO4, {
                                      size: 'sm',
                                      color: 'currentColor',
                                      className: s.reactionEmote
                                  }),
                            (0, o.jsx)(l.Text, {
                                variant: 'text-sm/semibold',
                                color: 'interactive-normal',
                                children: 17
                            })
                        ]
                    }),
                    (0, o.jsx)(d, {
                        width: '24px',
                        marginBottom: 0
                    }),
                    (0, o.jsx)('div', { className: s.dot }),
                    (0, o.jsx)(d, {
                        width: '24px',
                        marginBottom: 0
                    })
                ]
            })
        ]
    });
}
function d(e) {
    let { width: t, marginBottom: i } = e;
    return (0, o.jsx)('div', {
        className: s.placeholderLine,
        style: {
            width: t,
            marginBottom: i
        }
    });
}
