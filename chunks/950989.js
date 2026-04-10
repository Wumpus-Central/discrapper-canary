t.d(n, { default: () => N });
var i = t(627968),
    l = t(64700),
    a = t(158954),
    o = t(311907),
    r = t(397927),
    d = t(565645),
    u = t(964486),
    s = t(375499),
    m = t(937773),
    c = t(508675),
    g = t(808728),
    j = t(919577),
    h = t(307731),
    p = t(650583),
    C = t(985018),
    x = t(293752);
function N(e) {
    let { transitionState: n, onClose: t, channelId: N, guildId: k, tag: v } = e,
        b = l.useRef(null),
        f = null != v,
        [y, A] = l.useState(v?.name ?? ""),
        [I, _] = l.useState(null != v ? { id: v.emojiId, name: v.emojiName } : null),
        [E, S] = l.useState(v?.moderated),
        T = (0, o.bG)([c.Ay], () => (I?.id != null ? c.Ay.getUsableCustomEmojiById(I.id) : null)),
        B = v?.name !== y || v?.emojiId !== I?.id || v?.emojiName !== I?.name || E !== v?.moderated,
        R = () => {
            if (null != y && B) {
                if (f) {
                    j.A.updateForumTag({ id: v.id, name: y, emojiId: I?.id, emojiName: I?.name, moderated: E }, N), t();
                    return;
                }
                j.A.createForumTag({ name: y, emojiId: I?.id, emojiName: I?.name, moderated: E }, N), t();
            }
        },
        D = l.useCallback((e) => A(e), []),
        F = l.useRef(null);
    return (
        (0, u.Ay)(() => {
            null != F.current && F.current.focus();
        }),
        (0, i.jsxs)(a.Modal, {
            title: f ? C.intl.string(C.t.zeVg5d) : C.intl.string(C.t["/jubeD"]),
            subtitle: C.intl.string(C.t["3v8kZH"]),
            transitionState: n,
            onClose: t,
            actions: [
                {
                    variant: "secondary",
                    text: C.intl.string(C.t["ETE/oC"]),
                    onClick: () => {
                        t();
                    },
                },
                {
                    variant: "primary",
                    text: C.intl.string(C.t["R3BPH+"]),
                    onClick: R,
                    disabled: 0 === y.length || !B,
                    autoFocus: !0,
                },
            ],
            actionBarInput: f
                ? (0, i.jsx)(r.Button, {
                      variant: "critical-secondary",
                      text: C.intl.string(C.t.huYSMr),
                      onClick: () => {
                          f && (j.A.deleteForumTag(N, v.id), t());
                      },
                  })
                : void 0,
            children: [
                (0, i.jsx)("div", {
                    className: x.Kf,
                    children: (0, i.jsx)(r.ksK, {
                        inputRef: F,
                        maxLength: 20,
                        value: y,
                        placeholder: C.intl.string(C.t["5vpeb4"]),
                        onChange: D,
                        autoFocus: !0,
                        leading: {
                            type: "emoji",
                            button: (0, i.jsx)("div", {
                                className: x.S0,
                                children: (0, i.jsx)(r.YNO, {
                                    targetElementRef: b,
                                    renderPopout: (e) => {
                                        let { closePopout: n } = e,
                                            l = g.Ay.getDefaultChannel(k);
                                        return (0, i.jsx)(m.A, {
                                            guildId: k,
                                            closePopout: n,
                                            onSelectEmoji: (e) => {
                                                let { emoji: t, willClose: i } = e;
                                                null != t &&
                                                    _(
                                                        null != t.id
                                                            ? { id: t.id, name: t.name }
                                                            : { id: void 0, name: t.optionallyDiverseSequence },
                                                    ),
                                                    i && n();
                                            },
                                            pickerIntention: h.EmojiIntention.COMMUNITY_CONTENT,
                                            onNavigateAway: t,
                                            channel: l,
                                        });
                                    },
                                    position: "left",
                                    animation: r.YNO.Animation.NONE,
                                    align: "bottom",
                                    children: (e, n) => {
                                        let { isShown: t } = n;
                                        return (0, i.jsx)(s.A, {
                                            ...e,
                                            ref: b,
                                            onClick: (n) => {
                                                e.onClick?.(n);
                                            },
                                            active: t,
                                            className: x.Z8,
                                            tabIndex: 0,
                                            renderButtonContents:
                                                null != I && (null != I.id || null != I.name)
                                                    ? () =>
                                                          (0, i.jsx)(d.A, {
                                                              className: x.Zg,
                                                              emojiId: I.id,
                                                              emojiName: I.name,
                                                              animated: !!T?.animated,
                                                          })
                                                    : null,
                                        });
                                    },
                                }),
                            }),
                        },
                        onKeyDown: (e) => {
                            e.key === p.dh.ENTER && y.length > 0 && (y.length > 0 && R(), e.preventDefault());
                        },
                        trailing:
                            y.length > 0 || null != I
                                ? {
                                      icon: r.aXh,
                                      onClick: () => {
                                          A(""), _(null);
                                      },
                                      "aria-label": C.intl.string(C.t.o8lsHe),
                                  }
                                : void 0,
                    }),
                }),
                (0, i.jsx)(r.hKd, { size: 16 }),
                (0, i.jsx)(r.Checkbox, {
                    checked: E ?? !1,
                    onChange: (e) => S(e || (v?.moderated == null && void 0)),
                    label: C.intl.string(C.t["rMH+rt"]),
                    labelType: "secondary",
                }),
            ],
        })
    );
}
