t.d(n, { default: () => y });
var i = t(627968),
    l = t(64700),
    a = t(189213),
    o = t(17928),
    u = t(821609),
    d = t(292666),
    r = t(922016),
    s = t(285796),
    m = t(696986),
    c = t(150934),
    g = t(565645),
    j = t(964486),
    h = t(375499),
    p = t(334295),
    f = t(159273),
    C = t(808728),
    v = t(919577),
    k = t(307731),
    x = t(650583),
    N = t(375708),
    b = t(671208);
function y(e) {
    let { transitionState: n, onClose: t, channelId: y, guildId: A, tag: I } = e,
        E = l.useRef(null),
        S = null != I,
        [T, R] = l.useState(I?.name ?? ""),
        [D, F] = l.useState(null != I ? { id: I.emojiId, name: I.emojiName } : null),
        [M, w] = l.useState(I?.moderated),
        B = (0, o.bG)([f.Ay], () => (D?.id != null ? f.Ay.getUsableCustomEmojiById(D.id) : null)),
        H = I?.name !== T || I?.emojiId !== D?.id || I?.emojiName !== D?.name || M !== I?.moderated;
    function Y() {
        if (null != T && H) {
            if (S) {
                v.A.updateForumTag({ id: I.id, name: T, emojiId: D?.id, emojiName: D?.name, moderated: M }, y), t();
                return;
            }
            v.A.createForumTag({ name: T, emojiId: D?.id, emojiName: D?.name, moderated: M }, y), t();
        }
    }
    let O = l.useCallback((e) => R(e), []),
        P = l.useRef(null);
    return (
        (0, j.Ay)(() => {
            null != P.current && P.current.focus();
        }),
        (0, i.jsxs)(a.Modal, {
            title: S ? N.intl.string(N.t.zeVg5d) : N.intl.string(N.t["/jubeD"]),
            subtitle: N.intl.string(N.t["3v8kZH"]),
            transitionState: n,
            onClose: t,
            actions: [
                {
                    variant: "secondary",
                    text: N.intl.string(N.t["ETE/oC"]),
                    onClick: function () {
                        t();
                    },
                },
                {
                    variant: "primary",
                    text: N.intl.string(N.t["R3BPH+"]),
                    onClick: Y,
                    disabled: 0 === T.length || !H,
                    autoFocus: !0,
                },
            ],
            actionBarInput: S
                ? (0, i.jsx)(u.$, {
                      variant: "critical-secondary",
                      text: N.intl.string(N.t.huYSMr),
                      onClick: function () {
                          S && (v.A.deleteForumTag(y, I.id), t());
                      },
                  })
                : void 0,
            children: [
                (0, i.jsx)("div", {
                    className: b.Kf,
                    children: (0, i.jsx)(d.k, {
                        inputRef: P,
                        maxLength: 20,
                        value: T,
                        placeholder: N.intl.string(N.t["5vpeb4"]),
                        onChange: O,
                        autoFocus: !0,
                        leading: {
                            type: "emoji",
                            button: (0, i.jsx)("div", {
                                className: b.S0,
                                children: (0, i.jsx)(r.Y, {
                                    targetElementRef: E,
                                    renderPopout: function (e) {
                                        let { closePopout: n } = e,
                                            l = C.Ay.getDefaultChannel(A);
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
                                            pickerIntention: k.EmojiIntention.COMMUNITY_CONTENT,
                                            onNavigateAway: t,
                                            channel: l,
                                        });
                                    },
                                    position: "left",
                                    animation: r.Y.Animation.NONE,
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
                                            className: b.Z8,
                                            tabIndex: 0,
                                            renderButtonContents:
                                                null != D && (null != D.id || null != D.name)
                                                    ? () =>
                                                          (0, i.jsx)(g.A, {
                                                              className: b.Zg,
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
                            e.key === x.dh.ENTER && T.length > 0 && (T.length > 0 && Y(), e.preventDefault());
                        },
                        trailing:
                            T.length > 0 || null != D
                                ? {
                                      icon: s.a,
                                      onClick: function () {
                                          R(""), F(null);
                                      },
                                      "aria-label": N.intl.string(N.t.o8lsHe),
                                  }
                                : void 0,
                    }),
                }),
                (0, i.jsx)(m.h, { size: 16 }),
                (0, i.jsx)(c.S, {
                    checked: M ?? !1,
                    onChange: (e) => w(e || (I?.moderated == null && void 0)),
                    label: N.intl.string(N.t["rMH+rt"]),
                    labelType: "secondary",
                }),
            ],
        })
    );
}
