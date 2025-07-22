(n.d(t, { default: () => S }), n(388685), n(953529), n(642613));
var i = n(255367),
    r = n(73800),
    l = n(392711),
    o = n.n(l),
    s = n(442837),
    a = n(146187),
    c = n(257465),
    d = n(369585),
    u = n(755721),
    m = n(481060),
    j = n(706371),
    v = n(563115),
    h = n(313201),
    p = n(661824),
    x = n(984933),
    g = n(485386),
    f = n(823379),
    b = n(402148),
    y = n(570961),
    I = n(208665),
    N = n(460117),
    O = n(290511),
    C = n(388032),
    P = n(663362);
function S(e) {
    let { transitionState: t, onClose: n, onSave: l, onDelete: g, option: f, guild: b, prompt: S, index: w } = e,
        Z = (0, h.Dt)(),
        k = (0, s.e7)([x.ZP], () => x.ZP.getDefaultChannel(b.id)),
        [E, T] = r.useState(() => {
            var e;
            return null != (e = null == f ? void 0 : f.emoji) ? e : null;
        }),
        [R, B] = r.useState(() => {
            var e;
            return null != (e = null == f ? void 0 : f.title) ? e : '';
        }),
        [H, M] = r.useState(() => {
            var e;
            return null != (e = null == f ? void 0 : f.description) ? e : '';
        }),
        [D, q] = r.useState(() => {
            var e;
            return new Set(null != (e = null == f ? void 0 : f.channelIds) ? e : []);
        }),
        [Q, z] = r.useState(() => {
            var e;
            return new Set(null != (e = null == f ? void 0 : f.roleIds) ? e : []);
        }),
        [X, Y] = r.useState({}),
        A = r.useRef(null);
    r.useLayoutEffect(() => {
        var e;
        return null == (e = A.current) ? void 0 : e.focus();
    }, []);
    let F = r.useCallback(() => {
            var e;
            let t = {
                    id: null != (e = null == f ? void 0 : f.id) ? e : ''.concat(Date.now()),
                    title: R,
                    description: H,
                    channelIds: Array.from(D).sort(),
                    roleIds: Array.from(Q).sort(),
                    emoji: null == E ? void 0 : E
                },
                i = (function (e, t, n, i) {
                    let r = {};
                    i.title.length <= 0 && (r.title = C.intl.string(C.t.p3PKzM));
                    let l = (0, y.en)(e, t, n, i);
                    return (null != l && (r.roles = l), r);
                })(b, I.Z.editedOnboardingPrompts, S, t);
            (Y(i), o().isEmpty(i) && (l(t), n()));
        }, [D, H, E, b, n, l, null == f ? void 0 : f.id, S, Q, R]),
        L = r.useMemo(
            () => [
                {
                    text: C.intl.string(C.t['ETE/oK']),
                    onClick: n,
                    variant: 'secondary'
                },
                {
                    text: C.intl.string(C.t.R3BPHx),
                    onClick: F,
                    variant: 'primary'
                }
            ],
            [F, n]
        );
    return (0, i.jsxs)(c.I, {
        transitionState: t,
        onClose: n,
        children: [
            (0, i.jsx)('div', {
                className: P.closeButton,
                children: (0, i.jsx)(a.P, { onClick: n })
            }),
            (0, i.jsxs)('div', {
                className: P.container,
                children: [
                    (0, i.jsx)(m.Text, {
                        className: P.questionNumber,
                        variant: 'text-xs/semibold',
                        color: 'text-muted',
                        children: C.intl.format(C.t.yjS3zs, { index: w + 1 })
                    }),
                    (0, i.jsx)(m.X6q, {
                        id: Z,
                        className: P.header,
                        variant: 'heading-lg/semibold',
                        children: null != S.title && S.title.length > 0 ? S.title : C.intl.string(C.t.vY91Cw)
                    }),
                    (0, i.jsx)(m.X6q, {
                        className: P.nameHeader,
                        variant: 'heading-md/semibold',
                        children: C.intl.string(C.t.VWdcBg)
                    }),
                    (0, i.jsx)(u.Is, {
                        inputRef: A,
                        placeholder: C.intl.string(C.t.EHe6gY),
                        value: R,
                        onChange: (e) => B(e),
                        maxLength: O.NE,
                        autoFocus: !0
                    }),
                    (0, i.jsx)(m.pdY, { error: X.title }),
                    (0, i.jsx)(u.Is, {
                        className: P.descriptionInput,
                        placeholder: C.intl.string(C.t.mIjgJC),
                        value: H,
                        onChange: (e) => M(e),
                        maxLength: O.NO
                    }),
                    (0, i.jsx)(p.Z, { className: P.divider }),
                    (0, i.jsx)(m.X6q, {
                        className: P.rolesHeader,
                        variant: 'heading-md/semibold',
                        children: C.intl.string(C.t.TtIbPD)
                    }),
                    (0, i.jsx)(j.Z, {
                        guildId: b.id,
                        selectedChannelIds: D,
                        placeholder: C.intl.string(C.t.vephiI),
                        onChange: q,
                        helperText: C.intl.string(C.t.SoT6wc),
                        className: P.searchInput
                    }),
                    (0, i.jsx)(v.Z, {
                        guildId: b.id,
                        selectedRoleIds: Q,
                        disableEveryoneRole: !0,
                        placeholder: C.intl.string(C.t.aFO1Iy),
                        onChange: z,
                        helperText: C.intl.string(C.t.Mbvpv7),
                        className: P.searchInput,
                        selectableRoleFilter: (e) => !e.managed
                    }),
                    null == X.roles ? null : (0, i.jsx)(m.pdY, { error: X.roles }),
                    (0, i.jsx)(_, {
                        guild: b,
                        roleIds: Q
                    }),
                    (0, i.jsx)(p.Z, { className: P.divider }),
                    (0, i.jsxs)('div', {
                        className: P.emojiQuestionContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: P.emojiQuestionText,
                                children: [
                                    (0, i.jsx)(m.X6q, {
                                        variant: 'heading-md/semibold',
                                        children: C.intl.string(C.t['4ahTBg'])
                                    }),
                                    (0, i.jsx)(m.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        children: C.intl.string(C.t.Iv9RGh)
                                    })
                                ]
                            }),
                            (0, i.jsx)(N.Z, {
                                emoji: E,
                                setEmoji: T,
                                channel: k
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(d.G, {
                actions: L,
                leading: (0, i.jsx)(m.Avr, {
                    text: C.intl.string(C.t.N86XcH),
                    onClick: () => {
                        (g(), n());
                    },
                    variant: 'critical'
                })
            })
        ]
    });
}
function _(e) {
    let { guild: t, roleIds: n } = e,
        r = (0, s.e7)([g.Z], () => g.Z.getRoles(t.id)),
        l = Array.from(n)
            .map((e) => r[e])
            .filter(f.lm)
            .find(b.F);
    return null == l
        ? null
        : (0, i.jsx)('div', {
              className: P.notice,
              children: (0, i.jsxs)('div', {
                  className: P.noticeMessage,
                  children: [
                      (0, i.jsx)(m.P4T, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: 'currentColor',
                          className: P.noticeIcon
                      }),
                      (0, i.jsx)(m.Text, {
                          variant: 'text-sm/normal',
                          children: C.intl.format(C.t['5zPJER'], { permissions: (0, b.i)(t, l).join(', ') })
                      })
                  ]
              })
          });
}
