n.d(l, { default: () => k }), n(47120);
var t = n(200651),
    r = n(192379),
    a = n(658722),
    s = n.n(a),
    o = n(399606),
    i = n(481060),
    u = n(313201),
    d = n(734893),
    c = n(271383),
    m = n(430824),
    g = n(594174),
    h = n(903518),
    x = n(580357),
    v = n(388032),
    p = n(916753);
function k(e) {
    var l, n, a, k;
    let { transitionState: f, onClose: I, guildId: _, welcomeMessage: j, onSave: b } = e;
    let C = (0, u.Dt)(),
        [z, L] = r.useState({ ...j }),
        N = (0, o.e7)([m.Z], () => m.Z.getGuild(_)),
        B = r.useCallback(
            (e) => {
                let l = {};
                return Promise.resolve(
                    c.ZP.getMembers(_)
                        .filter((n) => {
                            var t;
                            let r = g.default.getUser(n.userId);
                            if ((null != r && (l[n.userId] = r), null == N || null == r || !(0, h.Y)(N, r))) return !1;
                            let a = ''.concat(null !== (t = n.nick) && void 0 !== t ? t : '', ' ').concat(null == r ? void 0 : r.username);
                            return s()(e.toLowerCase(), a.toLowerCase());
                        })
                        .map((e) => {
                            var n, t, r;
                            return {
                                value: e.userId,
                                label: null !== (r = null !== (t = e.nick) && void 0 !== t ? t : null === (n = l[e.userId]) || void 0 === n ? void 0 : n.username) && void 0 !== r ? r : ''
                            };
                        })
                );
            },
            [_, N]
        ),
        Z = r.useCallback(
            (e) => {
                if (null == _ || null == e) return null;
                let l = c.ZP.getMember(_, e.value);
                if (null == l) return null;
                let n = g.default.getUser(l.userId);
                if (null == n) return null;
                let r = n.getAvatarURL(_, 20);
                return (0, t.jsx)(i.Xo$, {
                    size: i.EFr.SIZE_20,
                    src: r,
                    'aria-hidden': !0
                });
            },
            [_]
        ),
        M = r.useCallback(
            (e) => {
                let { value: l } = e;
                L((e) => ({
                    ...e,
                    authorIds: null != l ? [l] : []
                }));
            },
            [L]
        ),
        S = r.useCallback(
            (e) => {
                L((l) => ({
                    ...l,
                    message: null != e ? e : ''
                }));
            },
            [L]
        ),
        T = r.useCallback(() => {
            b(null), I();
        }, [b, I]),
        P = null !== (l = z.authorIds[0]) && void 0 !== l ? l : '',
        w = (0, o.e7)([c.ZP], () => (null != _ ? c.ZP.getMember(_, P) : null)),
        R = (0, o.e7)([g.default], () => (null != w ? g.default.getUser(w.userId) : null)),
        y = null !== (a = null !== (n = null == w ? void 0 : w.nick) && void 0 !== n ? n : null == R ? void 0 : R.username) && void 0 !== a ? a : '',
        G = null == (k = z).message || 0 === k.message.length ? null : null == k.authorIds || 0 === k.authorIds.length ? (k.message.length < d.ZR ? v.intl.formatToPlainString(v.t.Lj831N, { minLength: d.ZR }) : v.intl.string(v.t['4m7gtr'])) : k.message.length < d.ZR ? v.intl.formatToPlainString(v.t.TJGHXl, { minLength: d.ZR }) : null;
    return (0, t.jsxs)(i.Y0X, {
        transitionState: f,
        'aria-labelledby': C,
        children: [
            (0, t.jsxs)('div', {
                className: p.container,
                children: [
                    (0, t.jsx)(i.olH, {
                        className: p.closeButton,
                        onClick: I
                    }),
                    (0, t.jsxs)('div', {
                        className: p.formGroup,
                        children: [
                            (0, t.jsxs)(i.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: [v.intl.string(v.t.zNQfQ0), (0, t.jsx)(x.Z, {})]
                            }),
                            (0, t.jsx)(i.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: v.intl.string(v.t.mQHK2d)
                            }),
                            (0, t.jsx)(i.VcW, {
                                value: {
                                    value: P,
                                    label: y
                                },
                                renderOptionPrefix: Z,
                                options: B,
                                onChange: M,
                                filter: !1
                            })
                        ]
                    }),
                    (0, t.jsx)('div', { className: p.separator }),
                    (0, t.jsxs)('div', {
                        className: p.formGroup,
                        children: [
                            (0, t.jsx)(i.X6q, {
                                variant: 'heading-md/semibold',
                                color: 'header-primary',
                                children: v.intl.string(v.t.SHQcv7)
                            }),
                            (0, t.jsx)(i.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: v.intl.format(v.t['6biC4e'], {})
                            }),
                            (0, t.jsx)(i.Kx8, {
                                className: p.welcomeMessageTextInput,
                                placeholder: v.intl.string(v.t['kX/Sb2']),
                                value: z.message,
                                onChange: S,
                                maxLength: d.W4
                            }),
                            null != G
                                ? (0, t.jsx)(i.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-danger',
                                      children: G
                                  })
                                : null
                        ]
                    })
                ]
            }),
            (0, t.jsx)(i.mzw, {
                children: (0, t.jsxs)('div', {
                    className: p.footerButtons,
                    children: [
                        (0, t.jsx)('div', {
                            className: p.__invalid_leftButtons,
                            children: (0, t.jsx)(i.zxk, {
                                size: i.zxk.Sizes.SMALL,
                                look: i.zxk.Looks.LINK,
                                color: i.zxk.Colors.RED,
                                onClick: T,
                                children: v.intl.string(v.t.N86XcH)
                            })
                        }),
                        (0, t.jsxs)('div', {
                            className: p.rightButtons,
                            children: [
                                (0, t.jsx)(i.zxk, {
                                    onClick: I,
                                    size: i.zxk.Sizes.SMALL,
                                    look: i.zxk.Looks.LINK,
                                    color: i.zxk.Colors.PRIMARY,
                                    children: v.intl.string(v.t['ETE/oK'])
                                }),
                                (0, t.jsx)(i.zxk, {
                                    disabled: 0 === z.message.length || null != G,
                                    onClick: () => {
                                        b(z), I();
                                    },
                                    children: v.intl.string(v.t.R3BPHx)
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
