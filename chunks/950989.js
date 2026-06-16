t.d(n, { default: () => f });
var i = t(627968),
    l = t(64700),
    a = t(189213),
    o = t(17928),
    d = t(821609),
    r = t(292666),
    s = t(922016),
    u = t(285796),
    m = t(696986),
    c = t(150934),
    g = t(565645),
    j = t(964486),
    h = t(375499),
    p = t(267889),
    C = t(159273),
    v = t(808728),
    k = t(919577),
    x = t(307731),
    N = t(650583),
    b = t(375708),
    y = t(671208);
function f(e) {
    let { transitionState: n, onClose: t, channelId: f, guildId: A, tag: I } = e,
        E = l.useRef(null),
        S = null != I,
        [T, R] = l.useState(I?.name ?? ""),
        [D, F] = l.useState(null != I ? { id: I.emojiId, name: I.emojiName } : null),
        [M, w] = l.useState(I?.moderated),
        B = (0, o.bG)([C.Ay], () => (D?.id != null ? C.Ay.getUsableCustomEmojiById(D.id) : null)),
        H = I?.name !== T || I?.emojiId !== D?.id || I?.emojiName !== D?.name || M !== I?.moderated,
        Y = () => {
            if (null != T && H) {
                if (S) {
                    k.A.updateForumTag({ id: I.id, name: T, emojiId: D?.id, emojiName: D?.name, moderated: M }, f), t();
                    return;
                }
                k.A.createForumTag({ name: T, emojiId: D?.id, emojiName: D?.name, moderated: M }, f), t();
            }
        },
        O = l.useCallback((e) => R(e), []),
        P = l.useRef(null);
    return (
        (0, j.Ay)(() => {
            null != P.current && P.current.focus();
        }),
        (0, i.jsxs)(a.Modal, {
            title: S ? b.intl.string(b.t.zeVg5d) : b.intl.string(b.t["/jubeD"]),
            subtitle: b.intl.string(b.t["3v8kZH"]),
            transitionState: n,
            onClose: t,
            actions: [
                {
                    variant: "secondary",
                    text: b.intl.string(b.t["ETE/oC"]),
                    onClick: () => {
                        t();
                    },
                },
                {
                    variant: "primary",
                    text: b.intl.string(b.t["R3BPH+"]),
                    onClick: Y,
                    disabled: 0 === T.length || !H,
                    autoFocus: !0,
                },
            ],
            actionBarInput: S
                ? (0, i.jsx)(d.$, {
                      variant: "critical-secondary",
                      text: b.intl.string(b.t.huYSMr),
                      onClick: () => {
                          S && (k.A.deleteForumTag(f, I.id), t());
                      },
                  })
                : void 0,
            children: [
                (0, i.jsx)("div", {
                    className: y.Kf,
                    children: (0, i.jsx)(r.k, {
                        inputRef: P,
                        maxLength: 20,
                        value: T,
                        placeholder: b.intl.string(b.t["5vpeb4"]),
                        onChange: O,
                        autoFocus: !0,
                        leading: {
                            type: "emoji",
                            button: (0, i.jsx)("div", {
                                className: y.S0,
                                children: (0, i.jsx)(s.Y, {
                                    targetElementRef: E,
                                    renderPopout: (e) => {
                                        let { closePopout: n } = e,
                                            l = v.Ay.getDefaultChannel(A);
                                        return (0, i.jsx)(p.A, {
                                            guildId: A,
                                            closePopout: n,
                                            onSelectEmoji: (e) => {
                                                let { emoji: t, willClose: i } = e;
                                                null != t &&
                                                    F(
                                                        null != t.id
                                                            ? { id: t.id, name: t.name }
                                                            : { id: void 0, name: t.optionallyDiverseSequence },
                                                    ),
                                                    i && n();
                                            },
                                            pickerIntention: x.EmojiIntention.COMMUNITY_CONTENT,
                                            onNavigateAway: t,
                                            channel: l,
                                        });
                                    },
                                    position: "left",
                                    animation: s.Y.Animation.NONE,
                                    align: "bottom",
                                    children: (e, n) => {
                                        let { isShown: t } = n;
                                        return (0, i.jsx)(h.A, {
                                            ...e,
                                            ref: E,
                                            onClick: (n) => {
                                                e.onClick?.(n);
                                            },
                                            active: t,
                                            className: y.Z8,
                                            tabIndex: 0,
                                            renderButtonContents:
                                                null != D && (null != D.id || null != D.name)
                                                    ? () =>
                                                          (0, i.jsx)(g.A, {
                                                              className: y.Zg,
                                                              emojiId: D.id,
                                                              emojiName: D.name,
                                                              animated: !!B?.animated,
                                                          })
                                                    : null,
                                        });
                                    },
                                }),
                            }),
                        },
                        onKeyDown: (e) => {
                            e.key === N.dh.ENTER && T.length > 0 && (T.length > 0 && Y(), e.preventDefault());
                        },
                        trailing:
                            T.length > 0 || null != D
                                ? {
                                      icon: u.a,
                                      onClick: () => {
                                          R(""), F(null);
                                      },
                                      "aria-label": b.intl.string(b.t.o8lsHe),
                                  }
                                : void 0,
                    }),
                }),
                (0, i.jsx)(m.h, { size: 16 }),
                (0, i.jsx)(c.S, {
                    checked: M ?? !1,
                    onChange: (e) => w(e || (I?.moderated == null && void 0)),
                    label: b.intl.string(b.t["rMH+rt"]),
                    labelType: "secondary",
                }),
            ],
        })
    );
}
