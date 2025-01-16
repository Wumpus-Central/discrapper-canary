n.r(t),
    n.d(t, {
        default: function () {
            return C;
        }
    }),
    n(47120);
var i = n(200651),
    o = n(192379),
    l = n(392711),
    r = n.n(l),
    s = n(442837),
    a = n(481060),
    d = n(706371),
    c = n(563115),
    u = n(313201),
    m = n(661824),
    h = n(984933),
    v = n(430824),
    x = n(823379),
    j = n(402148),
    g = n(570961),
    p = n(208665),
    I = n(460117),
    N = n(290511),
    f = n(388032),
    B = n(291201);
function C(e) {
    let { transitionState: t, onClose: n, onSave: l, onDelete: v, option: x, guild: j, prompt: C, index: b } = e,
        S = (0, u.Dt)(),
        T = (0, s.e7)([h.ZP], () => h.ZP.getDefaultChannel(j.id)),
        [Z, E] = o.useState(() => {
            var e;
            return null !== (e = null == x ? void 0 : x.emoji) && void 0 !== e ? e : null;
        }),
        [k, M] = o.useState(() => {
            var e;
            return null !== (e = null == x ? void 0 : x.title) && void 0 !== e ? e : '';
        }),
        [H, R] = o.useState(() => {
            var e;
            return null !== (e = null == x ? void 0 : x.description) && void 0 !== e ? e : '';
        }),
        [L, P] = o.useState(() => {
            var e;
            return new Set(null !== (e = null == x ? void 0 : x.channelIds) && void 0 !== e ? e : []);
        }),
        [y, z] = o.useState(() => {
            var e;
            return new Set(null !== (e = null == x ? void 0 : x.roleIds) && void 0 !== e ? e : []);
        }),
        [w, A] = o.useState({}),
        D = o.useRef(null);
    return (
        o.useLayoutEffect(() => {
            var e;
            return null === (e = D.current) || void 0 === e ? void 0 : e.focus();
        }, []),
        (0, i.jsxs)(a.ModalRoot, {
            transitionState: t,
            'aria-labelledby': S,
            children: [
                (0, i.jsxs)('div', {
                    className: B.container,
                    children: [
                        (0, i.jsx)(a.ModalCloseButton, {
                            className: B.closeButton,
                            onClick: n
                        }),
                        (0, i.jsx)(a.Text, {
                            className: B.questionNumber,
                            variant: 'text-xs/semibold',
                            color: 'text-muted',
                            children: f.intl.format(f.t.yjS3zs, { index: b + 1 })
                        }),
                        (0, i.jsx)(a.Heading, {
                            id: S,
                            className: B.header,
                            variant: 'heading-lg/semibold',
                            children: null != C.title && C.title.length > 0 ? C.title : f.intl.string(f.t.vY91Cw)
                        }),
                        (0, i.jsx)(a.Heading, {
                            className: B.nameHeader,
                            variant: 'heading-md/semibold',
                            children: f.intl.string(f.t.VWdcBg)
                        }),
                        (0, i.jsx)(a.TextInput, {
                            inputRef: D,
                            placeholder: f.intl.string(f.t.EHe6gY),
                            value: k,
                            onChange: (e) => M(e),
                            maxLength: N.NE,
                            autoFocus: !0
                        }),
                        (0, i.jsx)(a.InputError, { error: w.title }),
                        (0, i.jsx)(a.TextInput, {
                            className: B.descriptionInput,
                            placeholder: f.intl.string(f.t.mIjgJC),
                            value: H,
                            onChange: (e) => R(e),
                            maxLength: N.NO
                        }),
                        (0, i.jsx)(m.Z, { className: B.divider }),
                        (0, i.jsx)(a.Heading, {
                            className: B.rolesHeader,
                            variant: 'heading-md/semibold',
                            children: f.intl.string(f.t.TtIbPD)
                        }),
                        (0, i.jsx)(d.Z, {
                            guildId: j.id,
                            selectedChannelIds: L,
                            placeholder: f.intl.string(f.t.vephiI),
                            onChange: P,
                            helperText: f.intl.string(f.t.SoT6wc),
                            className: B.searchInput
                        }),
                        (0, i.jsx)(c.Z, {
                            guildId: j.id,
                            selectedRoleIds: y,
                            disableEveryoneRole: !0,
                            placeholder: f.intl.string(f.t.aFO1Iy),
                            onChange: z,
                            helperText: f.intl.string(f.t.Mbvpv7),
                            className: B.searchInput,
                            selectableRoleFilter: (e) => !e.managed
                        }),
                        null == w.roles ? null : (0, i.jsx)(a.InputError, { error: w.roles }),
                        (0, i.jsx)(_, {
                            guild: j,
                            roleIds: y
                        }),
                        (0, i.jsx)(m.Z, { className: B.divider }),
                        (0, i.jsxs)('div', {
                            className: B.emojiQuestionContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: B.emojiQuestionText,
                                    children: [
                                        (0, i.jsx)(a.Heading, {
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
                                (0, i.jsx)(I.Z, {
                                    emoji: Z,
                                    setEmoji: E,
                                    channel: T
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(a.ModalFooter, {
                    children: (0, i.jsxs)('div', {
                        className: B.footerButtons,
                        children: [
                            (0, i.jsx)('div', {
                                className: B.removeButton,
                                children: (0, i.jsx)(a.Button, {
                                    size: a.Button.Sizes.SMALL,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.RED,
                                    onClick: () => {
                                        v(), n();
                                    },
                                    children: f.intl.string(f.t.N86XcH)
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: B.rightButtons,
                                children: [
                                    (0, i.jsx)(a.Button, {
                                        onClick: n,
                                        size: a.Button.Sizes.SMALL,
                                        look: a.Button.Looks.LINK,
                                        color: a.Button.Colors.PRIMARY,
                                        children: f.intl.string(f.t['ETE/oK'])
                                    }),
                                    (0, i.jsx)(a.Button, {
                                        onClick: () => {
                                            var e;
                                            let t = {
                                                    id: null !== (e = null == x ? void 0 : x.id) && void 0 !== e ? e : ''.concat(Date.now()),
                                                    title: k,
                                                    description: H,
                                                    channelIds: Array.from(L).sort(),
                                                    roleIds: Array.from(y).sort(),
                                                    emoji: null == Z ? void 0 : Z
                                                },
                                                i = (function (e, t, n, i) {
                                                    let o = {};
                                                    i.title.length <= 0 && (o.title = f.intl.string(f.t.p3PKzM));
                                                    let l = (0, g.en)(e, t, n, i);
                                                    return null != l && (o.roles = l), o;
                                                })(j, p.Z.editedOnboardingPrompts, C, t);
                                            A(i), r().isEmpty(i) && (l(t), n());
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
    let { guild: t, roleIds: n } = e,
        o = (0, s.e7)([v.Z], () => v.Z.getRoles(t.id)),
        l = Array.from(n)
            .map((e) => o[e])
            .filter(x.lm)
            .find(j.F);
    return null == l
        ? null
        : (0, i.jsx)('div', {
              className: B.notice,
              children: (0, i.jsxs)('div', {
                  className: B.noticeMessage,
                  children: [
                      (0, i.jsx)(a.CircleWarningIcon, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: 'currentColor',
                          className: B.noticeIcon
                      }),
                      (0, i.jsx)(a.Text, {
                          variant: 'text-sm/normal',
                          children: f.intl.format(f.t['5zPJER'], { permissions: (0, j.i)(t, l).join(', ') })
                      })
                  ]
              })
          });
}
