i.d(e, { default: () => j });
var n = i(627968),
    l = i(64700),
    a = i(158954),
    o = i(397927),
    s = i(435183),
    r = i(937773),
    d = i(235640),
    c = i(307731),
    m = i(985018),
    u = i(507753);
let j = (t) => {
    let { channel: e, onClose: i, transitionState: j } = t,
        [x, h] = l.useState(e.defaultReactionEmoji ?? null),
        [N, b] = l.useState(!1),
        [p, g] = l.useState(!1),
        v = l.useRef(null),
        f = (e.defaultReactionEmoji?.emojiId ?? null) !== (x?.emojiId ?? null),
        E = (e.defaultReactionEmoji?.emojiName ?? null) !== (x?.emojiName ?? null),
        _ = f || E,
        k = (t) => {
            h(null == t ? null : t?.id != null ? { emojiId: t.id } : { emojiName: t.optionallyDiverseSequence });
        },
        y = async () => {
            if (_) {
                b(!0), g(!1);
                try {
                    await (0, s.RT)(e.id, { defaultReactionEmoji: x }), i();
                } catch (t) {
                    g(!0);
                } finally {
                    b(!1);
                }
            }
        };
    return (0, n.jsxs)(a.Modal, {
        title: m.intl.string(m.t.XlDE3k),
        subtitle: m.intl.string(m.t.lVqhdd),
        transitionState: j,
        onClose: i,
        actions: [
            { variant: "secondary", text: m.intl.string(m.t["ETE/oC"]), onClick: i },
            {
                variant: "primary",
                text: m.intl.string(m.t["R3BPH+"]),
                loading: N,
                disabled: !_,
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
                                    k(e), n && i();
                                },
                                pickerIntention: c.b_.COMMUNITY_CONTENT,
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
                                text: m.intl.string(m.t["59QgaD"]),
                                variant: "primary",
                                onClick: (e) => {
                                    t.onClick?.(e);
                                },
                            }),
                    }),
                    null != x &&
                        (0, n.jsx)(o.Button, {
                            text: m.intl.string(m.t.N86XcP),
                            variant: "critical-secondary",
                            onClick: () => k(null),
                        }),
                ],
            }),
            p
                ? (0, n.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      children: m.intl.string(m.t.F75nNl),
                  })
                : null,
        ],
    });
};
