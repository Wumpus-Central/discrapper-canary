n.d(i, { default: () => p });
var e = n(627968),
    l = n(64700),
    a = n(189213),
    o = n(825484),
    s = n(922016),
    c = n(821609),
    r = n(834730),
    u = n(435183),
    d = n(267889),
    m = n(235640),
    j = n(307731),
    f = n(375708),
    g = n(532067);
let p = function (t) {
    let { channel: i, onClose: n, transitionState: p } = t,
        [x, E] = l.useState(i.defaultReactionEmoji ?? null),
        [h, k] = l.useState(!1),
        [C, N] = l.useState(!1),
        R = l.useRef(null),
        v = (i.defaultReactionEmoji?.emojiId ?? null) !== (x?.emojiId ?? null),
        y = (i.defaultReactionEmoji?.emojiName ?? null) !== (x?.emojiName ?? null),
        I = v || y;
    function b(t) {
        E(null == t ? null : t?.id != null ? { emojiId: t.id } : { emojiName: t.optionallyDiverseSequence });
    }
    async function S() {
        if (I) {
            k(!0), N(!1);
            try {
                await (0, u.RT)(i.id, { defaultReactionEmoji: x }), n();
            } catch (t) {
                N(!0);
            } finally {
                k(!1);
            }
        }
    }
    return (0, e.jsxs)(a.Modal, {
        title: f.intl.string(f.t.XlDE3k),
        subtitle: f.intl.string(f.t.lVqhdd),
        transitionState: p,
        onClose: n,
        actions: [
            { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: n },
            {
                variant: "primary",
                text: f.intl.string(f.t["R3BPH+"]),
                loading: h,
                disabled: !I,
                onClick: S,
                autoFocus: !0,
            },
        ],
        children: [
            (0, e.jsx)(m.A, { reactionEmoji: x }),
            (0, e.jsxs)(o.e, {
                size: "sm",
                className: g.v,
                children: [
                    (0, e.jsx)(s.Y, {
                        targetElementRef: R,
                        renderPopout: function (t) {
                            let { closePopout: n } = t;
                            return (0, e.jsx)(d.A, {
                                guildId: i?.guild_id,
                                closePopout: n,
                                onSelectEmoji: (t) => {
                                    let { emoji: i, willClose: e } = t;
                                    b(i), e && n();
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
                                buttonRef: R,
                                text: f.intl.string(f.t["59QgaD"]),
                                variant: "primary",
                                onClick: (i) => {
                                    t.onClick?.(i);
                                },
                            }),
                    }),
                    null != x &&
                        (0, e.jsx)(c.$, {
                            text: f.intl.string(f.t.N86XcP),
                            variant: "critical-secondary",
                            onClick: () => b(null),
                        }),
                ],
            }),
            C
                ? (0, e.jsx)(r.E, {
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      children: f.intl.string(f.t.F75nNl),
                  })
                : null,
        ],
    });
};
