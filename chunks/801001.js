n.d(t, { default: () => y }), n(388685), n(953529), n(642613);
var l = n(255367),
    i = n(73800),
    r = n(392711),
    o = n.n(r),
    s = n(442837),
    a = n(481060),
    c = n(706371),
    d = n(563115),
    u = n(313201),
    m = n(661824),
    h = n(984933),
    j = n(430824),
    x = n(823379),
    p = n(402148),
    g = n(570961),
    v = n(208665),
    f = n(460117),
    b = n(290511),
    N = n(388032),
    I = n(663362);
function y(e) {
    let { transitionState: t, onClose: n, onSave: r, onDelete: j, option: x, guild: p, prompt: y, index: k } = e,
        C = (0, u.Dt)(),
        P = (0, s.e7)([h.ZP], () => h.ZP.getDefaultChannel(p.id)),
        [S, _] = i.useState(() => {
            var e;
            return null != (e = null == x ? void 0 : x.emoji) ? e : null;
        }),
        [z, w] = i.useState(() => {
            var e;
            return null != (e = null == x ? void 0 : x.title) ? e : '';
        }),
        [B, E] = i.useState(() => {
            var e;
            return null != (e = null == x ? void 0 : x.description) ? e : '';
        }),
        [T, R] = i.useState(() => {
            var e;
            return new Set(null != (e = null == x ? void 0 : x.channelIds) ? e : []);
        }),
        [Z, H] = i.useState(() => {
            var e;
            return new Set(null != (e = null == x ? void 0 : x.roleIds) ? e : []);
        }),
        [L, D] = i.useState({}),
        M = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            var e;
            return null == (e = M.current) ? void 0 : e.focus();
        }, []),
        (0, l.jsxs)(a.Y0X, {
            transitionState: t,
            'aria-labelledby': C,
            children: [
                (0, l.jsxs)('div', {
                    className: I.container,
                    children: [
                        (0, l.jsx)(a.olH, {
                            className: I.closeButton,
                            onClick: n
                        }),
                        (0, l.jsx)(a.Text, {
                            className: I.questionNumber,
                            variant: 'text-xs/semibold',
                            color: 'text-muted',
                            children: N.intl.format(N.t.yjS3zs, { index: k + 1 })
                        }),
                        (0, l.jsx)(a.X6q, {
                            id: C,
                            className: I.header,
                            variant: 'heading-lg/semibold',
                            children: null != y.title && y.title.length > 0 ? y.title : N.intl.string(N.t.vY91Cw)
                        }),
                        (0, l.jsx)(a.X6q, {
                            className: I.nameHeader,
                            variant: 'heading-md/semibold',
                            children: N.intl.string(N.t.VWdcBg)
                        }),
                        (0, l.jsx)(a.oil, {
                            inputRef: M,
                            placeholder: N.intl.string(N.t.EHe6gY),
                            value: z,
                            onChange: (e) => w(e),
                            maxLength: b.NE,
                            autoFocus: !0
                        }),
                        (0, l.jsx)(a.pdY, { error: L.title }),
                        (0, l.jsx)(a.oil, {
                            className: I.descriptionInput,
                            placeholder: N.intl.string(N.t.mIjgJC),
                            value: B,
                            onChange: (e) => E(e),
                            maxLength: b.NO
                        }),
                        (0, l.jsx)(m.Z, { className: I.divider }),
                        (0, l.jsx)(a.X6q, {
                            className: I.rolesHeader,
                            variant: 'heading-md/semibold',
                            children: N.intl.string(N.t.TtIbPD)
                        }),
                        (0, l.jsx)(c.Z, {
                            guildId: p.id,
                            selectedChannelIds: T,
                            placeholder: N.intl.string(N.t.vephiI),
                            onChange: R,
                            helperText: N.intl.string(N.t.SoT6wc),
                            className: I.searchInput
                        }),
                        (0, l.jsx)(d.Z, {
                            guildId: p.id,
                            selectedRoleIds: Z,
                            disableEveryoneRole: !0,
                            placeholder: N.intl.string(N.t.aFO1Iy),
                            onChange: H,
                            helperText: N.intl.string(N.t.Mbvpv7),
                            className: I.searchInput,
                            selectableRoleFilter: (e) => !e.managed
                        }),
                        null == L.roles ? null : (0, l.jsx)(a.pdY, { error: L.roles }),
                        (0, l.jsx)(O, {
                            guild: p,
                            roleIds: Z
                        }),
                        (0, l.jsx)(m.Z, { className: I.divider }),
                        (0, l.jsxs)('div', {
                            className: I.emojiQuestionContainer,
                            children: [
                                (0, l.jsxs)('div', {
                                    className: I.emojiQuestionText,
                                    children: [
                                        (0, l.jsx)(a.X6q, {
                                            variant: 'heading-md/semibold',
                                            children: N.intl.string(N.t['4ahTBg'])
                                        }),
                                        (0, l.jsx)(a.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: N.intl.string(N.t.Iv9RGh)
                                        })
                                    ]
                                }),
                                (0, l.jsx)(f.Z, {
                                    emoji: S,
                                    setEmoji: _,
                                    channel: P
                                })
                            ]
                        })
                    ]
                }),
                (0, l.jsx)(a.mzw, {
                    children: (0, l.jsxs)('div', {
                        className: I.footerButtons,
                        children: [
                            (0, l.jsx)('div', {
                                className: I.removeButton,
                                children: (0, l.jsx)(a.zxk, {
                                    size: a.zxk.Sizes.SMALL,
                                    look: a.zxk.Looks.LINK,
                                    color: a.zxk.Colors.RED,
                                    onClick: () => {
                                        j(), n();
                                    },
                                    children: N.intl.string(N.t.N86XcH)
                                })
                            }),
                            (0, l.jsxs)('div', {
                                className: I.rightButtons,
                                children: [
                                    (0, l.jsx)(a.zxk, {
                                        onClick: n,
                                        size: a.zxk.Sizes.SMALL,
                                        look: a.zxk.Looks.LINK,
                                        color: a.zxk.Colors.PRIMARY,
                                        children: N.intl.string(N.t['ETE/oK'])
                                    }),
                                    (0, l.jsx)(a.zxk, {
                                        onClick: () => {
                                            var e;
                                            let t = {
                                                    id: null != (e = null == x ? void 0 : x.id) ? e : ''.concat(Date.now()),
                                                    title: z,
                                                    description: B,
                                                    channelIds: Array.from(T).sort(),
                                                    roleIds: Array.from(Z).sort(),
                                                    emoji: null == S ? void 0 : S
                                                },
                                                l = (function (e, t, n, l) {
                                                    let i = {};
                                                    l.title.length <= 0 && (i.title = N.intl.string(N.t.p3PKzM));
                                                    let r = (0, g.en)(e, t, n, l);
                                                    return null != r && (i.roles = r), i;
                                                })(p, v.Z.editedOnboardingPrompts, y, t);
                                            D(l), o().isEmpty(l) && (r(t), n());
                                        },
                                        children: N.intl.string(N.t.R3BPHx)
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    );
}
function O(e) {
    let { guild: t, roleIds: n } = e,
        i = (0, s.e7)([j.Z], () => j.Z.getRoles(t.id)),
        r = Array.from(n)
            .map((e) => i[e])
            .filter(x.lm)
            .find(p.F);
    return null == r
        ? null
        : (0, l.jsx)('div', {
              className: I.notice,
              children: (0, l.jsxs)('div', {
                  className: I.noticeMessage,
                  children: [
                      (0, l.jsx)(a.P4T, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: 'currentColor',
                          className: I.noticeIcon
                      }),
                      (0, l.jsx)(a.Text, {
                          variant: 'text-sm/normal',
                          children: N.intl.format(N.t['5zPJER'], { permissions: (0, p.i)(t, r).join(', ') })
                      })
                  ]
              })
          });
}
