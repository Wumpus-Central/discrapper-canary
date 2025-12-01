n.d(t, { Z: () => g }), n(388685), n(704826), n(35282);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(692547),
    l = n(481060),
    c = n(907040),
    u = n(283066),
    d = n(981631),
    f = n(185923),
    p = n(388032),
    _ = n(41356);
let m = {
        section: d.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
        openPopoutType: "gift_effect_emoji_picker",
    },
    h = f.Hz.GIFT;
function g(e) {
    let { setEmojiConfetti: t, emojiConfetti: n } = e,
        [a, d] = i.useState(!1),
        f = i.useRef(null),
        g = (0, u.Z)({ location: "GiftEmoji" }),
        E = o()(_.text, g && _.refresh),
        b = (e) =>
            (0, r.jsxs)("div", {
                className: _.customGiftContent,
                children: [
                    (0, r.jsxs)("div", {
                        className: _.customGiftHeader,
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: "text-md/bold",
                                children: p.intl.string(p.t.Hl2Ige),
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: p.intl.string(p.t.stGFA3),
                            }),
                        ],
                    }),
                    e,
                ],
            }),
        y = (e) => {
            let { emoji: n } = e;
            null != t && (t(n), d(!1));
        };
    return (0, r.jsx)(l.yRy, {
        targetElementRef: f,
        shouldShow: a,
        position: "bottom",
        align: "left",
        onRequestClose: () => d(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(l.VqE, {
                children: (0, r.jsx)(c.Z, {
                    analyticsOverride: m,
                    closePopout: t,
                    onSelectEmoji: y,
                    wrapper: "div",
                    pickerIntention: h,
                    renderHeader: b,
                    headerClassName: _.emojiHeader,
                    className: _.emojiList,
                    listHeaderClassName: _.emojiList,
                    categoryListClassName: _.categoryList,
                    searchProps: { accessory: (0, r.jsx)(r.Fragment, {}) },
                }),
            });
        },
        children: () =>
            (0, r.jsx)(l.P3F, {
                className: o()(_.container, g && _.refresh),
                onClick: () => d(!0),
                innerRef: f,
                children:
                    (null == n ? void 0 : n.name) == null
                        ? (0, r.jsxs)("div", {
                              className: _.contentContainer,
                              children: [
                                  (0, r.jsx)(l.EO4, {
                                      size: "custom",
                                      color: g ? s.Z.colors.ICON_PRIMARY : s.Z.colors.WHITE,
                                      className: _.emojiIcon,
                                      width: 14,
                                      height: 14,
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      className: E,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: p.intl.string(p.t.Hl2Ige),
                                  }),
                              ],
                          })
                        : (0, r.jsxs)("div", {
                              className: _.contentContainer,
                              children: [
                                  (0, r.jsx)(l.Text, {
                                      className: E,
                                      variant: "text-sm/semibold",
                                      children: null == n.guildId ? n.optionallyDiverseSequence : null,
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      className: E,
                                      variant: "text-sm/semibold",
                                      lineClamp: 1,
                                      children: n.name.replace(/_/g, " "),
                                  }),
                              ],
                          }),
            }),
    });
}
