var e = n(477900),
    l = n(582128),
    a = n(189213),
    o = n(825484),
    s = n(265872),
    c = n(821609),
    r = n(834730),
    u = n(435183),
    d = n(920134),
    m = n(13259),
    j = n(307731),
    f = n(792996),
    g = n(164620);
n.d(
    i,
    {},
    {
        default: function (t) {
            let { channel: i, onClose: n, transitionState: p } = t,
                [E, h] = l.useState(i.defaultReactionEmoji ?? null),
                [x, k] = l.useState(!1),
                [C, N] = l.useState(!1),
                y = l.useRef(null),
                R = (i.defaultReactionEmoji?.emojiId ?? null) !== (E?.emojiId ?? null),
                v = (i.defaultReactionEmoji?.emojiName ?? null) !== (E?.emojiName ?? null),
                b = R || v;
            function I(t) {
                h(null == t ? null : t?.id != null ? { emojiId: t.id } : { emojiName: t.optionallyDiverseSequence });
            }
            return (0, e.jsxs)(a.a, {
                title: f.intl.string(f.t.XlDE3k),
                subtitle: f.intl.string(f.t.lVqhdd),
                transitionState: p,
                onClose: n,
                actions: [
                    { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: n },
                    {
                        variant: "primary",
                        text: f.intl.string(f.t["R3BPH+"]),
                        loading: x,
                        disabled: !b,
                        onClick: async function () {
                            if (b) {
                                (k(!0), N(!1));
                                try {
                                    (await (0, u.RT)(i.id, { defaultReactionEmoji: E }), n());
                                } catch (t) {
                                    N(!0);
                                } finally {
                                    k(!1);
                                }
                            }
                        },
                        autoFocus: !0,
                    },
                ],
                children: [
                    (0, e.jsx)(m.A, { reactionEmoji: E }),
                    (0, e.jsxs)(o.e, {
                        size: "sm",
                        className: g.v,
                        children: [
                            (0, e.jsx)(s.Y, {
                                targetElementRef: y,
                                renderPopout: function (t) {
                                    let { closePopout: n } = t;
                                    return (0, e.jsx)(d.A, {
                                        guildId: i?.guild_id,
                                        closePopout: n,
                                        onSelectEmoji: (t) => {
                                            let { emoji: i, willClose: e } = t;
                                            (I(i), e && n());
                                        },
                                        pickerIntention: j.EmojiIntention.COMMUNITY_CONTENT,
                                        channel: i,
                                    });
                                },
                                position: "right",
                                animation: s.Y.Animation.NONE,
                                align: "center",
                                children: (t) =>
                                    (0, e.jsx)(c.$, {
                                        ...t,
                                        buttonRef: y,
                                        text: f.intl.string(f.t["59QgaD"]),
                                        variant: "primary",
                                        onClick: (i) => {
                                            t.onClick?.(i);
                                        },
                                    }),
                            }),
                            null != E &&
                                (0, e.jsx)(c.$, {
                                    text: f.intl.string(f.t.N86XcP),
                                    variant: "critical-secondary",
                                    onClick: () => I(null),
                                }),
                        ],
                    }),
                    C
                        ? (0, e.jsx)(r.E, {
                              variant: "body-sm/normal",
                              color: "text-feedback-critical",
                              children: f.intl.string(f.t.F75nNl),
                          })
                        : null,
                ],
            });
        },
    },
);
