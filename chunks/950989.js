var i = t(477900),
    l = t(582128),
    a = t(855986),
    o = t(189213),
    u = t(821609),
    r = t(95477),
    d = t(265872),
    s = t(285796),
    c = t(696986),
    m = t(150934),
    g = t(565645),
    j = t(964486),
    h = t(375499),
    p = t(920134),
    f = t(121681),
    C = t(808728),
    v = t(919577),
    k = t(307731),
    x = t(650583),
    N = t(792996),
    b = t(174511);
t.d(
    n,
    {},
    {
        default: function (e) {
            let { transitionState: n, onClose: t, channelId: y, guildId: I, tag: A } = e,
                E = l.useRef(null),
                S = null != A,
                [T, R] = l.useState(A?.name ?? ""),
                [D, F] = l.useState(null != A ? { id: A.emojiId, name: A.emojiName } : null),
                [w, B] = l.useState(A?.moderated),
                H = (0, a.bG)([f.Ay], () => (D?.id != null ? f.Ay.getUsableCustomEmojiById(D.id) : null)),
                M = A?.name !== T || A?.emojiId !== D?.id || A?.emojiName !== D?.name || w !== A?.moderated;
            function Y() {
                if (null != T && M) {
                    if (S) {
                        (v.A.updateForumTag({ id: A.id, name: T, emojiId: D?.id, emojiName: D?.name, moderated: w }, y),
                            t());
                        return;
                    }
                    (v.A.createForumTag({ name: T, emojiId: D?.id, emojiName: D?.name, moderated: w }, y), t());
                }
            }
            let O = l.useCallback((e) => R(e), []),
                P = l.useRef(null);
            return (
                (0, j.Ay)(() => {
                    null != P.current && P.current.focus();
                }),
                (0, i.jsxs)(o.a, {
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
                            disabled: 0 === T.length || !M,
                            autoFocus: !0,
                        },
                    ],
                    actionBarInput: S
                        ? (0, i.jsx)(u.$, {
                              variant: "critical-secondary",
                              text: N.intl.string(N.t.huYSMr),
                              onClick: function () {
                                  S && (v.A.deleteForumTag(y, A.id), t());
                              },
                          })
                        : void 0,
                    children: [
                        (0, i.jsx)("div", {
                            className: b.Kf,
                            children: (0, i.jsx)(r.k, {
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
                                        children: (0, i.jsx)(d.Y, {
                                            targetElementRef: E,
                                            renderPopout: function (e) {
                                                let { closePopout: n } = e,
                                                    l = C.A.getDefaultChannel(I);
                                                return (0, i.jsx)(p.A, {
                                                    guildId: I,
                                                    closePopout: n,
                                                    onSelectEmoji: (e) => {
                                                        let { emoji: t, willClose: i } = e;
                                                        (null != t &&
                                                            F(
                                                                null != t.id
                                                                    ? { id: t.id, name: t.name }
                                                                    : { id: void 0, name: t.optionallyDiverseSequence },
                                                            ),
                                                            i && n());
                                                    },
                                                    pickerIntention: k.EmojiIntention.COMMUNITY_CONTENT,
                                                    onNavigateAway: t,
                                                    channel: l,
                                                });
                                            },
                                            position: "left",
                                            animation: d.Y.Animation.NONE,
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
                                                                      animated: !!H?.animated,
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
                                              icon: s.CircleXIcon,
                                              onClick: function () {
                                                  (R(""), F(null));
                                              },
                                              "aria-label": N.intl.string(N.t.o8lsHe),
                                          }
                                        : void 0,
                            }),
                        }),
                        (0, i.jsx)(c.h, { size: 16 }),
                        (0, i.jsx)(m.S, {
                            checked: w ?? !1,
                            onChange: (e) => B(e || (A?.moderated == null && void 0)),
                            label: N.intl.string(N.t["rMH+rt"]),
                            labelType: "secondary",
                        }),
                    ],
                })
            );
        },
    },
);
