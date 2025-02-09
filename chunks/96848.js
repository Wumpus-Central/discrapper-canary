n.d(t, { Z: () => _ }), n(47120), n(757143);
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(907040),
    o = n(981631),
    l = n(185923),
    u = n(388032),
    c = n(964314);
let d = {
        section: o.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
        openPopoutType: 'gift_effect_emoji_picker'
    },
    f = l.Hz.GIFT;
function _(e) {
    let { setEmojiConfetti: t, emojiConfetti: n } = e,
        [o, l] = r.useState(!1),
        _ = (e) =>
            (0, i.jsxs)('div', {
                className: c.customGiftContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: c.customGiftHeader,
                        children: [
                            (0, i.jsx)(a.Text, {
                                variant: 'text-md/bold',
                                children: u.intl.string(u.t.Hl2IgY)
                            }),
                            (0, i.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                children: u.intl.string(u.t.stGFAw)
                            })
                        ]
                    }),
                    e
                ]
            }),
        p = (e) => {
            null != t && (t(e), l(!1));
        };
    return (0, i.jsx)(a.yRy, {
        shouldShow: o,
        position: 'bottom',
        align: 'left',
        nudgeAlignIntoViewport: !0,
        onRequestClose: () => l(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(a.VqE, {
                children: (0, i.jsx)(s.Z, {
                    analyticsOverride: d,
                    closePopout: t,
                    onSelectEmoji: p,
                    wrapper: 'div',
                    pickerIntention: f,
                    renderHeader: _,
                    headerClassName: c.emojiHeader,
                    className: c.emojiList,
                    listHeaderClassName: c.emojiList,
                    categoryListClassName: c.categoryList,
                    searchProps: { accessory: (0, i.jsx)(i.Fragment, {}) }
                })
            });
        },
        children: () =>
            (0, i.jsx)('div', {
                className: c.container,
                children: (0, i.jsx)(a.P3F, {
                    className: c.emoji,
                    onClick: () => l(!0),
                    children:
                        (null == n ? void 0 : n.name) == null
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(a.EO4, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: c.emojiIcon,
                                          width: 14,
                                          height: 14
                                      }),
                                      (0, i.jsx)(a.Text, {
                                          className: c.text,
                                          variant: 'text-sm/semibold',
                                          children: u.intl.string(u.t.Hl2IgY)
                                      })
                                  ]
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(a.Text, {
                                          className: c.textSelected,
                                          variant: 'text-sm/semibold',
                                          children: null == n.guildId ? n.optionallyDiverseSequence : null
                                      }),
                                      (0, i.jsx)(a.Text, {
                                          className: c.text,
                                          variant: 'text-sm/semibold',
                                          children: n.name.replace(/_/g, ' ')
                                      })
                                  ]
                              })
                })
            })
    });
}
