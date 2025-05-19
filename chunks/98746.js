l.d(t, { default: () => p }), l(388685), l(781311);
var n = l(255367),
    s = l(73800),
    i = l(481060),
    r = l(749210),
    o = l(70097),
    a = l(910693),
    c = l(70956),
    u = l(5192),
    d = l(981631),
    x = l(388032),
    m = l(918758);
function b() {
    return [
        {
            value: 0,
            label: x.intl.string(x.t['4obaMT'])
        },
        {
            value: +c.Z.Seconds.HOUR,
            label: x.intl.string(x.t.RKpitb)
        },
        {
            value: 6 * c.Z.Seconds.HOUR,
            label: x.intl.string(x.t['8WfJZ2'])
        },
        {
            value: 12 * c.Z.Seconds.HOUR,
            label: x.intl.string(x.t.p1up7u)
        },
        {
            value: +c.Z.Seconds.DAY,
            label: x.intl.string(x.t.XuVkkJ)
        },
        {
            value: 3 * c.Z.Seconds.DAY,
            label: x.intl.string(x.t.gMcDS0)
        },
        {
            value: 7 * c.Z.Seconds.DAY,
            label: x.intl.string(x.t.FA7IUl)
        }
    ];
}
let k = b()[1].value;
function p(e) {
    let { guildId: t, user: c, location: p, userIds: h, onBanMultiple: g, transitionState: j, onClose: C, canBulkBan: f = !1, modReportId: v } = e,
        [z, S] = s.useState(k),
        [_, N] = s.useState(''),
        [L, R] = s.useState(0),
        [Z, I] = s.useState(!1),
        w = (0, a.sE)(t, {
            location: p,
            targetUserId: null == c ? void 0 : c.id,
            targets: h
        }),
        y = s.useCallback(() => {
            if (null != g) {
                if (!(null != h && (null == h ? void 0 : h.size) > 0 && f) || Z) return;
                if ('' === _.trim() && !Z) return void I(!0);
                g(t, [...h], z, _);
            } else {
                if (null == c) return;
                r.Z.banUser(t, null == c ? void 0 : c.id, z, _, v);
            }
            w(a.jQ.BAN), C();
        }, [g, w, C, h, f, Z, _, t, z, c, v]),
        M = s.useCallback((e) => {
            S(e);
        }, []),
        Y = s.useCallback((e) => {
            let { value: t } = e;
            N(t), I(!1);
        }, []),
        A = s.useCallback(
            (e) => {
                N(e), Z && I(!1);
            },
            [Z]
        ),
        O = s.useCallback(() => {
            N(''), R(1);
        }, []),
        U = s.useCallback(() => {
            R(0);
        }, []),
        E = [
            {
                name: x.intl.string(x.t.tamLhY),
                value: x.intl.string(x.t.tamLhY)
            },
            {
                name: x.intl.string(x.t.UmxjMj),
                value: x.intl.string(x.t.UmxjMj)
            },
            {
                name: x.intl.string(x.t.EXY1d3),
                value: x.intl.string(x.t.EXY1d3)
            }
        ],
        J = (() => {
            if (null != g && null != h) return x.intl.formatToPlainString(x.t.HVJexc, { count: null == h ? void 0 : h.size });
            if (null == c) return '';
            let e = u.ZP.getName(t, null, c);
            return x.intl.formatToPlainString(x.t.jeKpoq, { username: '@'.concat(e) });
        })();
    return (0, n.jsxs)(i.Y0X, {
        transitionState: j,
        children: [
            (0, n.jsx)(i.xBx, {
                separator: !1,
                children: (0, n.jsx)(i.X6q, {
                    variant: 'heading-xl/semibold',
                    children: J
                })
            }),
            (0, n.jsxs)(i.hzk, {
                className: m.modalContent,
                children: [
                    (0, n.jsxs)(o.Z, {
                        autoPlay: !0,
                        loop: !0,
                        width: 400,
                        children: [
                            (0, n.jsx)('source', {
                                src: l(942314),
                                type: 'video/webm'
                            }),
                            (0, n.jsx)('source', {
                                src: l(888322),
                                type: 'video/mp4'
                            }),
                            (0, n.jsx)('img', {
                                alt: '',
                                src: l(860724)
                            })
                        ]
                    }),
                    (0, n.jsxs)(i.xJW, {
                        title: x.intl.string(x.t.w4Ivys),
                        children: [
                            Z &&
                                (0, n.jsx)(i.kzN, {
                                    className: m.error,
                                    children: x.intl.string(x.t.IrYX19)
                                }),
                            (0, n.jsx)(i.qBt, {
                                steps: [0, 1],
                                step: L,
                                children: ((e) => {
                                    switch (L) {
                                        case 0:
                                            return (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                    (0, n.jsx)(i.FXm, {
                                                        value: _,
                                                        options: e,
                                                        onChange: Y,
                                                        radioItemClassName: m.radioItemStyles
                                                    }),
                                                    (0, n.jsxs)(i.P3F, {
                                                        onClick: O,
                                                        className: m.banReasonOtherClickable,
                                                        children: [
                                                            (0, n.jsx)(i.Text, {
                                                                variant: 'text-md/medium',
                                                                color: 'none',
                                                                children: x.intl.string(x.t.BcZTKi)
                                                            }),
                                                            (0, n.jsx)(i.Fbu, {
                                                                color: 'currentColor',
                                                                size: 'xs'
                                                            })
                                                        ]
                                                    })
                                                ]
                                            });
                                        case 1:
                                            return (0, n.jsx)(i.Kx8, {
                                                maxLength: d.GNZ,
                                                onChange: A,
                                                value: _,
                                                rows: 5,
                                                autoFocus: !0
                                            });
                                    }
                                })(E)
                            })
                        ]
                    }),
                    (0, n.jsx)(i.xJW, {
                        title: x.intl.string(x.t['8l3W09']),
                        children: (0, n.jsx)(i.q4e, {
                            options: b(),
                            value: z,
                            onChange: M
                        })
                    })
                ]
            }),
            (() => {
                switch (L) {
                    case 0:
                        return (0, n.jsxs)(i.mzw, {
                            className: m.footer,
                            children: [
                                (0, n.jsx)(i.zxk, {
                                    type: 'button',
                                    look: i.zxk.Looks.LINK,
                                    color: i.zxk.Colors.PRIMARY,
                                    onClick: C,
                                    children: x.intl.string(x.t['ETE/oK'])
                                }),
                                (0, n.jsx)(i.zxk, {
                                    type: 'submit',
                                    color: i.zxk.Colors.RED,
                                    size: i.zxk.Sizes.SMALL,
                                    onClick: y,
                                    children: x.intl.string(x.t['5MBJ5O'])
                                })
                            ]
                        });
                    case 1:
                        return (0, n.jsxs)(i.mzw, {
                            className: m.footerStepped,
                            children: [
                                (0, n.jsx)(i.zxk, {
                                    className: m.cancel,
                                    innerClassName: m.cancel,
                                    type: 'button',
                                    look: i.zxk.Looks.LINK,
                                    color: i.zxk.Colors.PRIMARY,
                                    size: i.zxk.Sizes.SMALL,
                                    onClick: U,
                                    children: x.intl.string(x.t['13/7kZ'])
                                }),
                                (0, n.jsx)(i.zxk, {
                                    type: 'submit',
                                    color: i.zxk.Colors.RED,
                                    size: i.zxk.Sizes.SMALL,
                                    onClick: y,
                                    children: x.intl.string(x.t['5MBJ5O'])
                                })
                            ]
                        });
                }
            })()
        ]
    });
}
