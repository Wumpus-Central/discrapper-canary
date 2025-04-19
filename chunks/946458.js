n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    s = n(596454),
    a = n(339085),
    o = n(939790);
function c(e) {
    let { reactionEmoji: t } = e,
        n = (0, i.e7)([a.ZP], () => ((null == t ? void 0 : t.emojiId) != null ? a.ZP.getUsableCustomEmojiById(t.emojiId) : null));
    return (0, r.jsxs)('div', {
        className: o.container,
        children: [
            (0, r.jsxs)('div', {
                className: o.body,
                children: [
                    (0, r.jsxs)('div', {
                        className: o.placeholderLines,
                        children: [
                            (0, r.jsx)(d, {
                                width: '100%',
                                marginBottom: 8
                            }),
                            (0, r.jsx)(d, {
                                width: '80%',
                                marginBottom: 16
                            }),
                            (0, r.jsx)(d, {
                                width: '50%',
                                marginBottom: 8
                            }),
                            (0, r.jsx)(d, {
                                width: '60%',
                                marginBottom: 16
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { className: o.placeholderMedia })
                ]
            }),
            (0, r.jsxs)('div', {
                className: o.footer,
                children: [
                    (0, r.jsxs)('div', {
                        className: o.reaction,
                        children: [
                            null != t
                                ? (0, r.jsx)(s.Z, {
                                      className: o.reactionEmote,
                                      emojiId: t.emojiId,
                                      emojiName: t.emojiName,
                                      animated: !!(null == n ? void 0 : n.animated)
                                  })
                                : (0, r.jsx)(l.EO4, {
                                      size: 'sm',
                                      color: 'currentColor',
                                      className: o.reactionEmote
                                  }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-sm/semibold',
                                color: 'interactive-normal',
                                children: 17
                            })
                        ]
                    }),
                    (0, r.jsx)(d, {
                        width: '24px',
                        marginBottom: 0
                    }),
                    (0, r.jsx)('div', { className: o.dot }),
                    (0, r.jsx)(d, {
                        width: '24px',
                        marginBottom: 0
                    })
                ]
            })
        ]
    });
}
function d(e) {
    let { width: t, marginBottom: n } = e;
    return (0, r.jsx)('div', {
        className: o.placeholderLine,
        style: {
            width: t,
            marginBottom: n
        }
    });
}
