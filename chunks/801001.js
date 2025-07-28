(n.d(t, { default: () => P }), n(388685), n(953529), n(642613));
var i = n(255367),
    l = n(73800),
    r = n(392711),
    o = n.n(r),
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
    f = n(402148),
    b = n(570961),
    y = n(208665),
    I = n(460117),
    N = n(290511),
    O = n(388032),
    C = n(663362);
function P(e) {
    let { transitionState: t, onClose: n, onSave: r, onDelete: g, option: f, guild: P, prompt: _, index: w } = e,
        Z = (0, h.Dt)(),
        k = (0, s.e7)([x.ZP], () => x.ZP.getDefaultChannel(P.id)),
        [E, T] = l.useState(() => {
            var e;
            return null != (e = null == f ? void 0 : f.emoji) ? e : null;
        }),
        [M, R] = l.useState(() => {
            var e;
            return null != (e = null == f ? void 0 : f.title) ? e : '';
        }),
        [B, H] = l.useState(() => {
            var e;
            return null != (e = null == f ? void 0 : f.description) ? e : '';
        }),
        [D, q] = l.useState(() => {
            var e;
            return new Set(null != (e = null == f ? void 0 : f.channelIds) ? e : []);
        }),
        [Q, z] = l.useState(() => {
            var e;
            return new Set(null != (e = null == f ? void 0 : f.roleIds) ? e : []);
        }),
        [X, Y] = l.useState({}),
        F = l.useRef(null);
    l.useLayoutEffect(() => {
        var e;
        return null == (e = F.current) ? void 0 : e.focus();
    }, []);
    let L = l.useCallback(() => {
            var e;
            let t = {
                    id: null != (e = null == f ? void 0 : f.id) ? e : ''.concat(Date.now()),
                    title: M,
                    description: B,
                    channelIds: Array.from(D).sort(),
                    roleIds: Array.from(Q).sort(),
                    emoji: null == E ? void 0 : E
                },
                i = (function (e, t, n, i) {
                    let l = {};
                    i.title.length <= 0 && (l.title = O.intl.string(O.t.p3PKzM));
                    let r = (0, b.en)(e, t, n, i);
                    return (null != r && (l.roles = r), l);
                })(P, y.Z.editedOnboardingPrompts, _, t);
            (Y(i), o().isEmpty(i) && (r(t), n()));
        }, [D, B, E, P, n, r, null == f ? void 0 : f.id, _, Q, M]),
        A = l.useMemo(
            () => [
                {
                    text: O.intl.string(O.t['ETE/oK']),
                    onClick: n,
                    variant: 'secondary'
                },
                {
                    text: O.intl.string(O.t.R3BPHx),
                    onClick: L,
                    variant: 'primary'
                }
            ],
            [L, n]
        );
    return (0, i.jsxs)(c.I, {
        transitionState: t,
        onClose: n,
        children: [
            (0, i.jsx)('div', {
                className: C.closeButton,
                children: (0, i.jsx)(a.P, { onClick: n })
            }),
            (0, i.jsxs)('div', {
                className: C.container,
                children: [
                    (0, i.jsx)(m.Text, {
                        className: C.questionNumber,
                        variant: 'text-xs/semibold',
                        color: 'text-muted',
                        children: O.intl.format(O.t.yjS3zs, { index: w + 1 })
                    }),
                    (0, i.jsx)(m.X6q, {
                        id: Z,
                        className: C.header,
                        variant: 'heading-lg/semibold',
                        children: null != _.title && _.title.length > 0 ? _.title : O.intl.string(O.t.vY91Cw)
                    }),
                    (0, i.jsx)(m.X6q, {
                        className: C.nameHeader,
                        variant: 'heading-md/semibold',
                        children: O.intl.string(O.t.VWdcBg)
                    }),
                    (0, i.jsx)(u.Is, {
                        inputRef: F,
                        placeholder: O.intl.string(O.t.EHe6gY),
                        value: M,
                        onChange: (e) => R(e),
                        maxLength: N.NE,
                        autoFocus: !0
                    }),
                    (0, i.jsx)(m.pdY, { error: X.title }),
                    (0, i.jsx)(u.Is, {
                        className: C.descriptionInput,
                        placeholder: O.intl.string(O.t.mIjgJC),
                        value: B,
                        onChange: (e) => H(e),
                        maxLength: N.NO
                    }),
                    (0, i.jsx)(p.Z, { className: C.divider }),
                    (0, i.jsx)(m.X6q, {
                        className: C.rolesHeader,
                        variant: 'heading-md/semibold',
                        children: O.intl.string(O.t.TtIbPD)
                    }),
                    (0, i.jsx)(j.Z, {
                        guildId: P.id,
                        selectedChannelIds: D,
                        placeholder: O.intl.string(O.t.vephiI),
                        onChange: q,
                        helperText: O.intl.string(O.t.SoT6wc),
                        className: C.searchInput
                    }),
                    (0, i.jsx)(v.Z, {
                        guildId: P.id,
                        selectedRoleIds: Q,
                        disableEveryoneRole: !0,
                        placeholder: O.intl.string(O.t.aFO1Iy),
                        onChange: z,
                        helperText: O.intl.string(O.t.Mbvpv7),
                        className: C.searchInput,
                        selectableRoleFilter: (e) => !e.managed
                    }),
                    null == X.roles ? null : (0, i.jsx)(m.pdY, { error: X.roles }),
                    (0, i.jsx)(S, {
                        guild: P,
                        roleIds: Q
                    }),
                    (0, i.jsx)(p.Z, { className: C.divider }),
                    (0, i.jsxs)('div', {
                        className: C.emojiQuestionContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: C.emojiQuestionText,
                                children: [
                                    (0, i.jsx)(m.X6q, {
                                        variant: 'heading-md/semibold',
                                        children: O.intl.string(O.t['4ahTBg'])
                                    }),
                                    (0, i.jsx)(m.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        children: O.intl.string(O.t.Iv9RGh)
                                    })
                                ]
                            }),
                            (0, i.jsx)(I.Z, {
                                emoji: E,
                                setEmoji: T,
                                channel: k
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(d.G, {
                actions: A,
                leading: (0, i.jsx)(m.Avr, {
                    text: O.intl.string(O.t.N86XcH),
                    onClick: () => {
                        (g(), n());
                    },
                    variant: 'critical'
                })
            })
        ]
    });
}
function S(e) {
    let { guild: t, roleIds: n } = e,
        l = (0, s.e7)([g.Z], () => g.Z.getManyRoles(t.id, n).find(f.F));
    return null == l
        ? null
        : (0, i.jsx)('div', {
              className: C.notice,
              children: (0, i.jsxs)('div', {
                  className: C.noticeMessage,
                  children: [
                      (0, i.jsx)(m.Mgn, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: 'currentColor',
                          className: C.noticeIcon
                      }),
                      (0, i.jsx)(m.Text, {
                          variant: 'text-sm/normal',
                          children: O.intl.format(O.t['5zPJER'], { permissions: (0, f.i)(t, l).join(', ') })
                      })
                  ]
              })
          });
}
