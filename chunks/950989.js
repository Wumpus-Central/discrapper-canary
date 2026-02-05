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
    x = t(465161);
function N(e) {
    let { transitionState: n, onClose: t, channelId: N, guildId: b, tag: k } = e,
        v = l.useRef(null),
        f = null != k,
        [y, A] = l.useState(k?.name ?? ""),
        [_, I] = l.useState(null != k ? { id: k.emojiId, name: k.emojiName } : null),
        [E, S] = l.useState(k?.moderated),
        T = (0, o.bG)([c.Ay], () => (_?.id != null ? c.Ay.getUsableCustomEmojiById(_.id) : null)),
        B = k?.name !== y || k?.emojiId !== _?.id || k?.emojiName !== _?.name || E !== k?.moderated,
        R = () => {
            if (null != y && B) {
                if (f) {
                    j.A.updateForumTag({ id: k.id, name: y, emojiId: _?.id, emojiName: _?.name, moderated: E }, N), t();
                    return;
                }
                j.A.createForumTag({ name: y, emojiId: _?.id, emojiName: _?.name, moderated: E }, N), t();
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
                          f && (j.A.deleteForumTag(N, k.id), t());
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
                                    targetElementRef: v,
                                    renderPopout: (e) => {
                                        let { closePopout: n } = e,
                                            l = g.Ay.getDefaultChannel(b);
                                        return (0, i.jsx)(m.A, {
                                            guildId: b,
                                            closePopout: n,
                                            onSelectEmoji: (e) => {
                                                let { emoji: t, willClose: i } = e;
                                                null != t &&
                                                    I(
                                                        null != t.id
                                                            ? { id: t.id, name: t.name }
                                                            : { id: void 0, name: t.optionallyDiverseSequence },
                                                    ),
                                                    i && n();
                                            },
                                            pickerIntention: h.b_.COMMUNITY_CONTENT,
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
                                            ref: v,
                                            onClick: (n) => {
                                                e.onClick?.(n);
                                            },
                                            active: t,
                                            className: x.Z8,
                                            tabIndex: 0,
                                            renderButtonContents:
                                                null != _ && (null != _.id || null != _.name)
                                                    ? () =>
                                                          (0, i.jsx)(d.A, {
                                                              className: x.Zg,
                                                              emojiId: _.id,
                                                              emojiName: _.name,
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
                            y.length > 0 || null != _
                                ? {
                                      icon: r.aXh,
                                      onClick: () => {
                                          A(""), I(null);
                                      },
                                      "aria-label": C.intl.string(C.t.o8lsHe),
                                  }
                                : void 0,
                    }),
                }),
                (0, i.jsx)(r.hKd, { size: 16 }),
                (0, i.jsx)(r.Checkbox, {
                    checked: E ?? !1,
                    onChange: (e) => S(e || (k?.moderated == null && void 0)),
                    label: C.intl.string(C.t["rMH+rt"]),
                    labelType: "secondary",
                }),
            ],
        })
    );
}
