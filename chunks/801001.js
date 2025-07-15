(n.d(t, { default: () => P }), n(388685), n(953529), n(642613));
var i = n(255367),
    l = n(73800),
    r = n(392711),
    o = n.n(r),
    s = n(442837),
    a = n(146187),
    c = n(257465),
    d = n(369585),
    u = n(481060),
    m = n(706371),
    j = n(563115),
    v = n(313201),
    h = n(661824),
    p = n(984933),
    x = n(485386),
    g = n(823379),
    f = n(402148),
    b = n(570961),
    y = n(208665),
    N = n(460117),
    I = n(290511),
    O = n(388032),
    C = n(663362);
function P(e) {
    let { transitionState: t, onClose: n, onSave: r, onDelete: x, option: g, guild: f, prompt: P, index: _ } = e,
        w = (0, v.Dt)(),
        Z = (0, s.e7)([p.ZP], () => p.ZP.getDefaultChannel(f.id)),
        [k, E] = l.useState(() => {
            var e;
            return null != (e = null == g ? void 0 : g.emoji) ? e : null;
        }),
        [T, R] = l.useState(() => {
            var e;
            return null != (e = null == g ? void 0 : g.title) ? e : '';
        }),
        [B, H] = l.useState(() => {
            var e;
            return null != (e = null == g ? void 0 : g.description) ? e : '';
        }),
        [M, D] = l.useState(() => {
            var e;
            return new Set(null != (e = null == g ? void 0 : g.channelIds) ? e : []);
        }),
        [q, Q] = l.useState(() => {
            var e;
            return new Set(null != (e = null == g ? void 0 : g.roleIds) ? e : []);
        }),
        [X, z] = l.useState({}),
        Y = l.useRef(null);
    l.useLayoutEffect(() => {
        var e;
        return null == (e = Y.current) ? void 0 : e.focus();
    }, []);
    let A = l.useCallback(() => {
            var e;
            let t = {
                    id: null != (e = null == g ? void 0 : g.id) ? e : ''.concat(Date.now()),
                    title: T,
                    description: B,
                    channelIds: Array.from(M).sort(),
                    roleIds: Array.from(q).sort(),
                    emoji: null == k ? void 0 : k
                },
                i = (function (e, t, n, i) {
                    let l = {};
                    i.title.length <= 0 && (l.title = O.intl.string(O.t.p3PKzM));
                    let r = (0, b.en)(e, t, n, i);
                    return (null != r && (l.roles = r), l);
                })(f, y.Z.editedOnboardingPrompts, P, t);
            (z(i), o().isEmpty(i) && (r(t), n()));
        }, [M, B, k, f, n, r, null == g ? void 0 : g.id, P, q, T]),
        F = l.useMemo(
            () => [
                {
                    text: O.intl.string(O.t['ETE/oK']),
                    onClick: n,
                    variant: 'secondary'
                },
                {
                    text: O.intl.string(O.t.R3BPHx),
                    onClick: A,
                    variant: 'primary'
                }
            ],
            [A, n]
        );
    return (0, i.jsxs)(c.IX, {
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
                    (0, i.jsx)(u.Text, {
                        className: C.questionNumber,
                        variant: 'text-xs/semibold',
                        color: 'text-muted',
                        children: O.intl.format(O.t.yjS3zs, { index: _ + 1 })
                    }),
                    (0, i.jsx)(u.X6q, {
                        id: w,
                        className: C.header,
                        variant: 'heading-lg/semibold',
                        children: null != P.title && P.title.length > 0 ? P.title : O.intl.string(O.t.vY91Cw)
                    }),
                    (0, i.jsx)(u.X6q, {
                        className: C.nameHeader,
                        variant: 'heading-md/semibold',
                        children: O.intl.string(O.t.VWdcBg)
                    }),
                    (0, i.jsx)(u.oil, {
                        inputRef: Y,
                        placeholder: O.intl.string(O.t.EHe6gY),
                        value: T,
                        onChange: (e) => R(e),
                        maxLength: I.NE,
                        autoFocus: !0
                    }),
                    (0, i.jsx)(u.pdY, { error: X.title }),
                    (0, i.jsx)(u.oil, {
                        className: C.descriptionInput,
                        placeholder: O.intl.string(O.t.mIjgJC),
                        value: B,
                        onChange: (e) => H(e),
                        maxLength: I.NO
                    }),
                    (0, i.jsx)(h.Z, { className: C.divider }),
                    (0, i.jsx)(u.X6q, {
                        className: C.rolesHeader,
                        variant: 'heading-md/semibold',
                        children: O.intl.string(O.t.TtIbPD)
                    }),
                    (0, i.jsx)(m.Z, {
                        guildId: f.id,
                        selectedChannelIds: M,
                        placeholder: O.intl.string(O.t.vephiI),
                        onChange: D,
                        helperText: O.intl.string(O.t.SoT6wc),
                        className: C.searchInput
                    }),
                    (0, i.jsx)(j.Z, {
                        guildId: f.id,
                        selectedRoleIds: q,
                        disableEveryoneRole: !0,
                        placeholder: O.intl.string(O.t.aFO1Iy),
                        onChange: Q,
                        helperText: O.intl.string(O.t.Mbvpv7),
                        className: C.searchInput,
                        selectableRoleFilter: (e) => !e.managed
                    }),
                    null == X.roles ? null : (0, i.jsx)(u.pdY, { error: X.roles }),
                    (0, i.jsx)(S, {
                        guild: f,
                        roleIds: q
                    }),
                    (0, i.jsx)(h.Z, { className: C.divider }),
                    (0, i.jsxs)('div', {
                        className: C.emojiQuestionContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: C.emojiQuestionText,
                                children: [
                                    (0, i.jsx)(u.X6q, {
                                        variant: 'heading-md/semibold',
                                        children: O.intl.string(O.t['4ahTBg'])
                                    }),
                                    (0, i.jsx)(u.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        children: O.intl.string(O.t.Iv9RGh)
                                    })
                                ]
                            }),
                            (0, i.jsx)(N.Z, {
                                emoji: k,
                                setEmoji: E,
                                channel: Z
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(d.G, {
                actions: F,
                leading: (0, i.jsx)(u.Avr, {
                    text: O.intl.string(O.t.N86XcH),
                    onClick: () => {
                        (x(), n());
                    },
                    variant: 'critical'
                })
            })
        ]
    });
}
function S(e) {
    let { guild: t, roleIds: n } = e,
        l = (0, s.e7)([x.Z], () => x.Z.getRoles(t.id)),
        r = Array.from(n)
            .map((e) => l[e])
            .filter(g.lm)
            .find(f.F);
    return null == r
        ? null
        : (0, i.jsx)('div', {
              className: C.notice,
              children: (0, i.jsxs)('div', {
                  className: C.noticeMessage,
                  children: [
                      (0, i.jsx)(u.P4T, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: 'currentColor',
                          className: C.noticeIcon
                      }),
                      (0, i.jsx)(u.Text, {
                          variant: 'text-sm/normal',
                          children: O.intl.format(O.t['5zPJER'], { permissions: (0, f.i)(t, r).join(', ') })
                      })
                  ]
              })
          });
}
