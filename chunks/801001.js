t.d(n, { default: () => k }), t(47120);
var i = t(200651),
    l = t(192379),
    o = t(392711),
    s = t.n(o),
    r = t(442837),
    a = t(481060),
    d = t(706371),
    c = t(563115),
    u = t(313201),
    m = t(661824),
    h = t(984933),
    x = t(430824),
    v = t(823379),
    j = t(402148),
    g = t(570961),
    p = t(208665),
    N = t(460117),
    I = t(290511),
    f = t(388032),
    C = t(291201);
function k(e) {
    let { transitionState: n, onClose: t, onSave: o, onDelete: x, option: v, guild: j, prompt: k, index: b } = e,
        z = (0, u.Dt)(),
        B = (0, r.e7)([h.ZP], () => h.ZP.getDefaultChannel(j.id)),
        [S, Z] = l.useState(() => {
            var e;
            return null !== (e = null == v ? void 0 : v.emoji) && void 0 !== e ? e : null;
        }),
        [T, E] = l.useState(() => {
            var e;
            return null !== (e = null == v ? void 0 : v.title) && void 0 !== e ? e : '';
        }),
        [R, y] = l.useState(() => {
            var e;
            return null !== (e = null == v ? void 0 : v.description) && void 0 !== e ? e : '';
        }),
        [L, M] = l.useState(() => {
            var e;
            return new Set(null !== (e = null == v ? void 0 : v.channelIds) && void 0 !== e ? e : []);
        }),
        [H, P] = l.useState(() => {
            var e;
            return new Set(null !== (e = null == v ? void 0 : v.roleIds) && void 0 !== e ? e : []);
        }),
        [w, q] = l.useState({}),
        Y = l.useRef(null);
    return (
        l.useLayoutEffect(() => {
            var e;
            return null === (e = Y.current) || void 0 === e ? void 0 : e.focus();
        }, []),
        (0, i.jsxs)(a.Y0X, {
            transitionState: n,
            'aria-labelledby': z,
            children: [
                (0, i.jsxs)('div', {
                    className: C.container,
                    children: [
                        (0, i.jsx)(a.olH, {
                            className: C.closeButton,
                            onClick: t
                        }),
                        (0, i.jsx)(a.Text, {
                            className: C.questionNumber,
                            variant: 'text-xs/semibold',
                            color: 'text-muted',
                            children: f.intl.format(f.t.yjS3zs, { index: b + 1 })
                        }),
                        (0, i.jsx)(a.X6q, {
                            id: z,
                            className: C.header,
                            variant: 'heading-lg/semibold',
                            children: null != k.title && k.title.length > 0 ? k.title : f.intl.string(f.t.vY91Cw)
                        }),
                        (0, i.jsx)(a.X6q, {
                            className: C.nameHeader,
                            variant: 'heading-md/semibold',
                            children: f.intl.string(f.t.VWdcBg)
                        }),
                        (0, i.jsx)(a.oil, {
                            inputRef: Y,
                            placeholder: f.intl.string(f.t.EHe6gY),
                            value: T,
                            onChange: (e) => E(e),
                            maxLength: I.NE,
                            autoFocus: !0
                        }),
                        (0, i.jsx)(a.pdY, { error: w.title }),
                        (0, i.jsx)(a.oil, {
                            className: C.descriptionInput,
                            placeholder: f.intl.string(f.t.mIjgJC),
                            value: R,
                            onChange: (e) => y(e),
                            maxLength: I.NO
                        }),
                        (0, i.jsx)(m.Z, { className: C.divider }),
                        (0, i.jsx)(a.X6q, {
                            className: C.rolesHeader,
                            variant: 'heading-md/semibold',
                            children: f.intl.string(f.t.TtIbPD)
                        }),
                        (0, i.jsx)(d.Z, {
                            guildId: j.id,
                            selectedChannelIds: L,
                            placeholder: f.intl.string(f.t.vephiI),
                            onChange: M,
                            helperText: f.intl.string(f.t.SoT6wc),
                            className: C.searchInput
                        }),
                        (0, i.jsx)(c.Z, {
                            guildId: j.id,
                            selectedRoleIds: H,
                            disableEveryoneRole: !0,
                            placeholder: f.intl.string(f.t.aFO1Iy),
                            onChange: P,
                            helperText: f.intl.string(f.t.Mbvpv7),
                            className: C.searchInput,
                            selectableRoleFilter: (e) => !e.managed
                        }),
                        null == w.roles ? null : (0, i.jsx)(a.pdY, { error: w.roles }),
                        (0, i.jsx)(_, {
                            guild: j,
                            roleIds: H
                        }),
                        (0, i.jsx)(m.Z, { className: C.divider }),
                        (0, i.jsxs)('div', {
                            className: C.emojiQuestionContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: C.emojiQuestionText,
                                    children: [
                                        (0, i.jsx)(a.X6q, {
                                            variant: 'heading-md/semibold',
                                            children: f.intl.string(f.t['4ahTBg'])
                                        }),
                                        (0, i.jsx)(a.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: f.intl.string(f.t.Iv9RGh)
                                        })
                                    ]
                                }),
                                (0, i.jsx)(N.Z, {
                                    emoji: S,
                                    setEmoji: Z,
                                    channel: B
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(a.mzw, {
                    children: (0, i.jsxs)('div', {
                        className: C.footerButtons,
                        children: [
                            (0, i.jsx)('div', {
                                className: C.removeButton,
                                children: (0, i.jsx)(a.zxk, {
                                    size: a.zxk.Sizes.SMALL,
                                    look: a.zxk.Looks.LINK,
                                    color: a.zxk.Colors.RED,
                                    onClick: () => {
                                        x(), t();
                                    },
                                    children: f.intl.string(f.t.N86XcH)
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: C.rightButtons,
                                children: [
                                    (0, i.jsx)(a.zxk, {
                                        onClick: t,
                                        size: a.zxk.Sizes.SMALL,
                                        look: a.zxk.Looks.LINK,
                                        color: a.zxk.Colors.PRIMARY,
                                        children: f.intl.string(f.t['ETE/oK'])
                                    }),
                                    (0, i.jsx)(a.zxk, {
                                        onClick: () => {
                                            var e;
                                            let n = {
                                                    id: null !== (e = null == v ? void 0 : v.id) && void 0 !== e ? e : ''.concat(Date.now()),
                                                    title: T,
                                                    description: R,
                                                    channelIds: Array.from(L).sort(),
                                                    roleIds: Array.from(H).sort(),
                                                    emoji: null == S ? void 0 : S
                                                },
                                                i = (function (e, n, t, i) {
                                                    let l = {};
                                                    i.title.length <= 0 && (l.title = f.intl.string(f.t.p3PKzM));
                                                    let o = (0, g.en)(e, n, t, i);
                                                    return null != o && (l.roles = o), l;
                                                })(j, p.Z.editedOnboardingPrompts, k, n);
                                            q(i), s().isEmpty(i) && (o(n), t());
                                        },
                                        children: f.intl.string(f.t.R3BPHx)
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
function _(e) {
    let { guild: n, roleIds: t } = e,
        l = (0, r.e7)([x.Z], () => x.Z.getRoles(n.id)),
        o = Array.from(t)
            .map((e) => l[e])
            .filter(v.lm)
            .find(j.F);
    return null == o
        ? null
        : (0, i.jsx)('div', {
              className: C.notice,
              children: (0, i.jsxs)('div', {
                  className: C.noticeMessage,
                  children: [
                      (0, i.jsx)(a.P4T, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: 'currentColor',
                          className: C.noticeIcon
                      }),
                      (0, i.jsx)(a.Text, {
                          variant: 'text-sm/normal',
                          children: f.intl.format(f.t['5zPJER'], { permissions: (0, j.i)(n, o).join(', ') })
                      })
                  ]
              })
          });
}
