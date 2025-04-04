n.d(t, { Z: () => _ }), n(47120), n(757143), n(301563);
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(907040),
    s = n(981631),
    l = n(185923),
    c = n(388032),
    u = n(853464);
let d = {
        section: s.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
        openPopoutType: 'gift_effect_emoji_picker'
    },
    f = l.Hz.GIFT;
function _(e) {
    let { setEmojiConfetti: t, emojiConfetti: n } = e,
        [s, l] = i.useState(!1),
        _ = (e) =>
            (0, r.jsxs)('div', {
                className: u.customGiftContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: u.customGiftHeader,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: 'text-md/bold',
                                children: c.NW.string(c.t.Hl2IgY)
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                children: c.NW.string(c.t.stGFAw)
                            })
                        ]
                    }),
                    e
                ]
            }),
        p = (e) => {
            null != t && (t(e), l(!1));
        };
    return (0, r.jsx)(o.yRy, {
        shouldShow: s,
        position: 'bottom',
        align: 'left',
        nudgeAlignIntoViewport: !0,
        onRequestClose: () => l(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(o.VqE, {
                children: (0, r.jsx)(a.Z, {
                    analyticsOverride: d,
                    closePopout: t,
                    onSelectEmoji: p,
                    wrapper: 'div',
                    pickerIntention: f,
                    renderHeader: _,
                    headerClassName: u.emojiHeader,
                    className: u.emojiList,
                    listHeaderClassName: u.emojiList,
                    categoryListClassName: u.categoryList,
                    searchProps: { accessory: (0, r.jsx)(r.Fragment, {}) }
                })
            });
        },
        children: () =>
            (0, r.jsx)('div', {
                className: u.container,
                children: (0, r.jsx)(o.P3F, {
                    className: u.emoji,
                    onClick: () => l(!0),
                    children:
                        (null == n ? void 0 : n.name) == null
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(o.EO4, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: u.emojiIcon,
                                          width: 14,
                                          height: 14
                                      }),
                                      (0, r.jsx)(o.Text, {
                                          className: u.text,
                                          variant: 'text-sm/semibold',
                                          children: c.NW.string(c.t.Hl2IgY)
                                      })
                                  ]
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(o.Text, {
                                          className: u.textSelected,
                                          variant: 'text-sm/semibold',
                                          children: null == n.guildId ? n.optionallyDiverseSequence : null
                                      }),
                                      (0, r.jsx)(o.Text, {
                                          className: u.text,
                                          variant: 'text-sm/semibold',
                                          children: n.name.replace(/_/g, ' ')
                                      })
                                  ]
                              })
                })
            })
    });
}
