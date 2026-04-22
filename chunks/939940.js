i.d(e, { default: () => N });
var n = i(627968),
    l = i(64700),
    a = i(189213),
    o = i(825484),
    s = i(265872),
    r = i(821609),
    d = i(834730),
    c = i(435183),
    m = i(937773),
    u = i(235640),
    j = i(307731),
    x = i(985018),
    h = i(532067);
let N = (t) => {
    let { channel: e, onClose: i, transitionState: N } = t,
        [b, g] = l.useState(e.defaultReactionEmoji ?? null),
        [p, v] = l.useState(!1),
        [E, f] = l.useState(!1),
        k = l.useRef(null),
        _ = (e.defaultReactionEmoji?.emojiId ?? null) !== (b?.emojiId ?? null),
        y = (e.defaultReactionEmoji?.emojiName ?? null) !== (b?.emojiName ?? null),
        C = _ || y,
        I = (t) => {
            g(null == t ? null : t?.id != null ? { emojiId: t.id } : { emojiName: t.optionallyDiverseSequence });
        },
        w = async () => {
            if (C) {
                v(!0), f(!1);
                try {
                    await (0, c.RT)(e.id, { defaultReactionEmoji: b }), i();
                } catch (t) {
                    f(!0);
                } finally {
                    v(!1);
                }
            }
        };
    return (0, n.jsxs)(a.Modal, {
        title: x.intl.string(x.t.XlDE3k),
        subtitle: x.intl.string(x.t.lVqhdd),
        transitionState: N,
        onClose: i,
        actions: [
            { variant: "secondary", text: x.intl.string(x.t["ETE/oC"]), onClick: i },
            {
                variant: "primary",
                text: x.intl.string(x.t["R3BPH+"]),
                loading: p,
                disabled: !C,
                onClick: w,
                autoFocus: !0,
            },
        ],
        children: [
            (0, n.jsx)(u.A, { reactionEmoji: b }),
            (0, n.jsxs)(o.e, {
                size: "sm",
                className: h.v,
                children: [
                    (0, n.jsx)(s.Y, {
                        targetElementRef: k,
                        renderPopout: (t) => {
                            let { closePopout: i } = t;
                            return (0, n.jsx)(m.A, {
                                guildId: e?.guild_id,
                                closePopout: i,
                                onSelectEmoji: (t) => {
                                    let { emoji: e, willClose: n } = t;
                                    I(e), n && i();
                                },
                                pickerIntention: j.EmojiIntention.COMMUNITY_CONTENT,
                                channel: e,
                            });
                        },
                        position: "right",
                        animation: s.Y.Animation.NONE,
                        align: "center",
                        children: (t) =>
                            (0, n.jsx)(r.$, {
                                ...t,
                                buttonRef: k,
                                text: x.intl.string(x.t["59QgaD"]),
                                variant: "primary",
                                onClick: (e) => {
                                    t.onClick?.(e);
                                },
                            }),
                    }),
                    null != b &&
                        (0, n.jsx)(r.$, {
                            text: x.intl.string(x.t.N86XcP),
                            variant: "critical-secondary",
                            onClick: () => I(null),
                        }),
                ],
            }),
            E
                ? (0, n.jsx)(d.E, {
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      children: x.intl.string(x.t.F75nNl),
                  })
                : null,
        ],
    });
};
