n.d(t, { default: () => h }), n(388685), n(781311);
var l = n(255367),
    s = n(73800),
    i = n(481060),
    r = n(749210),
    o = n(70097),
    a = n(910693),
    c = n(70956),
    u = n(5192),
    d = n(981631),
    x = n(388032),
    m = n(221166);
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
let k = b()[1].value,
    p = b()[0].value;
function h(e) {
    let { guildId: t, user: c, location: h, userIds: g, onBanMultiple: j, transitionState: C, onClose: f, canBulkBan: v = !1, modReportId: z } = e,
        [S, _] = s.useState(null != z ? p : k),
        [N, L] = s.useState(''),
        [R, Z] = s.useState(0),
        [I, w] = s.useState(!1),
        y = (0, a.sE)(t, {
            location: h,
            targetUserId: null == c ? void 0 : c.id,
            targets: g
        }),
        M = s.useCallback(() => {
            if (null != j) {
                if (!(null != g && (null == g ? void 0 : g.size) > 0 && v) || I) return;
                if ('' === N.trim() && !I) return void w(!0);
                j(t, [...g], S, N);
            } else {
                if (null == c) return;
                r.Z.banUser(t, null == c ? void 0 : c.id, S, N, z);
            }
            y(a.jQ.BAN), f();
        }, [j, y, f, g, v, I, N, t, S, c, z]),
        Y = s.useCallback((e) => {
            _(e);
        }, []),
        A = s.useCallback((e) => {
            let { value: t } = e;
            L(t), w(!1);
        }, []),
        O = s.useCallback(
            (e) => {
                L(e), I && w(!1);
            },
            [I]
        ),
        U = s.useCallback(() => {
            L(''), Z(1);
        }, []),
        B = s.useCallback(() => {
            Z(0);
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
            if (null != j && null != g) return x.intl.formatToPlainString(x.t.HVJexc, { count: null == g ? void 0 : g.size });
            if (null == c) return '';
            let e = u.ZP.getName(t, null, c);
            return x.intl.formatToPlainString(x.t.jeKpoq, { username: '@'.concat(e) });
        })();
    return (0, l.jsxs)(i.Y0X, {
        transitionState: C,
        parentComponent: 'BanConfirm',
        children: [
            (0, l.jsx)(i.xBx, {
                separator: !1,
                children: (0, l.jsx)(i.X6q, {
                    variant: 'heading-xl/semibold',
                    children: J
                })
            }),
            (0, l.jsxs)(i.hzk, {
                className: m.modalContent,
                children: [
                    (0, l.jsxs)(o.Z, {
                        autoPlay: !0,
                        loop: !0,
                        width: 400,
                        children: [
                            (0, l.jsx)('source', {
                                src: n(942314),
                                type: 'video/webm'
                            }),
                            (0, l.jsx)('source', {
                                src: n(888322),
                                type: 'video/mp4'
                            }),
                            (0, l.jsx)('img', {
                                alt: '',
                                src: n(860724)
                            })
                        ]
                    }),
                    (0, l.jsxs)(i.xJW, {
                        title: x.intl.string(x.t.w4Ivys),
                        children: [
                            I &&
                                (0, l.jsx)(i.kzN, {
                                    className: m.error,
                                    children: x.intl.string(x.t.IrYX19)
                                }),
                            (0, l.jsx)(i.qBt, {
                                steps: [0, 1],
                                step: R,
                                children: ((e) => {
                                    switch (R) {
                                        case 0:
                                            return (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                    (0, l.jsx)(i.FXm, {
                                                        value: N,
                                                        options: e,
                                                        onChange: A,
                                                        radioItemClassName: m.radioItemStyles
                                                    }),
                                                    (0, l.jsxs)(i.P3F, {
                                                        onClick: U,
                                                        className: m.banReasonOtherClickable,
                                                        children: [
                                                            (0, l.jsx)(i.Text, {
                                                                variant: 'text-md/medium',
                                                                color: 'none',
                                                                children: x.intl.string(x.t.BcZTKi)
                                                            }),
                                                            (0, l.jsx)(i.Fbu, {
                                                                color: 'currentColor',
                                                                size: 'xs'
                                                            })
                                                        ]
                                                    })
                                                ]
                                            });
                                        case 1:
                                            return (0, l.jsx)(i.Kx8, {
                                                maxLength: d.GNZ,
                                                onChange: O,
                                                value: N,
                                                rows: 5,
                                                autoFocus: !0
                                            });
                                    }
                                })(E)
                            })
                        ]
                    }),
                    (0, l.jsx)(i.xJW, {
                        title: x.intl.string(x.t['8l3W09']),
                        children: (0, l.jsx)(i.q4e, {
                            options: b(),
                            value: S,
                            onChange: Y
                        })
                    })
                ]
            }),
            (() => {
                switch (R) {
                    case 0:
                        return (0, l.jsxs)(i.mzw, {
                            className: m.footer,
                            children: [
                                (0, l.jsx)(i.zxk, {
                                    type: 'button',
                                    look: i.zxk.Looks.LINK,
                                    color: i.zxk.Colors.PRIMARY,
                                    onClick: f,
                                    children: x.intl.string(x.t['ETE/oK'])
                                }),
                                (0, l.jsx)(i.zxk, {
                                    type: 'submit',
                                    color: i.zxk.Colors.RED,
                                    size: i.zxk.Sizes.SMALL,
                                    onClick: M,
                                    children: x.intl.string(x.t['5MBJ5O'])
                                })
                            ]
                        });
                    case 1:
                        return (0, l.jsxs)(i.mzw, {
                            className: m.footerStepped,
                            children: [
                                (0, l.jsx)(i.zxk, {
                                    className: m.cancel,
                                    innerClassName: m.cancel,
                                    type: 'button',
                                    look: i.zxk.Looks.LINK,
                                    color: i.zxk.Colors.PRIMARY,
                                    size: i.zxk.Sizes.SMALL,
                                    onClick: B,
                                    children: x.intl.string(x.t['13/7kZ'])
                                }),
                                (0, l.jsx)(i.zxk, {
                                    type: 'submit',
                                    color: i.zxk.Colors.RED,
                                    size: i.zxk.Sizes.SMALL,
                                    onClick: M,
                                    children: x.intl.string(x.t['5MBJ5O'])
                                })
                            ]
                        });
                }
            })()
        ]
    });
}
