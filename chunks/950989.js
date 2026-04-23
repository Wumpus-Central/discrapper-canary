t.d(n, { default: () => y });
var i = t(627968),
    l = t(64700),
    a = t(189213),
    o = t(17928),
    r = t(821609),
    d = t(292666),
    u = t(922016),
    s = t(285796),
    m = t(696986),
    c = t(150934),
    g = t(565645),
    j = t(964486),
    h = t(375499),
    p = t(267889),
    C = t(159273),
    v = t(808728),
    x = t(919577),
    k = t(307731),
    N = t(650583),
    b = t(985018),
    f = t(671208);
function y(e) {
    let { transitionState: n, onClose: t, channelId: y, guildId: A, tag: I } = e,
        _ = l.useRef(null),
        E = null != I,
        [S, T] = l.useState(I?.name ?? ""),
        [B, R] = l.useState(null != I ? { id: I.emojiId, name: I.emojiName } : null),
        [D, F] = l.useState(I?.moderated),
        M = (0, o.bG)([C.Ay], () => (B?.id != null ? C.Ay.getUsableCustomEmojiById(B.id) : null)),
        Z = I?.name !== S || I?.emojiId !== B?.id || I?.emojiName !== B?.name || D !== I?.moderated,
        w = () => {
            if (null != S && Z) {
                if (E) {
                    x.A.updateForumTag({ id: I.id, name: S, emojiId: B?.id, emojiName: B?.name, moderated: D }, y), t();
                    return;
                }
                x.A.createForumTag({ name: S, emojiId: B?.id, emojiName: B?.name, moderated: D }, y), t();
            }
        },
        H = l.useCallback((e) => T(e), []),
        Y = l.useRef(null);
    return (
        (0, j.Ay)(() => {
            null != Y.current && Y.current.focus();
        }),
        (0, i.jsxs)(a.Modal, {
            title: E ? b.intl.string(b.t.zeVg5d) : b.intl.string(b.t["/jubeD"]),
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
                    onClick: w,
                    disabled: 0 === S.length || !Z,
                    autoFocus: !0,
                },
            ],
            actionBarInput: E
                ? (0, i.jsx)(r.$, {
                      variant: "critical-secondary",
                      text: b.intl.string(b.t.huYSMr),
                      onClick: () => {
                          E && (x.A.deleteForumTag(y, I.id), t());
                      },
                  })
                : void 0,
            children: [
                (0, i.jsx)("div", {
                    className: f.Kf,
                    children: (0, i.jsx)(d.k, {
                        inputRef: Y,
                        maxLength: 20,
                        value: S,
                        placeholder: b.intl.string(b.t["5vpeb4"]),
                        onChange: H,
                        autoFocus: !0,
                        leading: {
                            type: "emoji",
                            button: (0, i.jsx)("div", {
                                className: f.S0,
                                children: (0, i.jsx)(u.Y, {
                                    targetElementRef: _,
                                    renderPopout: (e) => {
                                        let { closePopout: n } = e,
                                            l = v.Ay.getDefaultChannel(A);
                                        return (0, i.jsx)(p.A, {
                                            guildId: A,
                                            closePopout: n,
                                            onSelectEmoji: (e) => {
                                                let { emoji: t, willClose: i } = e;
                                                null != t &&
                                                    R(
                                                        null != t.id
                                                            ? { id: t.id, name: t.name }
                                                            : { id: void 0, name: t.optionallyDiverseSequence },
                                                    ),
                                                    i && n();
                                            },
                                            pickerIntention: k.EmojiIntention.COMMUNITY_CONTENT,
                                            onNavigateAway: t,
                                            channel: l,
                                        });
                                    },
                                    position: "left",
                                    animation: u.Y.Animation.NONE,
                                    align: "bottom",
                                    children: (e, n) => {
                                        let { isShown: t } = n;
                                        return (0, i.jsx)(h.A, {
                                            ...e,
                                            ref: _,
                                            onClick: (n) => {
                                                e.onClick?.(n);
                                            },
                                            active: t,
                                            className: f.Z8,
                                            tabIndex: 0,
                                            renderButtonContents:
                                                null != B && (null != B.id || null != B.name)
                                                    ? () =>
                                                          (0, i.jsx)(g.A, {
                                                              className: f.Zg,
                                                              emojiId: B.id,
                                                              emojiName: B.name,
                                                              animated: !!M?.animated,
                                                          })
                                                    : null,
                                        });
                                    },
                                }),
                            }),
                        },
                        onKeyDown: (e) => {
                            e.key === N.dh.ENTER && S.length > 0 && (S.length > 0 && w(), e.preventDefault());
                        },
                        trailing:
                            S.length > 0 || null != B
                                ? {
                                      icon: s.a,
                                      onClick: () => {
                                          T(""), R(null);
                                      },
                                      "aria-label": b.intl.string(b.t.o8lsHe),
                                  }
                                : void 0,
                    }),
                }),
                (0, i.jsx)(m.h, { size: 16 }),
                (0, i.jsx)(c.S, {
                    checked: D ?? !1,
                    onChange: (e) => F(e || (I?.moderated == null && void 0)),
                    label: b.intl.string(b.t["rMH+rt"]),
                    labelType: "secondary",
                }),
            ],
        })
    );
}
