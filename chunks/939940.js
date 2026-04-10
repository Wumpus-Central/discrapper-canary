i.d(e, { default: () => j });
var n = i(627968),
    l = i(64700),
    a = i(158954),
    o = i(397927),
    s = i(435183),
    r = i(937773),
    d = i(235640),
    m = i(307731),
    c = i(985018),
    u = i(608307);
let j = (t) => {
    let { channel: e, onClose: i, transitionState: j } = t,
        [x, h] = l.useState(e.defaultReactionEmoji ?? null),
        [N, p] = l.useState(!1),
        [b, g] = l.useState(!1),
        v = l.useRef(null),
        f = (e.defaultReactionEmoji?.emojiId ?? null) !== (x?.emojiId ?? null),
        E = (e.defaultReactionEmoji?.emojiName ?? null) !== (x?.emojiName ?? null),
        k = f || E,
        _ = (t) => {
            h(null == t ? null : t?.id != null ? { emojiId: t.id } : { emojiName: t.optionallyDiverseSequence });
        },
        y = async () => {
            if (k) {
                p(!0), g(!1);
                try {
                    await (0, s.RT)(e.id, { defaultReactionEmoji: x }), i();
                } catch (t) {
                    g(!0);
                } finally {
                    p(!1);
                }
            }
        };
    return (0, n.jsxs)(a.Modal, {
        title: c.intl.string(c.t.XlDE3k),
        subtitle: c.intl.string(c.t.lVqhdd),
        transitionState: j,
        onClose: i,
        actions: [
            { variant: "secondary", text: c.intl.string(c.t["ETE/oC"]), onClick: i },
            {
                variant: "primary",
                text: c.intl.string(c.t["R3BPH+"]),
                loading: N,
                disabled: !k,
                onClick: y,
                autoFocus: !0,
            },
        ],
        children: [
            (0, n.jsx)(d.A, { reactionEmoji: x }),
            (0, n.jsxs)(o.ButtonGroup, {
                size: "sm",
                className: u.v,
                children: [
                    (0, n.jsx)(o.YNO, {
                        targetElementRef: v,
                        renderPopout: (t) => {
                            let { closePopout: i } = t;
                            return (0, n.jsx)(r.A, {
                                guildId: e?.guild_id,
                                closePopout: i,
                                onSelectEmoji: (t) => {
                                    let { emoji: e, willClose: n } = t;
                                    _(e), n && i();
                                },
                                pickerIntention: m.EmojiIntention.COMMUNITY_CONTENT,
                                channel: e,
                            });
                        },
                        position: "right",
                        animation: o.YNO.Animation.NONE,
                        align: "center",
                        children: (t) =>
                            (0, n.jsx)(o.Button, {
                                ...t,
                                buttonRef: v,
                                text: c.intl.string(c.t["59QgaD"]),
                                variant: "primary",
                                onClick: (e) => {
                                    t.onClick?.(e);
                                },
                            }),
                    }),
                    null != x &&
                        (0, n.jsx)(o.Button, {
                            text: c.intl.string(c.t.N86XcP),
                            variant: "critical-secondary",
                            onClick: () => _(null),
                        }),
                ],
            }),
            b
                ? (0, n.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      children: c.intl.string(c.t.F75nNl),
                  })
                : null,
        ],
    });
};
