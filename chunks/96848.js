t.d(n, {
    Z: function () {
        return p;
    }
}),
    t(47120),
    t(757143);
var i = t(200651),
    l = t(192379),
    r = t(481060),
    s = t(907040),
    a = t(981631),
    c = t(185923),
    o = t(388032),
    u = t(301023);
let d = {
        section: a.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
        openPopoutType: 'gift_effect_emoji_picker'
    },
    m = c.Hz.GIFT;
function p(e) {
    let { setEmojiConfetti: n, emojiConfetti: t } = e,
        [a, c] = l.useState(!1),
        p = (e) =>
            (0, i.jsxs)('div', {
                className: u.customGiftContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: u.customGiftHeader,
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: 'text-md/bold',
                                children: o.intl.string(o.t.Hl2IgY)
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: 'text-sm/normal',
                                children: o.intl.string(o.t.stGFAw)
                            })
                        ]
                    }),
                    e
                ]
            }),
        x = (e) => {
            null != n && (n(e), c(!1));
        };
    return (0, i.jsx)(r.Popout, {
        shouldShow: a,
        position: 'bottom',
        align: 'left',
        nudgeAlignIntoViewport: !0,
        onRequestClose: () => c(!1),
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(r.Dialog, {
                children: (0, i.jsx)(s.Z, {
                    analyticsOverride: d,
                    closePopout: n,
                    onSelectEmoji: x,
                    wrapper: 'div',
                    pickerIntention: m,
                    renderHeader: p,
                    headerClassName: u.emojiHeader,
                    className: u.emojiList,
                    listHeaderClassName: u.emojiList,
                    categoryListClassName: u.categoryList,
                    searchProps: { accessory: (0, i.jsx)(i.Fragment, {}) }
                })
            });
        },
        children: () =>
            (0, i.jsx)('div', {
                className: u.container,
                children: (0, i.jsx)(r.Clickable, {
                    className: u.emoji,
                    onClick: () => c(!0),
                    children:
                        (null == t ? void 0 : t.name) == null
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(r.ReactionIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: u.emojiIcon,
                                          width: 14,
                                          height: 14
                                      }),
                                      (0, i.jsx)(r.Text, {
                                          className: u.text,
                                          variant: 'text-sm/semibold',
                                          children: o.intl.string(o.t.Hl2IgY)
                                      })
                                  ]
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(r.Text, {
                                          className: u.textSelected,
                                          variant: 'text-sm/semibold',
                                          children: null == t.guildId ? t.optionallyDiverseSequence : null
                                      }),
                                      (0, i.jsx)(r.Text, {
                                          className: u.text,
                                          variant: 'text-sm/semibold',
                                          children: t.name.replace(/_/g, ' ')
                                      })
                                  ]
                              })
                })
            })
    });
}
