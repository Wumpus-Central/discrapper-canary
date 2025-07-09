(n.d(t, { default: () => O }), n(388685), n(953529), n(642613));
var r = n(255367),
    i = n(73800),
    l = n(392711),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
    c = n(706371),
    d = n(563115),
    u = n(313201),
    m = n(661824),
    h = n(984933),
    j = n(485386),
    v = n(823379),
    x = n(402148),
    p = n(570961),
    g = n(208665),
    f = n(460117),
    b = n(290511),
    N = n(388032),
    y = n(663362);
function O(e) {
    let { transitionState: t, onClose: n, onSave: l, onDelete: j, option: v, guild: x, prompt: O, index: C } = e,
        P = (0, u.Dt)(),
        _ = (0, s.e7)([h.ZP], () => h.ZP.getDefaultChannel(x.id)),
        [B, S] = i.useState(() => {
            var e;
            return null != (e = null == v ? void 0 : v.emoji) ? e : null;
        }),
        [k, w] = i.useState(() => {
            var e;
            return null != (e = null == v ? void 0 : v.title) ? e : '';
        }),
        [E, Z] = i.useState(() => {
            var e;
            return null != (e = null == v ? void 0 : v.description) ? e : '';
        }),
        [T, z] = i.useState(() => {
            var e;
            return new Set(null != (e = null == v ? void 0 : v.channelIds) ? e : []);
        }),
        [R, H] = i.useState(() => {
            var e;
            return new Set(null != (e = null == v ? void 0 : v.roleIds) ? e : []);
        }),
        [M, D] = i.useState({}),
        q = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            var e;
            return null == (e = q.current) ? void 0 : e.focus();
        }, []),
        (0, r.jsxs)(a.Y0X, {
            transitionState: t,
            'aria-labelledby': P,
            parentComponent: 'EditOnboardingPromptOptionModal',
            children: [
                (0, r.jsxs)('div', {
                    className: y.container,
                    children: [
                        (0, r.jsx)(a.olH, {
                            className: y.closeButton,
                            onClick: n
                        }),
                        (0, r.jsx)(a.Text, {
                            className: y.questionNumber,
                            variant: 'text-xs/semibold',
                            color: 'text-muted',
                            children: N.intl.format(N.t.yjS3zs, { index: C + 1 })
                        }),
                        (0, r.jsx)(a.X6q, {
                            id: P,
                            className: y.header,
                            variant: 'heading-lg/semibold',
                            children: null != O.title && O.title.length > 0 ? O.title : N.intl.string(N.t.vY91Cw)
                        }),
                        (0, r.jsx)(a.X6q, {
                            className: y.nameHeader,
                            variant: 'heading-md/semibold',
                            children: N.intl.string(N.t.VWdcBg)
                        }),
                        (0, r.jsx)(a.oil, {
                            inputRef: q,
                            placeholder: N.intl.string(N.t.EHe6gY),
                            value: k,
                            onChange: (e) => w(e),
                            maxLength: b.NE,
                            autoFocus: !0
                        }),
                        (0, r.jsx)(a.pdY, { error: M.title }),
                        (0, r.jsx)(a.oil, {
                            className: y.descriptionInput,
                            placeholder: N.intl.string(N.t.mIjgJC),
                            value: E,
                            onChange: (e) => Z(e),
                            maxLength: b.NO
                        }),
                        (0, r.jsx)(m.Z, { className: y.divider }),
                        (0, r.jsx)(a.X6q, {
                            className: y.rolesHeader,
                            variant: 'heading-md/semibold',
                            children: N.intl.string(N.t.TtIbPD)
                        }),
                        (0, r.jsx)(c.Z, {
                            guildId: x.id,
                            selectedChannelIds: T,
                            placeholder: N.intl.string(N.t.vephiI),
                            onChange: z,
                            helperText: N.intl.string(N.t.SoT6wc),
                            className: y.searchInput
                        }),
                        (0, r.jsx)(d.Z, {
                            guildId: x.id,
                            selectedRoleIds: R,
                            disableEveryoneRole: !0,
                            placeholder: N.intl.string(N.t.aFO1Iy),
                            onChange: H,
                            helperText: N.intl.string(N.t.Mbvpv7),
                            className: y.searchInput,
                            selectableRoleFilter: (e) => !e.managed
                        }),
                        null == M.roles ? null : (0, r.jsx)(a.pdY, { error: M.roles }),
                        (0, r.jsx)(I, {
                            guild: x,
                            roleIds: R
                        }),
                        (0, r.jsx)(m.Z, { className: y.divider }),
                        (0, r.jsxs)('div', {
                            className: y.emojiQuestionContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: y.emojiQuestionText,
                                    children: [
                                        (0, r.jsx)(a.X6q, {
                                            variant: 'heading-md/semibold',
                                            children: N.intl.string(N.t['4ahTBg'])
                                        }),
                                        (0, r.jsx)(a.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-muted',
                                            children: N.intl.string(N.t.Iv9RGh)
                                        })
                                    ]
                                }),
                                (0, r.jsx)(f.Z, {
                                    emoji: B,
                                    setEmoji: S,
                                    channel: _
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(a.mzw, {
                    children: (0, r.jsxs)('div', {
                        className: y.footerButtons,
                        children: [
                            (0, r.jsx)('div', {
                                className: y.removeButton,
                                children: (0, r.jsx)(a.zxk, {
                                    variant: 'critical-secondary',
                                    size: 'sm',
                                    text: N.intl.string(N.t.N86XcH),
                                    onClick: () => {
                                        (j(), n());
                                    }
                                })
                            }),
                            (0, r.jsx)('div', {
                                className: y.rightButtons,
                                children: (0, r.jsxs)(a.hE2, {
                                    direction: 'horizontal-reverse',
                                    children: [
                                        (0, r.jsx)(a.zxk, {
                                            variant: 'secondary',
                                            size: 'sm',
                                            text: N.intl.string(N.t['ETE/oK']),
                                            onClick: n
                                        }),
                                        (0, r.jsx)(a.zxk, {
                                            variant: 'primary',
                                            text: N.intl.string(N.t.R3BPHx),
                                            onClick: () => {
                                                var e;
                                                let t = {
                                                        id: null != (e = null == v ? void 0 : v.id) ? e : ''.concat(Date.now()),
                                                        title: k,
                                                        description: E,
                                                        channelIds: Array.from(T).sort(),
                                                        roleIds: Array.from(R).sort(),
                                                        emoji: null == B ? void 0 : B
                                                    },
                                                    r = (function (e, t, n, r) {
                                                        let i = {};
                                                        r.title.length <= 0 && (i.title = N.intl.string(N.t.p3PKzM));
                                                        let l = (0, p.en)(e, t, n, r);
                                                        return (null != l && (i.roles = l), i);
                                                    })(x, g.Z.editedOnboardingPrompts, O, t);
                                                (D(r), o().isEmpty(r) && (l(t), n()));
                                            }
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    );
}
function I(e) {
    let { guild: t, roleIds: n } = e,
        i = (0, s.e7)([j.Z], () => j.Z.getRoles(t.id)),
        l = Array.from(n)
            .map((e) => i[e])
            .filter(v.lm)
            .find(x.F);
    return null == l
        ? null
        : (0, r.jsx)('div', {
              className: y.notice,
              children: (0, r.jsxs)('div', {
                  className: y.noticeMessage,
                  children: [
                      (0, r.jsx)(a.P4T, {
                          size: 'custom',
                          width: 20,
                          height: 20,
                          color: 'currentColor',
                          className: y.noticeIcon
                      }),
                      (0, r.jsx)(a.Text, {
                          variant: 'text-sm/normal',
                          children: N.intl.format(N.t['5zPJER'], { permissions: (0, x.i)(t, l).join(', ') })
                      })
                  ]
              })
          });
}
