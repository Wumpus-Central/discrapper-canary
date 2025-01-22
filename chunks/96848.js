r.d(n, {
    Z: function () {
        return m;
    }
});
var i = r(47120);
var a = r(757143);
var o = r(200651),
    s = r(192379),
    l = r(481060),
    u = r(907040),
    c = r(981631),
    d = r(185923),
    f = r(388032),
    p = r(301023);
let h = {
        section: c.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
        openPopoutType: 'gift_effect_emoji_picker'
    },
    _ = d.Hz.GIFT;
function m(e) {
    let { setEmojiConfetti: n, emojiConfetti: r } = e,
        [i, a] = s.useState(!1),
        c = (e) =>
            (0, o.jsxs)('div', {
                className: p.customGiftContent,
                children: [
                    (0, o.jsxs)('div', {
                        className: p.customGiftHeader,
                        children: [
                            (0, o.jsx)(l.Text, {
                                variant: 'text-md/bold',
                                children: f.intl.string(f.t.Hl2IgY)
                            }),
                            (0, o.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                children: f.intl.string(f.t.stGFAw)
                            })
                        ]
                    }),
                    e
                ]
            }),
        d = (e) => {
            null != n && (n(e), a(!1));
        };
    return (0, o.jsx)(l.Popout, {
        shouldShow: i,
        position: 'bottom',
        align: 'left',
        nudgeAlignIntoViewport: !0,
        onRequestClose: () => a(!1),
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, o.jsx)(l.Dialog, {
                children: (0, o.jsx)(u.Z, {
                    analyticsOverride: h,
                    closePopout: n,
                    onSelectEmoji: d,
                    wrapper: 'div',
                    pickerIntention: _,
                    renderHeader: c,
                    headerClassName: p.emojiHeader,
                    className: p.emojiList,
                    listHeaderClassName: p.emojiList,
                    categoryListClassName: p.categoryList,
                    searchProps: { accessory: (0, o.jsx)(o.Fragment, {}) }
                })
            });
        },
        children: () =>
            (0, o.jsx)('div', {
                className: p.container,
                children: (0, o.jsx)(l.Clickable, {
                    className: p.emoji,
                    onClick: () => a(!0),
                    children:
                        (null == r ? void 0 : r.name) == null
                            ? (0, o.jsxs)(o.Fragment, {
                                  children: [
                                      (0, o.jsx)(l.ReactionIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: p.emojiIcon,
                                          width: 14,
                                          height: 14
                                      }),
                                      (0, o.jsx)(l.Text, {
                                          className: p.text,
                                          variant: 'text-sm/semibold',
                                          children: f.intl.string(f.t.Hl2IgY)
                                      })
                                  ]
                              })
                            : (0, o.jsxs)(o.Fragment, {
                                  children: [
                                      (0, o.jsx)(l.Text, {
                                          className: p.textSelected,
                                          variant: 'text-sm/semibold',
                                          children: null == r.guildId ? r.optionallyDiverseSequence : null
                                      }),
                                      (0, o.jsx)(l.Text, {
                                          className: p.text,
                                          variant: 'text-sm/semibold',
                                          children: r.name.replace(/_/g, ' ')
                                      })
                                  ]
                              })
                })
            })
    });
}
